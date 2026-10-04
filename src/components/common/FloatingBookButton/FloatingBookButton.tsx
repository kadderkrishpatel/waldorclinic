import Link from "next/link";

const BOOKING_URL = "https://waldorclinic.eu.zenoti.com/webstoreNew/services";

export default function FloatingBookButton() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:bottom-5 sm:left-auto sm:right-5 sm:translate-x-0">
      <span className="absolute inset-0 rounded-full bg-[#C5A375]/60 animate-book-ring" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border-[5px] border-[#C5A375]/45 animate-book-halo"
      />

      <Link
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Now"
        className="animate-book-pulse relative flex items-center justify-center gap-2 rounded-full border border-white/70 bg-[#1F2422]/70 px-5 py-3 font-hanken text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#1F2422] sm:px-6"
      >
        Book Now
      </Link>
    </div>
  );
}
