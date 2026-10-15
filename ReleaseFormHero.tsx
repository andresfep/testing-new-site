import { Link } from "react-router-dom";
import { SITE } from "./site";

export const ReleaseFormHero = () => {
  return (
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
          <span className="text-primary font-semibold">Release Form</span>
        </nav>

        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight font-sora"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.7)" }}
          >
            Vehicle Release &amp; Authorization Form
          </h1>
          <p
            className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8 leading-relaxed font-manrope"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
          >
            Before we start on your vehicle, we need your signed authorization.
            Complete the form below and we'll send you the full release document
            to sign electronically.
          </p>
        </div>
      </div>
    </section>
  );
};
