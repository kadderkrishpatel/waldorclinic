import { asset } from "@/src/lib/assets";
import { DoctorSectionProps } from "./DoctorSection.types";

export const doctorSectionData: DoctorSectionProps = {
  eyebrow: "Your Trusted Practitioner",
  heading: {
    before: "Meet the Aestheticians Behind",
    highlight: "Your Glass Skin",
  },
  description:
    "Great skin isn't luck; it's a discipline. Discover the specialists who sculpt, refine and deliver the glowing transformations our clients rave about.",
  doctors: [
    {
      name: "Abbie",
      role: "Lead Aesthetician",
      image: asset("/assets/waldor/team/team-1.png"),
      slug: "sara-todd",
      description: "Abbie believes the treatment is only half the result. She is drawn to microneedling and the precision it takes to do it beautifully, and she has a real fondness for congested skin, the kind that needs proper extraction work before anything else can be built on top of it. Clearing acne and blackheads is, in her words, the satisfying part. What follows is the aftercare journey she maps out around it, exactly what your skin needs in the days and weeks afterwards. Clients tend to leave her room understanding their own skin properly, often for the first time.",
    },
    {
      name: "Marsi",
      role: "Senior Aesthetic Practitioner",
      image: asset("/assets/waldor/team/team-2.png"),
      slug: "emily-carter",
      description: "Marsi is at her best with lifting and tightening technologies, HIFU above all. She has a particular eye for body transformation, designing considered programmes for clients working through stubborn areas or changes in skin firmness, including after pregnancy. She plans in phases rather than single sessions, which is why her results tend to hold.",
    },
    {
      name: "Beatrice",
      role: "Senior Aesthetic Practitioner",
      image: asset("/assets/waldor/team/team-3.png"),
      slug: "jenny-wilson",
      description: "Beatrice works at the level the eye cannot see. She is drawn to regenerative aesthetics, to polynucleotides (PDRN) and exosomes, and to the AI 4D analysis that shows what skin is actually doing beneath the surface. She thinks in months rather than appointments, which tends to suit clients who want a result that holds rather than a result that arrives quickly.",
    },
    {
      name: "Hend",
      role: "Senior Aesthetic Practitioner",
      image: asset("/assets/waldor/team/team-4.png"),
      slug: "martha-jackson",
      description: "Hend builds the plan around the person in front of her before she settles on a single setting. She is drawn to laser resurfacing and pigment work, to the glass skin protocols, and to reading the AI 4D analysis closely enough that nothing is left to assumption. Clients talk about her lightness of touch and about how completely the plan was theirs.",
    },
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
    {
      name: "Brooke",
      role: "Front of House",
      image: asset("/assets/waldor/team/team-7.png"),
      slug: "team-member-7",
      description: "Brooke excels in innovative lifting and tightening techniques, especially HIFU. With a keen focus on body transformation, she crafts tailored programs for clients addressing persistent concerns or skin firmness changes, particularly post-pregnancy. Her approach is phased, ensuring that results are long-lasting.",
    },
    {
      name: "Emily",
      role: "Front of House",
      image: asset("/assets/waldor/team/team-8.png"),
      slug: "team-member-8",
      description: "Emily is passionate about skincare and believes that understanding your skin is crucial for achieving the best results. She loves exploring innovative treatments and is particularly interested in the art of chemical peels. For her, the most rewarding aspect is seeing clients transform their skin and confidence.",
    },
    {
      name: "Hedieh",
      role: "Clinic Manager",
      image: asset("/assets/waldor/team/team-9.png"),
      slug: "team-member-9",
      description: "Hedieh is a visionary in the field of skincare, focusing on innovative techniques that go beyond the visible. She explores the potential of advanced materials like polynucleotides and exosomes, utilizing cutting-edge AI technology to analyze skin health deeply. Her approach is long-term, prioritizing sustainable results over quick fixes.",
    },
  ],
};
