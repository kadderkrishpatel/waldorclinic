import type { TreatmentCard, InfoCard } from "./types";

export const treatmentData = {
  eyebrow: "Curated Expertise",
  before: "Explore Our",
  highlight: "Injectable Treatments",
  description:
    "All injectable treatments are performed exclusively by qualified doctors.",
  cta: {
    href: "/contact-us",
    label: "Book an appointment",
  },
};

export const treatmentCards: TreatmentCard[] = [
  {
    id: "dermal-fillers",
    title: "Dermal / Facial Fillers",
    description:
      "Enhance facial contours, restore lost volume, and smooth wrinkles with precision-placed hyaluronic acid-based fillers for a youthful and refreshed appearance.",
    fromPrice: "From £300",

    rows: [
      {
        id: "cheek-enhancement",
        title: "Cheek Enhancement",
        price: "£650",
        description:
          "Our Cheek Enhancement treatment restores volume and lift to the mid-face using premium dermal fillers. It enhances cheek definition, rebalances facial structure, and creates a naturally lifted, youthful contour.",
      },
      {
        id: "chin",
        title: "Chin",
        price: "£350",
        description:
          "Our Chin Filler treatment refines and balances facial proportions by enhancing the chin’s projection and shape. Ideal for improving profile harmony and defining the lower face.",
      },
      {
        id: "dermal-filler-dissolving",
        title: "Dermal Filler Dissolving",
        price: "£200",
        description:
          "Our Dermal Filler Dissolving treatment safely removes unwanted or migrated filler using hyaluronidase. Performed by a medical doctor to restore your natural contours and prepare the area for future correction if desired.",
      },
      {
        id: "jawline-contouring",
        title: "Jawline Contouring",
        price: "£650",
        description:
          "Our Jawline Contouring treatment uses advanced filler techniques to sculpt, define, and sharpen the jawline. It enhances structure, improves balance, and creates a more lifted, contoured appearance. ",
      },
      {
        id: "lips-1",
        title: "Lips - 0.5 ML",
        price: "£300",
        description:
          "A subtle enhancement ideal for first-time clients or those seeking a natural, hydrated look. Adds gentle volume, smooths lines, and defines lip shape for soft, balanced results.",
      },
      {
        id: "lips-2",
        title: "Lips - 1 ML",
        price: "£400",
        description:
          "A fuller enhancement designed to restore volume, symmetry, and definition while maintaining natural movement. Perfect for those seeking more noticeable yet elegant lip results.",
      },
      {
        id: "marionette-lines",
        title: "Marionette Lines",
        price: "£350",
        description:
          "This targeted filler treatment softens marionette lines (from mouth corners to chin) to lift and rejuvenate the lower face. Restores structure and smoothness for a refreshed expression.",
      },
      {
        id: "nasalabial-folds",
        title: "Nasalabial Folds",
        price: "£350",
        description:
          "Our Nasolabial Fold treatment smooths and lifts the folds between the nose and mouth using soft, flexible filler. Restores youthful volume and softens deep creases for a natural finish.",
      },
      {
        id: "non-surgical-bbl",
        title: "Non-Surgical BBL",
        price: "£2,000",
        description:
          "Our Non-Surgical BBL uses high-density dermal filler to shape, lift, and enhance the buttocks without surgery. Adds volume, projection, and contour for a smoother, more sculpted silhouette. ",
      },
      {
        id: "non-surgical-bbl-2",
        title: "Non-Surgical BBL",
        price: "£2,000",
        description:
          "Enhance and sculpt the buttocks with hyaluronic acid fillers for a fuller, lifted, and more contoured appearance without surgery.",
      },
      {
        id: "nonsurgical-rhinoplasty",
        title: "Nonsurgical Rhinoplasty",
        price: "£550",
        description:
          "Our Non-Surgical Rhinoplasty uses precision filler placement to refine the nose shape, smooth bumps, and lift the tip, all without downtime. Ideal for profile balancing and subtle contour correction.",
      },
      {
        id: "tear-trough",
        title: "Tear Trough",
        price: "£550",
        description:
          "Our Tear Trough treatment refreshes and brightens tired undereyes by filling hollow areas and smoothing shadows. Reduces dark circles and restores a rested, youthful appearance.",
      },
      {
        id: "dermal-filler-1-ml",
        title: "Dermal Filler - 1 ML",
        price: "£350",
        description:
          "This versatile filler option allows your doctor to assess and enhance multiple facial areas for balanced, harmonious results. Commonly used for subtle contouring across the cheeks, chin, or jawline to restore proportion and symmetry.",
      },
    ],
  },

  {
    id: "anti-wrinkle-injections",
    title: "Anti-Wrinkle Injections",
    description:
      "Relax fine lines and dynamic wrinkles with expertly administered botulinum toxin, providing a smoother and more rejuvenated look.",
    fromPrice: "From £195",
    rows: [
      {
        id: "anti-wrinkle-1-areas",
        title: "Anti-Wrinkle - 1 Areas",
        price: "£195",
        description:
          "Our Anti-Wrinkle treatment softens expression lines using precise muscle relaxation for a smoother, refreshed look. Typically used for one area such as the forehead, frown lines, or crow’s feet.",
      },
      {
        id: "anti-wrinkle-2-areas",
        title: "Anti-Wrinkle - 2 Areas",
        price: "£245",
        description:
          "Our Anti-Wrinkle treatment targets two key facial areas ,most commonly the forehead and frown lines, to reduce movement, smooth wrinkles, and rejuvenate the upper face for a naturally rested appearance.",
      },
      {
        id: "anti-wrinkle-3-areas",
        title: "Anti-Wrinkle - 3 Areas",
        price: "£295",
        description:
          "A full-face anti-wrinkle treatment targeting the forehead, frown, and crow’s feet for complete upper-face rejuvenation. Smooths lines, softens expressions, and restores a youthful, relaxed look.",
      },
      {
        id: "anti-wrinkle-4-areas",
        title: "Anti-Wrinkle - 4 Areas",
        price: "£345",
        description:
          "Comprehensive anti-wrinkle treatment covering the main upper-face areas such as forehead, frown, crow’s feet, and nose lines, for smoother skin and balanced facial harmony.",
      },
      {
        id: "dimpled-chin",
        title: "Dimpled Chin",
        price: "£200",
        description:
          "Targeted anti-wrinkle injections to relax the chin muscle and smooth dimpling or ‘orange peel’ texture for a softer, more refined lower face.",
      },
      {
        id: "facial-hyperhidrosis",
        title: "Facial Hyperhidrosis",
        price: "£395",
        description:
          "Anti-wrinkle injections to reduce excessive sweating in the face. Safely minimises perspiration by blocking overactive sweat glands, leaving skin drier and more comfortable.",
      },
      {
        id: "gummy-smile",
        title: "Gummy Smile",
        price: "£195",
        description:
          "Targeted anti-wrinkle injections to relax the muscles that lift the upper lip, reducing excessive gum display when smiling. Creates a softer, more balanced smile while maintaining natural movement and expression.",
      },
      {
        id: "jowl-lift",
        title: "Jowl Lift",
        price: "£250",
        description:
          "Strategic anti-wrinkle placement to lift and contour the lower face by relaxing downward-pulling muscles. Helps define the jawline and reduce early signs of sagging.",
      },
      {
        id: "lip-flip",
        title: "Lip Flip",
        price: "£150",
        description:
          "A subtle anti-wrinkle treatment that relaxes the muscles around the upper lip, gently flipping the lip outward for a fuller, more defined appearance without added volume. Perfect for enhancing shape while keeping a natural, soft look.",
      },
      {
        id: "masseter",
        title: "Masseter",
        price: "£450",
        description:
          "Anti-wrinkle injections into the masseter muscles to relax tension, reduce teeth grinding (bruxism), and create a slimmer, more contoured jawline. This treatment refines facial shape while easing jaw discomfort for a balanced, relaxed appearance.",
      },
      {
        id: "muscle-spasms",
        title: "Muscle Spasms",
        price: "£600",
        description:
          "Medical anti-wrinkle injections used to relieve facial muscle spasms or twitching. Reduces tension, improves comfort, and restores relaxed facial movement.",
      },
      {
        id: "platysmal-bands",
        title: "Platysmal Bands",
        price: "£250",
        description:
          "Targeted anti-wrinkle injections along the vertical neck bands to relax the platysma muscles, smooth neck lines, and subtly lift the lower face. Improves neck contour and restores a smoother, more youthful profile. ",
      },
      {
        id: "swan-neck",
        title: "Swan Neck",
        price: "£400",
        description:
          "Precise anti-wrinkle injections along the neck to reduce muscle tension and elongate the neckline for a smoother, more elegant contour.",
      },
      {
        id: "nefertiti-neck-lift",
        title: "Nefertiti Neck Lift",
        price: "£500",
        description:
          "An advanced anti-wrinkle technique targeting the lower face and neck to lift, tighten, and redefine the jawline. Smooths platysmal bands and restores a graceful, youthful profile.",
      },
      
    ],
  },

  {
    id: "tag-removal",
    title: "Mole & Skin Tag Removal",
    description:
      "Safe and effective injectable solutions to remove unwanted moles and skin tags with minimal discomfort and downtime.",
    fromPrice: "From £100",
    rows: [
      {
        id: "mole-removal",
        title: "Mole Removal",
        price: "£350",
        description:
          "Our doctor-led Mole Removal treatment safely removes benign moles using advanced medical techniques to minimise scarring and promote quick healing. Each mole is assessed by our doctor before removal to ensure suitability and the best cosmetic outcome.",
      },
      {
        id: "skin-tag-removal",
        title: "Skin Tag Removal",
        price: "£150",
        description:
          "Our doctor-led Skin Tag Removal treatment precisely removes unwanted skin tags for a smoother, clearer finish. The procedure is quick, safe, and minimally invasive, performed by a medical doctor for maximum comfort and care.",
      },
    ],
  },

  {
    id: "profhilo-skin-boosters",
    title: "Profhilo SKIN BOOSTERS",
    description:
      "An innovative hyaluronic acid treatment that deeply hydrates and improves skin elasticity, resulting in a radiant glow.",
    rows: [
      {
        id: "profhilo",
        title: "Profhilo",
        price: "£450",
        description:
          "Our Profhilo Skin Booster is an injectable treatment that deeply hydrates and remodels the skin from within. Using high-concentration hyaluronic acid, it stimulates collagen and elastin to improve firmness, elasticity, and overall luminosity. Ideal for dull, tired, or sagging skin on the face, neck, or décolletage. Results develop gradually, leaving the skin plumper, smoother, and naturally refreshed.",
      },
      
    ],
  },

  {
    id: "salmon-sperm-polynucleotide",
    title: "Salmon Sperm Polynucleotide",
    description:
      "A regenerative treatment rich in DNA fragments to repair and rejuvenate the skin, improving hydration and elasticity.",
    rows: [
      {
        id: "salmon-sperm-polynucleotide-treatment",
        title: "",
        price: "From £500",
      },
    ],
  },

  {
    id: "facial-balancing",
    title: "Facial Balancing",
    description:
      "Achieve harmonious facial proportions with a customised combination of injectables designed to enhance symmetry and natural beauty.",
    rows: [],
  },

  {
    id: "exosomes",
    title: "Exosomes",
    description:
      "Advanced regenerative therapy that enhances cell communication to promote skin repair, collagen production, and a youthful complexion.",
    rows: [
      {
        id: "exosomes-treatment",
        title: "",
        price: "£395 | £495 | £595",
      },
    ],
  },

  {
    id: "hyaluronic-acid",
    title: "Hyaluronic Acid",
    description:
      "Provides deep skin hydration and nourishment, improving texture, plumpness, and overall skin health.",
    rows: [
      {
        id: "hyaluronic-acid-treatment",
        title: "",
        price: "£280",
      },
    ],
  },

  {
    id: "fat-dissolving-injectables",
    title: "Fat Dissolving Injectables",
    description:
      "Non-surgical solution to target stubborn fat pockets in areas such as the chin, jawline, and body, creating a more contoured appearance.",
    rows: [],
  },

  {
    id: "prp",
    title: "PRP (Platelet-Rich Plasma)",
    description:
      "Harness your body's natural growth factors to stimulate collagen production, improve skin texture, and promote hair growth.",
    rows: [
      {
        id: "prp-treatment",
        title: "",
        price: "From £375",
      },
    ],
  },

  {
    id: "nefertiti-neck-lift-standalone",
    title: "Nefertiti Neck Lift",
    description:
      "Tightens and defines the jawline & neck by relaxing key muscles for a sleeker profile.",
    rows: [
      {
        id: "nefertiti-neck-lift-standalone-treatment",
        title: "",
        price: "£500",
      },
    ],
  },

  {
    id: "non-surgical-bbl-standalone",
    title: "Non-Surgical BBL",
    description:
      "Enhance and sculpt the buttocks with hyaluronic acid fillers for a fuller, lifted, and more contoured appearance without surgery.",
    rows: [],
  },
];
