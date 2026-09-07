export type Apartment = {
  id: string;
  title: string;
  image: string;
  /** Ubicación (calle y altura/entrecalles), para mostrar como tag sobre la foto. */
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
  // Lofterize ya devuelve estos dos campos en /accommodations/photos. Se
  // guardan mock* como red de seguridad por si alguna unidad puntual todavía
  // no los tiene cargados (quedaría null/undefined) — no debería pasar en
  // el uso normal.
  location?: string | null;
  guestLimit?: number | null;
};

type LofterizePhotosResponse = {
  accommodations: LofterizeAccommodation[];
};

// Zonas conocidas de La Plata, usadas como red de seguridad si alguna unidad
// puntual llega sin "location" cargado desde Lofterize.
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

function mockZone(id: string): string {
  return ZONES[hashId(id) % ZONES.length];
}

function mockCapacity(id: string): number {
  return 2 + (hashId(id + "capacity") % 5); // entre 2 y 6 huéspedes
}

// Lofterize devuelve algo como "calle 45 entre 16 y 17, La Plata" (a veces
// "La plata" en minúscula) — como el tag ya se muestra en una página que es
// 100% de La Plata, sacamos ese sufijo repetido y capitalizamos, para que
// quede compacto sobre la foto (ej. "Calle 45 entre 16 y 17").
function formatLocation(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const withoutCity = trimmed.replace(/,?\s*la\s*plata\s*$/i, "").trim();
  const text = withoutCity || trimmed;
  return text.charAt(0).toUpperCase() + text.slice(1);
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
          zone: formatLocation(a.location) ?? mockZone(id),
          capacity: a.guestLimit ?? mockCapacity(id),
        };
      });
  } catch {
    return [];
  }
}
