"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { microneedlingIntro } from "./Microneedling.data";

export default function Introduction() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="mx-2 mb-2 mt-6 lg:mx-4 lg:mb-4 lg:mt-10 rounded-[24px] lg:rounded-[40px] bg-[#ECE0D1] pt-9 pb-10 md:pt-10 md:pb-12 lg:pt-12 lg:pb-14"
    >
      <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-4 px-6 text-center lg:gap-5 lg:px-[60px]">
        <Eyebrow variant="primary">{microneedlingIntro.eyebrow}</Eyebrow>

        <Heading
          as="h2"
          className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] text-[#3D4844] leading-[115%] tracking-[-0.02em]"
          before={microneedlingIntro.heading}
        />

        {/* Justified paragraphs, last line centred to match the heading */}
        <div className="mt-1 flex max-w-[880px] flex-col gap-4 lg:mt-2">
          {microneedlingIntro.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              data-reveal
              data-direction="left"
              className="font-hanken text-[15px] leading-[1.7] text-[#423627] sm:text-base sm:text-justify sm:[text-align-last:center] lg:text-[16.5px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
