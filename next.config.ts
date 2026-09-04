import type { NextConfig } from "next";

// Content-Security-Policy en modo "Report-Only": no bloquea nada todavia,
// solo reporta en la consola del navegador (DevTools > Console) que hubiera
// bloqueado si estuviera activa. Se deja asi a proposito -- el sitio carga
// varios scripts de terceros (Octorate para el buscador de reservas,
// Trustindex para las reseñas de Booking) y una politica mal armada podria
// romper el buscador de reservas sin que se note visualmente. Antes de
// pasarla a "Content-Security-Policy" (modo enforcing, que si bloquea),
// abrir /huespedes con DevTools abierto, reservar/usar el buscador de
// Octorate, y confirmar en la pestaña Console que no aparece ningun
// "[Report Only] Refused to ...".
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://resx.octorate.com https://cdn.trustindex.io",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://resx.octorate.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: https://images.unsplash.com https://cdn.trustindex.io https://resx.octorate.com https://api.octorate.com",
  "connect-src 'self' https://api.octorate.com https://resx.octorate.com https://cdn.trustindex.io",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const SECURITY_HEADERS = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Content-Security-Policy-Report-Only", value: CSP },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // Fotos de ejemplo para /huespedes mientras no existe el endpoint de Lofterize.
        // Ver src/lib/apartments.ts.
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
