import type { Metadata } from "next";
import FaqSection from "@/src/components/sections/faq/FaqSection";
import HeroSection from "@/src/components/sections/faq/HeroSection";
import FAQSchema from "@/src/components/seo/FAQSchema";
import { faqData } from "@/src/components/sections/faq/FaqSection/FaqSection.data";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Answers to common questions about treatments, consultations, safety and aftercare at Waldor Clinic, London's luxury skin, hair and longevity clinic.",
};

export default function FaqPage() {
  return (
    <section className="relative bg-[#EBE0D1] rounded-[40px] py-16 md:py-20 lg:py-[40px] m-2 lg:m-4 overflow-hidden">
      <FAQSchema items={faqData} />
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px]">
        <HeroSection />
        <FaqSection />
      </div>
    </section>
  );
}
