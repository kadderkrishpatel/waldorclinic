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

  {
    id: "facelift",
    title: "23D Skin Tightening Facelift",
    description:
      "High-intensity focused ultrasound penetrates deep layers of the skin to stimulate collagen production for lifting and tightening.",

    highlights: [
      { title: "23D HIFU", price: "from £349" },
      { title: "RF", price: "from £175" },
    ],

    rows: [
      {
        id: "23d-hifu-face-small",
        title: "23D HIFU - Face Small",
        price: "£349",
        duration: "25 min",
        description:
          "Our next-gen 23D HIFU Face treatment is a non-surgical facelift using high-intensity focused ultrasound to target the deeper layers of the skin for natural lifting, contouring, and tightening. No needles, no to little downtime, and long-lasting results. Ideal for delicate areas such as the eyes, brow, or chin for precise, targeted lifting.",
      },
      {
        id: "23d-hifu-face-medium",
        title: "23D HIFU - Face Medium",
        price: "£595",
        duration: "45 min",
        description:
          "Our next-gen 23D HIFU Face treatment is a non-surgical facelift using high-intensity focused ultrasound to target the deeper layers of the skin for natural lifting, contouring, and tightening. No needles, no to little downtime, and long-lasting results. Ideal for treating the lower face, jawline, or partial areas for targeted lifting.",
      },
      {
        id: "23d-hifu-face-large",
        title: "23D HIFU - Face Large",
        price: "£895",
        duration: "60 min",
        description:
          "Our next-gen 23D HIFU Face treatment is a non-surgical facelift using high-intensity focused ultrasound to target the deeper layers of the skin for natural lifting, contouring, and tightening. No needles, no to little downtime, and long-lasting results.",
      },
     
    ],
  },

  {
    id: "micro-needling",
    title: "Micro-Needling",
    description:
      "A collagen-inducing treatment using controlled microchannels to stimulate natural skin renewal, refine texture, minimise pores and soften fine lines.",

    rows: [
      {
        id: "microneedling-exosome",
        title: "Microneedling X Exosome",
        price: "£395",
        duration: "45 min",
        description:
          "This treatment pairs collagen-inducing microneedling with 100% plant-derived exosomes to calm, repair, and deeply hydrate the skin. Powered by botanical growth factors, it strengthens the skin barrier, supports regeneration, and leaves the complexion visibly smoother, clearer, and more resilient.",
      },
      {
        id: "microneedling-hydraglass-peptide",
        title: "Microneedling X HydraGlass Peptide",
        price: "£295",
        duration: "45 min",
        description:
          "A deeply hydrating peptide cocktail enriched with multi molecular hyaluronic acid to restore moisture and enhance radiance. Key Benefits are Deep hydration, Strengthens the skin barrier, Improves smoothness and plumpness and Enhances natural glow.",
      },
      {
        id: "microneedling-melatone-balance-peptide",
        title: "Microneedling X Melatone Balance Peptide",
        price: "£295",
        duration: "45 min",
        description:
          "A brightening peptide cocktail designed to improve uneven skin tone, reduce pigmentation, and restore clarity while supporting overall skin balance and hydration. Key Benefits: Improves pigmentation and uneven skin tone, Brightens and clarifies the complexion, Supports skin balance and hydration and Helps reduce dark spots and discolouration.",
      },
      {
        id: "microneedling-prp-regeneration",
        title: "Microneedling X PRP Regeneration",
        price: "£375",
        duration: "45 min",
        description:
          "This regenerative treatment merges collagen-boosting microneedling with your own platelet-rich plasma (PRP) to repair and renew the skin. It improves texture, tone, and elasticity for a firmer, smoother, naturally refreshed complexion.",
      },
      {
        id: "microneedling-zo",
        title: "Microneedling X ZO®",
        price: "£295",
        duration: "45 min",
        description:
          "Microneedling enhanced with professional ZO® booster serums to target specific skin concerns. Choose from Rozatrol for redness-prone or rosacea skin, Firming Serum to lift and tighten, or Brightalive to even tone and restore radiance. The treatment promotes deeper absorption, smoother texture, and a healthy, luminous glow.",
      },
      {
        id: "microneedling-exosome-btx",
        title: "Microneedling X Exosome + BTX",
        price: "£495",
        duration: "50 min",
        description:
          "Exosomes combined with advanced peptide complexes to soften fine lines and refine skin texture. Additional benefits: Softens fine lines and wrinkles, Refines skin texture and enhances collagen stimulation.",
      },
      {
        id: "microneedling-exosome-nad",
        title: "Microneedling X Exosome + NAD+",
        price: "£495",
        duration: "50 min",
        description:
          "Exosomes combined with NAD+, a coenzyme essential for cellular energy and repair. Additional Benefits: Supports cellular energy, Provides antioxidant protection and Improves skin vitality and resilience.",
      },
      {
        id: "microneedling-exosome-pdrn2000",
        title: "Microneedling X Exosome + PDRN2000",
        price: "£495",
        duration: "50 min",
        description:
          "Exosomes combined with PDRN (salmon DNA polynucleotides) to support deep cellular repair and regeneration. Additional Benefits: Deep cellular repair, Improves elasticity and skin strength and Brightens and revitalises the complexion.",
      },
      {
        id: "microneedling-multi-peptide-repair",
        title: "Microneedling X Multi Peptide Repair",
        price: "£295",
        duration: "50 min",
        description:
          "A regenerative peptide cocktail designed to restore skin strength, improve elasticity, and support collagen production. Key Benefits: Stimulates collagen production, Improves firmness and elasticity, Strengthens the skin barrier and Supports skin repair.",
      },
      {
        id: "microneedling-refining-retinol-peptide",
        title: "Microneedling X Refining Retinol Peptide",
        price: "£295",
        duration: "50 min",
        description:
          "A peptide cocktail enhanced with retinol to refine pores, smooth texture, and support skin renewal. The Key Benefits: Improves texture and smoothness, Refines pores and balances oil, Reduces fine lines and Supports skin renewal.",
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
        duration: "30 min",
        description:
          "Our advanced CO₂ laser treatment resurfaces the skin to improve texture, tone, and firmness. It targets fine lines, wrinkles, scarring, and sun damage by stimulating collagen and cell renewal for smoother, tighter, and more radiant skin. Ideal for smaller, delicate areas such as the eyes, upper lip, or chin.",
      },
      {
        id: "medium-area-co2-laser",
        title: "CO2 Laser - Medium Area",
        price: "£495",
        duration: "45 min",
        description:
          "Our advanced CO₂ laser treatment resurfaces the skin to improve texture, tone, and firmness. It targets fine lines, wrinkles, scarring, and sun damage by stimulating collagen and cell renewal for smoother, tighter, and more radiant skin. Ideal for medium areas such as the cheeks, jawline, or half face.",
      },
      {
        id: "large-area-co2-laser",
        title: "CO2 Laser - Large Area",
        price: "£695",
        duration: "60 min",
        description:
          "Our advanced CO₂ laser treatment resurfaces the skin to improve texture, tone, and firmness. It targets fine lines, wrinkles, scarring, and sun damage by stimulating collagen and cell renewal for smoother, tighter, and more radiant skin. Ideal for full-face rejuvenation.",
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
        duration: "20 min",
        description:
          "Our Baby Korean Glass Laser uses advanced fractional laser technology to deeply rejuvenate the skin, refine texture, and restore a smooth, radiant, ‘glass-skin’ glow. Ideal for smaller areas such as the forehead, nose, or chin. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
      {
        id: "medium-area-laser",
        title: "Baby Korean Glass Laser - Medium Area",
        price: "£350",
        duration: "40 min",
        description:
          "Our Baby Korean Glass Laser uses advanced fractional laser technology to deeply rejuvenate the skin, refine texture, and restore a smooth, radiant, ‘glass-skin’ glow. Ideal for cheeks, half face, or jawline. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
      {
        id: "large-area-laser",
        title: "Baby Korean Glass Laser - Large Area",
        price: "£450",
        duration: "50 min",
        description:
          "Our Baby Korean Glass Laser uses advanced fractional laser technology to deeply rejuvenate the skin, refine texture, and restore a smooth, radiant, ‘glass-skin’ glow. Ideal for full-face rejuvenation. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
      {
        id: "laser-patch-test",
        title: "Laser Patch Test",
        price: "£0",
        duration: "15 min",
        description:
          "A mandatory 48-hour patch test required before any laser treatment. This quick safety check ensures your skin responds well to the laser settings used for treatments such as resurfacing, pigmentation, or rejuvenation. Helps personalise your treatment plan for safe and effective results.",
      },
    ],
  },

  {
    id: "broad-pulse-light",
    title: "BPLaser",
    description:
      "A transformative light-therapy treatment that uses Intense Pulsed Light to reduce pigmentation, calm redness and refine skin texture. Leaves skin brighter, more even-toned and radiant.",

    rows: [
       {
        id: "medium-area-bpl",
        title: "BPLaser - Body Medium Area",
        price: "£245",
        duration: "30 min",
        description:"Our advanced next-generation Intense Pulsed Light system uses intelligent light technology to target pigmentation, redness, and uneven tone while stimulating collagen for visibly clearer, smoother, and more luminous skin."
      },
     
      {
        id: "small-area-bpl",
        title: "BPLaser - Body Large Area",
        price: "£295",
        duration: "40 min",
        description:"Our advanced next-generation Intense Pulsed Light system uses intelligent light technology to target pigmentation, redness, and uneven tone while stimulating collagen for visibly clearer, smoother, and more luminous skin."
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
        title: "ZO® Stimulator Peel",
        price: "£129",
        duration: "35 min",
        description:"Our ZO® Stimulator Peel delivers instant glow and refinement with no downtime. This mild yet powerful blend of lactic, citric, and glycolic acids exfoliates dead skin cells, brightens tone, and smooths texture. Perfect before events or as a regular skin refresh to restore clarity and radiance."
      },
      {
        id: "red-red-carpet-peel",
        title: "ZO® Red Carpet Peel",
        price: "£129",
        duration: "35 min",
        description:"Our ZO® Restorative Peel is a professional-strength chemical peel designed to deeply renew and strengthen the skin. It targets uneven tone, texture, and early signs of ageing while stimulating collagen for long-term skin health. Expect mild peeling as the skin regenerates, revealing a clearer, smoother, and more youthful complexion."
      },
      {
        id: "moderate-peel",
        title: "Moderate Peel",
        price: "£239",
        duration: "30 min",
        description:
          "Advanced skin resurfacing treatments that use carefully selected acids to exfoliate the outer layers of the skin, stimulate collagen production, and accelerate cellular renewal. They help improve skin texture, pigmentation, fine lines, acne, and overall skin radiance, revealing a smoother, brighter, and more youthful complexion. Mild to Moderate peeling for 3 to 5 days.",
      },
      {
        id: "advanced-peel",
        title: "Advanced Peel",
        price: "£339",
        duration: "30 min",
        description:
          "Advanced skin resurfacing treatments that use carefully selected acids to exfoliate the outer layers of the skin, stimulate collagen production, and accelerate cellular renewal. They help improve skin texture, pigmentation, fine lines, acne, and overall skin radiance, revealing a smoother, brighter, and more youthful complexion. Moderate to intensive peeling for 5 to 7 days.",
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
        title: " EMS + RFacelift",
        price: "£295",
        duration: "30 min",
        description:"Our EMS with Radio Frequency Face Treatment combines muscle stimulation and deep dermal heating to lift, tighten, and define facial contours. EMS technology works to tone and strengthen facial muscles, while radio frequency boosts collagen and elastin for smoother, firmer, more radiant skin. Ideal for achieving an instant lift and long-term firmness with no downtime."
      },
    ],
  },

  {
    id: "cavitation-rf",
    title: "Cavitation + RF",
    description:
      "Refined facial contouring treatment combining ultrasound and radiofrequency to enhance facial definition while supporting a more toned, sculpted complexion.",

    rows: [
      {
        id: "cavitation-rf-face-small",
        title: "Cavitation + RF - Face Small",
        price: "£175",
        duration: "20 min",
        description:
          "Our facial Cavitation + RF treatment combines ultrasound cavitation with radiofrequency to refine the appearance of facial contours and help skin look firmer and smoother. This appointment focuses on one small facial treatment area. Your practitioner will tailor the treatment to your face and goals. Results vary.",
      },
      {
        id: "cavitation-rf-face-medium",
        title: "Cavitation + RF - Face Medium",
        price: "£275",
        duration: "25 min",
        description:
          "Our facial Cavitation + RF treatment combines ultrasound cavitation with radiofrequency to refine the appearance of facial contours and help skin look firmer and smoother. This appointment covers a medium facial treatment area. Your practitioner will tailor the treatment to your face and goals. Results vary.",
      },
      {
        id: "cavitation-rf-face-large",
        title: "Cavitation + RF - Face Large",
        price: "£350",
        duration: "30 min",
        description:
          "Our facial Cavitation + RF treatment combines ultrasound cavitation with radiofrequency to refine the appearance of facial contours and help skin look firmer and smoother. This appointment covers a large facial treatment area. Your practitioner will tailor the treatment to your face and goals. Results vary.",
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

  {
    id: "ai-skin-analysis-consultation",
    title: "AI Skin Analysis & Consultation",
    description:
      "Discover your skin in a whole new way. Our advanced 4D AI analysis creates a detailed model of your face, helping us assess hydration, pigmentation, pores, fine lines and skin texture. We’ll review the results with you, discuss your concerns and build a personalised plan for treatments such as lasers, skin tightening and facials, alongside a skincare routine tailored to your skin.",
    price: "£95",
    duration: "10 min",
  },
];
