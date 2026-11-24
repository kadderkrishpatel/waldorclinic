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
    {
      title: "Natural Facial Rejuvenation",
      category: "INJECTABLES",
      beforeImage: asset(
        "/assets/waldor/before-after/Injectables-Treatment-Before.png",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Injectables-Treatment-After-aligned.png",
      ),
      duration: "AFTER · 2 WEEKS",
    },
    {
      title: "HydraGlass™ Skin Transformation",
      category: "GLASS SKIN",
      beforeImage: asset(
        "/assets/waldor/before-after/Hydraglass-treatment-london-waldor-before.png",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Hydraglass-treatment-london-waldor-after.png",
      ),
      duration: "AFTER · WEEK 12",
    },
    {
      title: "23D HIFU Lifting Transformation",
      category: "HIFU",
      beforeImage: asset(
        "/assets/waldor/before-after/Injectables-23D-HIFU-Before.jpg",
      ),
      afterImage: asset(
        "/assets/waldor/before-after/Injectables-23D-HIFU-After.jpg",
      ),
      caption: "After 3 sessions of our 23D HIFU",
      duration: "AFTER · 3 SESSIONS",
    },
    {
      title: "HydraGlass™ Longevity Transformation",
      category: "GLASS SKIN",
      beforeImage: asset("/assets/waldor/before-after/HydraGlass-Before.png"),
      afterImage: asset("/assets/waldor/before-after/HydraGlass-After.png"),
      duration: "AFTER · 6 SESSIONS",
    },
    // Newly added results. The title is only used as a unique key (not shown).
    {
      title: "Neck and Jawline Tightening",
      category: "SKIN TIGHTENING",
      beforeImage: asset("/assets/waldor/before-after/Waldor-Signature-Neck-Jawline-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Waldor-Signature-Neck-Jawline-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "Clinical Skincare Results",
      category: "SKIN TEXTURE",
      beforeImage: asset("/assets/waldor/before-after/Waldor-Signature-Clinical-Skincare-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Waldor-Signature-Clinical-Skincare-After.jpg"),
      duration: "AFTER TREATMENT",
    },
    {
      title: "23D HIFU Lifting Front View",
      category: "HIFU",
      beforeImage: asset("/assets/waldor/before-after/Waldor-Signature-23D-HIFU-Front-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Waldor-Signature-23D-HIFU-Front-After.jpg"),
      caption: "After 2 sessions of our 23D HIFU",
      duration: "AFTER · 2 SESSIONS",
    },
    {
      title: "23D HIFU Lifting Side View",
      category: "HIFU",
      beforeImage: asset("/assets/waldor/before-after/Waldor-Signature-23D-HIFU-Side-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Waldor-Signature-23D-HIFU-Side-After.jpg"),
      caption: "After 2 sessions of our 23D HIFU",
      duration: "AFTER · 2 SESSIONS",
    },
    {
      title: "CO2 Laser Eye Area",
      category: "LASER",
      beforeImage: asset("/assets/waldor/before-after/Waldor-Signature-CO2-Laser-Before.jpg"),
      afterImage: asset("/assets/waldor/before-after/Waldor-Signature-CO2-Laser-After.jpg"),
      // Wide photos: before on top, after below, so the whole eye area shows.
      stacked: true,
      objectPosition: "center 50%",
      duration: "AFTER TREATMENT",
    },
  ],
};
