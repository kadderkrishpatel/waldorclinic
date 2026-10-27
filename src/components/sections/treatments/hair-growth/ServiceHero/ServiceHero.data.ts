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
  eyebrow: "BESPOKE HAIR JOURNEYS",
  before: "Hair Growth Treatments",
  highlight: "Backed by Science",
  video: asset("/assets/waldor/treatments/hair_growth.mp4"),
  description:
    "Restore stronger, healthier hair through regenerative treatments designed to revitalise follicles and support lasting scalp health naturally.",
  cta: {
    label: "Book an Appointment",
    href: "/contact-us",
  },
};
