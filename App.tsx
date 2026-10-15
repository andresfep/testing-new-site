import { Toaster } from "./toaster";
import { Toaster as Sonner } from "./sonner";
import { TooltipProvider } from "./tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./Index";
import ServicePage from "./ServicePage";
import ServiceAreaPage from "./ServiceAreaPage";
import NotFound from "./NotFound";

import Contact from "./Contact";
import ThankYou from "./ThankYou";
import ReviewsPage from "./ReviewsPage";
import GalleryPage from "./GalleryPage";
import AboutUsPage from "./AboutUsPage";
import { QuoteModalProvider } from "./QuoteModal";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import ReviewEmbed from "./ReviewEmbed";
import MarketingEmbed from "./MarketingEmbed";
import DiscountEmbed from "./DiscountEmbed";
import ReleaseForm from "./ReleaseForm";
import { NotificationBar, SpanishBanner } from "./NotificationBar";
import { Header } from "./Header";
import { MobileFooter } from "./MobileFooter";
import { ScrollToTop } from "./ScrollToTop";
import { SERVICES, AREAS } from "./site";

const queryClient = new QueryClient();

const bareRoutes = ["/review", "/marketing", "/get-your-discount"];

const ConditionalChrome = () => {
  const location = useLocation();
  if (bareRoutes.includes(location.pathname)) return null;
  return (
    <>
      <div className="sticky top-0 z-50 bg-background">
        <NotificationBar />
        <Header />
        <SpanishBanner />
      </div>
      <MobileFooter />
    </>
  );
};

const serviceRoutes = SERVICES.map((s) => (
  <Route
    key={s.slug}
    path={`/${s.slug}`}
    element={<ServicePage slug={s.slug} />}
  />
));

const areaRoutes = AREAS.map((a) => (
  <Route
    key={a.slug}
    path={`/${a.slug}`}
    element={<ServiceAreaPage slug={a.slug} />}
  />
));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <QuoteModalProvider>
          <div className="min-h-screen bg-background">
            <ConditionalChrome />
            <div>
              <Routes>
                <Route path="/" element={<Index />} />
                {serviceRoutes}
                {areaRoutes}
                <Route path="/contact" element={<Contact />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/marketing" element={<MarketingEmbed />} />
                <Route path="/review" element={<ReviewEmbed />} />
                <Route path="/get-your-discount" element={<DiscountEmbed />} />
                <Route path="/release-form" element={<ReleaseForm />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
