"use client";
import Button from "@/src/components/ui/Button";
import { Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { scalpMicroneedling } from "./Microneedling.data";

export default function ScalpBlock() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5 lg:py-6">
      <div className="rounded-[24px] lg:rounded-[40px] bg-[#ECE0D1] py-14 md:py-16 lg:py-[80px]">
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-6 text-center lg:gap-8">
          <Heading
            as="h2"
            className="text-[32px] md:text-[48px] lg:text-[56px] text-[#3D4844] leading-[110%]"
            before={scalpMicroneedling.heading}
          />

          <p
            data-reveal
            data-direction="left"
            className="max-w-[720px] font-hanken text-base lg:text-[18px] leading-[1.7] text-[#423627]"
          >
            {scalpMicroneedling.description}
          </p>

          <div data-reveal data-direction="left">
            <Button variant="primary" href={scalpMicroneedling.cta.href}>
              {scalpMicroneedling.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
