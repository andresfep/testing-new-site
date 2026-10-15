import { Button } from "./button";
import { MapPin, Phone, Clock } from "lucide-react";
import { MapEmbed } from "./MapEmbed";
import { Link } from "react-router-dom";
import { SITE } from "./site";

export const Location = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 lg:order-1 order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {SITE.mainService} Near {SITE.city}, {SITE.state}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Looking for premium auto body repair in {SITE.city}?{" "}
              {SITE.businessName}
              is located right here on the east side, making our shop convenient
              for drivers in {SITE.city}, Cumberland, Lawrence, Beech Grove,
              Speedway, and nearby central Indiana communities.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our {SITE.city} auto body shop provides comprehensive care for all
              vehicles, including collision repair, frame straightening, paint
              refinishing, rust repair, mechanical repairs, and full vehicle
              inspections.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Conveniently located on E 26th St near Sherman Ave, just minutes
              from I-465 and I-70. We proudly serve drivers from{" "}
              <Link
                to="/cumberland-in-auto-body-repair"
                className="text-primary hover:underline font-semibold"
              >
                Cumberland
              </Link>
              , Lawrence, Beech Grove, and surrounding areas.
            </p>
          </div>
          <div className="lg:order-2 order-1">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">{SITE.street}</p>
                    <p className="text-slate-600">{SITE.streetCity}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <a
                    href={SITE.phoneHref}
                    className="font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>

                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div className="text-slate-900">
                    <p>
                      <span className="font-bold">Mon–Fri:</span> 9:00 AM – 5:00
                      PM
                    </p>
                    <p>
                      <span className="font-bold">Saturday:</span> Closed
                    </p>
                    <p>
                      <span className="font-bold">Sunday:</span> Closed
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-full text-lg w-full"
              >
                <a
                  href={SITE.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </a>
              </Button>

              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                <MapEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
