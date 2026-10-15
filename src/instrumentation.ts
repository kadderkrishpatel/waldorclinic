const REQUIRED_ENV = [
  "DATABASE_URL",
  "NEXT_PUBLIC_WORDPRESS_BLOGS_URL",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
] as const;

/**
 * Runs once when the server starts. Logs missing settings so a bad deploy is
 * spotted immediately instead of when the first form submission fails.
 * It only warns — it never stops the app from starting.
 */
export function register() {
  const missing = REQUIRED_ENV.filter((name) => !process.env[name]?.trim());

  if (missing.length > 0) {
    console.error(
      `[env] Missing required environment variables: ${missing.join(", ")}. ` +
        "See .env.example.",
    );
  }
}
