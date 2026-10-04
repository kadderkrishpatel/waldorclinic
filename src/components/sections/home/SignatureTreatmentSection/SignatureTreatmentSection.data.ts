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
        "A smoothing dermal treatment that gently refines texture and locks in moisture to instantly unveil a flawless, poreless glass-skin glow.",
      image: asset("/assets/waldor/categories/service-thumb.jpg"),
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
        "Cellular molecules engineered to trigger collagen production, fortify your skin barrier and drive deep structural regeneration.",
      image: asset("/assets/waldor/categories/service-thumb.jpg"),
      slug: "waldor-peptide-blends",
      href: "/treatments/waldor-signature",
    },
    {
      number: "04",
      title: "Hair Growth Treatment",
      description:
        "Advanced biological growth factors awaken resting roots, boosting circulation to deliver visibly thicker, fuller and healthier hair.",
      image: asset("/assets/waldor/categories/skin-cat.jpg"),
      slug: "hair-growth-treatment",
      href: "/treatments/hair-growth",
    },
  ],
};
