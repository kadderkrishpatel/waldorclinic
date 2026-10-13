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
  eyebrow: "BESPOKE SKIN JOURNEYS",
  before: "Experience Waldor",
  highlight: "Signature Treatments",
  video: asset("/assets/waldor/treatments/waldor_signature.mp4"),
  description:
    "Discover personalised skin journeys combining advanced Korean and Japanese innovations with clinical expertise for naturally radiant, lasting skin health.",
  cta: {
    label: "Book An Appointment",
    href: "/contact",
  },
};
