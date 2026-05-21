import Link from "next/link";
import Logo from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";
import { MeshBackground, TopoBackground } from "./BgPatterns";

const services = [
  { label: "Pump Repair", href: "/services/pump-repair" },
  { label: "Separator Maintenance", href: "/services/separator-maintenance" },
  { label: "Agitator Service", href: "/services/agitator-service" },
  { label: "Fabrication", href: "/services/fabrication" },
  { label: "Emergency Service", href: "/services/emergency-service" },
  { label: "Installation", href: "/services/installation" },
  { label: "Preventative Maintenance", href: "/services/preventative-maintenance" },
  { label: "Parts & Warranty", href: "/services/parts-warranty" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Dealer Partners", href: "/dealer-partners" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative text-white mt-24 overflow-hidden">
      {/* Top gradient line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, #F59E0B 0%, #1E5FAE 30%, #1E5FAE 60%, transparent 100%)",
        }}
      />

      <MeshBackground />
      <TopoBackground variant="dark" opacity={0.05} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Logo variant="light" size="md" />
            <p className="mt-6 text-sm leading-relaxed text-white/70 max-w-xs">
              XPERT Solutions. Stronger Dairies. Central Valley dairy equipment service, repair, and fabrication.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:5599466131" className="flex items-center gap-3 text-white/90 hover:text-white">
                <span className="phone-ring text-[#93C5FD]"><Phone size={16} /></span>
                (559) 946-6131
              </a>
              <a href="mailto:Xpertdairy@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white">
                <Mail size={16} className="text-[#93C5FD]" />
                Xpertdairy@gmail.com
              </a>
              <div className="flex items-start gap-3 text-white/90">
                <MapPin size={16} className="text-[#93C5FD] mt-0.5 shrink-0" />
                <span>
                  377 S. Oakmore St.
                  <br />
                  Tulare, CA 93274
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="link-underline text-sm text-white/70 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">Company</h4>
            <ul className="space-y-2">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="link-underline text-sm text-white/70 hover:text-white transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-white mb-5">Service Area</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Based in Tulare, CA. Serving dairy operations throughout California's Central Valley.
            </p>
            <Link href="/contact" className="btn-primary mt-6 text-sm">
              Request Service
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} XPERT Dairy Systems Inc. All Rights Reserved.
          </p>
          <p className="text-xs text-white/50">
            Built by{" "}
            <a href="https://caltechweb.com" className="text-white/70 hover:text-white link-underline">
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
