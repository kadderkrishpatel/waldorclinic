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
    value: "80%",
    label: "of visible ageing stems from external exposure.",
  },
  {
    id: "result",
    value: "1%",
    label: "annual collagen decline begins after twenty.",
  },
  {
    id: "people",
    value: "90%",
    label: "notice fine lines by thirty-five.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What are",
  highlight: "Fine Lines & Wrinkles?",
  description:
    "Fine lines and deep-set wrinkles are the natural visible markers of structural skin ageing, caused by the gradual depletion of collagen, elastin and natural hyaluronic acid.",
  description2:
    "While subtle surface dehydration lines may appear early, progressive deep-set creases form when structural support in the underlying dermis degrades over time.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};
