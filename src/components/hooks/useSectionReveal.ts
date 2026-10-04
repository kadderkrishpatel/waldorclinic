"use client";

import { useLayoutEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const OFFSET = 80;
const DURATION_MS = 900;
// Same curve as GSAP "power3.out"
const EASING = "cubic-bezier(0.215, 0.61, 0.355, 1)";

function getHiddenTranslate(direction: string) {
  switch (direction) {
    case "left":
      return `-${OFFSET}px 0`;
    case "right":
      return `${OFFSET}px 0`;
    case "down":
      return `0 -${OFFSET}px`;
    case "up":
    default:
      return `0 ${OFFSET}px`;
  }
}

function clearInlineStyles(el: HTMLElement) {
  el.style.removeProperty("opacity");
  el.style.removeProperty("translate");
  el.style.removeProperty("transition");
  el.style.removeProperty("will-change");
}

/**
 * Reveals every [data-reveal] element inside the returned section ref the
 * first time it scrolls into view (fade + 80px slide, same as before).
 *
 * Uses a single IntersectionObserver and the CSS `translate` property
 * (it composes with any existing `transform`), so no animation library or
 * per-element scroll listeners are needed.
 */
export default function useSectionReveal() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!elements.length) return;

    // Hide before first paint so there is no flash of unanimated content.
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.translate = getHiddenTranslate(el.dataset.direction || "up");
      el.style.willChange = "opacity, translate";
    });

    const reveal = (el: HTMLElement) => {
      const delay = Number(el.dataset.delay || 0);

      el.style.transition = `opacity ${DURATION_MS}ms ${EASING} ${delay}s, translate ${DURATION_MS}ms ${EASING} ${delay}s`;
      el.style.opacity = "1";
      el.style.translate = "0 0";

      window.setTimeout(
        () => clearInlineStyles(el),
        DURATION_MS + delay * 1000 + 50,
      );
    };

    // Elements inside a horizontal carousel (Swiper) may sit off-screen
    // sideways, so watch the carousel itself: all its slides are revealed
    // as soon as the carousel scrolls into view vertically.
    const groups = new Map<Element, HTMLElement[]>();
    elements.forEach((el) => {
      const target = el.closest(".swiper") ?? el;
      groups.set(target, [...(groups.get(target) ?? []), el]);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Reveal when in view, or when the page was restored below it.
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            observer.unobserve(entry.target);
            groups.get(entry.target)?.forEach(reveal);
          }
        });
      },
      // Fires at "top 80%" of the viewport, like the previous ScrollTrigger.
      { rootMargin: "0px 0px -20% 0px", threshold: 0 },
    );

    groups.forEach((_, target) => observer.observe(target));

    return () => {
      observer.disconnect();
      elements.forEach(clearInlineStyles);
    };
  }, [pathname]);

  return sectionRef;
}
