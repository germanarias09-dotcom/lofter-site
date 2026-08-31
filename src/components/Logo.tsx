import Image from "next/image";

export default function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const img = (
    <Image
      src="/logo.png"
      alt="LOFTER"
      width={781}
      height={191}
      className="h-8 w-auto sm:h-9"
      priority
    />
  );

  if (variant === "onDark") {
    // El logo original usa navy sobre transparente: sobre fondos oscuros
    // (footer, hero) lo montamos en una chapita blanca para que no pierda contraste.
    return (
      <span
        className={`inline-flex items-center rounded-lg bg-white px-3 py-1.5 shadow-sm ${className}`}
      >
        {img}
      </span>
    );
  }

  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
