"use client";
import { Fragment, useState } from "react";
import TreatmentRow from "./TreatmentRow";
import type { TreatmentCard as TreatmentCardType } from "./types";
import clsx from "clsx";

interface Props {
  card: TreatmentCardType;
}

export default function TreatmentCard({ card }: Props) {
  // First accordion open by default
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <article
      data-reveal
      data-direction="left"
      className={clsx(
        "rounded-[32px] bg-[#29302D] h-full overflow-hidden",
        card.fullWidth && "lg:col-span-2 h-auto",
      )}
    >
      <div className="p-8">
        {card.price ? (
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-[32px] text-[#ECE0D1]">{card.title}</h3>

            <p className="flex items-baseline gap-2 font-fraunces text-[26px] leading-none text-[#C5A375]">
              {(() => {
                const from = card.price.match(/^from\s+(.*)$/i);

                return from ? (
                  <>
                    <span className="font-hanken text-[11px] font-bold uppercase tracking-[0.18em] text-[#9EA3A1]">
                      From
                    </span>
                    {from[1]}
                  </>
                ) : (
                  card.price
                );
              })()}
            </p>
          </div>
        ) : (
          <h3 className="text-[32px] text-[#ECE0D1]">{card.title}</h3>
        )}

        {card.description && (
          <p className="mt-4 text-[#9EA3A1]">{card.description}</p>
        )}

        {card.highlights && card.highlights.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {card.highlights.map((item) => {
              const from = item.price.match(/^from\s+(.*)$/i);

              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center justify-center rounded-[20px] border border-[#3D4844] bg-[#323A37] px-6 py-6 text-center"
                >
                  <h4 className="text-[20px] font-medium text-[#ECE0D1]">
                    {item.title}
                  </h4>

                  {from && (
                    <span className="mt-3 text-[12px] uppercase tracking-[0.18em] text-[#9EA3A1]">
                      From
                    </span>
                  )}

                  <p
                    className={clsx(
                      "font-fraunces text-[28px] leading-none text-[#C5A375]",
                      from ? "mt-1.5" : "mt-3",
                    )}
                  >
                    {from ? from[1] : item.price}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div
        className={clsx(
          card.expandRows
            ? // Full height on mobile, a short scrollable list on desktop
              "scrollbar-hide lg:max-h-[340px] lg:overflow-y-auto"
            : "scrollbar-hide max-h-[420px] overflow-y-auto",
        )}
      >
        {card.rows.map((row, index) => (
          <Fragment key={row.id}>
            {row.groupHeading && (
              <div className="border-t border-[#3D4844] px-8 py-6">
                <h4 className="font-fraunces text-[22px] leading-tight text-[#ECE0D1]">
                  {row.groupHeading.title}
                </h4>

                {row.groupHeading.tag && (
                  <span className="mt-2 inline-flex w-fit items-center whitespace-nowrap rounded-full border border-[#C5A375]/60 bg-[#C5A375]/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] text-[#C5A375] sm:text-[10px] sm:tracking-[0.14em]">
                    {row.groupHeading.tag}
                  </span>
                )}

                {row.groupHeading.intro && (
                  <p className="mt-3 text-[15px] leading-6 text-[#9EA3A1]">
                    {row.groupHeading.intro}
                  </p>
                )}
              </div>
            )}

            <TreatmentRow
              row={row}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          </Fragment>
        ))}
      </div>
    </article>
  );
}
