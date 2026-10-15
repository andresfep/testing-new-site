import { Footer } from "./Footer";
import { Reviews } from "./Reviews";
import { Location } from "./Location";
import { AboutUsHero } from "./AboutUsHero";
import { AboutUsContent } from "./AboutUsContent";
import { ServiceAreaCTA } from "./ServiceAreaCTA";
import { useSEO } from "./use-seo";
import { Link } from "react-router-dom";
import { SITE, AREAS } from "./site";

const AboutUsPage = () => {
  useSEO({
    title: `About Us | ${SITE.businessName}`,
    description: `${SITE.businessName} — originally Williamson Body Shop — has served Indianapolis since 1971. Auto body collision repair, paint, frame/unibody aligning & insurance claim assistance, backed by a Lifetime Warranty.`,
  });
  return (
    <div className="min-h-screen bg-background">
      <main>
        <AboutUsHero />
        <AboutUsContent />
        <Reviews />
        <div className="bg-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4 text-slate-900">
              Where we work
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Same crew, same standards, across central Indiana. Click your city
              for local information and the services we run there.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {AREAS.map((a) => (
                <Link
                  key={a.slug}
                  to={`/${a.slug}`}
                  className="bg-white border border-slate-200 hover:border-primary text-slate-800 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center gap-2"
                >
                  <span className="text-primary">📍</span> {a.shortName},{" "}
                  {SITE.state}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <ServiceAreaCTA city={SITE.city} service={SITE.mainService} />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
