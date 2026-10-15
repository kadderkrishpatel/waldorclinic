import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

// In-memory, per server instance. Good enough to stop a basic bot hammering
// the forms; put Cloudflare rate limiting in front for stronger protection.
const hits = new Map<string, number[]>();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }

  recent.push(now);
  hits.set(ip, recent);

  // Drop stale entries so the map doesn't grow forever.
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }

  return false;
}

function allowedHosts(req: NextRequest): Set<string> {
  const hosts = new Set<string>();
  const add = (value: string | null | undefined) => {
    if (value) hosts.add(value.toLowerCase());
  };

  add(req.headers.get("host"));
  add(req.headers.get("x-forwarded-host"));

  try {
    const siteHost = new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com",
    ).host;
    add(siteHost);
    add(siteHost.startsWith("www.") ? siteHost.slice(4) : `www.${siteHost}`);
  } catch {
    // ignore a malformed site URL
  }

  return hosts;
}

function isAllowedOrigin(req: NextRequest): boolean {
  const source = req.headers.get("origin") ?? req.headers.get("referer");

  if (!source) {
    // Browsers always send one of these on a form POST.
    return process.env.NODE_ENV !== "production";
  }

  try {
    return allowedHosts(req).has(new URL(source).host.toLowerCase());
  } catch {
    return false;
  }
}

/**
 * Returns a response to send back if the request should be blocked, or null
 * if it is fine to continue. A filled honeypot gets a fake success so bots
 * don't learn they were detected.
 */
export function guardFormRequest(
  req: NextRequest,
  body: unknown,
): NextResponse | null {
  if (!isAllowedOrigin(req)) {
    return NextResponse.json(
      { success: false, message: "Request not allowed." },
      { status: 403 },
    );
  }

  const honeypot =
    body && typeof body === "object"
      ? (body as Record<string, unknown>).website
      : undefined;

  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Please try again in a few minutes.",
      },
      { status: 429 },
    );
  }

  return null;
}
