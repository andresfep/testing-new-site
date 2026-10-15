import { ReleaseFormHero } from "./ReleaseFormHero";
import { ReleaseFormSection } from "./ReleaseFormSection";
import { Location } from "./Location";
import { Footer } from "./Footer";
import { useSEO } from "./use-seo";
import { SITE } from "./site";

const ReleaseForm = () => {
  useSEO({
    title: `Vehicle Release Form | ${SITE.businessName}`,
    description: `Complete the vehicle release and authorization form for ${SITE.businessName} in Indianapolis, IN. Sign electronically in English or Spanish before we start on your car.`,
    path: "/release-form",
  });
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ReleaseFormHero />
        <ReleaseFormSection />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default ReleaseForm;
