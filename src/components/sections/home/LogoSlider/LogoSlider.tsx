"use client";

import Image from "next/image";
import { Eyebrow } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { logoSliderData } from "./LogoSlider.data";
import { cn } from "@/src/lib/utils";

export default function LogoSlider() {
  const sectionRef = useSectionReveal();
  const { eyebrow, logos } = logoSliderData;

  // Duplicate for seamless 100% infinite marquee loop
  const loopLogos = [...logos, ...logos];

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1440px] px-5 pt-6 pb-0 md:pt-8 md:pb-0 lg:px-[60px] lg:pt-10 lg:pb-0"
      aria-label="Featured publications and press"
    >
      {/* Seamless Merged Container - No Card Box, No Pill Backgrounds */}
      <div
        data-reveal
        data-direction="up"
        className="relative pt-5 pb-5 sm:pt-6 sm:pb-6 border-y border-[#ECE0D1]/10"
      >
        {/* Section Header */}
        <div className="relative z-10 mx-auto max-w-2xl text-center flex flex-col items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <Eyebrow variant="secondary">{eyebrow}</Eyebrow>
        </div>

        {/* Slide Bar / Infinite Marquee Track with Pure Alpha Mask (Seamless Merge) */}
        <div className="relative overflow-hidden w-full group py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          {/* Continuous Smooth Scrolling Row */}
          <div className="flex w-max items-center gap-12 sm:gap-16 lg:gap-20 animate-marquee hover-pause py-3">
            {loopLogos.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="relative flex items-center justify-center shrink-0 cursor-default group/item"
                title={item.name}
              >
                <div
                  className={cn(
                    "relative flex items-center justify-center transition-all duration-300 group-hover/item:scale-105",
                    item.containerClass
                  )}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={item.width}
                    height={item.height}
                    className="max-h-full max-w-full object-contain opacity-60 group-hover/item:opacity-100 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover/item:drop-shadow-[0_0_12px_rgba(197,163,117,0.3)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
