import { getBlogBySlug } from "@/src/services/blogs";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: Request, context: RouteContext) {
  try {
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        {
          error: "Slug is required",
        },
        {
          status: 400,
        },
      );
    }

    const blog = await getBlogBySlug(slug);

    if (!blog) {
      return NextResponse.json(
        {
          error: "Blog not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(blog);
  } catch (error) {
    console.error("[BLOG API] Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch blog",
      },
      {
        status: 500,
      },
    );
  }
}
