"use client";

import { useEffect, useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import { optimizedSrc, optimizedSrcSet } from "@/src/lib/optimizedImage";

interface Props {
  beforeImage: string;
  afterImage: string;
  swiper: any;
}

export default function CompareSlider({
  beforeImage,
  afterImage,
  swiper,
}: Props) {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setMobile(window.innerWidth < 768);
    };

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const disableSwiper = () => {
    if (swiper.current) {
      swiper.current.allowTouchMove = false;
    }
  };

  const enableSwiper = () => {
    if (swiper.current) {
      swiper.current.allowTouchMove = true;
    }
  };

  return (
    <div
      className="relative h-full w-full"
      onPointerDown={disableSwiper}
      onPointerUp={enableSwiper}
      onPointerLeave={enableSwiper}
      onTouchStart={disableSwiper}
      onTouchEnd={enableSwiper}
    >
      <ReactCompareSlider
        defaultValue={50}
        className="h-[650px]"
        style={{
          width: "100%",
          height: "100%",
        }}
        itemOne={
          <ReactCompareSliderImage
            src={optimizedSrc(beforeImage)}
            srcSet={optimizedSrcSet(beforeImage)}
            sizes="(max-width: 768px) 100vw, 650px"
            loading="lazy"
            decoding="async"
            alt="Before"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "100%",
              aspectRatio: "1/1",
            }}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={optimizedSrc(afterImage)}
            srcSet={optimizedSrcSet(afterImage)}
            sizes="(max-width: 768px) 100vw, 650px"
            loading="lazy"
            decoding="async"
            alt="After"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        }
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              width: mobile ? 42 : 56,
              height: mobile ? 42 : 56,
              borderRadius: 999,
              background: "#C6A26D",
              border: "2px solid #C6A26D",
              color: "#C6A26D",
              boxShadow: "0 10px 30px rgba(0,0,0,.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            linesStyle={{
              background: "#C6A26D",
              width: mobile ? "1px" : "2px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: mobile ? 2 : 4,
                fontSize: mobile ? 14 : 18,
                fontWeight: 600,
                color: "#C6A26D",
              }}
            >
              <span>{"<"}</span>
              <span>{">"}</span>
            </div>
          </ReactCompareSliderHandle>
        }
      />
    </div>
  );
}
