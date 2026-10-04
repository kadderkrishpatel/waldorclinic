"use client";

import { RefObject, useEffect, useState } from "react";

/**
 * Returns true once the referenced element has come within `rootMargin` of
 * the viewport (and stays true afterwards). Use it to defer loading heavy
 * media such as videos until the user is about to see them.
 *
 * Elements with `display: none` never intersect, so media inside them is
 * never loaded.
 */
export default function useInViewOnce(
  ref: RefObject<Element | null>,
  rootMargin = "300px",
) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, rootMargin, inView]);

  return inView;
}
