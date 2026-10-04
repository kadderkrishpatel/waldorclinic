import { asset } from "@/src/lib/assets";

export interface ServiceHeroData {
  eyebrow: string;
  before: string;
  highlight: string;
  image: string;
  description: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
}

export const serviceHeroData: ServiceHeroData = {
  eyebrow: "BESPOKE BODY JOURNEYS",
  before: "Redefining Body",
  highlight: "Contouring Treatments",
  image: asset("/assets/waldor/heroes/body-treatment-hero.jpg"),
  description:
    "Whether it's cellulite, post-pregnancy recovery or weight-loss sagging skin, every treatment is designed to create visible, confidence-boosting results.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Book an Appointment",
    href: "/contact",
  },
};
