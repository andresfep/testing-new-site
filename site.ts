// Central source of truth for CrashFIX at Williamson on 26th

export const SITE = {
  businessName: "CrashFIX at Williamson on 26th",
  shortName: "CrashFIX",
  industry: "Auto Body Repair",
  mainService: "Auto Body Repair",
  thing: "vehicle",
  customerNoun: "drivers",
  city: "Indianapolis",
  state: "IN",
  stateFull: "Indiana",
  street: "4022 E 26th St",
  streetCity: "Indianapolis, IN 46218",
  phone: "(317) 418-9997",
  phoneHref: "tel:+13174189997",
  email: "crashfix26@gmail.com",
  hours: "Mon-Fri: 9 AM–5 PM",
  hoursShort: "Mon–Fri 9:00am – 5:00pm",
  mapsLink: "https://maps.app.goo.gl/htxDgsHb3b1epqht6",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.0694558321793!2d-86.0982078!3d39.805433799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b51d9781c4e33%3A0x5083948f07ca3f75!2sCrashFIX%20at%20Williamson%20on%2026th!5e0!3m2!1sen!2sph!4v1788924893407!5m2!1sen!2sph",
  logo: "https://vibe.filesafe.space/1788452106586755470/assets/f3227b26-79c2-40f5-a219-fb78ecae5bfa.jpg",
  heroBanner:
    "https://vibe.filesafe.space/1788452106586755470/attachments/9884cf99-d09b-4c6a-a346-c67ab49e4c7b.png",
  ogImage:
    "https://vibe.filesafe.space/1788452106586755470/assets/7f910d2e-80e9-41fb-ba30-21989fe9f7fd.png",
  zelleQr:
    "https://vibe.filesafe.space/1788452106586755470/attachments/8ad2e388-fa62-4d3f-9a10-3773a39ab1eb.png",
};

