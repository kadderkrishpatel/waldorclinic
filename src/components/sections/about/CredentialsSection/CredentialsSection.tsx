"use client";

import Image from "next/image";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { credData, credentialLogos } from "./CredentialsSection.data";
import { cn } from "@/src/lib/utils";

export default function CredentialsSection() {
  const sectionRef = useSectionReveal();
  const loopLogos = [...credentialLogos, ...credentialLogos];

  return (
    <section
      ref={sectionRef}
      className="rounded-[32px] bg-[#29302D] py-16 md:py-20 lg:py-24 m-2 lg:m-4 overflow-hidden"
      aria-label="Our credentials and certifications"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-12 md:mb-16 max-w-3xl text-center">
          <Eyebrow variant="secondary">{credData.eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="mt-5 lg:text-[64px]"
            before={credData.before}
            highlight={credData.highlight}
          />

          <Description className="mx-auto mt-6 max-w-2xl text-[#BEC2C1]">
            {credData.description}
          </Description>
        </div>

        {/* Slide Bar / Infinite Marquee Track with Pure Alpha Mask */}
        <div className="relative overflow-hidden w-full group py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
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
                    className="max-h-full max-w-full object-contain opacity-65 group-hover/item:opacity-100 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover/item:drop-shadow-[0_0_12px_rgba(197,163,117,0.3)]"
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
