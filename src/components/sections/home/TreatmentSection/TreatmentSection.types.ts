export interface TreatmentItem {
  title: string;
  description: string;
  video: string;
  href: string;
  offset?: boolean;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface TreatmentSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
  treatments: TreatmentItem[];
  topDecorationImg: string;
  bottomDecorationImg: string;
}
