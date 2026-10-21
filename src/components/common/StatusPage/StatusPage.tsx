import Button from "@/src/components/ui/Button";

interface StatusPageAction {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "secondary";
}

interface StatusPageProps {
  /** Large decorative text behind the content, e.g. "404" */
  code: string;
  eyebrow: string;
  heading: { before?: string; highlight: string; after?: string };
  description: string;
  actions: StatusPageAction[];
  /** Small muted line under the buttons, e.g. an error reference */
  note?: string;
  /** Show quick links to the main areas of the site */
  showQuickLinks?: boolean;
}

const quickLinks = [
  { label: "Treatments", href: "/treatments" },
  { label: "Concerns", href: "/concerns/acne" },
  { label: "Doctors", href: "/doctors" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

/**
 * Shared layout for the 404 and error screens. Plain markup only (no
 * scroll-reveal hooks) so it always renders, even when something is broken.
 */
export default function StatusPage({
  code,
  eyebrow,
  heading,
  description,
  actions,
  note,
  showQuickLinks = false,
}: StatusPageProps) {
  return (
    <section className="relative m-2 min-h-[640px] overflow-hidden lg:m-4 lg:min-h-[720px] lg:rounded-[32px]">
      {/* Soft gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(197,163,117,0.22),transparent_55%)]"
      />

      {/* Concentric rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 hidden -translate-y-1/2 md:block"
      >
        <div className="relative h-[620px] w-[620px] rounded-full border border-[#C5A375]/20">
          <div className="absolute inset-[70px] rounded-full border border-[#C5A375]/15" />
          <div className="absolute inset-[140px] rounded-full border border-[#C5A375]/10" />
        </div>
      </div>

      {/* Ghost code */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 bottom-0 select-none font-fraunces text-[200px] font-normal italic leading-none text-[#C5A375]/10 sm:text-[300px] lg:right-10 lg:text-[420px]"
      >
        {code}
      </span>

      <div className="relative z-10 flex min-h-[640px] flex-col justify-center px-5 pb-16 pt-40 sm:px-8 lg:min-h-[720px] lg:px-[60px] lg:pt-48">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C5A375]" />
            <p className="font-hanken text-sm font-bold uppercase tracking-[0.16em] text-[#C5A375]">
              {eyebrow}
            </p>
          </div>

          <h1 className="font-fraunces text-[40px] font-normal leading-[105%] tracking-[-1.2px] text-[#F3EDE3] md:text-7xl lg:text-[88px] lg:tracking-[-1.76px]">
            {heading.before && <>{heading.before} </>}
            <span className="font-fraunces font-normal italic text-[#C5A375]">
              {heading.highlight}
            </span>
            {heading.after && <> {heading.after}</>}
          </h1>

          <p className="mt-6 max-w-xl font-hanken text-lg leading-[150%] text-[#F3ECE3] lg:mt-8 lg:text-[17px]">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            {actions.map((action) => (
              <Button
                key={action.label}
                href={action.href}
                onClick={action.onClick}
                variant={action.variant ?? "gold"}
              >
                {action.label}
              </Button>
            ))}
          </div>

          {showQuickLinks && (
            <nav
              aria-label="Helpful links"
              className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#F3EDE3]/10 pt-6"
            >
              <span className="font-hanken text-xs font-bold uppercase tracking-[0.16em] text-[#7E8582]">
                Or explore
              </span>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-hanken text-sm text-[#ECE0D1] transition-colors hover:text-[#C5A375]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {note && (
            <p className="mt-8 font-hanken text-xs tracking-wide text-[#7E8582]">
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
