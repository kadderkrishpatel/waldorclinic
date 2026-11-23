"use client";
import Image from "next/image";
import { Check } from "lucide-react";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { asset } from "@/src/lib/assets";
import { microneedlingHero } from "@/src/components/sections/treatments/microneedling/Microneedling.data";
import {
  relatedMicroneedling,
  relatedMicroneedlingCopy,
  type ConcernKey,
} from "./RelatedMicroneedling.data";

interface Props {
  concern: ConcernKey;
}

// Short selling points, all taken from the client's microneedling copy.
const highlights = [
  "Made in our own laboratories in Korea",
  "Delivered by our proprietary electroporation pen",
  "Minimal downtime",
];

/**
 * "Recommended treatment" banner on concern pages: introduces Microneedling
 * and links to the full Cocktail Menu page.
 */
export default function RelatedMicroneedling({ concern }: Props) {
  const sectionRef = useSectionReveal();
  const { concern: concernLabel } = relatedMicroneedling[concern];

  // "From £295" is shown as a small "From" label beside a large price.
  const price = microneedlingHero.priceLine.match(/^from\s+(.*)$/i);

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="relative overflow-hidden rounded-[40px] bg-[#29302D]">
        {/* Decorative leaf */}
        <Image
          src={asset("/assets/waldor/decorations/exp-leaf-top.png")}
          alt=""
          width={200}
          height={437}
          className="pointer-events-none absolute -right-6 top-0 w-[110px] opacity-30 sm:w-[140px] lg:right-0 lg:w-[170px] lg:opacity-40"
        />

        <div className="relative z-10 grid gap-10 px-6 py-14 md:px-10 md:py-16 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-16 lg:px-[60px] lg:py-[90px]">
          {/* Text */}
          <div className="flex flex-col items-start gap-6">
            <Eyebrow variant="secondary">{microneedlingHero.eyebrow}</Eyebrow>

            <Heading
              as="h2"
              className="text-[36px] text-[#F1ECE4] md:text-[52px] lg:text-[60px] leading-[110%]"
              before={relatedMicroneedlingCopy.headingBefore}
              highlight={relatedMicroneedlingCopy.headingHighlight}
            />

            <p
              data-reveal
              data-direction="left"
              className="max-w-[620px] font-hanken text-base leading-[1.7] text-[#ECE0D1]/80 lg:text-[17px]"
            >
              {microneedlingHero.description}
            </p>

            <p
              data-reveal
              data-direction="left"
              className="inline-flex max-w-full flex-wrap items-center gap-x-2 rounded-full border border-[#C5A375]/40 bg-[#C5A375]/10 px-5 py-2 font-hanken text-[13px] leading-5 text-[#ECE0D1]"
            >
              <span className="font-bold uppercase tracking-[0.14em] text-[#C5A375]">
                Often chosen for
              </span>
              <span>
                {concernLabel.charAt(0).toUpperCase() + concernLabel.slice(1)}
              </span>
            </p>

            <div data-reveal data-direction="left" className="mt-2 w-full sm:w-auto">
              <Button
                variant="gold"
                href={relatedMicroneedlingCopy.cta.href}
                className="w-full sm:w-auto"
              >
                {relatedMicroneedlingCopy.cta.label}
              </Button>
            </div>
          </div>

          {/* Highlights panel */}
          <div
            data-reveal
            data-direction="right"
            className="rounded-[28px] border border-[#3D4844] bg-[#323A37] p-7 sm:p-9"
          >
            <div className="flex items-end gap-4 border-b border-[#4A5551] pb-6">
              {price ? (
                <>
                  <span className="pb-2 font-hanken text-xs font-bold uppercase tracking-[0.18em] text-[#9EA3A1]">
                    From
                  </span>
                  <span className="font-fraunces text-[56px] leading-none tracking-[-0.03em] text-[#C5A375] lg:text-[68px]">
                    {price[1]}
                  </span>
                </>
              ) : (
                <span className="font-fraunces text-[48px] leading-none text-[#C5A375]">
                  {microneedlingHero.priceLine}
                </span>
              )}
            </div>

            <ul className="mt-6 flex flex-col gap-4">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-hanken text-[15px] leading-6 text-[#D8D7D2]"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C5A375]/20 text-[#C5A375]">
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
