import { asset } from "@/src/lib/assets";
import { FooterDataProps } from "./Footer.types";

export const footerData: FooterDataProps = {
  footerImg: asset("/assets/waldor/decorations/footer.png"),
  footerRightImg: asset("/assets/waldor/decorations/footer-top-right.png"),
  footerLeftImg: asset("/assets/waldor/decorations/footer-left.png"),
  columns: [
    {
      title: "TREATMENTS",
      links: [
        {
          label: "Waldor Signature",
          href: "/treatments/waldor-signature",
        },
        {
          label: "Skin",
          href: "/treatments/hydra-glass",
        },
        {
          label: "Face",
          href: "/treatments/waldor-signature",
        },
        {
          label: "Body",
          href: "/treatments/body-treatment",
        },
        {
          label: "Hair",
          href: "/treatments/hair-growth",
        },
        {
          label: "Injectables Consultation",
          href: "/treatments/injectables",
        },
      ],
    },
    {
      title: "CONCERNS",
      links: [
        {
          label: "Acne",
          href: "/concerns/acne",
        },
        {
          label: "Acne Scarring",
          href: "/concerns/acne-scarring",
        },
        {
          label: "Dull Skin",
          href: "/concerns/dull-skin",
        },
        {
          label: "Fine Lines & Wrinkles",
          href: "/concerns/wrinkles",
        },
        {
          label: "Uneven Skin Tone",
          href: "/concerns/uneven-skin-tone",
        },
        {
          label: "Sagging & Loose Skin",
          href: "/concerns/loose-skin",
        },
        {
          label: "Premature Aging",
          href: "/concerns/premature-aging",
        },
      ],
    },
    {
      title: "CLINIC",
      links: [
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Products",
          href: "/products",
        },
        {
          label: "Doctors",
          href: "/doctors",
        },
        {
          label: "Blog",
          href: "/blog",
        },
        {
          label: "Contact Us",
          href: "/contact",
        },
        {
          label: "FAQ",
          href: "/faq",
        },
        {
          label: "Careers",
          href: "/careers",
        },
        {
          label: "Book a Consultation",
          href: "/contact",
        },
      ],
    },
  ],
  contact: {
    phone: "07464 745 114",
    email: "info@waldorclinic.com",
    address: "35 Great Portland Street London W1W 8QQ",
    timings: ["Mon - Sat: 10am - 6pm", "Sunday: Opening Soon"],
  },
  socialLinks: [
    {
      name: "Instagram",
      icon: asset("/assets/waldor/social/insta-icon.png"),
      href: "https://www.instagram.com/waldorclinic",
    },
    {
      name: "Facebook",
      icon: asset("/assets/waldor/social/fb-icon.png"),
      href: "https://www.facebook.com/waldorclinic",
    },
  ],
};
