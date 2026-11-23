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
      title: "23D HIFU Lifting Transformation",
      category: "HIFU",
      beforeImage: asset("/assets/waldor/before-after/Injectables-23D-HIFU-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-23D-HIFU-After.jpg"),
      caption: "After 3 sessions of our 23D HIFU",
      duration: "AFTER · 3 SESSIONS",
    },
    // Newly added results. The title is only used as a unique key (not shown).
    {
      title: "Skin Quality and Refreshed Look",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Skincare-Portrait-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Skincare-Portrait-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Facial Symmetry Restoration",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Bell-Palsy-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Bell-Palsy-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Full Face Rejuvenation",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Clinical-Portrait-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Clinical-Portrait-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Facial Balancing Female",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Facial-Balancing-1-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Facial-Balancing-1-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Facial Balancing Male",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Facial-Balancing-2-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Facial-Balancing-2-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Lip Enhancement One",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Lips-1-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Lips-1-After.jpg"),
      objectPosition: "center 50%",
      duration: "AFTER TREATMENT",
    },
    {
      title: "Lip Enhancement Two",
      category: "INJECTABLES",
      beforeImage: asset("/assets/waldor/before-after/Injectables-Lips-2-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Injectables-Lips-2-After.jpg"),
      objectPosition: "center 50%",
      duration: "AFTER TREATMENT",
    },
    {
      title: "Jawline and Chin Definition",
      category: "INJECTABLES",
      // Ready-made picture (before on top, after below, with its own frame).
      beforeImage: "",
      afterImage: "",
      combinedImage: asset("/assets/waldor/before-after/Injectables-Beard-Before-After.jpg"),
      combinedBackground: "#F2DFC2",
      duration: "AFTER TREATMENT",
    },
  ],
};
