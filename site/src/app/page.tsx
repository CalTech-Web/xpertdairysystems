import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import Faq from "@/components/Faq";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";

const faqs = [
  {
    q: "What areas does XDS serve?",
    a: "We serve dairy operations throughout California's Central Valley from our base in Tulare. If you operate a dairy in the valley, we can get a technician to you.",
  },
  {
    q: "Do you handle emergency calls when equipment goes down?",
    a: "Yes. Emergency service is one of our core offerings. Call (559) 946-6131 and we will coordinate the fastest response we can.",
  },
  {
    q: "What equipment do you work on?",
    a: "Manure pumps, agitators, separators, gearboxes, and related dairy equipment. We do full rebuilds, parts replacement, and fabrication work when factory parts are not available.",
  },
  {
    q: "Can you install new equipment from manufacturers we already work with?",
    a: "Yes. Installation and startup assistance is part of what we do, and we are actively building dealer partnerships with manufacturers so we can also source the equipment for you.",
  },
  {
    q: "Do you offer preventative maintenance contracts?",
    a: "Yes. Scheduled maintenance programs let us catch wear before it becomes downtime, and we document service history for each piece of equipment.",
  },
  {
    q: "Are you a sales only dealer?",
    a: "No. The XDS team is onsite at dairies every week doing the actual repair, fabrication, and service work. We sell equipment as part of our manufacturer partnerships, but our identity is field service.",
  },
];

const services: { icon: ServiceIconName; title: string; body: string; href: string }[] = [
  { icon: "pump-repair", title: "Pump Repair & Rebuilds", body: "Full pump rebuilds, gearbox replacements, and wear part service.", href: "/services#pump-repair" },
  { icon: "separator", title: "Separator Maintenance", body: "Roller, screen, and drive service to recover separator throughput.", href: "/services#separator-maintenance" },
  { icon: "agitator", title: "Agitator Service", body: "Lagoon and pit agitator repair, gearbox and propeller work.", href: "/services#agitator-service" },
  { icon: "fabrication", title: "Fabrication", body: "Custom brackets, manifolds, mounts, and field welding.", href: "/services#fabrication" },
  { icon: "emergency-service", title: "Emergency Service", body: "Fast response calls when dairy equipment goes down.", href: "/services#emergency-service" },
  { icon: "installation", title: "Installation & Startup", body: "New equipment installation, commissioning, and operator orientation.", href: "/services#installation" },
  { icon: "preventative-maintenance", title: "Preventative Maintenance", body: "Scheduled inspections that catch wear before downtime.", href: "/services#preventative-maintenance" },
  { icon: "parts-stocking", title: "Parts & Warranty Support", body: "Stocked wear parts, manufacturer warranty coordination.", href: "/services#parts-warranty" },
];

