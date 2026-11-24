import {
  BeforeAfter,
  Practitioners,
  ServiceHero,
  ServiceStats,
  VideoShowcase,
  SignatureTreatments,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/treatments/hair-growth";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import { treatmentData, treatmentCards } from "@/src/components/sections/treatments/hair-growth/SignatureTreatments/SignatureTreatments.data";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: treatmentData.description,
};

export default async function HairGrowthPage() {
  return (
    <>
      <ServiceSchema
        name={treatmentData.highlight}
        description={treatmentData.description}
        offers={treatmentCards.flatMap((card) => card.rows).map((row) => ({
          name: row.title,
          price: row.price,
          description: row.description,
        }))}
      />
      <ServiceHero />
      <SignatureTreatments />
      <VideoShowcase />
      <ServiceStats />
      <BeforeAfter />
      <WhyChooseUs />
      <TreatmentApproach />
      <TreatmentBenefits />
      <Practitioners />
      <SuccessStories />
    </>
  );
}
