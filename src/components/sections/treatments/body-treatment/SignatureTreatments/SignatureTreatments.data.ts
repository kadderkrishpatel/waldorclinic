import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our Body",
  highlight: "Contouring Treatments",
  description:
    "At WALDOR Clinic, we offer bespoke body packages tailored to your unique needs. Whether you’re looking to address cellulite, enhance post-pregnancy recovery, achieve weight loss, or focus on body contouring, our personalized consultations ensure treatments designed exclusively for you.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "green-laser",
    title: "10D Korean Green Laser",
    description:
      "The 10D Korean Green Laser is our most advanced non-invasive body treatment. It helps reduce stubborn fat, tighten skin, and improve lymphatic drainage using low-level green laser technology. No pain, no downtime.",

    rows: [
      {
        id: "korean-glass-laser",
        title: "",
        price: "£295",
        description: "",
      },
    ],
  },

  {
    id: "korean-multifunction-slimming",
    title: "Korean Multifunction Slimming",
    description:
      "A bespoke body slimming treatment combining multiple technologies to target fat, tone muscles, and sculpt the body.",
    rows: [
      {
        id: "slimming-item",
        title: "",
        price: "£375",
        description: "",
      },
    ],
  },

  {
    id: "co2",
    title: "CO2",
    description:
      "Body skin resurfacing to improve texture, scars, or stretch marks, ranging from mild to deep treatments.",
    rows: [
      {
        id: "co2-item01",
        title: "CO2 - Medium",
        price: "£495",
        description: "Our CO₂ laser treatment for the body improves texture, tightness, and tone by stimulating deep collagen renewal. Ideal for treating scars, stretch marks, and skin laxity on areas such as the arms, neck, or décolletage.",
      },
      {
        id: "co2-item02",
        title: "CO2 - Large",
        price: "£625",
        description: "Our CO₂ laser treatment for the body improves texture, tightness, and tone by stimulating deep collagen renewal. Ideal for larger areas such as the abdomen, thighs, or buttocks to smooth, firm, and rejuvenate the skin.",
      },
    ],
  },

  {
    id: "baby-body-glass",
    title: "Baby Korean Body Glass",
    description:
      "A body-specific glass skin laser treatment to brighten and smooth areas like the arms, legs, or back",

    rows: [
      {
        id: "baby-body-glass-item",
        title: "Baby Korean Body Glass - Medium",
        price: "£425",
        description: "Our Baby Korean Glass Laser uses advanced fractional Erbium technology to smooth uneven texture, improve skin tone, and restore a luminous, refined finish. It helps tighten lax skin, fade pigmentation, and visibly reduce stretch marks while stimulating collagen and elastin for a firmer, glass-like glow. Ideal for medium areas such as the arms, flanks, or knees. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
      {
        id: "baby-body-glass-iteml",
        title: "Baby Korean Body Glass - Large",
        price: "£625",
        description: "Our Baby Korean Glass Laser uses advanced fractional Erbium technology to smooth uneven texture, improve skin tone, and restore a luminous, refined finish. It helps tighten lax skin, fade pigmentation, and visibly reduce stretch marks while stimulating collagen and elastin for a firmer, glass-like glow. Ideal for larger areas such as the abdomen, thighs, or buttocks. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
    ],
  },

  {
    id: "hifu-rf",
    title: "HIFU + RF",
    description:
      "Advanced body contouring and skin tightening using high-intensity focused ultrasound combined with radiofrequency.",
    rows: [
      {
        id: "hifu-rf-item",
        title: "",
        price: "From £645",
        description: "",
      },
    ],
  },

  {
    id: "tatto-removal",
    title: "Tattoo Removal",
    description:
      "A precise, effective laser treatment designed to fade or fully remove unwanted tattoos. Our advanced technology safely targets ink particles, progressively restoring your skin's clarity with minimal downtime. Suitable for all tattoo sizes and skin types.",

    rows: [
      {
        id: "tatto-removal-item",
        title: "",
        price: "Prices starting at £95",
      },
    ],
  },

  {
    id: "ems-rf",
    title: "EMS + RF",
    description:
      "Targets stubborn fat, tones and builds muscle, while tightening skin using electrical muscle stimulation and radio-frequency",

    rows: [
      {
        id: "ems-rf-item",
        title: "EMS + RF",
        price: "£295",
        description:
          "Our EMS with Radio Frequency Body Treatment combines muscle stimulation and skin tightening in one powerful session. The EMS technology contracts and sculpts targeted muscles, while radio frequency gently heats the skin to boost collagen, tighten, and smooth. This dual-action treatment helps tone, lift, and contour the body while improving firmness and overall skin texture. Ideal for the abdomen, thighs, buttocks, or arms.",
      },
    ],

    areas: ["Abs", "Glutes", "Thighs", "Biceps", "Triceps", "Calves"],
  },
];
