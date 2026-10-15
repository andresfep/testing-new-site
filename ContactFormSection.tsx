import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useNavigate } from "react-router-dom";
import { postTrackingEvent } from "./tracking";
import { SITE } from "./site";

const formatPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  return d.length > 6
    ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
    : d.length > 3
      ? `(${d.slice(0, 3)}) ${d.slice(3)}`
      : d.length > 0
        ? `(${d}`
        : "";
};

export const ContactFormSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Contact Details */}
          <div className="space-y-6">
            {/* Call or Text */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Call or Text
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  <a
                    href={SITE.phoneHref}
                    className="hover:text-primary transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Free estimates and quick answers during business hours. Leave
                  a message after hours and we'll call you back.
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Email
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {SITE.email}
                  </a>
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Best for non-urgent questions, estimates, and invoices.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Our Shop
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {SITE.city} (Main Shop)
                </h3>
                <p className="text-slate-600 mb-3">
                  {SITE.street}
                  <br />
                  {SITE.streetCity}
                </p>
                <a
                  href={SITE.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold inline-flex items-center hover:underline"
                >
                  Get directions <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="w-full">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Hours of Operation
                </p>
                <div className="space-y-2 text-slate-900 font-medium">
                  <div className="flex justify-between">
                    <span>Mon–Fri</span>
                    <span className="text-slate-600">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-slate-600">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-slate-600">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm h-fit">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-3">
              Send us a message
            </h2>
            <p className="text-slate-600 mb-8">
              Tell us what's going on with your vehicle. We'll get back to you
              fast during business hours.
            </p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                postTrackingEvent(
                  {
                    type: "external_form_submission",
                    timestamp: Date.now(),
                    formId: "quote form",
                    formData: {
                      full_name: formData.get("name"),
                      phone: formData.get("phone"),
                      email: formData.get("email"),
                    },
                    formLabels: {
                      full_name: "Full Name",
                      phone: "Phone",
                      email: "Email",
                    },
                    url: window.location.href,
                    title: document.title,
                    path: window.location.pathname,
                    userAgent: navigator.userAgent,
                    trackingId: "tk_da7e31b94d6e4349bfca5fcad8d57134",
                    locationId: "8FDxOJay7azO4EdDwUZw",
                    sessionId: crypto.randomUUID(),
                    properties: {
                      deviceType: /Mobile|Android|iPhone/i.test(
                        navigator.userAgent,
                      )
                        ? "mobile"
                        : "desktop",
                    },
                  },
                  {
                    customFields: {
                      nbROqzsy7dgGlVZc2UyB: {
                        value: formData.get("service"),
                        label: "Service",
                      },
                      NggyD435SXDPi8TM3gM0: {
                        value: formData.get("vehicle"),
                        label: "Vehicle",
                      },
                      QYzFS87j9JN15XJcObLN: {
                        value: formData.get("message"),
                        label: "Your Message",
                      },
                    },
                  },
                );

                navigate("/thank-you");
              }}
            >
              <Input
                name="name"
                placeholder="Full Name*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
                onChange={(e) => {
                  e.currentTarget.value = formatPhone(e.currentTarget.value);
                }}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
              />
              <Input
                name="service"
                placeholder="What service do you need?"
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
              />
              <Input
                name="vehicle"
                placeholder="What vehicle do you have?"
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
              />
              <Textarea
                name="message"
                placeholder="Any additional info about your vehicle*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 min-h-[150px] resize-none"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold mt-4"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
