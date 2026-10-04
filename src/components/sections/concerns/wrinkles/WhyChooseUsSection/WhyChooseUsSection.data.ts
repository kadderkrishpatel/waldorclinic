import { asset } from "@/src/lib/assets";
import { WhyChooseUsSectionProps } from "./WhyChooseUsSection.types";

export const whyChooseUsData: WhyChooseUsSectionProps = {
  eyebrow: "WHY WE'RE THE RIGHT FIT?",
  heading: {
    before:
      "“Refined skin begins beneath the surface, where structure, movement and collagen meet.”",
    highlight: "",
  },
  description:
    "True reversal of visible fine lines requires looking beyond surface-level creases to rebuild the structural foundation beneath. At WALDOR, our clinical approach works simultaneously on two fronts: relaxing excessive muscle tension and stimulating deep cellular collagen regeneration. Through diagnostic skin mapping, we evaluate your specific structural needs, designing progressive protocols that restore skin density, improve elasticity and refine fine lines naturally.",
  button: {
    label: "Schedule Your Appointment",
    href: "/contact",
  },
  leftImage: asset("/assets/waldor/decorations/whychoose-left.png"),
  rightImage: asset("/assets/waldor/decorations/whychoose-right.png"),
};
