"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { TeamMember } from "./TeamSection.data";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article data-reveal data-direction="left">
      <div
        className="relative aspect-[411/530] w-full overflow-hidden rounded-[32px] bg-[#515D59] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />

        {/* Overlay - Only visible on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-[#1A1F1D] via-[#1A1F1D]/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <h3 className="font-fraunces text-2xl text-[#F3ECE3] sm:text-3xl">
            {member.name}
          </h3>

          <p className="mt-2 font-hanken text-xs font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
            {member.designation}
          </p>

          {member.description && (
            <>
              <p
                className={cn(
                  "mt-3 font-hanken text-sm leading-5 text-[#BEC2C1]",
                  !expanded && "line-clamp-2",
                )}
              >
                {member.description}
              </p>

              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
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
    </article>
  );
}
