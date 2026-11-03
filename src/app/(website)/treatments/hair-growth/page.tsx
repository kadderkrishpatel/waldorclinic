import {
  BeforeAfter,
  Practitioners,
  ServiceHero,
  ServiceStats,
  VideoShowcase,
  SignatureTreatments,
  SocialSection,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/treatments/hair-growth";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import { treatmentData, treatmentCards } from "@/src/components/sections/treatments/hair-growth/SignatureTreatments/SignatureTreatments.data";
import type { Metadata } from "next";

import { getInstagramStats } from "@/src/lib/instagramStats";
import { socialProfile } from "@/src/components/sections/treatments/hair-growth/SocialSection/SocialSection.data";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: treatmentData.description,
};

export default async function HairGrowthPage() {
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
      <VideoShowcase />
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
