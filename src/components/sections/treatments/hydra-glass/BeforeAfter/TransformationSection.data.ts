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
      title: "Signature Skin Renewal",
      category: "SIGNATURE FACIAL",
      beforeImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-before.png"),
      afterImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-after.png"),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "Complexion Transformation",
      category: "COMPLEXION",
      beforeImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-lonodn-before.png"),
      afterImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-lonodn-after.png"),
      duration: "AFTER · WEEK 10",
    },
    {
      title: "Radiance & Clarity",
      category: "SKIN CLARITY",
      beforeImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-london-clinic-before.png"),
      afterImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-london-clinic-after.png"),
      duration: "8 WEEK PROGRAM",
    },
    {
      title: "Texture Refinement",
      category: "SKIN TEXTURE",
      beforeImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-london-skin-clinic-before.png"),
      afterImage: asset("/assets/waldor/before-after/Waldor-signature-treatment-london-skin-clinic-after.png"),
      duration: "AFTER · 6 SESSIONS",
      objectPosition: "center 20%",
    },
    {
      title: "HydraGlass™ Longevity Transformation",
      category: "GLASS SKIN",
      beforeImage: asset("/assets/waldor/before-after/HydraGlass-Before.png"),
      afterImage: asset("/assets/waldor/before-after/HydraGlass-After.png"),
      duration: "AFTER · 6 SESSIONS",
    },
    {
      title: "Clinical Skincare Results",
      category: "SKIN TEXTURE",
      beforeImage: asset("/assets/waldor/before-after/Waldor-Signature-Clinical-Skincare-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Waldor-Signature-Clinical-Skincare-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Natural Facial Rejuvenation",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Treatment-Before.png"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Treatment-After-aligned.png"),
      duration: "AFTER · 2 WEEKS",
    },
  ],
};
