"use client";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import TeamCard from "@/src/components/sections/about/TeamSection/TeamCard";
import { teamMembers } from "@/src/components/sections/about/TeamSection/TeamSection.data";
import { doctorSectionData } from "./DoctorSection.data";

interface DoctorGridSectionProps {
  headingAs?: "h1" | "h2";
}

/**
 * Static grid of practitioners (used by /doctors). Kept separate from the
 * carousel DoctorSection so this page does not ship Swiper / GSAP.
 */
export default function DoctorGridSection({
  headingAs = "h2",
}: DoctorGridSectionProps) {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-20 lg:pb-14"
    >
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="max-w-[750px] flex flex-col gap-4 md:gap-5 lg:gap-6">
          <Eyebrow variant="secondary">{doctorSectionData.eyebrow}</Eyebrow>

          <Heading
            as={headingAs}
            className="text-[#BEC2C1] lg:text-[64px] leading-[115%]"
            before={doctorSectionData.heading.before}
            highlight={doctorSectionData.heading.highlight}
          />

          <Description className="text-[#E4E6E5]">
            {doctorSectionData.description}
          </Description>
        </div>

        {/* Grid */}
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-16 xl:grid-cols-3 mt-16">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
