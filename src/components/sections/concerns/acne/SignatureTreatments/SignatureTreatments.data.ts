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
    label: "of the world population faces this leading skin concern.",
  },
  {
    id: "result",
    value: "8th",
    label: "most prevalent dermatological condition globally.",
  },
  {
    id: "people",
    value: "50%",
    label: "of cases persist into adulthood for many individuals.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What is",
  highlight: "Acne?",
  description:
    "Acne is a common skin condition that occurs when hair follicles become blocked with oil, dead skin cells and other contributing factors.",
  description2:
    "It can appear as blackheads, whiteheads, inflamed spots or deeper blemishes, with severity and triggers varying between individuals and changing over time.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};
