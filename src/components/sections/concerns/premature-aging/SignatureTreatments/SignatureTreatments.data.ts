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
    label: "of facial ageing comes from sun exposure.",
  },
  {
    id: "result",
    value: "90%",
    label: "of dermal damage stems from urban pollution.",
  },
  {
    id: "people",
    value: "1%",
    label: "annual collagen loss begins in your 20s.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What Is",
  highlight: "Premature Ageing?",
  description:
    "Living with premature skin ageing often means noticing fine lines, sun spots, loss of bounce and uneven texture years before your chronological age suggests.",
  description2:
    "While natural intrinsic ageing unfolds gradually, extrinsic premature ageing occurs when external stressors, lifestyle habits and cellular degradation prematurely deplete collagen networks and compromise the dermal scaffold.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};
