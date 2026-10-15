import { MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "./site";

export const NotificationBar = () => {
  return (
    <div className="bg-black text-gray-300 py-2 text-sm hidden lg:block">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          <span>
            {SITE.street}, {SITE.streetCity}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span>{SITE.hours}</span>
        </div>
        <a href={SITE.phoneHref} className="hidden sm:flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          <span className="font-medium text-white">{SITE.phone}</span>
        </a>
      </div>
    </div>
  );
};

export const SpanishBanner = () => {
  return (
    <div className="bg-primary text-white py-1.5 text-sm hidden lg:block">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="font-medium tracking-wide">
          ¡Hablamos Español! — We Speak Spanish
        </span>
      </div>
    </div>
  );
};
