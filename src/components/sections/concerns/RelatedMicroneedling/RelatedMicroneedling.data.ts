import {
  cocktailCollections,
  type CocktailRow,
} from "@/src/components/sections/treatments/microneedling/Microneedling.data";

export type ConcernKey =
  | "acne-scarring"
  | "wrinkles"
  | "uneven-skin-tone"
  | "dull-skin";

export interface RelatedCocktail {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  exclusive?: boolean;
}

const allRows: CocktailRow[] = cocktailCollections.flatMap((collection) =>
  collection.groups.flatMap((group) =>
    group.rows.map((row) => ({
      ...row,
      exclusive: row.exclusive || group.exclusive,
    })),
  ),
);

function fromRow(id: string): RelatedCocktail {
  const row = allRows.find((item) => item.id === id);
  if (!row) throw new Error(`Unknown microneedling cocktail: ${id}`);

  return {
    id: row.id,
    title: row.title,
    price: row.price,
    duration: row.duration,
    description: row.description,
    exclusive: row.exclusive,
  };
}

// ZO® Brightalive is one of the three ZO® boosters, so it has its own card here.
const zoBrightalive: RelatedCocktail = (() => {
  const zo = fromRow("zo-clinical-boosters");
  return {
    ...zo,
    id: "zo-brightalive",
    title: "ZO® Brightalive",
    description:
      "Microneedling paired with a professional ZO® booster serum. Brightalive to even tone and restore radiance.",
  };
})();

/**
 * Cocktails per concern, taken from the "Find your cocktail" table in the
 * client brief. The intro line and heading are our own wording.
 */
export const relatedMicroneedling: Record<
  ConcernKey,
  { concern: string; cocktails: RelatedCocktail[] }
> = {
  "acne-scarring": {
    concern: "acne scarring and uneven texture",
    cocktails: [
      fromRow("prp-regeneration"),
      fromRow("exosome-pdrn2000"),
      fromRow("exosome-nad"),
    ],
  },
  wrinkles: {
    concern: "fine lines and wrinkles",
    cocktails: [
      fromRow("refining-retinol-peptide"),
      fromRow("exosome-nad"),
      fromRow("exosome-pdrn2000"),
    ],
  },
  "uneven-skin-tone": {
    concern: "pigmentation, dark spots and uneven tone",
    cocktails: [
      fromRow("melatone-balance-peptide"),
      zoBrightalive,
      fromRow("exosome-nad"),
    ],
  },
  "dull-skin": {
    concern: "dehydration and dullness",
    cocktails: [fromRow("hydraglass-peptide"), fromRow("exosome-nad")],
  },
};

export const relatedMicroneedlingCopy = {
  eyebrow: "RECOMMENDED TREATMENT",
  headingBefore: "Treat It With",
  headingHighlight: "Microneedling",
  intro: (concern: string) =>
    `Our Korean electroporation microneedling works with your skin’s own repair process. These are the cocktails most often chosen for ${concern}.`,
  exclusiveLabel: "Exclusive to WALDOR",
  cardCta: "View cocktail",
  cta: {
    label: "Explore the Microneedling Cocktail Menu",
    href: "/treatments/microneedling",
  },
};
