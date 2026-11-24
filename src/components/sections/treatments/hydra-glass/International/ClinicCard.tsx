import type { ClinicItem } from "./International.data";

function PinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ClinicCard({
  region,
  name,
  addressLines,
  phone,
  phoneHref,
  mapsHref,
}: ClinicItem) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[20px] md:rounded-[24px] lg:rounded-[32px] bg-[#F3ECE3] p-6 md:p-8 lg:p-10">
      {/* Decorative gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C6A26D]/20 blur-2xl"
      />

      <div className="relative flex items-center justify-between gap-4">
        <span className="rounded-[8px] bg-[#EBE0D1] px-3 py-1.5 font-hanken text-xs font-bold uppercase tracking-[0.16em] text-[#997B4E] md:text-sm">
          {region}
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#333C39] text-[#C5A375]">
          <PinIcon />
        </span>
      </div>

      <h3 className="relative mt-8 font-fraunces text-[28px] font-normal leading-[110%] tracking-[-0.8px] text-[#29302D] md:text-[36px] lg:text-[44px]">
        {name}
      </h3>

      <div className="relative my-6 h-px w-full bg-[#C6A26D]/50" />

      <address className="relative font-hanken text-base not-italic leading-[160%] text-[#423627] md:text-lg">
        {addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>

      <div className="relative mt-8 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-8">
        <a
          href={phoneHref}
          className="inline-flex items-center gap-2 rounded-full bg-[#333C39] px-5 py-3 font-hanken text-sm font-semibold text-[#F3EDE3] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#29302D] md:text-base"
        >
          <PhoneIcon />
          {phone}
        </a>
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#997B4E]/50 px-5 py-3 font-hanken text-sm font-semibold text-[#997B4E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#997B4E]/10 md:text-base"
        >
          Get directions →
        </a>
      </div>
    </article>
  );
}
