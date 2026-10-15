import { Button } from "./button";
import { Phone } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { Link } from "react-router-dom";
import { SITE } from "./site";

interface ServiceHeroProps {
  title: string;
  location: string;
  subheadline: string;
  serviceName: string;
  image: string;
}

export const ServiceHero = ({
  title,
  location,
  subheadline,
  serviceName,
  image,
}: ServiceHeroProps) => {
  const { openModal } = useQuoteModal();

  return (
    <section className="relative w-full min-h-[600px] flex items-center pb-16 pt-16">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <nav className="flex items-center text-sm text-slate-300 mb-6 uppercase tracking-wider font-manrope">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2 text-slate-500">/</span>
          <span className="text-primary font-semibold">{serviceName}</span>
        </nav>

        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-sora"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            {title}
          </h1>
          <p
            className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed font-manrope"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-5 text-base uppercase tracking-wide rounded font-sora"
              onClick={openModal}
            >
              Get a Free Quote
            </Button>
            <a href={SITE.phoneHref}>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-5 text-base rounded flex items-center gap-3 font-sora"
              >
                <Phone className="w-5 h-5" />
                Call {SITE.phone}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
