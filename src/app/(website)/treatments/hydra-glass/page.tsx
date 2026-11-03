import type { Metadata } from "next";
import {
  BeforeAfter,
  International,
  Practitioners,
  ServiceHero,
  ServiceStats,
  SignatureTreatments,
  SuccessStories,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/treatments/hydra-glass";
import ServiceSchema from "@/src/components/seo/ServiceSchema";
import { treatmentData, treatmentRows } from "@/src/components/sections/treatments/hydra-glass/SignatureTreatments/SignatureTreatments.data";

const pageDescription =
  "Explore WALDOR's HydraGlass™ facial treatments — tailored, non-invasive protocols combining exfoliation and deep hydration to reveal smoother, radiant, glass-skin.";


export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: pageDescription,
};

export default async function HydraGlassPage() {
  return (
    <>
      <ServiceSchema
        name={treatmentData.highlight}
        description={pageDescription}
        offers={treatmentRows.map((row) => ({
          name: row.title,
          price: row.price,
          description: row.description,
        }))}
      />
      <ServiceHero />
      <SignatureTreatments />
      <ServiceStats />
      <International />
      <BeforeAfter />
      <WhyChooseUs />
      <TreatmentBenefits />
      <Practitioners />
      <SuccessStories />
    </>
  );
}
