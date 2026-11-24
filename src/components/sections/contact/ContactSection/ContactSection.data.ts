import { ContactSectionData } from "./ContactSection.types";

export const contactSectionData: ContactSectionData = {
  heading: {
    before: "Get in",
    highlight: "Touch.",
  },

  info: [
    {
      id: "phone",
      icon: "whatsapp",
      title: "CALL US",
      value: "+44 7464 745114",
      href: "https://wa.me/447464745114",
      description: "Mon - Sat, during clinic hours",
    },

    {
      id: "email",
      icon: "mail",
      title: "EMAIL US",
      value: "info@waldorclinic.com",
      description: "We reply within one working day",
    },

    {
      id: "address",
      icon: "map",
      title: "VISIT US",
      value: ["35 Great Portland Street", "London W1W 8QQ"],
      description: "Marylebone · 3 minutes from Oxford Circus",
    },

    {
      id: "hours",
      icon: "clock",
      title: "OPENING HOURS",
      value: [
        "Mon - Sat: 10am - 6pm",
        "Sunday: Opening Soon",
      ],
      description: "",
    },
  ],

  form: {
    heading: {
      before: "Send an",
      highlight: "enquiry.",
    },

    treatmentOptions: [
      "Anti Wrinkle",
      "Glass Skin & Facials",
      "Acne Treatments",
      "Body Contouring",
      "Hair Growth",
      "Dermal Fillers",
      "Chemical Peel",
      "Laser Treatment",
      "Skin Consultation",
      "Other",
    ],

    disclaimer:
      "By submitting this form you agree to our privacy policy. Injectables are prescription-only medicines and are discussed at consultation only.",
  },
};
