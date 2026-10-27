import type { TreatmentCard } from "./types";

export interface ServiceStat {
  id: string;
  value: string;
  label: string;
  isLast?: boolean;
  specialValue?: string;
}

export const serviceStats: ServiceStat[] = [
  {
    id: "concerns",
    value: "1%",
    label: "annual collagen loss starts from the mid-twenties onward.",
  },
  {
    id: "result",
    value: "80%",
    label: "of skin sagging stems from sun exposure.",
  },
  {
    id: "people",
    value: "65%",
    label: "loss in skin elasticity occurs by fifty.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What Is",
  highlight: "Sagging & Loose Skin?",
  description:
    "Living with sagging or loose skin often means noticing a shift in your facial contours, where the sharp, defined lines of the jawline, cheekbones and neck gradually lose their firmness over time.",
  description2:
    "While subtle changes in elasticity begin internally, visible skin laxity becomes noticeable as key structural proteins in the deep dermis and underlying fascia degrade.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};
