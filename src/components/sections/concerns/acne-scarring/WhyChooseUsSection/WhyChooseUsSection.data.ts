import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“The most effective treatment is never the most common. It’s the most personalised.”",
    highlight: "",
  },
  description:
    "Every acne scar reflects a unique healing journey, making no two treatment plans exactly alike. At WALDOR, we begin with a detailed clinical assessment to understand your scar type, skin quality and collagen response before recommending treatment. By combining evidence-based aesthetic medicine with advanced skin technologies, we create personalised plans designed to restore smoother skin texture with precision, balance and naturally refined results.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
