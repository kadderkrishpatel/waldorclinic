"use client";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useHorizontalScroll from "@/src/components/hooks/useHorizontalScroll";
import { successStoriesData } from "./SuccessStoriesSection.data";
import "swiper/css";
import "swiper/css/pagination";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import useMergedRefs from "@/src/components/hooks/useMergedRefs";

export default function SuccessStoriesSection() {
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
      className="relative overflow-hidden bg-[#3D4844] rounded-[24px] lg:rounded-[40px] m-2 lg:m-4 py-5"
    >
      <Image
        src={successStoriesData.successRightImg}
        alt=""
        width={320}
        height={371}
        className="absolute right-0 top-5 w-[120px] md:w-[180px] lg:w-[320px]"
      />

      <div className="rounded-[24px] px-5 lg:rounded-[32px] bg-[#515D59] py-16 md:py-20 lg:py-[120px] overflow-hidden">
        {/* Heading */}
        <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col gap-4 lg:gap-6 px-5 md:px-8 lg:px-[60px]">
          <Eyebrow variant="secondary">{successStoriesData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#E4E6E5] lg:text-[64px]"
            before={successStoriesData.heading.before}
            highlight={successStoriesData.heading.highlight}
          />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            //setReady(true);
          }}
          navigation
          pagination={{
            el: ".success-pagination",
            clickable: true,
          }}
          loop={false}
          speed={500}
          allowTouchMove={true}
          spaceBetween={20}
          slidesPerView={1.05}
          breakpoints={{
            480: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.2,
            },
            1024: {
              slidesPerView: 1.35,
            },
          }}
          className="!overflow-visible px-5 md:px-8 lg:!pl-[60px]"
        >
          {successStoriesData.testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article
                data-reveal
                data-direction="left"
                className="flex min-h-[490px] md:min-h-[430px] lg:min-h-[490px] flex-col justify-between rounded-[20px] lg:rounded-[24px] bg-[#3D4844] p-6 md:p-8 lg:p-10"
              >
                <p className="font-fraunces text-[22px] md:text-[24px] lg:text-[28px] leading-[1.5] text-[#E3E5E5]">
                  "{item.review}"
                </p>

                <div className="mt-10 pt-6">
                  <p className="text-sm md:text-base tracking-[2px] text-[#7D8582]">
                    {item.name} - {item.treatment}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="mt-8 lg:mt-12 flex justify-start px-5 md:px-8 lg:px-[60px]">
          <div className="success-pagination flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
}
