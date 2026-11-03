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
} from "@/src/components/sections/concerns/acne-scarring";
import { serviceHeroData } from "@/src/components/sections/concerns/acne-scarring/ServiceHero/ServiceHero.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: serviceHeroData.description,
};

export default function AcneScarringPage() {
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
      <Practitioners />
      <SuccessStories />
    </>
  );
}
