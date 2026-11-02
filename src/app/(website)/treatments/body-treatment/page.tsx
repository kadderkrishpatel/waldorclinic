import {
  BeforeAfter,
  PatientSafety,
  Practitioners,
  ServiceFAQ,
  ServiceHero,
  ServiceStats,
  SignatureTreatments,
  SocialSection,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/treatments/body-treatment";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import { treatmentData, treatmentCards } from "@/src/components/sections/treatments/body-treatment/SignatureTreatments/SignatureTreatments.data";
import type { Metadata } from "next";

import { getInstagramStats } from "@/src/lib/instagramStats";
import { socialProfile } from "@/src/components/sections/treatments/body-treatment/SocialSection/SocialSection.data";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: treatmentData.description,
};

export default async function BodyTreatmentPage() {
  const stats = await getInstagramStats("waldorclinic", {
    posts: socialProfile.posts,
    followers: socialProfile.followers,
  });

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
      <ServiceStats />
      <PatientSafety />
      <BeforeAfter />
      <WhyChooseUs />
      <TreatmentApproach />
      <TreatmentBenefits />
      <Practitioners />
      <SuccessStories />
      <ServiceFAQ />
      <SocialSection stats={stats} />
    </>
  );
}
