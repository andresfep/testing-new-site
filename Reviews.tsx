import { useEffect } from "react";
import { SITE } from "./site";

interface ReviewsProps {
  city?: string;
  title?: string;
  subtitle?: string;
}

export const Reviews = ({
  city = `${SITE.city}, ${SITE.state}`,
  title,
  subtitle,
}: ReviewsProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://reputationhub.site/reputation/assets/review-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#111]">
      {/* Carbon Fiber Pattern Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(#222 15%, transparent 16%),
            radial-gradient(#222 15%, transparent 16%),
            radial-gradient(rgba(255,255,255,0.05) 15%, transparent 20%),
            radial-gradient(rgba(255,255,255,0.05) 15%, transparent 20%)
          `,
          backgroundPosition: "0 0, 8px 8px, 0 1px, 8px 9px",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Vignette fade effect at the corners */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          {subtitle && (
            <p className="text-sm font-bold tracking-wider text-slate-300 mb-3">
              {subtitle}
            </p>
          )}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            {title || `Trusted by ${SITE.customerNoun} in ${city}`}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <iframe
            className="lc_reviews_widget"
            src="https://reputationhub.site/reputation/widgets/review_widget/8FDxOJay7azO4EdDwUZw?widgetId=6aa0b4669bf9bb9f2d80ce2e"
            frameBorder="0"
            scrolling="no"
            style={{ minWidth: "100%", width: "100%" }}
            title={`${SITE.businessName} reviews`}
          />
        </div>
      </div>
    </section>
  );
};
