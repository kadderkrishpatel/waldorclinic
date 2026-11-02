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
 * Reads the public follower / post counts from the profile's og:description
 * ("6,054 Followers, 2 Following, 69 Posts - ..."). Cached with ISR; returns
 * `fallback` on any failure so the page never breaks.
 */
export async function getInstagramStats(
  username: string,
  fallback: InstagramStats,
): Promise<InstagramStats> {
  try {
    const res = await fetch(`https://www.instagram.com/${username}/`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return fallback;

    const html = await res.text();
    const desc = html.match(
      /<meta[^>]+property="og:description"[^>]+content="([^"]*)"/i,
    )?.[1];
    if (!desc) return fallback;

    const followers = desc.match(/([\d.,]+[KkMm]?)\s+Followers/i)?.[1];
    const posts = desc.match(/([\d.,]+[KkMm]?)\s+Posts/i)?.[1];
    const f = followers ? parseCount(followers) : null;
    const p = posts ? parseCount(posts) : null;
    if (f === null || p === null) return fallback;

    return { followers: formatCount(f), posts: formatCount(p) };
  } catch {
    return fallback;
  }
}
