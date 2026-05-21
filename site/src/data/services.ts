import type { ServiceIconName } from "@/components/ServiceIcon";

export interface Service {
  slug: string;
  icon: ServiceIconName;
  shortTitle: string;        // dropdown / card label
  title: string;              // hero h1
  oneLiner: string;           // card body / nav description
  intro: string;              // hero subhead
  problemStatement: {
    headline: string;
    body: string;
  };
  approach: {
    headline: string;
    body: string;
  };
  whatsIncluded: string[];
  commonIssues: { title: string; body: string }[];
  process: { step: string; body: string }[];
  faqs?: { q: string; a: string }[];
  related: string[];          // slugs
  ctaHeadline: string;
}

export const SERVICES: Service[] = [
  {
    slug: "pump-repair",
    icon: "pump-repair",
    shortTitle: "Pump Repair",
    title: "Manure Pump Repair & Rebuilds",
    oneLiner: "Full pump rebuilds, gearbox replacements, and wear part service.",
    intro:
      "Centrifugal, vertical, and piston manure pumps rebuilt by technicians who work on these systems every day. Pickup, shop work, and reinstall coordinated across California's Central Valley.",
    problemStatement: {
      headline: "Pumps fail. The dairy doesn't wait.",
      body: "Manure pumps run in the harshest environment on a dairy. Impellers wear, seals leak, gearboxes lose oil, and shafts go out of alignment. When a transfer pump quits, lagoon levels back up. When a flush pump fails, the barn can't be cleaned. Operators need a partner who can diagnose fast, source the right parts, and get the system running again without bouncing through three vendors.",
    },
    approach: {
      headline: "Hands on diagnosis, not parts catalog reads.",
      body: "Our technicians have rebuilt enough pumps to know what fails first on each platform. We pull the pump, inspect the impeller, shaft, bearings, seals, and gearbox, give the operator an honest assessment, and either repair on site or move it to the shop for a full rebuild. When we put it back in, it stays running.",
    },
    whatsIncluded: [
      "Full pump rebuilds with shaft, bearing, and seal replacement",
      "Gearbox repair and gearbox replacement",
      "Impeller and wear plate replacement",
      "Shaft alignment and runout inspection",
      "Pickup, shop work, and reinstall coordination",
      "Documented service history per pump",
      "Honest 'rebuild vs replace' recommendations",
    ],
    commonIssues: [
      { title: "Worn impeller / wear plates", body: "Reduced flow, vibration, or excessive amp draw. Usually fixable with a wear part replacement before it cascades into seal or shaft damage." },
      { title: "Gearbox failure", body: "Oil contamination, bearing failure, or stripped gears. We rebuild or replace, depending on age and condition." },
      { title: "Seal leaks", body: "Mechanical seal failure is one of the most common reasons a pump comes to our shop. Caught early, it's a quick repair." },
      { title: "Shaft bend or misalignment", body: "Often caused by debris strikes or improper installation. We straighten, replace, and realign." },
      { title: "Bearing failure", body: "Heat, noise, or unusual vibration. Replaced as part of any rebuild." },
    ],
    process: [
      { step: "1. Call or request", body: "Tell us what the pump is doing. We'll triage and schedule." },
      { step: "2. On-site inspection", body: "Technician checks the unit in place when possible to confirm the failure mode." },
      { step: "3. Pickup or field repair", body: "Minor work happens on site. Full rebuilds go to the shop." },
      { step: "4. Rebuild + bench test", body: "Parts replaced, seals reset, gearbox serviced, alignment checked." },
      { step: "5. Reinstall + startup", body: "Pump goes back in, the operator gets a service report, and we follow up." },
    ],
    related: ["agitator-service", "preventative-maintenance", "fabrication"],
    ctaHeadline: "Got a pump down? Let's get it running.",
  },

  {
    slug: "separator-maintenance",
    icon: "separator",
    shortTitle: "Separator Maintenance",
    title: "Separator Maintenance & Repair",
    oneLiner: "Roller, screen, and drive service to recover separator throughput.",
    intro:
      "Screw press and screen separators serviced to recover throughput, reduce wear part costs, and keep solids handling on schedule. Roller replacement, screen cleaning, and drive component service.",
    problemStatement: {
      headline: "When throughput drops, the lagoon fills.",
      body: "Solids separators are precision equipment running in an unforgiving setting. Screens blind, rollers wear, drive belts slip, and bearings fail. When throughput drops, solids volume backs up, lagoon levels climb, and the dairy's nutrient management plan starts slipping. The trick is catching wear before it shuts the unit down.",
    },
    approach: {
      headline: "Restore the unit to spec, then keep it there.",
      body: "We service screw presses, screen separators, and roller presses. Our technicians inspect every wear component, replace what's done, tune the drive, and document where the unit is in its service life. After the rebuild, we set a maintenance interval so the next service is scheduled, not reactive.",
    },
    whatsIncluded: [
      "Roller, screen, and screw replacement",
      "Drive belt, chain, and gearbox service",
      "Bearing replacement and seal inspection",
      "Hydraulic component check for press units",
      "Throughput recovery tuning",
      "Documented service history",
      "Maintenance interval recommendation",
    ],
    commonIssues: [
      { title: "Screen blinding / wear", body: "Reduced output and higher liquid carryover. Cleaning, repair, or replacement depending on damage." },
      { title: "Worn rollers", body: "Loss of compression and inconsistent solids output. Roller surface restoration or replacement." },
      { title: "Drive belt slip", body: "Loss of consistent screw speed. Belts replaced and tension reset." },
      { title: "Gearbox / bearing wear", body: "Noise or heat from the drive end. Service or replacement before catastrophic failure." },
      { title: "Hydraulic press issues", body: "On press separators, hydraulic component checks and pressure adjustments." },
    ],
    process: [
      { step: "1. Performance check", body: "Visit the unit and compare current output against spec." },
      { step: "2. Component inspection", body: "Open the screen / roller / press housing to assess wear." },
      { step: "3. Parts sourced", body: "Wear parts pulled from stock or coordinated through the manufacturer." },
      { step: "4. Service + tune", body: "Replacement, alignment, belt tension, and drive adjustment." },
      { step: "5. Throughput verification", body: "Run the unit, confirm output is back to spec, hand off a service report." },
    ],
    related: ["pump-repair", "preventative-maintenance", "parts-warranty"],
    ctaHeadline: "Separator output dropping? Let's recover it.",
  },

  {
    slug: "agitator-service",
    icon: "agitator",
    shortTitle: "Agitator Service",
    title: "Lagoon & Pit Agitator Service",
    oneLiner: "Lagoon and pit agitator repair, gearbox and propeller work.",
    intro:
      "Floating, propeller-driven, and PTO agitators serviced for Central Valley dairies. Gearbox repair, propeller replacement, seal service, and on site troubleshooting.",
    problemStatement: {
      headline: "An agitator that won't move solids is just expensive.",
      body: "Agitators take direct abuse, debris strikes, and constant submersion. Propellers wear or bend, gearboxes lose oil, seals fail, and shaft alignment drifts. A unit that's still spinning but not actually mixing means stratified lagoons, settled solids, and downstream pumping problems.",
    },
    approach: {
      headline: "Field repair when possible. Full rebuild when not.",
      body: "We service every common agitator platform on Central Valley dairies. Our technicians pull and inspect propellers, replace gearbox oil and bearings, service mechanical seals, and check shaft alignment. Most service happens on site. When the unit needs to come out, we coordinate the lift, the repair, and the reinstall.",
    },
    whatsIncluded: [
      "Propeller replacement and pitch adjustment",
      "Gearbox repair and oil service",
      "Mechanical seal replacement",
      "Shaft alignment and runout check",
      "Drive coupling and bearing service",
      "On site troubleshooting",
      "Removal and reinstall coordination",
    ],
    commonIssues: [
      { title: "Damaged propeller", body: "Bent blades, missing edges, or debris strikes. Replacement is usually faster than repair." },
      { title: "Gearbox failure", body: "Oil contamination, bearing failure, internal gear damage. Service or replace." },
      { title: "Seal leakage", body: "Submerged seal failure lets water into the gearbox. Caught early, it's a seal swap. Caught late, it's a gearbox." },
      { title: "Shaft misalignment", body: "Often caused by debris or improper reinstall. We straighten, realign, and document." },
      { title: "Drive coupling wear", body: "Lost torque transfer to the propeller. Replaced as part of any drive-end service." },
    ],
    process: [
      { step: "1. Initial assessment", body: "Operator describes the symptom, we triage on the phone." },
      { step: "2. On site inspection", body: "Power down, lockout, lift if needed, inspect the unit." },
      { step: "3. Diagnose + quote", body: "Honest assessment of what needs replacing and what's still in spec." },
      { step: "4. Repair", body: "Most work happens on site or in our shop with quick turnaround." },
      { step: "5. Reinstall + run check", body: "Reinstalled, started up, and verified mixing properly before we leave." },
    ],
    related: ["pump-repair", "fabrication", "preventative-maintenance"],
    ctaHeadline: "Agitator down or just not mixing? Let's check it out.",
  },

  {
    slug: "fabrication",
    icon: "fabrication",
    shortTitle: "Fabrication",
    title: "Custom Fabrication & Field Welding",
    oneLiner: "Custom brackets, manifolds, mounts, and field welding.",
    intro:
      "When the factory part is back ordered, the off-the-shelf piece doesn't quite fit, or you need a custom solution, our fabrication shop builds what your dairy needs.",
    problemStatement: {
      headline: "Sometimes the right part doesn't exist yet.",
      body: "Dairy equipment ages, gets modified, and lives in conditions the original designer never imagined. When a factory part is back ordered for six weeks, a bracket needs to fit a non-standard mount, or a piping change needs a custom manifold, the dairy can't wait. That's where fabrication comes in.",
    },
    approach: {
      headline: "Build it. Install it. Stand behind it.",
      body: "Our fabrication capability is one of the things that sets XDS apart. We measure, design, cut, weld, and install. Custom brackets, manifolds, valve mounts, piping changes, and structural reinforcement. On site cutting and welding when it makes sense, shop work when it doesn't.",
    },
    whatsIncluded: [
      "Custom brackets, manifolds, and mounts",
      "Piping changes and custom flange work",
      "On site cutting and welding",
      "Replacement parts when factory parts are unavailable",
      "Structural reinforcement and equipment guarding",
      "Stainless and mild steel fabrication",
      "Field modifications to keep equipment running",
    ],
    commonIssues: [
      { title: "Back-ordered factory part", body: "We fabricate a replacement so the dairy doesn't sit waiting." },
      { title: "Non-standard equipment retrofit", body: "Adapting older units to new replacement components." },
      { title: "Site-specific custom mount", body: "When the equipment is correct but the mount needs to be made for the location." },
      { title: "Piping or manifold revision", body: "Routing changes that need new welded components." },
      { title: "Structural reinforcement", body: "Damaged frames, guards, and platforms repaired or replaced." },
    ],
    process: [
      { step: "1. Measure on site", body: "Technician comes out, measures, and confirms what's needed." },
      { step: "2. Design + quote", body: "We confirm material, tolerances, and timeline before any cutting." },
      { step: "3. Shop fabrication", body: "Cut, welded, finished in our shop." },
      { step: "4. Install or deliver", body: "We install on site or deliver if the dairy is handling the install." },
      { step: "5. Document", body: "Drawings and material specs saved with the equipment's service history." },
    ],
    related: ["pump-repair", "agitator-service", "installation"],
    ctaHeadline: "Need something built? Tell us what's not fitting.",
  },

  {
    slug: "emergency-service",
    icon: "emergency-service",
    shortTitle: "Emergency Service",
    title: "Emergency Dairy Equipment Service",
    oneLiner: "Fast response calls when dairy equipment goes down.",
    intro:
      "When a pump quits, an agitator stops, or a separator goes down, the dairy can't wait. Call XDS and we will coordinate the fastest response we can across California's Central Valley.",
    problemStatement: {
      headline: "Downtime is dollars. Every hour.",
      body: "A failed transfer pump can back up a lagoon in a day. A failed agitator means stratification within hours. A failed separator means solids volume climbing through your handling system. When something critical goes down, the cost isn't the repair, it's everything that backs up behind it.",
    },
    approach: {
      headline: "One call. Direct to a technician.",
      body: "Our emergency service line connects you to a technician, not a queue. We triage the failure on the phone, dispatch what we can, and get the dairy back up. Field repair when possible, shop work and recovery when the unit has to come out. We coordinate, communicate, and don't disappear after the truck leaves.",
    },
    whatsIncluded: [
      "Direct call to (559) 946-6131",
      "Phone triage to confirm symptoms and parts needed",
      "Dispatch with the parts most likely to be the fix",
      "Field repair when possible, recovery when not",
      "Available to Central Valley dairies",
      "Follow up after the repair to confirm the unit is stable",
      "Service report and recommended next steps",
    ],
    commonIssues: [
      { title: "Pump won't start or won't pump", body: "Electrical, mechanical, or seal failure. We triage on the phone, often dispatch with the part." },
      { title: "Agitator quit mixing", body: "Drive failure, coupling failure, or propeller damage. Field diagnosis." },
      { title: "Separator output stopped", body: "Drive failure, blockage, or wear part failure." },
      { title: "Hydraulic system failure", body: "On press units, hydraulic failures need fast attention." },
      { title: "Unexpected leak or flood condition", body: "Triage and stabilize first, then permanent repair." },
    ],
    process: [
      { step: "1. Call", body: "(559) 946-6131. You'll get a technician on the line." },
      { step: "2. Triage", body: "We work through symptoms to narrow the failure." },
      { step: "3. Dispatch", body: "Technician rolls with the parts most likely needed." },
      { step: "4. Stabilize", body: "Get the dairy moving again, even if it's a temporary fix while we source parts." },
      { step: "5. Permanent repair", body: "Confirm the full repair, schedule the follow up, document." },
    ],
    related: ["pump-repair", "agitator-service", "preventative-maintenance"],
    ctaHeadline: "Equipment down right now? Call (559) 946-6131.",
  },

  {
    slug: "installation",
    icon: "installation",
    shortTitle: "Installation & Startup",
    title: "Equipment Installation & Startup",
    oneLiner: "New equipment installation, commissioning, and operator orientation.",
    intro:
      "New pumps, agitators, separators, and related equipment installed and commissioned by technicians who already service them. The first run matters. We make sure it goes right.",
    problemStatement: {
      headline: "A bad install costs more than the equipment.",
      body: "New equipment that's misaligned, undersized, or installed without proper electrical and mechanical setup becomes a service problem within months. Operators inherit a unit that doesn't quite work right, and warranties get murky fast. The right installation pays for itself the first year.",
    },
    approach: {
      headline: "Installed by the same team that will service it.",
      body: "When XDS installs the equipment, we're the team that maintains it for the next ten years. That changes how the install happens. Mounts get verified, electrical gets confirmed, plumbing gets tested, and the operator gets a real handoff with documentation. No 'good luck' as we drive away.",
    },
    whatsIncluded: [
      "New equipment installation across the Central Valley",
      "Mechanical mounting, alignment, and confirmation",
      "Electrical hookup coordination with the dairy's electrician",
      "Plumbing and piping connections",
      "Commissioning and first-run verification",
      "Operator orientation and walkthrough",
      "Manufacturer documentation handed off properly",
    ],
    commonIssues: [
      { title: "Mount alignment", body: "Especially critical for pumps and agitators. We check runout, baseplate level, and coupling alignment." },
      { title: "Electrical sizing and direction", body: "Wrong rotation kills a pump. We confirm before startup." },
      { title: "Plumbing fit", body: "New equipment, old piping, often needs adapters. We have fabrication for the gaps." },
      { title: "Operator handoff", body: "Half the post-install service calls are 'I'm not sure what this does.' We walk it through." },
      { title: "Documentation", body: "Manuals, serial numbers, warranty registration, all handed off in writing." },
    ],
    process: [
      { step: "1. Pre-install site visit", body: "Confirm the install site, measurements, utility connections, and access." },
      { step: "2. Equipment receiving", body: "Inspect on arrival for transit damage." },
      { step: "3. Install", body: "Mount, plumb, wire, and align." },
      { step: "4. Commission", body: "First run with the manufacturer's startup procedure." },
      { step: "5. Handoff", body: "Operator walkthrough and documentation transfer." },
    ],
    related: ["fabrication", "preventative-maintenance", "parts-warranty"],
    ctaHeadline: "Have new equipment coming in? Let's plan the install.",
  },

  {
    slug: "preventative-maintenance",
    icon: "preventative-maintenance",
    shortTitle: "Preventative Maintenance",
    title: "Preventative Maintenance Programs",
    oneLiner: "Scheduled inspections that catch wear before downtime.",
    intro:
      "Scheduled service intervals, documented service history, and proactive wear-part replacement. The cheapest service call is the one you make on a calendar, not an emergency.",
    problemStatement: {
      headline: "Reactive service is the most expensive service.",
      body: "Every dairy operator knows the math. A planned shutdown for a $400 wear part is one tenth the cost of an emergency call for a $4,000 catastrophic failure that took out related components. The challenge is that preventative maintenance is invisible, easy to defer, and the first thing cut when the calendar gets tight.",
    },
    approach: {
      headline: "We keep your schedule. You stay running.",
      body: "Our preventative maintenance programs are tailored to your operation. Service intervals based on hours, throughput, or calendar. Every visit produces a written service report. Every piece of equipment has its own history file. The amber dot on your service calendar is one less midnight emergency call.",
    },
    whatsIncluded: [
      "Scheduled inspections on your interval",
      "Wear part replacement before failure",
      "Oil sampling and gearbox health check",
      "Seal, bearing, and alignment verification",
      "Drive belt and coupling inspection",
      "Documented service history per piece of equipment",
      "Recommendations for upcoming replacements",
    ],
    commonIssues: [
      { title: "Skipped intervals", body: "Most issues we see in emergency service are from skipped or delayed maintenance. PM solves this." },
      { title: "Missing service history", body: "Without history, every repair starts at zero. Our reports build a permanent record." },
      { title: "Wear part surprises", body: "When wear parts fail unexpectedly, the operator pays more. PM catches them before they cascade." },
      { title: "Gearbox oil contamination", body: "Silent killer. Routine sampling catches water intrusion early." },
      { title: "Alignment drift", body: "Easier to correct early than after it causes bearing failure." },
    ],
    process: [
      { step: "1. Baseline visit", body: "Walk every piece of equipment, document current state." },
      { step: "2. Build the schedule", body: "Custom intervals based on operation, equipment, and seasonality." },
      { step: "3. Routine service visits", body: "Show up, service, document, hand off the report." },
      { step: "4. Quarterly review", body: "Catch anything off baseline and plan upcoming replacements." },
      { step: "5. Annual report", body: "Year-end summary of work done, parts replaced, and recommended priorities." },
    ],
    related: ["pump-repair", "agitator-service", "separator-maintenance"],
    ctaHeadline: "Want to stop running on emergencies? Let's plan a schedule.",
  },

  {
    slug: "parts-warranty",
    icon: "parts-stocking",
    shortTitle: "Parts & Warranty",
    title: "Parts Stocking & Warranty Support",
    oneLiner: "Stocked wear parts, manufacturer warranty coordination.",
    intro:
      "Wear parts in stock for fast turnaround, manufacturer warranties coordinated through XDS, and troubleshooting support so dairy operators don't get bounced between vendors.",
    problemStatement: {
      headline: "A part on the shelf beats a part on a truck.",
      body: "When equipment goes down, the slowest part of the repair is waiting for parts. Manufacturer warranty claims add a second layer of waiting and a third party who often doesn't know your dairy. The dairy needs a local partner who has the common wear parts on hand and who can run the warranty paperwork on their behalf.",
    },
    approach: {
      headline: "Stocked. Sourced. Coordinated.",
      body: "We keep the parts that fail most often on the shelf. For everything else, we source through our manufacturer dealer relationships. Warranty claims are run through XDS so the dairy doesn't spend the day on the phone with someone in another time zone. Troubleshooting support is a phone call, not a ticket queue.",
    },
    whatsIncluded: [
      "Stocked wear parts for fast turnaround",
      "Genuine manufacturer parts via dealer partnerships",
      "Warranty claim coordination on the dairy's behalf",
      "Troubleshooting phone support",
      "Cross-reference for legacy and discontinued parts",
      "Recommendations for stocked spares",
      "Documentation of part history per piece of equipment",
    ],
    commonIssues: [
      { title: "Wear part lead time", body: "We stock the common ones so the dairy doesn't wait." },
      { title: "Discontinued / legacy parts", body: "Cross-reference, source, or fabricate." },
      { title: "Warranty paperwork", body: "We file with the manufacturer and follow up." },
      { title: "Wrong part shipped", body: "We coordinate the return and the right replacement." },
      { title: "Troubleshooting before parts", body: "Sometimes the failure isn't the part you'd assume. We help diagnose first." },
    ],
    process: [
      { step: "1. Identify the part", body: "Send a photo, serial number, or description. We confirm." },
      { step: "2. Check stock", body: "If we have it, it ships or gets picked up same day." },
      { step: "3. Source if not stocked", body: "We order through the manufacturer or distributor." },
      { step: "4. Warranty review", body: "If the part is under warranty, we file the claim." },
      { step: "5. Follow up", body: "Confirm the install solved the issue and update service history." },
    ],
    related: ["preventative-maintenance", "pump-repair", "installation"],
    ctaHeadline: "Need a part or warranty help? We've got you.",
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelated(service: Service): Service[] {
  return service.related
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
}
