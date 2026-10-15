import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Label } from "./label";
import { Lock, Phone } from "lucide-react";
import { postTrackingEvent } from "./tracking";
import { SITE } from "./site";

interface QuoteModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(
  undefined,
);

export const useQuoteModal = () => {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
};

const formatPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  return d.length > 6
    ? `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`
    : d.length > 3
      ? `(${d.slice(0, 3)}) ${d.slice(3)}`
      : d.length > 0
        ? `(${d}`
        : "";
};

const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = formatPhone(e.target.value);
};

export const QuoteModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <QuoteModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white text-slate-900 border-slate-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-slate-900">
              Request Quote
            </DialogTitle>
            <DialogDescription className="text-center text-slate-500">
              Takes less than 60 seconds
            </DialogDescription>
          </DialogHeader>

          <form
            className="space-y-4 mt-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);

              postTrackingEvent(
                {
                  type: "external_form_submission",
                  timestamp: Date.now(),
                  formId: "quote form",
                  formData: {
                    full_name: formData.get("name"),
                    phone: formData.get("phone"),
                    email: formData.get("email"),
                  },
                  formLabels: {
                    full_name: "Full Name",
                    phone: "Phone",
                    email: "Email",
                  },
                  url: window.location.href,
                  title: document.title,
                  path: window.location.pathname,
                  userAgent: navigator.userAgent,
                  trackingId: "tk_da7e31b94d6e4349bfca5fcad8d57134",
                  locationId: "8FDxOJay7azO4EdDwUZw",
                  sessionId: crypto.randomUUID(),
                  properties: {
                    deviceType: /Mobile|Android|iPhone/i.test(
                      navigator.userAgent,
                    )
                      ? "mobile"
                      : "desktop",
                  },
                },
                {
                  customFields: {
                    nbROqzsy7dgGlVZc2UyB: {
                      value: formData.get("service"),
                      label: "Service",
                    },
                    NggyD435SXDPi8TM3gM0: {
                      value: formData.get("vehicle"),
                      label: "Vehicle",
                    },
                    QYzFS87j9JN15XJcObLN: {
                      value: formData.get("message"),
                      label: "Your Message",
                    },
                  },
                },
              );

              closeModal();
              navigate("/thank-you");
            }}
          >
            <div className="space-y-3">
              <Input
                name="name"
                placeholder="John Smith*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="(555) 555-1234*"
                required
                onChange={handlePhoneInput}
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
              />
              <Input
                name="email"
                type="email"
                placeholder="your@email.com*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
              />
              <Input
                name="service"
                placeholder="What service do you need?"
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
              />
              <Input
                name="vehicle"
                placeholder="What vehicle do you have?"
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400"
              />
              <Textarea
                name="message"
                placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available***"
                className="min-h-[100px] bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 resize-none"
              />
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="terms-modal"
                required
                className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label
                htmlFor="terms-modal"
                className="text-xs text-gray-500 font-normal leading-tight"
              >
                I agree to terms &amp; conditions provided by the company. By
                providing my phone number, I agree to receive text messages from
                the business.
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-md mt-2 font-bold"
            >
              Submit
            </Button>
            <p className="text-center text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3" />
              No obligation. We will review your info and follow up fast.
            </p>
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 w-full bg-transparent border-2 border-slate-300 hover:border-primary text-slate-700 hover:text-primary font-semibold px-6 py-3 text-sm rounded transition-all"
            >
              <Phone className="w-4 h-4" />
              Call {SITE.phone}
            </a>
          </form>
        </DialogContent>
      </Dialog>
    </QuoteModalContext.Provider>
  );
};
