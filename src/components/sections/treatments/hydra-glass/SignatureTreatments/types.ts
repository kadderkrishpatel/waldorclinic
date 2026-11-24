export interface TreatmentRow {
  id: string;
  title: string;
  description?: string;
  price: string;
  duration?: string;
  href?: string;
  /** Optional small gold tag shown under the title, e.g. "Exclusive to WALDOR" */
  tag?: string;
  /** Optional short list shown under the description when the row is open */
  options?: { label: string; text: string }[];
  /** Optional sub-heading shown above this row, starting a new group inside the card */
  groupHeading?: { title: string; tag?: string; intro?: string };
}

export interface TreatmentCard {
  id: string;
  title: string;
  description: string;
  rows: TreatmentRow[];
  highlights?: { title: string; price: string }[];
  fullWidth?: boolean;
  /** Shows every row at full height instead of a scrollable box (for long cards) */
  expandRows?: boolean;
  /** Optional price shown at the right end of the card title, e.g. "£295" or "from £375" */
  price?: string;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  href?: string;
}
