import type { Metadata } from "next";
import CareersSection from "@/src/components/sections/careers/CareersSection";
import HeroSection from "@/src/components/sections/careers/HeroSection";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Join the WALDOR Clinic team. We're always looking for passionate, driven individuals to help us deliver excellence in aesthetics and skincare.",
};

export default function CareersPage() {
  return (
    <>
      <HeroSection />
      <CareersSection />
    </>
  );
}
