import { logoSliderData, LogoItem } from "@/src/components/sections/home/LogoSlider/LogoSlider.data";

export const credData = {
  eyebrow: "OUR CREDENTIALS",
  before: "Excellence",
  highlight: "You Can Trust",
  description:
    "Every certification reflects our commitment to clinical excellence, patient safety and internationally recognised standards in modern aesthetic care.",
};

export interface Credential {
  id?: number;
  name: string;
  image: string;
}

export const credentialLogos: LogoItem[] = logoSliderData.logos;
