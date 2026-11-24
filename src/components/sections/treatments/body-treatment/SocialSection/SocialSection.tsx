"use client";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import SocialProfile from "./SocialProfile";
import SocialFeed from "./SocialFeed";
import { socialProfile, socialSectionData } from "./SocialSection.data";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

interface Props {
  stats?: { posts: string; followers: string };
}

export default function SocialSection({ stats }: Props) {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="rounded-[24px] lg:rounded-[40px] bg-[#ECE0D1] m-2 py-16 md:py-20 lg:py-[80px] lg:m-4 overflow-hidden ">
      <div className="mx-auto px-6 lg:px-[60px]">
        <div className="overflow-hidden rounded-[32px] bg-[#EFE2D2] px-5 pt-12 md:px-8 md:pt-14 lg:rounded-[40px] lg:px-10 lg:pt-16">
          {/* Header */}
          <div className="mx-auto max-w-[850px] text-center">
            <Eyebrow variant="secondary">{socialSectionData.eyebrow}</Eyebrow>

            <Heading
              as="h2"
              className="mt-3 text-[#39423E]"
              before={socialSectionData.heading.before}
              highlight={socialSectionData.heading.highlight}
            />

            <Description className="mx-auto mt-4 max-w-[820px] text-[#686158]">
              {socialSectionData.description}
            </Description>
          </div>

          {/* Social Profile */}
          <SocialProfile profile={{ ...socialProfile, ...stats }} />

          {/* Social Feed */}
          <SocialFeed />
        </div>
      </div>
    </section>
  );
}
