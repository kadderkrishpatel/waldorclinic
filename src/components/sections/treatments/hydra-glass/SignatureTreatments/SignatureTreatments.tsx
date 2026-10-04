"use client";
import Image from "next/image";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import { treatmentRows, treatmentData } from "./SignatureTreatments.data";
import { asset } from "@/src/lib/assets";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function SignatureTreatments() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="relative">
      <div className="m-2 lg:m-4 py-5">
        <div className="relative overflow-hidden rounded-[48px] bg-[#515D59] lg:pt-[120px] pt-[80px]">
          {/* Decorative Leaf */}
          <div className="absolute right-0 top-20 hidden lg:block">
            <Image
              src={asset("/assets/waldor/decorations/exp-leaf-top.png")}
              alt=""
              width={200}
              height={200}
              priority={false}
            />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 xl:p-20">
            {/* Header */}
            <div className="max-w-7xl">
              <Eyebrow variant="secondary">{treatmentData.eyebrow}</Eyebrow>

              <Heading
                as="h2"
                className="mt-5 text-white max-w-4xl"
                before={treatmentData.before}
                highlight={treatmentData.highlight}
              />
            </div>

            {/* Cards */}
            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {treatmentRows.map((row) => (
                <div
                  key={row.id}
                  data-reveal
                  data-direction="left"
                  className="rounded-[24px] bg-[#1F2422] p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[22px] leading-snug text-[#ECE0D1]">
                      {row.title}
                    </h3>

                    <p className="shrink-0 font-fraunces text-[18px] text-[#C5A375]">
                      {row.price}
                    </p>
                  </div>

                  {row.description && (
                    <p className="mt-3 text-[15px] leading-6 text-[#9EA3A1]">
                      {row.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div
              data-reveal
              data-direction="left"
              className="mt-10 lg:mt-16 flex flex-col justify-center sm:flex-row sm:flex-wrap gap-4 lg:gap-5"
            >
              <Button variant="gold" href={treatmentData.cta.href}>
                {treatmentData.cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
