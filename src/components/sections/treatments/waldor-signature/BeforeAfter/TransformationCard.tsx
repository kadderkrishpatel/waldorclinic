"use client";
import type { MutableRefObject } from "react";
import type { Swiper as SwiperType } from "swiper";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { Eyebrow } from "@/src/components/ui/Typography";

interface TransformationCardProps {
  category: string;
  title: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  objectPosition?: string;
  caption?: string;
  stacked?: boolean;
  swiper?: MutableRefObject<SwiperType | null>;
}

export default function TransformationCard({
  beforeImage,
  afterImage,
  objectPosition,
  caption,
  stacked,
}: TransformationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] lg:rounded-[32px] bg-[#F3ECE3] h-full">
      {/* Before / After Image */}
      <div className="relative w-full aspect-[4/3] md:aspect-[7/5]">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          objectPosition={objectPosition}
          stacked={stacked}
        />
      </div>

      {beforeImage && (
        <div className="absolute top-3 left-3 md:top-5 md:left-5 lg:top-6 lg:left-6 bg-[#F3ECE3] px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] z-1">
          <Eyebrow className="text-[#997B4E] text-xs md:text-sm">
            Before
          </Eyebrow>
        </div>
      )}

      {afterImage && (
        <div
          className={
            stacked
              ? "absolute left-3 top-[calc(50%+0.75rem)] md:left-5 md:top-[calc(50%+1.25rem)] lg:left-6 lg:top-[calc(50%+1.5rem)] bg-[#F3ECE3] px-3 py-1.5 md:px-4 md:py-2 rounded-[8px]"
              : "absolute top-3 right-3 md:top-5 md:right-5 lg:top-6 lg:right-6 bg-[#F3ECE3] px-3 py-1.5 md:px-4 md:py-2 rounded-[8px]"
          }
        >
          <Eyebrow className="text-[#997B4E] text-xs md:text-sm">
            After
          </Eyebrow>
        </div>
      )}

      {/* Optional caption, centred at the bottom of the images */}
      {caption && (
        <div className="absolute bottom-3 left-1/2 z-1 max-w-[88%] -translate-x-1/2 rounded-[8px] bg-[#F3ECE3] px-3 py-1.5 text-center md:bottom-5 md:px-4 md:py-2 lg:bottom-6">
          <Eyebrow className="text-[#997B4E] text-[10px] leading-4 md:text-xs">
            {caption}
          </Eyebrow>
        </div>
      )}
    </div>
  );
}
