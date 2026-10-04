import { asset } from "@/src/lib/assets";

export interface Story {
  id: number;
  number: string;
  title: string;
  beforeHeadingParagraph: string[];
  before?: string;
  highlight?: string;
  paragraphs: string[];
  image?: string;
  quote?: {
    title: string;
    description: string;
    author?: string;
    role?: string;
  };
}

export const stories: Story[] = [
  {
    id: 1,
    number: "01",
    beforeHeadingParagraph: [
      "I've worked in aesthetics for almost 17 years. Over that time, I've travelled extensively through South Korea and Japan, studying the technologies, ingredients and philosophies that have made them global leaders in skin health.",
      "The more I learnt, the more I realised something.",
    ],
    title: "The Beginning",
    before: "Technology alone doesn't create great results.",
    highlight: "People do.",
    image: asset("/assets/waldor/about/about-hero.jpg"),
    paragraphs: [
      "You can have the best machines in the world, but if you don't understand the person sitting in front of you, you're simply treating skin. You're not treating the individual.",
      "That's why I built WALDOR. I wanted to create a place where every person is treated differently because every person is different.",
      "Before recommending a facial treatment, we begin with an AI skin analysis that builds a 4D model of the face. It allows us to assess different layers of the skin, looking at hydration, oil production, collagen, elastin, pigmentation, sun damage and much more. From there, we build a treatment plan that's unique to that individual, combining the technologies we believe will benefit them most.",
      "The same philosophy applies throughout the clinic. If someone comes to us for body treatments, we begin with a consultation before recommending the right technology. If someone visits one of our doctors, every injectable treatment starts with a medical consultation. If someone is concerned about hair loss, we begin with an AI scalp analysis before recommending a treatment.",
      "I've never believed in one-size-fits-all treatments. People deserve better than that.",
    ],
  },

  {
    id: 2,
    number: "02",
    beforeHeadingParagraph: [
      "One thing you'll notice if you visit WALDOR is that it doesn't feel like a typical clinic. That was intentional.",
      "I designed every part of the space myself. Every colour. Every material. Every piece of furniture. Every wallpaper. Even our chandelier. Everything had a reason. Everything tells one story. Everything inside WALDOR is me.",
    ],
    title: "The Space & The People",
    before: "But WALDOR has never been about me.",
    highlight: "It's about the people around me.",
    image: asset("/assets/waldor/about/story-2.jpg"),
    paragraphs: [
      "The people I work with aren't just colleagues. They're my WALDOR family. They're driven. They're attentive. They're caring. They're special. Most importantly, they genuinely care about people.",
    ],
    quote: {
      title: "“Technology can be taught. Kindness can’t.”",
      description:
        "That's why I believe the people behind the treatments matter just as much as the treatments themselves.",
    },
  },

  {
    id: 3,
    number: "03",
    title: "Restoration",
    beforeHeadingParagraph: [
      "Over the past few years, my curiosity has taken me somewhere I never expected.",
    ],
    before: "",
    highlight: "Longevity.",
    image: "",
    paragraphs: [
      "I've spent time in Okinawa and Sardinia, two of the world's recognised Blue Zones, learning from communities where people regularly live healthy lives into their nineties and beyond.",
      "What surprised me most wasn't the food. It wasn't one miracle ingredient. It was the way they lived. They stayed active. They stayed together. They laughed. They slowed down. They looked after themselves and each other.",
      "It reminded me that healthy skin doesn't start with skincare. It starts with the way we live. The way we eat. The way we sleep. The way we move. The way we manage stress.",
      "That's become the future of WALDOR.",
      "Yes, we'll continue bringing the latest technologies from South Korea and Japan. Yes, we'll continue developing advanced skincare. But I also want WALDOR to become a place that helps people build healthier lives, not just healthier skin.",
    ],
  },

  {
    id: 4,
    number: "04",
    title: "Natural Results",
    beforeHeadingParagraph: [],
    before: "",
    highlight: "",
    image: "",
    paragraphs: [
      "One thing I refuse to compromise on is natural results.",
      "I never want someone to walk out of WALDOR looking like somebody else. We're all beautiful in our own way. My job isn't to change who you are. It's to help you become a better version of yourself.",
      "Healthy skin is your body's largest organ. When your skin is healthy, you often feel better. When you feel better, you naturally become more confident.",
      "And that's what I've realised after almost two decades in this industry.",
    ],
    quote: {
      title:
        "We don’t believe beautiful skin changes your life. We believe confidence does.",
      description:
        "If we can help someone feel more confident in their own skin, then we've done our job.",
      author: "Dor Bukobza",
      role: "Founder, WALDOR Clinic",
    },
  },
];
