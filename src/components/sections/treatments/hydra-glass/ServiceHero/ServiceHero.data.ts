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
  eyebrow: "HydraGlass™ Facial",
  before: "HydraGlass™ Facial For",
  highlight: "Glass-Like Skin",
  image: asset("/assets/waldor/heroes/hydra_hero.png"),
  description:
    "What if a “good skin day” became your everyday? Meet Waldor’s HydraGlass™ Facial Treatment, combining considered exfoliation and layered hydration to reveal smoother, softer, naturally luminous-looking skin.",
  imageAlt: "HydraGlass™ facial treatment",
  cta: {
    label: "Book An Appointment",
    href: "/contact",
  },
};
