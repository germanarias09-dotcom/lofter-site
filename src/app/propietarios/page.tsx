import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedStat from "@/components/AnimatedStat";

export const metadata: Metadata = {
  title: "Propietarios | LOFTER",
  description:
    "Sumá tu propiedad a LOFTER: marketing multi-plataforma, gestión de huéspedes, mantenimiento y liquidación mensual transparente en La Plata.",
};

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5492216161983&text=Hola!%20Quiero%20sumar%20mi%20propiedad%20a%20LOFTER&type=phone_number&app_absent=0";

const numbers = [
  {
    target: 30,
    prefix: "+",
    label: "Propiedades",
    text: "Gestión activa e hiperlocal en La Plata.",
  },
  {
    target: 500,
    prefix: "USD ",
    suffix: "K",
    label: "Volumen Anual en Reservas",
    text: "Reservas procesadas por año.",
  },
  {
    target: 2500,
    prefix: "+",
    label: "Reservas Concretadas por año",
    text: "Operaciones gestionadas de punta a punta.",
  },
  {
    target: 8,
    prefix: "+",
    suffix: " Años",
    label: "Experiencia Local",
    text: "Interpretando la demanda de la ciudad.",
  },
  {
    target: 1.8,
    decimals: 1,
    prefix: "USD ",
    suffix: " M",
    label: "Capital Administrado",
    text: "Valor estimado de los activos bajo gestión.",
  },
];

const steps = [
  {
    n: "01",
    title: "Evaluamos tu propiedad",
    text: "Visitamos la unidad, sacamos fotos profesionales y analizamos la zona de La Plata para proyectar el ingreso potencial.",
  },
  {
    n: "02",
    title: "Generamos reservas",
    text: "Priorizamos nuestra demanda directa de huéspedes y empresas, y complementamos con los principales sitios de reserva. Gestionamos precios y disponibilidad en tiempo real para maximizar ocupación y rentabilidad.",
  },
  {
    n: "03",
    title: "Operamos el día a día",
    text: "Check-in y soporte al huésped las 24 horas, limpieza profesional, mantenimiento preventivo y verificación de cada reserva.",
  },
  {
    n: "04",
    title: "Recibís tu liquidación",
    text: "Todos los meses te llega el detalle de reservas, ocupación e ingresos, y tu transferencia correspondiente.",
  },
];

const services = [
  {
    title: "Marketing",
    text: "Optimizamos la visibilidad de tu propiedad, promocionando tu espacio en los principales sitios de reserva.",
    icon: (
      <path d="M4 10v4h4l6 4V6l-6 4H4Zm12.5-2.5a5 5 0 0 1 0 5M19 5a9 9 0 0 1 0 10" />
    ),
  },
  {
    title: "Administración",
    text: "Gestionamos la relación con los huéspedes con soporte los 7 días de la semana, incluyendo cualquier imprevisto durante la estadía.",
    icon: <path d="M4 5h12v14H4zM8 3v4M13 3v4M4 10h12m4 3-4 4-2-2" />,
  },
  {
    title: "Soporte",
    text: "Te ayudamos a gestionar tus unidades, con acompañamiento los 7 días de la semana.",
    icon: <path d="M12 3a7 7 0 0 0-7 7v3a2 2 0 0 0 2 2h1v-6H6v-1a6 6 0 0 1 12 0v1h-2v6h1a2 2 0 0 0 2-2v-3a7 7 0 0 0-7-7Zm-4 12v1a4 4 0 0 0 4 4" />,
  },
  {
    title: "Seguridad",
    text: "Gestionamos la identificación de huéspedes a partir de distintos medios digitales, para asegurar el correcto uso de tu espacio.",
    icon: <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3Zm-2.5 9 2 2 3.5-4" />,
  },
  {
    title: "Contractual",
    text: "Disponemos de distintos modelos de acuerdo que ayudan a optimizar tu rentabilidad, según el perfil de cada propietario.",
    icon: <path d="M7 4h7l4 4v12H7zM14 4v4h4M9 12h6M9 16h6" />,
  },
  {
    title: "Amoblamiento",
    text: "Te ayudamos a diseñar y equipar tu unidad para brindarle al huésped la mejor experiencia LOFTER.",
    icon: <path d="M4 20v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 20h16M6 12V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />,
  },
  {
    title: "Mantenimiento",
    text: "Coordinamos el mantenimiento de la unidad ante cualquier desperfecto, con proveedores de confianza para resolverlo rápido y sin que tengas que ocuparte vos.",
    icon: (
      <path d="M14.5 5.5a3.5 3.5 0 0 0-4.6 4.6L4 16v3h3l5.9-5.9a3.5 3.5 0 0 0 4.6-4.6l-2.3 2.3-2-2 2.3-2.3Z" />
    ),
  },
];

const care = [
  {
    title: "Verificación de huéspedes",
    text: "Revisamos identidad y perfil de cada huésped antes de confirmar el check-in.",
  },
  {
    title: "Check-in digital",
    text: "El huésped completa sus datos antes de llegar, sin que tengas que estar presente.",
  },
  {
    title: "Mantenimiento preventivo",
    text: "Inspeccionamos la unidad entre estadías y coordinamos reparaciones con proveedores de confianza.",
  },
  {
    title: "Reporte de cada reserva",
    text: "Cada estadía queda documentada: fechas, huésped, estado de la unidad antes y después.",
  },
];

