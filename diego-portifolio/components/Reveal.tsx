"use client";

import { useEffect, useRef } from "react";

/**
 * Fade sutil quando a seção entra na viewport. Sem JS o conteúdo já nasce
 * visível (o CSS só esconde sob html.js) e prefers-reduced-motion desativa
 * tudo na folha de estilo.
 */
export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}
