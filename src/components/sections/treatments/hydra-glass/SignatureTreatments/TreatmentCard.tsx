"use client";
import { useState } from "react";
import TreatmentRow from "./TreatmentRow";
import type { TreatmentCard as TreatmentCardType } from "./types";
import clsx from "clsx";

interface Props {
  card: TreatmentCardType;
}

export default function TreatmentCard({ card }: Props) {
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
        "rounded-[32px] bg-[#29302D] h-full overflow-hidden",
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

      <div className="scrollbar-hide max-h-[420px] overflow-y-auto">
        {card.rows.map((row, index) => (
          <TreatmentRow
            key={row.id}
            row={row}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </article>
  );
}
