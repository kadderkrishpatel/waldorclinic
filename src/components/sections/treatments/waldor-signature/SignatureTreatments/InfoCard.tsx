import Link from "next/link";
import { Clock } from "lucide-react";
import type { InfoCard as InfoCardType } from "./types";

interface Props {
  card: InfoCardType;
}

/** Informational card (add-ons, complimentary extras) — only links out when a real href is given. */
export default function InfoCard({ card }: Props) {
  const content = (
    <>
      {/* Content */}
      <div className="w-full">
        <h3 className="text-[30px] font-medium leading-[1.05] tracking-[-0.03em] text-[#C5A375]">
          {card.title}
        </h3>

        <p className="mt-5 text-[15px] leading-7 text-[#BEC2C1]">
          {card.description}
        </p>

        {(card.price || card.duration) && (
          <div className="mt-7 flex items-center justify-between gap-4 border-t border-[#C5A375]/30 pt-6">
            {card.duration ? (
              <span className="flex items-center gap-2 text-[14px] text-[#9EA3A1]">
                <Clock size={16} className="text-[#C5A375]" />
                {card.duration}
              </span>
            ) : (
              <span />
            )}

            {card.price && (
              <span className="font-fraunces text-[26px] leading-none text-[#ECE0D1]">
                {card.price}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Optional decorative gradient */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
    </>
  );

  const className =
    "group relative flex h-auto flex-col justify-between overflow-hidden border border-[#C5A375] rounded-[32px] bg-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-10";

  if (card.href) {
    return (
      <Link data-reveal data-direction="left" href={card.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <div data-reveal data-direction="left" className={className}>
      {content}
    </div>
  );
}
