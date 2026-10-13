export interface SafetyPoint {
  id: string;
  title: string;
  description: string;
  width?: "normal" | "wide";
}

export const safetyData = {
  eyebrow: "COMMON CAUSES",
  before: "What Causes",
  highlight: "Scarring?",
  description:
    "Scarring develops through a combination of biological and external factors. Identifying these influences helps us personalise every stage of your treatment.",
};

export const safetyPoints: SafetyPoint[] = [
  {
    id: "deep-inflammatory-acne",
    title: "Deep Inflammatory Acne",
    description:
      "Inflammation that extends beneath the skin can compromise collagen, leaving lasting changes in texture once the skin has healed.",
  },
  {
    id: "delayed-treatment",
    title: "Delayed Treatment",
    description:
      "Persistent or untreated acne prolongs inflammation, increasing the risk of structural damage before the skin has an opportunity to recover.",
  },
  {
    id: "picking-blemishes",
    title: "Picking Blemishes",
    description:
      "Repeated trauma can interfere with healthy tissue repair, making permanent textural changes more likely to develop.",
  },
  {
    id: "recurrent-breakouts",
    title: "Recurrent Breakouts",
    description:
      "Repeated inflammation in the same area can disrupt the skin’s repair cycle, contributing to more complex patterns of scarring.",
  },
  {
    id: "individual-healing-response",
    title: "Individual Healing Response",
    description:
      "Genetics and collagen production influence how the skin repairs itself, meaning two people with similar acne may heal very differently.",
  },
  {
    id: "collagen-imbalance",
    title: "Collagen Imbalance",
    description:
      "Insufficient collagen may result in depressed scars, while excessive collagen production can lead to raised scars during healing.",
  },
];
