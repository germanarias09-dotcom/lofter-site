import { redirect } from "next/navigation";

// El resto del sitio (home, huéspedes, quiénes somos, contacto) todavía no
// está migrado. Mientras tanto, la raíz apunta a la primera sección construida.
export default function RootPage() {
  redirect("/propietarios");
}
