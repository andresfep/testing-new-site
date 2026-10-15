import { SITE } from "./site";

export interface AreaContent {
  slug: string;
  areaName: string;
  areaShort: string;
  title: string;
  heroEyebrow: string;
  fullService: string;
  whyChoose: string;
  whatWeDo: string;
  aboutArea: string;
  faqs: { question: string; answer: string }[];
  locationParagraphs: string[];
}

const BIZ = SITE.businessName;
const MS = SITE.mainService;

export const AREA_CONTENT: Record<string, AreaContent> = {
  "indianapolis-in-auto-body-repair": {
    slug: "indianapolis-in-auto-body-repair",
    areaName: "Indianapolis, IN",
    areaShort: "Indianapolis",
    title: `Auto Body Repair in Indianapolis, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN INDIANAPOLIS, IN`,
    fullService: `From the stop-and-go traffic on I-465 and I-70 to winter salt that eats at rocker panels, Indianapolis vehicles take a beating. ${BIZ} handles the full range of auto body repair right here on the east side — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — all under one roof with over 55 years of experience behind every job.`,
    whyChoose: `Indianapolis drivers choose ${BIZ} because we quote before we start, communicate throughout the repair, and stand behind the workmanship. We're a local shop on E 26th St, not a chain, and we treat every vehicle like it's our own — from the estimate to the final polish.`,
    whatWeDo: `Our Indianapolis shop handles everything from a parking-lot dent to major collision reconstruction. We do body, frame, paint, mechanical, and rust work in-house, so your vehicle doesn't bounce between shops. Explore the full range of services we offer across the city:`,
    aboutArea: `Indianapolis is the capital and largest city in Indiana, anchored by downtown, the I-465 loop, and major corridors like Sherman Ave, Washington St, and Michigan Rd. With a metro population over two million, heavy commuter traffic, and Indiana winters that coat the roads in salt for months, vehicles here accumulate collision damage, dings, and rust faster than most — which makes reliable auto body repair a regular need for local drivers.`,
    faqs: [
      {
        question: `Do you serve all of Indianapolis?`,
        answer: `Yes. We're located on E 26th St near Sherman Ave and serve drivers across the entire Indianapolis metro, including downtown, the east side, and every surrounding community inside and just outside the I-465 loop.`,
      },
      {
        question: `How fast can you start a repair in Indianapolis?`,
        answer: `We schedule repairs as quickly as our bays allow, often within a few days of the estimate. For collision work tied to an insurance claim, we coordinate with your carrier to keep the timeline moving. Call us and we'll give you a realistic start date.`,
      },
      {
        question: `Is Indianapolis winter salt really that hard on vehicle bodies?`,
        answer: `It is. Indiana roads are salted for months each winter, and that salt accelerates corrosion on rocker panels, wheel arches, and undercarriages. We see rust damage from Indianapolis winters constantly, which is why we offer dedicated rust repair alongside our body and paint work.`,
      },
      {
        question: `Can you handle fleet vehicles in Indianapolis?`,
        answer: `Yes. We have a fleet wholesale program with priority scheduling, consolidated billing, and wholesale pricing for Indianapolis businesses operating multiple vehicles. It's built to keep your fleet on the road with minimal downtime.`,
      },
      {
        question: `Do you work with insurance companies in Indianapolis?`,
        answer: `We work with all major insurance carriers and handle the estimate, adjuster coordination, and paperwork on your behalf. You choose the shop — we manage the claim so the repair moves without the headache.`,
      },
      {
        question: `Where exactly are you located in Indianapolis?`,
        answer: `We're at ${SITE.street}, ${SITE.streetCity}, on the east side near Sherman Ave and just minutes from I-465 and I-70. That makes us convenient for drivers coming from downtown, Lawrence, Cumberland, and the surrounding east-side communities.`,
      },
      {
        question: `Do you offer free estimates in Indianapolis?`,
        answer: `Yes. We provide free, written estimates before any work begins. Bring your vehicle in or send us photos of the damage and we'll give you an itemized quote in plain English.`,
      },
      {
        question: `What areas around Indianapolis do you serve?`,
        answer: `Beyond Indianapolis itself, we serve Cumberland, Lawrence, Beech Grove, Speedway, Broad Ripple, Castleton, Fountain Square, Fishers, and Plainfield — essentially the whole central Indiana metro.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for all makes and models in ${SITE.city}, ${SITE.state}. We help drivers across the city restore their vehicles after collisions, dents, and everyday damage with professional bodywork and paint refinishing.`,
      `Indianapolis's stop-and-go traffic on I-465, I-70, and Sherman Ave, combined with winter road salt, means body and rust damage are common here. Our team handles the full range — from minor dent repair to major collision reconstruction and frame straightening.`,
      `Conveniently located on E 26th St near Sherman Ave, just minutes from I-465 and I-70. We proudly serve drivers from <a href="/cumberland-in-auto-body-repair" class="text-primary hover:underline font-semibold">Cumberland</a>, Lawrence, and surrounding east-side communities.`,
    ],
  },

  "cumberland-in-auto-body-repair": {
    slug: "cumberland-in-auto-body-repair",
    areaName: "Cumberland, IN",
    areaShort: "Cumberland",
    title: `Auto Body Repair in Cumberland, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN CUMBERLAND, IN`,
    fullService: `Cumberland sits right along US-40 and the I-465 loop on Indianapolis's east side, which means steady commuter traffic and its share of fender benders. ${BIZ} is just minutes away on E 26th St, offering full-service auto body repair — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — to Cumberland drivers with over 55 years of experience.`,
    whyChoose: `Cumberland drivers choose ${BIZ} because we're close, we quote honestly, and we finish what we promise. Being a short drive down US-40 means quick drop-offs and pickups, and our in-house body, frame, and paint work means your vehicle doesn't leave our shop until it's done right.`,
    whatWeDo: `From a parking-lot ding on Cumberland's main drag to collision reconstruction after a US-40 incident, we handle the full range of body and collision work. Our Cumberland customers get the same complete service as the rest of the city:`,
    aboutArea: `Cumberland is a small town straddling the Marion–Hancock county line along US-40 (Washington Street), just inside the I-465 loop on Indianapolis's east side. It's a quiet residential community with easy highway access, and its proximity to the loop and Sherman Ave corridor means local drivers deal with the same commuter traffic and winter salt as the rest of the metro — making dependable auto body repair a short drive away.`,
    faqs: [
      {
        question: `How far is your shop from Cumberland?`,
        answer: `We're a short drive from Cumberland down US-40/Washington St to E 26th St — typically under 15 minutes. Cumberland drivers find us easy to reach for drop-offs, pickups, and estimates.`,
      },
      {
        question: `Do you serve Cumberland drivers for collision repair?`,
        answer: `Yes. Cumberland is one of our closest service areas. We handle full collision reconstruction, frame straightening, and paint refinishing for Cumberland drivers, and we coordinate with your insurance company throughout.`,
      },
      {
        question: `Is rust repair common for Cumberland vehicles?`,
        answer: `Yes. Like the rest of central Indiana, Cumberland vehicles face winter road salt that causes rocker panel, wheel arch, and undercarriage rust. We cut out the corrosion, treat the bare metal, and refinish the area to stop rust at its source.`,
      },
      {
        question: `Can Cumberland fleet vehicles use your wholesale program?`,
        answer: `Absolutely. Cumberland businesses with multiple vehicles qualify for our fleet wholesale program — priority scheduling, consolidated billing, and wholesale pricing to keep your vehicles on the road.`,
      },
      {
        question: `Do you offer free estimates to Cumberland drivers?`,
        answer: `Yes. We provide free written estimates for Cumberland customers. Bring your vehicle by the shop or send photos of the damage and we'll give you an itemized quote before any work starts.`,
      },
      {
        question: `How long does a typical repair take for Cumberland customers?`,
        answer: `It depends on the damage. Minor dent or panel work can take a few days; major collision reconstruction takes a week or more. We give Cumberland drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `What's the best route from Cumberland to your shop?`,
        answer: `Head west on US-40/Washington St, then north on Sherman Ave to E 26th St — about a 15-minute drive. We're just minutes from I-465 and I-70 as well.`,
      },
      {
        question: `Do you handle insurance claims for Cumberland drivers?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Cumberland customers. You choose the shop; we handle the claim.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Cumberland, ${SITE.state}. Just down US-40 from our E 26th St shop, we help Cumberland customers restore their vehicles after collisions, dents, and rust damage.`,
      `Cumberland's location along US-40 and the I-465 loop means steady commuter traffic and the occasional fender bender. Combined with Indiana winter salt, Cumberland vehicles see their share of body and rust damage — all of which we handle in-house.`,
      `From Cumberland, head west on US-40/Washington St and north on Sherman Ave to E 26th St — about 15 minutes. We're minutes from I-465 and I-70, convenient for Cumberland and nearby <a href="/lawrence-in-auto-body-repair" class="text-primary hover:underline font-semibold">Lawrence</a> drivers.`,
    ],
  },

  "fishers-in-auto-body-repair": {
    slug: "fishers-in-auto-body-repair",
    areaName: "Fishers, IN",
    areaShort: "Fishers",
    title: `Auto Body Repair in Fishers, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN FISHERS, IN`,
    fullService: `Fishers is one of the fastest-growing suburbs north of Indianapolis, and its residents log serious miles on I-69 and SR-37 commuting into the city. ${BIZ} provides full-service auto body repair to Fishers drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — all from our E 26th St shop with over 55 years of experience.`,
    whyChoose: `Fishers drivers choose ${BIZ} for the quality of the work and the honesty of the process. We quote before we start, we communicate throughout, and we stand behind every repair. The drive down I-69 to our east-side shop is straightforward, and the work is worth the trip.`,
    whatWeDo: `Whether it's a commuter-car dent from a Fishers parking lot or collision reconstruction after an I-69 incident, we handle the full range of body and collision work for Fishers drivers:`,
    aboutArea: `Fishers is a fast-growing city in Hamilton County, northeast of Indianapolis along I-69 and SR-37. With a population over 90,000, top-rated schools, and the Nickel Plate District downtown, it's one of the metro's most popular suburbs. Heavy commuter traffic on I-69 into Indianapolis, plus Indiana winters, means Fishers vehicles see their share of collision damage, dings, and rust — making a trusted auto body shop a regular need.`,
    faqs: [
      {
        question: `How do I get to your shop from Fishers?`,
        answer: `Take I-69 south to I-465 east, then exit toward Sherman Ave and E 26th St — about 30 minutes depending on traffic. We're just off the highway and easy to reach from Fishers.`,
      },
      {
        question: `Do you handle collision repair for Fishers drivers?`,
        answer: `Yes. We provide full collision reconstruction for Fishers customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and we coordinate with your insurance company throughout the process.`,
      },
      {
        question: `Is rust repair needed for Fishers vehicles?`,
        answer: `Yes. Fishers vehicles face the same Indiana winter salt as the rest of the metro, which causes rust on rocker panels, wheel arches, and undercarriages. We remove the corrosion at the source and refinish to stop it from spreading.`,
      },
      {
        question: `Can Fishers businesses use your fleet program?`,
        answer: `Yes. Fishers businesses with multiple vehicles qualify for our fleet wholesale program — priority scheduling, consolidated billing, and wholesale pricing to minimize downtime.`,
      },
      {
        question: `Do you offer free estimates to Fishers drivers?`,
        answer: `Yes. We provide free written estimates for Fishers customers. Bring your vehicle to our E 26th St shop or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Fishers customers?`,
        answer: `Minor dent or panel work takes a few days; major collision reconstruction takes a week or more. We give Fishers drivers a realistic timeline up front and keep you updated throughout the repair.`,
      },
      {
        question: `Do you work with insurance for Fishers claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Fishers customers. You choose the shop; we handle the claim.`,
      },
      {
        question: `What other areas near Fishers do you serve?`,
        answer: `Beyond Fishers, we serve Castleton, Lawrence, Indianapolis, Cumberland, and the rest of the central Indiana metro from our E 26th St shop.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Fishers, ${SITE.state}. From our E 26th St shop, we help Fishers customers restore their vehicles after collisions, dents, and rust damage with professional bodywork and paint refinishing.`,
      `Fishers commuters log heavy miles on I-69 and SR-37, and Indiana winters add salt damage to the mix. We handle the full range of body, collision, frame, and rust repair for Fishers drivers — all in-house.`,
      `From Fishers, take I-69 south to I-465 east, then exit toward Sherman Ave and E 26th St — about 30 minutes. We're convenient for Fishers and nearby <a href="/castleton-in-auto-body-repair" class="text-primary hover:underline font-semibold">Castleton</a> drivers.`,
    ],
  },

  "broad-ripple-in-auto-body-repair": {
    slug: "broad-ripple-in-auto-body-repair",
    areaName: "Broad Ripple, IN",
    areaShort: "Broad Ripple",
    title: `Auto Body Repair in Broad Ripple, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN BROAD RIPPLE, IN`,
    fullService: `Broad Ripple is one of Indianapolis's most vibrant neighborhoods, known for its nightlife, the Monon Trail, and notoriously tight parking. That combination means dings, dents, and bumped bumpers are a fact of life here. ${BIZ} provides full-service auto body repair to Broad Ripple drivers — dent and panel repair, collision reconstruction, paint refinishing, and rust repair — from our nearby E 26th St shop.`,
    whyChoose: `Broad Ripple drivers choose ${BIZ} because we understand city driving takes a toll on a vehicle's body. We quote honestly, we fix what actually needs fixing, and we refinish so the repair is invisible. The short drive from Broad Ripple to our east-side shop is worth a job done right.`,
    whatWeDo: `From a parking-lot ding on Broad Ripple Ave to collision reconstruction after a downtown incident, we handle the full range of body and collision work for Broad Ripple drivers:`,
    aboutArea: `Broad Ripple is a lively cultural district on Indianapolis's north side, centered along Broad Ripple Ave and the Monon Trail. Known for its bars, restaurants, art scene, and the Monon Trail, it draws heavy foot and vehicle traffic — and its tight street and lot parking makes dings and dents a regular occurrence for local drivers. Combined with Indiana winters, that makes dependable auto body repair a frequent need.`,
    faqs: [
      {
        question: `Is parking-lot dent repair common for Broad Ripple vehicles?`,
        answer: `Very common. Broad Ripple's tight street and lot parking means dings and dents happen regularly. We work the metal back to shape and refinish so the repair blends invisibly with the surrounding paint.`,
      },
      {
        question: `How do I get to your shop from Broad Ripple?`,
        answer: `Head east from Broad Ripple toward Sherman Ave, then to E 26th St — about 15–20 minutes. We're just off I-465 and I-70 and easy to reach from the north side.`,
      },
      {
        question: `Do you handle collision repair for Broad Ripple drivers?`,
        answer: `Yes. We provide full collision reconstruction for Broad Ripple customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Can you fix bumper damage from city driving?`,
        answer: `Absolutely. Bumped bumpers are one of the most common Broad Ripple repairs we see. We repair or replace cracked, scuffed, or loose bumpers and restore both the look and the crash protection.`,
      },
      {
        question: `Do you offer free estimates to Broad Ripple drivers?`,
        answer: `Yes. We provide free written estimates for Broad Ripple customers. Bring your vehicle by or send photos of the damage for an itemized quote before any work starts.`,
      },
      {
        question: `How long does a repair take for Broad Ripple customers?`,
        answer: `A single dent or panel refinish takes a few days; major collision work takes a week or more. We give Broad Ripple drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Broad Ripple claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Broad Ripple customers.`,
      },
      {
        question: `Do you serve other north-side neighborhoods?`,
        answer: `Yes. Beyond Broad Ripple, we serve Castleton, Lawrence, Fishers, Meridian-Kessler, and the rest of the north side and central Indiana metro.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Broad Ripple, ${SITE.state}. From our E 26th St shop, we help Broad Ripple customers fix the dings, dents, and collision damage that come with city driving.`,
      `Broad Ripple's tight parking and heavy traffic mean dings and bumped bumpers are a regular occurrence, and Indiana winters add rust to the mix. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all in-house.`,
      `From Broad Ripple, head east toward Sherman Ave and E 26th St — about 15–20 minutes. We're convenient for Broad Ripple and nearby <a href="/castleton-in-auto-body-repair" class="text-primary hover:underline font-semibold">Castleton</a> drivers.`,
    ],
  },

  "beech-grove-in-auto-body-repair": {
    slug: "beech-grove-in-auto-body-repair",
    areaName: "Beech Grove, IN",
    areaShort: "Beech Grove",
    title: `Auto Body Repair in Beech Grove, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN BEECH GROVE, IN`,
    fullService: `Beech Grove is an enclave city on Indianapolis's southeast side, just off I-465 and Emerson Ave. Its residents commute into the city and deal with the same winter salt as the rest of the metro. ${BIZ} provides full-service auto body repair to Beech Grove drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — from our nearby E 26th St shop with over 55 years of experience.`,
    whyChoose: `Beech Grove drivers choose ${BIZ} because we're close, honest, and thorough. We quote before we start, communicate throughout, and stand behind the work. The short drive up Emerson Ave to our east-side shop makes drop-offs and pickups easy.`,
    whatWeDo: `From a commuter-car dent to collision reconstruction after an I-465 incident, we handle the full range of body and collision work for Beech Grove drivers:`,
    aboutArea: `Beech Grove is an independent city surrounded by Indianapolis on the southeast side, near the intersection of I-465 and Emerson Ave. With a population around 15,000, it's a tight-knit community with easy highway access. Commuter traffic on Emerson Ave and I-465, plus Indiana winters, means Beech Grove vehicles see their share of collision damage, dings, and rust — making a dependable auto body shop a short drive away.`,
    faqs: [
      {
        question: `How far is your shop from Beech Grove?`,
        answer: `We're a short drive up Emerson Ave to E 26th St — typically under 20 minutes. Beech Grove drivers find us easy to reach for estimates, drop-offs, and pickups.`,
      },
      {
        question: `Do you handle collision repair for Beech Grove drivers?`,
        answer: `Yes. We provide full collision reconstruction for Beech Grove customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Is rust repair common for Beech Grove vehicles?`,
        answer: `Yes. Beech Grove vehicles face the same Indiana winter salt as the rest of the metro, causing rust on rocker panels, wheel arches, and undercarriages. We remove the corrosion at the source and refinish to stop it spreading.`,
      },
      {
        question: `Can Beech Grove businesses use your fleet program?`,
        answer: `Yes. Beech Grove businesses with multiple vehicles qualify for our fleet wholesale program — priority scheduling, consolidated billing, and wholesale pricing to keep your fleet moving.`,
      },
      {
        question: `Do you offer free estimates to Beech Grove drivers?`,
        answer: `Yes. We provide free written estimates for Beech Grove customers. Bring your vehicle by or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Beech Grove customers?`,
        answer: `Minor dent or panel work takes a few days; major collision reconstruction takes a week or more. We give Beech Grove drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Beech Grove claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Beech Grove customers.`,
      },
      {
        question: `What's the best route from Beech Grove to your shop?`,
        answer: `Head north on Emerson Ave to E 26th St — about 20 minutes. We're just off I-465 and convenient for Beech Grove and southeast-side drivers.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Beech Grove, ${SITE.state}. From our E 26th St shop, we help Beech Grove customers restore their vehicles after collisions, dents, and rust damage.`,
      `Beech Grove's commuter traffic on Emerson Ave and I-465, plus Indiana winter salt, means body and rust damage are common here. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all in-house.`,
      `From Beech Grove, head north on Emerson Ave to E 26th St — about 20 minutes. We're convenient for Beech Grove and nearby <a href="/speedway-in-auto-body-repair" class="text-primary hover:underline font-semibold">Speedway</a> and southeast-side drivers.`,
    ],
  },

  "speedway-in-auto-body-repair": {
    slug: "speedway-in-auto-body-repair",
    areaName: "Speedway, IN",
    areaShort: "Speedway",
    title: `Auto Body Repair in Speedway, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN SPEEDWAY, IN`,
    fullService: `Speedway is the famed home of the Indianapolis Motor Speedway, on the city's west side near I-465 and Crawfordsville Rd. Its residents are car people, and they expect bodywork done right. ${BIZ} provides full-service auto body repair to Speedway drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — from our E 26th St shop with over 55 years of experience.`,
    whyChoose: `Speedway drivers choose ${BIZ} because we share their appreciation for a vehicle done right. We quote honestly, we use quality parts, and we refinish to factory standards. The drive across town to our east-side shop brings you to a team that treats every repair with precision.`,
    whatWeDo: `From a daily-driver dent to collision reconstruction after a west-side incident, we handle the full range of body and collision work for Speedway drivers:`,
    aboutArea: `Speedway is an independent town on Indianapolis's west side, home to the legendary Indianapolis Motor Speedway and the Indy 500. With a population around 12,000, it's a close community of car enthusiasts situated near I-465, Crawfordsville Rd, and 16th St. Commuter traffic and Indiana winters mean Speedway vehicles see their share of collision damage, dings, and rust — and local drivers expect bodywork held to a high standard.`,
    faqs: [
      {
        question: `How do I get to your shop from Speedway?`,
        answer: `Take I-465 around to the east side, exiting toward Sherman Ave and E 26th St — about 25 minutes. We're just off the highway and easy to reach from Speedway.`,
      },
      {
        question: `Do you handle collision repair for Speedway drivers?`,
        answer: `Yes. We provide full collision reconstruction for Speedway customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Can you match paint precisely for car enthusiasts?`,
        answer: `Absolutely. We color-match to your vehicle's specific paint code and blend the refinish into adjacent panels so the repair is invisible. Speedway drivers expect precision, and that's what we deliver.`,
      },
      {
        question: `Is rust repair common for Speedway vehicles?`,
        answer: `Yes. Speedway vehicles face the same Indiana winter salt as the rest of the metro, causing rust on rocker panels, wheel arches, and undercarriages. We remove the corrosion at the source and refinish to stop it spreading.`,
      },
      {
        question: `Do you offer free estimates to Speedway drivers?`,
        answer: `Yes. We provide free written estimates for Speedway customers. Bring your vehicle by or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Speedway customers?`,
        answer: `Minor dent or panel work takes a few days; major collision reconstruction takes a week or more. We give Speedway drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Speedway claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Speedway customers.`,
      },
      {
        question: `Do you serve other west-side communities?`,
        answer: `Yes. Beyond Speedway, we serve Plainfield, Indianapolis, Beech Grove, and the rest of the central Indiana metro from our E 26th St shop.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Speedway, ${SITE.state}. From our E 26th St shop, we help Speedway customers restore their vehicles after collisions, dents, and rust damage with precision bodywork and paint refinishing.`,
      `Speedway's commuter traffic on I-465 and Crawfordsville Rd, plus Indiana winter salt, means body and rust damage are common. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all to the high standard Speedway drivers expect.`,
      `From Speedway, take I-465 around to the east side, exiting toward Sherman Ave and E 26th St — about 25 minutes. We're convenient for Speedway and nearby <a href="/plainfield-in-auto-body-repair" class="text-primary hover:underline font-semibold">Plainfield</a> drivers.`,
    ],
  },

  "lawrence-in-auto-body-repair": {
    slug: "lawrence-in-auto-body-repair",
    areaName: "Lawrence, IN",
    areaShort: "Lawrence",
    title: `Auto Body Repair in Lawrence, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN LAWRENCE, IN`,
    fullService: `Lawrence is an enclave city on Indianapolis's northeast side, along Pendleton Pike and 56th St near Fort Benjamin Harrison. Its residents commute into the city and deal with the same winter conditions as the rest of the metro. ${BIZ} provides full-service auto body repair to Lawrence drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — from our nearby E 26th St shop with over 55 years of experience.`,
    whyChoose: `Lawrence drivers choose ${BIZ} because we're close by, we quote honestly, and we finish what we promise. The short drive down Pendleton Pike or Sherman Ave to our east-side shop makes drop-offs and pickups easy, and the work is done right.`,
    whatWeDo: `From a commuter-car dent to collision reconstruction after a Pendleton Pike incident, we handle the full range of body and collision work for Lawrence drivers:`,
    aboutArea: `Lawrence is an independent city on Indianapolis's northeast side, along Pendleton Pike (US-36) and 56th St, near the former Fort Benjamin Harrison. With a population around 50,000, it's a residential community with easy access to I-465 and Sherman Ave. Commuter traffic and Indiana winters mean Lawrence vehicles see their share of collision damage, dings, and rust — making a dependable auto body shop a short drive away.`,
    faqs: [
      {
        question: `How far is your shop from Lawrence?`,
        answer: `We're a short drive down Pendleton Pike or Sherman Ave to E 26th St — typically under 15 minutes. Lawrence drivers find us easy to reach for estimates, drop-offs, and pickups.`,
      },
      {
        question: `Do you handle collision repair for Lawrence drivers?`,
        answer: `Yes. We provide full collision reconstruction for Lawrence customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Is rust repair common for Lawrence vehicles?`,
        answer: `Yes. Lawrence vehicles face the same Indiana winter salt as the rest of the metro, causing rust on rocker panels, wheel arches, and undercarriages. We remove the corrosion at the source and refinish to stop it spreading.`,
      },
      {
        question: `Can Lawrence businesses use your fleet program?`,
        answer: `Yes. Lawrence businesses with multiple vehicles qualify for our fleet wholesale program — priority scheduling, consolidated billing, and wholesale pricing to keep your fleet moving.`,
      },
      {
        question: `Do you offer free estimates to Lawrence drivers?`,
        answer: `Yes. We provide free written estimates for Lawrence customers. Bring your vehicle by or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Lawrence customers?`,
        answer: `Minor dent or panel work takes a few days; major collision reconstruction takes a week or more. We give Lawrence drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Lawrence claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Lawrence customers.`,
      },
      {
        question: `What's the best route from Lawrence to your shop?`,
        answer: `Head south on Sherman Ave or Pendleton Pike to E 26th St — about 15 minutes. We're just off I-465 and convenient for Lawrence and northeast-side drivers.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Lawrence, ${SITE.state}. From our E 26th St shop, we help Lawrence customers restore their vehicles after collisions, dents, and rust damage.`,
      `Lawrence's commuter traffic on Pendleton Pike and Sherman Ave, plus Indiana winter salt, means body and rust damage are common here. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all in-house.`,
      `From Lawrence, head south on Sherman Ave or Pendleton Pike to E 26th St — about 15 minutes. We're convenient for Lawrence and nearby <a href="/castleton-in-auto-body-repair" class="text-primary hover:underline font-semibold">Castleton</a> drivers.`,
    ],
  },

  "castleton-in-auto-body-repair": {
    slug: "castleton-in-auto-body-repair",
    areaName: "Castleton, IN",
    areaShort: "Castleton",
    title: `Auto Body Repair in Castleton, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN CASTLETON, IN`,
    fullService: `Castleton is a major commercial and residential district on Indianapolis's northeast side, centered on the Castleton Square mall area along 82nd St and Allisonville Rd near I-465. Heavy shopping traffic and tight mall parking mean dings and dents are common here. ${BIZ} provides full-service auto body repair to Castleton drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — from our nearby E 26th St shop.`,
    whyChoose: `Castleton drivers choose ${BIZ} because we understand that mall parking and busy corridors take a toll on a vehicle's body. We quote honestly, fix what needs fixing, and refinish so the repair disappears. The short drive down Sherman Ave to our shop is worth a job done right.`,
    whatWeDo: `From a parking-lot ding at Castleton Square to collision reconstruction after an I-465 incident, we handle the full range of body and collision work for Castleton drivers:`,
    aboutArea: `Castleton is a busy commercial and residential district on Indianapolis's northeast side, centered around Castleton Square mall — the largest mall in Indiana — along 82nd St, Allisonville Rd, and I-465. Heavy shopping and commuter traffic, plus tight mall parking, means dings, dents, and fender benders are a regular occurrence for local drivers. Combined with Indiana winters, that makes dependable auto body repair a frequent need.`,
    faqs: [
      {
        question: `Is parking-lot dent repair common for Castleton vehicles?`,
        answer: `Very common. Castleton Square mall and the surrounding lots see tight parking and frequent dings. We work the metal back to shape and refinish so the repair blends invisibly with the surrounding paint.`,
      },
      {
        question: `How do I get to your shop from Castleton?`,
        answer: `Head south on Sherman Ave to E 26th St — about 15 minutes. We're just off I-465 and easy to reach from Castleton.`,
      },
      {
        question: `Do you handle collision repair for Castleton drivers?`,
        answer: `Yes. We provide full collision reconstruction for Castleton customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Can you fix bumper damage from mall parking?`,
        answer: `Absolutely. Bumped bumpers are one of the most common Castleton repairs we see. We repair or replace cracked, scuffed, or loose bumpers and restore both the look and the crash protection.`,
      },
      {
        question: `Do you offer free estimates to Castleton drivers?`,
        answer: `Yes. We provide free written estimates for Castleton customers. Bring your vehicle by or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Castleton customers?`,
        answer: `A single dent or panel refinish takes a few days; major collision work takes a week or more. We give Castleton drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Castleton claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Castleton customers.`,
      },
      {
        question: `Do you serve other northeast-side areas?`,
        answer: `Yes. Beyond Castleton, we serve Lawrence, Fishers, Broad Ripple, and the rest of the northeast side and central Indiana metro.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Castleton, ${SITE.state}. From our E 26th St shop, we help Castleton customers fix the dings, dents, and collision damage that come with busy commercial corridors.`,
      `Castleton's heavy shopping traffic and tight mall parking mean dings and bumped bumpers are a regular occurrence, and Indiana winters add rust to the mix. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all in-house.`,
      `From Castleton, head south on Sherman Ave to E 26th St — about 15 minutes. We're convenient for Castleton and nearby <a href="/lawrence-in-auto-body-repair" class="text-primary hover:underline font-semibold">Lawrence</a> drivers.`,
    ],
  },

  "fountain-square-in-auto-body-repair": {
    slug: "fountain-square-in-auto-body-repair",
    areaName: "Fountain Square, IN",
    areaShort: "Fountain Square",
    title: `Auto Body Repair in Fountain Square, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN FOUNTAIN SQUARE, IN`,
    fullService: `Fountain Square is a historic arts and dining district just southeast of downtown Indianapolis, along Virginia Ave. Its residents navigate tight urban streets and downtown traffic, which means dings and dents come with the territory. ${BIZ} provides full-service auto body repair to Fountain Square drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — from our nearby E 26th St shop.`,
    whyChoose: `Fountain Square drivers choose ${BIZ} because we understand city driving takes a toll on a vehicle's body. We quote honestly, fix what needs fixing, and refinish so the repair is invisible. The short drive to our east-side shop brings you to a team that does the job right.`,
    whatWeDo: `From a street-parking ding on Virginia Ave to collision reconstruction after a downtown incident, we handle the full range of body and collision work for Fountain Square drivers:`,
    aboutArea: `Fountain Square is a historic cultural district just southeast of downtown Indianapolis, centered along Virginia Ave at the intersection of Shelby, Prospect, and Fountain Square streets. Known for its art galleries, live music, restaurants, and the Fountain Square Theatre, it draws steady traffic to a compact urban grid with tight street parking. That makes dings, dents, and fender benders a regular occurrence for local drivers, and Indiana winters add rust to the mix.`,
    faqs: [
      {
        question: `Is street-parking dent repair common for Fountain Square vehicles?`,
        answer: `Very common. Fountain Square's tight urban street parking means dings and dents happen regularly. We work the metal back to shape and refinish so the repair blends invisibly with the surrounding paint.`,
      },
      {
        question: `How do I get to your shop from Fountain Square?`,
        answer: `Head east from Fountain Square toward Sherman Ave and E 26th St — about 15 minutes. We're just off I-465 and I-70 and easy to reach from downtown and the southeast side.`,
      },
      {
        question: `Do you handle collision repair for Fountain Square drivers?`,
        answer: `Yes. We provide full collision reconstruction for Fountain Square customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Can you fix bumper damage from city driving?`,
        answer: `Absolutely. Bumped bumpers are common in Fountain Square's tight streets. We repair or replace cracked, scuffed, or loose bumpers and restore both the look and the crash protection.`,
      },
      {
        question: `Do you offer free estimates to Fountain Square drivers?`,
        answer: `Yes. We provide free written estimates for Fountain Square customers. Bring your vehicle by or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Fountain Square customers?`,
        answer: `A single dent or panel refinish takes a few days; major collision work takes a week or more. We give Fountain Square drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Fountain Square claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Fountain Square customers.`,
      },
      {
        question: `Do you serve other downtown-adjacent areas?`,
        answer: `Yes. Beyond Fountain Square, we serve downtown Indianapolis, Beech Grove, Cumberland, and the rest of the central Indiana metro.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Fountain Square, ${SITE.state}. From our E 26th St shop, we help Fountain Square customers fix the dings, dents, and collision damage that come with urban driving.`,
      `Fountain Square's tight street parking and downtown traffic mean dings and bumped bumpers are a regular occurrence, and Indiana winters add rust to the mix. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all in-house.`,
      `From Fountain Square, head east toward Sherman Ave and E 26th St — about 15 minutes. We're convenient for Fountain Square and nearby <a href="/beech-grove-in-auto-body-repair" class="text-primary hover:underline font-semibold">Beech Grove</a> drivers.`,
    ],
  },

  "plainfield-in-auto-body-repair": {
    slug: "plainfield-in-auto-body-repair",
    areaName: "Plainfield, IN",
    areaShort: "Plainfield",
    title: `Auto Body Repair in Plainfield, IN`,
    heroEyebrow: `${MS.toUpperCase()} IN PLAINFIELD, IN`,
    fullService: `Plainfield is a growing suburb on Indianapolis's west side, along US-40 and I-70 near the Indianapolis International Airport. Its residents commute into the city and deal with the same winter conditions as the rest of the metro. ${BIZ} provides full-service auto body repair to Plainfield drivers — collision reconstruction, dent and panel repair, frame straightening, paint refinishing, and rust repair — from our E 26th St shop with over 55 years of experience.`,
    whyChoose: `Plainfield drivers choose ${BIZ} for the quality of the work and the honesty of the process. We quote before we start, communicate throughout, and stand behind every repair. The drive across town to our east-side shop is straightforward, and the work is worth the trip.`,
    whatWeDo: `From a commuter-car dent to collision reconstruction after an I-70 incident, we handle the full range of body and collision work for Plainfield drivers:`,
    aboutArea: `Plainfield is a town on Indianapolis's west side in Hendricks County, along US-40 and I-70, near the Indianapolis International Airport. With a population around 35,000, it's a growing residential and commercial community with easy highway access. Commuter traffic on I-70 and US-40, plus Indiana winters, means Plainfield vehicles see their share of collision damage, dings, and rust — making a dependable auto body shop a regular need.`,
    faqs: [
      {
        question: `How do I get to your shop from Plainfield?`,
        answer: `Take I-70 or I-465 east to the Sherman Ave area and E 26th St — about 25 minutes. We're just off the highway and easy to reach from Plainfield.`,
      },
      {
        question: `Do you handle collision repair for Plainfield drivers?`,
        answer: `Yes. We provide full collision reconstruction for Plainfield customers — frame straightening, panel replacement, mechanical checks, and paint refinishing — and coordinate with your insurance throughout.`,
      },
      {
        question: `Is rust repair common for Plainfield vehicles?`,
        answer: `Yes. Plainfield vehicles face the same Indiana winter salt as the rest of the metro, causing rust on rocker panels, wheel arches, and undercarriages. We remove the corrosion at the source and refinish to stop it spreading.`,
      },
      {
        question: `Can Plainfield businesses use your fleet program?`,
        answer: `Yes. Plainfield businesses with multiple vehicles qualify for our fleet wholesale program — priority scheduling, consolidated billing, and wholesale pricing to keep your fleet moving.`,
      },
      {
        question: `Do you offer free estimates to Plainfield drivers?`,
        answer: `Yes. We provide free written estimates for Plainfield customers. Bring your vehicle by or send photos of the damage for an itemized quote.`,
      },
      {
        question: `How long does a repair take for Plainfield customers?`,
        answer: `Minor dent or panel work takes a few days; major collision reconstruction takes a week or more. We give Plainfield drivers a clear timeline up front and keep you updated throughout.`,
      },
      {
        question: `Do you work with insurance for Plainfield claims?`,
        answer: `Yes. We work with all major insurers and manage the estimate, adjuster coordination, and supplement process for Plainfield customers.`,
      },
      {
        question: `Do you serve other west-side communities?`,
        answer: `Yes. Beyond Plainfield, we serve Speedway, Indianapolis, and the rest of the central Indiana metro from our E 26th St shop.`,
      },
    ],
    locationParagraphs: [
      `${BIZ} provides expert ${MS.toLowerCase()} for drivers in Plainfield, ${SITE.state}. From our E 26th St shop, we help Plainfield customers restore their vehicles after collisions, dents, and rust damage.`,
      `Plainfield's commuter traffic on I-70 and US-40, plus Indiana winter salt, means body and rust damage are common here. We handle dent repair, collision reconstruction, paint refinishing, and rust work — all in-house.`,
      `From Plainfield, take I-70 or I-465 east to the Sherman Ave area and E 26th St — about 25 minutes. We're convenient for Plainfield and nearby <a href="/speedway-in-auto-body-repair" class="text-primary hover:underline font-semibold">Speedway</a> drivers.`,
    ],
  },
};
