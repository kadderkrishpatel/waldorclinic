"use client";
import { useEffect, useRef, useState } from "react";
import { signatureTreatmentData } from "./SignatureTreatmentSection.data";
import TreatmentItem from "./TreatmentItem";
import FloatingTreatmentImage from "./FloatingTreatmentImage";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import Button from "@/src/components/ui/Button";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";

export default function SignatureTreatmentSection() {
  const sectionRef = useSectionReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageTop, setImageTop] = useState(0);

  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeTreatment = signatureTreatmentData.treatments[activeIndex];

  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const updateImagePosition = (index: number) => {
    const row = rowRefs.current[index];
    if (!row) return;
    setImageTop(row.offsetTop + row.offsetHeight / 2);
  };

  useEffect(() => {
    updateImagePosition(0);

    const resize = () => updateImagePosition(activeIndexRef.current);
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#3D4844] rounded-[24px] lg:rounded-[40px] py-16 md:py-20 lg:py-[120px] lg:m-4 m-2"
    >
      <div className="mx-auto px-5 sm:px-6 lg:px-[60px]">
        {/* Header */}
        <div className="mb-10 md:mb-14 lg:mb-20 flex flex-col lg:flex-row lg:items-end gap-6 lg:justify-between">
          <div className="max-w-full lg:max-w-[80%] flex flex-col gap-6">
            <Eyebrow variant="secondary">
              {signatureTreatmentData.eyebrow}
            </Eyebrow>

            <Heading
              className="mt-4 lg:mt-5 text-[#BEC2C1] lg:text-[64px]"
              before={signatureTreatmentData.heading.before}
              highlight={signatureTreatmentData.heading.highlight}
            />
          </div>

          <div className="w-full lg:w-auto">
            <Button href={signatureTreatmentData.button.href} variant="gold">
              {signatureTreatmentData.button.label}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="hidden lg:block">
            <FloatingTreatmentImage
              image={activeTreatment.image}
              top={imageTop}
            />
          </div>

          <div className="border-t border-[#58605D]">
            {signatureTreatmentData.treatments.map((item, index) => (
              <TreatmentItem
                key={item.slug}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                item={item}
                active={activeIndex === index}
                onHover={() => {
                  setActiveIndex(index);
                  updateImagePosition(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
