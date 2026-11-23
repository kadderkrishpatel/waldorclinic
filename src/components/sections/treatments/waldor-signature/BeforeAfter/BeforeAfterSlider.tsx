"use client";
import CompareSlider from "./CompareSlider";

interface Props {
  beforeImage: string;
  afterImage: string;
  objectPosition?: string;
  stacked?: boolean;
}

export default function BeforeAfterSlider(props: Props) {
  return <CompareSlider {...props} />;
}
