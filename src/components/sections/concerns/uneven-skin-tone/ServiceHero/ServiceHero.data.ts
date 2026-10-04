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
  eyebrow: "Uneven Skin Tone Treatments",
  before: "Enhance Clarity With",
  highlight: "Uneven Skin Tone Treatments ",
  image: asset("/assets/waldor/heroes/uneven-skin-tone-hero.jpg"),
  description:
    "From lingering breakout marks to sun-induced patches, uneven tone can be complex. We assess your skin to develop a targeted approach suited to your needs, with longevity and wellness medicine informing a considered strategy for long-term skin health.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
