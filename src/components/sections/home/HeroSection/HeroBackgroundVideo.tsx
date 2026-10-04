"use client";
import { useEffect, useRef, useState } from "react";
import { preload } from "react-dom";
import { Pause, Play } from "lucide-react";

interface HeroBackgroundVideoProps {
  src: string;
  poster?: string;
}

export default function HeroBackgroundVideo({
  src,
  poster,
}: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | undefined>();

  // The poster is the first thing painted, so fetch it with top priority.
  if (poster) preload(poster, { as: "image", fetchPriority: "high" });

  // Start downloading the video only once the page itself has finished
  // loading, so it does not compete with the poster, fonts and scripts.
  useEffect(() => {
    if (document.readyState === "complete") {
      setVideoSrc(src);
      return;
    }
    const onLoad = () => setVideoSrc(src);
    window.addEventListener("load", onLoad, { once: true });
    return () => window.removeEventListener("load", onLoad);
  }, [src]);

  // Pause while scrolled out of view to save CPU/GPU and memory.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(([entry]) => {
      const video = videoRef.current;
      if (!video) return;
      if (entry.isIntersecting) {
        if (!userPausedRef.current) video.play().catch(() => {});
      } else {
        video.pause();
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      userPausedRef.current = false;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      userPausedRef.current = true;
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // @ts-expect-error -- fetchPriority is a valid DOM attribute (Priority Hints API) not yet in React's video element types
        fetchPriority="high"
        className="h-full w-full object-cover object-center"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {showControls && (
        <button
          type="button"
          onClick={toggleVideo}
          className="absolute right-8 bottom-8 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white transition hover:bg-white/40"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>
      )}
    </div>
  );
}
