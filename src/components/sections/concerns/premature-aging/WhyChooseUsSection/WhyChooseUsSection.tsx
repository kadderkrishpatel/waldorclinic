"use client";
import Image from "next/image";
import { whyChooseUsData } from "./WhyChooseUsSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function WhyChooseUsSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#29302D] py-4 sm:py-6 m-2 lg:m-4 rounded-[40px]"
    >
      {/* Content Card */}
      <div className="relative z-10 rounded-[24px] sm:rounded-[32px] bg-[#29302D] min-h-[520px] sm:min-h-[600px] lg:min-h-[650px] px-5 sm:px-8 lg:px-16 py-16 sm:py-20 lg:py-30 flex items-center justify-center">
        <div className="mx-auto flex gap-[40px] max-w-[800px] flex-col items-center text-center">
          <Eyebrow variant="secondary">{whyChooseUsData.eyebrow}</Eyebrow>

          {/* Heading */}
          <Heading
            className="text-[#ECE0D1] lg:text-[56px] italic"
            before={whyChooseUsData.heading.before}
          />

          {/* Description */}
          <Description className="mt-4 max-w-[750px] text-sm sm:text-base lg:text-lg">
            {whyChooseUsData.description}
          </Description>
        </div>
      </div>

      {/* Left Decorative Image */}
      {whyChooseUsData.leftImage && (
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-[160px] lg:w-[271px]">
          <Image
            src={whyChooseUsData.leftImage}
            alt=""
            width={265}
            height={310}
            className="h-auto w-full"
            sizes="(max-width:768px) 160px, 271px"
          />
        </div>
      )}
    </section>
  );
}
