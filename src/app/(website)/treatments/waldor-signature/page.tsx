import type { Metadata } from "next";
import {
  BeforeAfter,
  Practitioners,
  ServiceHero,
  ServiceStats,
  SignatureTreatments,
  SocialSection,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/treatments/waldor-signature";
import { getInstagramStats } from "@/src/lib/instagramStats";
import { socialProfile } from "@/src/components/sections/treatments/waldor-signature/SocialSection/SocialSection.data";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import { treatmentData, treatmentCards } from "@/src/components/sections/treatments/waldor-signature/SignatureTreatments/SignatureTreatments.data";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: treatmentData.description,
};

export default async function WaldorSIgnaturePage() {
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
      <BeforeAfter />
      <WhyChooseUs />
      <TreatmentApproach />
      <TreatmentBenefits />
      <Practitioners />
      <SuccessStories />
      <SocialSection stats={stats} />
    </>
  );
}
