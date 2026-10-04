import type { Metadata } from "next";
import BlogListingSection from "@/src/components/sections/blog/BlogListingSection/BlogListingSection";
import { blogCategories } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.data";
import { getBlogs } from "@/src/services/blogs";
import type { Blog } from "@/src/components/sections/blog/BlogListingSection/BlogListingSection.types";
import HeroSection from "@/src/components/sections/blog/HeroSection";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Skincare tips, treatment insights and expert advice from the practitioners at Waldor Clinic, London.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const initialCategory =
    blogCategories.find((item) => item.toLowerCase() === category?.toLowerCase()) ??
    "All";

  // Render the first page on the server so cards are in the HTML (fast LCP + SEO).
  let initialBlogs: Blog[] = [];
  let initialTotalPages = 1;
  try {
    const { blogs, pagination } = await getBlogs({
      page: 1,
      perPage: 6,
      category: initialCategory,
    });
    // The listing never shows the article body, so don't ship it to the client.
    initialBlogs = blogs.map((blog) => ({ ...blog, content: "" }));
    initialTotalPages = pagination.totalPages;
  } catch {
    // WordPress unreachable — the client falls back to fetching on mount.
  }

  return (
    <>
      <HeroSection />
      <BlogListingSection
        initialCategory={initialCategory}
        initialBlogs={initialBlogs.length ? initialBlogs : undefined}
        initialTotalPages={initialTotalPages}
      />
    </>
  );
}
