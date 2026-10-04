import { asset } from "@/src/lib/assets";
import { HowItWorksSectionProps } from "./HowItWorksSection.types";

export const howItWorksData: HowItWorksSectionProps = {
  eyebrow: "The Methodology",
  heading: {
    before: " Four Steps to Your",
    highlight: "Metamorphosis", 
  },
  steps: [
    {
      number: "01",
      title: "Reservation",
      description: "Book via our platform or contact us directly.",
      icon: asset("/assets/waldor/icons/calendar-icon.png"),
    },
    {
      number: "02",
      title: "Diagnostic",
      description: "Begin with your 45-minute in-person skin analysis.",
      icon: asset("/assets/waldor/icons/scan-icon.png"),
    },
    {
      number: "03",
      title: "Strategy",
      description: "Receive your bespoke written treatment plan.",
      icon: asset("/assets/waldor/icons/plan-icon.png"),
    },
    {
      number: "04",
      title: "Procedure",
      description: "Experience your tailored clinical skin transformation.",
      icon: asset("/assets/waldor/icons/treatment-icon.png"),
    },
  ],
};
