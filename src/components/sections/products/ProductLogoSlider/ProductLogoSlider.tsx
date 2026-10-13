"use client";

import Image from "next/image";
import { Eyebrow } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { productLogoSliderData } from "./ProductLogoSlider.data";
import { cn } from "@/src/lib/utils";

export default function ProductLogoSlider() {
  const sectionRef = useSectionReveal();
  const { eyebrow, heading, description, logos } = productLogoSliderData;

  // Duplicate for seamless 100% infinite marquee loop
  const loopLogos = [...logos, ...logos];

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-[60px] lg:pb-24"
      aria-label="Featured publications and press"
    >
      {/* Seamless Merged Container - No Card Box, No Pill Backgrounds */}
      <div
        data-reveal
        data-direction="up"
        className="relative py-6 sm:py-10 border-y border-[#ECE0D1]/10"
      >
        {/* Section Header */}
        <div className="relative z-10 mx-auto max-w-2xl text-center flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <Eyebrow variant="secondary">{eyebrow}</Eyebrow>

          <h2
            data-reveal
            data-direction="up"
            data-delay="0.05"
            className="font-fraunces text-2xl sm:text-3xl lg:text-4xl text-[#F3EDE3] font-normal leading-[115%] tracking-[-0.02em]"
          >
            {heading.before}{" "}
            <span className="italic text-[#C5A375] font-normal">
              {heading.highlight}
            </span>
          </h2>

          <p
            data-reveal
            data-direction="up"
            data-delay="0.1"
            className="font-hanken text-sm sm:text-base text-[#9EA3A1] max-w-lg leading-relaxed"
          >
            {description}
          </p>
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
