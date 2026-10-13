"use client";
import Image from "next/image";
import { aboutData } from "./AboutSection.data";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function AboutSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#3D4844] pt-6 pb-16 md:pt-8 md:pb-20 lg:pt-10 lg:pb-24 xl:pt-12 xl:pb-28 mx-2 lg:mx-4 lg:mb-4 lg:mt-0"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-[60px]">
        <div className="mx-auto max-w-[1100px] text-center">
          <Eyebrow variant="secondary" className="mb-4 md:mb-5 lg:mb-6">
            {aboutData.eyebrow}
          </Eyebrow>

          <Heading
            before={aboutData.description}
            highlight=""
            after=""
            className="mx-auto max-w-[850px] font-fraunces font-light text-[#E4E6E5] text-[28px] leading-[124%] tracking-[-0.14px] sm:text-[32px] sm:tracking-[-0.2px] md:text-[36px] lg:text-[42px] lg:leading-[118%] lg:tracking-[-0.4px] xl:text-[48px] xl:leading-[115%] xl:tracking-[-0.48px]"
          />
        </div>
      </div>

      {aboutData.image && (
        <div className="pointer-events-none absolute bottom-0 right-0 hidden lg:block">
          <div className="relative lg:h-[220px] lg:w-[120px] xl:h-[280px] xl:w-[150px] 2xl:h-[320px] 2xl:w-[170px]">
            <Image
              src={aboutData.image}
              alt="Waldor Clinic"
              fill
              sizes="(max-width:1024px) 0vw, (max-width:1280px) 120px, (max-width:1536px) 150px, 170px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      )}
    </section>
  );
}
