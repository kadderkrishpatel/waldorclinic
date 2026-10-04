import { asset } from "@/src/lib/assets";
import { HeroSectionProps } from "./HeroSection.types";

export const heroData: HeroSectionProps = {
  eyebrow: "GET IN TOUCH",
  decorationImg: asset("/assets/waldor/decorations/contact-decoration.png"),
  heading: {
    before: "Start the",
    highlight: "Conversation",
  },

  description:
    "Questions about a treatment, your skin, or booking? Tell us what you need and our team will reply within one working day.",
};
