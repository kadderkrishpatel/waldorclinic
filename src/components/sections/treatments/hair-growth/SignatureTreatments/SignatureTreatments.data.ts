import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "CURATED EXPERTISE",
  before: "Explore Our",
  highlight: "Hair Growth Treatments",
  description:
    "At WALDOR Clinic, we take a scientific approach to hair restoration. Your journey begins with our dedicated AI Scalp & Hair Analysis, using advanced imaging technology to assess follicle health, hair density, and scalp condition. This allows us to create a precise, personalised plan for optimal results.",
  description2:
    "To further enhance effectiveness, every treatment begins with a complimentary High Frequency scalp therapy. This stimulates circulation, oxygenates the scalp, reduces bacteria, and primes the follicles — creating the ideal environment for advanced treatments like PRP, Exosomes, and Polynucleotides to work at their best.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "prp-therapy",
    title: "PRP (Platelet-Rich Plasma) Therapy",
    description:
      "Harnesses your body’s own growth factors to stimulate dormant follicles, improve circulation, and promote thicker, healthier hair.",

    rows: [
      {
        id: "prp-therapy-item",
        title: "PRP Hair",
        price: "£495",
        duration: "30 min",
        description:
          "Our PRP Hair Restoration treatment uses your body’s own platelet-rich plasma, rich in growth factors, to naturally stimulate hair follicles and encourage regrowth. The plasma is microneedled into the scalp to revitalise thinning areas and support stronger, denser hair over time.",
      },
    ],
  },

  {
    id: "exosomes-for-hair",
    title: "Exosomes for Hair",
    description:
      "A breakthrough regenerative treatment delivering powerful cellular messengers to repair and rejuvenate follicles, accelerating natural growth.",
    rows: [
      {
        id: "microneedling-x-hair-growth-exosomer",
        title: "Microneedling X Hair Growth Exosome",
        price: "£495",
        duration: "30 min",
        description:
          "Our Exosome Hair Regeneration treatment delivers billions of stem-cell–derived exosomes to awaken dormant follicles, reduce inflammation, and promote thicker, healthier hair. The exosome serum is microneedled into the scalp to enhance absorption and accelerate visible results.",
      },
    ],
  },

  {
    id: "polynucleotides-for-hair",
    title: "Polynucleotides for Hair",
    description:
      "Advanced bioactive molecules that enhance scalp health, reduce inflammation, and revitalise hair follicles at a cellular level.",
    rows: [
      {
        id: "polynucleotides-for-hair-item",
        title: "Polynucleotides (Hair)",
        price: "£495",
        duration: "30 min",
        description:
          "Our Polynucleotide Hair Revitalisation treatment uses regenerative DNA-based molecules to repair the scalp and stimulate healthier, stronger hair growth. The formula is microneedled into the scalp to boost cell renewal, improve circulation, and strengthen follicles from within. ",
      },
    ],
  },

  {
    id: "ai-scalp-analysis",
    title: "AI Scalp Analysis",
    description:
      "Advanced scalp treatment combining intelligent analysis, precision microneedling and a specialised exosome cocktail to support healthier-looking hair.",
    rows: [
      {
        id: "ai-scalp-analysis-hair-growth-microneedling",
        title: "AI Scalp Analysis + Hair Growth Microneedling",
        price: "£495",
        duration: "40 min",
        description:
          "A personalized scalp and hair treatment combining AI analysis with microneedling and a specialized exosome cocktail. The analysis helps assess scalp condition, hair characteristics and growth patterns, while microneedling creates controlled microchannels to support scalp renewal and delivery of the exosome formula for healthier-looking hair. Results vary and suitability is confirmed in clinic.",
      },
    ],
  },
];
