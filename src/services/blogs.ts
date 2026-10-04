import {
  Blog,
  BlogCategory,
  BlogsResponse,
} from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.types";
import { asset } from "@/src/lib/assets";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_BLOGS_URL || "";

/**
 * WordPress.com's public API gateway occasionally answers slowly or drops a
 * request. A single retry after a short delay absorbs that without visitors
 * ever seeing "Failed to fetch blogs". Successful responses are also cached
 * for a minute (see callers' `next.revalidate`) so most page loads don't hit
 * WordPress.com at all.
 */
async function fetchWithRetry(
  url: string,
  init: RequestInit & { next?: { revalidate?: number } },
  retries = 1,
): Promise<Response> {
  try {
    const response = await fetch(url, init);
    if (!response.ok && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return fetchWithRetry(url, init, retries - 1);
    }
    return response;
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      return fetchWithRetry(url, init, retries - 1);
    }
    throw error;
  }
}

/** Used when a WordPress post has no featured image, so cards never render broken. */
const FALLBACK_BLOG_IMAGE = asset("/assets/waldor/blog/blog-1.jpg");

/**
 * WordPress.com-hosted sites (e.g. mysite.wordpress.com) don't expose
 * /wp-json directly — they're only reachable through WordPress.com's
 * public API gateway. Self-hosted WordPress sites use /wp-json directly.
 */
function getApiBase(): string {
  try {
    const hostname = new URL(WORDPRESS_URL).hostname;
    if (hostname.endsWith(".wordpress.com")) {
      return `https://public-api.wordpress.com/wp/v2/sites/${hostname}`;
    }
  } catch {
    // WORDPRESS_URL is empty or invalid — handled by the empty checks below
  }

  return `${WORDPRESS_URL}/wp-json/wp/v2`;
}

interface GetBlogsParams {
  page?: number;
  perPage?: number;
  category?: string;
}

interface WordPressTerm {
  id: number;
  name: string;
  slug: string;
  count?: number;
  taxonomy?: string;
}

interface WordPressPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: { source_url: string }[];
    "wp:term"?: WordPressTerm[][];
    author?: { name: string; avatar_urls?: Record<string, string> }[];
  };
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  mdash: "—",
  ndash: "–",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
  "#8216": "‘",
  "#8217": "’",
  "#8220": "“",
  "#8221": "”",
  "#8211": "–",
  "#8212": "—",
  "#8230": "…",
};

