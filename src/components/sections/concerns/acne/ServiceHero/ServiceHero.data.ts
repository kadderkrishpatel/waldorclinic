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
  eyebrow: "Acne Treatments",
  before: "Acne Treatments Designed",
  highlight: "Around Your Skin",
  image: asset("/assets/waldor/heroes/acne-hero.jpg"),
  description:
    "Acne can be persistent, unpredictable and deeply personal. We assess your skin, its underlying triggers and individual concerns to develop a treatment approach suited to what your skin needs, with long-term skin health, wellness medicine and longevity in mind.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
