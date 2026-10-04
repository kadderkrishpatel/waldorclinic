/**
 * Categories that get their own URL prefix instead of /blog.
 * e.g. { Press: "press" } -> /press (listing) and /press/<slug> (detail).
 * Both are served by the existing /blog pages through rewrites in next.config.ts.
 * To add a category, add one line here.
 */
export const categoryRoutes: Record<string, string> = {
  Press: "press",
};

export function getBlogPath(category: string | undefined, slug: string) {
  const prefix = Object.entries(categoryRoutes).find(
    ([name]) => name.toLowerCase() === category?.toLowerCase(),
  )?.[1];

  return `/${prefix ?? "blog"}/${slug}`;
}
