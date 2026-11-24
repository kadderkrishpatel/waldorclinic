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
      title: "Body Sculpting Results",
      category: "BODY TREATMENT",
      beforeImage: asset("/assets/waldor/before-after/Body-treatment-waldor-clinic-london-before.png"),
      afterImage: asset("/assets/waldor/before-after/Body-treatment-waldor-clinic-london-after.png"),
      duration: "8 WEEK PROGRAM",
    },
    {
      title: "EMS Muscle Toning",
      category: "BODY EMS",
      beforeImage: asset("/assets/waldor/before-after/Body-ems-before-waldor-clinic.png"),
      afterImage: asset("/assets/waldor/before-after/Body-ems-after-waldor-clinic.png"),
      duration: "AFTER · WEEK 8",
    },
    {
      title: "EMS Body Definition",
      category: "BODY EMS",
      beforeImage: asset("/assets/waldor/before-after/Body-ems-before-waldor-clinic-london.png"),
      afterImage: asset("/assets/waldor/before-after/Body-ems-after-waldor-clinic-london.png"),
      duration: "6 WEEK PROGRAM",
    },
    {
      title: "Body Contouring Transformation",
      category: "BODY TREATMENT",
      beforeImage: asset("/assets/waldor/before-after/body-treatment-waldor-clinic-before.png"),
      afterImage: asset("/assets/waldor/before-after/body-treatment-waldor-clinic-after.png"),
      duration: "AFTER · WEEK 12",
    },
  ],
};
