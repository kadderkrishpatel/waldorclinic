import { getBlogs } from "@/src/services/blogs";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 6;
const MAX_PAGE = 1000;
const MAX_PER_PAGE = 50;

/** Parse a positive integer query param; bad input falls back to the default. */
function parseIntParam(
  value: string | null,
  fallback: number,
  max: number,
): number {
  if (value === null || !/^\d+$/.test(value)) return fallback;

  const parsed = Number(value);
  if (parsed < 1) return fallback;

  return Math.min(parsed, max);
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseIntParam(searchParams.get("page"), DEFAULT_PAGE, MAX_PAGE);
    const perPage = parseIntParam(
      searchParams.get("per_page"),
      DEFAULT_PER_PAGE,
      MAX_PER_PAGE,
    );
    const category = searchParams.get("category") || "All";

    // The listing UI doesn't use the categories list, so it is no longer
    // fetched here — a categories outage can't empty the blog listing.
    const blogResponse = await getBlogs({
      page,
      perPage,
      category,
    });

    return NextResponse.json({
      blogs: blogResponse.blogs,
      categories: [],
      pagination: blogResponse.pagination,
    });
  } catch (error) {
    console.error("Blog API error:", error);

    return NextResponse.json(
      {
        blogs: [],
        categories: [],
        pagination: {
          page: 1,
          perPage: DEFAULT_PER_PAGE,
          total: 0,
          totalPages: 1,
          hasNextPage: false,
          hasPreviousPage: false,
        },
        error: "Failed to fetch blogs",
      },
      {
        status: 500,
      },
    );
  }
}
