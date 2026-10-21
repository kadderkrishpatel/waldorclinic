"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Header from "@/src/components/common/Header";
import { Footer } from "@/src/components";
import FloatingBookButton from "@/src/components/common/FloatingBookButton";
import { footerData } from "@/src/components/common/Footer/Footer.data";
import { FooterCTA } from "@/src/components/common/Footer/Footer.types";
import { homeFooterCTA } from "@/src/components/sections/home/FooterCTA.data";
import { contactFooterCTA as defaultFooterCTA } from "@/src/components/sections/contact/contactFooterCTA.data";
import { bodyTreatmentFooterCTA } from "@/src/components/sections/treatments/body-treatment/FooterCTA.data";
import { signatureTreatmentFooterCTA } from "@/src/components/sections/treatments/waldor-signature/FooterCTA.data";
import { injectableTreatmentFooterCTA } from "@/src/components/sections/treatments/injectables/FooterCTA.data";
import { hairTreatmentFooterCTA } from "@/src/components/sections/treatments/hair-growth/FooterCTA.data";
import { hydraGlassFooterCTA } from "@/src/components/sections/treatments/hydra-glass/FooterCTA.data";
import { acneScarringFooterCTA } from "@/src/components/sections/concerns/acne-scarring/FooterCTA.data";
import { acneFooterCTA } from "@/src/components/sections/concerns/acne/FooterCTA.data";
import { wrinklesFooterCTA } from "@/src/components/sections/concerns/wrinkles/FooterCTA.data";
import { dullSkinFooterCTA } from "@/src/components/sections/concerns/dull-skin/FooterCTA.data";
import { unevenSkinToneFooterCTA } from "@/src/components/sections/concerns/uneven-skin-tone/FooterCTA.data";
import { looseSkinFooterCTA } from "@/src/components/sections/concerns/loose-skin/FooterCTA.data";
import { prematureAgingFooterCTA } from "@/src/components/sections/concerns/premature-aging/FooterCTA.data";
import { productsFooterCTA } from "@/src/components/sections/products/FooterCTA.data";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const footerCTAByRoute: {
  match: string;
  exact?: boolean;
  cta: FooterCTA;
  bg: string;
}[] = [
  {
    match: "/",
    exact: true,
    cta: homeFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/contact-us",
    cta: defaultFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/treatments",
    cta: defaultFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/products",
    cta: productsFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/treatments/waldor-signature",
    cta: signatureTreatmentFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/treatments/body-treatment",
    cta: bodyTreatmentFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/treatments/injectables",
    cta: injectableTreatmentFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/treatments/hair-growth",
    cta: hairTreatmentFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/treatments/hydra-glass",
    cta: hydraGlassFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/acne",
    cta: acneFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/acne-scarring",
    cta: acneScarringFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/dull-skin",
    cta: dullSkinFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/wrinkles",
    cta: wrinklesFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/uneven-skin-tone",
    cta: unevenSkinToneFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/loose-skin",
    cta: looseSkinFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/concerns/premature-aging",
    cta: prematureAgingFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/doctors",
    cta: defaultFooterCTA,
    bg: "bg-black/30",
  },
  {
    match: "/blog",
    cta: defaultFooterCTA,
    bg: "bg-black/30",
  },
];

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  const pathname = usePathname();

  const route = useMemo(() => {
    return (
      footerCTAByRoute.find((item) => pathname === item.match) ?? {
        cta: defaultFooterCTA,
        bg: "bg-black/30",
      }
    );
  }, [pathname]);

  return (
    <>
      <Header bg={route.bg} />
      <main>{children}</main>
      <Footer {...footerData} cta={route.cta} />
      <FloatingBookButton />
    </>
  );
}
