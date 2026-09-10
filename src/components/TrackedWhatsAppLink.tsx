"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

type TrackedWhatsAppLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
> & {
  href: string;
  children: ReactNode;
};

// Envuelve un link de WhatsApp para que, antes de saltar a la app, dispare
// el evento de conversion "click a WhatsApp" de Google Ads (definido como
// window.gtag_report_conversion en src/app/layout.tsx) y recien despues
// redirija -- asi no se pierde la conversion si el navegador corta la
// conexion al abrir WhatsApp. Si gtag no llego a cargar (bloqueador de
// anuncios, falla de red, etc.) el link funciona igual como un <a> normal,
// via su href.
export default function TrackedWhatsAppLink({
  href,
  children,
  onClick,
  ...rest
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(event) => {
        onClick?.(event);
        if (typeof window.gtag_report_conversion === "function") {
          event.preventDefault();
          window.gtag_report_conversion(href);
        }
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
