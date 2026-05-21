"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
          <div key={idx}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              aria-expanded={isOpen}
              className="w-full py-6 flex items-start gap-6 text-left hover:bg-xds-soft/60 transition-colors group"
            >
              <span className="flex-1 font-display font-bold text-lg text-xds-ink leading-snug group-hover:text-xds-blue">
                {item.q}
              </span>
              <span className="shrink-0 w-9 h-9 rounded-full bg-xds-blue/10 text-xds-blue flex items-center justify-center mt-0.5 group-hover:bg-xds-blue group-hover:text-white transition-colors">
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 pr-16">
                <p className="text-xds-slate leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
