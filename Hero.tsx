import { SITE } from "./site";

export const Hero = () => {
  return (
    <section className="relative min-h-[800px] flex items-center pb-5">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${SITE.heroBanner}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-5">
        <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
          <h1
            className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 drop-shadow-md"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}
          >
            {SITE.mainService.toUpperCase()} IN {SITE.city.toUpperCase()},{" "}
            {SITE.state}
          </h1>
          <p
            className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-6 drop-shadow-lg text-white"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Auto Body Repair You Can Count On
          </p>
          <p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            {SITE.businessName} has restored Indianapolis vehicles for over 55
            years. From collision reconstruction to paint refinishing, we fix
            your vehicle right — quoted before we start.
          </p>

          {/* Google Reviews Badge */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-3 hover:bg-white/20 transition-all"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-sm">G</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-medium text-sm">
                {SITE.city} Reviews
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