export default function PropietariosPage() {
  return (
    <>
      <Nav active="/propietarios" />
      <main className="flex-1">
        {/* HERO + LOFTER EN NUMEROS */}
        <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-teal-dark text-white">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/60">
              Propietarios
            </p>
            <h1 className="font-display max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Tu propiedad, gestionada como si fuera nuestra
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80">
              Lofter nació administrando unidades propias. Hoy aplicamos esa misma
              lógica a cada propiedad que gestionamos: tecnología, demanda directa y
              operación integral para maximizar su ocupación y rentabilidad.{" "}
              <span className="font-semibold text-teal">
                Invertimos en el mismo negocio que gestionamos.
              </span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-dark"
              >
                Quiero sumar mi propiedad
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white"
              >
                Ver cómo funciona
              </a>
            </div>

            {/* LOFTER EN NUMEROS — continúa el mismo degradado del hero, sin tarjeta aparte */}
            <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {numbers.map((n) => (
                <div key={n.label}>
                  <AnimatedStat
                    target={n.target}
                    decimals={n.decimals}
                    prefix={n.prefix}
                    suffix={n.suffix}
                    className="font-display block text-4xl font-bold text-white"
                  />
                  <span className="mt-3 block font-semibold text-white/90">{n.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Se aclara hacia abajo, como en renteo.com.co, para entrar suave a la seccion clara siguiente */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg-soft" />
        </section>

        {/* CANALES DE RESERVA — tarjeta flotante que conecta el hero con el resto del contenido */}
        <section className="relative z-10 -mt-16 bg-bg-soft px-6 sm:-mt-20">
          <div className="mx-auto max-w-7xl rounded-2xl border border-line bg-white p-8 shadow-xl shadow-navy/10 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex shrink-0 items-center gap-5 sm:border-r sm:border-line sm:pr-10">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={1.6}>
                    <path d="M4 16l5-5 3 3 7-8M13 6h6v6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="font-display text-6xl font-semibold text-teal sm:text-7xl">
                  85%
                </span>
              </div>
              <p className="text-navy/70">
                de nuestras reservas se generan por canales directos, a través de
                nuestra base de huéspedes particulares y clientes corporativos.
                Priorizamos la venta directa y utilizamos Airbnb y Booking como
                canales complementarios, reduciendo comisiones y mejorando la
                rentabilidad de cada propiedad.
              </p>
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="mx-auto max-w-7xl px-6 pb-24 pt-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal">
            Así de fácil
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
            Empezá a generar ingresos en 4 pasos
          </h2>
          <p className="mt-4 max-w-2xl text-navy/60">
            Sin trámites eternos ni curva de aprendizaje: nosotros nos encargamos de todo
            desde el primer día.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="relative">
                <span className="font-display text-4xl font-semibold text-teal/30">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS INCLUIDOS */}
        <section id="servicios" className="bg-bg-soft py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Servicios incluidos
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold text-navy sm:text-4xl">
              Todo lo que tu propiedad necesita, en un solo lugar
            </h2>

            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="flex gap-5">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-12 w-12 shrink-0 text-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold uppercase tracking-wide text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTAL DE PROPIETARIOS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal">
                Portal de propietarios
              </p>
              <h2 className="font-display mt-3 text-3xl font-semibold text-navy sm:text-4xl">
                Tus reservas y tu liquidación, siempre a mano
              </h2>
              <p className="mt-4 text-navy/60">
                Cada mes te enviamos el detalle de ocupación, reservas e ingresos de tu
                unidad, y tu liquidación se procesa a través de nuestro sistema propio.
                Ningún dato de huéspedes ni de pagos pasa por planillas sueltas.
              </p>
              <a
                href="#"
                className="mt-8 inline-block rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
              >
                Acceso propietarios
              </a>
              <p className="mt-2 text-xs text-navy/40">
                * Enlace al portal pendiente de configurar.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-xl shadow-navy/5">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="text-sm font-semibold text-navy">Liquidación — Ejemplo</span>
                <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">
                  Vista ilustrativa
                </span>
              </div>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-center justify-between">
                  <span className="text-navy/70">Unidad</span>
                  <span className="font-medium text-navy">Depto Ejemplo 4B</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-navy/70">Reservas del mes</span>
                  <span className="font-medium text-navy">—</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-navy/70">Ocupación</span>
                  <span className="font-medium text-navy">—</span>
                </li>
                <li className="flex items-center justify-between border-t border-line pt-4">
                  <span className="text-navy/70">Total a liquidar</span>
                  <span className="font-display text-lg font-semibold text-teal">$ —</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CUIDADO DE LA PROPIEDAD */}
        <section className="bg-navy py-24 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">
              Protección integral
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Cómo cuidamos tu propiedad
            </h2>
            <p className="mt-4 max-w-2xl text-white/60">
              Cada reserva pasa por distintas instancias de control, antes, durante y
              después de la estadía.
            </p>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {care.map((c) => (
                <div key={c.title} className="rounded-xl border border-white/10 p-6">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/60">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + CONTACTO */}
        <section id="contacto" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
                ¿Tenés una propiedad en La Plata?
              </h2>
              <p className="mt-4 max-w-md text-navy/60">
                Contanos sobre tu unidad y te contactamos para coordinar una evaluación
                sin costo.
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
                  placeholder="Consulta"
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
