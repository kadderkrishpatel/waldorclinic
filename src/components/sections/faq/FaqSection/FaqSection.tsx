"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { faqData, FAQCategory } from "./FaqSection.data";
import { Description, Eyebrow, Heading } from "@/src/components/ui/Typography";
import { Button } from "@/src/components";

const filters: {
  label: string;
  value: FAQCategory;
}[] = [
  { label: "Treatments", value: "treatments" },
  { label: "Concerns", value: "concerns" },
  { label: "Clinic", value: "clinic" },
];

export default function FaqSection() {
  const pathname = usePathname();
  const router = useRouter();

  const getCategoryFromPath = (): FAQCategory => {
    if (pathname.includes("/concerns")) return "concerns";
    if (pathname.includes("/clinic")) return "clinic";

    return "treatments";
  };

  const [activeFilter, setActiveFilter] = useState<FAQCategory>(
    getCategoryFromPath(),
  );

  const [openItem, setOpenItem] = useState<number>(() => {
    const firstFaq = faqData.find(
      (faq) => faq.category === getCategoryFromPath(),
    );

    return firstFaq?.id ?? -1;
  });

  useEffect(() => {
    const category = getCategoryFromPath();

    setActiveFilter(category);

    const firstFaq = faqData.find((faq) => faq.category === category);

    setOpenItem(firstFaq?.id ?? -1);
  }, [pathname]);

  const eyebrowText =
    filters.find((filter) => filter.value === activeFilter)?.label ??
    "Treatments";

  const filteredFAQs = faqData;

  return (
    <section className="py-4">
      <div>
        {/* Filters */}
        <div className="mb-20 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              type="button"
              size="sm"
              variant="outline"
              onClick={() => router.push(`/faqs/${filter.value}`)}
              className={clsx(
                "!min-h-[48px] !px-6 !py-3 !tracking-[1.6px] transition-all duration-300",
                activeFilter === filter.value
                  ? "!border-[#28302D] !bg-[#28302D] !text-white hover:!bg-[#28302D]"
                  : "!border-[#9A7B4F80] !bg-transparent !text-[#28302D] hover:!bg-[#F3ECE3] hover:!border-[#9A7B4F80] hover:!text-[#28302D]",
              )}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Heading */}
        <div className="mb-16">
          <Eyebrow>{eyebrowText}</Eyebrow>

          <Heading
            className="mt-5 text-[48px] text-[#28302D] lg:text-[48px] lg:font-[300]"
            before={`About ${eyebrowText.toLowerCase()}`}
          />

          <Description className="mt-6 text-[17px] text-[#413627]">
            How plans are built, what to expect, and how we price them.
          </Description>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#3D484433]">
          {filteredFAQs.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <motion.div
                key={faq.id}
                layout
                transition={{
                  layout: {
                    duration: 0.35,
                    ease: "easeInOut",
                  },
                }}
                className={clsx(
                  "overflow-hidden px-8 transition-colors duration-300",
                  isOpen ? "bg-[#F3EDE3]" : "bg-transparent",
                )}
              >
                <button
                  onClick={() => setOpenItem(isOpen ? -1 : faq.id)}
                  className="flex w-full items-center justify-between py-8 text-left"
                >
                  <h3 className="text-[22px] text-[#28302D]">{faq.question}</h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {isOpen ? (
                      <Minus size={28} className="text-[#28302D]" />
                    ) : (
                      <Plus size={28} className="text-[#28302D]" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -8 }}
                        animate={{ y: 0 }}
                        exit={{ y: -8 }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="pb-8 pr-20"
                      >
                        <p className="whitespace-pre-line text-[15px] leading-7 text-[#C5A375]">
                          {faq.answer}
                        </p>
                      </motion.div>
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
