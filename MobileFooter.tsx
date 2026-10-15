import { Button } from "./button";
import { Phone } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { SITE } from "./site";

export const MobileFooter = () => {
  const { openModal } = useQuoteModal();
  return (
    <div className="sticky top-[64px] left-0 right-0 z-40 bg-white flex md:hidden">
      <a
        href={SITE.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 h-10 font-semibold text-sm transition-colors border-none outline-none shadow-none"
      >
        <Phone className="w-4 h-4" />
        Call Now
      </a>
      <button
        className="flex-1 bg-primary hover:bg-primary/90 text-white h-10 font-semibold text-sm transition-colors border-none outline-none shadow-none"
        onClick={openModal}
      >
        Get Quote
      </button>
    </div>
  );
};
