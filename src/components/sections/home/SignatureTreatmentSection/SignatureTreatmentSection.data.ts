import { asset } from "@/src/lib/assets";
import { SignatureTreatmentSectionProps } from "./SignatureTreatmentSection.types";

export const signatureTreatmentData: SignatureTreatmentSectionProps = {
  eyebrow: "SIGNATURE SKINCARE TREATMENTS",
  heading: {
    before: "Our Most",
    highlight: "Requested Treatments",    
  },
  button: {
    label: "View Full Menu",
    href: "/treatments/waldor-signature",
  },
  treatments: [
    {
      number: "01",
      title: "HydraGlass™ Facial",
      description:
        "Deep cleansing, gentle exfoliation and intense hydration for clearer, smoother, glass-like glowing skin.",
      image: asset("/assets/waldor/categories/HydraGlass%20Facial.png"),
      slug: "hydraglass-facial",
      href: "/treatments/hydra-glass",
    },
    {
      number: "02",
      title: "Salmon Sperm Polynucleotide",
      description:
        "Experience regenerative DNA therapy that repairs deep cellular damage, instantly boosting your skin’s hydration and youthful bounce.",
      image: asset("/assets/waldor/categories/skin-cat.jpg"),
      slug: "salmon-sperm-polynucleotide",
      href: "/treatments/waldor-signature",
    },
    {
      number: "03",
      title: "Waldor™ Peptide Signature Blends",
      description:
        "A targeted peptide blend formulated to address specific skin concerns and support advanced skin rejuvenation.",
      image: asset("/assets/waldor/categories/Salmon%20Sperm%20.png"),
      slug: "waldor-peptide-blends",
      href: "/treatments/waldor-signature",
    },
    {
      number: "04",
      title: "Hair Growth Treatment",
      description:
        "A targeted scalp treatment designed to nourish the scalp, support hair health and promote stronger, healthier-looking hair.",
      image: asset("/assets/waldor/categories/Hair%20Growth%20Treatment.png"),
      slug: "hair-growth-treatment",
      href: "/treatments/hair-growth",
    },
    {
      number: "05",
      title: "Microneedling Cocktail Menu",
      description:
        "Peptide and exosome cocktails made in our own laboratories in Korea, delivered by our proprietary electroporation pen. Exceptional results with minimal downtime.",
      // TODO: swap for a dedicated microneedling image once supplied.
      image: asset("/assets/waldor/categories/dull-skin.jpg"),
      slug: "microneedling",
      href: "/treatments/microneedling",
    },
  ],
};
