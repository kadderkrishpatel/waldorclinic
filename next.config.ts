import type { NextConfig } from "next";
import { categoryRoutes } from "./src/lib/blogRoutes";

const isDev = process.env.NODE_ENV === "development";

// Optional CDN for /assets (images, videos, fonts) — allowed in addition to 'self'.
const assetOrigin = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_ASSET_URL ?? "").origin;
  } catch {
    return "";
  }
})();

// WordPress host for blog images, taken from the same env var the blog service
// uses so a domain change only needs the env updated.
const wordpressHostname = (() => {
  try {
    return new URL(process.env.NEXT_PUBLIC_WORDPRESS_BLOGS_URL ?? "").hostname;
  } catch {
    return "waldor7.wordpress.com";
  }
})();

/**
 * Content Security Policy without nonces, so pages stay statically cached.
 * 'unsafe-inline' is required for Next.js' inline bootstrap scripts and the
 * inline styles used by Swiper / next/image. Third-party origins are limited
 * to what the site really embeds: Google Maps (contact page) and
 * YouTube / Vimeo videos that can appear inside WordPress blog posts.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // Blog HTML can reference WordPress / Gravatar images directly.
  "img-src 'self' data: blob: https:",
  `media-src 'self' blob: ${assetOrigin}`.trim(),
  `font-src 'self' data: ${assetOrigin}`.trim(),
  // Google Ads / Analytics (gtag.js) send their measurement requests from here.
  `connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com${isDev ? " ws: wss:" : ""}`,
  "frame-src https://www.google.com https://td.doubleclick.net https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

/**
 * Redirect map from the old website (and the earlier URLs of this site) to the
 * current URLs, so bookmarks and search results never end in a 404.
 * Source: "Old URL / New URL" redirect sheet. Paths that stay the same in the
 * sheet ("/", "/about-us", "/contact-us", "/careers") need no redirect.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  // Old home page variants -> Home
  { source: "/home", destination: "/" },
  { source: "/home-v2", destination: "/" },
  { source: "/home-1", destination: "/" },
  { source: "/cart", destination: "/" },
  // Old menu / treatment pages -> new treatment pages
  { source: "/menu", destination: "/treatments/waldor-signature" },
  { source: "/treatments-1", destination: "/treatments/waldor-signature" },
  { source: "/cocktail-menu", destination: "/treatments/hydra-glass" },
  { source: "/body-menu", destination: "/treatments/body-treatment" },
  { source: "/injectables-menu", destination: "/treatments/injectables" },
  { source: "/hair-growth", destination: "/treatments/hair-growth" },
  { source: "/treatments", destination: "/treatments/waldor-signature" },
  // Old appointment page -> Contact
  { source: "/appointments", destination: "/contact-us" },
  // Earlier URLs of this site (renamed to match the old website's URLs)
  { source: "/about", destination: "/about-us" },
  { source: "/contact", destination: "/contact-us" },
  { source: "/faq", destination: "/faqs" },
  { source: "/faq/:category", destination: "/faqs/:category" },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((route) => ({ ...route, permanent: true }));
  },
  // /<category> shows the blog listing pre-filtered to that category and
  // /<category>/<slug> shows the blog detail page (URL stays as typed)
  async rewrites() {
    return [
      // FAQ category filters (/faqs/concerns ...) render the FAQ page
      {
        source: "/faqs/:category(treatments|concerns|clinic)",
        destination: "/faqs",
      },
      ...Object.entries(categoryRoutes).flatMap(([category, prefix]) => [
        {
          source: `/${prefix}`,
          destination: `/blog?category=${encodeURIComponent(category)}`,
        },
        {
          source: `/${prefix}/:slug`,
          destination: "/blog/:slug",
        },
      ]),
    ];
  },
  poweredByHeader: false,
  images: {
    // Only optimise images from our own WordPress / Gravatar, never arbitrary hosts.
    remotePatterns: [
      { protocol: "https", hostname: wordpressHostname },
      { protocol: "https", hostname: "*.wp.com" },
      { protocol: "https", hostname: "secure.gravatar.com" },
    ],
    // Optimised images are re-used for 30 days instead of 60 seconds.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
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
