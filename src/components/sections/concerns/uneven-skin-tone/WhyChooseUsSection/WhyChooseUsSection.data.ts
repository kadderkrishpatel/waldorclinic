import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“Stop playing whack-a-mole with dark spots and re-train your skin instead.”",
    highlight: "",
  },
  description:
    "True resolution of uneven skin tone requires looking beyond surface spots to regulate pigment production at the cellular level. At WALDOR, our medical approach works simultaneously on two fronts: breaking up concentrated surface pigment and calming overactive melanocytes deeper within the dermis. Through diagnostic mapping, we pinpoint your specific pigment depth and triggers, designing progressive protocols that restore uniform tone, reduce redness and prevent future discolouration from forming.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
