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
  eyebrow: "BESPOKE HAIR JOURNEYS",
  before: "Hair Growth Treatments",
  highlight: "Backed by Science",
  image: asset("/assets/waldor/heroes/hair-growth-hero.jpg"),
  description:
    "Restore stronger, healthier hair through regenerative treatments designed to revitalise follicles and support lasting scalp health naturally.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Book an Appointment",
    href: "/contact",
  },
};
