import { asset } from "@/src/lib/assets";

export const experienceData = {
  eyebrow: "BEYOND THE SURFACE",
  bottomDecorationImage: asset("/assets/waldor/decorations/exp-leaf-bottom.png"),
  topDecorationImage: asset("/assets/waldor/decorations/exp-leaf-top.png"),

  heading: {
    before: "Experience",
    highlight: "The Waldor Shift",
  },

  description:
    "We didn't enter the industry to follow the rules; we came to personalize them. Here is how we elevate your experience beyond the ordinary.",

  video: asset("/assets/waldor/videos/waldor_hero_vid.mp4"),

  cards: [
    {
      id: "top",
      title: "Opulent Ritual",
      icon: asset("/assets/waldor/icons/ritual-icon.png"),
      description:
        "Unrivalled, elevated care that completely transforms your standard clinical experience.",
    },
    {
      id: "left",
      title: "Radical Transparency",
      icon: asset("/assets/waldor/icons/transparency-icon.png"),
      description:
        "No trend-chasing or empty promises just undeniable results for your visage.",
    },
    {
      id: "right",
      title: "Molecular Longevity",
      icon: asset("/assets/waldor/icons/molecule-icon.png"),
      description:
        "We manipulate skin health at a cellular level, so your glow never checks out.",
    },
    {
      id: "bottom",
      title: "Personalised Treatments",
      icon: asset("/assets/waldor/icons/personalised-icon.png"),
      description:
        "Every treatment plan is completely tailored to your defining traits.",
    },
  ],
};
