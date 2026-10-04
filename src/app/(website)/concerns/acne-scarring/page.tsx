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
} from "@/src/components/sections/concerns/acne-scarring";
import FAQSchema from "@/src/components/seo/FAQSchema";
import { faqData } from "@/src/components/sections/concerns/acne-scarring/FaqSection/FaqSection.data";
import { serviceHeroData } from "@/src/components/sections/concerns/acne-scarring/ServiceHero/ServiceHero.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: serviceHeroData.description,
};

export default function AcneScarringPage() {
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
      <ServiceFAQ />
      <Practitioners />
      <SuccessStories />
    </>
  );
}
