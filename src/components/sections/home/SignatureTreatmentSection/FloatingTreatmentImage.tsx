"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface FloatingTreatmentImageProps {
  image: string;
  top: number;
}

export default function FloatingTreatmentImage({
  image,
  top,
}: FloatingTreatmentImageProps) {
  return (
    <motion.div
      animate={{
        top,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transform: "translateY(-50%)" }}
      className="pointer-events-none absolute right-4 z-30 w-[150px] h-[172px] xl:right-[50px] xl:w-[190px] xl:h-[218px] 2xl:right-[85px] 2xl:w-[227px] 2xl:h-[261px]"
    >
      {/* Background Panel */}
      <div className="absolute -left-14 top-1/2 h-[210px] w-[310px] -translate-y-1/2 rounded-[32px]" />

      {/* Image */}
      <div className="relative flex h-full w-full items-end overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,.25)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.35,
            }}
            className="absolute inset-0"
          >
            {image?.endsWith(".mp4") ? (
              <video
                src={image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
