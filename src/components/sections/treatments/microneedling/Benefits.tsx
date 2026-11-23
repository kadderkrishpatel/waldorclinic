"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { microneedlingBenefits } from "./Microneedling.data";

export default function Benefits() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="rounded-[40px] bg-[#3D4945] mx-auto px-6 pb-10 lg:px-[60px] lg:pt-[120px] pt-[80px]">
        <div className="mb-10 md:mb-12 lg:mb-16 flex flex-col gap-6">
          <div className="max-w-[850px]">
            <Eyebrow variant="secondary">
              {microneedlingBenefits.eyebrow}
            </Eyebrow>

            <Heading
              as="h2"
              className="mt-4 text-[#F1ECE4]"
              before={microneedlingBenefits.headingBefore}
              highlight={microneedlingBenefits.headingHighlight}
            />
          </div>

          <div className="mt-12">
            {microneedlingBenefits.items.map((benefit) => (
              <div
                key={benefit.id}
                data-reveal
                data-direction="left"
                className="grid grid-cols-[48px_1fr] gap-6 border-t border-white/10 py-6 md:grid-cols-[48px_240px_1fr] md:gap-8 lg:grid-cols-[68px_420px_1fr] lg:gap-10"
              >
                <div>
                  <span className="font-fraunces text-[36px] italic leading-none text-[#C5A375]">
                    {benefit.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-fraunces text-[22px] leading-6 text-[#F1ECE4]">
                    {benefit.title}
                  </h3>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <p className="max-w-[780px] text-[15px] leading-[1.7] text-[#B5B8B3]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
