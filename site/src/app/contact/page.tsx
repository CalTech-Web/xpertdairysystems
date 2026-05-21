import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { TopoBackground, MeshBackground } from "@/components/BgPatterns";
import { BreadcrumbSchema } from "@/components/Schema";

export const metadata: Metadata = {
  title: "Contact XPERT Dairy Systems | Tulare, CA Service Request",
  description:
    "Request dairy equipment service in California's Central Valley. Call (559) 946-6131 or send a message. Tulare based technicians, emergency response available.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact XPERT Dairy Systems | Tulare, CA",
    description:
      "Request dairy equipment service in California's Central Valley. Call (559) 946-6131 or send a message.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <section className="relative text-white overflow-hidden">
        <MeshBackground />
        <TopoBackground variant="dark" opacity={0.05} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <div className="section-eyebrow on-dark">Contact</div>
              <h1 className="mt-3 font-display font-extrabold text-5xl lg:text-6xl text-white leading-[0.95]">
                Reach out. We respond.
              </h1>
              <p className="mt-6 text-lg text-white/75 leading-relaxed">
                Service requests, parts inquiries, dealer partnership conversations. Call us, email us, or send a message and we will route it to the right person.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <Reveal as="aside">
              <div className="space-y-6">
                <InfoCard icon={Phone} title="Phone" body={<a href="tel:5599466131" className="link-underline hover:text-xds-blue font-semibold">(559) 946-6131</a>} hint="Fastest for emergencies" />
                <InfoCard icon={Mail} title="Email" body={<a href="mailto:Xpertdairy@gmail.com" className="link-underline hover:text-xds-blue font-semibold break-all">Xpertdairy@gmail.com</a>} />
                <InfoCard icon={MapPin} title="Headquarters" body={<>377 S. Oakmore St.<br />Tulare, CA 93274</>} />
                <InfoCard icon={Clock} title="Service Area" body="California's Central Valley" />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-2">
              <div className="relative">
                <span className="h2-accent" aria-hidden="true">01</span>
                <h2 className="font-display font-extrabold text-3xl text-xds-ink">Send a Message</h2>
                <p className="mt-3 text-xds-slate">
                  Fill out the form and we will be in touch. For emergency equipment failures, please call (559) 946-6131 directly.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
  hint,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: React.ReactNode;
  hint?: string;
}) {
  const isPhone = title.toLowerCase() === "phone";
  return (
    <div className="bg-xds-soft border border-xds-line rounded-xl p-6">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-xds-blue-tint">
        <span className={isPhone ? "phone-ring text-xds-blue" : "text-xds-blue"}>
          <Icon size={20} />
        </span>
      </span>
      <h3 className="mt-4 font-display font-bold text-xs text-xds-ink uppercase tracking-wider">
        {title}
      </h3>
      <div className="mt-2 text-xds-charcoal text-sm leading-relaxed">{body}</div>
      {hint && <div className="mt-2 text-xs text-xds-slate">{hint}</div>}
    </div>
  );
}
