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
  eyebrow: "BESPOKE SKIN JOURNEYS",
  before: "Experience Waldor",
  highlight: "Signature Treatments",
  image: asset("/assets/waldor/heroes/service-hero.png"),
  description:
    "Discover personalised skin journeys combining advanced Korean and Japanese innovations with clinical expertise for naturally radiant, lasting skin health.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Book An Appointment",
    href: "/contact",
  },
};
