import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

// Las fuentes se cargan como stylesheet de Google Fonts (en vez de next/font)
// para no depender de acceso a fonts.googleapis.com en el momento del build.
// Si más adelante se prefiere auto-hospedar los archivos .woff2 (mejor
// performance, cero requests externos), next/font/local es el reemplazo directo.

// ID de la etiqueta de Google Ads (conversion tracking). Se carga en todo
// el sitio via next/script mas abajo -- ver seccion GOOGLE_ADS_ID.
const GOOGLE_ADS_ID = "AW-18402388942";

const SITE_TITLE = "LOFTER | Alquileres temporarios en La Plata";
const SITE_DESCRIPTION =
  "LOFTER administra tu propiedad en La Plata de punta a punta: marketing, reservas, huéspedes y liquidación mensual.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

// Datos estructurados (schema.org) sitewide: ayuda a que Google entienda que
// LOFTER es un negocio local de alojamiento en La Plata (mapas, rich
// snippets, panel de conocimiento) en vez de tener que inferirlo del texto.
const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_OG_IMAGE,
  telephone: "+542216161983",
  email: "contacto@lofter.io",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Plata",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  areaServed: "La Plata, Buenos Aires, Argentina",
  sameAs: [
    "https://www.facebook.com/lofter.io",
    "https://www.instagram.com/lofterviajeros/",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- intentional: evita depender de fonts.googleapis.com en build time (ver comentario arriba) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@500;600;700&family=Work+Sans:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger -- JSON-LD estatico, sin input de usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        {/* Etiqueta de Google Ads (gtag.js) -- conversion tracking sitewide. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
