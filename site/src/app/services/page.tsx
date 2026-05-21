import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground } from "@/components/BgPatterns";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Dairy equipment services: pump repair, separator maintenance, agitator service, fabrication, emergency response, installation, preventative maintenance, and parts support across California's Central Valley.",
};

const services: { id: string; icon: ServiceIconName; title: string; intro: string; bullets: string[] }[] = [
  {
    id: "pump-repair",
    icon: "pump-repair",
    title: "Manure Pump Repair & Rebuilds",
    intro: "Full pump rebuilds, gearbox replacements, and wear part service from technicians who work on these systems daily.",
    bullets: [
      "Full pump rebuilds and gearbox replacements",
      "Wear part replacement and shaft inspection",
      "Pickup, shop work, and reinstall coordination",
      "Hands on diagnosis from technicians, not parts catalog reads",
    ],
  },
  {
    id: "separator-maintenance",
    icon: "separator",
    title: "Separator Maintenance",
    intro: "Get separator throughput back where it should be with roller, screen, and drive service.",
    bullets: [
      "Roller and screen replacement",
      "Drive component inspection and service",
      "Performance tuning to recover throughput",
      "Documented service history",
    ],
  },
  {
    id: "agitator-service",
    icon: "agitator",
    title: "Agitator Service",
    intro: "Lagoon and pit agitator repair from gearbox to propeller, performed on site whenever possible.",
    bullets: [
      "Lagoon and pit agitator repair",
      "Gearbox, propeller, and seal service",
      "On site troubleshooting",
      "Removal and reinstall coordination",
    ],
  },
  {
    id: "fabrication",
    icon: "fabrication",
    title: "Fabrication",
    intro: "When the factory part is back ordered or doesn't quite fit, we build what you need.",
    bullets: [
      "Custom brackets, manifolds, and mounts",
      "On site cutting, welding, and modification work",
      "Replacement parts when factory parts are unavailable",
      "Field modifications to keep equipment running",
    ],
  },
  {
    id: "emergency-service",
    icon: "emergency-service",
    title: "Emergency Service",
    intro: "Equipment down? Call us. We will coordinate the fastest response we can across the Central Valley.",
    bullets: [
      "Fast response calls when equipment goes down",
      "Field repair when possible, recovery when not",
      "Available to Central Valley dairies",
      "Direct line to a technician, not a queue",
    ],
  },
  {
    id: "installation",
    icon: "installation",
    title: "Installation & Startup Assistance",
    intro: "New equipment commissioned and started right, with operator orientation included.",
    bullets: [
      "New equipment installation",
      "Commissioning and startup support",
      "Operator orientation",
      "Manufacturer documentation handed off properly",
    ],
  },
  {
    id: "preventative-maintenance",
    icon: "preventative-maintenance",
    title: "Preventative Maintenance Programs",
    intro: "Catch wear before it becomes downtime with scheduled inspections and a documented service history.",
    bullets: [
      "Scheduled inspections to catch wear early",
      "Documented service history per piece of equipment",
      "Reduces unplanned downtime",
      "Custom intervals based on your operation",
    ],
  },
  {
    id: "parts-warranty",
    icon: "parts-stocking",
    title: "Parts Stocking & Warranty Support",
    intro: "Wear parts in stock for fast turnaround, manufacturer warranty coordinated through XDS.",
    bullets: [
      "Stocked wear parts for fast turnaround",
      "Warranty coordination with manufacturers",
      "Troubleshooting support",
      "Genuine parts sourced through dealer partnerships",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <TopoBackground variant="dark" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="section-eyebrow on-dark">Services</div>
              <h1 className="mt-3 font-display font-extrabold text-5xl lg:text-6xl text-white leading-[0.95]">
                Eight services. One dependable team.
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed">
                From routine maintenance to emergency calls, XDS handles the full scope of dairy equipment service across California's Central Valley.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <nav aria-label="Services" className="mb-12 flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full border border-xds-line bg-white text-xds-charcoal hover:border-xds-blue hover:text-xds-blue transition-colors"
                >
                  {s.title.replace(" & Rebuilds", "").replace(" Programs", "")}
                </a>
              ))}
            </nav>
          </Reveal>

          <div className="space-y-16">
            {services.map(({ id, icon, title, intro, bullets }, idx) => (
              <Reveal key={id} as="article" delay={idx * 40}>
                <div
                  id={id}
                  className="scroll-mt-24 grid lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-xds-line last:border-b-0 last:pb-0 relative"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <div className="icon-bubble shrink-0">
                        <ServiceIcon name={icon} size={42} />
                      </div>
                      <span className="card-index pt-2">{String(idx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span>
                    </div>
                    <h2 className="mt-4 font-display font-extrabold text-3xl text-xds-ink leading-tight">
                      {title}
                    </h2>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-lg text-xds-slate leading-relaxed">{intro}</p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-xds-charcoal">
                          <span className="w-1.5 h-1.5 rounded-full bg-xds-blue mt-2.5 shrink-0" />
                          <span className="text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Link href="/contact" className="link-underline text-sm font-semibold text-xds-blue hover:text-xds-blue-dark">
                        Request this service <ArrowRight size={14} />
                      </Link>
                      <a href="tel:5599466131" className="link-underline text-sm font-semibold text-xds-slate hover:text-xds-ink">
                        <Phone size={14} /> (559) 946-6131
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Reveal>
            <h2 className="font-display font-extrabold text-3xl text-xds-ink">Tell us what you need</h2>
            <p className="mt-3 text-xds-slate max-w-xl mx-auto">
              Routine, emergency, or new install. Reach out and we'll route you to the right technician.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="tel:5599466131" className="btn-dark"><Phone size={18} /> (559) 946-6131</a>
              <Link href="/contact" className="btn-primary">Send a Message <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
