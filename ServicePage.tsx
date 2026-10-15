import { Footer } from "./Footer";
import { ServiceHero } from "./ServiceHero";
import { ServiceContent } from "./ServiceContent";
import { ServiceFAQ, ServiceWhyChoose } from "./ServiceFAQ";
import { ServiceLocation } from "./ServiceLocation";
import { useSEO } from "./use-seo";
import { serviceBySlug, SERVICES, SITE } from "./site";
import { SERVICE_CONTENT } from "./serviceContent";

interface ServicePageProps {
  slug: string;
}

const ServicePage = ({ slug }: ServicePageProps) => {
  const data = SERVICE_CONTENT[slug];
  const service = serviceBySlug(slug);

  useSEO({
    title: data.title,
    description: data.subheadline,
  });

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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceName,
    provider: {
      "@type": "AutoBodyShop",
      name: SITE.businessName,
      telephone: SITE.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.street,
        addressLocality: SITE.city,
        addressRegion: SITE.state,
        postalCode: "46218",
        addressCountry: "US",
      },
    },
    areaServed: SERVICES.map((s) => s.name),
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        <ServiceHero
          title={data.title}
          location={`${SITE.city}, ${SITE.state}`}
          subheadline={data.subheadline}
          serviceName={data.serviceName}
          image={service?.image || SITE.heroBanner}
        />
        <ServiceContent data={data} />
        <ServiceWhyChoose serviceName={data.serviceName} />
        <ServiceFAQ
          serviceName={data.serviceName}
          faqs={data.faqs}
          intro={data.faqIntro}
        />
        <ServiceLocation
          serviceName={data.serviceName}
          paragraphs={data.locationParagraphs}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
