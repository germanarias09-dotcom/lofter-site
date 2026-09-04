import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Rutas migradas a Next.js/Vercel y accesibles en produccion via el proxy de
// WordPress (ver claude/guia-publicar-propietarios.md). La raiz "/" no se
// incluye porque solo redirige a "/propietarios" -- el sitemap debe listar
// URLs canonicas, no redirects.
const ROUTES: { path: string; priority: number }[] = [
  { path: "/propietarios", priority: 1 },
  { path: "/huespedes", priority: 0.9 },
  { path: "/quienes-somos", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
