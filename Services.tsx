import { Button } from "./button";
import { Link } from "react-router-dom";
import { SERVICES, SITE } from "./site";

export const Services = () => {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our {SITE.mainService} Services In {SITE.city}, {SITE.state}
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-6 text-primary">
            Welcome To {SITE.city}'s Trusted {SITE.mainService} Shop
          </p>
          <p className="text-lg text-slate-600">
            Choosing an auto body shop in {SITE.city} can be stressful, but
            that's why {SITE.businessName} goes above and beyond, giving our
            customers a VIP experience for a full range of body, collision, and
            refinishing services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.slug}
              className="group relative h-[450px] rounded-2xl overflow-hidden flex flex-col justify-end p-6"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              <div className="relative z-10 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-6 text-sm line-clamp-3">
                  {service.description}
                </p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-sm uppercase tracking-wider"
                >
                  <Link to={`/${service.slug}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
