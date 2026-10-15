import { Button } from "./button";
import { Phone, ChevronRight, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { Link } from "react-router-dom";
import { SITE, SERVICES } from "./site";
import type { ServiceContentData } from "./serviceContent";

export const ServiceContent = ({ data }: { data: ServiceContentData }) => {
  const { openModal } = useQuoteModal();

  const otherServices = SERVICES.filter((s) => s.slug !== data.slug).map(
    (s) => ({ title: s.name, path: `/${s.slug}` }),
  );

  return (
    <section className="py-16 md:py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Main Content */}
          <div className="lg:col-span-8">
            {/* What Is */}
            <h2 className="text-3xl font-bold mb-6 mt-0 text-black tracking-tight font-sora">
              What Is {data.serviceName}?
            </h2>
            {data.whatIs.map((p, i) => (
              <p
                key={i}
                className="text-black leading-relaxed mb-6 font-manrope"
              >
                {p}
              </p>
            ))}

            {/* Why It Matters */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-black tracking-tight font-sora">
              Why {data.serviceName} Matters in {SITE.city}, {SITE.state}
            </h2>
            {data.whyMatters.map((p, i) => (
              <p
                key={i}
                className="text-black leading-relaxed mb-6 font-manrope"
              >
                {p}
              </p>
            ))}

            {/* When Should You Consider */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-black tracking-tight font-sora">
              When Should You Consider {data.serviceName} in {SITE.city},{" "}
              {SITE.state}?
            </h2>
            <p className="text-black leading-relaxed mb-6 font-manrope">
              {data.whenConsider}
            </p>

            {/* What We Check / Included */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-black tracking-tight font-sora">
              {data.includedHeading}
            </h2>
            <p className="text-black leading-relaxed mb-6 font-manrope">
              {data.includedIntro}
            </p>
            <ul className="text-black space-y-3 mb-10 pl-1 font-manrope">
              {data.includedItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>{item.label}</strong> — {item.desc}
                  </span>
                </li>
              ))}
            </ul>

            {/* Sub-services */}
            {data.subServices.map((sub, i) => (
              <div key={i}>
                <h2 className="text-3xl font-bold mb-6 mt-12 text-black tracking-tight font-sora">
                  {sub.title}
                </h2>
                <p className="text-black leading-relaxed mb-6 font-manrope">
                  {sub.body}
                </p>
              </div>
            ))}

            {/* Is Your Thing Due */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-black tracking-tight font-sora">
              Is Your {SITE.thing} Due for {data.serviceName} in {SITE.city},{" "}
              {SITE.state}?
            </h2>
            <p className="text-black leading-relaxed mb-6 font-manrope">
              {data.dueIntro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {data.warningSigns.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-yellow-50 border-l-4 border-yellow-400 p-5 rounded-r-lg"
                >
                  <h4 className="font-bold text-sm text-black mb-2 font-sora">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-manrope">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-3 text-black font-sora">
              {SITE.thing.charAt(0).toUpperCase() + SITE.thing.slice(1)}s that
              may benefit from more frequent {data.serviceName.toLowerCase()}:
            </h3>
            <p className="text-black leading-relaxed mb-6 font-manrope">
              {data.highUseNote}
            </p>

            {/* Near City */}
            <h2 className="text-3xl font-bold mb-6 mt-12 text-black tracking-tight font-sora">
              {data.serviceName} for {SITE.thing}s Near {SITE.city},{" "}
              {SITE.state}
            </h2>
            <p className="text-black leading-relaxed mb-6 font-manrope">
              {data.nearCity}
            </p>
          </div>

          {/* Right: Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Get a Quote Box */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="h-1 bg-primary"></div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 tracking-wide mb-4 font-sora">
                    Get a Quote
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed font-manrope">
                    Tell us what's going on with your vehicle. We'll inspect it
                    and quote before we start.
                  </p>

                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-6 py-4 text-sm tracking-wide rounded mb-3 font-sora"
                    onClick={openModal}
                  >
                    Request Service
                  </Button>

                  <a
                    href={SITE.phoneHref}
                    className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold px-6 py-3 text-sm rounded transition-all font-manrope"
                  >
                    <Phone className="w-4 h-4" />
                    {SITE.phone}
                  </a>
                </div>
              </div>

              {/* Other Services List */}
              <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
                <div className="h-1 bg-slate-900"></div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 tracking-wide mb-4 font-sora">
                    Other Services We Offer
                  </h3>
                  <div className="divide-y divide-slate-100">
                    {otherServices.map((service) => (
                      <Link
                        key={service.title}
                        to={service.path}
                        className="flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors group"
                      >
                        <span className="font-medium text-sm text-slate-800 font-manrope">
                          {service.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
