import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE’RE THE RIGHT FIT?",
  heading: {
    before: "“Good skin doesn’t happen by accident. It happens by paying attention.”",
    highlight: "",
  },
  description:
    "At Waldor, we see HydraGlass™ as more than a facial for an instant glow. We look closely, refine with intention and select each element according to what your skin needs, creating a considered treatment experience grounded in how your skin responds, not a formula designed for everyone.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
