"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/src/lib/utils";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
// Reuse the shared team data and card so profiles stay in one place.
import DoctorCard from "@/src/components/sections/treatments/hydra-glass/DoctorSection/DoctorCard";
import { doctorSectionData } from "@/src/components/sections/treatments/hydra-glass/DoctorSection/DoctorSection.data";
import { microneedlingTeam } from "./Microneedling.data";

// Ordered for this page: Abbie first, then Beatrice, then the rest.
const team = microneedlingTeam.order.flatMap((name) => {
  const member = doctorSectionData.doctors.find((d) => d.name === name);
  return member ? [member] : [];
});

export default function Team() {
  const sectionRef = useSectionReveal();
  const swiperRef = useRef<SwiperType | null>(null);
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
        ? "border-[#B8A898] bg-[#E8E0D5] text-[#9B8B7E] cursor-not-allowed"
        : "border-[#3D4844] bg-[#3D4844]/8 text-[#3D4844] hover:bg-[#3D4844]/15",
    );

  return (
    <section
      ref={sectionRef}
      className="rounded-[24px] lg:rounded-[40px] bg-[#ECE0D1] m-2 py-16 md:py-20 lg:py-[80px] lg:m-4 overflow-hidden"
    >
      <div className="mx-auto px-6 lg:px-[60px]">
        <div className="mb-10 md:mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[850px] flex flex-col gap-4 md:gap-5 lg:gap-6">
            <Eyebrow variant="secondary">{microneedlingTeam.eyebrow}</Eyebrow>

            <Heading
              className="text-[#3D4844] lg:text-[64px] leading-[115%]"
              before={microneedlingTeam.headingBefore}
              highlight={microneedlingTeam.headingHighlight}
            />

            <Description className="text-[#423627]">
              {microneedlingTeam.description}
            </Description>
          </div>

          <div className="flex shrink-0 items-center gap-3 mt-6 lg:mt-0">
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

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncNavState(swiper);
          }}
          onSlideChange={syncNavState}
          spaceBetween={24}
          slidesPerView={1.05}
          speed={500}
          allowTouchMove
          watchOverflow
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.4 },
            1280: { slidesPerView: 3.4 },
          }}
        >
          {team.map((doctor) => (
            <SwiperSlide key={doctor.slug}>
              <DoctorCard {...doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
