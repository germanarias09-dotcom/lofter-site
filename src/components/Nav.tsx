"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

// "Contacto" no tiene su propia opción de menú: cada página (Propietarios,
// Huéspedes, Quiénes somos) ya tiene su propia sección de contacto al final.
const links = [
  { href: "/propietarios", label: "Propietarios" },
  { href: "/huespedes", label: "Huéspedes" },
  { href: "/quienes-somos", label: "Quiénes somos" },
];

export default function Nav({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="LOFTER — inicio">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal ${
                active === link.href ? "text-teal" : "text-navy/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy lg:hidden"
          aria-label="Alternar menú"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium ${
                  active === link.href ? "text-teal" : "text-navy/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
