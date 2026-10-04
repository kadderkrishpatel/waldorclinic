import { asset } from "@/src/lib/assets";
import { SuccessStoriesSectionProps } from "./SuccessStoriesSection.types";

export const successStoriesData: SuccessStoriesSectionProps = {
  eyebrow: "SUCCESS STORIES",
  successRightImg: asset("/assets/waldor/decorations/success-right.png"),
  heading: {
    before: "Refined Results,",
    highlight: "Natural Beauty",
  },
  testimonials: [
    {
      name: "A.K.",
      treatment: "HydraGlass™ Course",
      review:
        "The first clinic I visited was refreshing. They explained which treatments I didn’t need, which was a relief. Their conservative care approach led to visible results, and I truly valued their honesty and expertise on my path to better health.",
      rating: 5,
    },
    {
      name: "Sophie M.",
      treatment: "Glass Skin Programme",
      review:
        "The consultation was incredibly detailed. My skin has completely changed and every step of the journey felt personalised.",
      rating: 5,
    },
    {
      name: "Emma R.",
      treatment: "HydraGlass™ Lifting",
      review:
        "Professional, honest and results driven. My skin looked visibly lifted and glowing straight after my first session — Waldor feels different from every clinic I have visited before.",
      rating: 5,
    },
  ],
};
