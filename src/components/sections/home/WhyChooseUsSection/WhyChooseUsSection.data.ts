import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WALDOR",
  heading: {
    before: "Why Choose Our London",
    highlight: "Skin And Hair Clinic?",
  }, 
  description:
    "At Waldor Clinic, we specialize in delivering personalized, judgment-free care with tailored treatment packages. Every journey starts with advanced AI face analysis and expert consultations to build a bespoke plan for your needs.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
