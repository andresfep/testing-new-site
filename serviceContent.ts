import { SITE } from "./site";

export interface ServiceContentData {
  slug: string;
  serviceName: string;
  title: string;
  subheadline: string;
  whatIs: string[];
  whyMatters: string[];
  whenConsider: string;
  includedHeading: string;
  includedIntro: string;
  includedItems: { label: string; desc: string }[];
  subServices: { title: string; body: string }[];
  dueIntro: string;
  warningSigns: { title: string; desc: string }[];
  highUseNote: string;
  nearCity: string;
  faqs: { question: string; answer: string }[];
  faqIntro: string;
  locationParagraphs: string[];
}

const C = SITE.city;
const ST = SITE.state;
const BIZ = SITE.businessName;

export const SERVICE_CONTENT: Record<string, ServiceContentData> = {
  "auto-body-repair": {
    slug: "auto-body-repair",
    serviceName: "Auto Body Repair",
    title: `Auto Body Repair in ${C}, ${ST}`,
    subheadline: `Dents, dings, panel damage, and structural bodywork — repaired and refinished to factory condition by ${BIZ}. Your vehicle restored right, quoted before we start.`,
    whatIs: [
      `Auto body repair is the full repair and restoration of your vehicle's exterior and structural components after damage. We fix dents, dings, creases, panel damage, and structural issues across the body — doors, fenders, quarter panels, bumpers, hoods, and the underlying framework that keeps your vehicle safe in a crash.`,
      `At ${BIZ}, we handle the complete process in-house: damage assessment, panel repair or replacement, body filler work, sanding, corrosion treatment, and paint refinishing. Because we own the whole process, there's no hand-off between shops and no guessing about who's responsible for what.`,
      `We serve drivers across ${C} and the surrounding central Indiana communities — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, Fountain Square, and Plainfield. The stop-and-go traffic on Sherman Ave, winter salt on I-465, and tight parking near downtown all take a toll on vehicle bodies, and we see the full range of that damage every week.`,
    ],
    whyMatters: [
      `Body damage isn't just cosmetic. A dented panel can trap moisture and accelerate rust, a misaligned bumper can reduce crash protection, and structural damage can throw off handling and tire wear. Left alone, small damage compounds into bigger, more expensive problems.`,
      `Catching body damage early is the cheaper path every time. A dent repaired before the paint cracks stays a dent repair; once corrosion sets in, you're looking at rust treatment, panel replacement, and a full refinish. Acting early protects your vehicle's value and your safety.`,
    ],
    whenConsider: `Bring your vehicle in for a body repair assessment any time you notice visible damage after an incident — a fender bender, a parking-lot ding, hail, or road debris. Even if the damage looks minor, a quick inspection confirms whether anything structural shifted underneath.`,
    includedHeading: "What's Included in Auto Body Repair",
    includedIntro: `Every auto body repair at ${BIZ} covers the following, tailored to your vehicle's specific damage:`,
    includedItems: [
      {
        label: "Damage Assessment",
        desc: "A full inspection of visible and hidden damage, including structural checks behind the panels.",
      },
      {
        label: "Panel Repair or Replacement",
        desc: "Dents pulled, creases worked out, or damaged panels replaced when repair isn't viable.",
      },
      {
        label: "Body Filler & Sanding",
        desc: "Surfaces feathered smooth and sanded to match the original contours of the panel.",
      },
      {
        label: "Corrosion Treatment",
        desc: "Bare metal treated and sealed to stop rust before the refinish goes on.",
      },
      {
        label: "Paint Refinishing",
        desc: "Color-matched basecoat and clearcoat blended to match the rest of the vehicle.",
      },
      {
        label: "Final Inspection",
        desc: "Panel alignment, gap checks, and a quality pass before the vehicle leaves the shop.",
      },
    ],
    subServices: [
      {
        title: "Dent & Ding Repair",
        body: `From parking-lot dings to larger dents, we work the metal back to shape using a mix of traditional body hammer techniques, panel pulling, and precision filler. The goal is a surface that matches the original panel contour so the refinish blends invisibly with the surrounding paint.`,
      },
      {
        title: "Panel Replacement",
        body: `When a panel is too damaged to repair — a crushed fender, a torn quarter panel, a cracked bumper cover — we replace it with an OEM or quality aftermarket part and fit it to factory alignment specs. Proper gaps and flush fitment are what separate a good repair from a visible one.`,
      },
      {
        title: "Surface Preparation",
        body: `The refinish only lasts if the prep is right. We strip, sand, clean, and treat every surface before paint touches it, feathering edges and sealing bare metal so the new finish adheres properly and corrosion can't creep underneath.`,
      },
    ],
    dueIntro: `Watch for these signs that your vehicle needs body repair attention:`,
    warningSigns: [
      {
        title: "Visible Dents or Creases",
        desc: "Any depression in a panel, large or small, that changes the surface contour.",
      },
      {
        title: "Cracked or Chipped Paint",
        desc: "Paint damage exposes bare metal to moisture — the starting point for rust.",
      },
      {
        title: "Misaligned Panels or Gaps",
        desc: "Doors, hood, or trunk that don't line up suggest underlying structural shift.",
      },
      {
        title: "Rust Spots",
        desc: "Bubbling or discoloration under the paint means corrosion is already underway.",
      },
      {
        title: "Bumper Damage",
        desc: "Cracks, scuffs, or loose bumpers that compromise both looks and crash protection.",
      },
      {
        title: "Unusual Wind Noise",
        desc: "New whistling at speed can point to a panel or seal out of alignment.",
      },
    ],
    highUseNote: `Vehicles that rack up high mileage on ${C}'s commuter corridors — I-465, I-70, Sherman Ave — or that park in tight downtown and Broad Ripple lots tend to collect more dings and road-debris damage. Fleet vehicles and daily drivers benefit from more frequent body inspections to catch small damage before it spreads.`,
    nearCity: `${BIZ} provides expert auto body repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, Fountain Square, and Plainfield restore their vehicles after collisions, dents, and everyday damage — with quality bodywork and seamless paint refinishing.`,
    faqs: [
      {
        question: "How long does a typical auto body repair take?",
        answer: `It depends on the extent of the damage. A single dent or panel refinish can take a few days, while multi-panel collision repair with structural work can take a week or more. We give you a realistic timeline up front and keep you updated throughout.`,
      },
      {
        question: "Will the paint match the rest of my vehicle?",
        answer: `Yes. We color-match the basecoat to your vehicle's specific paint code and blend the repair into the surrounding panels so the finish is seamless. Modern color-matching tools and proper clearcoat application make the repair virtually invisible.`,
      },
      {
        question: "Do I need to get multiple estimates?",
        answer: `You're welcome to, but you're not required to. You have the right to choose your repair shop regardless of what your insurance company suggests. We provide free written estimates so you can compare confidently.`,
      },
      {
        question: "Can you repair aluminum body panels?",
        answer: `Yes. We have the equipment and training to repair both steel and aluminum body panels, which require different tools and techniques to avoid contamination and ensure proper welds and repairs.`,
      },
      {
        question: "What if new damage is found during the repair?",
        answer: `If we uncover hidden damage once the vehicle is disassembled, we document it, contact you and your insurance company, and adjust the estimate before proceeding. You're never surprised by a higher bill.`,
      },
      {
        question: "Do you guarantee your body repair work?",
        answer: `We stand behind our workmanship. If a defect in materials or labor appears in our repair, bring it back and we'll make it right. That's been our policy for over 55 years.`,
      },
    ],
    faqIntro: `Auto body repair restores both the look and the structural integrity of your vehicle. Explore our services in ${C}, ${ST} for related options like collision repair and paint refinishing. Our team helps you choose the right repair based on your vehicle's damage.`,
    locationParagraphs: [
      `${BIZ} provides expert auto body repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, Fountain Square, and Plainfield restore their vehicles with professional bodywork and paint refinishing.`,
      `Body damage is common in central Indiana due to winter weather, road debris on I-465 and I-70, and tight parking around downtown ${C}. Whether you're dealing with a dent, a cracked bumper, or rust spots, our team ensures your vehicle looks and performs like it should.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "collision-repair": {
    slug: "collision-repair",
    serviceName: "Collision Repair",
    title: `Collision Repair in ${C}, ${ST}`,
    subheadline: `Post-accident reconstruction — frame, panels, and bumpers realigned and replaced to pre-crash condition. ${BIZ} gets your vehicle back on the road safely.`,
    whatIs: [
      `Collision repair is the full reconstruction of a vehicle after an accident. Where auto body repair handles surface and panel damage, collision repair deals with the structural and mechanical consequences of an impact — frame or unibody realignment, displaced panels, damaged bumpers, and the cascade of components that shift when a vehicle absorbs a crash.`,
      `At ${BIZ}, our collision repair process starts with a complete teardown and structural measurement. We use frame-measuring equipment to check your vehicle against factory tolerances, identify every point of damage — visible and hidden — and build a repair plan that restores both the structure and the exterior to pre-accident condition.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Fishers, Lawrence, Beech Grove, Speedway, Broad Ripple, and Plainfield. With heavy traffic on I-465, I-70, and the Sherman Ave corridor, collisions happen, and we've spent over 55 years repairing them.`,
    ],
    whyMatters: [
      `A collision doesn't just bend metal — it can compromise your vehicle's crash structure, alignment, and safety systems. A frame that's a few millimeters off spec affects handling, tire wear, and how the vehicle performs in a future impact. Driving a poorly repaired vehicle is a risk you don't want to take.`,
      `Proper collision repair protects both your safety and your vehicle's value. A correctly restored vehicle drives straight, wears evenly, and holds its resale value. A shortcut repair hides problems that surface later as uneven tire wear, alignment issues, or failed safety systems — and costs more to fix the second time.`,
    ],
    whenConsider: `Bring your vehicle in for collision repair after any accident, even a low-speed one. Some structural damage isn't visible from the outside — a frame can shift without obvious exterior signs. If your vehicle was in a collision, a professional structural inspection is the only way to know what moved.`,
    includedHeading: "What's Included in Collision Repair",
    includedIntro: `Every collision repair at ${BIZ} covers the following, based on your vehicle's specific impact damage:`,
    includedItems: [
      {
        label: "Structural Inspection",
        desc: "Frame or unibody measured against factory tolerances to identify every point of shift.",
      },
      {
        label: "Frame Straightening",
        desc: "Precision pulling on a dedicated rack to restore original dimensions and alignment.",
      },
      {
        label: "Panel Replacement",
        desc: "Damaged panels, bumpers, and structural components replaced with OEM or quality parts.",
      },
      {
        label: "Mechanical Checks",
        desc: "Suspension, steering, and drivetrain inspected for impact-related damage.",
      },
      {
        label: "Paint Refinishing",
        desc: "Replaced and repaired panels refinished to match the rest of the vehicle.",
      },
      {
        label: "Safety System Reset",
        desc: "Sensors, airbag components, and safety systems checked and recalibrated.",
      },
    ],
    subServices: [
      {
        title: "Structural Realignment",
        body: `After a collision, the frame or unibody often shifts from factory position. We use computerized measuring and hydraulic pulling equipment to bring every measurement back to spec, ensuring your vehicle drives straight and crumples correctly in a future impact.`,
      },
      {
        title: "Panel & Bumper Reconstruction",
        body: `Impact damage typically crushes bumpers, fenders, hoods, and doors. We replace what can't be safely repaired and realign what can, restoring proper panel gaps, fitment, and the energy-absorbing function of your bumpers and crash structure.`,
      },
      {
        title: "Mechanical & Safety Checks",
        body: `A collision can knock steering, suspension, and sensors out of alignment even when the damage looks cosmetic. We inspect and test every affected mechanical and safety system so your vehicle handles correctly and its airbags, sensors, and crumple zones work as designed.`,
      },
    ],
    dueIntro: `After any collision, watch for these signs that your vehicle needs professional reconstruction:`,
    warningSigns: [
      {
        title: "Vehicle Pulls to One Side",
        desc: "Steering drift after a collision often points to frame or suspension misalignment.",
      },
      {
        title: "Uneven Tire Wear",
        desc: "Newly uneven wear suggests the alignment or structure shifted in the impact.",
      },
      {
        title: "Gaps in Panel Fitment",
        desc: "Doors, hood, or trunk that no longer line up indicate underlying structural movement.",
      },
      {
        title: "Unusual Noises",
        desc: "New rattles, creaks, or clunks can signal displaced or damaged components.",
      },
      {
        title: "Airbag Warning Light",
        desc: "An illuminated airbag light means the safety system detected an issue that needs diagnosis.",
      },
      {
        title: "Visible Structural Damage",
        desc: "Any bent, crushed, or displaced frame or structural member requires immediate inspection.",
      },
    ],
    highUseNote: `Vehicles driven daily on ${C}'s high-traffic corridors — I-465, I-70, Sherman Ave — face higher collision risk. Fleet vehicles and commuter cars that accumulate stop-and-go miles benefit from a thorough post-accident inspection even after minor bumps, since low-speed impacts can still shift structural components.`,
    nearCity: `${BIZ} provides expert collision repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Fishers, Lawrence, Beech Grove, Speedway, Broad Ripple, and Plainfield restore their vehicles to pre-accident condition after collisions of every severity.`,
    faqs: [
      {
        question: "Do I have to use the repair shop my insurance recommends?",
        answer: `No. You have the legal right to choose your own collision repair shop, regardless of what your insurance company suggests. We work with all major insurers and can handle the estimate, adjuster communication, and paperwork on your behalf.`,
      },
      {
        question: "How long does collision repair take?",
        answer: `It depends on the severity. Minor collision repairs may take a few days, while major structural reconstruction with multiple panel replacements can take two weeks or more. We provide a clear timeline after the initial assessment and keep you updated.`,
      },
      {
        question: "Will my vehicle drive the same after collision repair?",
        answer: `Yes, when the repair is done correctly. We restore the frame to factory tolerances and check all mechanical and safety systems, so your vehicle handles, steers, and protects you exactly as it did before the accident.`,
      },
      {
        question: "Can you match the paint after collision repair?",
        answer: `Absolutely. We color-match to your vehicle's paint code and blend the refinish into surrounding panels. With proper prep and clearcoat, the repaired areas are indistinguishable from the original finish.`,
      },
      {
        question: "What if hidden damage is found during the repair?",
        answer: `It's common to find hidden damage once a collision vehicle is disassembled. We document it, notify you and your insurer, and adjust the repair plan and estimate before continuing — no surprise charges.`,
      },
      {
        question: "Is collision repair covered by a warranty?",
        answer: `We stand behind our collision repair workmanship. If a defect in our materials or labor appears, bring the vehicle back and we'll correct it. We want you driving a vehicle that's safe and properly restored.`,
      },
    ],
    faqIntro: `Collision repair restores your vehicle's structure and safety after an accident. Explore our services in ${C}, ${ST} for related options like unibody frame repair and insurance claim assistance. Our team helps you navigate the repair process from estimate to delivery.`,
    locationParagraphs: [
      `${BIZ} provides expert collision repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Fishers, Lawrence, Beech Grove, Speedway, Broad Ripple, and Plainfield restore their vehicles to pre-accident condition.`,
      `Collisions are common on ${C}'s busy corridors — I-465, I-70, and Sherman Ave — where stop-and-go traffic and winter conditions increase accident risk. Our team ensures your vehicle's structure, panels, and safety systems are fully restored.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "insurance-claim-assistance": {
    slug: "insurance-claim-assistance",
    serviceName: "Insurance Claim Assistance",
    title: `Insurance Claim Assistance in ${C}, ${ST}`,
    subheadline: `We handle the estimate, the adjuster, and the paperwork so your insurance claim moves without the headache. ${BIZ} works directly with your carrier.`,
    whatIs: [
      `Insurance claim assistance is the support we provide to navigate the repair-claim process after an accident or damage event. Rather than leaving you to wrangle adjusters, supplements, and paperwork on your own, we act as your advocate — preparing the estimate, communicating with your insurance company, and managing the claim from start to finish.`,
      `At ${BIZ}, we work with all major insurance carriers. We write a detailed, line-item estimate, meet the adjuster on-site when needed, submit supplements for hidden damage, and track the claim through approval so repairs can start and finish without unnecessary delays.`,
      `We assist drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. With the volume of traffic on I-465 and I-70, insurance claims are a regular part of life here, and we've streamlined the process over 55 years of working with local and national carriers.`,
    ],
    whyMatters: [
      `Filing a collision claim can be confusing and time-consuming, and insurers don't always volunteer the full scope of covered repairs. Without an advocate, you risk settling for a quick estimate that misses hidden damage — and paying out of pocket later for problems the claim should have covered.`,
      `Having us manage the claim protects both your coverage and your repair quality. We make sure the estimate reflects the true scope of damage, supplements are filed for anything uncovered during teardown, and the repair is completed to proper standards — not just to the minimum the insurer prefers.`,
    ],
    whenConsider: `Reach out for claim assistance any time your vehicle sustains damage you plan to file through insurance — whether it's a collision, a comprehensive claim for hail or theft, or a parking-lot incident. The earlier we're involved, the smoother the claim runs.`,
    includedHeading: "What's Included in Insurance Claim Assistance",
    includedIntro: `Our claim assistance covers the full process from first call to final repair:`,
    includedItems: [
      {
        label: "Damage Estimate",
        desc: "A detailed, line-item estimate written to insurance standards and submitted to your carrier.",
      },
      {
        label: "Adjuster Coordination",
        desc: "We meet the adjuster on-site and walk through the damage to ensure nothing is missed.",
      },
      {
        label: "Supplement Filing",
        desc: "Hidden damage found during teardown is documented and submitted as a supplement.",
      },
      {
        label: "Claim Tracking",
        desc: "We follow the claim through approval and keep you informed at every step.",
      },
      {
        label: "Direct Billing",
        desc: "We bill your insurance directly for covered repairs, so you only pay your deductible.",
      },
      {
        label: "Final Documentation",
        desc: "You receive complete repair documentation for your records and the claim file.",
      },
    ],
    subServices: [
      {
        title: "Estimate Preparation",
        body: `We write a thorough, itemized estimate that reflects the real scope of damage — not a quick surface-level quote. A complete estimate up front means fewer supplements, faster approval, and a repair that actually fixes everything the impact affected.`,
      },
      {
        title: "Adjuster Communication",
        body: `We coordinate directly with your insurance adjuster, meeting on-site to review the damage and answer questions. Because we speak the adjuster's language and know what the policy covers, the claim moves faster and covers the full repair.`,
      },
      {
        title: "Supplement Management",
        body: `When teardown reveals hidden damage, we document it with photos and a supplement estimate, then submit it to the insurer for approval. We manage this back-and-forth so you don't have to chase the claim yourself.`,
      },
    ],
    dueIntro: `Consider claim assistance when any of these apply after vehicle damage:`,
    warningSigns: [
      {
        title: "You're Filing a Collision Claim",
        desc: "Any accident you plan to run through insurance benefits from professional estimate and adjuster coordination.",
      },
      {
        title: "The Adjuster's Estimate Seems Low",
        desc: "If the insurer's quote doesn't match the visible damage, a second estimate often uncovers missed items.",
      },
      {
        title: "Hidden Damage Is Suspected",
        desc: "Impacts that look minor can hide structural or mechanical damage beneath the panels.",
      },
      {
        title: "You're Unsure What's Covered",
        desc: "We clarify what your policy covers so you're not surprised by out-of-pocket costs.",
      },
      {
        title: "The Claim Is Stalling",
        desc: "Delays in approval often resolve with proactive follow-up and complete documentation.",
      },
      {
        title: "Multiple Parties Are Involved",
        desc: "Claims with other drivers or shared fault get complicated fast — advocacy helps.",
      },
    ],
    highUseNote: `Drivers who commute daily on ${C}'s high-traffic corridors — I-465, I-70, Sherman Ave — and fleet operators with multiple vehicles tend to file claims more often. For these drivers, having a shop that manages the claim end-to-end saves significant time and prevents coverage gaps.`,
    nearCity: `${BIZ} provides insurance claim assistance for drivers near ${C}, ${ST}. We help customers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield navigate the claim process and get their vehicles repaired under coverage.`,
    faqs: [
      {
        question: "Do I have to use the insurance company's preferred shop?",
        answer: `No. Indiana law gives you the right to choose your own repair shop. Your insurer can recommend a shop, but they cannot require you to use it. We work with all major carriers and will communicate directly with them on your behalf.`,
      },
      {
        question: "Will I have to pay anything out of pocket?",
        answer: `For a covered repair, you typically pay only your deductible. We bill your insurance directly for the covered portion. If you choose upgrades or non-covered work, we'll explain those costs before proceeding.`,
      },
      {
        question:
          "What if the insurance estimate is lower than the repair cost?",
        answer: `That's common, and it's why we file supplements. When teardown reveals damage the initial estimate missed, we document it and submit a supplement to the insurer for approval. You're not charged for covered damage the estimate didn't catch.`,
      },
      {
        question: "How long does the claim process take?",
        answer: `It varies by carrier and claim complexity. Simple claims may approve in a few days; claims with supplements or multiple parties can take longer. We track the claim actively and follow up to keep it moving.`,
      },
      {
        question: "Can you help with a claim that's already been denied?",
        answer: `We can review the estimate and damage to see if a supplement or reconsideration is warranted. While we can't guarantee a reversal, a complete, documented estimate often supports a successful supplement or appeal.`,
      },
      {
        question: "Do you handle both collision and comprehensive claims?",
        answer: `Yes. We assist with collision claims from accidents and comprehensive claims for hail, theft, vandalism, and other covered events. The process is similar — we prepare the estimate and coordinate with your insurer.`,
      },
    ],
    faqIntro: `Insurance claim assistance takes the stress out of the repair process after an accident. Explore our services in ${C}, ${ST} for related options like collision repair and auto body repair. Our team helps you get the full coverage your policy provides.`,
    locationParagraphs: [
      `${BIZ} provides insurance claim assistance for drivers near ${C}, ${ST}. We help customers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield navigate claims and get their vehicles repaired under coverage.`,
      `With heavy traffic on ${C}'s I-465, I-70, and Sherman Ave corridors, insurance claims are a regular need for local drivers. Our team coordinates with all major carriers to keep your claim moving.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "fleet-wholesale-repair": {
    slug: "fleet-wholesale-repair",
    serviceName: "Fleet Wholesale Repair",
    title: `Fleet Wholesale Repair in ${C}, ${ST}`,
    subheadline: `Volume body and collision repair for commercial fleets, with wholesale pricing and fast turnaround. ${BIZ} keeps your vehicles working.`,
    whatIs: [
      `Fleet wholesale repair is our volume body and collision repair service for businesses that operate multiple vehicles. We handle the same body, collision, and refinishing work as our retail service, but at wholesale pricing and with fleet-specific scheduling that keeps your vehicles on the road and your downtime to a minimum.`,
      `At ${BIZ}, we work with delivery vans, service trucks, company cars, and commercial fleets of all sizes. We establish a repair relationship that includes priority scheduling, consolidated billing, and a single point of contact so your fleet manager isn't chasing multiple shops.`,
      `We serve fleets across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. With the logistics and distribution traffic moving through the I-465 and I-70 corridors, fleet vehicles here accumulate damage faster than most, and we've built our wholesale program around keeping them moving.`,
    ],
    whyMatters: [
      `Every day a fleet vehicle sits in the shop, it's not earning. Standard retail repair timelines and pricing don't work for businesses running multiple vehicles — you need priority scheduling, predictable costs, and a shop that understands downtime is the real expense.`,
      `A fleet wholesale relationship lowers your per-vehicle repair cost and gets vehicles back in service faster. Consolidated billing simplifies your accounting, and a single trusted shop means consistent quality across your whole fleet — no surprises, no rework, no vehicles off the road longer than necessary.`,
    ],
    whenConsider: `Set up a fleet wholesale account when your business operates three or more vehicles, or when you're paying retail rates and retail timelines for body and collision repairs. The more vehicles you run, the more a wholesale relationship pays off.`,
    includedHeading: "What's Included in Fleet Wholesale Repair",
    includedIntro: `Our fleet wholesale program includes the following for every account:`,
    includedItems: [
      {
        label: "Wholesale Pricing",
        desc: "Volume-based rates on body, collision, and refinishing work across your fleet.",
      },
      {
        label: "Priority Scheduling",
        desc: "Fleet vehicles get priority bay time to minimize downtime.",
      },
      {
        label: "Single Point of Contact",
        desc: "One service advisor manages your account end-to-end.",
      },
      {
        label: "Consolidated Billing",
        desc: "Monthly invoicing across all vehicles for simpler accounting.",
      },
      {
        label: "Insurance Coordination",
        desc: "We manage collision claims and adjuster communication for fleet accidents.",
      },
      {
        label: "Condition Reporting",
        desc: "Photos and documentation of every vehicle's condition on arrival and completion.",
      },
    ],
    subServices: [
      {
        title: "Priority Fleet Scheduling",
        body: `Fleet vehicles get priority in our schedule so they spend less time off the road. When a delivery van or service truck comes in, we work it to the front of the queue and communicate a firm completion date so your operations can plan around it.`,
      },
      {
        title: "Consolidated Billing",
        body: `Instead of per-repair invoices scattered across vehicles and dates, fleet accounts receive consolidated monthly billing. Your accounting team gets one clean statement covering all repairs, with documentation attached — far less administrative overhead.`,
      },
      {
        title: "Accident Claim Management",
        body: `When a fleet vehicle is in a collision, we handle the insurance estimate, adjuster coordination, and supplement process just as we do for retail customers — but with the fleet manager in the loop. Your driver reports the accident; we handle the rest.`,
      },
    ],
    dueIntro: `A fleet wholesale account makes sense when you see any of these:`,
    warningSigns: [
      {
        title: "Multiple Vehicles in Rotation",
        desc: "Three or more company vehicles typically justify wholesale pricing and priority service.",
      },
      {
        title: "Frequent Collision Repairs",
        desc: "If fleet accidents happen regularly, a dedicated shop relationship streamlines the process.",
      },
      {
        title: "Retail Pricing Adding Up",
        desc: "Paying retail rates across many vehicles costs more than a wholesale arrangement.",
      },
      {
        title: "Downtime Hurting Operations",
        desc: "Vehicles off the road for too long directly impact your business revenue.",
      },
      {
        title: "Scattered Repair Shops",
        desc: "Using different shops for different vehicles creates inconsistent quality and billing.",
      },
      {
        title: "Complex Fleet Billing",
        desc: "Per-repair invoicing across a fleet creates administrative overhead a consolidated bill eliminates.",
      },
    ],
    highUseNote: `Fleets operating on ${C}'s logistics corridors — I-465, I-70, Sherman Ave — and businesses running daily delivery or service routes accumulate body and collision damage faster than average. For these operations, a wholesale relationship with priority scheduling is the difference between a vehicle off the road for a day versus a week.`,
    nearCity: `${BIZ} provides fleet wholesale repair for commercial vehicles near ${C}, ${ST}. We serve fleets operating in Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield with volume pricing and priority turnaround.`,
    faqs: [
      {
        question: "How many vehicles qualify for fleet wholesale pricing?",
        answer: `We typically set up fleet accounts for businesses operating three or more vehicles, but we're happy to discuss your situation. If you're running a smaller fleet with frequent repair needs, a wholesale relationship may still make sense.`,
      },
      {
        question: "Do you handle insurance claims for fleet vehicles?",
        answer: `Yes. When a fleet vehicle is in a collision, we manage the estimate, adjuster coordination, and supplement process, keeping your fleet manager informed throughout. Your driver reports the accident and we handle the repair and the claim.`,
      },
      {
        question: "How fast can you turn around a fleet vehicle?",
        answer: `Fleet vehicles get priority scheduling to minimize downtime. Turnaround depends on the repair scope — minor bodywork may take a day or two, while collision reconstruction takes longer. We give you a firm completion date up front.`,
      },
      {
        question: "Can you bill monthly across all our vehicles?",
        answer: `Yes. Fleet accounts receive consolidated monthly billing covering all repairs, with documentation attached. This simplifies your accounting compared to per-repair invoices scattered across vehicles and dates.`,
      },
      {
        question: "Do you work on all types of commercial vehicles?",
        answer: `We handle body and collision repair on delivery vans, service trucks, company cars, and light commercial vehicles. If you have a specific vehicle type, let us know and we'll confirm we can service it.`,
      },
      {
        question: "Can you set up a single point of contact for our fleet?",
        answer: `Absolutely. Every fleet account gets a dedicated service advisor who manages your repairs, scheduling, and billing end-to-end, so you're not chasing different people for different vehicles.`,
      },
    ],
    faqIntro: `Fleet wholesale repair keeps your commercial vehicles on the road at volume pricing. Explore our services in ${C}, ${ST} for related options like collision repair and auto body repair. Our team builds a repair program around your fleet's needs.`,
    locationParagraphs: [
      `${BIZ} provides fleet wholesale repair for commercial vehicles near ${C}, ${ST}. We serve fleets operating in Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield with volume pricing and priority turnaround.`,
      `With major logistics traffic on ${C}'s I-465 and I-70 corridors, fleet vehicles here accumulate damage quickly. Our wholesale program is built to keep commercial vehicles working with minimal downtime.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve fleets from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "rust-repair": {
    slug: "rust-repair",
    serviceName: "Rust Repair",
    title: `Rust Repair in ${C}, ${ST}`,
    subheadline: `Surface and structural rust cut out, treated, and refinished before corrosion spreads through the body. ${BIZ} stops rust at the source.`,
    whatIs: [
      `Rust repair is the removal and treatment of corrosion on a vehicle's body and structural components. We cut out rusted metal, treat the surrounding area to stop oxidation, weld in new metal or apply corrosion-resistant filler, and refinish the surface so the rust is gone — not just covered up.`,
      `At ${BIZ}, we handle both surface rust — the kind that bubbles under paint on rocker panels and wheel arches — and structural rust that compromises the integrity of frame rails, floor pans, and structural members. The approach depends on how deep the corrosion has gone.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. Indiana winters mean road salt on I-465, I-70, and local streets for months at a time, and that salt is the single biggest driver of the rust we see on vehicles here.`,
    ],
    whyMatters: [
      `Rust doesn't stop on its own — it spreads. What starts as a small bubble under the paint becomes a hole through the panel, then corrosion into the structural metal beneath. Surface rust left alone becomes structural rust, and structural rust compromises your vehicle's crash safety and integrity.`,
      `Treating rust early is dramatically cheaper. A surface rust spot treated and refinished is a small repair; the same area once it's eaten through the metal requires panel replacement, structural welding, and a full refinish. Acting at the first sign of corrosion saves both money and your vehicle's structural integrity.`,
    ],
    whenConsider: `Bring your vehicle in for a rust assessment any time you spot bubbling paint, discoloration, or visible corrosion — especially on rocker panels, wheel arches, door bottoms, and the undercarriage. Indiana's salt seasons make an annual rust check a smart move for any vehicle over a few years old.`,
    includedHeading: "What's Included in Rust Repair",
    includedIntro: `Every rust repair at ${BIZ} covers the following, based on how far the corrosion has spread:`,
    includedItems: [
      {
        label: "Rust Inspection",
        desc: "Full assessment of surface and structural corrosion across the body and undercarriage.",
      },
      {
        label: "Corrosion Removal",
        desc: "Rusted metal cut or ground out to expose clean, solid material.",
      },
      {
        label: "Surface Treatment",
        desc: "Bare metal treated with corrosion inhibitor to stop oxidation at the source.",
      },
      {
        label: "Metal Replacement",
        desc: "New metal welded in or corrosion-resistant filler applied where metal was lost.",
      },
      {
        label: "Sealing & Priming",
        desc: "Repaired area sealed and primed to block moisture from reaching bare metal.",
      },
      {
        label: "Paint Refinishing",
        desc: "Surface refinished and color-matched to blend with the surrounding panels.",
      },
    ],
    subServices: [
      {
        title: "Surface Rust Treatment",
        body: `Surface rust — the early stage where corrosion has bubbled the paint but not yet eaten through the metal — is the cheapest to fix. We remove the affected paint and rust, treat the bare metal, and refinish the area so the corrosion is eliminated and the panel looks new again.`,
      },
      {
        title: "Structural Rust Repair",
        body: `When rust has penetrated into structural metal — frame rails, floor pans, structural panels — we cut out the compromised metal and weld in replacement sections. This restores the structural integrity your vehicle needs to be safe in a crash, not just look better.`,
      },
      {
        title: "Undercarriage Protection",
        body: `The undercarriage takes the brunt of road salt. After rust repair, we can apply protective coatings to the treated and surrounding areas to slow future corrosion. This is especially valuable for vehicles that regularly drive Indiana's salted winter roads.`,
      },
    ],
    dueIntro: `Watch for these signs that your vehicle needs rust repair attention:`,
    warningSigns: [
      {
        title: "Bubbling Paint",
        desc: "Bubbles under the paint are the classic first sign of rust forming underneath.",
      },
      {
        title: "Discolored Spots",
        desc: "Brownish or orange discoloration on panels indicates surface corrosion.",
      },
      {
        title: "Visible Holes",
        desc: "Once rust eats through the metal, you'll see small holes — structural repair is needed.",
      },
      {
        title: "Flaking Undercarriage",
        desc: "Flaking rust on the frame or undercarriage signals advancing structural corrosion.",
      },
      {
        title: "Soft Spots in Floor",
        desc: "A floor pan that feels soft or spongy has rusted through from underneath.",
      },
      {
        title: "Rust at Panel Edges",
        desc: "Rocker panels, wheel arches, and door bottoms are where salt collects and rust starts.",
      },
    ],
    highUseNote: `Vehicles driven through Indiana's salted winters — especially daily commuters on I-465, I-70, and Sherman Ave — and older vehicles that have seen multiple salt seasons are at the highest risk for rust. For these vehicles, an annual undercarriage rust check catches corrosion while it's still surface-level and inexpensive to treat.`,
    nearCity: `${BIZ} provides expert rust repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield stop corrosion before it compromises their vehicles' bodies and structural integrity.`,
    faqs: [
      {
        question: "Can rust be permanently stopped?",
        answer: `Rust can be permanently removed and the area protected, but the only way to stop it is to cut out the corroded metal and treat what remains. Simply painting over rust doesn't work — the corrosion continues underneath. We remove the rust at the source and seal the area against moisture.`,
      },
      {
        question: "How do I know if rust is structural?",
        answer: `Structural rust affects frame rails, floor pans, and load-bearing panels — the metal that protects you in a crash. Surface rust is on exterior panels. We inspect both during assessment and let you know exactly what's cosmetic and what's structural before any work begins.`,
      },
      {
        question: "Why is rust so common in Indianapolis?",
        answer: `Indiana winters require road salt on I-465, I-70, and local streets for months at a time. That salt accelerates corrosion dramatically, especially on rocker panels, wheel arches, and the undercarriage where salt collects and sits. It's the single biggest cause of the rust we see.`,
      },
      {
        question: "Can you treat rust without replacing the panel?",
        answer: `If the rust is surface-level and hasn't eaten through the metal, we can remove the corrosion, treat the bare metal, and refinish the area without replacing the panel. Once rust has penetrated the metal, replacement or welding in new metal is necessary.`,
      },
      {
        question: "Should I treat rust on an older vehicle?",
        answer: `It depends on the vehicle's value and your plans for it. Treating rust early preserves both safety and value. For a vehicle you plan to keep, stopping rust is worthwhile. We'll give you an honest assessment of the repair scope and cost so you can decide.`,
      },
      {
        question: "Can you prevent rust from coming back?",
        answer: `After repair, we seal and prime the area to block moisture, and we can apply protective undercarriage coatings to slow future corrosion. No treatment makes a vehicle permanently immune to salt, but proper repair and protection significantly extend its life.`,
      },
    ],
    faqIntro: `Rust repair stops corrosion before it compromises your vehicle's safety and value. Explore our services in ${C}, ${ST} for related options like auto body repair and car paint refinishing. Our team helps you address rust at the right stage.`,
    locationParagraphs: [
      `${BIZ} provides expert rust repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield stop corrosion before it spreads.`,
      `Indiana's salted winters make rust a common problem on ${C}'s roads — I-465, I-70, and local streets see salt for months. Our team removes corrosion at the source and protects treated areas against future damage.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "mechanical-repairs": {
    slug: "mechanical-repairs",
    serviceName: "Mechanical Repairs",
    title: `Mechanical Repairs in ${C}, ${ST}`,
    subheadline: `Engine, brake, suspension, and drivetrain work handled in-house so your vehicle drives as good as it looks. ${BIZ} does both.`,
    whatIs: [
      `Mechanical repairs cover the working systems of your vehicle — the engine, brakes, suspension, steering, and drivetrain that make it go and stop safely. At a body shop, mechanical work often accompanies collision repair, since impacts frequently damage mechanical components hidden behind the body panels.`,
      `At ${BIZ}, we handle mechanical repairs both as part of collision reconstruction and as standalone service. Because we do both body and mechanical work under one roof, a vehicle that comes in for collision repair leaves with its mechanical systems checked and restored too — no second shop, no missed damage.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. The stop-and-go traffic on Sherman Ave and I-465, plus Indiana's freeze-thaw winters, put real wear on brakes, suspension, and steering components, and we see that wear every day.`,
    ],
    whyMatters: [
      `Mechanical systems are what keep you safe on the road. Worn brakes lengthen stopping distance, failing suspension affects handling and tire wear, and engine or drivetrain problems can leave you stranded. A vehicle that looks great but drives poorly is only half-fixed.`,
      `Catching mechanical wear early prevents both breakdowns and cascading damage. A worn brake pad is a cheap fix; the same pad worn to metal scores a rotor and doubles the repair cost. Regular mechanical inspection — especially after a collision — protects your safety and your wallet.`,
    ],
    whenConsider: `Bring your vehicle in for mechanical service when you notice performance changes — unusual noises, warning lights, changes in braking or handling — or after any collision, since impacts often damage mechanical components that aren't visible from outside.`,
    includedHeading: "What's Included in Mechanical Repairs",
    includedIntro: `Our mechanical repair service covers the following systems, based on your vehicle's needs:`,
    includedItems: [
      {
        label: "Brake Service",
        desc: "Pads, rotors, calipers, and fluid inspected and replaced to restore safe stopping.",
      },
      {
        label: "Suspension Repair",
        desc: "Shocks, struts, and worn components replaced to restore handling and ride quality.",
      },
      {
        label: "Steering Service",
        desc: "Tie rods, rack, and alignment checked and corrected for precise control.",
      },
      {
        label: "Engine Diagnostics",
        desc: "Codes read and engine issues diagnosed and repaired at the source.",
      },
      {
        label: "Drivetrain Service",
        desc: "Axles, CV joints, and drivetrain components inspected and repaired.",
      },
      {
        label: "Post-Collision Checks",
        desc: "Mechanical systems inspected for impact damage after any collision.",
      },
    ],
    subServices: [
      {
        title: "Brake Service",
        body: `Brakes are your vehicle's most important safety system. We service pads, rotors, calipers, and brake fluid — replacing worn components and restoring firm, reliable stopping power. Whether it's routine wear or collision-related damage, we get your brakes back to full performance.`,
      },
      {
        title: "Suspension & Steering",
        body: `Worn suspension and steering components cause poor handling, uneven tire wear, and a rough ride — and they're often damaged in collisions. We replace shocks, struts, tie rods, and related parts, then align the vehicle so it drives straight and true.`,
      },
      {
        title: "Engine & Drivetrain",
        body: `From check-engine diagnostics to drivetrain component replacement, we handle the mechanical systems that power your vehicle. Because we work alongside body and collision repair, we catch mechanical damage that a body-only shop would miss.`,
      },
    ],
    dueIntro: `Watch for these signs that your vehicle needs mechanical attention:`,
    warningSigns: [
      {
        title: "Squealing or Grinding Brakes",
        desc: "Noise when braking usually means worn pads — grinding means metal-on-metal.",
      },
      {
        title: "Soft Brake Pedal",
        desc: "A pedal that sinks or feels spongy points to air in the lines or fluid issues.",
      },
      {
        title: "Pulling or Drifting",
        desc: "The vehicle pulling to one side suggests alignment, brake, or suspension problems.",
      },
      {
        title: "Unusual Noises",
        desc: "Clunks, rattles, or whines often indicate worn suspension or drivetrain components.",
      },
      {
        title: "Warning Lights",
        desc: "Check-engine, ABS, or brake lights mean a system needs professional diagnosis.",
      },
      {
        title: "Rough Ride",
        desc: "A bouncy or harsh ride often points to worn shocks or struts.",
      },
    ],
    highUseNote: `Vehicles driven daily on ${C}'s stop-and-go corridors — I-465, I-70, Sherman Ave — wear brakes and suspension faster than highway cruisers. Fleet vehicles and older cars that have seen multiple Indiana winters benefit from more frequent mechanical inspections to catch wear before it becomes a breakdown.`,
    nearCity: `${BIZ} provides mechanical repairs for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield keep their vehicles running and driving safely.`,
    faqs: [
      {
        question: "Do you do mechanical work alongside collision repair?",
        answer: `Yes — that's one of our key advantages. Because we handle both body and mechanical work in-house, a vehicle in for collision repair gets its mechanical systems inspected and restored too. Impact damage to brakes, suspension, and steering is caught and fixed, not missed.`,
      },
      {
        question:
          "Can I bring my vehicle in for mechanical work without body damage?",
        answer: `Absolutely. We handle standalone mechanical repairs — brake service, suspension, steering, engine diagnostics, and drivetrain work — for any vehicle, whether or not it needs body repair. You don't need a collision to use our mechanical service.`,
      },
      {
        question: "How often should I have my brakes checked?",
        answer: `We recommend a brake inspection at least once a year, or any time you notice noise, a soft pedal, or longer stopping distances. Vehicles driven in ${C}'s stop-and-go traffic wear brakes faster and may need more frequent checks.`,
      },
      {
        question: "Do you diagnose check-engine lights?",
        answer: `Yes. We read the diagnostic codes and trace the issue to its source, then repair it properly rather than just clearing the light. Accurate diagnosis prevents repeated problems and unnecessary parts replacement.`,
      },
      {
        question: "Can collision damage affect mechanical systems?",
        answer: `Frequently. An impact can bend steering and suspension components, damage brakes, or shift the drivetrain — even when the body damage looks minor. That's why we inspect mechanical systems after every collision, not just the visible body damage.`,
      },
      {
        question: "Do you use quality replacement parts?",
        answer: `We use OEM parts or premium aftermarket equivalents that meet or exceed factory specifications. We'll walk you through the options for any repair so you can choose what fits your vehicle and budget, and we never substitute parts without telling you.`,
      },
    ],
    faqIntro: `Mechanical repairs keep your vehicle safe and running alongside our body and collision work. Explore our services in ${C}, ${ST} for related options like collision repair and inspections. Our team handles both body and mechanical systems under one roof.`,
    locationParagraphs: [
      `${BIZ} provides mechanical repairs for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield keep their vehicles running and driving safely.`,
      `Stop-and-go traffic on ${C}'s I-465, I-70, and Sherman Ave corridors wears brakes and suspension faster than highway driving. Our team catches mechanical wear early and restores performance after collisions.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  inspections: {
    slug: "inspections",
    serviceName: "Inspections",
    title: `Vehicle Inspections in ${C}, ${ST}`,
    subheadline: `Thorough pre-repair and post-repair inspections that confirm your vehicle is safe and road-ready. ${BIZ} checks what matters.`,
    whatIs: [
      `Vehicle inspections at ${BIZ} are comprehensive assessments of your vehicle's body, structural, and mechanical condition. We inspect before repairs to document the full scope of damage — visible and hidden — and after repairs to confirm the work meets safety and quality standards before the vehicle goes back on the road.`,
      `Our inspection process covers the body panels, structural frame or unibody, mechanical systems, safety components, and paint condition. We use measuring equipment to check structural tolerances and diagnostic tools to assess mechanical systems, so you get a complete picture of your vehicle's condition.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. Whether you're buying a used vehicle, assessing damage after an incident, or confirming a repair was done right, our inspections give you the facts.`,
    ],
    whyMatters: [
      `An inspection tells you the true condition of a vehicle — not just what's visible. Hidden structural damage, worn mechanical components, and previous poor repairs can all lurk beneath a clean exterior. Knowing what's really there protects your safety and your money.`,
      `Post-repair inspections confirm the work was done correctly and completely. A vehicle that looks fixed may still have underlying issues — a frame a few millimeters off spec, a safety system not recalibrated, or hidden damage the repair missed. A thorough inspection verifies the repair before you rely on it.`,
    ],
    whenConsider: `Schedule an inspection when buying a used vehicle, after any collision or incident, before a long trip, or after a repair performed elsewhere to confirm it was done correctly. For older vehicles, a periodic condition inspection catches wear and damage early.`,
    includedHeading: "What's Included in a Vehicle Inspection",
    includedIntro: `Our inspection covers the following, with a written report of findings:`,
    includedItems: [
      {
        label: "Body & Panel Check",
        desc: "All exterior panels inspected for damage, previous repairs, and alignment.",
      },
      {
        label: "Structural Measurement",
        desc: "Frame or unibody measured against factory tolerances to detect hidden shift.",
      },
      {
        label: "Mechanical Assessment",
        desc: "Engine, brakes, suspension, and steering evaluated for function and wear.",
      },
      {
        label: "Safety Systems",
        desc: "Airbags, sensors, and safety components checked for proper operation.",
      },
      {
        label: "Paint Condition",
        desc: "Paint inspected for prior refinish work, mismatch, or hidden damage.",
      },
      {
        label: "Written Report",
        desc: "You receive a documented report of all findings and recommendations.",
      },
    ],
    subServices: [
      {
        title: "Pre-Purchase Inspections",
        body: `Before you buy a used vehicle, we inspect it top to bottom — body, structure, mechanical, and safety systems — so you know exactly what you're getting. A pre-purchase inspection can reveal hidden damage or wear that turns a seeming deal into an expensive mistake.`,
      },
      {
        title: "Post-Repair Inspections",
        body: `After a repair performed elsewhere, we verify the work was done correctly and completely. We check structural alignment, panel fitment, mechanical function, and safety systems to confirm the vehicle is truly road-ready — not just cosmetically fixed.`,
      },
      {
        title: "Damage Assessments",
        body: `After an incident, we assess the full scope of damage — visible and hidden — to document what needs repair. This supports insurance claims, repair planning, and your decision about whether a vehicle is worth fixing.`,
      },
    ],
    dueIntro: `Consider an inspection when any of these apply:`,
    warningSigns: [
      {
        title: "Buying a Used Vehicle",
        desc: "A pre-purchase inspection reveals hidden damage or wear before you commit.",
      },
      {
        title: "After a Collision",
        desc: "An assessment documents the full scope of damage for repair and insurance.",
      },
      {
        title: "Post-Repair Verification",
        desc: "Confirm a repair done elsewhere was completed correctly and safely.",
      },
      {
        title: "Before a Long Trip",
        desc: "A condition check gives you confidence your vehicle is road-trip ready.",
      },
      {
        title: "Suspected Hidden Damage",
        desc: "If something feels off after an incident, an inspection finds the cause.",
      },
      {
        title: "Older Vehicle Checkup",
        desc: "Periodic inspections catch wear and damage before they become failures.",
      },
    ],
    highUseNote: `Vehicles with high mileage on ${C}'s commuter corridors — I-465, I-70, Sherman Ave — and used vehicles being considered for purchase benefit most from thorough inspections. For these, a detailed assessment catches the wear and hidden damage that a casual look would miss.`,
    nearCity: `${BIZ} provides vehicle inspections for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield understand the true condition of their vehicles.`,
    faqs: [
      {
        question: "What does a vehicle inspection include?",
        answer: `Our inspection covers body panels, structural frame or unibody measurement, mechanical systems (engine, brakes, suspension, steering), safety components, and paint condition. You receive a written report documenting all findings and any recommended repairs.`,
      },
      {
        question: "Should I get an inspection before buying a used car?",
        answer: `Absolutely. A pre-purchase inspection reveals hidden damage, previous poor repairs, and mechanical wear that aren't visible in a test drive or listing photos. It's the best way to avoid buying someone else's expensive problem.`,
      },
      {
        question: "Can you inspect a vehicle after a repair done elsewhere?",
        answer: `Yes. We perform post-repair inspections to verify the work was done correctly — checking structural alignment, panel fitment, mechanical function, and safety systems. This confirms the vehicle is truly road-ready, not just cosmetically repaired.`,
      },
      {
        question: "How long does an inspection take?",
        answer: `A thorough inspection typically takes one to two hours, depending on the vehicle and the scope. We measure structural components, test mechanical systems, and document everything, so the time is worth the completeness of the report you receive.`,
      },
      {
        question: "Do you inspect for hidden structural damage?",
        answer: `Yes. We use measuring equipment to check the frame or unibody against factory tolerances, which reveals structural shift that isn't visible from outside. This is especially important after a collision or when assessing a used vehicle.`,
      },
      {
        question: "Will I get a written report?",
        answer: `Yes. Every inspection includes a written report documenting our findings — body condition, structural measurements, mechanical assessment, safety systems, and any recommended repairs. You can use this for purchase decisions, insurance claims, or repair planning.`,
      },
    ],
    faqIntro: `Vehicle inspections give you the facts about your vehicle's true condition. Explore our services in ${C}, ${ST} for related options like collision repair and mechanical repairs. Our team documents what's really there, visible and hidden.`,
    locationParagraphs: [
      `${BIZ} provides vehicle inspections for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield understand the true condition of their vehicles.`,
      `With heavy traffic on ${C}'s I-465, I-70, and Sherman Ave corridors, vehicles here accumulate wear and hidden damage. Our inspections document the full picture — body, structure, mechanical, and safety systems.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "car-paint-refinishing": {
    slug: "car-paint-refinishing",
    serviceName: "Car Paint Refinishing",
    title: `Car Paint Refinishing in ${C}, ${ST}`,
    subheadline: `Color-matched paint and clearcoat refinishing that blends repaired panels seamlessly with the rest of the car. ${BIZ} finishes right.`,
    whatIs: [
      `Car paint refinishing is the application of color-matched basecoat and clearcoat to repaired or replaced panels, blended into the surrounding paint so the repair is invisible. It's the final step that makes body and collision work look like the damage never happened — and the step that protects the repaired metal underneath.`,
      `At ${BIZ}, our refinishing process covers surface preparation, primer, color-matched basecoat, and clearcoat, all applied in a controlled environment. We match your vehicle's specific paint code and blend the new finish into adjacent panels so there's no visible line between repaired and original paint.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. Indiana's sun, salt, and road debris fade and damage paint over time, and our refinishing restores both the appearance and the protective function of your vehicle's finish.`,
    ],
    whyMatters: [
      `Paint isn't just cosmetic — it's your vehicle's first defense against corrosion. Damaged, cracked, or faded paint exposes the metal underneath to moisture, which starts the rust process. A proper refinish seals the surface and restores that protective barrier alongside the appearance.`,
      `A quality refinish also preserves your vehicle's value. Mismatched or poorly blended paint is the most visible sign of a cheap repair, and it shows up in resale value and every glance at the vehicle. Done right, the refinish is indistinguishable from factory paint — done wrong, it's the first thing a buyer notices.`,
    ],
    whenConsider: `Schedule paint refinishing after any body or collision repair, when paint is cracked or chipped exposing bare metal, after rust repair, or when faded or damaged paint is hurting your vehicle's appearance and protection.`,
    includedHeading: "What's Included in Car Paint Refinishing",
    includedIntro: `Our paint refinishing process covers the following for every repair:`,
    includedItems: [
      {
        label: "Surface Preparation",
        desc: "Repaired surfaces sanded, cleaned, and feathered for proper paint adhesion.",
      },
      {
        label: "Primer Application",
        desc: "Sealer and primer applied to block moisture and create a uniform base.",
      },
      {
        label: "Color Matching",
        desc: "Basecoat mixed to your vehicle's exact paint code for a seamless match.",
      },
      {
        label: "Basecoat Application",
        desc: "Color applied and blended into adjacent panels to eliminate visible lines.",
      },
      {
        label: "Clearcoat & Curing",
        desc: "Protective clearcoat applied and cured for durability and gloss.",
      },
      {
        label: "Final Polish",
        desc: "Surface buffed and polished to match the surrounding paint's finish.",
      },
    ],
    subServices: [
      {
        title: "Color Matching",
        body: `We mix the basecoat to your vehicle's specific paint code and then fine-tune the match to account for age-related fading. The color is blended into adjacent panels rather than stopping at a hard line, so the repaired area is indistinguishable from the original finish.`,
      },
      {
        title: "Clearcoat Application",
        body: `The clearcoat is the protective layer over the color — it provides UV protection, gloss, and resistance to chips and chemicals. We apply and cure it properly so the finish lasts and maintains its shine, matching the texture and gloss of the surrounding paint.`,
      },
      {
        title: "Spot & Panel Blending",
        body: `For localized repairs, we blend the new paint into the surrounding panels rather than repainting the entire vehicle. This keeps the repair contained and cost-effective while still producing an invisible transition between the repaired and original paint.`,
      },
    ],
    dueIntro: `Watch for these signs that your vehicle needs paint refinishing:`,
    warningSigns: [
      {
        title: "Cracked or Chipped Paint",
        desc: "Paint damage exposes bare metal to moisture — the start of rust.",
      },
      {
        title: "Faded or Oxidized Paint",
        desc: "Dull, chalky paint has lost its protective clearcoat and UV protection.",
      },
      {
        title: "Mismatched Panels",
        desc: "A panel that's a different shade indicates a previous poor repair.",
      },
      {
        title: "Visible Repair Lines",
        desc: "A hard line where new paint meets old means the blend wasn't done right.",
      },
      {
        title: "Peeling Clearcoat",
        desc: "Flaking or peeling clearcoat leaves the color layer unprotected.",
      },
      {
        title: "After Body or Collision Repair",
        desc: "Any repaired or replaced panel needs refinishing to match and protect.",
      },
    ],
    highUseNote: `Vehicles parked outdoors in ${C}'s sun and driven through salted winters on I-465 and I-70 fade and chip faster than garage-kept cars. Older vehicles and daily drivers benefit from paint condition checks to catch clearcoat failure and chips before they expose bare metal to corrosion.`,
    nearCity: `${BIZ} provides car paint refinishing for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield restore their vehicles' appearance and paint protection.`,
    faqs: [
      {
        question: "Will the new paint match my vehicle's color?",
        answer: `Yes. We mix the basecoat to your vehicle's specific paint code and fine-tune the match to account for any fading. We then blend the new paint into adjacent panels rather than stopping at a hard line, so the repaired area is indistinguishable from the original finish.`,
      },
      {
        question: "How long does paint refinishing take?",
        answer: `It depends on the scope. A single panel spot repair may take a couple of days, while a multi-panel refinish takes longer due to prep, multiple coats, and curing time. We give you a clear timeline up front and don't rush the curing process.`,
      },
      {
        question: "How long until I can wash my vehicle after refinishing?",
        answer: `We recommend waiting about two weeks before washing the vehicle to allow the paint and clearcoat to fully cure. Avoid waxing for about 60 days. We'll give you specific care instructions when you pick up the vehicle.`,
      },
      {
        question: "Can you fix faded or oxidized paint?",
        answer: `Yes. If the clearcoat is intact, polishing may restore the shine. If the clearcoat has failed or the color is damaged, we refinish the affected panels with new basecoat and clearcoat to restore both appearance and protection.`,
      },
      {
        question: "Do you refinish just one panel or the whole vehicle?",
        answer: `For localized damage, we refinish the repaired panel and blend into adjacent panels — we don't repaint the entire vehicle unless the damage is extensive. This keeps the repair contained and cost-effective while still producing a seamless result.`,
      },
      {
        question: "Is the refinish covered by a warranty?",
        answer: `We stand behind our refinishing workmanship. If a defect in our materials or application appears, bring the vehicle back and we'll correct it. Proper prep, application, and curing are what make a refinish last, and we do all three correctly.`,
      },
    ],
    faqIntro: `Car paint refinishing restores both the look and the protective function of your vehicle's finish. Explore our services in ${C}, ${ST} for related options like auto body repair and rust repair. Our team blends every refinish seamlessly.`,
    locationParagraphs: [
      `${BIZ} provides car paint refinishing for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield restore their vehicles' appearance and paint protection.`,
      `${C}'s sun, salt, and road debris on I-465 and I-70 fade and damage paint over time. Our refinishing restores both the appearance and the protective barrier your vehicle's finish provides.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "unibody-frame-pull-and-repair": {
    slug: "unibody-frame-pull-and-repair",
    serviceName: "Unibody Frame Pull And Repair",
    title: `Unibody Frame Pull And Repair in ${C}, ${ST}`,
    subheadline: `Precision frame straightening on a dedicated alignment rack to restore factory tolerances after an impact. ${BIZ} measures to the millimeter.`,
    whatIs: [
      `Unibody frame pull and repair is the precision straightening of a vehicle's structural frame or unibody after a collision. Most modern vehicles use a unibody design where the body and frame are one integrated structure, and an impact can push that structure out of factory alignment — sometimes by just a few millimeters, sometimes significantly.`,
      `At ${BIZ}, we use computerized measuring equipment to check your vehicle's structural dimensions against factory specifications, then hydraulic pulling equipment on a dedicated alignment rack to bring every measurement back into tolerance. This restores the structural integrity your vehicle needs to drive straight and protect you in a future crash.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. With the collision traffic on I-465, I-70, and Sherman Ave, frame and unibody damage is common, and precise structural repair is the foundation of every safe collision repair.`,
    ],
    whyMatters: [
      `A frame or unibody that's out of alignment affects everything — handling, tire wear, steering, and crucially, how the vehicle crumples in a future impact. A structure even slightly off spec may not absorb collision energy the way it was designed to, putting you at greater risk in a subsequent accident.`,
      `Proper frame repair also prevents a cascade of secondary problems. A misaligned structure causes uneven tire wear, steering drift, and stress on suspension and drivetrain components — issues that surface as expensive repairs down the road. Getting the structure right the first time prevents all of it.`,
    ],
    whenConsider: `Schedule unibody frame inspection and repair after any collision, even a low-speed one. Structural shift isn't always visible from outside — a frame can move without obvious exterior damage. If your vehicle pulls, wears tires unevenly, or has panel gaps that don't line up after an impact, have the structure measured.`,
    includedHeading: "What's Included in Unibody Frame Pull And Repair",
    includedIntro: `Our frame and unibody repair process covers the following:`,
    includedItems: [
      {
        label: "Structural Measurement",
        desc: "Computerized measuring checks every dimension against factory tolerances.",
      },
      {
        label: "Damage Mapping",
        desc: "We identify every point of structural shift, visible and hidden.",
      },
      {
        label: "Anchoring",
        desc: "Vehicle secured to a dedicated alignment rack for controlled pulling.",
      },
      {
        label: "Hydraulic Pulling",
        desc: "Precision hydraulic pulls bring the structure back to factory dimensions.",
      },
      {
        label: "Verification",
        desc: "Re-measurement confirms every point is back within tolerance.",
      },
      {
        label: "Component Checks",
        desc: "Suspension, steering, and safety systems checked after realignment.",
      },
    ],
    subServices: [
      {
        title: "Computerized Measurement",
        body: `Before any pulling, we measure your vehicle's structure against factory specs using computerized measuring equipment. This maps every point of shift — including damage that isn't visible — so we know exactly what needs to be moved and where, down to the millimeter.`,
      },
      {
        title: "Precision Pulling",
        body: `With the vehicle anchored to our alignment rack, we use hydraulic pulling equipment to apply controlled force and bring the structure back into tolerance. We pull incrementally and re-measure throughout, ensuring we restore the factory dimensions without overcorrecting or weakening the metal.`,
      },
      {
        title: "Post-Pull Verification",
        body: `After pulling, we re-measure the entire structure to confirm every point is back within factory tolerance. We then check the suspension, steering, and safety systems that may have been affected by the impact or the realignment, so the vehicle drives and protects as it should.`,
      },
    ],
    dueIntro: `After a collision, watch for these signs of structural or frame damage:`,
    warningSigns: [
      {
        title: "Vehicle Pulls to One Side",
        desc: "Steering drift often indicates frame or suspension misalignment from the impact.",
      },
      {
        title: "Uneven Tire Wear",
        desc: "New uneven wear suggests the structure or alignment shifted.",
      },
      {
        title: "Misaligned Panel Gaps",
        desc: "Doors, hood, or trunk that don't line up point to underlying structural movement.",
      },
      {
        title: "Difficulty Closing Doors",
        desc: "Doors that stick or won't latch properly can signal a shifted structure.",
      },
      {
        title: "Steering Wheel Off-Center",
        desc: "A crooked steering wheel when driving straight indicates alignment or frame issues.",
      },
      {
        title: "Visible Frame Damage",
        desc: "Any bent, creased, or displaced structural member requires immediate measurement.",
      },
    ],
    highUseNote: `Vehicles involved in collisions on ${C}'s high-traffic corridors — I-465, I-70, Sherman Ave — are the most common candidates for frame repair. Even low-speed impacts can shift a unibody, so any vehicle that's been in a collision benefits from structural measurement to confirm the frame is still within factory tolerance.`,
    nearCity: `${BIZ} provides unibody frame pull and repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield restore their vehicles' structural integrity after collisions.`,
    faqs: [
      {
        question: "How do you know if my frame is bent?",
        answer: `We use computerized measuring equipment to check your vehicle's structural dimensions against factory specifications. This reveals shifts of even a few millimeters that aren't visible from outside. If you've been in a collision, measurement is the only way to know for sure whether the structure moved.`,
      },
      {
        question: "Can a unibody frame be repaired?",
        answer: `Yes. Modern vehicles use unibody construction, and we have the equipment and training to straighten them back to factory tolerances. Using hydraulic pulling on a dedicated alignment rack, we bring the structure back into spec so the vehicle drives and protects as designed.`,
      },
      {
        question: "Will my vehicle be safe after frame repair?",
        answer: `When done correctly, yes. We restore the structure to factory dimensions and verify every measurement, then check the suspension, steering, and safety systems. A properly repaired unibody crumples and protects exactly as it did before the collision.`,
      },
      {
        question: "How long does frame straightening take?",
        answer: `It depends on the extent of the damage. Minor pulls may take a day, while significant structural reconstruction can take several days. We measure, pull incrementally, and re-measure throughout, so we don't rush — accuracy is what makes the repair safe.`,
      },
      {
        question: "Can frame damage affect my vehicle's value?",
        answer: `Poorly repaired or undisclosed frame damage can affect resale value, which is why proper, documented repair matters. We restore the structure to factory spec and provide documentation of the measurements and repair, so the work is done right and verifiable.`,
      },
      {
        question: "Do you check mechanical systems after frame repair?",
        answer: `Yes. After realigning the structure, we inspect the suspension, steering, and safety systems that may have been affected by the impact or the pull. Frame repair is only complete when the vehicle drives straight and all systems function as they should.`,
      },
    ],
    faqIntro: `Unibody frame repair restores your vehicle's structural integrity after a collision. Explore our services in ${C}, ${ST} for related options like collision repair and inspections. Our team measures and pulls to factory tolerance.`,
    locationParagraphs: [
      `${BIZ} provides unibody frame pull and repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield restore their vehicles' structural integrity after collisions.`,
      `Collisions on ${C}'s I-465, I-70, and Sherman Ave corridors frequently cause structural damage. Our computerized measuring and hydraulic pulling equipment restores factory tolerances so your vehicle drives and protects as designed.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },

  "bring-your-own-part-repair": {
    slug: "bring-your-own-part-repair",
    serviceName: "Bring Your Own Part Repair",
    title: `Bring Your Own Part Repair in ${C}, ${ST}`,
    subheadline: `Supply your own part and we'll install it correctly — labor-only repair on parts you source yourself. ${BIZ} installs it right.`,
    whatIs: [
      `Bring Your Own Part repair is exactly what it sounds like — you supply the replacement part, and we handle the installation. It's a labor-only service for customers who've sourced their own parts, whether to save on parts markup, use a specific brand, or install a part they already have.`,
      `At ${BIZ}, we inspect the part you bring to confirm it's the correct fit and in good condition, then install it to factory standards. We handle the body, mechanical, or paint work needed to complete the repair, and you only pay for labor — not the part itself.`,
      `We serve drivers across ${C} and central Indiana — Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield. Whether you found a part online, have a used component in good shape, or prefer a specific brand, we'll install it correctly so the repair is safe and lasting.`,
    ],
    whyMatters: [
      `Sourcing your own part can save money, but a part is only as good as its installation. An incorrectly installed part — wrong torque, poor fitment, missing components — can fail prematurely, cause additional damage, or compromise safety. Professional installation protects the investment you made in the part.`,
      `We also verify the part is correct and serviceable before we install it. A part that's the wrong fit, damaged, or counterfeit won't perform as it should, and installing it wastes your money and our time. We inspect first so you don't pay for labor on a part that won't work.`,
    ],
    whenConsider: `Use our Bring Your Own Part service when you've sourced a replacement part yourself — online, from a salvage yard, or through a specific supplier — and need professional installation. It's ideal for customers comfortable sourcing parts who want expert labor.`,
    includedHeading: "What's Included in Bring Your Own Part Repair",
    includedIntro: `Our bring-your-own-part service covers the following:`,
    includedItems: [
      {
        label: "Part Inspection",
        desc: "We verify the part is the correct fit and in serviceable condition before installing.",
      },
      {
        label: "Professional Installation",
        desc: "The part installed to factory standards with proper torque and procedures.",
      },
      {
        label: "Associated Repairs",
        desc: "Body, mechanical, or paint work needed to complete the installation.",
      },
      {
        label: "Labor-Only Billing",
        desc: "You pay for labor — not the part — with transparent pricing up front.",
      },
      {
        label: "System Checks",
        desc: "Related systems tested after installation to confirm proper function.",
      },
      {
        label: "Warranty on Labor",
        desc: "Our installation workmanship is covered against defects in labor.",
      },
    ],
    subServices: [
      {
        title: "Part Verification",
        body: `Before we install anything, we inspect the part you bring to confirm it's the correct fit for your vehicle and in serviceable condition. If a part is wrong, damaged, or won't perform safely, we tell you before charging for labor — so you're not paying for installation on a part that won't work.`,
      },
      {
        title: "Professional Installation",
        body: `We install your part to factory standards, using the correct torque specs, procedures, and any associated components needed for a proper repair. Whether it's a body panel, a mechanical component, or a part requiring paint, the installation is done right so the repair lasts.`,
      },
      {
        title: "Associated Work",
        body: `Many parts require additional work to complete the repair — a body panel needs paint, a mechanical part may need system bleeding or calibration. We handle the associated body, mechanical, or refinishing work so your part is fully integrated and the repair is complete.`,
      },
    ],
    dueIntro: `Consider our Bring Your Own Part service when:`,
    warningSigns: [
      {
        title: "You've Sourced a Part",
        desc: "You found a part online, at a salvage yard, or through a specific supplier.",
      },
      {
        title: "You Want to Save on Parts Markup",
        desc: "Labor-only billing avoids the parts markup charged on shop-supplied parts.",
      },
      {
        title: "You Prefer a Specific Brand",
        desc: "You want a particular manufacturer or part that the shop doesn't carry.",
      },
      {
        title: "You Have a Used Part in Good Shape",
        desc: "A serviceable used part can be a cost-effective option when installed correctly.",
      },
      {
        title: "You're Comfortable Sourcing Parts",
        desc: "You know what part you need and want expert labor to install it.",
      },
      {
        title: "A Part Is Discontinued",
        desc: "For older vehicles, sourcing a part yourself may be the only option.",
      },
    ],
    highUseNote: `Owners of older or less common vehicles — and cost-conscious drivers across ${C}'s commuter corridors — often source their own parts when shop-supplied parts are expensive or hard to find. For these, our labor-only installation provides professional quality without the parts markup.`,
    nearCity: `${BIZ} provides bring-your-own-part repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield install their own parts correctly with professional labor.`,
    faqs: [
      {
        question: "What types of parts can I bring?",
        answer: `You can bring body panels, bumpers, mechanical components, and most replacement parts. We inspect every part before installation to confirm it's the correct fit and in serviceable condition. If a part isn't safe or suitable, we'll tell you before charging for labor.`,
      },
      {
        question: "Do you inspect the part before installing it?",
        answer: `Yes, always. We verify the part is the correct fit for your vehicle and in good, serviceable condition before we install it. This protects you from paying for labor on a part that's wrong, damaged, or won't perform safely.`,
      },
      {
        question: "Is the labor covered by a warranty?",
        answer: `Our installation workmanship is covered against defects in labor. If an issue stems from how we installed the part, we'll correct it. The part itself carries whatever warranty its manufacturer or supplier provides, which we'll explain up front.`,
      },
      {
        question: "Can you paint a body panel I bring?",
        answer: `Yes. If you bring an unpainted body panel, we handle the paint refinishing — color matching, basecoat, and clearcoat — as part of the installation. The associated refinishing work is billed alongside the labor.`,
      },
      {
        question: "What if the part I bring is the wrong one?",
        answer: `If we determine during inspection that the part won't fit or isn't serviceable, we tell you before installing it. You won't be charged for labor on a part that can't be used, and we can help you identify the correct part for your vehicle.`,
      },
      {
        question: "How is pricing structured?",
        answer: `You pay for labor and any associated work needed to complete the installation — not the part itself. We give you a transparent labor estimate up front after inspecting the part and assessing the scope of the installation, so you know the cost before we start.`,
      },
    ],
    faqIntro: `Bring Your Own Part repair gives you professional installation on parts you source yourself. Explore our services in ${C}, ${ST} for related options like auto body repair and mechanical repairs. Our team installs every part to factory standards.`,
    locationParagraphs: [
      `${BIZ} provides bring-your-own-part repair for all makes and models near ${C}, ${ST}. We help drivers from Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, and Plainfield install their own parts with professional labor.`,
      `For older vehicles and cost-conscious drivers on ${C}'s I-465, I-70, and Sherman Ave corridors, sourcing parts independently can save money. Our labor-only installation ensures those parts are installed correctly and safely.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding areas.`,
    ],
  },
};
