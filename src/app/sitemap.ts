import type { MetadataRoute } from "next";
import { getBlogPath } from "@/src/lib/blogRoutes";
import { getBlogs } from "@/src/services/blogs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/doctors", priority: 0.6, changeFrequency: "monthly" },
  { path: "/products", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.7, changeFrequency: "daily" },
  { path: "/treatments/waldor-signature", priority: 0.9, changeFrequency: "monthly" },
  { path: "/treatments/hydra-glass", priority: 0.9, changeFrequency: "monthly" },
  { path: "/treatments/body-treatment", priority: 0.9, changeFrequency: "monthly" },
  { path: "/treatments/injectables", priority: 0.9, changeFrequency: "monthly" },
  { path: "/treatments/hair-growth", priority: 0.9, changeFrequency: "monthly" },
  { path: "/concerns/acne", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concerns/acne-scarring", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concerns/dull-skin", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concerns/loose-skin", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concerns/premature-aging", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concerns/uneven-skin-tone", priority: 0.7, changeFrequency: "monthly" },
  { path: "/concerns/wrinkles", priority: 0.7, changeFrequency: "monthly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const { blogs } = await getBlogs({ page: 1, perPage: 100 });
    blogEntries = blogs.map((blog) => ({
      url: `${SITE_URL}${getBlogPath(blog.category, blog.slug)}`,
      lastModified: new Date(blog.publishedAt || Date.now()),
      changeFrequency: "monthly",
      priority: 0.6,
    }));
  } catch {
    // WordPress unreachable at build time — ship the static routes rather than failing the build.
  }

  return [...staticEntries, ...blogEntries];
}
