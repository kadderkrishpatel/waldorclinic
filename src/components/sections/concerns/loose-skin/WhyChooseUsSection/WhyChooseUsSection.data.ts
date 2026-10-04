import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“True refinement begins with understanding what your skin needs, not simply how it looks.”",
    highlight: "",
  },
  description:
    "Sagging and loose skin require a considered approach that goes beyond simply addressing the surface. At WALDOR, we assess the extent and pattern of skin laxity before developing a treatment plan around your individual facial structure and concerns. Carefully selected treatments may support skin firmness, definition and overall texture, with the aim of maintaining a natural, balanced appearance.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
