import Link from "next/link";
import Logo from "./Logo";

const pages = [
  { href: "/", label: "Home" },
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/huespedes", label: "Huéspedes" },
  { href: "/propietarios", label: "Propietarios" },
  { href: "#reservar", label: "Reservar" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-navy text-white/80">
      <div className="absolute inset-x-0 -top-4 flex justify-center">
        <div className="h-8 w-8 rotate-45 bg-teal" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
            Páginas
          </h3>
          <ul className="space-y-2 text-sm">
            {pages.map((p) => (
              <li key={p.label}>
                <Link href={p.href} className="hover:text-teal">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
            Contacto
          </h3>
          <ul className="space-y-2 text-sm">
            <li>La Plata, Buenos Aires</li>
            <li>
              <a
                href="https://api.whatsapp.com/send/?phone=5492216161983&text&type=phone_number&app_absent=0"
                className="hover:text-teal"
              >
                (+54) 221 616-1983
              </a>
            </li>
            <li>
              <a href="mailto:contacto@lofter.io" className="hover:text-teal">
                contacto@lofter.io
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">
            Seguinos
          </h3>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-teal hover:text-teal"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M13.5 21v-7.9h2.66l.4-3.1h-3.06V8.1c0-.9.25-1.5 1.55-1.5h1.65V3.8A22 22 0 0 0 14.2 3.7c-2.44 0-4.11 1.49-4.11 4.22v2.08H7.4v3.1h2.69V21z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:border-teal hover:text-teal"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm0 6.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm4.7-6.26a.87.87 0 1 1-1.73 0 .87.87 0 0 1 1.73 0ZM20 7.2c-.06-1.3-.36-2.45-1.3-3.4-.95-.94-2.1-1.24-3.4-1.3C13.9 2.4 10.1 2.4 8.7 2.5c-1.3.06-2.45.36-3.4 1.3-.94.95-1.24 2.1-1.3 3.4C3.9 8.9 3.9 15.1 4 16.5c.06 1.3.36 2.45 1.3 3.4.95.94 2.1 1.24 3.4 1.3 1.4.1 5.2.1 6.6 0 1.3-.06 2.45-.36 3.4-1.3.94-.95 1.24-2.1 1.3-3.4.1-1.4.1-5.2 0-6.6ZM18.4 18a3 3 0 0 1-1.7 1.7c-1.16.46-3.92.36-5.2.36s-4.05.1-5.2-.36A3 3 0 0 1 4.6 18c-.46-1.16-.36-3.92-.36-5.2s-.1-4.05.36-5.2A3 3 0 0 1 6.3 5.9c1.16-.46 3.92-.36 5.2-.36s4.05-.1 5.2.36a3 3 0 0 1 1.7 1.7c.46 1.16.36 3.92.36 5.2s.1 4.05-.36 5.2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <Logo variant="onDark" />
          <p className="mt-4 text-xs text-white/40">
            Gestión profesional de alquileres temporarios en La Plata.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        LOFTER © {new Date().getFullYear()} — Todos los derechos reservados.
      </div>
    </footer>
  );
}
