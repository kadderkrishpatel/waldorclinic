import type { Metadata } from "next";
import ContactSection from "@/src/components/sections/contact/ContactSection";
import HeroSection from "@/src/components/sections/contact/HeroSection";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Get in touch with Waldor Clinic at 35 Great Portland Street, London. Call, email or book your consultation online today.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactSection />
    </>
  );
}
