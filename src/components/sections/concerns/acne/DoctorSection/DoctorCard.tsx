"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface DoctorCardProps {
  slug: string;
  image: string;
  name: string;
  role: string;
  description?: string;
}

export default function DoctorCard({
  slug,
  image,
  name,
  role,
  description,
}: DoctorCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      data-reveal
      data-direction="left"
      className="group relative block aspect-[411/530] overflow-hidden rounded-[32px] bg-[#515D59]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay - Only visible on hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-[#28302D] via-[#28302D]/10 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 overflow-y-auto",
          isHovered ? "opacity-100" : "opacity-0",
        )}
      >
        <h3 className="font-fraunces text-2xl text-[#BEC2C0]">{name}</h3>

        <p className="mt-2 font-hanken text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A375]">{role}</p>

        {description && (
          <>
            <p
              className={cn(
                "mt-3 font-hanken text-sm leading-5 text-[#BEC2C1]",
                !expanded && "line-clamp-2",
              )}
            >
              {description}
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setExpanded((prev) => !prev);
              }}
              className="mt-3 flex w-fit items-center gap-1.5 font-hanken text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A375] hover:text-[#D5B98D] transition-colors"
            >
              {expanded ? "View Less" : "View More"}

              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  expanded && "rotate-180",
                )}
              />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
