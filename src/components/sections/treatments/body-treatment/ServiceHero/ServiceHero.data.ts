import { asset } from "@/src/lib/assets";

export interface ServiceHeroData {
  eyebrow: string;
  before: string;
  highlight: string;
  video: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
}

export const serviceHeroData: ServiceHeroData = {
  eyebrow: "BESPOKE BODY JOURNEYS",
  before: "Redefining Body",
  highlight: "Contouring Treatments",
  video: asset("/assets/waldor/treatments/body_treatment.mp4"),
  description:
    "Whether it's cellulite, post-pregnancy recovery or weight-loss sagging skin, every treatment is designed to create visible, confidence-boosting results.",
  cta: {
    label: "Book an Appointment",
    href: "/contact-us",
  },
};
