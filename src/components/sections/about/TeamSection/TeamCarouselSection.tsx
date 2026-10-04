"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/src/lib/utils";
import TeamCard from "./TeamCard";
import { teamData, teamMembers } from "./TeamSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import useMergedRefs from "@/src/components/hooks/useMergedRefs";

export default function TeamCarouselSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionRevealRef = useSectionReveal();
  const mergedRef = useMergedRefs(sectionRef, sectionRevealRef);
  const swiperRef = useRef<SwiperType | null>(null);
  const [ready, setReady] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const syncNavState = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const navButtonClass = (disabled: boolean) =>
    cn(
      "flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300",
      disabled
        ? "border-white/10 bg-white/5 text-[#7D8582] cursor-not-allowed"
        : "border-white/20 bg-white/15 text-[#ECE0D1] hover:bg-white/25",
    );

  useHorizontalScroll({
    section: sectionRef,
    swiper: swiperRef,
    enabled: ready,
  });

  return (
    <section
      ref={mergedRef}
      className="overflow-hidden lg:rounded-[32px] m-2 lg:m-4 bg-[#3D4844] pt-16 pb-10 md:pt-20 md:pb-12 lg:pt-20 lg:pb-14"
    >
      <div className="mx-auto px-6 lg:px-[60px] overflow-hidden">
        {/* Heading */}
        <div className="mb-10 md:mb-12 lg:mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[750px] flex flex-col gap-4 md:gap-5 lg:gap-6">
            <Eyebrow variant="secondary">{teamData.eyebrow}</Eyebrow>

            <Heading
              as="h2"
              className="text-[#BEC2C1] lg:text-[64px] leading-[115%]"
              before={teamData.before}
              highlight={teamData.highlight}
            />

            <Description className="text-[#E4E6E5]">
              {teamData.description}
            </Description>
          </div>

          {/* Nav Arrows */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              disabled={isBeginning}
              onClick={() => swiperRef.current?.slidePrev()}
              className={navButtonClass(isBeginning)}
            >
              <FiArrowLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next"
              disabled={isEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className={navButtonClass(isEnd)}
            >
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
        
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncNavState(swiper);
          }}
          onSlideChange={syncNavState}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          slidesPerView={1.05}
          speed={500}
          allowTouchMove={true}
          watchOverflow={true}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.4,
            },
            1280: {
              slidesPerView: 3.4,
            },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
