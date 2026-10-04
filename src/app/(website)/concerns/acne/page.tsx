import {
  BeforeAfter,
  PatientSafety,
  Practitioners,
  ServiceFAQ,
  ServiceHero,
  SignatureTreatments,
  SuccessStories,
  TreatmentApproach,
  TreatmentBenefits,
  WhyChooseUs,
} from "@/src/components/sections/concerns/acne";
import FAQSchema from "@/src/components/seo/FAQSchema";
import { faqData } from "@/src/components/sections/concerns/acne/FaqSection/FaqSection.data";
import { serviceHeroData } from "@/src/components/sections/concerns/acne/ServiceHero/ServiceHero.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: serviceHeroData.description,
};

export default function AcnePage() {
  return (
    <>
      <FAQSchema items={faqData} />
      <ServiceHero />
      <SignatureTreatments />
      <PatientSafety />
      <TreatmentBenefits items="indications" />
      <WhyChooseUs />
      <BeforeAfter />
      <TreatmentApproach />
      <TreatmentBenefits items="preventions" />
      <SuccessStories />
      <ServiceFAQ />
      <Practitioners />
    </>
  );
}
