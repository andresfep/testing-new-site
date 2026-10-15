import { Button } from "./button";
import { Phone, Calendar } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { SITE } from "./site";

interface ServiceAreaCTAProps {
  city?: string;
  service?: string;
  phone?: string;
}

export const ServiceAreaCTA = ({
  city = SITE.city,
  service = SITE.mainService,
  phone = SITE.phone,
}: ServiceAreaCTAProps) => {
  const { openModal } = useQuoteModal();
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Need an {SITE.mainService} Shop in {city}, {SITE.state}?
        </h2>
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Call {phone} for fast {service.toLowerCase()} service in {city} from a
          local, family-owned shop.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href={SITE.phoneHref} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8 rounded-full"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {phone}
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-slate-600 text-slate-900 hover:bg-slate-800 hover:text-white text-lg h-14 px-8 rounded-full bg-white transition-colors"
            onClick={openModal}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Request Quote
          </Button>
        </div>
        <p className="text-sm text-slate-400 flex items-center justify-center gap-2">
          <span className="text-primary text-xl">📍</span> Serving{" "}
          <span className="font-semibold text-white">{city}</span> and{" "}
          <span className="font-semibold text-white">Surrounding Areas</span>.
        </p>
      </div>
    </section>
  );
};
