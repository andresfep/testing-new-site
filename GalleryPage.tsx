import { Footer } from "./Footer";
import { Reviews } from "./Reviews";
import { Location } from "./Location";
import { Link } from "react-router-dom";
import { useSEO } from "./use-seo";
import { SITE, GALLERY_IMAGES } from "./site";

const GalleryHero = () => (
  <section className="relative w-full min-h-[600px] flex items-center pb-16 pt-16">
    {/* Background Image with Overlay */}
    <div
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${SITE.heroBanner}')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
    </div>

    {/* match max-w-7xl with body content */}
    <div className="container mx-auto px-4 relative z-10 max-w-7xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-slate-300 mb-6 uppercase tracking-wider font-manrope">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="mx-2 text-slate-500">/</span>
        <span className="text-primary font-semibold">Gallery</span>
      </nav>

      <div className="max-w-3xl">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-sora"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
        >
          Our Gallery
        </h1>
        <p
          className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed font-manrope"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
        >
          See why our customers love us — browse through our recent auto body
          repair work from {SITE.city}, {SITE.state}.
        </p>
      </div>
    </div>
  </section>
);

const GalleryPage = () => {
  useSEO({
    title: `Gallery | ${SITE.businessName}`,
    description: `Browse our gallery of recent auto body repair work completed by ${SITE.businessName} in Indianapolis, IN.`,
  });
  return (
    <div className="min-h-screen bg-background">
      <main>
        <GalleryHero />
        <section className="pb-24 bg-white">
          <div className="container mx-auto px-4 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
              {GALLERY_IMAGES.map((src, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden group relative"
                >
                  <img
                    src={src}
                    alt={`${SITE.shortName} auto body repair work ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
