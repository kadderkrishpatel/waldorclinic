export interface InstagramStats {
  posts: string;
  followers: string;
}

const REVALIDATE_SECONDS = 60 * 60 * 6; // refresh at most every 6 hours

/** 6054 -> "6.1K", 12400 -> "12.4K", 1500000 -> "1.5M", 69 -> "69" */
function formatCount(n: number): string {
  const fmt = (value: number, suffix: string) =>
    `${value.toFixed(1).replace(/\.0$/, "")}${suffix}`;
  if (n >= 1_000_000) return fmt(n / 1_000_000, "M");
  if (n >= 1_000) return fmt(n / 1_000, "K");
  return String(n);
}

function parseCount(raw: string): number | null {
  const m = raw.trim().replace(/,/g, "").match(/^([\d.]+)\s*([KkMm])?$/);
  if (!m) return null;
  const base = parseFloat(m[1]);
  if (Number.isNaN(base)) return null;
  const mult = m[2]?.toLowerCase() === "m" ? 1_000_000 : m[2] ? 1_000 : 1;
  return Math.round(base * mult);
}

/**
 * Official Instagram Graph API (Business / Creator account). Works from any
 * server including Vercel. Needs INSTAGRAM_ACCESS_TOKEN + INSTAGRAM_USER_ID.
 */
async function fetchFromGraphApi(): Promise<InstagramStats | null> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;
  if (!token || !userId) return null;

  try {
    const url = new URL(`https://graph.facebook.com/v21.0/${userId}`);
    url.searchParams.set("fields", "followers_count,media_count");
    url.searchParams.set("access_token", token);

    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error("[instagramStats] Graph API error", res.status);
      return null;
    }

    const data = (await res.json()) as {
      followers_count?: number;
      media_count?: number;
    };
    if (
      typeof data.followers_count !== "number" ||
      typeof data.media_count !== "number"
    ) {
      return null;
    }

    return {
      followers: formatCount(data.followers_count),
      posts: formatCount(data.media_count),
    };
  } catch (error) {
    console.error("[instagramStats] Graph API request failed", error);
    return null;
  }
}

/** Best-effort read of the public profile page (often blocked on cloud hosts). */
async function fetchFromPublicPage(
  username: string,
): Promise<InstagramStats | null> {
  try {
    const res = await fetch(`https://www.instagram.com/${username}/`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;

    const html = await res.text();
    const desc = html.match(
      /<meta[^>]+property="og:description"[^>]+content="([^"]*)"/i,
    )?.[1];
    if (!desc) return null;

    const followers = desc.match(/([\d.,]+[KkMm]?)\s+Followers/i)?.[1];
    const posts = desc.match(/([\d.,]+[KkMm]?)\s+Posts/i)?.[1];
    const f = followers ? parseCount(followers) : null;
    const p = posts ? parseCount(posts) : null;
    if (f === null || p === null) return null;

    return { followers: formatCount(f), posts: formatCount(p) };
  } catch {
    return null;
  }
}

/**
 * Live follower / post counts, cached (ISR) for 6 hours.
 * Order: Graph API (if configured) -> public page -> `fallback`.
 */
export async function getInstagramStats(
  username: string,
  fallback: InstagramStats,
): Promise<InstagramStats> {
  return (
    (await fetchFromGraphApi()) ??
    (await fetchFromPublicPage(username)) ??
    fallback
  );
}
