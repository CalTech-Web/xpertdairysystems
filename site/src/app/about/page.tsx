import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground } from "@/components/BgPatterns";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "About | Tulare Dairy Equipment Service Company",
  description:
    "Locally owned Tulare, CA dairy equipment service company. Meet the leadership team behind XPERT Dairy Systems Inc., serving Central Valley dairies daily.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About XPERT Dairy Systems | Tulare Dairy Equipment Service",
    description:
      "Locally owned Tulare, CA dairy equipment service company. Meet the team behind XPERT Dairy Systems.",
    url: "/about",
  },
};

const leadership = [
  {
    name: "Ubaldo Rodriguez",
    role: "Chief Executive Officer (CEO)",
    bio: "Ubaldo leads company operations, project coordination, field services, and customer relations. Hands on industry experience and leadership drive the company while maintaining high standards of service and reliability.",
  },
  {
    name: "Heidy Rodriguez",
    role: "Chief Financial Officer (CFO)",
    bio: "Heidy oversees company administration, financial operations, compliance coordination, and business development. She plays an important role in maintaining organization, streamlining, and operational growth within the company.",
  },
  {
    name: "Lucio Rodriguez",
    role: "Secretary Manager",
    bio: "Lucio supports the executive team by assisting with administrative operations, customer communication, scheduling, and office coordination. Works closely alongside the CEO and CFO to help maintain efficient day to day business operations.",
  },
  {
    name: "Francisco Romero",
    role: "Safety Compliance Officer",
    bio: "Francisco oversees workplace safety programs, employee safety training, and compliance procedures to help maintain a safe working environment for employees and customers.",
  },
];

const values = [
  { title: "Trust", body: "We show up, we do the work, and we stand behind it. Every dairy we service is a long term relationship." },
  { title: "Accountability", body: "Documented service history per piece of equipment. Honest assessments. Clear communication." },
  { title: "Hard Work", body: "Our technicians are onsite at dairies every week. We earn our reputation in the field, not in the showroom." },
  { title: "Exceptional Service", body: "Fast response on emergencies. Quality workmanship on every job. Operators and managers we treat like partners." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <TopoBackground variant="dark" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="section-eyebrow on-dark">About XDS</div>
              <h1 className="mt-3 font-display font-extrabold text-5xl lg:text-6xl text-white leading-[0.95]">
                Locally owned. Hands on. Central Valley raised.
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
                Based in Tulare, California, XPERT Dairy Systems Inc. is a locally owned company specializing in dairy equipment installation, maintenance, repair, and safety support services for dairy operations throughout California's Central Valley.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-12">
            <Reveal className="lg:col-span-2">
              <div className="relative">
                <span className="h2-accent" aria-hidden="true">01</span>
                <div className="section-eyebrow">Our story</div>
                <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
                  Founded on trust. Built for the field.
                </h2>
                <div className="mt-6 space-y-5 text-lg text-xds-slate leading-relaxed">
                  <p>
                    XPERT Dairy Systems Inc. was built around a simple idea: dairy operators need a service partner who actually understands the equipment, not just the price list. Our team has extensive experience with pump rebuilds, gearbox replacements, separator repairs, fabrication work, emergency service calls, and preventative maintenance programs.
                  </p>
                  <p>
                    Unlike sales only dealers, XDS works directly on manure systems daily. We're onsite at dairies across the Central Valley every week, which means we know what wears out, what fails first, and what it takes to keep operations running.
                  </p>
                  <p>
                    At XPERT Dairy Systems Inc., we believe in building long term relationships through honesty, accountability, hard work, and exceptional customer service. We are proud to support the agricultural community and the hardworking dairy industry throughout the Central Valley.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal as="aside" delay={120}>
              <div className="bg-xds-soft border border-xds-line rounded-2xl p-8">
                <h3 className="font-display font-bold text-xl text-xds-ink">Quick Facts</h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-xds-blue">Headquarters</dt>
                    <dd className="mt-1 text-xds-charcoal">377 S. Oakmore St., Tulare, CA 93274</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-xds-blue">Service Area</dt>
                    <dd className="mt-1 text-xds-charcoal">California's Central Valley</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-xds-blue">Phone</dt>
                    <dd className="mt-1 text-xds-charcoal">(559) 946-6131</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-xds-blue">Email</dt>
                    <dd className="mt-1 text-xds-charcoal break-all">Xpertdairy@gmail.com</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-xds-blue">Tagline</dt>
                    <dd className="mt-1 text-xds-charcoal font-semibold">XPERT Solutions. Stronger Dairies.</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative bg-xds-soft overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">02</span>
              <div className="section-eyebrow">What we stand for</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">Our values</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, idx) => (
              <Reveal key={v.title} delay={idx * 60}>
                <div className="card-lift h-full flex flex-col bg-white border border-xds-line rounded-xl p-8">
                  <span className="icon-bubble w-12 h-12">
                    <CheckCircle2 size={22} className="text-xds-blue" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-xl text-xds-ink">{v.title}</h3>
                  <p className="mt-2 text-xds-slate leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">03</span>
              <div className="section-eyebrow">Leadership Team</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">The people behind XDS</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((p, idx) => {
              const isSafety = p.role.toLowerCase().includes("safety");
              return (
                <Reveal key={p.name} delay={idx * 60}>
                  <div className="card-lift h-full border border-xds-line rounded-xl p-8 flex gap-6">
                    <div className="shrink-0">
                      {isSafety ? (
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 rounded-2xl bg-xds-blue-tint flex items-center justify-center">
                            <ServiceIcon name="safety-compliance" size={56} />
                          </div>
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-xds-amber ring-2 ring-white" />
                        </div>
                      ) : (
                        <div className="relative w-20 h-20">
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DBEAFE] via-[#3B82F6] to-[#1E5FAE] shadow-md" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-display font-extrabold text-2xl text-white drop-shadow">
                              {p.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-xds-amber ring-2 ring-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-xl text-xds-ink">{p.name}</h3>
                      <div className="text-xs font-semibold uppercase tracking-wider text-xds-blue mt-1">{p.role}</div>
                      <div className="my-4 h-px bg-xds-line" />
                      <p className="text-sm text-xds-slate leading-relaxed">{p.bio}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <Reveal>
            <h2 className="font-display font-extrabold text-3xl lg:text-4xl">Ready to put XDS to work?</h2>
            <p className="mt-4 text-white/75 max-w-xl mx-auto">
              Reach out for service, parts, or a manufacturer partnership conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a href="tel:5599466131" className="btn-ghost"><span className="phone-ring"><Phone size={18} /></span> (559) 946-6131</a>
              <Link href="/contact" className="btn-primary">Send a Message <ArrowRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
