import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our",
  highlight: "Signature Treatments",
  description:
    "Every treatment includes a complimentary, personalised consultation with one of WALDOR's expert aestheticians. For selected treatments, this is enhanced with a state-of-the-art 4D AI skin analysis from Japan.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "glass-skin",
    title: "South Korean Glass Skin",
    description:
      "Our signature South Korean glass skin treatment uses 3-10 advanced technologies in one session, tailored to the patient’s skin type and concerns.",

    rows: [
      {
        id: "hydra-glass",
        title: "HydraGlass™",
        price: "£195",
        description:"A tailored facial delivering gentle exfoliation, precise extractions, deep hydration, and a dedicated step to target your individual skin concerns, leaving your complexion rejuvenated, balanced, and radiant."
      },
      {
        id: "premium",
        title: "HydraGlass™ Premium",
        price: "£225",
        description:"A lavish facial combining gentle exfoliation, precise extractions, and deep hydration, enhanced with targeted boosters, advanced masks, and specialised steps to address your individual skin concerns. This treatment delivers a profoundly nourished, refined, and radiant complexion for those seeking the ultimate skin experience. This treatment includes a complimentary AI skin analysis, providing a detailed assessment of your skin’s condition to fully personalise and optimise your facial for the best results."
      },
      /*{
        id: "premium-fnd",
        title: "HydraGlass™ Premium Face, Neck & Décolletage",
        price: "£335",
        description:
          "A tailored facial extending beyond the face to include the neck and décolleté, combining gentle exfoliation, precise extractions, and deep hydration with targeted treatments for your individual skin concerns. Designed to rejuvenate, smooth, and restore radiance across all areas, leaving your skin balanced, refined, and visibly refreshed. ",
      },*/
      {
        id: "pregnancy",
        title: "HydraGlass™ Pregnancy",
        price: "£245",
        description:"HydraGlass™ (Pregnancy & Breastfeeding Safe): A soothing, bespoke manual facial tailored for expecting and breastfeeding clients, featuring gentle exfoliation, precise extractions, and rich hydration to rejuvenate and illuminate the skin."
      },
      {
        id: "lymphatic-sculpt",
        title: "HydraGlass™ Lymphatic Sculpt",
        price: "£295",
        description:"A tailored HydraGlass™ facial enhanced with specialised lymphatic drainage massage techniques to help reduce puffiness, improve circulation, and encourage natural detoxification. Combining gentle exfoliation, deep hydration, and sculpting massage movements, this treatment leaves the skin looking refreshed, lifted, and radiant with more defined facial contours."
      },
       {
        id: "ai-skin-analysis",
        title: "HydraGlass™ & AI Skin Analysis",
        price: "£295",
        description:"Your treatment begins with our advanced 4D AI Skin Analysis, providing a detailed assessment of your skin’s condition and concerns. Using these results, your facial is tailored with gentle exfoliation, precise extractions, deep hydration, and targeted treatment steps designed specifically for your skin, leaving your complexion rejuvenated, balanced, and radiant."
      },
      {
        id: "longevity",
        title: "HydraGlass™ Longevity",
        price: "£295",
        description: "HydraGlass™ Longevity is WALDOR Clinic’s advanced skin longevity facial, designed to regenerate, protect, and support long-term skin health while delivering our signature HydraGlass™ glow. This bespoke treatment combines deep hydration, gentle exfoliation, precision extractions, and refined manual techniques, enhanced with customised longevity cocktails containing high-grade regenerative ingredients such as NAD, polynucleotides, growth factors, and bioactive peptides. The focus is improved cellular repair, a stronger skin barrier, and visible radiance, leaving skin hydrated, luminous, resilient, and youthful."
      },
      
      /*{
        id: "clear-back",
        title: "HydraGlass™ Clear Back",
        price: "£275",
        description:
          "A bespoke HydraGlass™ treatment for the upper back, designed to deeply cleanse, refine, and rebalance the skin. Combining exfoliation, precise extractions, hydration, and calming care, it targets congestion and uneven texture while restoring clarity, smoothness, and a healthier-looking glow.",
      },*/
      {
        id: "lifting",
        title: "HydraGlass™ Lifting",
        price: "£379",
        description:"A targeted facial designed to lift, firm, and sculpt the skin. Combining gentle exfoliation, precise extractions, deep hydration, and specialised steps focused on enhancing elasticity and contour, this treatment leaves your complexion visibly lifted, toned, and radiant. This treatment includes a complimentary AI skin analysis, providing a detailed assessment of your skin’s condition to fully personalise and optimise your facial for the best results."
      },
    ],
  },

  {
    id: "xerf-structural-tightening",
    title: "XERF Structural Tightening",
    description:
      "A next-generation, non-invasive treatment using dual-frequency radiofrequency to target multiple layers of the skin, stimulate collagen and improve laxity. Creates firmer, smoother and more lifted contours with no needles, no numbing and no downtime.",

    rows: [],
  },

  {
    id: "facelift",
    title: "23D Skin Tightening Facelift",
    description:
      "High-intensity focused ultrasound treatments using layers of the skin to stimulate collagen production for lifting and tightening.",

    rows: [
      {
        id: "2d-hifu",
        title: "23D HIFU",
        price: "from £349",
      },
      {
        id: "rf",
        title: "RF",
        price: "from £175",
      },
    ],
  },

  {
    id: "ems-rf-contouring",
    title: "EMS + RF Contouring",
    description:
      "A combination of electrical muscle stimulation and radiofrequency to tone facial muscles, tighten skin, and enhance definition.",

    rows: [
      {
        id: "",
        title: "EMS + RF Facelift",
        price: "£295",
        description:"Our EMS with Radio Frequency Face Treatment combines muscle stimulation and deep dermal heating to lift, tighten, and define facial contours. EMS technology works to tone and strengthen facial muscles, while radio frequency boosts collagen and elastin for smoother, firmer, more radiant skin. Ideal for achieving an instant lift and long-term firmness with no downtime."
      },
    ],
  },

  {
    id: "co2-laser",
    title: "CO2 Laser",
    description:
      "This resurfacing laser reduces deep wrinkles, scars, and pigmentation, revealing smoother, rejuvenated skin.",

    rows: [
      {
        id: "small-area-co2-laser",
        title: "CO2 Laser - Small Area",
        price: "£295",
        description:
          "Our advanced CO₂ laser treatment resurfaces the skin to improve texture, tone, and firmness. It targets fine lines, wrinkles, scarring, and sun damage by stimulating collagen and cell renewal for smoother, tighter, and more radiant skin. Ideal for smaller, delicate areas such as the eyes, upper lip, or chin.",
      },
      {
        id: "medium-area-co2-laser",
        title: "CO2 Laser - Medium Area",
        price: "£495",
        description:
          "Our advanced CO₂ laser treatment resurfaces the skin to improve texture, tone, and firmness. It targets fine lines, wrinkles, scarring, and sun damage by stimulating collagen and cell renewal for smoother, tighter, and more radiant skin. Ideal for medium areas such as the cheeks, jawline, or half face. ",
      },
      {
        id: "large-area-co2-laser",
        title: "CO2 Laser - Large Area",
        price: "£695",
        description:
          "Our advanced CO₂ laser treatment resurfaces the skin to improve texture, tone, and firmness. It targets fine lines, wrinkles, scarring, and sun damage by stimulating collagen and cell renewal for smoother, tighter, and more radiant skin. Ideal for full-face rejuvenation.",
      },
    ],
  },

  {
    id: "chemical-peels",
    title: "Chemical Peel",
    description:
      "Advanced skin resurfacing treatments that use carefully selected acids to exfoliate the outer layers of the skin, stimulate collagen production, and accelerate cellular renewal. They help improve skin texture, pigmentation, fine lines, acne, and overall skin radiance, revealing a smoother, brighter, and more youthful complexion.",

    rows: [
      {
        id: "red-carpet-peel",
        title: "ZO® Red Carpet Peel",
        price: "£129",
        description:"Our ZO® Restorative Peel is a professional-strength chemical peel designed to deeply renew and strengthen the skin. It targets uneven tone, texture, and early signs of ageing while stimulating collagen for long-term skin health. Expect mild peeling as the skin regenerates, revealing a clearer, smoother, and more youthful complexion."
      },
      {
        id: "moderate-peel",
        title: "Moderate Peel",
        price: "£239",
        description:
          "Advanced skin resurfacing treatments that use carefully selected acids to exfoliate the outer layers of the skin, stimulate collagen production, and accelerate cellular renewal. They help improve skin texture, pigmentation, fine lines, acne, and overall skin radiance, revealing a smoother, brighter, and more youthful complexion. Mild to Moderate peeling for 3 to 5 days.",
      },
      {
        id: "advanced-peel",
        title: "Advanced Peel",
        price: "£339",
        description:
          "Advanced skin resurfacing treatments that use carefully selected acids to exfoliate the outer layers of the skin, stimulate collagen production, and accelerate cellular renewal. They help improve skin texture, pigmentation, fine lines, acne, and overall skin radiance, revealing a smoother, brighter, and more youthful complexion. Moderate to intensive peeling for 5 to 7 days.",
      },
    ],
  },

  {
    id: "baby-korean-glass-laser",
    title: "Baby Korean Glass Laser",
    description:
      "A gentle yet effective laser treatment designed to refine skin texture, reduce fine lines, and enhance radiance.",

    rows: [
      {
        id: "small-area-laser",
        title: "Baby Korean Glass Laser - Small Area",
        price: "£250",
        description:
          "Our Baby Korean Glass Laser uses advanced fractional laser technology to deeply rejuvenate the skin, refine texture, and restore a smooth, radiant, ‘glass-skin’ glow. Ideal for smaller areas such as the forehead, nose, or chin. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
      {
        id: "medium-area-laser",
        title: "Baby Korean Glass Laser - Medium Area",
        price: "£350",
        description:
          "Our Baby Korean Glass Laser uses advanced fractional laser technology to deeply rejuvenate the skin, refine texture, and restore a smooth, radiant, ‘glass-skin’ glow. Ideal for cheeks, half face, or jawline. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability. ",
      },
      {
        id: "large-area-laser",
        title: "Baby Korean Glass Laser - Large Area",
        price: "£450",
        description:
          "Our Baby Korean Glass Laser uses advanced fractional laser technology to deeply rejuvenate the skin, refine texture, and restore a smooth, radiant, ‘glass-skin’ glow. Ideal for full-face rejuvenation. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
    ],
  },

  {
    id: "broad-pulse-light",
    title: "Broad-Pulse Light (B-PL)",
    description:
      "A transformative light-therapy treatment that uses Intense Pulsed Light to reduce pigmentation, calm redness, and refine skin texture. Leaves skin brighter, more even-toned and radiant.",

    rows: [
       {
        id: "medium-area-bpl",
        title: "BPL - Body Medium Area",
        price: "£245",
        description:"Our advanced next-generation Intense Pulsed Light system uses intelligent light technology to target pigmentation, redness, and uneven tone while stimulating collagen for visibly clearer, smoother, and more luminous skin."
      },
     
      {
        id: "small-area-bpl",
        title: "BPL - Body Large Area",
        price: "£295",
        description:"Our advanced next-generation Intense Pulsed Light system uses intelligent light technology to target pigmentation, redness, and uneven tone while stimulating collagen for visibly clearer, smoother, and more luminous skin."
      },
     
    ],
  },
];

export const infoCards: InfoCard[] = [
  {
    id: "neck",
    title: "Neck & Décolleté Add-Ons",
    description:
      "Enhance your results by adding the neck and/or décolleté to any facial treatment for an additional fee. Pricing varies by treatment—please ask your aesthetician during consultation.",
  },

  {
    id: "complimentary",
    title: "Complimentary Enhancements",
    description:
      "LED Therapy is included with most treatments to enhance results. Every treatment also includes the WALDOR Clinic Hydration Mask for post-treatment calm and radiance, ensuring your skin feels refreshed and revitalized.",
  },
];
