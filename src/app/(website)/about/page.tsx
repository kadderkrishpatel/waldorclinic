import type { Metadata } from "next";
import {
  AboutHero,
  StorySection,
  CredentialsSection,
  ValuesSection,
  GoalQuoteSection,
  TeamCarouselSection,
} from "@/src/components/sections/about";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Meet the practitioners behind Waldor Clinic. Discover our story, values and commitment to safe, results-led aesthetic medicine in London.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <TeamCarouselSection />
      <CredentialsSection />
      <ValuesSection />
      <GoalQuoteSection />
    </>
  );
}
