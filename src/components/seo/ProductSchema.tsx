import JsonLd from "./JsonLd";

interface ProductEntry {
  id: string;
  name: string;
  price: number;
  image: string;
  href: string;
  soldOut?: boolean;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://waldorclinic.com";

/** ItemList of Product structured data — reuses the existing products array. */
export default function ProductSchema({ products }: { products: ProductEntry[] }) {
  if (!products.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        image: product.image.startsWith("http")
          ? product.image
          : `${SITE_URL}${product.image}`,
        url: product.href.startsWith("http")
          ? product.href
          : `${SITE_URL}${product.href}`,
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "GBP",
          availability: product.soldOut
            ? "https://schema.org/OutOfStock"
            : "https://schema.org/InStock",
        },
      },
    })),
  };

  return <JsonLd data={data} />;
}
