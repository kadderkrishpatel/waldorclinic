"use client";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import {
  relatedMicroneedling,
  relatedMicroneedlingCopy,
  type ConcernKey,
  type RelatedCocktail,
} from "./RelatedMicroneedling.data";

interface Props {
  concern: ConcernKey;
}

const PAGE_HREF = relatedMicroneedlingCopy.cta.href;

function CocktailCard({
  cocktail,
  hidden,
}: {
  cocktail: RelatedCocktail;
  hidden?: boolean;
}) {
  return (
    <Link
      href={PAGE_HREF}
      tabIndex={hidden ? -1 : undefined}
      aria-label={hidden ? undefined : `${cocktail.title}, ${cocktail.price}`}
      className="group flex w-[290px] shrink-0 flex-col gap-4 rounded-[28px] border border-[#3D4844] bg-[#323A37] p-6 transition-colors duration-300 hover:border-[#C5A375]/60 hover:bg-[#384240] sm:w-[330px] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-fraunces text-[22px] leading-tight text-[#ECE0D1]">
          {cocktail.title}
        </h3>
        <span className="shrink-0 font-fraunces text-[20px] text-[#C5A375]">
          {cocktail.price}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {cocktail.exclusive && (
          <span className="inline-flex whitespace-nowrap rounded-full border border-[#C5A375]/60 bg-[#C5A375]/15 px-2.5 py-0.5 font-hanken text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] text-[#C5A375]">
            {relatedMicroneedlingCopy.exclusiveLabel}
          </span>
        )}

        <span className="flex items-center gap-1.5 font-hanken text-[13px] text-[#9EA3A1]">
          <Clock size={14} className="text-[#C5A375]" />
          {cocktail.duration}
        </span>
      </div>

      <p className="line-clamp-4 font-hanken text-[14px] leading-6 text-[#BEC2C1]">
        {cocktail.description}
      </p>

      <span className="mt-auto inline-flex items-center gap-2 font-hanken text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
        {relatedMicroneedlingCopy.cardCta}
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}

/**
 * "Recommended treatment" block for concern pages. Cocktails for the concern
 * glide past automatically; hovering pauses them.
 */
export default function RelatedMicroneedlingSlider({ concern }: Props) {
  const sectionRef = useSectionReveal();
  const { concern: concernLabel, cocktails } = relatedMicroneedling[concern];

  // Repeat the set so one half is always wider than the screen, then render
  // two identical halves so the loop is seamless.
  const half = [0, 1, 2].flatMap((round) =>
    cocktails.map((cocktail) => ({ cocktail, key: `${round}-${cocktail.id}` })),
  );

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="overflow-hidden rounded-[40px] bg-[#29302D] py-14 md:py-16 lg:py-[80px]">
        <div className="mx-auto flex flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-[60px]">
          <div className="max-w-[760px]">
            <Eyebrow variant="secondary">
              {relatedMicroneedlingCopy.eyebrow}
            </Eyebrow>

            <Heading
              as="h2"
              className="mt-4 text-[36px] text-[#F1ECE4] md:text-[52px] lg:text-[60px] leading-[110%]"
              before={relatedMicroneedlingCopy.headingBefore}
              highlight={relatedMicroneedlingCopy.headingHighlight}
            />

            <p
              data-reveal
              data-direction="left"
              className="mt-5 font-hanken text-base leading-[1.7] text-[#ECE0D1]/80 lg:text-[17px]"
            >
              {relatedMicroneedlingCopy.intro(concernLabel)}
            </p>
          </div>

          <div data-reveal data-direction="left" className="shrink-0">
            <Button
              variant="gold"
              href={relatedMicroneedlingCopy.cta.href}
              className="w-full sm:w-auto"
            >
              {relatedMicroneedlingCopy.cta.label}
            </Button>
          </div>
        </div>

        <div className="related-marquee mt-10 lg:mt-14">
          <div className="related-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="flex shrink-0 gap-5 pr-5"
              >
                {half.map(({ cocktail, key }) => (
                  <CocktailCard
                    key={key}
                    cocktail={cocktail}
                    hidden={copy === 1}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
