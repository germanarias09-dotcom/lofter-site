import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Quiénes somos | LOFTER",
  description:
    "LOFTER nació administrando unidades propias en La Plata. Hoy aplicamos esa misma lógica, más tecnología y conocimiento hiperlocal, a cada propiedad que gestionamos.",
  path: "/quienes-somos",
});

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5492216161983&text=Hola!%20Quiero%20conocer%20mas%20sobre%20LOFTER&type=phone_number&app_absent=0";

// Foto ya validada en /huespedes (misma URL, otro recorte). Reutilizarla evita
// el riesgo de un ID de Unsplash roto en una página nueva.
const HISTORIA_IMAGE =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80";

const diferenciales = [
  {
    title: "Conocimiento hiperlocal",
    text: "La Plata no es un mercado promedio: leemos la curva de reservas, el calendario de eventos de la ciudad y el perfil de cada huésped para ajustar precio y estrategia zona por zona.",
    icon: (
      <path d="M12 21c-4-4-7-7.7-7-11a7 7 0 0 1 14 0c0 3.3-3 7-7 11Zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    ),
  },
  {
    title: "Tecnología propia",
    text: "Bot de atención comercial 24/7, un PMS que centraliza calendarios para evitar el double-booking, pricing dinámico que ajusta la tarifa día a día según la demanda real y sistema de liquidación a propietarios.",
    icon: (
      <path d="M9 4h6l1 3h3v13H5V7h3l1-3Zm3 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    ),
  },
  {
    title: "Una operación, un responsable",
    text: "Evaluamos, publicamos, comercializamos, operamos, liquidamos y optimizamos. Un solo equipo lleva tu propiedad de punta a punta, sin que tengas que coordinar con nadie más.",
    icon: <path d="M4 5h16v4H4zM4 11h16v8H4zM8 15h4" />,
  },
  {
    title: "Alineados con el propietario",
    text: "Ganamos cuando tu propiedad genera ingresos. Cuidamos cada unidad con la misma lógica con la que cuidamos las nuestras, porque así empezó LOFTER.",
    icon: <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3Zm-2.5 9 2 2 3.5-4" />,
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Nav active="/quienes-somos" />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-teal-dark text-white">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
              Quiénes somos
            </p>
            <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Somos el equipo detrás de cada estadía y cada alquiler en La Plata
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Antes de gestionar propiedades de terceros, gestionamos las
              nuestras. De ahí viene la forma en que trabajamos hoy: de cerca,
              con conocimiento real de la ciudad y sin tercerizar lo que
              importa.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-teal/5" />
        </section>

        {/* NUESTRA HISTORIA */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal">
                Nuestra historia
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
                Todo empezó administrando nuestras propias unidades
              </h2>
              <p className="mt-4 text-navy/60">
                Desde 2018 gestionamos departamentos en La Plata. Esa experiencia
                directa —limpiezas, check-ins, temporadas altas y bajas, huéspedes
                exigentes— nos enseñó lo que realmente hace rentable a una propiedad
                en esta ciudad. Con el tiempo, otros propietarios empezaron a
                pedirnos que hiciéramos lo mismo con sus unidades. Así nació LOFTER:
                una gestión profesional construida por gente que primero puso en
                juego sus propios departamentos.
              </p>
              <blockquote className="mt-6 border-l-2 border-teal py-1 pl-5 font-display text-lg text-navy">
                &ldquo;Cuidamos cada activo con la misma lógica con la que cuidamos
                los nuestros.&rdquo;
              </blockquote>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-xl shadow-navy/10">
              <Image
                src={HISTORIA_IMAGE}
                alt="Departamento gestionado por LOFTER en La Plata"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* POR QUE LOFTER */}
        <section className="bg-bg-soft py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Por qué LOFTER
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
              Lo que nos hace distintos
            </h2>

            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {diferenciales.map((d) => (
                <div key={d.title} className="flex gap-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-12 w-12 shrink-0 text-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {d.icon}
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">
                      {d.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILOSOFIA / CITA */}
        <section className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Nuestra filosofía
            </p>
            <p className="font-display mt-6 text-2xl font-medium leading-snug sm:text-3xl">
              Creemos que todos merecen disfrutar de una experiencia de alojamiento
              con la comodidad de un hotel y el calor de un hogar, sin las
              ineficiencias del alquiler tradicional.
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-white/50">
              — Equipo LOFTER
            </p>
          </div>
        </section>

        {/* CTA + CONTACTO */}
        <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
              ¿Querés conocernos mejor?
            </h2>
            <p className="mt-4 text-navy/60">
              Contanos si sos propietario, huésped, o simplemente tenés una consulta. Te respondemos a la brevedad.
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
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
