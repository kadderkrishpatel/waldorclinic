import { asset } from "@/src/lib/assets";
import { HeroSectionProps } from "./HeroSection.types";

export const heroData: HeroSectionProps = {
  eyebrow: "FAQ",
  decorationImg: asset("/assets/waldor/decorations/exp-leaf-top.png"),
  heading: {
    before: "Questions,",
    highlight: "answered.",
  },

  description:
    "The things people ask us most, grouped by treatments, concerns and the clinic itself. If your question isn't here, ask us directly - we'd rather answer it than have you guess.",
};
