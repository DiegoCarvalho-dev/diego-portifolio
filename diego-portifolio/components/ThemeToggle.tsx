"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ label }: { label: string }) {
  function toggle() {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // armazenamento indisponível: o tema vale só para esta visita
    }
  }

  // Sem estado React: o ícone visível é decidido pelo CSS (.light no <html>),
  // o que evita divergência de hidratação entre servidor e cliente.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="theme-toggle rounded-md p-2 text-muted transition-colors duration-150 hover:bg-surface hover:text-fg"
    >
      <Moon className="icon-moon" size={18} aria-hidden="true" />
      <Sun className="icon-sun" size={18} aria-hidden="true" />
    </button>
  );
}
