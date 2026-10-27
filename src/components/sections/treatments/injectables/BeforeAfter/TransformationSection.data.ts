import { asset } from "@/src/lib/assets";
import { TransformationSectionProps } from "./TransformationSection.types";

export const transformationData: TransformationSectionProps = {
  eyebrow: "RESULTS",
  heading: {
    before: "Before",
    highlight: "& After",
    after: "",
  },
  description:
    "Real patient results, unretouched, shown with consent. Individual results vary.",
  transformations: [
    {
      title: "Natural Facial Rejuvenation",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Treatment-Before.png"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Treatment-After-aligned.png"),
      duration: "AFTER · 2 WEEKS",
    },
    {
      title: "Subtle Facial Balancing",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Before.png"),
      afterImage: asset("/assets/waldor/before-after/Injectables-After.png"),
      duration: "AFTER · 4 WEEKS",
    },
  ],
};
