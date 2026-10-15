import { Footer } from "./Footer";
import { Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "./site";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow flex items-center pb-10 md:pb-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">
              Thank You!
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thank you for reaching out to {SITE.businessName}. We'll be in
              touch with you shortly. Please look out for a text message or call
              from our number.
            </p>

            <div className="mb-12">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">
                For the fastest assistance:
              </p>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary hover:bg-primary/90 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-xl transition-colors shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                Call {SITE.phone}
              </a>
            </div>

            <hr className="border-slate-100 mb-10" />

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Our Shop</h3>
                  <p className="text-slate-600">
                    {SITE.street}
                    <br />
                    {SITE.streetCity}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-slate-900 mb-1">
                    Hours of Operation
                  </h3>
                  <div className="space-y-1 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>Mon–Fri</span>
                      <span className="font-medium text-slate-900">
                        9:00 AM – 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium text-slate-900">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium text-slate-900">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
