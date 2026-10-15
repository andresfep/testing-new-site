import { SITE } from "./site";

export const AboutUsContent = () => {
  return (
    <section className="py-24 bg-white text-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-8 space-y-16">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Our story
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {SITE.businessName} is a family-owned auto repair and body shop
                in {SITE.city}, serving the community since 1971. Originally
                founded as Williamson Body Shop, we provide collision repair,
                auto body repair, paint refinishing, frame and structural
                repair, insurance claim assistance, and estimates. We work with
                all insurance companies and offer bilingual service. Our
                facility has secure storage for 50+ vehicles, tall bays for
                high-roof vehicles, and a lifetime repair warranty.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                How we work
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We offer estimates by appointment and work with all insurance
                companies, handling the estimate, adjuster, and paperwork on
                your behalf. Every repair is backed by our Lifetime Warranty —
                if a defect in our materials or labor appears, bring it back and
                we'll make it right. We offer competitive rates and exceptional
                bilingual customer service, in English and Spanish.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                What services we provide
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We specialize in Auto Body Collision Repair, Paint,
                Frame/Unibody Aligning & Insurance Claim Assistance. Our
                services also cover fleet wholesale repair, rust repair,
                mechanical repairs, inspections, car paint refinishing, unibody
                frame pull and repair, and bring-your-own part repair. We work
                on all makes and models, and our tall bays accommodate high-roof
                vehicles.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">
                Standards and guarantees
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our work is backed by a Lifetime Warranty. We offer competitive
                rates and exceptional bilingual customer service, and our indoor
                space and outdoor gated lot can accommodate over 50 cars — all
                equipped with surveillance cameras. Out of Pocket, Fleet &
                Wholesale pricing is available. Ask about deductible savings and
                price match programs!
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-8 sticky top-32">
              <h3 className="text-2xl font-heading font-bold mb-6">
                At a glance
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Since 1971</p>
                    <p className="text-sm text-slate-600">
                      locally owned & operated in {SITE.city}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Lifetime Warranty
                    </p>
                    <p className="text-sm text-slate-600">
                      on all body, paint & frame work
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">
                      Bilingual service
                    </p>
                    <p className="text-sm text-slate-600">
                      English & Spanish customer care
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">50+ car capacity</p>
                    <p className="text-sm text-slate-600">
                      indoor & gated lot, camera-monitored
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{SITE.street}</p>
                    <p className="text-sm text-slate-600">{SITE.streetCity}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
