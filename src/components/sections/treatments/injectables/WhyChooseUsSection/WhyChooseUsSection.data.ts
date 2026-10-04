import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“Timeless beauty is never created by chance, only by thoughtful expertise.”",
    highlight: "",
  },
  description:
    "At WALDOR, cosmetic injectables are approached as a balance of medical precision, facial artistry and deep anatomical understanding. Every recommendation is intentional, every enhancement measured and every result designed to preserve your individuality.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
