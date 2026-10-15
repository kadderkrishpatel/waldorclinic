"use client";

import "./globals.css";
import { Hanken_Grotesk, Fraunces } from "next/font/google";
import StatusPage from "@/src/components/common/StatusPage/StatusPage";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-hanken",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "WONK"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

/**
 * Last-resort error screen for failures in the root layout itself. It
 * replaces the whole document, so it brings its own <html>, <body> and fonts.
 */
export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en" className={`${hanken.variable} ${fraunces.variable}`}>
      <body className="mx-auto max-w-[1920px]">
        <title>Something went wrong | WALDOR CLINIC</title>
        <StatusPage
          code="500"
          eyebrow="Something went wrong"
          heading={{ before: "We hit a", highlight: "small hiccup" }}
          description="Waldor Clinic couldn't load right now. Please try again in a moment."
          actions={[
            { label: "Try again", onClick: () => unstable_retry() },
            { label: "Back to home", href: "/", variant: "secondary" },
          ]}
          note={error.digest ? `Reference: ${error.digest}` : undefined}
        />
      </body>
    </html>
  );
}
