"use client";
import { serviceHeroData } from "./ServiceHero.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ServiceHero() {
  const sectionRef = useSectionReveal();
  const { eyebrow, before, highlight, description, video, cta } =
    serviceHeroData;

  return (
    <section ref={sectionRef} className="bg-[#3D4844] m-2 lg:m-4">
      <div className="flex flex-col lg:flex-row lg:min-h-[900px] overflow-hidden rounded-[24px] bg-[#A48761] md:min-h-[800px] lg:rounded-[32px] pt-[150px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-[60px] lg:pb-[40px] gap-20">
        {/* Hero content */}
        <div className="flex justify-start items-center w-full lg:w-[50%]">
          <div className="w-[600px] flex flex-col gap-5 lg:gap-10">
            <Eyebrow>{eyebrow}</Eyebrow>

            <Heading as="h1" before={before} highlight={highlight} />

            <Description>{description}</Description>

            <div
              data-reveal
              data-direction="left"
              className="mt-10 lg:mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-4 lg:gap-5"
            >
              <Button variant="primary" href={cta.href}>
                {cta.label}
              </Button>
            </div>
          </div>
        </div>

        {/* Treatment Media */}
        <div
          data-reveal
          data-direction="right"
          className="relative flex justify-center h-[560px] sm:h-[650px] lg:left-auto lg:right-0 lg:h-[750px] lg:w-[50%] rounded-[24px] items-center lg:my-20 overflow-hidden bg-[#2C3531]"
        >
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover object-[center_75%] w-full rounded-[24px] h-full"
          />

          {/* Media overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3D4844]/70 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#3D4844]/20" />
        </div>
      </div>
    </section>
  );
}
