import type { Metadata } from "next";
import DoctorGridSection from "@/src/components/sections/home/DoctorSection/DoctorGridSection";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Meet the aestheticians and medical practitioners behind Waldor Clinic — the specialists who deliver every treatment and consultation.",
};

export default function DoctorsPage() {
  return (
    <section className="p-2 lg:p-4 overflow-hidden">
      <DoctorGridSection headingAs="h1" />
    </section>
  );
}
