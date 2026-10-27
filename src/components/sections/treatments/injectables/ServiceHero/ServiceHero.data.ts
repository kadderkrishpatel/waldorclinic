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
  eyebrow: "BESPOKE INJECTABLE JOURNEY",
  before: "Injectable Treatments",
  highlight: "That Elevate Naturally",
  video: asset("/assets/waldor/treatments/injectables.mp4"),
  description:
    "Injectable treatments designed to enhance your natural facial anatomy with precision, balance and long-term skin health in mind.",
  cta: {
    label: "Book an Appointment",
    href: "/contact-us",
  },
};
