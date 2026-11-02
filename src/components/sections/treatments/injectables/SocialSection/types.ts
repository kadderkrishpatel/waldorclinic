export type SocialPostType = "image" | "video";

export interface SocialPost {
  id: string;
  type: SocialPostType;
  image: string;
  thumbnail?: string;
  alt?: string;
  /** CSS object-position, to keep the important part of an image visible when cropped. */
  objectPosition?: string;
  href?: string;
}

export interface SocialProfile {
  name: string;
  handle: string;
  avatar: string;
  posts: string;
  followers: string;
  href: string;
}
