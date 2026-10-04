import { asset } from "@/src/lib/assets";
import { HeroSectionProps } from "./HeroSection.types";

export const heroData: HeroSectionProps = {
  eyebrow: "London skin and hair clinic",

  heading: {
    before: "Korean Glass Skin,",
    highlight: "Engineered in London",
    // after: "Clinic Expertise ", 

  },

  description:
    "A longevity clinic powered by advanced Korean and Japanese technology, AI skin analysis, and a protocol built for no one but you.",

  buttons: [
    {
      label: "Start the Conversation",
      href: "/contact",
      variant: "primary",
    },
    
  ],

  backgroundImage: asset("/assets/waldor/heroes/hero-bg.png"),

  stats: [
    {
      label: "Trusted by clients",
      value: "1000+",
      showDivider: true,
    },
    {
      label: "Google Ratings",
      value: "4.9",
      specialValue: "★★★★★",
      showDivider: true,
    },
    {
      label: "Years of Experience",
      value: "15+",
      showDivider: false,
    },
  ],
};
