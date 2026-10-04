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
  eyebrow: "Dull Skin Treatments",
  before: "Press Reset on Your",
  highlight: "Dull Complexion",
  image: asset("/assets/waldor/categories/dull-skin.jpg"),
  description:
    "Dullness can be persistent, complex and deeply frustrating. We assess your skin, its cellular turnover and environmental influences to develop a treatment approach suited to what your skin needs, within a considered philosophy of wellness medicine, longevity and luminous vitality.",
  imageAlt: "Waldor signature treatment",
  cta: {
    label: "Schedule Your Consultation",
    href: "/contact",
  },
};
