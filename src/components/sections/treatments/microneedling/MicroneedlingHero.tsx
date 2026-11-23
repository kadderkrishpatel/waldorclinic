"use client";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { microneedlingHero } from "./Microneedling.data";

export default function MicroneedlingHero() {
  const sectionRef = useSectionReveal();
  const {
    eyebrow,
    headingBefore,
    headingHighlight,
    description,
    priceLine,
    video,
    videoLabel,
    cta,
  } = microneedlingHero;

  // "From £295" is shown as a small "From" label beside a large price.
  const priceFrom = priceLine.match(/^from\s+(.*)$/i);

  return (
    <section ref={sectionRef} className="bg-[#3D4844] m-2 lg:m-4">
      <div className="flex flex-col lg:flex-row lg:min-h-[900px] overflow-hidden rounded-[24px] bg-[#A48761] md:min-h-[800px] lg:rounded-[32px] pt-[120px] lg:pt-[150px] px-5 pb-12 sm:px-8 sm:pb-16 lg:px-[60px] lg:pb-4 gap-10 lg:gap-20">
        {/* Hero content */}
        <div className="flex justify-start items-center w-full lg:w-[50%]">
          <div className="w-full max-w-[600px] flex flex-col gap-5 lg:gap-8">
            <Eyebrow>{eyebrow}</Eyebrow>

            <Heading
              as="h1"
              before={headingBefore}
              highlight={headingHighlight}
            />

            <Description>{description}</Description>

            {/* Price and Book button in one row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <div
                data-reveal
                data-direction="left"
                aria-label={priceLine}
                className="flex w-fit flex-col justify-center gap-1.5 sm:border-r sm:border-[#29302D]/30 sm:pr-5"
              >
                {priceFrom ? (
                  <>
                    <span className="font-hanken text-[11px] font-bold uppercase leading-none tracking-[0.2em] text-[#29302D]/70">
                      From
                    </span>
                    <span className="font-fraunces text-[30px] leading-none tracking-[-0.02em] text-[#29302D] lg:text-[34px]">
                      {priceFrom[1]}
                    </span>
                  </>
                ) : (
                  <span className="font-fraunces text-[30px] leading-none text-[#29302D] lg:text-[34px]">
                    {priceLine}
                  </span>
                )}
              </div>

              <div data-reveal data-direction="left">
                <Button
                  variant="primary"
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Media */}
        <div
          data-reveal
          data-direction="right"
          className="relative flex justify-center h-[460px] sm:h-[600px] lg:left-auto lg:right-0 lg:h-[750px] lg:w-[50%] rounded-[24px] items-center lg:mt-20 lg:mb-0 overflow-hidden bg-[#2C3531]"
        >
          <video
            src={video}
            aria-label={videoLabel}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover object-center w-full rounded-[24px] h-full"
          />

          {/* Media overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3D4844]/70 lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#3D4844]/20" />
        </div>
      </div>
    </section>
  );
}
