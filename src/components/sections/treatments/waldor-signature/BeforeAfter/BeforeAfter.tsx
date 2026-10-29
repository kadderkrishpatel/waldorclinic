"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { transformationData } from "./TransformationSection.data";
import TransformationCard from "./TransformationCard";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import useMergedRefs from "@/src/components/hooks/useMergedRefs";

export default function BeforeAfter() {
  const sectionRef = useRef<HTMLElement>(null);
  const sectionRevealRef = useSectionReveal();
  const mergedRef = useMergedRefs(sectionRef, sectionRevealRef);
  const swiperRef = useRef<SwiperType | null>(null);
  const [ready, setReady] = useState(false);

  useHorizontalScroll({
    section: sectionRef,
    swiper: swiperRef,
    enabled: ready,
  });

  return (
    <section
      ref={mergedRef}
      className="overflow-hidden rounded-[24px] lg:rounded-[40px] py-16 md:py-20 lg:py-28 xl:py-[120px] "
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px] before-after">
        {/* Heading */}
        <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col gap-4 md:gap-5 lg:gap-6">
          <Eyebrow variant="secondary">{transformationData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#E4E6E5] lg:text-[64px]"
            before={transformationData.heading.before}
            highlight={transformationData.heading.highlight}
          />

          <Description className="max-w-[900px] text-[#9EA3A1]">
            {transformationData.description}
          </Description>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            //setReady(true);
          }}
          allowTouchMove={true}
          slidesPerView={1.02}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".transformation-pagination",
            bulletClass: "transformation-bullet",
            bulletActiveClass: "transformation-bullet-active",
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.05,
              spaceBetween: 18,
            },

            640: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 1.5,
              spaceBetween: 22,
            },

            1024: {
              slidesPerView: 1.7,
              spaceBetween: 24,
            },

            1280: {
              slidesPerView: 2,
              spaceBetween: 24,
            },

            1536: {
              slidesPerView: 2.2,
              spaceBetween: 28,
            },
          }}
          className="!overflow-visible"
        >
          {transformationData.transformations.map((item) => (
            <SwiperSlide key={item.title}>
              <TransformationCard {...item} swiper={swiperRef} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="mt-8 md:mt-10 lg:mt-16 xl:mt-20 flex justify-start">
          <div className="transformation-pagination flex items-center gap-2 md:gap-3" />
        </div>
      </div>
    </section>
  );
}
