import { Footer } from "./Footer";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { Lock, Users, Calendar, ShieldCheck, ThumbsUp } from "lucide-react";
import { Reviews } from "./Reviews";
import { FAQ } from "./FAQ";
import { ServiceAreaLocation } from "./ServiceAreaLocation";
import { ServiceAreaCTA } from "./ServiceAreaCTA";
import { postTrackingEvent } from "./tracking";
import { useNavigate } from "react-router-dom";
import { useSEO } from "./use-seo";
import { SITE, SERVICES } from "./site";
import { AREA_CONTENT } from "./areaContent";

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

interface ServiceAreaPageProps {
  slug: string;
}

const ServiceAreaPage = ({ slug }: ServiceAreaPageProps) => {
  const data = AREA_CONTENT[slug];
  const navigate = useNavigate();
  useSEO({
    title: `${data.title} | ${SITE.businessName}`,
    description: `${SITE.mainService} in ${data.areaShort}, ${SITE.state} from ${SITE.businessName}. Collision, frame, paint & rust repair. Free estimates — call ${SITE.phone}.`,
  });

  const stats = [
    { icon: Calendar, highlight: "55+", text: "Years in Business" },
    { icon: Users, highlight: "1,000+", text: "Vehicles Restored" },
    { icon: ShieldCheck, highlight: "100%", text: "Local Shop" },
    { icon: ThumbsUp, highlight: "100%", text: "Satisfaction Guarantee" },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[800px] flex items-center pb-5">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${SITE.heroBanner}")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-5">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              {/* Left Content */}
              <div className="text-white max-w-xl mx-auto lg:mx-0">
                <h1
                  className="text-5xl md:text-6xl font-heading font-bold leading-tight mb-6"
                  style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
                >
                  {data.title}
                </h1>
                <p
                  className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed"
                  style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                  {SITE.businessName} delivers expert{" "}
                  {SITE.mainService.toLowerCase()} to drivers in{" "}
                  {data.areaShort}. Collision, frame, paint, and rust repair —
                  quoted before we start, done right for over 55 years.
                </p>
              </div>

              {/* Right Content - Form */}
              <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-lg mx-auto lg:ml-auto w-full border border-gray-100">
                <div className="text-center mb-6">
                  <p className="text-3xl font-heading font-bold text-gray-900 mb-2">
                    Request Quote
                  </p>
                  <p className="text-sm text-gray-500">
                    Takes less than 60 seconds.
                  </p>
                </div>

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
                  <div>
                    <Input
                      name="name"
                      placeholder="John Smith*"
                      className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="phone"
                      placeholder="(555) 555-1234*"
                      type="tel"
                      className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
                      required
                      onChange={(e) => {
                        e.currentTarget.value = formatPhone(
                          e.currentTarget.value,
                        );
                      }}
                    />
                  </div>

                  <div>
                    <Input
                      name="email"
                      placeholder="your@email.com*"
                      type="email"
                      className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  <div>
                    <Input
                      name="service"
                      placeholder="What service do you need?"
                      className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Input
                      name="vehicle"
                      placeholder="What vehicle do you have?"
                      className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message goes straight to my phone, I'll get back to you as soon as I'm available"
                      className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 min-h-[80px] resize-none text-sm"
                    />
                  </div>

                  <div className="flex items-start space-x-2 pt-2">
                    <Checkbox id="terms" className="mt-1" />
                    <Label
                      htmlFor="terms"
                      className="text-xs text-gray-500 font-normal leading-tight"
                    >
                      I agree to terms & conditions provided by the company. By
                      providing my phone number, I agree to receive text
                      messages from the business.
                    </Label>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg h-14">
                      Get My Free Quote Request
                    </Button>
                    <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                      <Lock className="w-3 h-3" />
                      No Obligation. We'll review info and follow up fast.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="bg-[#0a0a1a] border-y border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 lg:px-8 py-4 md:py-0 w-full md:w-auto justify-center md:justify-start"
                >
                  <stat.icon className="w-6 h-6 text-primary shrink-0 fill-primary/20" />
                  <div className="flex items-baseline gap-1.5 text-base whitespace-nowrap">
                    <span className="font-bold text-white tracking-wide">
                      {stat.highlight}
                    </span>
                    <span className="text-gray-400 font-medium">
                      {stat.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-black space-y-6">
              <h2 className="text-3xl font-bold text-black mb-4 mt-8">
                Full-Service {SITE.mainService} in {data.areaShort},{" "}
                {SITE.state}
              </h2>
              <p className="text-lg leading-relaxed text-black">
                {data.fullService}
              </p>

              <h2 className="text-3xl font-bold text-black mb-4 mt-8">
                Why {data.areaShort}{" "}
                {SITE.customerNoun.charAt(0).toUpperCase() +
                  SITE.customerNoun.slice(1)}{" "}
                Choose Us
              </h2>
              <p className="text-lg leading-relaxed text-black">
                {data.whyChoose}
              </p>

              <h2 className="text-3xl font-bold text-black mb-4 mt-8">
                What We Do in {data.areaShort}, {SITE.state}
              </h2>
              <p className="text-lg leading-relaxed text-black mb-6">
                {data.whatWeDo}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {SERVICES.map((s) => (
                  <Button
                    key={s.slug}
                    className="justify-start h-14 text-lg bg-primary hover:bg-primary/90 text-white transition-colors"
                    asChild
                  >
                    <a href={`/${s.slug}`}>{s.name}</a>
                  </Button>
                ))}
              </div>

              <h2 className="text-3xl font-bold text-black mb-4 mt-12">
                About {data.areaShort}, {SITE.state}
              </h2>
              <p className="text-lg leading-relaxed text-black">
                {data.aboutArea}
              </p>
            </div>
          </div>
        </section>

        <Reviews city={data.areaName} />
        <FAQ city={data.areaName} service={SITE.mainService.toLowerCase()} />
        <ServiceAreaCTA city={data.areaShort} service={SITE.mainService} />
        <ServiceAreaLocation
          areaShort={data.areaShort}
          paragraphs={data.locationParagraphs}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServiceAreaPage;
