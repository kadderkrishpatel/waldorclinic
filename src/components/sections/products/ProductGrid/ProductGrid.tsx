"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import ProductCard from "./ProductCard";
import ProductDetailsModal from "./ProductDetailsModal";
import { products, filterTabs, sortOptions } from "./ProductGrid.data";
import type { Product, ProductFilter, SortOption } from "./ProductGrid.types";
import { cn } from "@/src/lib/utils";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function ProductGrid() {
  const sectionRef = useSectionReveal("products");
  const pathname = usePathname();
  const activeCategory: ProductFilter = pathname.endsWith("/skin-care")
    ? "skin-care"
    : pathname.endsWith("/merch")
      ? "merch"
      : "all";
  const setActiveCategory = (category: ProductFilter) => {
    const path = category === "all" ? "/products" : `/products/${category}`;
    if (path !== pathname) window.history.pushState(null, "", path);
  };
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = useMemo(() => {
    const list =
      activeCategory === "all"
        ? [...products]
        : products.filter((product) => product.category === activeCategory);

    switch (sortBy) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "name-asc":
        return list.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return list;
    }
  }, [activeCategory, sortBy]);

  const activeSortLabel =
    sortOptions.find((option) => option.value === sortBy)?.label ?? "Featured";

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1440px] px-5 pb-16 lg:px-[60px] lg:pb-24"
    >
      {/* Filter bar */}
      <div
        data-reveal
        data-direction="up"
        className="flex flex-col gap-4 border-y border-[#ECE0D1]/10 py-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => (
            <div
              key={tab.value}
              role="button"
              tabIndex={0}
              onClick={() => setActiveCategory(tab.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveCategory(tab.value);
                }
              }}
              className={cn(
                "cursor-pointer select-none rounded-full border px-4 py-2 font-hanken text-xs font-semibold tracking-[0.08em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[#C6A26D]",
                activeCategory === tab.value
                  ? "border-[#C5A375] bg-[#C5A375] text-[#1F2422]"
                  : "border-white/25 bg-transparent text-[#9EA3A1] hover:text-[#ECE0D1]",
              )}
            >
              {tab.label}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <span className="rounded-full border border-white/25 px-4 py-2 font-hanken text-xs tracking-[0.08em] text-[#9EA3A1]">
            {filtered.length} items
          </span>

          <div className="relative" ref={sortRef}>
            <button
              type="button"
              onClick={() => setSortOpen((prev) => !prev)}
              className="appearance-none flex items-center gap-2 rounded-full border border-white/25 bg-transparent py-2 pl-4 pr-3 font-hanken text-xs tracking-[0.08em] text-[#ECE0D1] focus:outline-none"
            >
              <span>Sort: {activeSortLabel}</span>

              <FiChevronDown
                size={14}
                className={cn(
                  "text-[#9EA3A1] transition-transform duration-300",
                  sortOpen && "rotate-180",
                )}
              />
            </button>

            {sortOpen && (
              <div className="absolute right-0 top-full z-20 mt-2 w-48 overflow-hidden rounded-[16px] border border-white/10 bg-[#1F2422] shadow-lg">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSortBy(option.value);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "appearance-none block w-full border-0 px-4 py-2.5 text-left font-hanken text-xs transition-colors duration-200",
                      sortBy === option.value
                        ? "bg-[#C5A375]/15 text-[#C5A375]"
                        : "bg-transparent text-[#ECE0D1]/80 hover:bg-white/5",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenDetails={setSelectedProduct}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center font-hanken text-sm text-[#9EA3A1]">
          No products in this category yet.
        </p>
      )}

      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
