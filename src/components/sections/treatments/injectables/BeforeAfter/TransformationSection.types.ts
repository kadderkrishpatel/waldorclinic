export interface TransformationItem {
  title: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  objectPosition?: string;
  /** Optional line shown inside the card, at the bottom of the images */
  caption?: string;
  /**
   * A single ready-made picture that already shows before and after (with its
   * own frame and labels). When set, the card shows it whole instead of the
   * two-half slider, and beforeImage / afterImage can be left empty.
   */
  combinedImage?: string;
  /** Card background behind combinedImage, matched to the picture's frame colour */
  combinedBackground?: string;
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
