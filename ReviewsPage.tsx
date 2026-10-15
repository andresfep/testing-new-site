import { Footer } from "./Footer";
import { ReviewsHero } from "./ReviewsHero";
import { Location } from "./Location";
import { useSEO } from "./use-seo";
import { useEffect } from "react";
import { SITE } from "./site";

const ReviewsPage = () => {
  useSEO({
    title: `Reviews | ${SITE.businessName}`,
    description: `Read customer reviews for ${SITE.businessName}, Indianapolis's trusted auto body repair shop for over 55 years. Reviews pulled live from Google.`,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://reputationhub.site/reputation/assets/review-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <ReviewsHero />
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sora">
                What Our Customers Are Saying
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto font-manrope">
                Real reviews from real {SITE.city} drivers. These reviews are
                pulled live from Google — no filters, no edits.
              </p>
            </div>
            <div className="w-full" style={{ minHeight: "600px" }}>
              <iframe
                className="lc_reviews_widget"
                src="https://reputationhub.site/reputation/widgets/review_widget/8FDxOJay7azO4EdDwUZw"
                frameBorder="0"
                scrolling="no"
                style={{ minWidth: "100%", width: "100%", minHeight: "600px" }}
                title={`${SITE.businessName} reviews`}
              />
            </div>
          </div>
        </section>
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default ReviewsPage;
