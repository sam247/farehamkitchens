import Link from "next/link";
import { ChevronRight } from "lucide-react";

const OFFER_URL = "/blog/aeg-cashback-offer";

const AnnouncementBar = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-bar bg-black text-white"
      role="banner"
    >
      <Link
        href={OFFER_URL}
        className="flex items-center justify-center gap-2 w-full h-full px-4 py-2 text-center text-sm font-medium hover:bg-white/10 transition-colors"
      >
        <span className="truncate">
          Claim up to £1,300 AEG cashback — 3+ appliances. Offer ends 30 June 2026.
        </span>
        <ChevronRight className="shrink-0 w-4 h-4" aria-hidden />
      </Link>
    </div>
  );
};

export default AnnouncementBar;
