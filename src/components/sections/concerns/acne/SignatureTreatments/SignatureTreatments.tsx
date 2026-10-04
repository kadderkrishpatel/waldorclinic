"use client";
import Image from "next/image";
import StatItem from "./StatItem";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import { treatmentData, serviceStats } from "./SignatureTreatments.data";
import { asset } from "@/src/lib/assets";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function SignatureTreatments() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="">
      {/* Decorative Leaf */}
      <div className="absolute right-0 hidden lg:block">
        <Image
          src={asset("/assets/waldor/decorations/exp-leaf-top.png")}
          alt=""
          width={150}
          height={150}
          priority={false}
        />
      </div>

      <div className="m-2 lg:m-4 py-5">
        <div className="relative overflow-hidden rounded-[48px] lg:pt-[120px] pt-[80px]">
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
            </div>

            <div className="w-full mt-20">
              <Description className="mt-6 w-full text-[#D9D2C8]">
                {treatmentData.description}
              </Description>

              <Description className="mt-6 w-full text-[#D9D2C8]">
                {treatmentData.description2}
              </Description>
            </div>

            {/* Cards */}
            <div className="py-16 sm:py-20 lg:py-[100px] text-center">
              {/* Stats */}
              <div className="grid gap-x-5 lg:gap-x-15 gap-y-10 md:gap-x-5 md:gap-y-5 lg:grid-cols-3 ">
                {serviceStats.map((stat) => (
                  <StatItem key={stat.id} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
