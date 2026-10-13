import type {
  AcneIndicationItem,
  PreventionItem,
} from "./BenefitsSection.types";

export const indications: AcneIndicationItem[] = [
  {
    id: "uneven-skin-texture",
    number: "01",
    title: "Uneven Skin Texture",
    subtitle: "Your skin no longer feels consistently smooth.",
    description:
      "Areas affected by previous acne may develop an irregular texture, with subtle depressions or raised areas that remain long after active breakouts have resolved. These changes are often easier to feel than they are to see.",
  },
  {
    id: "visible-indentations",
    number: "02",
    title: "Visible Indentations in the Skin",
    subtitle: "Small depressions that don’t disappear with time.",
    description:
      "When inflammation damages collagen beneath the skin, healing may leave permanent indentations. These are commonly referred to as atrophic acne scars and may appear as rolling, boxcar or ice-pick scars depending on their shape and depth.",
  },
  {
    id: "raised-areas-following-acne",
    number: "03",
    title: "Raised Areas Following Acne",
    subtitle: "Some scars heal by producing excess collagen.",
    description:
      "Instead of creating depressions, the skin may produce more collagen than required during healing, resulting in firm, raised scars that remain confined to or occasionally extend beyond the original blemish.",
  },
  {
    id: "texture-more-noticeable",
    number: "04",
    title: "Texture More Noticeable in Certain Lighting",
    subtitle: "Natural light often reveals what mirrors don’t.",
    description:
      "Acne scars alter the skin’s surface, causing light to reflect unevenly. Many patients first notice their scarring beneath daylight, overhead lighting or in photographs where shadows make textural changes more apparent.",
  },
  {
    id: "make-up-apply",
    number: "05",
    title: "Make-Up Doesn’t Apply Evenly",
    subtitle: "Cosmetic products may settle into uneven areas.",
    description:
      "Foundation and concealer often collect within shallow depressions, making textural irregularities more noticeable rather than concealing them. This is frequently one of the earliest concerns patients describe during consultation.",
  },
  {
    id: "persistent-changes",
    number: "06",
    title: "Persistent Changes Despite Clear Skin",
    subtitle: "Your acne has resolved, but your skin hasn’t fully recovered.",
    description:
      "Even after active acne has cleared, lingering uneven texture may indicate lasting structural changes beneath the skin. Unlike temporary post-acne marks, these irregularities often persist without targeted treatment and professional clinical assessment.",
  },
  {
    id: "red-brown-marks",
    number: "07",
    title: "Red or Brown Marks That Linger",
    subtitle: "Not every post-acne mark is a scar.",
    description:
      "Persistent pigmentation isn’t always a sign of scarring. While red or brown marks often fade over time, true scars involve structural changes beneath the skin. Distinguishing between the two is essential to a plan tailored to your skin.",
  },
];

export const preventions: PreventionItem[] = [
  {
    id: "pick-or-pop",
    number: "01",
    title: "Do not pick or pop",
    description:
      "Squeezing or picking pimples pushes inflammation deeper into the skin, making permanent scars much more likely.",
  },
  {
    id: "treat-acne-early",
    number: "02",
    title: "Treat acne early",
    description:
      "Use targeted ingredients such as salicylic acid or topical retinoids promptly to control severe breakouts before they damage tissue.",
  },
  {
    id: "daily-sunscreen",
    number: "03",
    title: "Use daily sunscreen",
    description:
      "Apply a non-comedogenic SPF 30 or higher every morning to prevent UV exposure from darkening healing marks.",
  },
  {
    id: "keep-skin-gentle",
    number: "04",
    title: "Keep skin gentle",
    description:
      "Wash twice daily with a mild cleanser and avoid harsh physical scrubs that increase redness and swelling.",
  },
  {
    id: "practitioners-guidance",
    number: "05",
    title: "Follow your practitioner’s guidance",
    description:
      "Adhere to your personalised aftercare plan as advised by your practitioner to promote healthy recovery and protect your results.",
  },
];

export const benefitSections = {
  indications: {
    eyebrow: "CLINICAL INDICATORS",
    heading: {
      before: "Signs You May Have",
      highlight: "Scarring",
    },
    tag: "indications",
    description:
      "Scarring is often felt before it is seen. These are the indicators patients most commonly describe at consultation.",
    items: indications,
  },

  preventions: {
    eyebrow: "PREVENTION & AFTERCARE",
    heading: {
      before: "Essential Care for",
      highlight: "Healthier Skin",
    },
    tag: "preventions",
    description: "",
    items: preventions,
  },
} as const;
