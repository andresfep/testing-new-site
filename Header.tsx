import { Button } from "./button";
import { useQuoteModal } from "./QuoteModal";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "./sheet";
import { useState } from "react";
import { SITE, SERVICES, AREAS } from "./site";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const { openModal } = useQuoteModal();
  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={SITE.logo}
            alt="CrashFIX at Williamson on 26th logo"
            className="h-12 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Centered Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 gap-6 xl:gap-8 text-sm font-medium text-gray-600 px-4">
          <Link
            to="/"
            className="text-gray-900 hover:text-primary transition-colors whitespace-nowrap"
          >
            Home
          </Link>
          <div className="relative group">
            <button className="hover:text-primary transition-colors flex items-center gap-1 py-4 whitespace-nowrap">
              Services <span className="text-xs">▼</span>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[240px] border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 max-h-[70vh] overflow-y-auto">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-primary"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group">
            <button className="hover:text-primary transition-colors flex items-center gap-1 py-4 whitespace-nowrap">
              Service Areas <span className="text-xs">▼</span>
            </button>
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md min-w-[220px] border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 max-h-[70vh] overflow-y-auto">
              {AREAS.map((a) => (
                <Link
                  key={a.slug}
                  to={`/${a.slug}`}
                  className="block px-4 py-2 hover:bg-gray-50 hover:text-primary"
                >
                  {a.shortName}, {SITE.state}
                </Link>
              ))}
            </div>
          </div>
          <Link
            to="/about-us"
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            Gallery
          </Link>
          <Link
            to="/reviews"
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            Reviews
          </Link>
          <Link
            to="/release-form"
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            Release Form
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors whitespace-nowrap"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Button
            onClick={() => openModal()}
            variant="outline"
            className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold px-6 h-12 text-base whitespace-nowrap"
          >
            Get Free Quote
          </Button>
          <a href={SITE.phoneHref}>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold gap-2 px-6 h-12 text-base shadow-sm whitespace-nowrap">
              <Phone className="w-5 h-5 text-white" />
              {SITE.phone}
            </Button>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white pt-12 overflow-y-auto"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-sm transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-50 text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <span className="sr-only">Close</span>
              </button>
              <nav className="flex flex-col gap-4 text-lg font-medium text-gray-900">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b"
                >
                  Home
                </Link>
                <div className="flex flex-col py-2 border-b">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full text-left hover:text-primary transition-colors"
                  >
                    Services
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="flex flex-col gap-2 mt-2 pl-4 text-base">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/${s.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="hover:text-primary transition-colors py-1"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex flex-col py-2 border-b">
                  <button
                    onClick={() => setAreasOpen(!areasOpen)}
                    className="flex items-center justify-between w-full text-left hover:text-primary transition-colors"
                  >
                    Service Areas
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${areasOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {areasOpen && (
                    <div className="flex flex-col gap-2 mt-2 pl-4 text-base">
                      {AREAS.map((a) => (
                        <Link
                          key={a.slug}
                          to={`/${a.slug}`}
                          onClick={() => setIsOpen(false)}
                          className="hover:text-primary transition-colors py-1"
                        >
                          {a.shortName}, {SITE.state}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  to="/about-us"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b"
                >
                  About
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b"
                >
                  Gallery
                </Link>
                <Link
                  to="/reviews"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b"
                >
                  Reviews
                </Link>
                <Link
                  to="/release-form"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b"
                >
                  Release Form
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-primary transition-colors py-2 border-b"
                >
                  Contact
                </Link>
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    openModal();
                  }}
                  variant="outline"
                  className="bg-white hover:bg-gray-50 text-primary border-2 border-primary font-bold w-full mt-4"
                >
                  Get Free Quote
                </Button>
                <a href={SITE.phoneHref}>
                  <Button className="bg-primary hover:bg-primary/90 text-white font-bold gap-2 w-full mt-3">
                    <Phone className="w-5 h-5 text-white" />
                    {SITE.phone}
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
