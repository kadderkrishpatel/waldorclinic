export interface TransformationItem {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  objectPosition?: string;
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
