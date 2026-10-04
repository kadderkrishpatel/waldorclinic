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
  eyebrow: "Sagging and Loose Skin Treatments",
  before: "Restore Definition With",
  highlight: "Sagging Skin Treatments",
  image: asset("/assets/waldor/heroes/loose-skin-hero.jpg"),
  description:
    "True structural firming requires a personalised approach. We assess your skin, facial structure and individual concerns to shape a targeted pathway supporting firmness and long-term skin health, informed by longevity and wellness medicine.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
