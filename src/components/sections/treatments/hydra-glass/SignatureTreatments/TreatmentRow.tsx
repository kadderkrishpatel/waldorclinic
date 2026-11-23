"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, Clock } from "lucide-react";
import type { TreatmentRow as TreatmentRowType } from "./types";
import clsx from "clsx";

interface Props {
  row: TreatmentRowType;
  isOpen: boolean;
  onToggle: () => void;
}

export default function TreatmentRow({ row, isOpen, onToggle }: Props) {
  const hasDescription = Boolean(row.description);

  return (
    <motion.div
      layout
      transition={{
        layout: {
          duration: 0.35,
          ease: "easeInOut",
        },
      }}
      className="overflow-hidden border-t border-[#3D4844]"
    >
      <div
        onClick={hasDescription ? onToggle : undefined}
        role={hasDescription ? "button" : undefined}
        tabIndex={hasDescription ? 0 : undefined}
        className={clsx(
          "flex w-full items-center justify-between px-8 py-6 text-left",
          hasDescription && "cursor-pointer",
        )}
      >
        <div className="flex min-w-0 flex-col gap-1.5">
          <h4
            className={clsx(
              "text-[20px] font-medium",
              isOpen ? "text-[#C5A375]" : "text-[#ECE0D1]",
            )}
          >
            {row.title}
          </h4>

          {row.tag && (
            <span className="inline-flex w-fit items-center whitespace-nowrap rounded-full border border-[#C5A375]/60 bg-[#C5A375]/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase leading-4 tracking-[0.1em] text-[#C5A375] sm:text-[10px] sm:tracking-[0.14em]">
              {row.tag}
            </span>
          )}

          {row.duration && (
            <span className="flex items-center gap-1.5 text-[13px] text-[#9EA3A1]">
              <Clock size={14} className="text-[#C5A375]" />
              {row.duration}
            </span>
          )}
        </div>

        <div
          className={clsx(
            "flex shrink-0 items-center font-fraunces gap-2 text-[18px]",
            isOpen ? "text-[#C5A375]" : "text-[#ECE0D1]",
          )}
        >
          <p>{row.price}</p>

          {hasDescription &&
            (isOpen ? (
              <ChevronUp size={24} className="text-[#C5A375]" />
            ) : (
              <ChevronDown size={24} className="text-[#ECE0D1]" />
            ))}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {hasDescription && isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="px-8 pb-8"
            >
              {row.description && (
                <p className="text-[15px] leading-5 text-[#BEC2C1]" style={{ width: "88%" }}>
                  {row.description}
                </p>
              )}

              {row.options && row.options.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 text-[15px] leading-5 text-[#BEC2C1]">
                  {row.options.map((option) => (
                    <li key={option.label}>
                      <strong className="font-semibold text-[#ECE0D1]">
                        {option.label}
                      </strong>{" "}
                      {option.text}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
