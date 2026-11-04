import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Description, Eyebrow } from "@/src/components/ui/Typography";
import { ContactInfoItem } from "./ContactSection.types";

interface Props {
  item: ContactInfoItem;
}

export default function ContactItem({ item }: Props) {
  const renderIcon = () => {
    switch (item.icon) {
      case "phone":
        return <Phone size={20} strokeWidth={1.8} className="text-[#C5A375]" />;

      case "whatsapp":
        return <FaWhatsapp size={20} className="text-[#C5A375]" />;

      case "mail":
        return <Mail size={20} strokeWidth={1.8} className="text-[#C5A375]" />;

      case "map":
        return (
          <MapPin size={20} strokeWidth={1.8} className="text-[#C5A375]" />
        );

      case "clock":
        return <Clock size={20} strokeWidth={1.8} className="text-[#C5A375]" />;

      default:
        return null;
    }
  };

  const linkClass = item.href
    ? "transition-colors hover:text-[#C5A375]"
    : undefined;

  return (
    <div className="flex items-start gap-5">
      {/* Icon */}
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#59615E]">
        {renderIcon()}
      </div>

      {/* Content */}
      <div className="flex-1">
        <Eyebrow variant="secondary" className="mb-3 tracking-[2px]">
          {item.title}
        </Eyebrow>

        {Array.isArray(item.value) ? (
          <div className="space-y-1">
            {item.value.map((line) => (
              <h4
                key={line}
                className="font-fraunces text-[20px] leading-tight text-[#ECE0D1] lg:text-[22px]"
              >
                {line}
              </h4>
            ))}
          </div>
        ) : (
          <h4 className="font-fraunces text-[20px] leading-tight text-[#ECE0D1] lg:text-[22px]">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </h4>
        )}

        {item.description && (
          <Description className="mt-3 text-[#9EA3A1] text-sm">
            {item.description}
          </Description>
        )}
      </div>
    </div>
  );
}