const leadership = [
  { name: "Ubaldo Rodriguez", role: "Chief Executive Officer", focus: "Operations, project coordination, field services, and customer relations." },
  { name: "Heidy Rodriguez", role: "Chief Financial Officer", focus: "Administration, financial operations, compliance, and business development." },
  { name: "Lucio Rodriguez", role: "Secretary Manager", focus: "Administrative operations, customer communication, scheduling, and office coordination." },
  { name: "Francisco Romero", role: "Safety Compliance Officer", focus: "Workplace safety programs, employee training, and compliance procedures." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-xds-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] bg-xds-blue/30 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-32 w-[480px] h-[480px] bg-xds-blue-dark/40 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/80">
                <span className="w-1.5 h-1.5 rounded-full bg-xds-blue-light animate-pulse" />
                Central Valley Dairy Service
              </div>
              <h1 className="mt-6 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                Stronger
                <br />
                <span className="text-xds-blue-light">dairies</span> start
                <br />
                with XPERT.
              </h1>
              <p className="mt-8 text-lg text-white/75 max-w-xl leading-relaxed">
                Tulare based technicians who work on dairy equipment every day. Pump repair, separator maintenance, agitator service, fabrication, and emergency support across California's Central Valley.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary text-base">
                  Request Service
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:5599466131" className="btn-ghost text-base">
                  <Phone size={18} />
                  (559) 946-6131
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-xds-blue-light" /> Hands on technicians</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-xds-blue-light" /> Emergency response</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-xds-blue-light" /> Weekly onsite at Central Valley dairies</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/images/cow-photo-bw.jpg"
                    alt="Dairy cow in a Central Valley operation"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-xds-ink/40 to-xds-ink" />
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <Logo variant="light" size="sm" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 bg-xds-ink/60 backdrop-blur rounded px-2 py-1">EST. CENTRAL VALLEY</span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 pt-2">
                  <p className="tagline-lockup text-xl text-white">
                    Xpert Solutions.
                    <br />
                    Stronger Dairies.
                  </p>
                  <div className="mt-7 space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="text-xds-blue-light mt-0.5" />
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider">Phone</div>
                        <a href="tel:5599466131" className="text-white font-semibold hover:text-xds-blue-light">(559) 946-6131</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-xds-blue-light mt-0.5" />
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider">Headquarters</div>
                        <div className="text-white font-semibold">377 S. Oakmore St., Tulare, CA 93274</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-xds-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "Daily", label: "Onsite at dairies across the valley" },
              { stat: "24/7", label: "Emergency call coordination" },
              { stat: "8", label: "Core service offerings" },
              { stat: "Tulare", label: "Locally owned and operated" },
            ].map((b) => (
              <div key={b.label}>
                <div className="font-display font-extrabold text-3xl text-xds-ink">{b.stat}</div>
                <div className="mt-1 text-sm text-xds-slate">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="section-eyebrow">What we do</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
              Field service for the equipment dairies depend on.
            </h2>
            <p className="mt-5 text-lg text-xds-slate leading-relaxed">
              Unlike sales only dealers, XDS works directly on manure systems every day. From routine maintenance to emergency repair, we keep your dairy moving.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon, title, body, href }) => (
              <Link
                key={title}
                href={href}
                className="group h-full flex flex-col bg-white border border-xds-line rounded-xl p-6 hover:border-xds-blue hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <ServiceIcon name={icon} size={56} />
                <h3 className="mt-4 font-display font-bold text-lg text-xds-ink">{title}</h3>
                <p className="mt-2 text-sm text-xds-slate leading-relaxed">{body}</p>
                <div className="mt-auto pt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-xds-blue">
                  Learn more
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href="/services" className="btn-dark">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why XDS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-eyebrow">Why XDS</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
                Hands on. In the field. Every day.
              </h2>
              <p className="mt-5 text-lg text-xds-slate leading-relaxed">
                XPERT Dairy Systems is locally owned in Tulare, California. We service dairies throughout the Central Valley and have built long term relationships by showing up, doing the work, and standing behind it.
              </p>
              <p className="mt-4 text-base text-xds-slate leading-relaxed">
                Founded on trust, accountability, and exceptional customer service. Our team is committed to helping dairy producers maintain safe, efficient, and reliable operations through quality workmanship and dependable field service.
              </p>
              <div className="mt-8">
                <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-xds-blue hover:text-xds-blue-dark">
                  Meet the team
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                "Technicians who work on manure systems daily, not sales reps",
                "Pump rebuilds, gearbox replacements, separator and agitator repair",
                "Fabrication capability for field modifications and custom parts",
                "Documented preventative maintenance programs",
                "Emergency service coordination across the Central Valley",
                "Safety compliance officer on staff",
                "Manufacturer dealer partner ready: warranty, parts stocking, installation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 bg-xds-soft border border-xds-line rounded-lg p-4">
                  <CheckCircle2 size={20} className="text-xds-blue shrink-0 mt-0.5" />
                  <span className="text-xds-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership preview */}
      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="section-eyebrow">Leadership</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
              The team behind every job.
            </h2>
            <p className="mt-5 text-lg text-xds-slate leading-relaxed">
              A four person leadership team keeping operations, finance, scheduling, and safety on track so technicians stay focused on the work.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((p) => (
              <div key={p.name} className="h-full flex flex-col bg-white border border-xds-line rounded-xl p-6">
                <div className="w-14 h-14 rounded-full bg-xds-blue/10 flex items-center justify-center text-xds-blue font-display font-extrabold text-lg">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-xds-ink">{p.name}</h3>
                <div className="text-xs font-semibold uppercase tracking-wider text-xds-blue mt-1">{p.role}</div>
                <p className="mt-3 text-sm text-xds-slate leading-relaxed">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer partners CTA */}
      <section className="relative bg-xds-ink text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-xds-blue/30 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="section-eyebrow text-xds-blue-light">For Manufacturers</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-white leading-tight">
              A trusted local service partner in California's Central Valley.
            </h2>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              XDS is actively building long term dealer and service partnerships with manufacturers who value fast response, hands on industry knowledge, and quality customer support. We're already in dairies every week.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/dealer-partners" className="btn-primary text-base">
                Partner with XDS
                <ArrowRight size={18} />
              </Link>
              <a href="mailto:Xpertdairy@gmail.com" className="btn-ghost text-base">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="max-w-2xl">
            <div className="section-eyebrow">Common questions</div>
            <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
              Frequently asked.
            </h2>
            <p className="mt-5 text-lg text-xds-slate leading-relaxed">
              Quick answers for dairy operators and manufacturers evaluating XDS. Have something else? Call us at (559) 946-6131.
            </p>
          </div>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="bg-white border border-xds-line rounded-2xl p-10 lg:p-16 text-center">
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-xds-ink">
              Equipment down? Need a quote?
            </h2>
            <p className="mt-4 text-lg text-xds-slate max-w-xl mx-auto">
              Call us at (559) 946-6131 or send a message and we'll get a technician on it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="tel:5599466131" className="btn-dark">
                <Phone size={18} />
                (559) 946-6131
              </a>
              <Link href="/contact" className="btn-primary">
                Send a Message
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
