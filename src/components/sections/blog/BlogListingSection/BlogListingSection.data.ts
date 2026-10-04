import { asset } from "@/src/lib/assets";
import { Blog } from "./BlogListingSection.types";

export const blogCategories = [
  "All",
  "Acne",
  "Glass Skin",
  "Pigmentation",
  "Anti-Aging",
  "Hydration",
  "Press",
  
];

export const blogs: Blog[] = [
  {
    id: 1,
    slug: "what-actually-causes-adult-acneeee",
    title: "What actually causes adult acneee",
    subtitle: "and what doesn't.",
    category: "Acne",

    image: asset("/assets/waldor/blog/blog-1.jpg"),
    bannerImage: asset("/assets/waldor/blog/blog-1.jpg"),

    excerpt:
      "The common misconception that acne is only for teenagers is far from reality.",

    readTime: "8 MIN READ",

    author: "Dr. Elara Vance",

    authorImage: asset("/assets/waldor/blog/blog-1.jpg"),

    publishedAt: "March 14, 2026",

    content: `
      <p>
        The common misconception that acne is a problem confined to adolescence has left many adults feeling frustrated and confused.
        The reality is that adult-onset acne is increasingly common, particularly among women in their 30s and 40s.
      </p>

      <p>
        Understanding the physiological triggers—ranging from hormonal fluctuations and cortisol spikes to environmental pollutants—is the first step toward effective management.
        Unlike teenage breakouts, adult acne is often inflammatory and deep-seated, requiring a more nuanced, barrier-protective approach.
      </p>

      <blockquote>
        "Acne is not a failure of hygiene; it is a complex biological response to internal and external stressors."
      </blockquote>

      <h2>The Cortisol Connection</h2>

      <p>
        Stress-induced acne is a measurable clinical phenomenon.
        When we experience chronic stress, the body releases higher levels of cortisol, which signals the sebaceous glands to produce more oil.
      </p>

      <figure>
        <img src="${asset("/assets/waldor/blog/blog-1.jpg")}" alt="Acne Treatment" />
        <figcaption>
          Hydrated skin cells exhibit higher resilience against microbial triggers.
        </figcaption>
      </figure>

      <p>
        Rather than reaching for aggressive benzoyl peroxide washes of our youth,
        modern clinical treatments focus on high-potency retinoids balanced with ceramides and niacinamide.
      </p>
    `,
  },

  {
    id: 2,
    slug: "hydraglass-explained",

    title: "HydraGlass™ explained",
    subtitle: "What one session really does.",

    category: "Glass Skin",

    image: asset("/assets/waldor/blog/blog-2.jpg"),

    bannerImage: asset("/assets/waldor/blog/blog-2.jpg"),

    excerpt:
      "Everything you should know before your first HydraGlass™ treatment.",

    readTime: "5 MIN READ",

    author: "Dr. Elara Vance",

    authorImage: asset("/assets/waldor/blog/blog-2.jpg"),

    publishedAt: "April 2, 2026",

    content: `
      <p>
        HydraGlass™ is one of the most requested skin treatments today because it delivers immediate hydration and luminosity.
      </p>

      <h2>How does it work?</h2>

      <p>
        It combines deep cleansing, exfoliation and intensive hydration using medical-grade serums.
      </p>

      <blockquote>
        Healthy skin begins with a healthy skin barrier.
      </blockquote>

      <p>
        Results are visible immediately after treatment and continue to improve over the following days.
      </p>
    `,
  },

  {
    id: 3,
    slug: "treating-pigmentation-safely",

    title: "Treating uneven tone",
    subtitle: "Safely for every skin type.",

    category: "Pigmentation",

    image: asset("/assets/waldor/blog/blog-3.jpg"),

    bannerImage: asset("/assets/waldor/blog/blog-3.jpg"),

    excerpt: "Why personalised pigmentation treatment matters.",

    readTime: "6 MIN READ",

    author: "Dr. Elara Vance",

    authorImage: asset("/assets/waldor/blog/blog-3.jpg"),

    publishedAt: "May 8, 2026",

    content: `
      <p>
        Pigmentation concerns require careful diagnosis before selecting treatment.
      </p>

      <h2>Every skin tone is different</h2>

      <p>
        Melanin behaves differently across skin tones, which is why personalised care is essential.
      </p>

      <blockquote>
        Safe treatment is always more important than aggressive treatment.
      </blockquote>

      <p>
        Modern lasers and topical therapies allow excellent outcomes with minimal downtime.
      </p>
    `,
  },
];
