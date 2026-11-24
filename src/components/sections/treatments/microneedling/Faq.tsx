"use client";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Eyebrow, Heading } from "@/src/components/ui/Typography";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { microneedlingFaq } from "./Microneedling.data";

export default function Faq() {
  const sectionRef = useSectionReveal();
  const [openItem, setOpenItem] = useState<number>(
    microneedlingFaq.items[0]?.id ?? -1,
  );

  return (
    <section ref={sectionRef} className="m-2 lg:m-4 py-5">
      <div className="rounded-[40px] bg-[#3D4945] mx-auto px-6 pb-10 lg:px-[60px] lg:pt-[120px] pt-[80px]">
        <div className="mb-16">
          <Eyebrow variant="secondary">{microneedlingFaq.eyebrow}</Eyebrow>

          <Heading
            className="mt-5 text-[40px] text-[#E4E6E5] lg:text-[64px] lg:font-[300]"
            before={microneedlingFaq.headingBefore}
            highlight={microneedlingFaq.headingHighlight}
          />
        </div>

        <div className="divide-y divide-[#7E858266]">
          {microneedlingFaq.items.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <motion.div
                key={faq.id}
                data-reveal
                data-direction="left"
                layout
                transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
                className={clsx(
                  "overflow-hidden px-5 lg:px-8 transition-colors duration-300",
                  isOpen ? "bg-[#515D59]" : "bg-transparent",
                )}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenItem(isOpen ? -1 : faq.id)}
                  className="flex w-full items-center justify-between gap-4 py-6 lg:py-8 text-left"
                >
                  <h3 className="text-[18px] lg:text-[22px] text-[#C5A375]">
                    {faq.question}
                  </h3>

                  {isOpen ? (
                    <Minus size={28} className="shrink-0 text-[#C5A375]" />
                  ) : (
                    <Plus size={28} className="shrink-0 text-[#C5A375]" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 lg:pb-8 text-[15px] leading-7 text-[#E4E6E5] lg:max-w-[80%]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
