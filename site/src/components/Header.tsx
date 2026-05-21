"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SERVICES } from "@/data/services";
import ServiceIcon from "./ServiceIcon";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Dealer Partners", href: "/dealer-partners" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close desktop dropdown when clicking outside or pressing Escape
  useEffect(() => {
    if (!servicesOpen) return;
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setServicesOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-xds-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-xds-charcoal hover:text-xds-blue transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[640px]"
                    >
                      <div className="bg-white border border-xds-line rounded-2xl shadow-2xl shadow-xds-blue/10 p-4 grid grid-cols-2 gap-1.5">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="group flex items-start gap-3 p-3 rounded-lg hover:bg-xds-soft transition-colors"
                          >
                            <span className="shrink-0 w-10 h-10 rounded-lg bg-xds-blue-tint border border-[#C7DCFA] flex items-center justify-center group-hover:scale-105 transition-transform">
                              <ServiceIcon name={s.icon} size={26} />
                            </span>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-xds-ink group-hover:text-xds-blue">
                                {s.shortTitle}
                              </div>
                              <div className="text-xs text-xds-slate leading-snug mt-0.5 line-clamp-2">
                                {s.oneLiner}
                              </div>
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="col-span-2 mt-1 flex items-center justify-between gap-2 p-3 rounded-lg bg-xds-ink text-white hover:bg-xds-charcoal transition-colors"
                        >
                          <span className="text-sm font-semibold">View all services</span>
                          <ChevronDown size={14} className="-rotate-90" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-xds-charcoal hover:text-xds-blue transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5599466131"
              className="inline-flex items-center gap-2 text-sm font-semibold text-xds-ink hover:text-xds-blue group"
            >
              <span className="phone-ring text-xds-blue group-hover:text-xds-blue-dark">
                <Phone size={16} />
              </span>
              (559) 946-6131
            </a>
            <Link href="/contact" className="btn-primary text-sm">Request Service</Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -mr-2"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden py-4 border-t border-xds-line">
            <nav className="flex flex-col gap-1">
              {nav.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      aria-expanded={mobileServicesOpen}
                      className="w-full px-2 py-3 text-base font-semibold text-xds-charcoal hover:bg-xds-soft rounded flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-2 pl-3 border-l border-xds-line space-y-0.5 py-1">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="block py-2 text-sm font-medium text-xds-slate hover:text-xds-blue"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="block py-2 text-sm font-semibold text-xds-blue"
                        >
                          View all services →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="px-2 py-3 text-base font-semibold text-xds-charcoal hover:bg-xds-soft rounded"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="tel:5599466131"
                className="px-2 py-3 text-base font-semibold text-xds-blue flex items-center gap-2"
              >
                <span className="phone-ring">
                  <Phone size={18} />
                </span>
                (559) 946-6131
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                Request Service
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
