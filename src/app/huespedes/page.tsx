import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import OctorateBookingWidget from "@/components/OctorateBookingWidget";
import { getApartments } from "@/lib/apartments";

export const metadata: Metadata = {
  title: "Huéspedes | LOFTER",
  description:
    "Departamentos completamente equipados para tu estadía en La Plata, por los días que necesites. Reservá con soporte 24 horas de LOFTER.",
};

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5492216161983&text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20alojarme%20en%20La%20Plata&type=phone_number&app_absent=0";

// La grilla de "Nuestros departamentos" todavía usa fotos de ejemplo de
// Unsplash (ver src/lib/apartments.ts) porque el endpoint de Lofterize con
// las fotos reales de las unidades todavía no existe. La ocultamos hasta
// tener esas fotos para no mostrar departamentos "de mentira". Para
// reactivarla: pasar esto a `true` (el resto del código ya está listo, no
// hace falta tocar nada más).
const SHOW_APARTMENTS_GALLERY = false;

// Foto de portada de ejemplo (estilo ukio.com) mientras no tenemos una sesión
// de fotos propia de LOFTER para el hero de huéspedes.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80";

const benefits = [
  {
    title: "Check-in flexible",
    text: "Coordinamos tu ingreso al departamento en el horario que mejor te quede, con instrucciones claras antes de llegar.",
    icon: <path d="M12 3a9 9 0 1 0 9 9M12 7v5l3.5 2M16 3h5v5" />,
  },
  {
    title: "Soporte 24 horas",
    text: "Ante cualquier imprevisto durante tu estadía, nuestro equipo te responde en cualquier momento, todos los días.",
    icon: <path d="M12 3a7 7 0 0 0-7 7v3a2 2 0 0 0 2 2h1v-6H6v-1a6 6 0 0 1 12 0v1h-2v6h1a2 2 0 0 0 2-2v-3a7 7 0 0 0-7-7Zm-4 12v1a4 4 0 0 0 4 4" />,
  },
  {
    title: "Todo equipado",
    text: "Wifi, cocina completa y blanco hotelero listos para usar desde el primer día, sin que tengas que ocuparte de nada.",
    icon: <path d="M4 20v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 20h16M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />,
  },
  {
    title: "En el centro de La Plata",
    text: "Unidades en las zonas más buscadas de la ciudad, cerca de todo lo que necesitás para tu estadía.",
    icon: <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3Zm0 4v6m-3-3h6" />,
  },
];

export default async function HuespedesPage() {
  const apartments = await getApartments();

  return (
    <>
      <Nav active="/huespedes" />
      <main className="flex-1">
        {/* HERO + BUSCADOR — inspirado en ukio.com, sin campo "Dónde" (LOFTER opera solo en La Plata) */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Departamento de LOFTER para estadías en La Plata"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/40" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
              Huéspedes
            </p>
            <h1 className="font-display max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Viví en La Plata, cuando quieras.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Departamentos completamente equipados, listos para tu estadía en La
              Plata — por los días que necesites.
            </p>

            <div className="mt-10 max-w-3xl">
              <OctorateBookingWidget />
            </div>
          </div>
        </section>

        {/* DEPARTAMENTOS — reemplaza el "Descubre tu próximo hogar" de ukio.com por
            el catálogo real de unidades que administramos. Oculta hasta tener fotos
            reales; ver SHOW_APARTMENTS_GALLERY arriba y src/lib/apartments.ts. */}
        {SHOW_APARTMENTS_GALLERY && (
        <section className="bg-bg-soft py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Alojamiento
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
              Nuestros departamentos en La Plata
            </h2>
            <p className="mt-4 max-w-2xl text-navy/60">
              Todas las unidades que administramos, listas para tu próxima estadía.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {apartments.map((apt) => (
                <div
                  key={apt.id}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm shadow-navy/5"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={apt.image}
                      alt={apt.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal">
                      {apt.zone}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-navy">{apt.title}</h3>
                    <p className="mt-2 text-sm text-navy/60">
                      {apt.rooms} ambientes · {apt.bathrooms}{" "}
                      {apt.bathrooms > 1 ? "baños" : "baño"} · {apt.m2} m²
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Consultanos por disponibilidad
              </a>
            </div>
          </div>
        </section>
        )}

        {/* BENEFICIOS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Tu estadía
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
            Todo listo para que solo tengas que llegar
          </h2>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-12 w-12 shrink-0 text-teal"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {b.icon}
                </svg>
                <div>
                  <h3 className="text-lg font-semibold uppercase tracking-wide text-navy">
                    {b.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/60">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BANDA DE CONFIANZA — mismo formato que la de /propietarios */}
        <section className="border-b border-line bg-teal/5 py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:gap-10">
            <div className="flex shrink-0 items-center gap-5 sm:border-r sm:border-teal/15 sm:pr-10">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-sm shadow-navy/5">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-6xl font-semibold text-teal sm:text-7xl">
                +2500
              </span>
            </div>
            <p className="text-navy/70">
              estadías gestionadas por año en La Plata, con soporte directo de nuestro
              equipo desde la reserva hasta el check-out.
            </p>
          </div>
        </section>

        {/* CTA + CONTACTO */}
        <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                ¿Buscás alojamiento en La Plata?
              </h2>
              <p className="mt-4 max-w-md text-navy/60">
                Contanos las fechas de tu estadía y te ayudamos a encontrar el
                departamento que mejor se ajuste a lo que necesitás.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Hablar por WhatsApp
              </a>
            </div>

            <form
              action="mailto:contacto@lofter.io"
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-line bg-bg-soft p-8"
            >
              <h3 className="font-display text-xl font-semibold text-navy">
                Contáctanos ahora
              </h3>
              <p className="mt-1 text-sm text-navy/60">
                Nuestro equipo está listo para ayudarte.
              </p>
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="Nombre"
                  placeholder="Nombre"
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
                />
                <textarea
                  name="Consulta"
                  placeholder="Fechas y consulta"
                  rows={4}
                  className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none focus:border-teal"
                />
                <button
                  type="submit"
                  className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
                >
                  Enviar consulta
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
