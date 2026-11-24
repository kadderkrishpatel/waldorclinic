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
  posts: "69",
  followers: "6.1K",
  href: "https://www.instagram.com/waldorclinic",
};

export const socialPosts: SocialPost[] = [
  {
    id: "post-01",
    type: "image",
    image: `${asset("/assets/waldor/social/signature-post-01.jpg")}`,
    objectPosition: "15% center",
    alt: "Waldor treatment experience",
    href: "https://www.instagram.com/p/Ddb2X3cAh0c/?rpxt=M2c3bXh1emo1ZWw4",
  },
  {
    id: "post-05",
    type: "video",
    image: `${asset("/assets/waldor/social/postvid05.mp4")}`,
    alt: "Waldor skincare experience",
    href: "https://www.instagram.com/reel/De63SR1oX7r/?vrfl=MW5paDNqcDMzM2JiYQ%3D%3D",
  },
  {
    id: "post-06",
    type: "image",
    image: `${asset("/assets/waldor/social/post06.jpeg")}`,
    alt: "Waldor clinic experience",
    href: "https://www.instagram.com/p/DXr3dbXiHiZ/?dlrf=bzAxNDA5ZnZrcXo3",
  },
  {
    id: "post-02",
    type: "image",
    image: `${asset("/assets/waldor/social/post02.jpeg")}`,
    alt: "Waldor facial treatment",
    href: "https://www.instagram.com/p/DWWQM1iCFyY/?obrf=MXZsbGZtZzJ3eGxybQ%3D%3D",
  },
  {
    id: "post-03",
    type: "image",
    image: `${asset("/assets/waldor/social/post03.jpeg")}`,
    alt: "Waldor skincare treatment",
    href: "https://www.instagram.com/p/DVvkIoQCH9d/?img_index=2&xtok=MWF4dWNoeHV0ZnVxbg%3D%3D",
  },
  {
    id: "post-04",
    type: "image",
    image: `${asset("/assets/waldor/social/post04.jpeg")}`,
    alt: "Waldor treatment",
    href: "https://www.instagram.com/p/DUd4C-gCBnU/?obrf=MTJ2M3ZoYnY2eWl6dw%3D%3D",
  },
];
