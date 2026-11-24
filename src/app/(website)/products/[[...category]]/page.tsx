import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  BeforeAfter,
  ProductGrid,
  ProductLogoSlider,
  ShopCTA,
  ShopHero,
} from "@/src/components/sections/products";
import ProductSchema from "@/src/components/seo/ProductSchema";
import { products } from "@/src/components/sections/products/ProductGrid/ProductGrid.data";

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  "": {
    title: "Shop | WALDOR CLINIC",
    description:
      "Shop WALDOR skincare and merchandise — clinically formulated serums, treatment pads and signature caps from Waldor Clinic.",
  },
  "skin-care": {
    title: "Skin Care | WALDOR CLINIC",
    description:
      "Shop the HydraGlass™ skincare range from Waldor Clinic — clinically formulated serums, creams and treatment pads for radiant, healthy skin.",
  },
  merch: {
    title: "Merch | WALDOR CLINIC",
    description:
      "Shop WALDOR signature caps and merchandise — embroidered, minimal and timeless.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category?: string[] }>;
}): Promise<Metadata> {
  const { category } = await params;
  const slug = category?.[0] ?? "";
  return {
    ...CATEGORY_META[slug],
    alternates: { canonical: slug ? `/products/${slug}` : "/products" },
  };
}

const CATEGORY_SLUGS = ["skin-care", "merch"];

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ category: [] }, ...CATEGORY_SLUGS.map((slug) => ({ category: [slug] }))];
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ category?: string[] }>;
}) {
  const { category } = await params;
  if (category && (category.length > 1 || !CATEGORY_SLUGS.includes(category[0]))) {
    notFound();
  }

  return (
    <>
      <ProductSchema
        products={category ? products.filter((p) => p.category === category[0]) : products}
      />
      <ShopHero />
      <ProductGrid />
      <ProductLogoSlider />
      <BeforeAfter />
      <ShopCTA />
    </>
  );
}
