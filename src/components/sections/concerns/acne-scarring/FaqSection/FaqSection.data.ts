export type FAQCategory = "all" | "treatments" | "concerns" | "clinic";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "all">;
}

export const faqSectionData = {
  eyebrow: "FAQ",
  heading: {
    before: "Questions We're ",
    highlight: "Often Asked",
  },
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    category: "concerns",
    question: "Do acne scar treatments differ for teenagers and adults?",
    answer:
      "Yes. Treatment recommendations are based on your skin’s condition rather than your age alone. For teenagers, the priority is often controlling active acne before addressing any scarring. For adults with stable skin, treatment can focus on improving existing scars through personalised therapies. During your consultation, our clinicians assess your skin’s current health, scar type, and long-term goals before recommending the most appropriate approach.",
  },
  {
    id: 2,
    category: "concerns",
    question:
      "Can acne scar treatments be performed on areas other than the face?",
    answer:
      "Yes. Scarring can affect the back, chest, shoulders, and other areas of the body, and many treatments can be adapted accordingly. The choice of treatment depends on the location, scar type, skin quality, and your individual concerns to ensure the safest and most effective outcome.",
  },
  {
    id: 3,
    category: "concerns",
    question:
      "Are there any complications or side effects of treatments for acne scars?",
    answer:
      "Yes. Scarring can affect the back, chest, shoulders, and other areas of the body, and many treatments can be adapted accordingly. The choice of treatment depends on the location, scar type, skin quality, and your individual concerns to ensure the safest and most effective outcome.",
  },
  {
    id: 4,
    category: "concerns",
    question:
      "How long does it typically take to see improvements in acne scars?",
    answer:
      "Improving acne scars is a gradual process. While some treatments may produce visible changes within a few weeks, collagen remodelling continues over several months. The number of sessions required varies according to the type and severity of your scars, your skin's healing response, and your personalised treatment plan.",
  },
  {
    id: 5,
    category: "concerns",
    question: "How can I help reduce the risk of developing acne scars?",
    answer:
      "Early management of active acne is the most effective way to reduce the risk of scarring. Avoid picking or squeezing blemishes, follow a consistent skincare routine, protect your skin with daily sun protection, and seek professional advice if your acne is persistent or severe. Prompt treatment can help minimise inflammation and support healthier skin healing.",
  },
];
