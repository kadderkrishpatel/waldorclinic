import type { TreatmentCard } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our",
  highlight: "HydraGlass™ Facial Treatments",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "hydraglass",
    title: "HydraGlass™",
    description:
      "An advanced facial that deeply cleanses, gently exfoliates and intensely hydrates, revealing smooth, radiant, glass-like skin.",

    rows: [
      {
        id: "premium",
        title: "HydraGlass™ Premium",
        price: "£225",
        duration: "60 min",
        description:
          "A lavish facial combining gentle exfoliation, precise extractions, and deep hydration, enhanced with targeted boosters, advanced masks, and specialised steps to address your individual skin concerns. Compared with our standard HydraGlass, HydraGlass Premium includes an additional 10 minutes for extra steps and technologies, selected according to your skin condition and concerns. This treatment delivers a profoundly nourished, refined, and radiant complexion for those seeking the ultimate skin experience.",
      },
      {
        id: "clear-back",
        title: "HydraGlass™ Clear Back",
        price: "£275",
        duration: "75 min",
        description:
          "A bespoke HydraGlass treatment for the upper back, designed to deeply cleanse, refine, and rebalance the skin. Combining exfoliation, precise extractions, hydration, and calming care, it targets congestion and uneven texture while restoring clarity, smoothness, and a healthier-looking glow.",
      },
      {
        id: "longevity",
        title: "HydraGlass™ Longevity",
        price: "£295",
        duration: "70 min",
        description:
          "HydraGlass™ Longevity is WALDOR Clinic’s advanced skin longevity facial, designed to regenerate, protect, and support long-term skin health while delivering our signature HydraGlass glow. This bespoke treatment combines deep hydration, gentle exfoliation, precision extractions, and refined manual techniques, enhanced with customised longevity cocktails containing high-grade regenerative ingredients such as NAD, polynucleotides, growth factors, and bioactive peptides. The focus is improved cellular repair, a stronger skin barrier, and visible radiance, leaving skin hydrated, luminous, resilient, and youthful.",
      },
      {
        id: "lumi-x",
        title: "HydraGlass™ Lumi X",
        price: "£495",
        duration: "100 min",
        description:
          "Our signature Korean glass-skin facial, powered by light. HydraGlass™ Lumi X combines gentle exfoliation, precise extractions and deep hydration with our Korean Baby Glass Laser or BPLaser, selected to suit your skin. “Lumi” brings a new dimension to your glow, pairing our signature glass finish with targeted care for concerns such as pigmentation, acne, acne scars, uneven tone and texture. For suitable clients, melasma may also be addressed as part of a personalised treatment plan. A tailored approach to a clearer, smoother and more luminous complexion.",
      },
      {
        id: "lymphatic-sculpt",
        title: "HydraGlass™ Lymphatic Sculpt",
        price: "£295",
        duration: "75 min",
        description:
          "A tailored HydraGlass facial enhanced with specialised lymphatic drainage massage techniques to help reduce puffiness, improve circulation, and encourage natural detoxification. Combining gentle exfoliation, deep hydration, and sculpting massage movements, this treatment leaves the skin looking refreshed, lifted, and radiant with more defined facial contours.",
      },
      {
        id: "pregnancy",
        title: "HydraGlass™ Pregnancy",
        price: "£245",
        duration: "60 min",
        description:
          "HydraGlass (Pregnancy & Breastfeeding Safe): A soothing, bespoke manual facial tailored for expecting and breastfeeding clients, featuring gentle exfoliation, precise extractions, and rich hydration to rejuvenate and illuminate the skin.",
      },
      {
        id: "hydra-glass",
        title: "HydraGlass™",
        price: "£195",
        duration: "50 min",
        description:
          "A tailored facial delivering gentle exfoliation, precise extractions, deep hydration, and a dedicated step to target your individual skin concerns, leaving your complexion rejuvenated, balanced, and radiant.",
      },
      {
        id: "premium-fnd",
        title: "HydraGlass™ Premium Face, Neck & Décolletage",
        price: "£335",
        duration: "75 min",
        description:
          "A tailored facial extending beyond the face to include the neck and décolleté, combining gentle exfoliation, precise extractions, and deep hydration with targeted treatments for your individual skin concerns. Designed to rejuvenate, smooth, and restore radiance across all areas, leaving your skin balanced, refined, and visibly refreshed.",
      },
      {
        id: "ai-skin",
        title: "HydraGlass™ & AI Skin Analysis",
        price: "£295",
        duration: "70 min",
        description:
          "Your treatment begins with our advanced 4D AI Skin Analysis, providing a detailed assessment of your skin’s condition and concerns. Using these results, your facial is tailored with gentle exfoliation, precise extractions, deep hydration, and targeted treatment steps designed specifically for your skin, leaving your complexion rejuvenated, balanced, and radiant.",
      },
      {
        id: "lifting",
        title: "HydraGlass™ Lifting",
        price: "£379",
        duration: "90 min",
        description:
          "A targeted facial designed to lift, firm, and sculpt the skin. Combining gentle exfoliation, precise extractions, deep hydration, and specialised steps focused on enhancing elasticity and contour, this treatment leaves your complexion visibly lifted, toned, and radiant. This treatment includes a complimentary AI skin analysis, providing a detailed assessment of your skin’s condition to fully personalise and optimise your facial for the best results.",
      },
    ],
  },
];

/** Flat list of every service, used for the page's structured data (SEO). */
export const treatmentRows = treatmentCards.flatMap((card) => card.rows);
