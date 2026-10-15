import { Button } from "./button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useQuoteModal } from "./QuoteModal";
import { SITE } from "./site";

export const AboutUs = () => {
  const { openModal } = useQuoteModal();
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Who We Are
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              {SITE.businessName} is a family-owned auto repair and body shop in{" "}
              {SITE.city}, serving the community since 1971. Originally founded
              as Williamson Body Shop, we provide collision repair, auto body
              repair, paint refinishing, frame and structural repair, insurance
              claim assistance, and estimates. We work with all insurance
              companies and offer bilingual service.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Our facility has secure storage for 50+ vehicles, tall bays for
              high-roof vehicles, and a lifetime repair warranty. Out of Pocket,
              Fleet & Wholesale pricing available — ask about deductible savings
              and price match programs!
            </p>
          </div>

          {/* Right Side - Info Card */}
          <div className="bg-gray-100 rounded-lg p-8 md:p-10 border border-gray-200">
            {/* Logo / Brand Area */}
            <div className="text-center mb-8 pb-6 border-b border-gray-300">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-slate-700 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <img
                src={SITE.logo}
                alt={SITE.businessName}
                className="h-14 w-auto object-contain mx-auto"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Phone
                  </p>
                  <a
                    href={SITE.phoneHref}
                    className="text-base font-medium text-slate-800 hover:text-primary transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-base font-medium text-primary hover:underline"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Based In
                  </p>
                  <p className="text-base font-medium text-slate-800">
                    {SITE.street}, {SITE.streetCity}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Hours
                  </p>
                  <p className="text-base font-medium text-slate-800">
                    {SITE.hoursShort} · Sat-Sun closed
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={openModal}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded text-base transition-all duration-300"
            >
              REQUEST SERVICE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
