"use client";

import { RefObject, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";

interface Props {
  section: RefObject<HTMLElement | null>;

  // For normal horizontal sections
  track?: RefObject<HTMLDivElement | null>;

  // For Swiper sections
  swiper?: RefObject<SwiperType | null>;
  enabled?: boolean;
}

type Gsap = typeof import("gsap").default;
type ScrollTriggerType = typeof import("gsap/ScrollTrigger").ScrollTrigger;

// GSAP + ScrollTrigger (~115 KB) are loaded on demand, once the browser is
// idle, so they never compete with the hero for bandwidth or the main thread.
async function loadGsap() {
  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ]);
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}

function whenIdle(cb: () => void) {
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(cb, { timeout: 2000 });
    return () => window.cancelIdleCallback(id);
  }
  const id = globalThis.setTimeout(cb, 200);
  return () => globalThis.clearTimeout(id);
}

function setupScroll(
  gsap: Gsap,
  ScrollTrigger: ScrollTriggerType,
  sectionEl: HTMLElement,
  track?: HTMLDivElement | null,
  swiperInstance?: SwiperType | null,
): (() => void) | undefined {
  /**
   * ---------------------------------------
   * Swiper Mode
   * ---------------------------------------
   */
  if (swiperInstance) {
    const trigger = ScrollTrigger.create({
      trigger: sectionEl,

      start: "top top",

      end: () => "+=" + window.innerHeight * (swiperInstance.slides.length + 1),

      pin: true,

      scrub: 1,

      anticipatePin: 1,

      invalidateOnRefresh: true,

      onUpdate(self) {
        const totalSlides = swiperInstance.slides.length - 1;

        const index = Math.min(
          totalSlides,
          Math.round(self.progress * totalSlides),
        );

        if (swiperInstance.activeIndex !== index) {
          swiperInstance.slideTo(index);
        }
      },
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      trigger.kill();
    };
  }

  /**
   * ---------------------------------------
   * Normal Horizontal Track
   * ---------------------------------------
   */
  if (track) {
    const getDistance = () =>
      Math.max(0, track.scrollWidth - sectionEl.clientWidth);

    const tween = gsap.to(track, {
      x: () => -getDistance(),

      ease: "none",

      invalidateOnRefresh: true,

      scrollTrigger: {
        trigger: sectionEl,

        start: "top top",

        end: () => "+=" + (getDistance() + window.innerHeight),

        pin: true,

        scrub: 1,

        anticipatePin: 1,

        invalidateOnRefresh: true,
      },
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }
}

export default function useHorizontalScroll({
  section,
  track,
  swiper,
  enabled = true,
}: Props) {
  useEffect(() => {
    const sectionEl = section.current;

    if (!enabled) return;
    if (!sectionEl) return;

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    const cancelIdle = whenIdle(() => {
      loadGsap().then(({ gsap, ScrollTrigger }) => {
        if (cancelled) return;
        cleanup = setupScroll(
          gsap,
          ScrollTrigger,
          sectionEl,
          track?.current,
          swiper?.current,
        );
      });
    });

    return () => {
      cancelled = true;
      cancelIdle();
      cleanup?.();
    };
  }, [enabled, section, track, swiper]);
}
