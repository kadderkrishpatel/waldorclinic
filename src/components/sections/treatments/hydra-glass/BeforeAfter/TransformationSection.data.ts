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
      beforeImage: asset("/assets/waldor/before-after/Hydraglass-treatment-london-waldor-before.png"),
      afterImage: asset("/assets/waldor/before-after/Hydraglass-treatment-london-waldor-after.png"),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "HydraGlass™ Longevity Transformation",
      category: "GLASS SKIN",
      beforeImage: asset("/assets/waldor/before-after/HydraGlass-Before.png"),
      afterImage: asset("/assets/waldor/before-after/HydraGlass-After.png"),
      duration: "AFTER · 6 SESSIONS",
    },
  ],
};
