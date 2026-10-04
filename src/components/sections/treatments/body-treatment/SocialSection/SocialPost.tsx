"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import type { SocialPost as SocialPostType } from "./types";
import { asset } from "@/src/lib/assets";
import useInViewOnce from "@/src/components/hooks/useInViewOnce";

interface Props {
  post: SocialPostType;
}

export default function SocialPost({ post }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInViewOnce(videoRef);

  useEffect(() => {
    if (post.type !== "video" || !videoRef.current) {
      return;
    }

    const video = videoRef.current;

    video.muted = true;

    const playVideo = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay can be blocked by the browser.
      }
    };

    playVideo();

    return () => {
      video.pause();
    };
  }, [post.type, post.image]);

  return (
    <Link
      href={post.href ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        block
        h-[250px]
        w-[180px]
        shrink-0
        overflow-hidden
        rounded-[6px]

        sm:h-[350px]
        sm:w-[180px]

        md:h-[350px]
        md:w-[180px]

        lg:h-[450px]
        lg:w-[250px]
      "
    >
      {/* =========================
          IMAGE
      ========================= */}
      {post.type === "image" && (
        <Image
          src={post.image}
          alt={post.alt ?? ""}
          fill
          sizes="
            (max-width: 639px) 350px,
            (max-width: 767px) 350px,
            (max-width: 1023px) 450px,
            (max-width: 1279px) 450px,
            200px
          "
          className="
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />
      )}

      {/* =========================
          VIDEO
      ========================= */}
      {post.type === "video" && (
        <video
          ref={videoRef}
          src={inView ? post.image : undefined}
          poster={post.thumbnail}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          aria-label={post.alt ?? "Social media video"}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-105
          "
        />
      )}

      {/* =========================
          TOP RIGHT ICONS
      ========================= */}
      <div
        className="
          absolute
          right-2
          top-2
          z-20
          flex
          items-center
          gap-1.5

          sm:right-2.5
          sm:top-2.5
          sm:gap-2
        "
      >
        {/* Video Indicator */}
        {post.type === "video" && (
          <div
            className="
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-[4px]
              bg-black/40
              p-1
              backdrop-blur-sm

              sm:h-7
              sm:w-7
            "
          >
            <Image
              src={asset("/assets/waldor/icons/video-badge.png")}
              alt="videoBadge"
              width={24}
              height={24}
              className="
                h-full
                w-full
                object-contain
                opacity-80
                transition-opacity
                duration-300
                group-hover:opacity-100
                "
            />
          </div>
        )}

        {post.type === "image" && (
          <>
            {/* Instagram Icon */}
            <div
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-[4px]
                bg-black/40
                p-1
                backdrop-blur-sm

                sm:h-7
                sm:w-7
            "
            >
              <Image
                src={asset("/assets/waldor/icons/images-badge.png")}
                alt="imageBadge"
                width={24}
                height={24}
                className="
                h-full
                w-full
                object-contain
                opacity-80
                transition-opacity
                duration-300
                group-hover:opacity-100
                "
              />
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
