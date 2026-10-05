import { asset } from "@/src/lib/assets";

export interface VideoShowcaseData {
  eyebrow: string;
  before: string;
  highlight: string;
  description: string;
  video: string;
  videoLabel: string;
  badge: string;
  features: string[];
  cta: {
    label: string;
    href: string;
  };
}

export const videoShowcaseData: VideoShowcaseData = {
  eyebrow: "INSIDE THE TREATMENT ROOM",
  before: "Where Science Meets",
  highlight: "Scalp Care",
  description:
    "Step inside a Waldor hair growth session. Precision devices and regenerative therapies, delivered by our practitioners in a calm, private setting, designed around your scalp and your goals.",
  video: asset("/assets/waldor/videos/CTA.mp4"),
  videoLabel: "Hair growth treatment session at Waldor Clinic",
  badge: "Live session",
  features: [
    "Personalised scalp assessment",
    "Regenerative, science-led therapies",
    "Comfortable, discreet sessions",
  ],
  cta: {
    label: "Book an Appointment",
    href: "/contact",
  },
};
