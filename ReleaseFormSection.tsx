import { useState } from "react";
import { FileSignature } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";
import { useNavigate } from "react-router-dom";
import { postTrackingEvent } from "./tracking";

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

export const ReleaseFormSection = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<"English" | "Spanish">("English");

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Info / Instructions */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0 mb-5">
                <FileSignature className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 font-sora">
                Before We Start on Your Car
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Hey there — before we can begin work on your vehicle, we need
                your signed authorization on file. This release form gives us
                permission to inspect, repair, and release your vehicle, and it
                keeps everything transparent from day one.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Fill out the form on the right and choose whether you'd like to
                receive the release document in <strong>English</strong> or{" "}
                <strong>Spanish</strong>. We'll send the full form to your email
                so you can sign it electronically — no printing, no trip to the
                shop required.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Once we have your signed authorization back, we'll get started
                right away. Have questions? Call us and we'll walk you through
                it.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm h-fit">
            <h2 className="text-3xl font-heading font-extrabold text-slate-900 mb-3">
              Request Your Release Form
            </h2>
            <p className="text-slate-600 mb-6">
              Tell us about you and your vehicle. Choose your preferred language
              and we'll send the authorization form to sign electronically.
            </p>

            {/* Language Selector */}
            <div className="mb-6">
              <p className="text-sm font-bold text-slate-700 mb-2">
                Form Language
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setLanguage("English")}
                  className={`h-12 rounded-lg border-2 font-bold transition-colors ${
                    language === "English"
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 bg-gray-50 text-slate-700 hover:border-primary/50"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("Spanish")}
                  className={`h-12 rounded-lg border-2 font-bold transition-colors ${
                    language === "Spanish"
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 bg-gray-50 text-slate-700 hover:border-primary/50"
                  }`}
                >
                  Spanish
                </button>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);

                postTrackingEvent(
                  {
                    type: "external_form_submission",
                    timestamp: Date.now(),
                    formId: "Authorization Form",
                    formData: {
                      full_name: formData.get("name"),
                      phone: formData.get("phone"),
                    },
                    formLabels: {
                      full_name: "Full Name",
                      phone: "Phone",
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
                      // Form Language
                      "0sjFEjmiCCkAZal6R720": {
                        value: language,
                        label: "Form Language",
                      },
                    },
                  },
                );

                navigate("/thank-you");
              }}
            >
              <Input
                name="name"
                placeholder="Full Name*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Phone*"
                required
                className="bg-gray-50 border-gray-200 text-slate-900 placeholder:text-gray-400 h-12"
                onChange={(e) => {
                  e.currentTarget.value = formatPhone(e.currentTarget.value);
                }}
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg font-bold mt-4"
              >
                Send Me the Release Form
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
