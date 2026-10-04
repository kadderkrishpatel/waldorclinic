import { asset } from "@/src/lib/assets";

export const credData = {
  eyebrow: "OUR CREDENTIALS",
  before: "Excellence",
  highlight: "You Can Trust",
  description:
    "Every certification reflects our commitment to clinical excellence, patient safety and internationally recognised standards in modern aesthetic care.",
};

export interface Credential {
  id: number;
  name: string;
  image: string;
}

export const credentials: Credential[] = [
  {
    id: 1,
    name: "CPD",
    image: asset("/assets/waldor/about/about-logo-1.png"),
  },
  {
    id: 2,
    name: "JCCP",
    image: asset("/assets/waldor/about/about-logo-2.png"),
  },
  {
    id: 3,
    name: "Save Face",
    image: asset("/assets/waldor/about/about-logo-3.png"),
  },
  {
    id: 4,
    name: "ACE Group",
    image: asset("/assets/waldor/about/about-logo-4.png"),
  },
  {
    id: 5,
    name: "BACN",
    image: asset("/assets/waldor/about/about-logo-5.png"),
  },
];
