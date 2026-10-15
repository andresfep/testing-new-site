import { HelpCircle } from "lucide-react";
import { SITE } from "./site";

interface FAQItem {
  question: string;
  answer: string;
}

export const ServiceFAQ = ({
  serviceName,
  faqs,
  intro,
}: {
  serviceName: string;
  faqs: FAQItem[];
  intro: string;
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Frequently Asked Questions about {serviceName}
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{intro}</p>
        </div>

        <div className="w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl px-6 shadow-md transition-all h-fit"
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

export const ServiceWhyChoose = ({ serviceName }: { serviceName: string }) => {
  const cards = [
    {
      title: "Trusted Local Experts",
      desc: `Our ${SITE.city} team has handled ${serviceName.toLowerCase()} on every kind of vehicle for over 55 years.`,
    },
    {
      title: "Quality Work",
      desc: "Factory-spec repairs and refinishing that hold up long after you drive off our lot.",
    },
    {
      title: "Fast & Reliable Service",
      desc: "We stick to the timeline we quote and keep you updated at every step of the repair.",
    },
    {
      title: "5-Star Customer Satisfaction",
      desc: "Drivers across central Indiana come back to us — and send their friends — because the work is right.",
    },
  ];
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Why Choose {SITE.businessName}?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {c.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
