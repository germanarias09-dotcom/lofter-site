// Reusa el número real publicado en lofter.io. Confirmar que sigue vigente antes de publicar.
const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5492216161983&text&type=phone_number&app_absent=0";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-3 text-white shadow-lg shadow-black/15 transition-all hover:pr-5"
      aria-label="Escribinos por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-6 w-6 shrink-0" fill="currentColor">
        <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.31.65 4.47 1.78 6.32L4 29l7.86-1.75A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.6c-1.98 0-3.83-.55-5.42-1.5l-.39-.23-4.66 1.04 1.06-4.55-.25-.4A9.53 9.53 0 0 1 6.42 15c0-5.28 4.3-9.58 9.6-9.58 5.28 0 9.58 4.3 9.58 9.58 0 5.29-4.3 9.6-9.58 9.6Zm5.28-7.18c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.65.14-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.38 0 1.4 1.02 2.76 1.17 2.95.15.19 2 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-200 group-hover:max-w-[14rem] group-hover:opacity-100">
        Quiero asesoramiento gratis
      </span>
    </a>
  );
}
