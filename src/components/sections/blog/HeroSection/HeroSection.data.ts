import { asset } from "@/src/lib/assets";
import { HeroSectionProps } from "./HeroSection.types";

export const heroData: HeroSectionProps = {
  eyebrow: "FROM THE BLOG",
  decorationImg: asset("/assets/waldor/blog/blog-decoration.png"),
  heading: {
    before: "Skin,",
    highlight: "Explained",
  },

  description:
    "Deep dives into the science of skin health. We translate clinical evidence into actionable advice for your daily routine.",
};
