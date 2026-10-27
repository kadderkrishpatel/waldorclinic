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
    label: "of facial hyperpigmentation stems from sun exposure.",
  },
  {
    id: "result",
    value: "50%",
    label: "of women experience hormonal melasma in their lifetime.",
  },
  {
    id: "people",
    value: "65%",
    label: "of darker skin tones experience post-inflammatory marks.",
    isLast: true,
  },
];

export const treatmentData = {
  eyebrow: "UNDERSTAND YOUR CONCERN",
  before: "What Is",
  highlight: "Uneven Skin Tone?",
  description:
    "Uneven tone develops when ultraviolet radiation, hormonal shifts or localized inflammation disrupt the skin’s natural pigment distribution.",
  description2:
    "Depending on your skin’s unique cellular response, this may result in localized sun spots, diffuse melasma patches, lingering post-inflammatory marks or persistent facial redness.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};
