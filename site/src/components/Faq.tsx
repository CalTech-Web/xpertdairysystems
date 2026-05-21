"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-xds-line border-y border-xds-line">
      {items.map((item, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className={`relative transition-colors ${
              isOpen ? "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-xds-amber" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className={`w-full py-6 ${isOpen ? "pl-6" : ""} flex items-start gap-6 text-left hover:bg-xds-soft/60 transition-all group`}
            >
              <span className={`flex-1 font-display font-bold text-lg leading-snug transition-colors ${isOpen ? "text-xds-blue" : "text-xds-ink group-hover:text-xds-blue"}`}>
                {item.q}
              </span>
              <span
                className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                  isOpen
                    ? "bg-xds-blue text-white rotate-45"
                    : "bg-xds-blue/10 text-xds-blue group-hover:bg-xds-blue group-hover:text-white"
                }`}
              >
                <Plus size={18} />
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pl-6 pr-16">
                <p className="text-xds-slate leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
