import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // Fotos de ejemplo para /huespedes mientras no existe el endpoint de Lofterize.
        // Ver src/lib/apartments.ts.
      },
    ],
  },
};

export default nextConfig;
