import { HelpCircle } from "lucide-react";
import { SITE } from "./site";

const faqs = [
  {
    question: `What types of vehicles does ${SITE.businessName} repair?`,
    answer: `We work on all makes and models — domestic, Asian, and European vehicles, from daily commuters and family SUVs to light trucks and commercial fleet vehicles. Our technicians have the equipment and experience to handle everything from a minor dent to major structural collision repair.`,
  },
  {
    question: `Why choose a specialized auto body shop instead of a general repair shop?`,
    answer: `Body and collision work requires dedicated frame equipment, paint booths, and technicians trained specifically in structural repair and refinishing. A specialized shop like ours has the right tools and the focused experience to restore your vehicle to factory tolerances and a seamless finish — done right the first time.`,
  },
  {
    question: `How long does a typical auto body repair take?`,
    answer: `It depends on the extent of the damage. Minor dent repair or a single panel refinish can take a few days, while a major collision repair involving frame straightening and multiple panels can take a week or more. We give you a realistic timeline up front and keep you updated throughout the repair.`,
  },
  {
    question: `Do you use OEM or aftermarket replacement parts?`,
    answer: `We use Original Equipment Manufacturer (OEM) parts or premium aftermarket equivalents that meet or exceed OEM specifications, and we'll walk you through the options so you can choose what fits your budget and your vehicle. We never substitute parts without telling you first.`,
  },
  {
    question: `Do you provide repair estimates?`,
    answer: `Yes. We provide free, written estimates before any work begins so you know exactly what to expect. Bring your vehicle in or send us photos of the damage and we'll get you an itemized quote in plain English.`,
  },
  {
    question: `Will you work directly with my insurance company?`,
    answer: `Absolutely. We work with all major insurance carriers — we handle the estimate, communicate with the adjuster, and manage the paperwork so your claim moves smoothly. You choose the shop; the insurance company pays for the covered repairs.`,
  },
  {
    question: `Can I bring my own parts for the repair?`,
    answer: `Yes. We offer a Bring Your Own Part repair service — you supply the part and we install it correctly with labor-only pricing. We'll inspect the part first to make sure it's the right fit and in good condition before we start.`,
  },
  {
    question: `Do you offer a warranty on your repairs?`,
    answer: `We stand behind our workmanship. Our body and paint repairs are covered against defects in materials and labor. If something isn't right, bring it back and we'll make it right — that's been our policy for over 55 years.`,
  },
];

interface FAQProps {
  city?: string;
  service?: string;
}

export const FAQ = ({
  city = `${SITE.city}, ${SITE.state}`,
  service = SITE.mainService.toLowerCase(),
}: FAQProps) => {
  const midpoint = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, midpoint);
  const rightFaqs = faqs.slice(midpoint);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Frequently Asked Questions about {SITE.mainService} in {city}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get your answers to common questions about our {service} services in{" "}
            {city}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl px-6 shadow-md transition-all"
              >
                <h3 className="flex items-center gap-4 text-left font-semibold text-lg text-slate-900 py-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  {faq.question}
                </h3>
                <div className="text-slate-600 text-base leading-relaxed pb-6 pl-12">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <div
                key={index + midpoint}
                className="bg-white border border-slate-200 rounded-xl px-6 shadow-md transition-all"
              >
                <h3 className="flex items-center gap-4 text-left font-semibold text-lg text-slate-900 py-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  {faq.question}
                </h3>
                <div className="text-slate-600 text-base leading-relaxed pb-6 pl-12">
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
