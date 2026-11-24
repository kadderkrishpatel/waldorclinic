export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterContact {
  phone: string;
  email: string;
  address: string;
  timings: string[];
}

export interface FooterSocialLink {
  name: string;
  icon: string;
  href: string;
}

export interface FooterCTA {
  heading: {
    before: string;
    highlight: string;
  };
  description: string;
  highlightcolor?: string;
  /** Overrides the heading's default max-w-[700px], for CTAs whose text needs a different line-wrap width */
  headingMaxWidth?: string;
  button: {
    label: string;
    href: string;
  };
  /** Optional second button, shown beside the main one */
  secondaryButton?: {
    label: string;
    href: string;
  };
  /** Optional small print shown under the buttons */
  note?: string;
}

/**
 * Shared footer content
 */
export interface FooterDataProps {
  footerImg: string;
  footerRightImg: string;
  footerLeftImg: string;
  columns: FooterColumn[];
  contact: FooterContact;
  socialLinks: FooterSocialLink[];
}

/**
 * Complete Footer Props
 */
export interface FooterProps extends FooterDataProps {
  cta: FooterCTA;
}
