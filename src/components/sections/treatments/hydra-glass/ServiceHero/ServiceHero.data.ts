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
  eyebrow: "HydraGlass™ Facial",
  before: "HydraGlass™ Facial For",
  highlight: "Glass-Like Skin",
  video: asset("/assets/waldor/treatments/hydra_glass.mp4"),
  description:
    "What if a “good skin day” became your everyday? Meet Waldor’s HydraGlass™ Facial Treatment, combining considered exfoliation and layered hydration to reveal smoother, softer, naturally luminous-looking skin.",
  cta: {
    label: "Book An Appointment",
    href: "/contact-us",
  },
};
