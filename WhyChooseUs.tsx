import { ShieldCheck, Wrench, Clock } from "lucide-react";
import { SITE } from "./site";

const benefits = [
  {
    icon: ShieldCheck,
    title: `TRUSTED ${SITE.city.toUpperCase()} EXPERTS`,
    description: `We've helped hundreds of ${SITE.city} drivers keep their vehicles running and looking their best — and most of them found us through someone they know.`,
  },
  {
    icon: Wrench,
    title: "Quality Work Done Right",
    description:
      "Proper torque specs, quality parts and attention to detail — so the repair lasts instead of coming back.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Service",
    description:
      "We work efficiently without cutting corners, and we tell you what it'll cost before we start. You get your day back, not a surprise invoice.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-[#f5f5f0]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-primary" />
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
            Why Choose Us
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-slate-900 tracking-tight">
          Why Choose <span className="text-primary">{SITE.shortName}</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-slate-500 max-w-2xl mx-auto mb-16 leading-relaxed">
          At {SITE.businessName}, we go beyond basic repair — we deliver
          craftsmanship you can see and service you can feel. We use advanced
          equipment and industry-best practices to ensure your vehicle looks and
          performs like new.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-sm p-8 md:p-10 shadow-sm border-t-4 border-slate-900"
              >
                <Icon
                  className="w-10 h-10 text-primary mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-base">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Financing & Payment Options */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="bg-white rounded-sm p-8 md:p-10 shadow-sm border-t-4 border-primary max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={SITE.zelleQr}
                  alt="Zelle QR Code - CRASHFIX AT WILLIAMSON ON 26TH LLC"
                  className="w-44 h-auto object-contain rounded-md border border-slate-100 shadow-inner bg-white p-2"
                  loading="lazy"
                />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">
                  Financing & Payment Options
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
                  Scan to Pay with Zelle®
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Easy and secure payment for your repair — scan the QR code
                  with your banking app to pay with Zelle. Out of Pocket, Fleet
                  & Wholesale pricing available. Ask about deductible savings
                  and price match programs!
                </p>
                <p className="text-xs text-slate-400 mt-3 uppercase tracking-wider">
                  CRASHFIX AT WILLIAMSON ON 26TH LLC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
