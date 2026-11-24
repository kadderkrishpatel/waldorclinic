import { asset } from "@/src/lib/assets";

/**
 * All copy for /treatments/microneedling, taken exactly from the client brief
 * (WALDOR_Microneedling_Page_Brief.pdf). UK English, no dashes.
 */

/**
 * Zenoti online booking (same link as the site's floating "Book Now" button).
 * TODO: swap for the direct Micro Needling category link once the client sends it.
 * Every Book button on the page reads this one value.
 */
export const MICRONEEDLING_BOOKING_URL =
  "https://waldorclinic.eu.zenoti.com/webstoreNew/services";

/** Complimentary consultation link (secondary button in the closing CTA). */
export const MICRONEEDLING_CONSULTATION_URL = "/contact-us";

export const microneedlingPageMeta = {
  title: "Microneedling London · Exosome and Peptide Cocktails · WALDOR Clinic",
  description:
    "Korean electroporation microneedling with exosome and peptide cocktails made exclusively for WALDOR in Korea. Book at our clinic near Oxford Circus.",
  path: "/treatments/microneedling",
};

/* ------------------------------------------------------------------ */
/* 1 Hero                                                              */
/* ------------------------------------------------------------------ */

export const microneedlingHero = {
  eyebrow: "KOREAN ELECTROPORATION MICRONEEDLING",
  headingBefore: "The WALDOR Microneedling",
  headingHighlight: "Cocktail Menu",
  description:
    "Peptide and exosome cocktails made in our own laboratories in Korea, delivered by our proprietary electroporation pen. Exceptional results with minimal downtime.",
  priceLine: "From £295",
  // Compressed from microneedling_treatment.MOV (720p, 30fps, no audio).
  video: asset("/assets/waldor/treatments/microneedling_treatment.mp4"),
  videoLabel:
    "Aesthetician performing Korean electroporation microneedling at WALDOR Clinic, London",
  cta: {
    label: "Book Your Cocktail",
    href: MICRONEEDLING_BOOKING_URL,
  },
};

/* ------------------------------------------------------------------ */
/* 2 Introduction                                                      */
/* ------------------------------------------------------------------ */

export const microneedlingIntro = {
  eyebrow: "ONE FOUNDATION, YOUR COCKTAIL",
  heading: "Microneedling, Mixed for Your Skin Alone",
  paragraphs: [
    "Every microneedling session at WALDOR begins with the same foundation: our proprietary Korean electroporation pen. Ultra fine needles create thousands of micro channels that awaken your skin’s own repair process, while a gentle electrical current carries your cocktail far deeper than a serum ever could on its own. Because the pen works with such precision, and every depth is set for your skin zone by zone, recovery is remarkably quick.",
    "What we infuse is where WALDOR is different. Our peptide and exosome cocktails are formulated and made in our laboratories in Korea, exclusively for our clinic. Your aesthetician chooses yours with you, guided by your skin, your goals and the result you want to see.",
  ],
};

/* ------------------------------------------------------------------ */
/* 3 How your session is built                                         */
/* ------------------------------------------------------------------ */

