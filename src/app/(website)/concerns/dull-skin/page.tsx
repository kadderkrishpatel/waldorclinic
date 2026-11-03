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
} from "@/src/components/sections/concerns/dull-skin";
import { serviceHeroData } from "@/src/components/sections/concerns/dull-skin/ServiceHero/ServiceHero.data";
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
