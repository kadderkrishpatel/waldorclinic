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
      title: "Signature Skin Renewal",
      category: "SIGNATURE FACIAL",
      beforeImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-before.png",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-after.png",
      ),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "Radiance & Clarity",
      category: "SKIN CLARITY",
      beforeImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-london-clinic-before.png",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-london-clinic-after.png",
      ),
      duration: "8 WEEK PROGRAM",
    },
    {
      title: "Texture Refinement",
      category: "SKIN TEXTURE",
      beforeImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-london-skin-clinic-before.png",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-london-skin-clinic-after.png",
      ),
      duration: "AFTER · 6 SESSIONS",
      objectPosition: "center 20%",
    },
    {
      title: "Complexion Transformation",
      category: "COMPLEXION",
      beforeImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-lonodn-before.png",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Waldor-signature-treatment-lonodn-after.png",
      ),
      duration: "AFTER · WEEK 10",
    },
  ],
};
