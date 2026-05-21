import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, CheckCircle2, MapPin, Wrench, AlertTriangle } from "lucide-react";
import Logo from "@/components/Logo";
import Faq from "@/components/Faq";
import ServiceIcon, { type ServiceIconName } from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground, DotGrid, BlueprintLines } from "@/components/BgPatterns";
import { FaqSchema } from "@/components/Schema";
import { HOME_FAQS } from "@/data/faqs";

const services: { icon: ServiceIconName; title: string; body: string; href: string }[] = [
  { icon: "pump-repair", title: "Pump Repair & Rebuilds", body: "Full pump rebuilds, gearbox replacements, and wear part service.", href: "/services/pump-repair" },
  { icon: "separator", title: "Separator Maintenance", body: "Roller, screen, and drive service to recover separator throughput.", href: "/services/separator-maintenance" },
  { icon: "agitator", title: "Agitator Service", body: "Lagoon and pit agitator repair, gearbox and propeller work.", href: "/services/agitator-service" },
  { icon: "fabrication", title: "Fabrication", body: "Custom brackets, manifolds, mounts, and field welding.", href: "/services/fabrication" },
  { icon: "emergency-service", title: "Emergency Service", body: "Fast response calls when dairy equipment goes down.", href: "/services/emergency-service" },
  { icon: "installation", title: "Installation & Startup", body: "New equipment installation, commissioning, and operator orientation.", href: "/services/installation" },
  { icon: "preventative-maintenance", title: "Preventative Maintenance", body: "Scheduled inspections that catch wear before downtime.", href: "/services/preventative-maintenance" },
  { icon: "parts-stocking", title: "Parts & Warranty Support", body: "Stocked wear parts, manufacturer warranty coordination.", href: "/services/parts-warranty" },
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
      <FaqSchema items={HOME_FAQS} />
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <TopoBackground variant="dark" opacity={0.05} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-xs font-semibold tracking-wider uppercase text-white/85">
                  <span className="live-dot" />
                  <span>Central Valley Dairy Service</span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="phone-ring opacity-70"><Phone size={12} /></span>
                  <a href="tel:5599466131" className="hover:text-white">(559) 946-6131</a>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                  Stronger
                  <br />
                  <span className="text-[#93C5FD]">dairies</span> start
                  <br />
                  with XPERT.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-lg text-white/75 max-w-xl leading-relaxed">
                  Tulare based technicians who work on dairy equipment every day. Pump repair, separator maintenance, agitator service, fabrication, and emergency support across California's Central Valley.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary text-base">
                    Request Service
                    <ArrowRight size={18} />
                  </Link>
                  <a href="tel:5599466131" className="btn-ghost text-base">
                    <span className="phone-ring"><Phone size={18} /></span>
                    (559) 946-6131
                  </a>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-xds-amber" /> Hands on technicians</span>
                  <span className="h-4 w-px bg-white/15" />
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-xds-amber" /> Emergency response</span>
                  <span className="h-4 w-px bg-white/15" />
                  <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-xds-amber" /> Weekly onsite at Central Valley dairies</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={150} className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur overflow-hidden glow-card">
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <Image
                    src="/images/cow-photo-bw.jpg"
                    alt="Dairy cow in a Central Valley operation"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover opacity-95"
                    priority
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-xds-blue-deepest/40 to-xds-blue-deepest" />
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <Logo variant="light" size="sm" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 bg-black/40 backdrop-blur rounded px-2 py-1 border border-white/10">EST. CENTRAL VALLEY</span>
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
                      <span className="phone-ring text-[#93C5FD] mt-0.5"><Phone size={18} /></span>
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider">Phone</div>
                        <a href="tel:5599466131" className="text-white font-semibold link-underline">(559) 946-6131</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-[#93C5FD] mt-0.5" />
                      <div>
                        <div className="text-white/50 text-xs uppercase tracking-wider">Headquarters</div>
                        <div className="text-white font-semibold">377 S. Oakmore St., Tulare, CA 93274</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative bg-white">
        <div className="grad-divider" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0">
              {[
                { stat: "Daily", label: "Onsite at dairies across the valley" },
                { stat: "24/7", label: "Emergency call coordination" },
                { stat: "8", label: "Core service offerings" },
                { stat: "Tulare", label: "Locally owned and operated" },
              ].map((b, idx) => (
                <div
                  key={b.label}
                  className={`
                    px-4 lg:px-6
                    ${idx % 2 === 1 ? "border-l" : ""}
                    ${idx >= 2 ? "border-t pt-6 lg:border-t-0 lg:pt-0" : ""}
                    lg:border-l lg:first:border-l-0
                  `}
                >
                  <div className="inline-flex items-center gap-2">
                    <div className="font-display font-extrabold text-3xl lg:text-4xl text-xds-ink">{b.stat}</div>
                    <span className="w-1.5 h-1.5 rounded-full bg-xds-amber" />
                  </div>
                  <div className="mt-1.5 text-sm text-xds-slate">{b.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <div className="grad-divider" />
      </section>

      {/* Services */}
      <section className="relative bg-xds-soft overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">01</span>
              <div className="section-eyebrow">What we do</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
                Field service for the equipment dairies depend on.
              </h2>
              <p className="mt-5 text-lg text-xds-slate leading-relaxed">
                Unlike sales only dealers, XDS works directly on manure systems every day. From routine maintenance to emergency repair, we keep your dairy moving.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon, title, body, href }, idx) => (
              <Reveal key={title} delay={idx * 50}>
                <Link
                  href={href}
                  className="group card-lift relative h-full flex flex-col bg-white border border-xds-line rounded-xl p-6"
                >
                  <span className="card-index absolute top-4 right-5">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="icon-bubble">
                    <ServiceIcon name={icon} size={36} />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg text-xds-ink">{title}</h3>
                  <p className="mt-2 text-sm text-xds-slate leading-relaxed">{body}</p>
                  <div className="slide-arrow mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-xds-blue">
                    Learn more
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 flex justify-center">
              <Link href="/services" className="btn-dark">
                View All Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why XDS */}
      <section className="relative bg-white overflow-hidden">
        <TopoBackground opacity={0.07} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="relative">
                <span className="h2-accent" aria-hidden="true">02</span>
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
                  <Link href="/about" className="link-underline text-sm font-semibold text-xds-blue hover:text-xds-blue-dark">
                    Meet the team
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <ul className="divide-y divide-xds-line border-y border-xds-line">
                {[
                  "Technicians who work on manure systems daily, not sales reps",
                  "Pump rebuilds, gearbox replacements, separator and agitator repair",
                  "Fabrication capability for field modifications and custom parts",
                  "Documented preventative maintenance programs",
                  "Emergency service coordination across the Central Valley",
                  "Safety compliance officer on staff",
                  "Manufacturer dealer partner ready: warranty, parts stocking, installation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 py-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-xds-blue/10 flex items-center justify-center mt-0.5">
                      <CheckCircle2 size={16} className="text-xds-blue" />
                    </span>
                    <span className="text-xds-charcoal leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">03</span>
              <div className="section-eyebrow">Leadership</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
                The team behind every job.
              </h2>
              <p className="mt-5 text-lg text-xds-slate leading-relaxed">
                A four person leadership team keeping operations, finance, scheduling, and safety on track so technicians stay focused on the work.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((p, idx) => (
              <Reveal key={p.name} delay={idx * 60}>
                <div className="card-lift h-full flex flex-col bg-white border border-xds-line rounded-xl p-6">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DBEAFE] via-[#3B82F6] to-[#1E5FAE] shadow-md" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display font-extrabold text-2xl text-white drop-shadow">
                        {p.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-xds-amber ring-2 ring-white" />
                  </div>
                  <h3 className="mt-5 font-display font-bold text-lg text-xds-ink">{p.name}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-xds-blue mt-1">{p.role}</div>
                  <div className="my-4 h-px bg-xds-line" />
                  <p className="text-sm text-xds-slate leading-relaxed">{p.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer partners CTA */}
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <BlueprintLines className="hidden lg:block" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <span className="h2-accent text-white" aria-hidden="true" style={{ opacity: 0.06 }}>04</span>
              <div className="section-eyebrow on-dark">For Manufacturers</div>
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
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-white overflow-hidden">
        <DotGrid />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">05</span>
              <div className="section-eyebrow">Common questions</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl lg:text-5xl text-xds-ink leading-tight">
                Frequently asked.
              </h2>
              <p className="mt-5 text-lg text-xds-slate leading-relaxed">
                Quick answers for dairy operators and manufacturers evaluating XDS. Have something else? Call us at (559) 946-6131.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-12">
              <Faq items={HOME_FAQS} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div
              className="relative border border-xds-line rounded-2xl p-10 lg:p-16 text-center overflow-hidden"
              style={{
                background:
                  "radial-gradient(ellipse 80% 100% at 50% 50%, #FFFFFF 0%, #EFF6FF 60%, #DBEAFE 100%)",
              }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-xds-amber/15 mb-5">
                <Wrench size={22} className="text-xds-amber" />
                <AlertTriangle size={0} className="sr-only" />
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-xds-ink">
                Equipment down? Need a quote?
              </h2>
              <p className="mt-4 text-lg text-xds-slate max-w-xl mx-auto">
                Call us at (559) 946-6131 or send a message and we'll get a technician on it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a href="tel:5599466131" className="btn-dark">
                  <span className="phone-ring"><Phone size={18} /></span>
                  (559) 946-6131
                </a>
                <Link href="/contact" className="btn-primary">
                  Send a Message
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
