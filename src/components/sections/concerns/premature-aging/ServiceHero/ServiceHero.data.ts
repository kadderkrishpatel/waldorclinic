import { asset } from "@/src/lib/assets";

export interface ServiceHeroData {
  eyebrow: string;
  before: string;
  highlight: string;
  after: string;
  image: string;
  description: string;
  imageAlt: string;
  cta: {
    label: string;
    href: string;
  };
}

export const serviceHeroData: ServiceHeroData = {
  eyebrow: "Preventative & Restorative Care",
  before: "Target",
  highlight: "Premature Ageing",
  after: "With Expert Care",
  image: asset("/assets/waldor/heroes/premature-aging-hero.jpg"),
  description:
    "Accelerated skin ageing can be complex, subtle and frustrating. We assess your skin’s cellular repair efficiency to develop a targeted pathway suited to your needs, with wellness medicine and longevity informing a considered approach to long-term skin health.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
