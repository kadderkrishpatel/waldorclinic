import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“When skin is understood deeply, radiance becomes its natural signature.”",
    highlight: "",
  },
  description:
    "True resolution of dull skin requires looking beyond superficial exfoliation to re-energise skin performance at a cellular level. At WALDOR, our approach works simultaneously on two fronts: shedding stagnant surface debris and stimulating deep micro-vascular oxygenation. Through diagnostic mapping, we pinpoint your specific triggers, designing progressive protocols that accelerate cell renewal and unlock lasting deep hydration.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
