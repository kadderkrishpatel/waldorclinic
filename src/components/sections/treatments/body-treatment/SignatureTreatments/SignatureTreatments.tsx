"use client";
import Image from "next/image";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import { treatmentCards, treatmentData } from "./SignatureTreatments.data";
import TreatmentGrid from "./TreatmentGrid";
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
                className="mt-5 text-white max-w-5xl"
                before={treatmentData.before}
                highlight={treatmentData.highlight}
              />

              <Description className="mt-6 max-w-5xl text-[#D9D2C8]">
                {treatmentData.description}
              </Description>
            </div>

            {/* Cards */}
            <div className="mt-16">
              <TreatmentGrid cards={treatmentCards} />
            </div>

            <div
              data-reveal
              data-direction="left"
              className="mt-10 lg:mt-20 flex flex-col justify-center sm:flex-row sm:flex-wrap gap-4 lg:gap-5"
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
