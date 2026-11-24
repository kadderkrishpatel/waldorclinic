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
  areas?: {};
  rows: TreatmentRow[];
  fullWidth?: boolean;
  fromPrice?: string;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  href?: string;
}
