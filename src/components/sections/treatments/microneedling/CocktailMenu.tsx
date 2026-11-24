"use client";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
// Same card structure as the other treatment pages.
import TreatmentGrid from "@/src/components/sections/treatments/hydra-glass/SignatureTreatments/TreatmentGrid";
import type { TreatmentCard } from "@/src/components/sections/treatments/hydra-glass/SignatureTreatments/types";
import { cocktailCollections, cocktailMenu } from "./Microneedling.data";

// Cards follow the client's brief: Refine, Regenerate, Reserve (ascending),
// each titled with its price, sub-headings and tags as written in the PDF.
const cards: TreatmentCard[] = cocktailCollections.map((collection) => ({
  id: collection.id,
  expandRows: true,
  title: collection.title,
  price: collection.price,
  description: collection.description,
  rows: collection.groups.flatMap((group) =>
    group.rows.map((row, rowIndex) => ({
      id: row.id,
      title: row.title,
      price: row.price,
      duration: row.duration,
      description: row.description,
      options: row.options,
      // The tag sits on the group heading; single rows (Exosome) carry their own.
      tag: row.exclusive ? cocktailMenu.exclusiveLabel : undefined,
      // First row of a titled group starts it with its sub-heading.
      groupHeading:
        rowIndex === 0 && group.title
          ? {
              title: group.title,
              tag: group.exclusive ? cocktailMenu.exclusiveLabel : undefined,
              intro: group.intro,
            }
          : undefined,
    })),
  ),
}));

export default function CocktailMenu() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="relative">
      <div className="m-2 lg:m-4 py-5">
        <div className="relative overflow-hidden rounded-[48px] bg-[#515D59] lg:pt-[120px] pt-[80px]">
          <div className="relative z-10 px-4 pb-6 pt-2 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            {/* Header */}
            <div className="max-w-7xl">
              <Eyebrow variant="secondary">{cocktailMenu.eyebrow}</Eyebrow>

              <Heading
                as="h2"
                className="mt-5 text-white max-w-4xl"
                before={cocktailMenu.headingBefore}
                highlight={cocktailMenu.headingHighlight}
              />

              <p
                data-reveal
                data-direction="left"
                className="mt-6 max-w-[760px] font-hanken text-base lg:text-[17px] leading-[1.7] text-[#ECE0D1]/85"
              >
                {cocktailMenu.intro}
              </p>
            </div>

            {/* Cards */}
            <div className="mt-16">
              <TreatmentGrid cards={cards} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
