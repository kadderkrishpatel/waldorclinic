export interface TreatmentRow {
  id: string;
  title: string;
  description?: string;
  price: string;
  duration?: string;
  href?: string;
}

export interface TreatmentCard {
  id: string;
  title: string;
  description: string;
  rows: TreatmentRow[];
  highlights?: { title: string; price: string }[];
  fullWidth?: boolean;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  href?: string;
}
