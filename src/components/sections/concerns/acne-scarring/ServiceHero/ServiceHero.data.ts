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
  eyebrow: "SKIN RESTORATION",
  before: "Acne Scar Treatment",
  highlight: "Beyond The Surface",
  image: asset("/assets/waldor/blog/blog-1.jpg"),
  description:
    "Restore smoother skin through clinically tailored acne scar treatments designed around your skin's unique healing response and goals.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
