export type Apartment = {
  id: string;
  title: string;
  zone: string;
  rooms: number;
  bathrooms: number;
  m2: number;
  image: string;
};

// Fotos y datos de ejemplo. Cuando el endpoint de Lofterize esté disponible,
// reemplazar el contenido de esta función por un fetch real, por ejemplo:
//
//   export async function getApartments(): Promise<Apartment[]> {
//     const res = await fetch(`${process.env.LOFTERIZE_API_URL}/apartments`, {
//       next: { revalidate: 3600 }, // recachear cada 1h
//     });
//     if (!res.ok) return [];
//     return res.json();
//   }
//
// La forma del tipo Apartment puede ajustarse cuando se conozca el shape real
// de la respuesta de Lofterize.
const PLACEHOLDER_APARTMENTS: Apartment[] = [
  {
    id: "1",
    title: "Depto Plaza San Martín",
    zone: "Centro",
    rooms: 2,
    bathrooms: 1,
    m2: 48,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=75",
  },
  {
    id: "2",
    title: "Casa con jardín Bosque",
    zone: "Bosque",
    rooms: 3,
    bathrooms: 2,
    m2: 90,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=75",
  },
  {
    id: "3",
    title: "Depto vista abierta 44",
    zone: "Centro",
    rooms: 2,
    bathrooms: 1,
    m2: 55,
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=75",
  },
  {
    id: "4",
    title: "Loft calle 7",
    zone: "Centro",
    rooms: 1,
    bathrooms: 1,
    m2: 36,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=75",
  },
  {
    id: "5",
    title: "Depto Diagonal 80",
    zone: "City Bell",
    rooms: 2,
    bathrooms: 1,
    m2: 52,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=75",
  },
  {
    id: "6",
    title: "Depto Plaza Moreno",
    zone: "Centro",
    rooms: 3,
    bathrooms: 2,
    m2: 70,
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=75",
  },
];

export async function getApartments(): Promise<Apartment[]> {
  return PLACEHOLDER_APARTMENTS;
}
