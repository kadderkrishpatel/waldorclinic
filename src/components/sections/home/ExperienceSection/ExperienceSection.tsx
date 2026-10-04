"use client";
import { useRef } from "react";
import Image from "next/image";
import { experienceData } from "./ExperienceSection.data";
import ExperienceCard from "./ExperienceCard";
import { Eyebrow, Heading, Description } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import useInViewOnce from "@/src/components/hooks/useInViewOnce";

export default function ExperienceSection() {
  const sectionRef = useSectionReveal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoInView = useInViewOnce(videoRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-12 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="max-w-full">
          <Eyebrow variant="secondary">{experienceData.eyebrow}</Eyebrow>

          <Heading
            className="mt-4 text-[#29302D] lg:text-[64px]"
            before={experienceData.heading.before}
            highlight={experienceData.heading.highlight}
          />

          <Description className="mt-6 text-[#423627] max-w-[800px]">
            {experienceData.description}
          </Description>
        </div>

        {/* Main Area — video left, cards stacked right, matched heights */}
        <div className="relative mt-8 md:mt-10 flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-10">
          <div className="relative hidden aspect-4/3 w-full overflow-hidden rounded-[20px] lg:block lg:aspect-auto lg:w-1/2">
            <video
              ref={videoRef}
              src={videoInView ? experienceData.video : undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            {experienceData.cards.map((card) => (
              <ExperienceCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </div>

      <Image
        src={experienceData.bottomDecorationImage}
        alt=""
        width={200}
        height={216}
        className="pointer-events-none absolute right-0 bottom-0 w-[110px] opacity-70 md:w-[160px] lg:w-[200px]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
    </section>
  );
}
