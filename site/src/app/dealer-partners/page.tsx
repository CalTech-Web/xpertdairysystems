import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, ArrowRight, Phone, Mail } from "lucide-react";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground, BlueprintLines } from "@/components/BgPatterns";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Dealer & Service Partner Program for Dairy Manufacturers",
  description:
    "Manufacturer dealer and service partner program for dairy equipment in California's Central Valley. Local installation, repair, warranty, and parts support from XPERT Dairy Systems.",
  alternates: { canonical: "/dealer-partners" },
  openGraph: {
    title: "Dealer & Service Partner Program | XPERT Dairy Systems",
    description:
      "Manufacturer dealer and service partnerships for dairy equipment in California's Central Valley.",
    url: "/dealer-partners",
  },
};

const offers: { icon: ServiceIconName; title: string; body: string }[] = [
  { icon: "equipment-sales", title: "Equipment Sales", body: "Carrying and selling manufacturer products direct to dairy operators we already serve." },
  { icon: "pump-repair", title: "Pump & Agitator Repairs", body: "Daily field experience with rebuilds, gearbox replacements, and seal service." },
  { icon: "parts-stocking", title: "Parts Stocking & Support", body: "Wear parts on hand for fast turnaround. Genuine manufacturer parts coordinated through XDS." },
  { icon: "emergency-service", title: "Emergency Service", body: "Fast response coverage so manufacturers know their customers are taken care of." },
  { icon: "installation", title: "Installation & Startup", body: "Proper commissioning, operator orientation, and documentation handoff." },
  { icon: "preventative-maintenance", title: "Preventative Maintenance", body: "Scheduled programs that extend equipment life and demonstrate ROI to the dairy." },
];

const benefits = [
  "Strong dairy relationships throughout California's Central Valley",
  "Actively onsite at dairies every week",
  "Hands on experience with pump rebuilds, gearbox replacements, and separator repair",
  "Fabrication capability for field modifications",
  "Emergency service network across the valley",
  "Warranty support and troubleshooting",
  "Trusted local service and support partner",
];

export default function DealerPartnersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Dealer Partners", url: "/dealer-partners" }]} />
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <BlueprintLines className="hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <div className="section-eyebrow on-dark">Dealer & Service Partner Program</div>
              <h1 className="mt-3 font-display font-extrabold text-5xl lg:text-6xl text-white leading-[0.95]">
                For manufacturers who need boots on the ground.
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed">
                XPERT Dairy Systems is actively building long term partnerships with manufacturers who value quality customer support, fast service response, industry knowledge, and long term growth in California's dairy industry.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="mailto:Xpertdairy@gmail.com?subject=Dealer%20Partnership%20Inquiry" className="btn-primary">
                  <Mail size={18} /> Email a Partnership Inquiry
                </a>
                <a href="tel:5599466131" className="btn-ghost">
                  <span className="phone-ring"><Phone size={18} /></span> (559) 946-6131
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="relative">
                <div className="section-eyebrow">Why XDS</div>
                <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
                  A stronger dealer because we do the actual work.
                </h2>
                <p className="mt-6 text-lg text-xds-slate leading-relaxed">
                  Unlike sales only dealers, XDS works directly on manure systems daily. Our team has extensive experience with pump rebuilds, gearbox replacements, separator repairs, fabrication work, emergency service calls, and preventative maintenance programs.
                </p>
                <p className="mt-4 text-base text-xds-slate leading-relaxed">
                  That means when one of your customers calls about an issue, the answer doesn't come from a brochure. It comes from someone who was hand on the equipment last week.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ul className="divide-y divide-xds-line border-y border-xds-line">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-4 py-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-xds-blue/10 flex items-center justify-center mt-0.5">
                      <Handshake size={15} className="text-xds-blue" />
                    </span>
                    <span className="text-xds-charcoal leading-snug">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-xds-soft overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <div className="section-eyebrow">What XDS provides</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
                The full scope of dealer and service partner support.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map(({ icon, title, body }, idx) => (
              <Reveal key={title} delay={idx * 50}>
                <div className="card-lift relative h-full flex flex-col bg-white border border-xds-line rounded-xl p-6">
                  <span className="card-index absolute top-4 right-5">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="icon-bubble">
                    <ServiceIcon name={icon} size={36} />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg text-xds-ink">{title}</h3>
                  <p className="mt-2 text-sm text-xds-slate leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative text-white rounded-2xl p-10 lg:p-16 overflow-hidden">
              <MeshBackground />
              <BlueprintLines className="hidden lg:block" />
              <div className="relative max-w-2xl">
                <div className="section-eyebrow on-dark">Our goal</div>
                <h2 className="mt-3 font-display font-extrabold text-4xl text-white leading-tight">
                  Long term partnerships, not one off sales.
                </h2>
                <p className="mt-6 text-lg text-white/75 leading-relaxed">
                  XDS is looking to establish long term partnerships with manufacturers that value quality customer support, fast service response, industry knowledge, and long term growth in California's dairy industry.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="mailto:Xpertdairy@gmail.com?subject=Dealer%20Partnership%20Inquiry" className="btn-primary">
                    <Mail size={18} /> Email a Partnership Inquiry
                  </a>
                  <Link href="/contact" className="btn-ghost">
                    Use Contact Form <ArrowRight size={18} />
                  </Link>
                </div>
                <p className="mt-8 text-sm text-white/50">
                  UB Rodriguez, CEO &middot; XPERT Dairy Systems Inc. &middot; Central Valley, California
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
