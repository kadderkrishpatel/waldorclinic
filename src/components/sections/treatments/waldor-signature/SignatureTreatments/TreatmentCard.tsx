"use client";
import { useState } from "react";
import TreatmentRow from "./TreatmentRow";
import type { TreatmentCard as TreatmentCardType } from "./types";
import clsx from "clsx";

interface Props {
  card: TreatmentCardType;
}

const priceValue = (price?: string) =>
  parseFloat((price ?? "").replace(/[^0-9.]/g, "")) || 0;

export default function TreatmentCard({ card }: Props) {
  // Services sorted by price, low to high (stable for equal prices)
  const sortedRows = [...card.rows].sort(
    (a, b) => priceValue(a.price) - priceValue(b.price),
  );

  // First accordion open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <article
      data-reveal
      data-direction="left"
      className={clsx(
        "flex h-full flex-col overflow-hidden rounded-[32px] bg-[#29302D]",
        card.fullWidth && "lg:col-span-2 h-auto",
      )}
    >
      <div className="p-8">
        <h3 className="text-[32px] text-[#ECE0D1]">{card.title}</h3>

        <p className="mt-4 text-[#9EA3A1]">{card.description}</p>

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

      {/* On desktop the list fills whatever height remains in the card (set by the
          taller neighbour) and scrolls inside it, so there is no empty gap below. */}
      <div
        className={clsx(
          "relative min-h-0 flex-1",
          !card.fullWidth && "lg:min-h-[320px]",
        )}
      >
        <div
          className={clsx(
            "scrollbar-hide max-h-[420px] overflow-y-auto",
            !card.fullWidth && "lg:absolute lg:inset-0 lg:max-h-none",
          )}
        >
          {sortedRows.map((row, index) => (
            <TreatmentRow
              key={row.id}
              row={row}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
