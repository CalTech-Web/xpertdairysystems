import type { Metadata } from "next";
import Link from "next/link";
import { Handshake, ArrowRight, Phone, Mail } from "lucide-react";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Dealer & Service Partners",
  description:
    "Long term dealer and service partnerships for dairy equipment manufacturers in California's Central Valley.",
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
      <section className="relative bg-xds-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-32 right-1/3 w-[420px] h-[420px] bg-xds-blue/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 left-0 w-[420px] h-[420px] bg-xds-blue-dark/40 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="section-eyebrow text-xds-blue-light">Dealer & Service Partner Program</div>
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
                <Phone size={18} /> (559) 946-6131
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
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

            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 bg-xds-soft border border-xds-line rounded-lg p-4">
                  <Handshake size={20} className="text-xds-blue shrink-0 mt-0.5" />
                  <span className="text-xds-charcoal">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="section-eyebrow">What XDS provides</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
              The full scope of dealer and service partner support.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map(({ icon, title, body }) => (
              <div key={title} className="bg-white border border-xds-line rounded-xl p-6">
                <ServiceIcon name={icon} size={56} />
                <h3 className="mt-4 font-display font-bold text-lg text-xds-ink">{title}</h3>
                <p className="mt-2 text-sm text-xds-slate leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="bg-xds-ink text-white rounded-2xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-xds-blue/30 rounded-full blur-[120px]" />
            <div className="relative max-w-2xl">
              <div className="section-eyebrow text-xds-blue-light">Our goal</div>
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
        </div>
      </section>
    </>
  );
}
