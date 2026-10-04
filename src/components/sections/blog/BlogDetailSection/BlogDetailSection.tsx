"use client";
import Image from "next/image";
import { Blog } from "../BlogListingSection/BlogListingSection.types";
import Heading from "@/src/components/ui/Typography/Heading";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { asset } from "@/src/lib/assets";

interface BlogDetailSectionProps {
  blog: Blog;
}

export default function BlogDetailSection({ blog }: BlogDetailSectionProps) {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#EBE0D1] rounded-[40px] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden"
    >
      {/* Decorative Leaf — top right */}
      <Image
        src={asset("/assets/waldor/decorations/exp-leaf-top.png")}
        alt=""
        width={254.672}
        height={421.983}
        className="pointer-events-none absolute right-0 top-16 w-[140px] opacity-90 md:top-20 md:w-[190px] lg:w-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Decorative Leaf — bottom left */}
      <Image
        src={asset("/assets/waldor/decorations/exp-leaf-top.png")}
        alt=""
        width={254.672}
        height={421.983}
        className="pointer-events-none absolute -bottom-6 left-0 w-[140px] -scale-x-100 opacity-90 md:-bottom-8 md:w-[190px] lg:w-auto"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="relative mx-auto px-5 sm:px-6 lg:px-[60px]">
        {/* Hero */}
        <div className="rounded-[40px] pt-5 mt-10 lg:mt-40">
          <div className="mx-auto mb-14 flex max-w-[980px] flex-col items-center gap-8 px-6 text-center">
            <Heading
              as="h1"
              before={blog.title}
              highlight={blog.subtitle}
              className="text-[48px] lg:text-[64px] leading-[100%] text-[#28302D]"
              highlightClassName="text-[#C5A375]"
            />

            <div
              data-reveal
              data-direction="left"
              className="flex flex-wrap items-center justify-center gap-1 lg:gap-x-7"
            >
              <div className="flex items-center gap-3 border-r border-r-[#7E8582]">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  width={32}
                  height={32}
                  className="rounded-full h-[32px] w-[32px] object-cover"
                />

                <span className="text-sm uppercase tracking-[0.08em] text-[#3D4844]  after:mx-2 lg:after:ml-5">
                  {blog.author}
                </span>
              </div>

              <span className="text-sm uppercase text-[#3D4844] border-r border-r-[#7E8582] h-[32px] flex items-center justify-center after:mx-2 lg:after:ml-5">
                {blog.publishedAt}
              </span>

              <span className="text-sm uppercase text-[#3D4844]">
                {blog.readTime}
              </span>
            </div>
          </div>

          <div
            data-reveal
            data-direction="left"
            className="relative mx-auto max-w-[1280px] px-5"
          >
            <Image
              src={blog.bannerImage}
              alt={blog.title}
              width={1280}
              height={720}
              priority
              className="h-auto lg:h-[720px] w-full rounded-[24px] object-cover"
            />

            <span className="absolute left-10 top-6 rounded-full bg-[#1F2422]/80 px-4 py-1.5 font-hanken text-[11px] font-semibold uppercase tracking-[0.08em] text-[#ECE0D1]">
              {blog.category}
            </span>
          </div>
        </div>

        {/* Blog Content */}
        <div
          data-reveal
          data-direction="left"
          className="mx-auto mt-[60px] max-w-[800px]"
        >
          <div
            className="blog-content text-[#29302D]"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </div>
      </div>
    </section>
  );
}
