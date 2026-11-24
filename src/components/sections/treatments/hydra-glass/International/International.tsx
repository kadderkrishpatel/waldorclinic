"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { internationalData } from "./International.data";
import ClinicCard from "./ClinicCard";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function International() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden rounded-[24px] lg:rounded-[40px] pt-16 md:pt-20 lg:pt-28 xl:pt-[120px] pb-0"
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px]">
        {/* Heading */}
        <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col gap-4 md:gap-5 lg:gap-6">
          <Eyebrow variant="secondary">{internationalData.eyebrow}</Eyebrow>

          <Heading
            className="text-[#E4E6E5] lg:text-[64px]"
            before={internationalData.heading.before}
            highlight={internationalData.heading.highlight}
          />

          <Description className="max-w-[900px] text-[#9EA3A1]">
            {internationalData.description}
          </Description>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          allowTouchMove
          slidesPerView={1.05}
          spaceBetween={16}
          pagination={{
            clickable: true,
            el: ".international-pagination",
            bulletClass: "international-bullet",
            bulletActiveClass: "international-bullet-active",
          }}
          breakpoints={{
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 1.5, spaceBetween: 28 },
            1024: { slidesPerView: 2, spaceBetween: 32 },
            1280: { slidesPerView: 2, spaceBetween: 40 },
          }}
          className="!overflow-visible"
        >
          {internationalData.clinics.map((clinic) => (
            <SwiperSlide key={clinic.name} className="!h-auto">
              <ClinicCard {...clinic} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="mt-6 md:mt-8 lg:mt-8 flex justify-start">
          <div className="international-pagination flex items-center gap-2 md:gap-3" />
        </div>
      </div>
    </section>
  );
}
