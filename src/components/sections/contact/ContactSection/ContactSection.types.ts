export interface ContactInfoItem {
  id: string;
  title: string;
  value: string | string[];
  description: string;
  icon: "phone" | "whatsapp" | "mail" | "map" | "clock";
  href?: string;
}

export interface ContactFormField {
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
}

export interface ContactSectionData {
  heading: {
    before: string;
    highlight: string;
  };
  info: ContactInfoItem[];
  form: {
    heading: {
      before: string;
      highlight: string;
    };

    disclaimer: string;
    treatmentOptions: string[];
  };
}
