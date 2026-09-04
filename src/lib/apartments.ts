export type Apartment = {
  id: string;
  title: string;
  image: string;
  /** Zona/ubicación aproximada, para mostrar como tag sobre la foto. */
  zone: string;
  /** Capacidad máxima de huéspedes. */
  capacity: number;
};

const LOFTERIZE_PHOTOS_URL =
  "https://lofterize-production.up.railway.app/api/v1/public/accommodations/photos";

type LofterizeAccommodation = {
  accommodationId: string | number;
  name: string;
  mainPhotoUrl: string | null;
  // Campos que Lofterize todavía no devuelve en este endpoint pero va a
  // sumar más adelante. Se leen acá ya mismo (si algún día aparecen en la
  // respuesta se usan tal cual, sin tocar nada más) y mientras tanto se
  // completan con un mock determinístico más abajo.
  zone?: string | null;
  capacity?: number | null;
};

type LofterizePhotosResponse = {
  accommodations: LofterizeAccommodation[];
};

// Zonas conocidas de La Plata, usadas SOLO como tag aproximado de ubicación
// (no una dirección exacta) mientras el endpoint de Lofterize no devuelve
// esa info — es también el criterio que usan los sitios de alquiler
// temporario en general (Airbnb, Booking) para no exponer la dirección
// puntual de una unidad antes de la reserva.
const ZONES = [
  "Centro",
  "Plaza San Martín",
  "Plaza Moreno",
  "Bosque",
  "City Bell",
  "Diagonal 80",
];

// Hash simple y determinístico (mismo id -> mismo resultado siempre), para
// que el mock no "salte" de valor en cada revalidación del cache.
function hashId(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) {
    h = (h * 31 + id.charCodeAt(i)) >>> 0;
  }
  return h;
}

// TODO: sacar mockZone/mockCapacity el día que Lofterize empiece a devolver
// "zone" y "capacity" reales en /accommodations/photos — el fetch de abajo
// ya está preparado para usar esos valores en cuanto lleguen.
function mockZone(id: string): string {
  return ZONES[hashId(id) % ZONES.length];
}

function mockCapacity(id: string): number {
  return 2 + (hashId(id + "capacity") % 5); // entre 2 y 6 huéspedes
}

// Trae las unidades reales desde el backend de Lofterize. Se excluyen los
// alojamientos sin foto de portada (mainPhotoUrl null) para no mostrar
// departamentos "de mentira" en la galería de Huéspedes.
export async function getApartments(): Promise<Apartment[]> {
  try {
    const res = await fetch(LOFTERIZE_PHOTOS_URL, {
      next: { revalidate: 3600 }, // recachear cada 1h
    });

    if (!res.ok) return [];

    const data: LofterizePhotosResponse = await res.json();

    return data.accommodations
      .filter((a) => a.mainPhotoUrl !== null && a.mainPhotoUrl !== "")
      .map((a) => {
        const id = String(a.accommodationId);
        return {
          id,
          title: a.name,
          image: a.mainPhotoUrl as string,
          zone: a.zone ?? mockZone(id),
          capacity: a.capacity ?? mockCapacity(id),
        };
      });
  } catch {
    return [];
  }
}
