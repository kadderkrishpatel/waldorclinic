"use client";
import { Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { sessionSteps } from "./Microneedling.data";

export default function SessionSteps() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="rounded-[40px] bg-[#3D4945] mx-auto px-6 py-16 md:py-20 lg:px-[60px] lg:py-[100px]">
        <Heading
          as="h2"
          className="text-[36px] md:text-[56px] lg:text-[64px] text-[#F1ECE4] leading-[110%] text-center"
          before={sessionSteps.heading}
        />

        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {sessionSteps.steps.map((step) => (
            <article
              key={step.number}
              data-reveal
              data-direction="left"
              className="flex flex-col gap-5 rounded-[28px] bg-[#29302D] p-8 lg:p-10"
            >
              <span className="font-fraunces text-[48px] italic leading-none text-[#C5A375]">
                {step.number}
              </span>

              <h3 className="font-fraunces text-[26px] leading-tight text-[#ECE0D1]">
                {step.title}
              </h3>

              <p className="font-hanken text-[15px] leading-[1.7] text-[#B5B8B3]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
