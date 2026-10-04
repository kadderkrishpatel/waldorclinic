"use client";
import Link from "next/link";
import { useRef } from "react";
import useInViewOnce from "@/src/components/hooks/useInViewOnce";
import { ArrowDownRight } from "lucide-react";

export interface TreatmentCardProps {
  title: string;
  description: string;
  video: string;
  href: string;
  offset?: boolean;
}

export default function TreatmentCard({
  title,
  description,
  video,
  href,
}: TreatmentCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInViewOnce(videoRef, "200px");

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <Link
      href={href}
      onPointerEnter={playVideo}
      onPointerLeave={pauseVideo}
      onFocus={playVideo}
      onBlur={pauseVideo}
      data-reveal
      data-direction="top"
      className="group relative block h-full w-full overflow-hidden rounded-full border-[8px] lg:border-[10px] border-[#D8C2A3] bg-[#D8C2A3]"
    >
      {/* Video: shows first frame, plays only on hover */}
      <video
        ref={videoRef}
        src={inView ? `${video}#t=0.001` : undefined}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
        tabIndex={-1}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 lg:p-12 xl:p-14">
        {/* Arrow */}
        <div className="flex justify-center">
          <div className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center transition-all duration-300 group-hover:-rotate-70">
            <ArrowDownRight className="h-7 w-7 lg:h-9 lg:w-9 text-[#F3EDE3]" />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-heading italic text-[#F3EDE3] text-[26px] sm:text-[30px] lg:text-[34px] leading-tight">
            {title}
          </h3>

          <p className="mt-3 max-w-[220px] font-hanken text-sm lg:text-[15px] leading-6 text-[#D8C2A3]">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
