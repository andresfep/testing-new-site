import { Hero } from "./Hero";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";

import { Gallery } from "./Gallery";
import { Reviews } from "./Reviews";
import { AboutUs } from "./AboutUs";
import { FAQ } from "./FAQ";
import { ServiceAreaCTA } from "./ServiceAreaCTA";
import { Location } from "./Location";
import { Footer } from "./Footer";
import { Calendar, Users, Shield, ThumbsUp } from "lucide-react";
import { useSEO } from "./use-seo";
import { SITE, AREAS } from "./site";

const Index = () => {
  useSEO({
    title:
      "Auto Body Repair Experts in Indianapolis, IN | CrashFIX at Williamson on 26th",
    description:
      "CrashFIX at Williamson on 26th offers expert auto body repair in Indianapolis, IN. 55+ years of collision, frame, paint & rust repair. Free estimates — call (317) 418-9997.",
  });

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: SITE.businessName,
    image: SITE.ogImage,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      postalCode: "46218",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.8054338,
      longitude: -86.0982078,
    },
    url: "/",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: AREAS.map((a) => a.shortName),
    priceRange: "$$",
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <main>
        <Hero />

        {/* Trust Bar */}
        <div className="bg-[#0a0a1a] border-y border-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {[
                { icon: Calendar, value: "55+", label: "Years in Business" },
                { icon: Users, value: "1,000+", label: "Vehicles Restored" },
                { icon: Shield, value: "100%", label: "Local Shop" },
                {
                  icon: ThumbsUp,
                  value: "100%",
                  label: "Satisfaction Guarantee",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 lg:px-8 py-4 md:py-0 w-full md:w-auto justify-center md:justify-start"
                >
                  <stat.icon className="w-6 h-6 text-primary shrink-0 fill-primary/20" />
                  <div className="flex items-baseline gap-1.5 text-base whitespace-nowrap">
                    <span className="font-bold text-white">{stat.value}</span>
                    <span className="text-gray-400">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Services />
        <WhyChooseUs />

        {/* Stats Counter */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-primary">{SITE.mainService}</span>{" "}
              <span className="text-gray-900">Backed by Experience</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "55+", label: "Years Experience" },
                { value: "1,000+", label: "Happy Customers" },
                { value: "1,256+", label: "Coffees Consumed" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-base text-gray-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Gallery />

        <Reviews
          title={`Trusted by ${SITE.customerNoun} in ${SITE.city}, ${SITE.state}`}
          subtitle={`DRIVEN BY TRUST, HEAR FROM ${SITE.city.toUpperCase()} ${SITE.customerNoun.toUpperCase()}`}
        />
        <AboutUs />
        <FAQ />
        <ServiceAreaCTA city={SITE.city} service={SITE.mainService} />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
