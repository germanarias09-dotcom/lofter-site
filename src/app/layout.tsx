import type { Metadata } from "next";
import "./globals.css";

// Las fuentes se cargan como stylesheet de Google Fonts (en vez de next/font)
// para no depender de acceso a fonts.googleapis.com en el momento del build.
// Si más adelante se prefiere auto-hospedar los archivos .woff2 (mejor
// performance, cero requests externos), next/font/local es el reemplazo directo.

export const metadata: Metadata = {
  title: "LOFTER | Alquileres temporarios en La Plata",
  description:
    "LOFTER administra tu propiedad en La Plata de punta a punta: marketing, reservas, huéspedes y liquidación mensual.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- intentional: evita depender de fonts.googleapis.com en build time (ver comentario arriba) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
