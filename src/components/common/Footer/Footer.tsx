"use client";
import Link from "next/link";
import Button from "@/src/components/ui/Button";
import { Heading } from "@/src/components/ui/Typography";
import { footerData } from "./Footer.data";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import Image from "next/image";
import { FooterProps } from "./Footer.types";
import useSectionReveal from "@/src/components/hooks/useSectionReveal";
import { cn } from "@/src/lib/utils";

export default function Footer({
  footerImg,
  footerRightImg,
  footerLeftImg,
  columns,
  contact,
  socialLinks,
  cta,
}: FooterProps) {
  const sectionRef = useSectionReveal();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={sectionRef}
      className="relative rounded-[32px] bg-[#28302D] pt-20 m-2 lg:m-4"
    >
      <Image
        src={footerRightImg}
        alt=""
        width={209.37}
        height={316.48}
        className="absolute right-0 top-0"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <Image
        src={footerLeftImg}
        alt=""
        width={141.45}
        height={334.26}
        className="absolute left-0 top-[20%]"
      />

      <div className="mx-auto px-6 lg:px-[60px]">
        {/* CTA */}
        <div className="mb-20 flex flex-col items-center text-center">
          <Heading
            className={cn("max-w-[700px] text-[#F3EDE3]", cta.headingMaxWidth)}
            highlightClassName={cta.highlightcolor || "text-[#836D4E]"}
            before={cta.heading.before}
            highlight={cta.heading.highlight}
          />

          <p
            data-reveal
            data-direction="left"
            className="mt-8 max-w-[650px] font-hanken text-base font-normal leading-7 text-white/80"
          >
            {cta.description}
          </p>

          <div data-reveal data-direction="left">
            <Button href={cta.button.href} variant="gold" className="mt-10">
              {cta.button.label}
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 gap-10 border-t border-[#3D4844] py-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {footerData.columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}

            <div className="hidden lg:block">
              <FooterContact {...footerData.contact} />
            </div>
          </div>

          <div className="block lg:hidden">
            <FooterContact {...footerData.contact} />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-5 border-t border-[#3D4844] pt-10 md:flex-row">
          <p
            data-reveal
            data-direction="left"
            className="flex flex-wrap items-center gap-1 text-sm text-[#C5A375]"
          >
            <span>© {currentYear} Waldor Clinic</span>

            <span>·</span>

            {/* Not clickable until the policy pages exist */}
            <span>Privacy Policy</span>

            <span>·</span>

            <span>Terms & Conditions</span>

            <span>·</span>

            <span>
              Complaints Injectables are prescription-only medicines and are
              discussed at consultation only.
            </span>
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="transition-transform duration-300 hover:scale-110"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="opacity-70 transition-opacity duration-300 hover:opacity-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mt-16 h-[54px] md:h-[130px] 2xl:h-[263px] w-full">
          <Image
            src={footerImg}
            alt="Waldor Clinic"
            fill
            className="object-fill opacity-70 transition-opacity duration-300 hover:opacity-100"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </div>
    </footer>
  );
}
