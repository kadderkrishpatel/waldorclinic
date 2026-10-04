import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“Exceptional outcomes begin with exact diagnosis, not arbitrary intervention.”",
    highlight: "",
  },
  description:
    "True resolution of acne requires looking beyond current flare-ups to address the structural conditions that allow them to recur. At WALDOR, our approach works simultaneously on two fronts: calming immediate surface inflammation and re-educating the skin at a cellular level. Through clinical diagnostic mapping, we pinpoint your specific triggers, designing progressive protocols that regulate oil, refine pore structure and prevent post-inflammatory discolouration.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
