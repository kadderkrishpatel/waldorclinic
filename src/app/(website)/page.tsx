import type { Metadata } from "next";
import dynamic from "next/dynamic";
import {
  HeroSection,
  AboutSection,
} from "@/src/components/sections/home";
// Everything below the hero is split into its own chunks (still server-rendered
// for SEO), so the hero becomes interactive without waiting for their JS.
const TreatmentSection = dynamic(
  () => import("@/src/components/sections/home/TreatmentSection"),
);
const WhyChooseUsSection = dynamic(
  () => import("@/src/components/sections/home/WhyChooseUsSection"),
);
const ExperienceSection = dynamic(
  () => import("@/src/components/sections/home/ExperienceSection"),
);
const SuccessStoriesSection = dynamic(
  () => import("@/src/components/sections/home/SuccessStoriesSection"),
);
const SignatureTreatmentSection = dynamic(
  () => import("@/src/components/sections/home/SignatureTreatmentSection"),
);
const HowItWorksSection = dynamic(
  () => import("@/src/components/sections/home/HowItWorksSection"),
);

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Bespoke skin, hair and longevity treatments in London, backed by AI-led diagnostics and expert aesthetic medicine. Book your personalised consultation at Waldor Clinic.",
};

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <section className="p-2 lg:p-4 overflow-hidden">
        <TreatmentSection />
      </section>
      <section className="relative overflow-hidden rounded-[24px] lg:rounded-[40px] bg-[#EBE0D1] m-2 lg:m-4">
        <WhyChooseUsSection />
        <ExperienceSection />
      </section>
      <section
        id="success-stories"
        className="relative scroll-mt-24 overflow-hidden rounded-[24px] lg:scroll-mt-32 lg:rounded-[40px] bg-[#3D4844] m-2 lg:m-4"
      >
        <SuccessStoriesSection />
      </section>
      <SignatureTreatmentSection />
      <section className="p-2 lg:p-4 overflow-hidden">
        <HowItWorksSection />
      </section>
    </>
  );
}
