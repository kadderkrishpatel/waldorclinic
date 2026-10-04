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
  eyebrow: "BESPOKE INJECTABLE JOURNEY",
  before: "Injectable Treatments",
  highlight: "That Elevate Naturally",
  image: asset("/assets/waldor/heroes/injectables-hero.jpg"),
  description:
    "Injectable treatments designed to enhance your natural facial anatomy with precision, balance and long-term skin health in mind.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Book an Appointment",
    href: "/contact",
  },
};
