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
      title: "HydraGlass™ Skin Transformation",
      category: "GLASS SKIN",
      beforeImage: asset("/assets/waldor/before-after/Hair-growth-treatment-london-Waldor-Before.png"),
      afterImage: asset("/assets/waldor/before-after/Hair-growth-treatment-london-Waldor-After.png"),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "Pigmentation Correction",
      category: "PIGMENTATION",
      beforeImage: asset("/assets/waldor/before-after/Hair-growth-treatment-waldor-clinic-before.png"),
      afterImage: asset("/assets/waldor/before-after/Hair-growth-treatment-Waldor-clinic-After.png"),
      duration: "8 WEEK PROGRAM",
    },
  ],
};
