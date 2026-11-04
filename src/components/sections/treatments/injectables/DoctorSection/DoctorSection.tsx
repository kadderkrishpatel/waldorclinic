"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { cn } from "@/src/lib/utils";
import DoctorCard from "./DoctorCard";
import { doctorSectionData } from "./DoctorSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import useMergedRefs from "@/src/components/hooks/useMergedRefs";

export default function DoctorSection() {
  // With only a couple of doctors a carousel looks empty — centre them instead.
  const isCentered = doctorSectionData.doctors.length <= 2;
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
        ? "border-[#B8A898] bg-[#E8E0D5] text-[#9B8B7E] cursor-not-allowed"
        : "border-[#3D4844] bg-[#3D4844]/8 text-[#3D4844] hover:bg-[#3D4844]/15",
    );

  useHorizontalScroll({
    section: sectionRef,
    swiper: swiperRef,
    enabled: ready,
  });

  return (
    <section
      ref={mergedRef}
      className="rounded-[24px] lg:rounded-[40px] bg-[#ECE0D1] m-2 py-16 md:py-20 lg:py-[80px] lg:m-4 overflow-hidden "
    >
      <div className="mx-auto px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="mb-10 md:mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[850px] flex flex-col gap-4 md:gap-5 lg:gap-6">
            <Eyebrow variant="secondary">{doctorSectionData.eyebrow}</Eyebrow>

            <Heading
              className="text-[#3D4844] lg:text-[64px] leading-[115%]"
              before={doctorSectionData.heading.before}
              highlight={doctorSectionData.heading.highlight}
            />

            <Description className="text-[#423627]">
              {doctorSectionData.description}
            </Description>
          </div>

          {/* Nav Arrows */}
          <div className={cn("flex shrink-0 items-center gap-3 mt-6 lg:mt-0", isCentered && "hidden")}>
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

        {isCentered ? (
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            {doctorSectionData.doctors.map((doctor) => (
              <div key={doctor.slug} className="w-full max-w-[411px]">
                <DoctorCard {...doctor} />
              </div>
            ))}
          </div>
        ) : (
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            syncNavState(swiper);
            //setReady(true);
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
          {doctorSectionData.doctors.map((doctor) => (
            <SwiperSlide key={doctor.slug}>
              <DoctorCard {...doctor} />
            </SwiperSlide>
          ))}
        </Swiper>
        )}
      </div>
    </section>
  );
}
