"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { myths } from "./Microneedling.data";

export default function Myths() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="m-2 lg:m-4 rounded-[24px] lg:rounded-[40px] bg-[#ECE0D1] py-16 md:py-20 lg:py-[100px]"
    >
      <div className="mx-auto px-6 lg:px-[60px]">
        <div className="mx-auto flex max-w-[860px] flex-col items-center gap-5 text-center">
          <Eyebrow variant="primary">{myths.eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="text-[36px] md:text-[56px] lg:text-[64px] text-[#3D4844] leading-[110%]"
            before={myths.heading}
          />

          <p
            data-reveal
            data-direction="left"
            className="font-hanken text-base lg:text-[18px] leading-[1.7] text-[#423627]"
          >
            {myths.intro}
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myths.items.map((item) => (
            <article
              key={item.myth}
              data-reveal
              data-direction="left"
              className="flex flex-col gap-6 rounded-[28px] bg-[#29302D] p-8 lg:p-10"
            >
              <h3 className="font-fraunces text-[28px] lg:text-[32px] italic font-light leading-[1.15] text-[#C5A375]">
                {item.myth}
              </h3>

              <div className="border-t border-[#3D4844] pt-5">
                <p className="font-hanken text-xs font-bold uppercase tracking-[0.16em] text-[#ECE0D1]">
                  {myths.truthLabel}
                </p>

                <p className="mt-3 font-hanken text-[15px] leading-[1.7] text-[#B5B8B3]">
                  {item.truth}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 lg:mt-16 flex max-w-[860px] flex-col items-center gap-8 text-center">
          <p
            data-reveal
            data-direction="left"
            className="font-fraunces text-[22px] lg:text-[26px] italic leading-[1.4] text-[#3D4844]"
          >
            {myths.closingLine}
          </p>

          <div data-reveal data-direction="left">
            <Button
              variant="primary"
              href={myths.cta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {myths.cta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
