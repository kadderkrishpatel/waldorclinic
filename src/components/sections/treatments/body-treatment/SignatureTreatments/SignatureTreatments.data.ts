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
    id: "co2",
    title: "CO2",
    description:
      "Body skin resurfacing to improve texture, scars, or stretch marks, ranging from mild to deep treatments.",
    rows: [
      {
        id: "co2-item01",
        title: "CO2 - Medium",
        price: "£495",
        duration: "45 min",
        description: "Our CO₂ laser treatment for the body improves texture, tightness, and tone by stimulating deep collagen renewal. Ideal for treating scars, stretch marks, and skin laxity on areas such as the arms, neck, or décolletage.",
      },
      {
        id: "co2-item02",
        title: "CO2 - Large",
        price: "£625",
        duration: "60 min",
        description: "Our CO₂ laser treatment for the body improves texture, tightness, and tone by stimulating deep collagen renewal. Ideal for larger areas such as the abdomen, thighs, or buttocks to smooth, firm, and rejuvenate the skin.",
      },
    ],
  },

  {
    id: "baby-body-glass",
    title: "Baby Korean Body Glass",
    description:
      "A body-specific glass skin laser treatment to brighten and smooth areas like the arms, legs, or back.",

    rows: [
      {
        id: "baby-body-glass-item",
        title: "Baby Korean Body Glass - Medium",
        price: "£425",
        duration: "45 min",
        description: "Our Baby Korean Glass Laser uses advanced fractional Erbium technology to smooth uneven texture, improve skin tone, and restore a luminous, refined finish. It helps tighten lax skin, fade pigmentation, and visibly reduce stretch marks while stimulating collagen and elastin for a firmer, glass-like glow. Ideal for medium areas such as the arms, flanks, or knees. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability. ",
      },
      {
        id: "baby-body-glass-iteml",
        title: "Baby Korean Body Glass - Large",
        price: "£625",
        duration: "60 min",
        description: "Our Baby Korean Glass Laser uses advanced fractional Erbium technology to smooth uneven texture, improve skin tone, and restore a luminous, refined finish. It helps tighten lax skin, fade pigmentation, and visibly reduce stretch marks while stimulating collagen and elastin for a firmer, glass-like glow. Ideal for larger areas such as the abdomen, thighs, or buttocks. A 48-hour patch test is required before proceeding with any laser treatment to ensure skin safety and suitability.",
      },
    ],
  },

  {
    id: "ems-rf",
    title: "EMS + RF",
    description:
      "Targets stubborn fat, tones and builds muscle, while tightening skin using electrical muscle stimulation and radio-frequency.",

    rows: [
      {
        id: "ems-rf-item",
        title: "EMS + RF",
        price: "£295",
        duration: "35 min",
        description:
          "Our EMS with Radio Frequency Body Treatment combines muscle stimulation and skin tightening in one powerful session. The EMS technology contracts and sculpts targeted muscles, while radio frequency gently heats the skin to boost collagen, tighten, and smooth. This dual-action treatment helps tone, lift, and contour the body while improving firmness and overall skin texture. Ideal for the abdomen, thighs, buttocks, or arms.",
      },
    ],

    areas: ["Abs", "Glutes", "Thighs", "Biceps", "Triceps", "Calves"],
  },

  {
    id: "23d-hifu",
    title: "23D HIFU",
    description:
      "Advanced focused ultrasound treatment that targets delicate areas to lift, firm and refine the appearance of skin for a more defined contour.",

    rows: [
      {
        id: "23d-hifu-small",
        title: "23D HIFU - Small",
        price: "£545",
        duration: "30 min",
        description:
          "Our next-gen 23D HIFU Body treatment targets smaller, delicate areas with focused ultrasound to refine, lift, and firm. Perfect for tightening under the chin or above the knees where skin is thinner.",
      },
      {
        id: "23d-hifu-medium",
        title: "23D HIFU - Medium",
        price: "£745",
        duration: "45 min",
        description:
          "Our next-gen 23D HIFU Body treatment uses precision ultrasound energy to lift, firm, and smooth areas such as the arms, flanks, or knees. Ideal for mild to moderate skin laxity with visible tightening over time.",
      },
      {
        id: "23d-hifu-large",
        title: "23D HIFU - Large",
        price: "£995",
        duration: "60 min",
        description:
          "Our next-gen 23D HIFU Body treatment uses focused ultrasound energy to tighten and contour larger areas such as the abdomen, thighs, or buttocks. It targets deep layers to firm skin, reduce laxity, and sculpt definition with lasting results.",
      },
    ],
  },

  {
    id: "cavitation-rf-contouring",
    title: "Cavitation + RF Contouring",
    description:
      "Precision body-contouring treatment combining ultrasound and radiofrequency to refine, smooth and firm the appearance of targeted areas.",

    rows: [
      {
        id: "cavitation-rf-body-medium",
        title: "Cavitation + RF Body Contouring | M",
        price: "£225",
        duration: "35 min",
        description:
          "Our body Cavitation + RF treatment combines ultrasound cavitation to target the appearance of localised fat with radiofrequency to help firm and smooth the skin. This appointment focuses on one medium body area. Your practitioner will assess the area and tailor the treatment to your goals. Results vary, and a course of treatments may be recommended.",
      },
      {
        id: "cavitation-rf-body-large",
        title: "Cavitation + RF Body Contouring | Large Area",
        price: "£325",
        duration: "50 min",
        description:
          "A non-invasive body treatment combining ultrasound cavitation with radiofrequency (RF) to target the appearance of localised fat while helping skin look firmer and smoother. One large body area is treated per session.",
      },
    ],
  },

  {
    id: "emerald-laser",
    title: "Emerald Laser",
    description:
      "532nm green laser treatment designed to target localised fat, refine body contours and create a smoother, more sculpted silhouette.",

    rows: [
      {
        id: "emerald-laser-item",
        title: "Emerald Laser",
        price: "£495",
        duration: "35 min",
        description:
          "Our Emerald Laser is a non-invasive fat reduction treatment that targets stubborn areas without heat, freezing, or downtime. Using 532nm green laser technology, it helps shrink fat cells, improve lymphatic drainage, and contour the body while promoting healthier, more balanced metabolism. Safe, painless, and suitable for all skin types. Ideal for full-body sculpting or focused areas like the abdomen, thighs, or arms.",
      },
    ],
  },

  {
    id: "led-bed",
    title: "LED Bed",
    description:
      "Medical-grade LED light therapy using targeted wavelengths to support skin rejuvenation, repair, clarity and overall skin and body wellness.",

    rows: [
      {
        id: "led-bed-item",
        title: "LED Bed",
        price: "£195",
        duration: "40 min",
        description:
          "The LED Capsule features a range of pre-programmed treatments to address diverse skin and body concerns, including anti-aging, pigmentation, acne, stress relief, body contouring, and more. With over 11,000 medical-grade LEDs covering wavelengths from 450nm to 850nm, it delivers precise light therapy for rejuvenation, repair, and overall wellness. Designed for professional-grade results, it offers a complete, customizable approach to skincare and body treatments.",
      },
    ],
  },

  {
    id: "fat-dissolving",
    title: "Fat Dissolving",
    description:
      "Targeted body injections designed to address localised fat deposits and support a more refined, contoured appearance.",

    rows: [
      {
        id: "fat-dissolving-body",
        title: "Fat Dissolving - Body",
        price: "£550",
        duration: "45 min",
        description:
          "Our Fat Dissolving Injection for the body helps reduce localised fat deposits in areas such as the abdomen, thighs, flanks, or upper arms. The active solution dissolves fat cells safely and gradually, improving contour and definition. Best results are seen through a short course combined with healthy lifestyle habits.",
      },
    ],
  },

  {
    id: "polynucleotides-body",
    title: "Polynucleotides",
    description:
      "Regenerative body skin therapy formulated to support elasticity, hydration and skin quality, helping restore a smoother, firmer-looking appearance.",

    rows: [
      {
        id: "polynucleotides-body-item",
        title: "Polynucleotides (body)",
        price: "£500",
        duration: "30 min",
        description:
          "Our Polynucleotide Body Revitalisation treatment regenerates and firms the skin while improving elasticity and texture. Ideal for areas such as the abdomen, arms, thighs, or knees, it helps tighten lax skin, fade stretch marks, and restore a smoother, more youthful appearance through deep bio-cellular renewal.",
      },
    ],
  },
];
