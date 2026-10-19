"use client";

import { forwardRef, useId, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import {
  CardTitle,
  Description,
  DisplayNumber,
} from "@/src/components/ui/Typography";

interface TreatmentItemProps {
  item: {
    slug: string;
    number: string;
    title: string;
    description: string;
    image?: string;
    href: string;
  };
  active: boolean;
  onHover: () => void;
}

const TreatmentItem = forwardRef<HTMLDivElement, TreatmentItemProps>(
  ({ item, active, onHover }, ref) => {
    const [open, setOpen] = useState(false);
    const panelId = useId();

    return (
      <div
        ref={ref}
        onMouseEnter={onHover}
        className={`group relative border-b border-[#59615E] transition-all duration-500 ${active ? "lg:bg-[#4B5551]" : "lg:hover:bg-[#46504C]"}`}
      >
        {/* ============================= */}
        {/* MOBILE / TABLET — collapsible */}
        {/* ============================= */}
        <div className="lg:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="flex w-full flex-col gap-4 py-6 text-left md:py-8"
          >
            <DisplayNumber>{item.number}</DisplayNumber>

            {item.image && (
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 90vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex items-center justify-between gap-4">
              <CardTitle
                className={open ? "text-[#F2EEE7]" : "text-[#D8D7D2]"}
              >
                {item.title}
              </CardTitle>

              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C5A375]/50 text-[#C5A375] transition-colors duration-300 ${open ? "bg-[#C5A375] text-[#29302D]" : ""}`}
              >
                <ChevronDown
                  size={20}
                  strokeWidth={1.75}
                  className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                />
              </span>
            </div>
          </button>

          <div
            id={panelId}
            className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
          >
            <div className="overflow-hidden">
              <div className="flex flex-col items-start gap-5 pb-6 md:pb-8">
                <Description className="font-hanken font-light text-[#BEC2C1] opacity-80 leading-6 text-sm">
                  {item.description}
                </Description>

                <Link
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.08em] text-[#C5A375]"
                >
                  View Treatment
                  <ArrowUpRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============================= */}
        {/* DESKTOP — unchanged layout    */}
        {/* ============================= */}
        <div className="hidden lg:flex items-center gap-8 py-10">
          <div
            data-reveal
            data-direction="left"
            className="w-[80px] shrink-0 text-center"
          >
            <DisplayNumber>{item.number}</DisplayNumber>
          </div>

          <div className="flex-1 max-w-[800px] flex flex-col gap-6">
            <CardTitle
              className={
                active
                  ? "text-[#F2EEE7]"
                  : "text-[#D8D7D2] group-hover:text-white"
              }
            >
              {item.title}
            </CardTitle>

            <Description className="font-hanken font-light text-[#BEC2C1] opacity-70 leading-6 text-[15px]">
              {item.description}
            </Description>
          </div>

          <div className="ml-auto flex h-12 w-12 items-center justify-center">
            <ArrowUpRight
              size={24}
              strokeWidth={1.5}
              className={`transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${active ? "rotate-45 text-[#F2EEE7]" : "rotate-0 text-[#AEB4B1]"}`}
            />
          </div>

          {/* Whole row stays clickable on desktop */}
          <Link
            href={item.href}
            aria-label={item.title}
            onFocus={onHover}
            className="absolute inset-0"
          />
        </div>
      </div>
    );
  },
);

TreatmentItem.displayName = "TreatmentItem";

export default TreatmentItem;
