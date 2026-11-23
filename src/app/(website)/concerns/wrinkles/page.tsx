import {
  BeforeAfter,
  PatientSafety,
  Practitioners,
  ServiceHero,
  SignatureTreatments,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/concerns/wrinkles";
import { serviceHeroData } from "@/src/components/sections/concerns/wrinkles/ServiceHero/ServiceHero.data";
import RelatedMicroneedling from "@/src/components/sections/concerns/RelatedMicroneedling";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: serviceHeroData.description,
};

export default function WrinklesPage() {
  return (
    <>
      <ServiceHero />
      <SignatureTreatments />
      <RelatedMicroneedling concern="wrinkles" />
      <PatientSafety />
      <TreatmentBenefits items="indications" />
      <WhyChooseUs />
      <BeforeAfter />
      <TreatmentApproach />
      <TreatmentBenefits items="preventions" />
      <SuccessStories />
      <Practitioners />
    </>
  );
}
