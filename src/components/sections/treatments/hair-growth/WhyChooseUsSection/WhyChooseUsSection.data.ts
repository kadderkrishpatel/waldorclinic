import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“The future of hair restoration lies in regeneration, not concealment.”",
    highlight: "",
  },
  description:
    "Every hair loss journey is unique, which is why no two treatment plans should be the same. At WALDOR, we carefully assess your scalp and hair health before combining evidence-based regenerative treatments with personalised planning to encourage healthier, stronger hair growth over time.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
