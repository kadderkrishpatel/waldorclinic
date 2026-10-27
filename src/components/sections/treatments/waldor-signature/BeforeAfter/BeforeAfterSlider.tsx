"use client";
import dynamic from "next/dynamic";

const CompareSlider = dynamic(() => import("./CompareSlider"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-[32px] bg-[#E8DFD3]" />
  ),
});

interface Props {
  beforeImage: string;
  afterImage: string;
  objectPosition?: string;
  swiper: any;
}

export default function BeforeAfterSlider(props: Props) {
  return <CompareSlider {...props} />;
}
