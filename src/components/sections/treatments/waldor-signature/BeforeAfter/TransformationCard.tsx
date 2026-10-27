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
  swiper: MutableRefObject<SwiperType | null>;
}

export default function TransformationCard({
  duration,
  beforeImage,
  afterImage,
  objectPosition,
  swiper,
}: TransformationCardProps) {
  return (
    <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] lg:rounded-[32px] bg-[#F3ECE3] h-full">
      {/* Before / After Image */}
      <div className="relative h-[650px] w-full aspect-[4/5] sm:aspect-[4/5] md:aspect-[2/3] lg:aspect-[3/2] xl:aspect-[3/2]">
        <BeforeAfterSlider
          beforeImage={beforeImage}
          afterImage={afterImage}
          objectPosition={objectPosition}
          swiper={swiper}
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
        <div className="absolute top-3 right-3 md:top-5 md:right-5 lg:top-6 lg:right-6 bg-[#F3ECE3] px-3 py-1.5 md:px-4 md:py-2 rounded-[8px]">
          <Eyebrow className="text-[#997B4E] text-xs md:text-sm">
            {duration}
          </Eyebrow>
        </div>
      )}
    </div>
  );
}
