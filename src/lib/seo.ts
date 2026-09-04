import type { Metadata } from "next";

// Dominio publico del sitio (el que ve Google y la gente al compartir un
// link) -- lofter.io, no la URL de Vercel. lofter.io sirve estas paginas via
// un reverse proxy en WordPress (ver claude/guia-publicar-propietarios.md
// en el proyecto de Claude), pero para SEO/Open Graph siempre hay que usar
// este dominio.
export const SITE_URL = "https://lofter.io";
export const SITE_NAME = "LOFTER";

// Imagen usada para las vistas previas de Open Graph / Twitter Card en todo
// el sitio, mientras no tengamos fotografia de marca propia en formato
// horizontal (1200x630). Cuando haya fotos reales de LOFTER, alcanza con
// reemplazar esta constante -- no hace falta tocar cada pagina.
export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&h=630&q=80";

type PageSeoOptions = {
  title: string;
  description: string;
  /** Ruta de la pagina, ej: "/propietarios" (sin dominio, con barra inicial). */
  path: string;
  /** Imagen de Open Graph especifica de esta pagina. Por defecto usa DEFAULT_OG_IMAGE. */
  image?: string;
};

/**
 * Arma el objeto Metadata completo de una pagina: titulo, descripcion, URL
 * canonica y las tarjetas de Open Graph / Twitter -- para no repetir este
 * bloque en cada page.tsx.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_AR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
