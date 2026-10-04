import Image from "next/image";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { CardTitle, Eyebrow } from "@/src/components/ui/Typography";
import { getBlogPath } from "@/src/lib/blogRoutes";
import { BlogCardProps } from "./BlogCard.types";

export default function BlogCard({
  slug,
  image,
  category,
  title,
  subtitle,
  readTime,
  className,
}: BlogCardProps) {
  return (
    <article
      data-reveal
      data-direction="left"
      className={cn("group", className)}
    >
      <Link href={getBlogPath(category, slug)}>
        {/* Image */}
        <div className="relative mb-6 aspect-square w-full overflow-hidden rounded-[28px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[14px]">
          <Eyebrow variant="secondary">{category}</Eyebrow>

          <CardTitle className="text-[20px] leading-6.5">
            {title}
            {subtitle && (
              <>
                {" "}
                <span className="italic text-[#C5A375]">{subtitle}</span>
              </>
            )}
          </CardTitle>

          <p
            data-reveal
            data-direction="left"
            className="text-xs text-[#7D8582]"
          >
            {readTime}
          </p>
        </div>
      </Link>
    </article>
  );
}
