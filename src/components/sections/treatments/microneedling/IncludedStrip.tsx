"use client";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { includedInSession } from "./Microneedling.data";

export default function IncludedStrip() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5 lg:py-6">
      <div className="rounded-[32px] bg-[#29302D] px-6 py-10 lg:px-[60px] lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
          <h2
            data-reveal
            data-direction="left"
            className="font-fraunces text-[28px] lg:text-[36px] leading-[1.15] text-[#ECE0D1] lg:w-[30%]"
          >
            {includedInSession.heading}
          </h2>

          <ul className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            {includedInSession.items.map((item) => (
              <li
                key={item.title}
                data-reveal
                data-direction="left"
                className="border-t border-[#C5A375]/40 pt-5 font-hanken text-[15px] leading-[1.7] text-[#B5B8B3]"
              >
                <strong className="font-semibold text-[#C5A375]">
                  {item.title}
                </strong>
                {item.text.startsWith(",") ? "" : " "}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
