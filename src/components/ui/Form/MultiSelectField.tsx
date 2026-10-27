"use client";

import { Check, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/src/lib/utils";

interface MultiSelectFieldProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: { message?: string };
}

export default function MultiSelectField({
  label,
  options,
  value,
  onChange,
  onBlur,
  placeholder = "Select all that apply",
  error,
}: MultiSelectFieldProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep the latest onBlur without re-subscribing the listener every render
  // (the parent passes a fresh inline function each time).
  const onBlurRef = useRef(onBlur);
  useEffect(() => {
    onBlurRef.current = onBlur;
  });

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        onBlurRef.current?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const toggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const VISIBLE_COUNT = 2;
  const summary = value.length
    ? value.length <= VISIBLE_COUNT
      ? value.join(", ")
      : `${value.slice(0, VISIBLE_COUNT).join(", ")} +${value.length - VISIBLE_COUNT} more`
    : placeholder;

  return (
    <div className="flex flex-col gap-3" ref={containerRef}>
      {/* Label */}
      <label
        className={cn(
          "text-xs font-bold uppercase tracking-[2px] transition-colors duration-300",
          error ? "text-red-500" : "text-[#C5A375]",
        )}
      >
        {label}
      </label>

      {/* Multi-select */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            // Side effects must stay out of the setState updater (it can run
            // during render / twice in Strict Mode).
            setOpen(!open);
            if (open) onBlur?.();
          }}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            "flex w-full items-center justify-between gap-3 border-b bg-transparent pb-4 text-left text-[15px] outline-none transition-all duration-300",
            value.length ? "text-[#ECE0D1]" : "text-[#ECE0D1]/50",
            error
              ? "border-red-500"
              : open
                ? "border-[#C5A375]"
                : "border-[#59615E]",
          )}
        >
          <span className="truncate">{summary}</span>

          <ChevronDown
            size={18}
            className={cn(
              "shrink-0 text-[#C5A375] transition-transform duration-300",
              open && "rotate-180",
            )}
          />
        </button>

        {/* Dropdown panel — always opens downward, stays open across multiple picks */}
        <div
          role="listbox"
          aria-multiselectable="true"
          className={cn(
            "absolute left-0 right-0 top-full z-30 mt-2 origin-top overflow-hidden rounded-[16px] border border-white/10 bg-[#1F2422] shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-all duration-200",
            open
              ? "pointer-events-auto max-h-64 scale-100 opacity-100"
              : "pointer-events-none max-h-0 scale-95 opacity-0",
          )}
        >
          <div className="scrollbar-hide max-h-64 overflow-y-auto py-1.5">
            {options.map((option) => {
              const selected = value.includes(option);
              return (
                <button
                  key={option}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => toggleOption(option)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 border-0 px-4 py-2.5 text-left font-hanken text-[14px] tracking-[0.02em] transition-colors duration-200",
                    selected
                      ? "bg-[#C5A375]/15 text-[#C5A375]"
                      : "text-[#ECE0D1]/80 hover:bg-white/5 hover:text-[#ECE0D1]",
                  )}
                >
                  <span>{option}</span>

                  <span
                    className={cn(
                      "flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-200",
                      selected
                        ? "border-[#C5A375] bg-[#C5A375]"
                        : "border-[#59615E]",
                    )}
                  >
                    {selected && (
                      <Check size={12} strokeWidth={3} className="text-[#1F2422]" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="min-h-[20px]">
          <p className="text-sm text-red-500">{error.message}</p>
        </div>
      )}
    </div>
  );
}
