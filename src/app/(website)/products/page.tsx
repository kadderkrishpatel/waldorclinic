import type { Metadata } from "next";
import { ProductGrid, ShopCTA, ShopHero } from "@/src/components/sections/products";
import { TransformationSection } from "@/src/components/sections/home";
import ProductSchema from "@/src/components/seo/ProductSchema";
import { products } from "@/src/components/sections/products/ProductGrid/ProductGrid.data";

export const metadata: Metadata = {
  title: "WALDOR CLINIC",
  description:
    "Shop the HydraGlass™ skincare range from Waldor Clinic — clinically formulated serums, creams and treatment pads for radiant, healthy skin.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductSchema products={products} />
      <ShopHero />
      <ProductGrid />
      <section className="p-2 lg:p-4 overflow-hidden">
        <TransformationSection />
      </section>
      <ShopCTA />
    </>
  );
}
