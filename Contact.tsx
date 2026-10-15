import { ContactHero } from "./ContactHero";
import { ContactFormSection } from "./ContactFormSection";
import { Reviews } from "./Reviews";
import { Location } from "./Location";
import { Footer } from "./Footer";
import { useSEO } from "./use-seo";
import { SITE } from "./site";

const Contact = () => {
  useSEO({
    title: `Contact Us | ${SITE.businessName}`,
    description: `Contact ${SITE.businessName} for expert auto body repair in Indianapolis, IN. Collision, frame, paint & rust repair on E 26th St. Call ${SITE.phone}.`,
  });
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ContactHero />
        <ContactFormSection />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
