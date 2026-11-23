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
} from "@/src/components/sections/concerns/uneven-skin-tone";
import { serviceHeroData } from "@/src/components/sections/concerns/uneven-skin-tone/ServiceHero/ServiceHero.data";
import RelatedMicroneedling from "@/src/components/sections/concerns/RelatedMicroneedling";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: serviceHeroData.description,
};

export default function unevenSkinTonePage() {
  return (
    <>
      <ServiceHero />
      <SignatureTreatments />
      <RelatedMicroneedling concern="uneven-skin-tone" />
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