export const sessionSteps = {
  heading: "How your session is built",
  steps: [
    {
      number: "01",
      title: "The Foundation",
      description:
        "Our proprietary Korean electroporation pen, with needle depth tailored to each area of your face and performed by a senior aesthetic practitioner. Every session lasts 45 to 50 minutes.",
    },
    {
      number: "02",
      title: "Your Cocktail",
      description:
        "Choose from three collections: Refine, Regenerate or Reserve. Not sure which? Your aesthetician will guide you at the start of your appointment.",
    },
    {
      number: "03",
      title: "The Finish",
      description:
        "LED light therapy and the WALDOR Clinic Hydration Mask are included in every session to calm the skin and seal in the glow.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 4 The Cocktail Menu                                                 */
/* ------------------------------------------------------------------ */

export interface CocktailRow {
  id: string;
  title: string;
  price: string;
  duration: string;
  description: string;
  /** Shows the small gold "Exclusive to WALDOR" tag on the row. */
  exclusive?: boolean;
  /** Optional short list under the description (used by ZO® Clinical Boosters). */
  options?: { label: string; text: string }[];
}

export interface CocktailGroup {
  id: string;
  title?: string;
  exclusive?: boolean;
  intro?: string;
  rows: CocktailRow[];
}

export interface CocktailCollection {
  id: string;
  title: string;
  price: string;
  description: string;
  groups: CocktailGroup[];
}

export const cocktailMenu = {
  eyebrow: "THE COCKTAIL MENU",
  headingBefore: "Three Collections.",
  headingHighlight: "One Exclusive Lab.",
  intro:
    "Every cocktail is delivered through our proprietary electroporation pen. Start with Refine for targeted results, move to Regenerate for deeper repair, or reserve our most advanced exosome mixology for a true reset.",
  exclusiveLabel: "Exclusive to WALDOR",
};

export const cocktailCollections: CocktailCollection[] = [
  {
    id: "refine",
    title: "Refine",
    price: "£295",
    description:
      "Targeted cocktails for a specific concern. The ideal place to begin.",
    groups: [
      {
        id: "peptide-signature-blends",
        title: "WALDOR™ Peptide Signature Blends",
        exclusive: true,
        intro:
          "Peptides are cellular messengers that tell your skin to build collagen, repair its barrier and renew. Each blend is formulated and made in our laboratories in Korea for one clear purpose.",
        rows: [
          {
            id: "hydraglass-peptide",
            title: "HydraGlass™ Peptide",
            price: "£295",
            duration: "45 min",
            description:
              "Multi molecular hyaluronic acid layered with peptides for deep hydration, a stronger barrier and a plump, glass skin glow. Built on HydraGlass™, our signature proprietary protocol based on the Korean glass skin approach and exclusive to WALDOR Clinic. Best for dull, dehydrated skin and a glow before a big event.",
          },
          {
            id: "multi-peptide-repair",
            title: "Multi Peptide Repair",
            price: "£295",
            duration: "50 min",
            description:
              "Our regenerative blend to stimulate collagen, improve firmness and elasticity, and strengthen skin that feels tired or thin. Best for the first signs of laxity and skin that needs rebuilding.",
          },
          {
            id: "refining-retinol-peptide",
            title: "Refining Retinol Peptide",
            price: "£295",
            duration: "50 min",
            description:
              "Peptides enhanced with retinol to refine pores, balance oil, smooth texture and soften fine lines. Best for congested, oily or uneven textured skin.",
          },
          {
            id: "melatone-balance-peptide",
            title: "Melatone Balance Peptide",
            price: "£295",
            duration: "45 min",
            description:
              "A brightening blend for pigmentation, dark spots and uneven tone, restoring clarity while keeping skin balanced and hydrated. Best for sun spots, post acne marks and uneven tone.",
          },
        ],
      },
      {
        id: "zo-boosters",
        rows: [
          {
            id: "zo-clinical-boosters",
            title: "ZO® Clinical Boosters",
            price: "£295",
            duration: "45 min",
            description:
              "The clinical choice for one precise concern. Microneedling paired with a professional ZO® booster serum, selected for you from three:",
            options: [
              {
                label: "Rozatrol",
                text: "for redness prone and rosacea prone skin",
              },
              { label: "Firming Serum", text: "to lift and tighten" },
              {
                label: "Brightalive",
                text: "to even tone and restore radiance",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "regenerate",
    title: "Regenerate",
    price: "from £375",
    description: "Deeper repair that works with your skin’s own healing biology.",
    groups: [
      {
        id: "regenerate-rows",
        rows: [
          {
            id: "prp-regeneration",
            title: "PRP Regeneration",
            price: "£375",
            duration: "45 min",
            description:
              "Your own platelet rich plasma, drawn on the day, is infused through microneedling to repair and renew. Improves texture, tone and elasticity for firmer, naturally refreshed skin. Best for acne scarring and clients who prefer a fully natural approach.",
          },
          {
            id: "exosome",
            title: "Exosome",
            price: "£395",
            duration: "45 min",
            exclusive: true,
            description:
              "100% plant derived exosomes made in our laboratories in Korea. Botanical growth factors calm, repair and deeply hydrate, leaving skin smoother, clearer and more resilient. Best for sensitive, reactive or recovering skin.",
          },
        ],
      },
    ],
  },
  {
    id: "reserve",
    title: "Reserve",
    price: "£495",
    description: "",
    groups: [
      {
        id: "exosome-mixology",
        title: "Exosome Mixology",
        exclusive: true,
        intro:
          "Our most advanced cocktails. Each pairs our plant derived exosomes with a second active for a result neither could achieve alone. 50 minutes.",
        rows: [
          {
            id: "exosome-pdrn2000",
            title: "Exosome + PDRN2000",
            price: "£495",
            duration: "50 min",
            description:
              "Exosomes with PDRN (salmon DNA polynucleotides) for deep cellular repair and a collagen boost that softens fine lines, leaving skin stronger, more elastic and visibly brighter. Best for scarring, fine lines, thinning skin and visible ageing.",
          },
          {
            id: "exosome-nad",
            title: "Exosome + NAD+",
            price: "£495",
            duration: "50 min",
            description:
              "Exosomes with NAD+, the coenzyme behind cellular energy and repair. Antioxidant protection, refined texture, a more even tone and renewed vitality for skin that has lost its spark. Our longevity cocktail, best for tired or lacklustre skin, fine lines, pigmentation and scarring.",
          },
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5 Bursting Microneedling Myths                                      */
/* ------------------------------------------------------------------ */

export const myths = {
  eyebrow: "THE TRUTH ABOUT MICRONEEDLING",
  heading: "Bursting Microneedling Myths",
  intro:
    "Microneedling has a reputation it does not deserve. Here is what it is really like at WALDOR.",
  truthLabel: "Truth",
  items: [
    {
      myth: "“I’ll leave covered in bruises.”",
      truth:
        "We set the depth for each zone of your face, lighter around delicate areas, and our proprietary pen moves with real precision. Most clients leave with nothing more than a healthy flush.",
    },
    {
      myth: "“I’ll need a week at home.”",
      truth:
        "Our proprietary electroporation pen, paired with calming cocktails and LED therapy, keeps recovery remarkably quick. Most clients return to their day straight away.",
    },
    {
      myth: "“Deeper needles mean better results.”",
      truth:
        "Results come from the right depth, not the deepest one. Your plan maps a different depth to each area based on your skin and your concern, so we create change exactly where it is needed and nowhere else.",
    },
    {
      myth: "“Microneedling is painful.”",
      truth:
        "We apply numbing before we begin, and most clients describe a light vibration rather than pain.",
    },
    {
      myth: "“Microneedling is microneedling. The serum doesn’t matter.”",
      truth:
        "At WALDOR, the cocktail is the treatment. Our peptide and exosome cocktails are made in our laboratories in Korea, then carried deeper by electroporation, so every session works harder for your skin.",
    },
    {
      myth: "“It isn’t for sensitive skin.”",
      truth:
        "With the right depth and the right cocktail, sensitive and redness prone skin can respond beautifully. Our Exosome and ZO® Rozatrol cocktails are designed for exactly that, and we always assess suitability first.",
    },
  ],
  closingLine:
    "Extensive care, a bespoke plan, tailored depths, our proprietary pen and our most advanced cocktails. That is how we achieve results like no other, with less downtime than you would expect.",
  cta: {
    label: "Book Your Cocktail",
    href: MICRONEEDLING_BOOKING_URL,
  },
};

/* ------------------------------------------------------------------ */
/* 6 Find your cocktail                                                */
/* ------------------------------------------------------------------ */

export const findCocktail = {
  eyebrow: "NOT SURE WHERE TO START?",
  heading: "Find Your Cocktail",
  intro:
    "Start with what you want to change. Every concern can be taken further with our exosome mixology, the most advanced cocktails we make. Your aesthetician will confirm the right choice for you during your appointment.",
  columns: { concern: "Your concern", cocktails: "Your cocktails" },
  rows: [
    {
      concern: "Dehydration and dullness",
      cocktails: "HydraGlass™ Peptide · Exosome + NAD+",
    },
    {
      concern: "Enlarged pores, oiliness, rough texture",
      cocktails: "Refining Retinol Peptide · Exosome + PDRN2000",
    },
    {
      concern: "Pigmentation, dark spots, uneven tone",
      cocktails: "Melatone Balance Peptide · ZO® Brightalive · Exosome + NAD+",
    },
    {
      concern: "Redness and rosacea prone skin",
      cocktails: "ZO® Rozatrol · Exosome · Exosome + PDRN2000",
    },
    {
      concern: "Loss of firmness and elasticity",
      cocktails: "Multi Peptide Repair · ZO® Firming · Exosome + NAD+",
    },
    {
      concern: "Sensitised or recovering skin",
      cocktails: "Exosome · Exosome + PDRN2000",
    },
    {
      concern: "Acne scarring and uneven texture",
      cocktails: "PRP Regeneration · Exosome + PDRN2000 · Exosome + NAD+",
    },
    {
      concern: "Fine lines and wrinkles",
      cocktails:
        "Refining Retinol Peptide · Exosome + NAD+ · Exosome + PDRN2000",
    },
    {
      concern: "Tired skin and lost vitality",
      cocktails: "Multi Peptide Repair · Exosome + NAD+",
    },
    {
      concern: "Thinning, ageing skin",
      cocktails: "Multi Peptide Repair · Exosome + PDRN2000 · Exosome + NAD+",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 7 Included in every session                                         */
/* ------------------------------------------------------------------ */

export const includedInSession = {
  heading: "Complimentary in Every Session",
  items: [
    {
      title: "LED Light Therapy",
      text: "calms the skin and supports healing straight after microneedling.",
    },
    {
      title: "WALDOR Clinic Hydration Mask",
      text: ", a clinical grade sheet mask that soothes and replenishes for a radiant post treatment glow.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 8 Scalp microneedling                                               */
/* ------------------------------------------------------------------ */

export const scalpMicroneedling = {
  heading: "For Hair and Scalp",
  description:
    "Our exosome and PRP cocktails are also available as a scalp microneedling treatment, designed to stimulate the follicles and support stronger, healthier hair growth.",
  cta: {
    label: "Explore Hair Treatments",
    href: "/treatments/hair-growth",
  },
};

/* ------------------------------------------------------------------ */
/* 11 Why we're the right fit                                          */
/* ------------------------------------------------------------------ */

export const whyRightFit = {
  eyebrow: "WHY WE’RE THE RIGHT FIT?",
  quote: "“Your skin deserves a cocktail made for it, not a serum made for everyone.”",
  description:
    "At WALDOR, the cocktail is the treatment. Ours are developed and made in our own laboratories in Korea, chosen for you by an aesthetician who has studied your skin, and delivered by our proprietary pen. That is the WALDOR difference.",
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
};

/* ------------------------------------------------------------------ */
/* 12 Benefits                                                         */
/* ------------------------------------------------------------------ */

export const microneedlingBenefits = {
  eyebrow: "THE LASTING DIFFERENCE",
  headingBefore: "Benefits That Go",
  headingHighlight: "Beyond Appearance",
  items: [
    {
      id: "deeper-delivery",
      number: "01",
      title: "Deeper delivery",
      description: "Electroporation carries actives further than application alone.",
    },
    {
      id: "collagen-from-within",
      number: "02",
      title: "Collagen from within",
      description:
        "Microneedling triggers your skin’s own renewal, so results build over weeks.",
    },
    {
      id: "formulations-you-cannot-get-elsewhere",
      number: "03",
      title: "Formulations you cannot get elsewhere",
      description:
        "Our peptide and exosome cocktails are made only for WALDOR.",
    },
    {
      id: "visible-refinement",
      number: "04",
      title: "Visible refinement",
      description: "Smoother texture, tighter looking pores, more even tone.",
    },
    {
      id: "minimal-downtime",
      number: "05",
      title: "Minimal downtime",
      description:
        "Our proprietary pen and tailored depths mean most clients return to their day straight away with only a light flush.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 13 Team                                                             */
/* ------------------------------------------------------------------ */

export const microneedlingTeam = {
  eyebrow: "Your Trusted Practitioner",
  headingBefore: "Meet the Aestheticians Behind",
  headingHighlight: "Your Microneedling",
  description:
    "Great skin isn't luck; it's a discipline. Discover the specialists who sculpt, refine and deliver the glowing transformations our clients rave about.",
  /** Order for this page. Names must match the shared team data. */
  order: ["Abbie", "Beatrice", "Hend", "Marsi", "Dr. Irene", "Dr. Azadeh"],
};

/* ------------------------------------------------------------------ */
/* 15 FAQ                                                              */
/* ------------------------------------------------------------------ */

export const microneedlingFaq = {
  eyebrow: "FAQ",
  headingBefore: "Questions We're",
  headingHighlight: "Often Asked",
  items: [
    {
      id: 1,
      question: "What makes WALDOR’s cocktails different?",
      answer:
        "Our peptide and exosome cocktails are formulated and made in our own laboratories in Korea, exclusively for WALDOR.",
    },
    {
      id: 2,
      question: "What is electroporation microneedling?",
      answer:
        "It combines microneedling with a gentle electrical current that temporarily opens the skin, so your cocktail is delivered more deeply than with microneedling alone.",
    },
    {
      id: 3,
      question: "Does it hurt?",
      answer:
        "We apply numbing cream before we begin, so most clients describe a light prickling or vibrating sensation rather than pain.",
    },
    {
      id: 4,
      question: "Is there any downtime?",
      answer:
        "Far less than you might expect. Thanks to our proprietary electroporation pen and depths tailored to your skin, most clients leave with a light flush and return to their day straight away. We recommend no makeup for 24 hours and careful sun protection afterwards.",
    },
    {
      id: 5,
      question: "How many sessions will I need?",
      answer:
        "You will notice a glow after one session, while texture, scarring and firmness respond best to a course. Your aesthetician will recommend the right number and spacing for your skin.",
    },
    {
      id: 6,
      question: "Which collection should I choose?",
      answer:
        "Refine targets one clear concern, Regenerate focuses on deeper repair, and Reserve is our most advanced exosome mixology. Use Find Your Cocktail above, or let your aesthetician guide you.",
    },
    {
      id: 7,
      question: "Is microneedling suitable for all skin tones?",
      answer:
        "Microneedling is suitable for most skin tones and types. Your aesthetician will confirm suitability during your consultation.",
    },
    {
      id: 8,
      question: "Can I combine microneedling with other treatments?",
      answer:
        "Yes. Many clients alternate microneedling with HydraGlass™, laser or skin tightening as part of a wider plan. We will map the timing for you.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* 16 Closing CTA (rendered by the site footer)                        */
/* ------------------------------------------------------------------ */

export const microneedlingFooterCTA = {
  heading: {
    before: "Ready for",
    highlight: "Your Cocktail?",
  },
  headingMaxWidth: "max-w-[950px]",
  description:
    "Every cocktail is chosen around one thing: you. Book your session, or talk it through with us first.",
  highlightcolor: "#c5a375",
  button: {
    label: "Book Your Cocktail",
    href: MICRONEEDLING_BOOKING_URL,
  },
  secondaryButton: {
    label: "Book a Complimentary Consultation",
    href: MICRONEEDLING_CONSULTATION_URL,
  },
  note: "The consultation is free of charge. Treatments are not included and are priced separately.",
};
