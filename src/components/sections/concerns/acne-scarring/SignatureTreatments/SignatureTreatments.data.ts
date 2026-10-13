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
    value: "9.4%",
    label: "globally experience acne, making it a leading skin concern.",
  },
  {
    id: "result",
    value: "95%",
    label: "of acne cases result in scarring.",
  },
  {
    id: "people",
    value: "47%",
    label: "people live with visible signs of acne scars.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What is",
  highlight: "Scarring?",
  description:
    "Living with acne scars often means carrying the visible reminders of breakouts long after the acne itself has resolved. While active blemishes may heal within weeks, the changes they leave beneath the skin can remain for years, affecting texture, skin quality and confidence in equal measure.",
  description2:
    "Living with acne scars often means carrying the visible reminders of breakouts long after the acne itself has resolved. While active blemishes may heal within weeks, the changes they leave beneath the skin can remain for years, affecting texture, skin quality and confidence in equal measure.",
  cta: {
    href: "/contact",
    label: "Book an appointment",
  },
};
