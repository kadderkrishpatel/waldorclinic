import { asset } from "@/src/lib/assets";

export const teamData = {
  eyebrow: "MEET THE TEAM",
  before: "The people",
  highlight: "who listen first",
  description:
    "Every WALDOR practitioner is trained across our full range of Korean and Japanese technologies, and our signature protocols, HydraGlass™ included, are performed by all of them. Your treatment is never limited by who you see. What you will notice is what each of them is drawn to.",
  image: asset("/assets/waldor/about/about-hero.jpg"), // Replace with your image
};

export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Abbie",
    designation: "Lead Aesthetician",
    description:
      "Abbie believes the treatment is only half the result. She is drawn to microneedling and the precision it takes to do it beautifully, and she has a real fondness for congested skin, the kind that needs proper extraction work before anything else can be built on top of it. Clearing acne and blackheads is, in her words, the satisfying part. What follows is the aftercare journey she maps out around it, exactly what your skin needs in the days and weeks afterwards. Clients tend to leave her room understanding their own skin properly, often for the first time.",
    image: asset("/assets/waldor/team/team-1.png"),
  },
  {
    id: 2,
    name: "Marsi",
    designation: "Senior Aesthetic Practitioner",
    description:
      "Marsi is at her best with lifting and tightening technologies, HIFU above all. She has a particular eye for body transformation, designing considered programmes for clients working through stubborn areas or changes in skin firmness, including after pregnancy. She plans in phases rather than single sessions, which is why her results tend to hold.",
    image: asset("/assets/waldor/team/team-2.png"),
  },
  {
    id: 3,
    name: "Beatrice",
    designation: "Senior Aesthetic Practitioner",
    description:
      "Beatrice works at the level the eye cannot see. She is drawn to regenerative aesthetics, to polynucleotides (PDRN) and exosomes, and to the AI 4D analysis that shows what skin is actually doing beneath the surface. She thinks in months rather than appointments, which tends to suit clients who want a result that holds rather than a result that arrives quickly. ",
    image: asset("/assets/waldor/team/team-3.png"),
  },
  {
    id: 4,
    name: "Hend",
    designation: "Senior Aesthetic Practitioner",
    description:
      "Hend builds the plan around the person in front of her before she settles on a single setting. She is drawn to laser resurfacing and pigment work, to the glass skin protocols, and to reading the AI 4D analysis closely enough that nothing is left to assumption. Clients talk about her lightness of touch and about how completely the plan was theirs.",
    image: asset("/assets/waldor/team/team-4.png"),
  },
  {
    id: 5,
    name: "Dr. Irene",
    designation: "Medical Director",
    description:
      "Dr Irene leads the clinical side of WALDOR. She came to aesthetics from dentistry, which sounds like a departure and is in fact an advantage. Dental training studies the anatomy of the face as its core subject, the nerves, the muscles, the blood vessels and the bone beneath them, and then works with that anatomy every day, in millimetres, under local anaesthetic. Injecting accurately and safely in the most delicate areas of the face is not a skill she added to her practice later. It is the one she trained in from the beginning.Her manner is quiet and exact. She explains what she is doing and why before she does it, and she treats symmetry as something measured rather than judged by eye. Clients who see her for polynucleotides tend to say the same thing afterwards, that they barely felt it.",
    image: asset("/assets/waldor/team/team-5.png"),
  },
  {
    id: 6,
    name: "Dr. Azadeh",
    designation: "Aesthetic Doctor",
    description:
      "With more than 15 years of experience in aesthetic medicine and injectables, Dr Azadeh takes a considered, holistic approach to facial aesthetics.Every treatment begins with a detailed assessment of the face as a whole evaluating proportion, balance and symmetry before deciding what, if anything, should be treated. Her approach is precise and measured, with the aim of enhancing the features rather than changing them.Specialising in refined jawline definition, cheek contouring and lip enhancement, Dr Azadeh is known for results that feel balanced, natural and distinctly individual.Her philosophy is simple: subtle, sophisticated and never overdone. Every treatment is performed with precision, a light touch and meticulous attention to patient comfort.",
    image: asset("/assets/waldor/team/team-6.png"),
  },
  {
    id: 7,
    name: "Brooke",
    designation: "Front of House",
    description:
      "Brooke excels in innovative lifting and tightening techniques, especially HIFU. With a keen focus on body transformation, she crafts tailored programs for clients addressing persistent concerns or skin firmness changes, particularly post-pregnancy. Her approach is phased, ensuring that results are long-lasting.",
    image: asset("/assets/waldor/team/team-7.png"),
  },
  {
    id: 8,
    name: "Emily",
    designation: "Front of House",
    description:
      "Emily is passionate about skincare and believes that understanding your skin is crucial for achieving the best results. She loves exploring innovative treatments and is particularly interested in the art of chemical peels. For her, the most rewarding aspect is seeing clients transform their skin and confidence. After a treatment, she emphasizes the importance of a tailored aftercare routine, ensuring that each client knows how to maintain their results. Her clients often leave feeling empowered and knowledgeable about their skincare journey.",
    image: asset("/assets/waldor/team/team-8.png"),
  },
  {
    id: 9,
    name: "Hedieh",
    designation: "Clinic Manager",
    description:
      "Hedieh is a visionary in the field of skincare, focusing on innovative techniques that go beyond the visible. She explores the potential of advanced materials like polynucleotides and exosomes, utilizing cutting-edge AI technology to analyze skin health deeply. Her approach is long-term, prioritizing sustainable results over quick fixes, appealing to clients who value lasting improvements.",
    image: asset("/assets/waldor/team/team-9.png"),
  },
];
