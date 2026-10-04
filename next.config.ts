import type { NextConfig } from "next";
import { categoryRoutes } from "./src/lib/blogRoutes";

const nextConfig: NextConfig = {
  // /<category> shows the blog listing pre-filtered to that category and
  // /<category>/<slug> shows the blog detail page (URL stays as typed)
  async rewrites() {
    return Object.entries(categoryRoutes).flatMap(([category, prefix]) => [
      {
        source: `/${prefix}`,
        destination: `/blog?category=${encodeURIComponent(category)}`,
      },
      {
        source: `/${prefix}/:slug`,
        destination: "/blog/:slug",
      },
    ]);
  },
  poweredByHeader: false,
  images: {
    // Only optimise images from our own WordPress / Gravatar, never arbitrary hosts.
    remotePatterns: [
      { protocol: "https", hostname: "waldor7.wordpress.com" },
      { protocol: "https", hostname: "*.wp.com" },
      { protocol: "https", hostname: "secure.gravatar.com" },
    ],
    // Optimised images are re-used for 30 days instead of 60 seconds.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        // Local images / videos: cache in the browser and CDN for 30 days.
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
