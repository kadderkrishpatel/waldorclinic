"use client";
import Image from "next/image";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import SafetyGrid from "./SafetyGrid";
import { safetyData } from "./PatientSafety.data";
import { asset } from "@/src/lib/assets";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function PatientSafety() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 pt-4">
      <div className="relative overflow-hidden rounded-[40px] bg-[#EFE2D2] pt-[80px] lg:pt-[120px]">
        {/* Decorative Leaf */}
        <Image
          src={asset("/assets/waldor/decorations/service-top-decoration.png")}
          alt=""
          width={220}
          height={220}
          className="pointer-events-none absolute right-10 top-0 opacity-90"
        />

        <div className="relative z-10 px-8 py-14 md:px-12 lg:px-16 lg:py-20">
          {/* Header */}
          <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col gap-4 md:gap-5 lg:gap-6">
            <Eyebrow variant="secondary">{safetyData.eyebrow}</Eyebrow>

            <Heading
              className="text-[#3D4844] lg:text-[64px]"
              before={safetyData.before}
              highlight={safetyData.highlight}
            />

            <Description className="max-w-[900px] text-[#423627]">
              {safetyData.description}
            </Description>
          </div>

          {/* Cards */}
          <div className="mt-14">
            <SafetyGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
