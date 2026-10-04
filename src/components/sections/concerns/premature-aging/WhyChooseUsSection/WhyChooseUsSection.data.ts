import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“We don’t just conceal early ageing; we re-educate your skin to resist it.”",
    highlight: "",
  },
  description:
    "True reversal of premature skin ageing requires looking beyond surface lines to neutralize the specific oxidative triggers accelerating your skin’s decline. At WALDOR, our approach works simultaneously on two fronts: deactivating damaging free radical cascades and stimulating deep neo-collagenesis. Through clinical diagnostic mapping, we pinpoint your specific photo-damage depth and barrier health, designing progressive protocols that restore skin density, unify tone and fortify your barrier for lasting youthful resilience.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
