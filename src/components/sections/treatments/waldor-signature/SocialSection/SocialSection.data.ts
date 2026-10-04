import { asset } from "@/src/lib/assets";
import type { SocialPost, SocialProfile } from "./types";

export const socialSectionData = {
  eyebrow: "EXPERIENCE WALDOR",
  heading: {
    before: "Let’s",
    highlight: "Socialise",
  },
  description:
    "Follow our journey and experience the world of WALDOR through expert skincare insights, inspiring treatment transformations and exclusive behind-the-scenes moments.",
};

export const socialProfile: SocialProfile = {
  name: "WALDOR Clinic",
  handle: "@waldor.clinic",
  avatar: `${asset("/assets/waldor/team/waldor-profile.jpg")}`,
  posts: "100",
  followers: "5K",
  href: "https://www.instagram.com/waldorclinic",
};

export const socialPosts: SocialPost[] = [
  {
    id: "post-01",
    type: "image",
    image: `${asset("/assets/waldor/social/post-01.jpg")}`,
    alt: "Waldor treatment experience",
    href: "https://www.instagram.com/waldorclinic",
  },
  {
    id: "post-02",
    type: "image",
    image: `${asset("/assets/waldor/social/post-02.jpg")}`,
    alt: "Waldor facial treatment",
    href: "https://www.instagram.com/waldorclinic",
  },
  {
    id: "post-03",
    type: "video",
    image: `${asset("/assets/waldor/videos/post-03.mp4")}`,
    alt: "Waldor skincare treatment",
    href: "https://www.instagram.com/waldorclinic",
  },
  {
    id: "post-04",
    type: "image",
    image: `${asset("/assets/waldor/social/post-04.jpg")}`,
    alt: "Waldor treatment",
    href: "https://www.instagram.com/waldorclinic",
  },
  {
    id: "post-05",
    type: "image",
    image: `${asset("/assets/waldor/social/post-05.jpg")}`,
    alt: "Waldor skincare experience",
    href: "https://www.instagram.com/waldorclinic",
  },
  {
    id: "post-06",
    type: "image",
    image: `${asset("/assets/waldor/social/post-06.jpg")}`,
    alt: "Waldor clinic experience",
    href: "https://www.instagram.com/waldorclinic",
  },
];
