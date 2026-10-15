import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SITE, SERVICES, AREAS } from "./site";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 text-slate-900 pt-16 pb-16 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={SITE.logo}
                alt="CrashFIX at Williamson on 26th logo"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-600 leading-relaxed">
              Indianapolis's trusted auto body repair shop for over 55 years.
              Collision, frame, paint, and rust repair done right on E 26th St —
              proudly serving central Indiana drivers.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/williamsonon26th"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-600"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/crashfix26/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-600"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6 lg:col-span-1 lg:px-4">
            <p className="text-lg font-bold text-slate-900 uppercase tracking-wider">
              Quick Links
            </p>
            <ul className="space-y-3 text-slate-600">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:text-primary transition-colors block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-primary transition-colors block"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="hover:text-primary transition-colors block"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/release-form"
                  className="hover:text-primary transition-colors block"
                >
                  Release Form
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6 lg:col-span-1 lg:px-4">
            <p className="text-lg font-bold text-slate-900 uppercase tracking-wider">
              Our Services
            </p>
            <ul className="space-y-3 text-slate-600">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="hover:text-primary transition-colors block"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6 lg:col-span-1">
            <p className="text-lg font-bold text-slate-900 uppercase tracking-wider">
              Contact Us
            </p>
            <div className="space-y-4 text-slate-600">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p>{SITE.street}</p>
                  <p>{SITE.streetCity}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a
                  href={SITE.phoneHref}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: Closed</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Service Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {AREAS.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/${a.slug}`}
                    className="text-xs text-slate-500 hover:text-primary transition-colors"
                  >
                    {a.shortName}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE.businessName}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
