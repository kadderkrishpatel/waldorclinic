import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“The future of skin health lies in personalisation, not repetition.”",
    highlight: "",
  },
  description:
    "Your skin tells a story unlike anyone else’s. That’s why every signature treatment at WALDOR is meticulously tailored using advanced Japanese and Korean technologies, regenerative medicine and personalised clinical expertise to create bespoke skin journeys that restore vitality and reveal lasting radiance.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
