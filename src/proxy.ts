import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";
const PRODUCTION_HOST = new URL(SITE_URL).hostname;

/**
 * Adds a noindex header on every host except the real production domain —
 * covers the Netlify staging subdomain and deploy previews so they never
 * show up in Google while the live site (waldorclinic.com) indexes normally.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  // Firebase Hosting forwards to Cloud Run with the run.app host, and keeps the
  // domain the visitor typed in x-forwarded-host.
  const hostname =
    (request.headers.get("x-forwarded-host") ?? request.headers.get("host"))
      ?.split(",")[0]
      ?.trim()
      .split(":")[0] ?? "";
  const isProduction =
    hostname === PRODUCTION_HOST || hostname === `www.${PRODUCTION_HOST}`;

  if (!isProduction) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
