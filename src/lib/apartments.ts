export type Apartment = {
  id: string;
  title: string;
  image: string;
};

const LOFTERIZE_PHOTOS_URL =
  "https://lofterize-production.up.railway.app/api/v1/public/accommodations/photos";

type LofterizeAccommodation = {
  accommodationId: string | number;
  name: string;
  mainPhotoUrl: string | null;
};

type LofterizePhotosResponse = {
  accommodations: LofterizeAccommodation[];
};

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
      .map((a) => ({
        id: String(a.accommodationId),
        title: a.name,
        image: a.mainPhotoUrl as string,
      }));
  } catch {
    return [];
  }
}
