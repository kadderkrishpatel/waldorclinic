"use client";
import Image from "next/image";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { whyRightFit } from "./Microneedling.data";

export default function WhyRightFit() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#29302D] py-4 sm:py-6 m-2 lg:m-4 rounded-[40px]"
    >
      <div className="relative z-10 rounded-[24px] sm:rounded-[32px] bg-[#29302D] px-5 sm:px-8 lg:px-16 pt-16 pb-[170px] sm:pt-20 sm:pb-[190px] lg:py-[110px] flex items-center justify-center">
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <Eyebrow variant="secondary">{whyRightFit.eyebrow}</Eyebrow>

          <Heading
            className="mt-6 max-w-[780px] text-[#ECE0D1] text-[30px] md:text-[44px] lg:text-[52px] leading-[1.15] italic"
            before={whyRightFit.quote}
          />

          {/* Divider between the quote and the supporting text */}
          <span className="my-8 block h-px w-16 bg-[#C5A375]/60 lg:my-10" />

          <Description className="max-w-[700px] text-[15px] leading-[1.75] text-[#F3ECE3]/85 sm:text-base lg:text-[17px]">
            {whyRightFit.description}
          </Description>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 z-10 w-[120px] lg:w-[271px]">
        <Image
          src={whyRightFit.leftImage}
          alt=""
          width={265}
          height={310}
          className="h-auto w-full"
          sizes="(max-width:768px) 120px, 271px"
        />
      </div>
    </section>
  );
}
