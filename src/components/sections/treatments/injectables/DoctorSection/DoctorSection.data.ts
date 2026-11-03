import { asset } from "@/src/lib/assets";
import { DoctorSectionProps } from "./DoctorSection.types";

export const doctorSectionData: DoctorSectionProps = {
  eyebrow: "Your Trusted Practitioner",
  heading: {
    before: "Meet the",
    highlight: "Doctors",
  },
  description:
    "Great skin isn't luck; it's a discipline. Discover the specialists who sculpt, refine and deliver the glowing transformations our clients rave about.",
  doctors: [
    {
      name: "Dr. Irene",
      role: "Medical Director",
      image: asset("/assets/waldor/team/team-5.png"),
      slug: "team-member-5",
      description: "Dr Irene leads the clinical side of WALDOR. She came to aesthetics from dentistry, which sounds like a departure and is in fact an advantage. Dental training studies the anatomy of the face as its core subject, the nerves, the muscles, the blood vessels and the bone beneath them, and then works with that anatomy every day, in millimetres, under local anaesthetic.",
    },
    {
      name: "Dr. Azadeh",
      role: "Aesthetic Doctor",
      image: asset("/assets/waldor/team/team-6.png"),
      slug: "team-member-6",
      description: "With more than 15 years of experience in aesthetic medicine and injectables, Dr Azadeh takes a considered, holistic approach to facial aesthetics. Every treatment begins with a detailed assessment of the face as a whole evaluating proportion, balance and symmetry before deciding what, if anything, should be treated. Her approach is precise and measured, with the aim of enhancing the features rather than changing them.",
    },
  ],
};
