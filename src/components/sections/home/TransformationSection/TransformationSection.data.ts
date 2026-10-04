import { asset } from "@/src/lib/assets";
import { TransformationSectionProps } from "./TransformationSection.types";

export const transformationData: TransformationSectionProps = {
  eyebrow: "THE TRANSFORMATION ARCHIVES",
  heading: {
    before: "Showcasing",
    highlight: "The WALDOR Effect using WALDOR.Skin",
    after: "",
  },
  description:
    "Move them to Product pages which needs to be related to a specific product that helped that transformation.",
  transformations: [
    {
      title: "HydraGlass™ Skin Transformation",
      category: "GLASS SKIN",
      beforeImage: asset("/assets/waldor/before-after/before-1.png"),
      afterImage: asset("/assets/waldor/before-after/after-1.png"),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "Pigmentation Correction",
      category: "PIGMENTATION",
      beforeImage: asset("/assets/waldor/before-after/before-2.png"),
      afterImage: asset("/assets/waldor/before-after/after-2.png"),
      duration: "8 WEEK PROGRAM",
    },
  ],
};
