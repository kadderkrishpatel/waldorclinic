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
  eyebrow: "Fine Lines & Wrinkles Treatments",
  before: "Personalised Precision for",
  highlight: "Fine Lines & Wrinkles",
  image: asset("/assets/waldor/heroes/wrinkles-hero.jpg"),
  description:
    "Fine lines and structural wrinkles develop uniquely for everyone. We assess your skin, collagen density and contributing factors to develop a targeted clinical approach suited to your needs, with wellness medicine and longevity informing a considered focus on long-term firmness and smooth texture.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
