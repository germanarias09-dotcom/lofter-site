"use client";

import { useLayoutEffect, useRef } from "react";

// Motor de reservas real de LOFTER (Octorate). Confirmado inspeccionando
// lofter.io/huespedes/ (WordPress) y el propio código fuente de
// resx.octorate.com/.../widget/js/form.js:
//
//   1. Autolocalización: Widget.show() recorre TODOS los <script> del
//      documento y se queda con los que matchean
//      /octobook\/resources\/widget\/js\/(form(\.full)?\.js)$/ — no importa
//      dónde estén ni si son "el último" script del documento. (La idea
//      anterior de que Octorate necesita ser el último <script> del
//      documento era incorrecta; no hace falta insertarlo en document.body
//      ni reubicarlo con un MutationObserver.)
//   2. Ubicación del widget: Widget.append() hace `t.after(e)` — el widget
//      se inserta como hermano, justo después del propio <script>. Por eso
//      alcanza con insertar el script DENTRO de este contenedor.
//   3. El disparador real: Widget.load() (llamado al ejecutarse form.js)
//      hace `window.addEventListener("load", Widget.show)`. En WordPress
//      esto funciona porque el script está en el HTML inicial y el evento
//      "load" de la ventana todavía no ocurrió. En Next.js insertamos el
//      script desde un efecto de React, que corre DESPUÉS de que la ventana
//      ya disparó su evento "load" — ese listener queda registrado para un
//      evento que ya pasó y nunca se vuelve a disparar. Por eso el widget
//      quedaba mudo (sin errores, sin más pedidos de red: el script se
//      registraba pero Widget.show() nunca se llamaba).
//      Solución: en el onload del <script>, si el documento ya terminó de
//      cargar (document.readyState === "complete", el caso normal en una
//      SPA), llamamos nosotros mismos a window.octorate.octobook.Widget.show().
//      Si el documento TODAVÍA no terminó de cargar (puede pasar en
//      producción con conexiones más lentas o más imágenes por cargar),
//      NO agregamos un segundo listener de "load" nosotros: form.js ya
//      registró el suyo propio al ejecutarse (vía Widget.load()), y ese
//      va a disparar Widget.show() solo, una vez, cuando la página
//      termine de cargar. Agregar un segundo listener acá hacía que
//      Widget.show() se llamara dos veces y el buscador apareciera
//      duplicado.
const OCTORATE_SITEKEY = "130c7f3021d7acb3f17e0213b5524c20";
const OCTORATE_SCRIPT_SRC =
  "https://resx.octorate.com/octobook/resources/widget/js/form.js";

declare global {
  interface Window {
    octorate?: {
      octobook?: {
        Widget?: {
          show?: () => void;
          running?: boolean;
        };
      };
    };
  }
}

export default function OctorateBookingWidget() {
  const slotRef = useRef<HTMLDivElement>(null);
  const scriptInjected = useRef(false);

  useLayoutEffect(() => {
    const slot = slotRef.current;
    if (!slot || scriptInjected.current) return;
    scriptInjected.current = true;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = OCTORATE_SCRIPT_SRC;
    script.setAttribute("data-sitekey", OCTORATE_SITEKEY);
    script.onload = () => {
      // El script ya corrió Widget.load(), que sólo sirve para escuchar un
      // evento "load" de window que en una SPA ya pasó hace rato. Si el
      // documento ya está listo, disparamos Widget.show() nosotros mismos.
      // Si NO está listo todavía, no hacemos nada más: form.js ya registró
      // su propio listener de "load" (ver comentario arriba) y ese alcanza.
      if (document.readyState === "complete") {
        window.octorate?.octobook?.Widget?.show?.();
      }
    };
    slot.appendChild(script);
  }, []);

  return (
    // Fondo blanco propio: el widget de Octorate viene pensado para vivir
    // sobre una sección clara (así está en WordPress). Sin este fondo, sus
    // labels ("Llegada", "Fecha de salida", "Adultos") quedan en gris sobre
    // el hero oscuro y casi no se leen. [&:empty]:hidden evita mostrar el
    // recuadro blanco vacío mientras el widget todavía no llegó.
    <div
      ref={slotRef}
      className="octorate-widget-slot overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy/15 [&:empty]:hidden"
    />
  );
}