export interface ServiceInfo {
  slug: string;
  name: string;
  image: string;
  description: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: "auto-body-repair",
    name: "Auto Body Repair",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/6d8c453d-b15e-406b-8491-3a92777ec222.png",
    description:
      "Full dent, panel, and structural body repairs to restore your vehicle's appearance and integrity after damage.",
  },
  {
    slug: "collision-repair",
    name: "Collision Repair",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/468cd892-aad9-4e0a-b623-011a29e589f8.png",
    description:
      "Post-accident reconstruction — frame, panels, and bumpers realigned and replaced to pre-crash condition.",
  },
  {
    slug: "insurance-claim-assistance",
    name: "Insurance Claim Assistance",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/45f353b1-c55a-478b-a514-dedeb25fc66e.png",
    description:
      "We handle the estimate, the adjuster, and the paperwork so your insurance claim moves without the headache.",
  },
  {
    slug: "fleet-wholesale-repair",
    name: "Fleet Wholesale Repair",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/974638c9-46d9-4b4a-9c69-82bea6581771.png",
    description:
      "Volume body and collision repair for commercial fleets, with wholesale pricing and fast turnaround.",
  },
  {
    slug: "rust-repair",
    name: "Rust Repair",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/0fe1ae65-31b5-40e0-8e96-6a34e75bcdc5.png",
    description:
      "Surface and structural rust cut out, treated, and refinished before corrosion spreads through the body.",
  },
  {
    slug: "mechanical-repairs",
    name: "Mechanical Repairs",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/305dcdbf-8dff-47f1-b03e-8f4521a30613.png",
    description:
      "Engine, brake, suspension, and drivetrain work handled in-house so your vehicle drives as good as it looks.",
  },
  {
    slug: "inspections",
    name: "Inspections",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/0c5f58ab-d30e-48fd-9e35-caaaa5dc770e.png",
    description:
      "Thorough pre-repair and post-repair inspections that confirm your vehicle is safe and road-ready.",
  },
  {
    slug: "car-paint-refinishing",
    name: "Car Paint Refinishing",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/2ce73d35-c7d2-448e-9e89-9202f798552c.png",
    description:
      "Color-matched paint and clearcoat refinishing that blends repaired panels seamlessly with the rest of the car.",
  },
  {
    slug: "unibody-frame-pull-and-repair",
    name: "Unibody Frame Pull And Repair",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/1862a896-1387-4359-b9ce-233befecc892.png",
    description:
      "Precision frame straightening on a dedicated alignment rack to restore factory tolerances after an impact.",
  },
  {
    slug: "bring-your-own-part-repair",
    name: "Bring Your Own Part Repair",
    image:
      "https://vibe.filesafe.space/1788452106586755470/assets/cf368614-08bb-4fd3-b32a-187368f77a1c.png",
    description:
      "Supply your own part and we'll install it correctly — labor-only repair on parts you source yourself.",
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export interface ServiceAreaInfo {
  slug: string;
  name: string;
  shortName: string;
}

export const AREAS: ServiceAreaInfo[] = [
  {
    slug: "indianapolis-in-auto-body-repair",
    name: "Indianapolis, IN",
    shortName: "Indianapolis",
  },
  {
    slug: "cumberland-in-auto-body-repair",
    name: "Cumberland, IN",
    shortName: "Cumberland",
  },
  {
    slug: "fishers-in-auto-body-repair",
    name: "Fishers, IN",
    shortName: "Fishers",
  },
  {
    slug: "broad-ripple-in-auto-body-repair",
    name: "Broad Ripple, IN",
    shortName: "Broad Ripple",
  },
  {
    slug: "beech-grove-in-auto-body-repair",
    name: "Beech Grove, IN",
    shortName: "Beech Grove",
  },
  {
    slug: "speedway-in-auto-body-repair",
    name: "Speedway, IN",
    shortName: "Speedway",
  },
  {
    slug: "lawrence-in-auto-body-repair",
    name: "Lawrence, IN",
    shortName: "Lawrence",
  },
  {
    slug: "castleton-in-auto-body-repair",
    name: "Castleton, IN",
    shortName: "Castleton",
  },
  {
    slug: "fountain-square-in-auto-body-repair",
    name: "Fountain Square, IN",
    shortName: "Fountain Square",
  },
  {
    slug: "plainfield-in-auto-body-repair",
    name: "Plainfield, IN",
    shortName: "Plainfield",
  },
];

export const GALLERY_IMAGES = [
  "https://vibe.filesafe.space/1788452106586755470/assets/0e609dcc-a52d-4a35-8cb6-f90e14c274d7.jpg", // cf01
  "https://vibe.filesafe.space/1788452106586755470/assets/f46d2da3-bcd6-4adb-a4b4-961e41babb37.jpg", // cf02
  "https://vibe.filesafe.space/1788452106586755470/assets/449bc7fa-ec1b-4666-bdf2-7a7dedf27a98.jpg", // cf03
  "https://vibe.filesafe.space/1788452106586755470/assets/ab96bcbf-9216-4312-9efa-5190a2cdc0e1.jpg", // cf04
  "https://vibe.filesafe.space/1788452106586755470/assets/a53f575f-b556-46d1-907f-486a1595fd38.jpg", // cf05
  "https://vibe.filesafe.space/1788452106586755470/assets/2800f8e4-bd5e-4beb-8ce2-4dcffcce2f65.jpg", // cf06
  "https://vibe.filesafe.space/1788452106586755470/assets/682bba19-603f-442e-ae82-a6dc2c2868a7.jpg", // cf07
  "https://vibe.filesafe.space/1788452106586755470/assets/2b5d7d2f-6c68-49ef-9dd3-0bd987c74ed8.jpg", // cf08
  "https://vibe.filesafe.space/1788452106586755470/assets/1d8afa34-149f-477a-9ba5-70453812c7f1.jpg", // cf09
  "https://vibe.filesafe.space/1788452106586755470/assets/5177d432-4d29-43c9-ade3-7532831c01a4.jpg", // cf10
  "https://vibe.filesafe.space/1788452106586755470/assets/64112874-da0f-4efb-9ffe-4c94e4858c5a.jpg", // cf11
  "https://vibe.filesafe.space/1788452106586755470/assets/21f6afd9-294a-4305-a9cd-0a692a2eab5e.jpg", // cf12
  "https://vibe.filesafe.space/1788452106586755470/assets/460ef85d-d937-4908-a12a-0b3b5f3562a5.jpg", // cf13
];

export const serviceBySlug = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);

export const areaBySlug = (slug: string) => AREAS.find((a) => a.slug === slug);
