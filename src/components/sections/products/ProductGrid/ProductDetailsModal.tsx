"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import type { Product } from "./ProductGrid.types";
import {
  DEFAULT_SHIPPING_TEXT,
  DEFAULT_MANUFACTURING_TEXT,
  DEFAULT_CERTIFICATIONS,
} from "./ProductDetails.shared";

interface Props {
  product: Product | null;
  onClose: () => void;
}

const formatPrice = (price: number) => `£${price.toFixed(2)}`;

const CATEGORY_LABEL: Record<Product["category"], string> = {
  "skin-care": "SKIN CARE",
  merch: "MERCH",
};

export default function ProductDetailsModal({ product, onClose }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  const [slideIn, setSlideIn] = useState(false);

  const isOpen = Boolean(product);

  useEffect(() => {
    setActiveImage(0);
  }, [product?.id]);

  useEffect(() => {
    if (!isOpen) {
      setSlideIn(false);
      return;
    }

    // Mount off-screen first, then slide in on the next frame.
    const id = requestAnimationFrame(() => setSlideIn(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!product) return null;

  const gallery = [product.image, product.secondImage].filter(
    (src): src is string => Boolean(src),
  );

  const shippingText = product.shippingText ?? DEFAULT_SHIPPING_TEXT;
  const manufacturingText =
    product.manufacturingText ?? DEFAULT_MANUFACTURING_TEXT;
  const certifications = product.certifications ?? DEFAULT_CERTIFICATIONS;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={`fixed right-0 top-0 flex h-full w-full flex-col overflow-hidden bg-[#1F2422] shadow-[-20px_0_60px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-out sm:w-[440px] sm:rounded-l-[24px] lg:w-[500px] ${
          slideIn ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-6 sm:px-8">
          <span className="font-hanken text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
            Product Details
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#9EA3A1] transition-colors hover:bg-white/5 hover:text-[#ECE0D1]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="scrollbar-hide flex-1 overflow-y-auto px-5 pb-6 pt-4 sm:px-8">
          {/* Main image */}
          <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-[#E4D9C6]">
            <Image
              src={gallery[activeImage] ?? product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, 500px"
              className="object-cover"
            />
          </div>

          {/* Thumbnails */}
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-3">
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-[10px] border-2 transition-colors ${
                    activeImage === index
                      ? "border-[#C5A375]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Eyebrow */}
          <p className="mt-6 font-hanken text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
            {CATEGORY_LABEL[product.category]} · WALDOR
          </p>

          {/* Title */}
          <h2 className="mt-2 font-fraunces text-[26px] leading-snug text-[#ECE0D1]">
            {product.name}
          </h2>

          {/* Price row */}
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="font-fraunces text-xl text-[#C5A375]">
              {formatPrice(product.price)}
            </span>

            {product.variantLabel && (
              <span className="rounded-full border border-[#3D4844] px-3 py-1 font-hanken text-xs text-[#9EA3A1]">
                {product.variantLabel}
              </span>
            )}
          </div>

          {/* Description */}
          {product.description && product.description.length > 0 && (
            <div className="mt-5 flex flex-col gap-3">
              {product.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-hanken text-[14.5px] leading-[1.7] text-[#BEC2C1]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Key Benefits */}
          {product.keyBenefits && product.keyBenefits.length > 0 && (
            <>
              <div className="my-6 h-px w-full bg-[#3D4844]" />

              <p className="font-hanken text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
                Key Benefits
              </p>

              <ul className="mt-3 flex flex-col gap-2.5">
                {product.keyBenefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-2.5 font-hanken text-[14px] text-[#ECE0D1]"
                  >
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-[#C5A375]"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="my-6 h-px w-full bg-[#3D4844]" />

          {/* Shipping */}
          <p className="font-hanken text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
            Shipping
          </p>
          <p className="mt-2 font-hanken text-[13.5px] leading-[1.7] text-[#9EA3A1]">
            {shippingText}
          </p>

          {/* Manufacturing */}
          <p className="mt-5 font-hanken text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C5A375]">
            Manufacturing
          </p>
          <p className="mt-2 font-hanken text-[13.5px] leading-[1.7] text-[#9EA3A1]">
            {manufacturingText}
          </p>

          {/* Certifications */}
          {certifications.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-[#3D4844] px-3 py-1.5 font-hanken text-[11px] text-[#9EA3A1]"
                >
                  {cert}
                </span>
              ))}
            </div>
          )}

          {/* Usage note */}
          {product.usageNote && (
            <p className="mt-4 font-hanken text-[12px] leading-[1.6] text-[#7D8582]">
              {product.usageNote}
            </p>
          )}
        </div>

        {/* Sticky footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#3D4844] bg-[#1F2422] px-5 py-5 sm:px-8">
          <div>
            <p className="font-fraunces text-lg text-[#ECE0D1]">
              {formatPrice(product.price)}
            </p>
            <p className="font-hanken text-[11px] text-[#7D8582]">
              {product.soldOut
                ? "Currently sold out"
                : "Sold & shipped by WALDOR.skin"}
            </p>
          </div>

          <a
            href={product.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 rounded-full bg-[#C5A375] px-6 py-3 font-hanken text-xs font-bold uppercase tracking-[0.08em] text-[#1F2422] transition-colors hover:bg-[#D5B98D]"
          >
            {product.soldOut ? "View on WALDOR.skin" : "Buy Now on WALDOR.skin"}
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
