import type { Metadata } from "next";
import "./globals.css";
import { Hanken_Grotesk, Fraunces } from "next/font/google";
import AppProviders from "@/src/providers/AppProviders";
import { Toaster } from "sonner";
import LocalBusinessSchema from "@/src/components/seo/LocalBusinessSchema";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "WALDOR CLINIC",
  description: "Luxury Skin, Hair and Longevity Clinic",
  applicationName: "WALDOR CLINIC",
  openGraph: {
    siteName: "WALDOR CLINIC",
    type: "website",
  },
};

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-hanken",
});

// FIX: Removed weight and style arrays so Next.js treats it as a Variable Font
const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "WONK"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${fraunces.variable}`}
    >
      <body className="max-w-[1920px] mx-auto ">
        <LocalBusinessSchema />

        <Toaster
          position="top-center"
          richColors
          expand={false}
          closeButton
          duration={4000}
        />

        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
