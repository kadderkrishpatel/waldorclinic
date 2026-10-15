import type { Metadata } from "next";
import NotFoundContent from "@/src/components/common/StatusPage/NotFoundContent";

export const metadata: Metadata = {
  title: "Page not found | WALDOR CLINIC",
  description: "The page you are looking for could not be found.",
};

/** 404 for notFound() calls inside the website (e.g. a missing blog post). */
export default function NotFound() {
  return <NotFoundContent />;
}
