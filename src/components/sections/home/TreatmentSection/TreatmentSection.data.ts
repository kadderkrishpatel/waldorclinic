import { asset } from "@/src/lib/assets";
import { TreatmentSectionProps } from "./TreatmentSection.types";

export const treatmentData: TreatmentSectionProps = {
  eyebrow: "Target Treatment Path",
  topDecorationImg: asset("/assets/waldor/decorations/begin-top-left.png"),
  bottomDecorationImg: asset("/assets/waldor/decorations/begin-bottom.png"),
  heading: {
    before: "What is Your Main Focus",
    highlight: "Today?",
    after: "",

     
  },
  description:
    "Every cellular concern requires a targeted treatment. Select your focus area below to unlock a costume, result-driven solution designed exclusively for you. ",
  treatments: [
    {
      title: "Skin",
      description: "Dullness, Acne, Pigmentation, Scarring",
      video: asset("/assets/waldor/videos/Skin.mp4"),
      href: "/treatments/hydra-glass",
    },
    {
      title: "Body",
      description: "Muscle Growth, Contouring, Fat Loss",
      video: asset("/assets/waldor/videos/Body.mp4"),
      href: "/treatments/body-treatment",
      offset: true,
    },
    {
      title: "Facial Aesthetics",
      description: "Volume, Contouring, Wrinkles, Skin Boosters",
      video: asset("/assets/waldor/videos/Face.mp4"),
      href: "/treatments/waldor-signature",
    },
  ],
};
