"use client";

import { useEffect } from "react";
import StatusPage from "@/src/components/common/StatusPage/StatusPage";

/**
 * Catches runtime errors inside any website page (e.g. WordPress being down).
 * It renders inside the website layout, so header and footer stay visible.
 */
export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <StatusPage
      code="500"
      eyebrow="Something went wrong"
      heading={{ before: "We hit a", highlight: "small hiccup" }}
      description="This page couldn't load right now. It's usually temporary, so please try again in a moment or head back to the homepage."
      actions={[
        { label: "Try again", onClick: () => unstable_retry() },
        { label: "Back to home", href: "/", variant: "secondary" },
      ]}
      note={error.digest ? `Reference: ${error.digest}` : undefined}
    />
  );
}
