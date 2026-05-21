"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Dealer Partners", href: "/dealer-partners" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-xds-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Logo size="md" />
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-xds-charcoal hover:text-xds-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:5599466131"
              className="inline-flex items-center gap-2 text-sm font-semibold text-xds-ink hover:text-xds-blue"
            >
              <Phone size={16} />
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
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-2 py-3 text-base font-semibold text-xds-charcoal hover:bg-xds-soft rounded"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:5599466131"
                className="px-2 py-3 text-base font-semibold text-xds-blue flex items-center gap-2"
              >
                <Phone size={18} />
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
