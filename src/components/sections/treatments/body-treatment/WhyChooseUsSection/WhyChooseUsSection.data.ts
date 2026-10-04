import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before: "“Confidence comes from feeling comfortable in your own body.”",
    highlight: "",
  },
  description:
    "Whether you're addressing cellulite, supporting post-pregnancy recovery, refining body contours or targeting stubborn areas, every journey at WALDOR begins with understanding your body. Through personalised clinical expertise and bespoke treatment planning, we create tailored body journeys that enhance natural definition, improve skin quality and help you feel confident at every stage of life.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
