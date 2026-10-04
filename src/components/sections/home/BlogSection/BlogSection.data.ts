import { asset } from "@/src/lib/assets";
import { BlogSectionProps } from "./BlogSection.types";

export const blogSectionData: BlogSectionProps = {
  eyebrow: "OUR BLOGS",
  heading: {
    before: "An Archive of",
    highlight: "Insights and Aesthetics",
  },
  button: {
    label: "View All",
    href: "/blog",
  },
  posts: [
    {
      id: 1,
      title: "What actually causes adult acne and what doesn't",
      category: "ACNE",
      readTime: "5 MIN READ",
      image: asset("/assets/waldor/blog/blog-1.jpg"),
      slug: "what-actually-causes-adult-acne",
    },
    {
      id: 2,
      title: "HydraGlass™ explained: what one session does",
      category: "GLASS SKIN",
      readTime: "5 MIN READ",
      image: asset("/assets/waldor/blog/blog-2.jpg"),
      slug: "hydraglass-explained",
    },
    {
      id: 3,
      title: "Treating uneven tone in skin of colour safely",
      category: "PIGMENTATION",
      readTime: "5 MIN READ",
      image: asset("/assets/waldor/blog/blog-3.jpg"),
      slug: "treating-pigmentation-safely",
    },
  ],
};
