import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground } from "@/components/BgPatterns";
import { BreadcrumbSchema } from "@/components/Schema";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Dairy Equipment Services in Central Valley",
  description:
    "Eight dairy equipment services in California's Central Valley: pump repair, separator and agitator service, fabrication, installation, preventative maintenance, parts, and emergency support.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dairy Equipment Services in Central Valley | XPERT Dairy Systems",
    description:
      "Eight dairy equipment services from Tulare, CA. Pump repair, separator and agitator service, fabrication, installation, preventative maintenance, parts, and emergency support.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
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
                From routine maintenance to emergency calls, XDS handles the full scope of dairy equipment service across California's Central Valley. Tap into any service for the full scope, common issues we fix, and our process.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, idx) => (
              <Reveal key={s.slug} delay={idx * 40}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group card-lift relative h-full flex flex-col bg-white border border-xds-line rounded-2xl p-7"
                >
                  <span className="card-index absolute top-5 right-6">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="icon-bubble">
                    <ServiceIcon name={s.icon} size={36} />
                  </div>
                  <h2 className="mt-5 font-display font-bold text-xl text-xds-ink leading-snug">
                    {s.shortTitle}
                  </h2>
                  <p className="mt-2 text-sm text-xds-slate leading-relaxed">{s.oneLiner}</p>
                  <ul className="mt-5 space-y-1.5 text-xs text-xds-slate">
                    {s.whatsIncluded.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-xds-blue mt-1.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="slide-arrow mt-auto pt-5 text-xs font-semibold uppercase tracking-wider text-xds-blue">
                    View service
                    <ArrowRight size={12} />
                  </div>
                </Link>
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
              <a href="tel:5599466131" className="btn-dark">
                <span className="phone-ring"><Phone size={18} /></span>
                (559) 946-6131
              </a>
              <Link href="/contact" className="btn-primary">Send a Message <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
