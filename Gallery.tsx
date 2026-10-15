import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GALLERY_IMAGES, SITE } from "./site";

export const Gallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-3">
              See why our customers love us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Recent {SITE.mainService} Work In {SITE.city}, {SITE.state}
            </h2>
          </div>
          <Link
            to="/gallery"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            SEE ALL PHOTOS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {GALLERY_IMAGES.slice(0, 9).map((src, index) => (
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
  );
};
