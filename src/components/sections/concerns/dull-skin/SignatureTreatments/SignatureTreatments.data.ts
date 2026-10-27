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
    value: "28 Days",
    label: "is the average youthful skin cycle, which can double with age.",
  },
  {
    id: "result",
    value: "85%",
    label: "of adults report periods of visible skin fatigue.",
  },
  {
    id: "people",
    value: "30%",
    label: "reduction in light reflection occurs from dehydrated skin.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What Is",
  highlight: "Dull Skin?",
  description:
    "Living with dull skin often means dealing with a tired, lacklustre appearance that fails to reflect how vibrant you feel on the inside.",
  description2:
    "While surface fatigue can fluctuate day to day, persistent dullness occurs when dead skin cell build-up, micro-circulatory sluggishness and structural dehydration prevent light from reflecting evenly across your face.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};
