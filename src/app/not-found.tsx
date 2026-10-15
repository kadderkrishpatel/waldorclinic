import type { Metadata } from "next";
import NotFoundContent from "@/src/components/common/StatusPage/NotFoundContent";
import WebsiteLayout from "@/src/app/(website)/layout";

export const metadata: Metadata = {
  title: "Page not found | WALDOR CLINIC",
  description: "The page you are looking for could not be found.",
};

/**
 * Root-level 404 for URLs that match no route at all. It renders outside the
 * (website) layout, so we wrap it in that layout to keep header + footer.
 * (notFound() calls inside (website) use ./(website)/not-found.tsx instead.)
 */
export default function NotFound() {
  return (
    <WebsiteLayout>
      <NotFoundContent />
    </WebsiteLayout>
  );
}
