"use client";
import { optimizedSrc, optimizedSrcSet } from "@/src/lib/optimizedImage";

interface Props {
  beforeImage: string;
  afterImage: string;
  objectPosition?: string;
}

const SIZES = "(max-width: 768px) 50vw, 400px";

export default function CompareSlider({
  beforeImage,
  afterImage,
  objectPosition = "center 20%",
}: Props) {
  return (
    <div className="relative grid h-full w-full grid-cols-2">
      <div className="relative h-full w-full">
        <img
          src={optimizedSrc(beforeImage)}
          srcSet={optimizedSrcSet(beforeImage)}
          sizes={SIZES}
          loading="lazy"
          decoding="async"
          alt="Before"
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
          style={{ objectPosition }}
        />
      </div>

      <div className="relative h-full w-full">
        <img
          src={optimizedSrc(afterImage)}
          srcSet={optimizedSrcSet(afterImage)}
          sizes={SIZES}
          loading="lazy"
          decoding="async"
          alt="After"
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
          style={{ objectPosition }}
        />
      </div>

      {/* Fixed center divider */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#C6A26D] md:w-[2px]"
      />
    </div>
  );
}
