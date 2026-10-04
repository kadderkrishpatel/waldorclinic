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
} from "@/src/components/sections/concerns/wrinkles";
import FAQSchema from "@/src/components/seo/FAQSchema";
import { faqData } from "@/src/components/sections/concerns/wrinkles/FaqSection/FaqSection.data";
import { serviceHeroData } from "@/src/components/sections/concerns/wrinkles/ServiceHero/ServiceHero.data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description: serviceHeroData.description,
};

export default function WrinklesPage() {
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
