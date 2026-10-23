export type ProductCategory = "skin-care" | "merch";
export type ProductFilter = "all" | ProductCategory;
export type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  secondImage?: string;
  imageAlt: string;
  category: ProductCategory;
  href: string;
  badge?: string;
  /** Out of stock: card shows a Sold out state and the schema reports OutOfStock. */
  soldOut?: boolean;
  /** e.g. "5ml · two-part system" — shown next to the price in the details modal. */
  variantLabel?: string;
  /** Product-specific description, one paragraph per entry. */
  description?: string[];
  /** Checklist shown under "Key Benefits". */
  keyBenefits?: string[];
  /** Short note shown near the bottom of the modal (e.g. usage/storage instructions). */
  usageNote?: string;
  /** Overrides the shared shipping copy, if this product ships differently. */
  shippingText?: string;
  /** Overrides the shared manufacturing copy, if this product is made differently. */
  manufacturingText?: string;
  /** Overrides the shared certification badges (Vegan, Cruelty-free, etc.). */
  certifications?: string[];
}
