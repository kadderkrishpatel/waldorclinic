"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { findCocktail } from "./Microneedling.data";

export default function FindCocktail() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="rounded-[40px] bg-[#3D4945] mx-auto px-6 py-16 md:py-20 lg:px-[60px] lg:py-[100px]">
        <div className="max-w-[850px]">
          <Eyebrow variant="secondary">{findCocktail.eyebrow}</Eyebrow>

          <Heading
            as="h2"
            className="mt-4 text-[36px] md:text-[56px] lg:text-[64px] text-[#F1ECE4] leading-[110%]"
            before={findCocktail.heading}
          />

          <p
            data-reveal
            data-direction="left"
            className="mt-6 font-hanken text-base lg:text-[17px] leading-[1.7] text-[#ECE0D1]/85"
          >
            {findCocktail.intro}
          </p>
        </div>

        {/* Two column table */}
        <div
          data-reveal
          data-direction="left"
          className="mt-12 lg:mt-16 overflow-hidden rounded-[24px] border border-white/10"
        >
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#29302D]">
                <th
                  scope="col"
                  className="w-[42%] px-5 py-4 font-hanken text-xs font-bold uppercase tracking-[0.16em] text-[#C5A375] lg:px-8 lg:py-5"
                >
                  {findCocktail.columns.concern}
                </th>
                <th
                  scope="col"
                  className="px-5 py-4 font-hanken text-xs font-bold uppercase tracking-[0.16em] text-[#C5A375] lg:px-8 lg:py-5"
                >
                  {findCocktail.columns.cocktails}
                </th>
              </tr>
            </thead>

            <tbody>
              {findCocktail.rows.map((row) => (
                <tr key={row.concern} className="border-t border-white/10">
                  <td className="px-5 py-4 align-top font-fraunces text-[17px] leading-snug text-[#F1ECE4] lg:px-8 lg:py-5 lg:text-[19px]">
                    {row.concern}
                  </td>
                  <td className="px-5 py-4 align-top font-hanken text-[14px] leading-[1.7] text-[#BEC2C1] lg:px-8 lg:py-5 lg:text-[15px]">
                    {row.cocktails}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