function decodeHtmlEntities(text: string): string {
  return text.replace(/&(#\d+|[a-zA-Z]+);/g, (match, entity) => {
    if (NAMED_ENTITIES[entity]) return NAMED_ENTITIES[entity];

    if (entity.startsWith("#")) {
      const code = Number(entity.slice(1));
      if (!Number.isNaN(code)) return String.fromCharCode(code);
    }

    return match;
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

function estimateReadTime(html: string): string {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} MIN READ`;
}

/** WordPress returns raw ISO dates ("2026-09-02T17:23:10") — format for display */
function formatPublishedDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function mapCategory(term: WordPressTerm): BlogCategory {
  return {
    id: term.id,
    name: decodeHtmlEntities(term.name),
    slug: term.slug,
    count: term.count ?? 0,
  };
}

/**
 * Standard WordPress posts only have one title field. The design pairs a
 * main headline with an italic subtitle, so authors write it as
 * "Main headline | italic subtitle" in the WP title field and we split on
 * the pipe here. No pipe means no subtitle — both are valid.
 */
function splitTitle(rawTitle: string): { title: string; subtitle?: string } {
  const decoded = decodeHtmlEntities(rawTitle);
  const [title, ...rest] = decoded.split("|").map((part) => part.trim());
  const subtitle = rest.join("|").trim();

  return { title, subtitle: subtitle || undefined };
}

function mapPost(post: WordPressPost): Blog {
  const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
  const terms = (post._embedded?.["wp:term"] ?? []).flat();
  const categories = terms.filter((term) => term.taxonomy === "category");
  const author = post._embedded?.author?.[0];
  const { title, subtitle } = splitTitle(post.title?.rendered ?? "");

  return {
    id: post.id,
    slug: post.slug,
    title,
    subtitle,
    category: categories[0]?.name
      ? decodeHtmlEntities(categories[0].name)
      : "General",
    image: featuredMedia?.source_url ?? FALLBACK_BLOG_IMAGE,
    bannerImage: featuredMedia?.source_url ?? FALLBACK_BLOG_IMAGE,
    excerpt: decodeHtmlEntities(stripHtml(post.excerpt?.rendered ?? "")),
    readTime: estimateReadTime(post.content?.rendered ?? ""),
    author: author?.name ?? "Waldor Clinic",
    authorImage: author?.avatar_urls?.["96"] ?? "",
    publishedAt: formatPublishedDate(post.date),
    content: post.content?.rendered ?? "",
  };
}

/** Resolve a display category ("Glass Skin") to its WordPress category ID via slug match */
async function resolveCategoryId(category: string): Promise<number | null> {
  const slug = slugify(category);

  const response = await fetchWithRetry(
    `${getApiBase()}/categories?slug=${encodeURIComponent(slug)}`,
    { next: { revalidate: 60 } },
  );

  if (!response.ok) return null;

  const matches: WordPressTerm[] = await response.json();
  return matches[0]?.id ?? null;
}

/** Fetch blogs from WordPress (standard WP REST API v2) */
export async function getBlogs({
  page = 1,
  perPage = 6,
  category = "All",
}: GetBlogsParams = {}): Promise<BlogsResponse> {
  if (!WORDPRESS_URL) {
    throw new Error("WORDPRESS_URL is not configured");
  }

  const params = new URLSearchParams();
  params.set("page", String(page));
  params.set("per_page", String(perPage));
  params.set("_embed", "true");

  if (category && category.toLowerCase() !== "all") {
    const categoryId = await resolveCategoryId(category);

    if (!categoryId) {
      return {
        blogs: [],
        categories: [],
        pagination: {
          page,
          perPage,
          total: 0,
          totalPages: 1,
          hasNextPage: false,
          hasPreviousPage: false,
        },
      };
    }

    params.set("categories", String(categoryId));
  }

  const url = `${getApiBase()}/posts?${params.toString()}`;
  const response = await fetchWithRetry(url, { next: { revalidate: 60 } });

  if (!response.ok) {
    throw new Error(`WordPress blog API failed: ${response.status}`);
  }

  const posts: WordPressPost[] = await response.json();
  const total = Number(
    response.headers.get("X-WP-Total") ?? posts.length,
  );
  const totalPages = Number(response.headers.get("X-WP-TotalPages") ?? 1);

  return {
    blogs: posts.map(mapPost),
    categories: [],
    pagination: {
      page,
      perPage,
      total,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
    },
  };
}

/** Fetch all WordPress blog categories (standard WP REST API v2) */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  if (!WORDPRESS_URL) {
    throw new Error("WORDPRESS_URL is not configured");
  }

  const response = await fetchWithRetry(
    `${getApiBase()}/categories?per_page=100&hide_empty=true`,
    { next: { revalidate: 60 } },
  );

  if (!response.ok) {
    throw new Error(`WordPress category API failed: ${response.status}`);
  }

  const categories: WordPressTerm[] = await response.json();
  return categories.map(mapCategory);
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  if (!WORDPRESS_URL) {
    throw new Error("WORDPRESS_URL is not configured");
  }

  const response = await fetchWithRetry(
    `${getApiBase()}/posts?slug=${encodeURIComponent(slug)}&_embed=true`,
    { next: { revalidate: 60 } },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch blog: ${response.status}`);
  }

  const posts: WordPressPost[] = await response.json();
  if (!posts.length) return null;

  return mapPost(posts[0]);
}
