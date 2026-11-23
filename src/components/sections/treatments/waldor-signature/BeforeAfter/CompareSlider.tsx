"use client";
import { optimizedSrc, optimizedSrcSet } from "@/src/lib/optimizedImage";

interface Props {
  beforeImage: string;
  afterImage: string;
  objectPosition?: string;
  /** Before on top, after below (for wide photos) instead of side by side */
  stacked?: boolean;
}

const SIZES = "(max-width: 768px) 50vw, 400px";
const STACKED_SIZES = "(max-width: 768px) 100vw, 800px";

export default function CompareSlider({
  beforeImage,
  afterImage,
  objectPosition = "center 20%",
  stacked = false,
}: Props) {
  return (
    <div
      className={`relative grid h-full w-full ${stacked ? "grid-rows-2" : "grid-cols-2"}`}
    >
      <div className="relative h-full w-full">
        <img
          src={optimizedSrc(beforeImage)}
          srcSet={optimizedSrcSet(beforeImage)}
          sizes={stacked ? STACKED_SIZES : SIZES}
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
          sizes={stacked ? STACKED_SIZES : SIZES}
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
        className={
          stacked
            ? "pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#C6A26D] md:h-[2px]"
            : "pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#C6A26D] md:w-[2px]"
        }
      />
    </div>
  );
}
