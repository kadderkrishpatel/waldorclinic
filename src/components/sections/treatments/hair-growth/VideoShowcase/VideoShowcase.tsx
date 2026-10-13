"use client";
import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { videoShowcaseData } from "./VideoShowcase.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import useInViewOnce from "@/src/components/hooks/useInViewOnce";

export default function VideoShowcase() {
  const sectionRef = useSectionReveal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  // The video is only downloaded once the section is close to the viewport.
  const shouldLoad = useInViewOnce(frameRef, "300px");
  const {
    eyebrow,
    before,
    highlight,
    description,
    video,
    videoLabel,
    badge,
    features,
    cta,
  } = videoShowcaseData;

  // Play while visible, pause while scrolled away (saves CPU, GPU and memory).
  useEffect(() => {
    const frame = frameRef.current;
    if (!frame || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const el = videoRef.current;
        if (!el) return;
        if (entry.isIntersecting) {
          if (!userPausedRef.current) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(frame);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const toggle = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      userPausedRef.current = false;
      el.play().catch(() => {});
    } else {
      userPausedRef.current = true;
      el.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative m-2 overflow-hidden rounded-[24px] bg-[#3D4844] lg:m-4 lg:rounded-[32px]"
    >
      {/* Soft gold glow behind the video */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/2 h-[720px] w-[720px] translate-x-1/2 bg-[radial-gradient(circle,rgba(197,163,117,0.26)_0%,transparent_65%)] lg:bottom-auto lg:right-[-10%] lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0"
      />

      <div className="relative mx-auto grid items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-[60px] lg:py-[100px]">
        {/* Content */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <Eyebrow variant="secondary">{eyebrow}</Eyebrow>

          <Heading
            before={before}
            highlight={highlight}
            className="text-[34px] sm:text-5xl lg:text-[64px] lg:leading-[105%]"
          />

          <Description className="max-w-[560px] text-[#E4E6E5]">
            {description}
          </Description>

          <ul className="flex flex-col gap-4">
            {features.map((feature) => (
              <li
                key={feature}
                data-reveal
                data-direction="left"
                className="flex items-center gap-4 font-hanken text-base text-[#F3ECE3] lg:text-lg"
              >
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#C5A375]/60 text-[#C5A375]"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8.5l3 3 6-7" />
                  </svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <div
            data-reveal
            data-direction="left"
            className="mt-2 flex flex-col gap-4 sm:flex-row"
          >
            <Button variant="gold" href={cta.href}>
              {cta.label}
            </Button>
          </div>
        </div>

        {/* Video */}
        <div
          data-reveal
          data-direction="right"
          className="flex justify-center lg:justify-end"
        >
          <div
            ref={frameRef}
            className="relative aspect-[9/16] w-[min(78vw,340px)] sm:w-[360px] lg:w-[400px] xl:w-[440px]"
          >
            {/* Offset outline for depth */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[32px] border border-[#C5A375]/50 lg:translate-x-6 lg:translate-y-6"
            />

            {/* Arched video frame */}
            <div className="group relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[32px] border-[8px] border-[#D8C2A3] bg-[#D8C2A3] shadow-[0_30px_80px_rgba(0,0,0,0.4)] lg:border-[10px]">
              <video
                ref={videoRef}
                src={shouldLoad ? `${video}#t=0.001` : undefined}
                aria-label={videoLabel}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/30 px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C5A375] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C5A375]" />
                </span>
                <span className="font-hanken text-[11px] font-bold uppercase tracking-[0.16em] text-[#F3ECE3]">
                  {badge}
                </span>
              </div>

              {/* Play / pause */}
              <button
                type="button"
                onClick={toggle}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
