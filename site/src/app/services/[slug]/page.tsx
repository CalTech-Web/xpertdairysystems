import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { SERVICES, getService, getRelated } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground } from "@/components/BgPatterns";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServiceDetailPage(props: PageProps<"/services/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getRelated(service);
  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <TopoBackground variant="dark" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-white/60 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight size={12} />
            <span className="text-white">{service.shortTitle}</span>
          </nav>

          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-8">
                <div className="section-eyebrow on-dark">
                  Service {String(idx + 1).padStart(2, "0")} of {String(SERVICES.length).padStart(2, "0")}
                </div>
                <h1 className="mt-3 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[0.98]">
                  {service.title}
                </h1>
                <p className="mt-6 text-lg text-white/75 leading-relaxed max-w-2xl">
                  {service.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary">
                    Request This Service
                    <ArrowRight size={18} />
                  </Link>
                  <a href="tel:5599466131" className="btn-ghost">
                    <span className="phone-ring">
                      <Phone size={18} />
                    </span>
                    (559) 946-6131
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <div className="icon-bubble on-dark" style={{ width: 120, height: 120, borderRadius: 16 }}>
                  <ServiceIcon name={service.icon} size={72} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problem + Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <Reveal>
              <div className="relative">
                <span className="h2-accent" aria-hidden="true">01</span>
                <div className="section-eyebrow">The challenge</div>
                <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-xds-ink leading-tight">
                  {service.problemStatement.headline}
                </h2>
                <p className="mt-5 text-lg text-xds-slate leading-relaxed">
                  {service.problemStatement.body}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <span className="h2-accent" aria-hidden="true">02</span>
                <div className="section-eyebrow">How XDS handles it</div>
                <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-xds-ink leading-tight">
                  {service.approach.headline}
                </h2>
                <p className="mt-5 text-lg text-xds-slate leading-relaxed">
                  {service.approach.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="relative bg-xds-soft overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">03</span>
              <div className="section-eyebrow">What's included</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
                The scope of work.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.whatsIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 bg-white border border-xds-line rounded-xl p-5"
                >
                  <span className="shrink-0 w-7 h-7 rounded-full bg-xds-blue/10 flex items-center justify-center mt-0.5">
                    <CheckCircle2 size={16} className="text-xds-blue" />
                  </span>
                  <span className="text-xds-charcoal leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Common issues */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">04</span>
              <div className="section-eyebrow">What we typically see</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
                Common issues we fix.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.commonIssues.map((issue, i) => (
              <Reveal key={issue.title} delay={i * 50}>
                <div className="card-lift h-full flex flex-col bg-white border border-xds-line rounded-xl p-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-xds-amber/10 border border-xds-amber/30">
                    <AlertTriangle size={18} className="text-xds-amber" />
                  </span>
                  <h3 className="mt-4 font-display font-bold text-lg text-xds-ink">{issue.title}</h3>
                  <p className="mt-2 text-sm text-xds-slate leading-relaxed">{issue.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative bg-xds-soft overflow-hidden">
        <TopoBackground opacity={0.06} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="relative max-w-2xl">
              <span className="h2-accent" aria-hidden="true">05</span>
              <div className="section-eyebrow">Our process</div>
              <h2 className="mt-3 font-display font-extrabold text-4xl text-xds-ink leading-tight">
                Step by step.
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {service.process.map((step, i) => (
              <Reveal key={step.step} delay={i * 60}>
                <div className="relative h-full bg-white border border-xds-line rounded-xl p-6">
                  <span className="card-index absolute top-4 right-5">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display font-bold text-base text-xds-blue uppercase tracking-wider">
                    {step.step.replace(/^\d+\.\s*/, "")}
                  </h3>
                  <p className="mt-3 text-sm text-xds-slate leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
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
                <ServiceIcon name={service.icon} size={28} />
              </div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl text-xds-ink">
                {service.ctaHeadline}
              </h2>
              <p className="mt-4 text-lg text-xds-slate max-w-xl mx-auto">
                Call (559) 946-6131 or send a message and we'll get a technician on it.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a href="tel:5599466131" className="btn-dark">
                  <span className="phone-ring">
                    <Phone size={18} />
                  </span>
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

      {/* Related */}
      <section className="bg-xds-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="max-w-2xl">
              <div className="section-eyebrow">Related services</div>
              <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-4xl text-xds-ink leading-tight">
                Often paired with this work.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group card-lift h-full flex flex-col bg-white border border-xds-line rounded-xl p-6"
                >
                  <div className="icon-bubble">
                    <ServiceIcon name={r.icon} size={36} />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-lg text-xds-ink">{r.shortTitle}</h3>
                  <p className="mt-2 text-sm text-xds-slate leading-relaxed">{r.oneLiner}</p>
                  <div className="slide-arrow mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-xds-blue">
                    Learn more
                    <ArrowRight size={12} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Prev / Next nav */}
          <div className="mt-12 pt-8 border-t border-xds-line grid sm:grid-cols-2 gap-4">
            <Link
              href={`/services/${prev.slug}`}
              className="group flex items-center gap-4 p-5 rounded-xl border border-xds-line bg-white hover:border-xds-blue transition-colors"
            >
              <ChevronRight size={18} className="text-xds-blue rotate-180 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-xds-slate font-semibold">Previous</div>
                <div className="font-display font-bold text-xds-ink group-hover:text-xds-blue truncate">
                  {prev.shortTitle}
                </div>
              </div>
            </Link>
            <Link
              href={`/services/${next.slug}`}
              className="group flex items-center justify-end gap-4 p-5 rounded-xl border border-xds-line bg-white hover:border-xds-blue transition-colors text-right"
            >
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-xds-slate font-semibold">Next</div>
                <div className="font-display font-bold text-xds-ink group-hover:text-xds-blue truncate">
                  {next.shortTitle}
                </div>
              </div>
              <ChevronRight size={18} className="text-xds-blue shrink-0" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
