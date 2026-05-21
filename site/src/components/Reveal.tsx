"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  as?: "div" | "section" | "article" | "aside" | "li";
  delay?: number;
  className?: string;
}

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export default function Reveal({
  children,
  as = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [pending, setPending] = useState(false);
  const [visible, setVisible] = useState(false);

  useIsoLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    setPending(true);
    if (inView) {
      requestAnimationFrame(() => {
        if (delay) {
          setTimeout(() => setVisible(true), delay);
        } else {
          setVisible(true);
        }
      });
    }
  }, [delay]);

  useEffect(() => {
    const el = ref.current;
    if (!el || !pending) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => setVisible(true), delay);
          } else {
            setVisible(true);
          }
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    const t = window.setTimeout(() => setVisible(true), 2000);
    return () => {
      obs.disconnect();
      window.clearTimeout(t);
    };
  }, [pending, delay]);

  const cls = `reveal ${visible ? "is-visible" : ""} ${className}`;
  const dataPending = pending ? "true" : undefined;
  const refSetter = (el: HTMLElement | null) => {
    ref.current = el;
  };

  switch (as) {
    case "section":
      return <section ref={refSetter as (el: HTMLElement | null) => void} data-pending={dataPending} className={cls}>{children}</section>;
    case "article":
      return <article ref={refSetter as (el: HTMLElement | null) => void} data-pending={dataPending} className={cls}>{children}</article>;
    case "aside":
      return <aside ref={refSetter as (el: HTMLElement | null) => void} data-pending={dataPending} className={cls}>{children}</aside>;
    case "li":
      return <li ref={refSetter as (el: HTMLElement | null) => void} data-pending={dataPending} className={cls}>{children}</li>;
    default:
      return <div ref={refSetter as (el: HTMLElement | null) => void} data-pending={dataPending} className={cls}>{children}</div>;
  }
}
