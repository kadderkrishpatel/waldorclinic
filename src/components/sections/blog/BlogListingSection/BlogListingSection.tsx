"use client";
import { useEffect, useRef, useState } from "react";
import { Blog, BlogsResponse } from "./BlogListingSection.types";
import { blogCategories } from "./BlogListingSection.data";
import { BlogCard } from "@/src/components/ui/Cards";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function BlogListingSection({
  initialCategory = "All",
  initialBlogs,
  initialTotalPages = 1,
}: {
  initialCategory?: string;
  initialBlogs?: Blog[];
  initialTotalPages?: number;
}) {
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs ?? []);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  // The server already rendered page 1 of the initial category.
  const skipInitialFetch = useRef(Boolean(initialBlogs));
  const [category, setCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(false);
  const sectionRef = useSectionReveal();

  /**
   * ==========================================
   * FETCH BLOGS
   * ==========================================
   */
  useEffect(() => {
    if (skipInitialFetch.current) {
      skipInitialFetch.current = false;
      return;
    }

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        params.set("page", String(page));

        if (category && category !== "All") {
          params.set("category", category);
        }

        const url = `/api/blog?${params.toString()}`;
        const res = await fetch(url, { cache: "no-store" });

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data: BlogsResponse = await res.json();
        setBlogs(data.blogs || []);
        setTotalPages(data.pagination.totalPages || 1);
      } catch (error) {
        console.error("Blog fetch error:", error);
        setBlogs([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, category]);

  const handleCategoryChange = (selectedCategory: string) => {
    setPage(1);
    setCategory(selectedCategory);
  };

  const handlePageChange = (selectedPage: number) => {
    if (
      selectedPage < 1 ||
      selectedPage > totalPages ||
      selectedPage === page
    ) {
      return;
    }

    setPage(selectedPage);
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative m-2 overflow-hidden bg-[#3D4844] py-16 md:py-20 lg:m-4 lg:py-[40px]"
    >
      <div
        data-reveal
        data-direction="left"
        className="mx-auto px-2 sm:px-6 lg:px-[60px]"
      >
        {/* ===== CATEGORIES ===== */}
        <div className="mb-12 flex flex-wrap gap-3">
          {blogCategories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleCategoryChange(item)}
              className={`rounded-full border px-6 py-3 transition-all
                  ${
                    category === item
                      ? `border-[#C5A375] bg-[#C5A375] text-[#29302D]`
                      : `border-[#7E8582] text-[#ECE0D1]`
                  }
                `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* ===== BLOG GRID ===== */}
        {loading ? (
          <div className="py-20 text-center text-[#ECE0D1]">Loading...</div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                {...blog}
                category={category !== "All" ? category : blog.category}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-[#ECE0D1]">
            No blogs found.
          </div>
        )}

        {/* ===== PAGINATION ===== */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-6">
            {/* Page numbers */}

            {Array.from({
              length: totalPages,
            }).map((_, index) => {
              const pageNumber = index + 1;

              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => handlePageChange(pageNumber)}
                  className={`text-sm transition ${page === pageNumber ? "text-[#C5A375]" : "text-[#7E8582]"}`}
                >
                  {pageNumber.toString().padStart(2, "0")}
                </button>
              );
            })}

            {/* Divider */}
            {page < totalPages && (
              <>
                <div className="h-px w-10 bg-[#7E8582]" />
                {/* Next */}
                <button
                  type="button"
                  onClick={() => handlePageChange(page + 1)}
                  className="text-sm text-[#ECE0D1] transition-opacity hover:opacity-70"
                >
                  NEXT
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
