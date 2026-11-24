export interface TransformationItem {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  objectPosition?: string;
  /** Optional line shown inside the card, at the bottom of the images */
  caption?: string;
  /** Wide photos: show before on top and after below instead of side by side */
  stacked?: boolean;
}

export interface HeroHeading {
  before?: string;
  highlight: string;
  after?: string;
}

export interface TransformationSectionProps {
  eyebrow: string;
  heading: HeroHeading;
  description: string;
  transformations: TransformationItem[];
}
