"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedStat({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
}: {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(target * eased);
        if (progress < 1) requestAnimationFrame(step);
        else setValue(target);
      };
      requestAnimationFrame(step);
    };

    // Sin IntersectionObserver (SSR/navegadores viejos) animamos igual al montar.
    if (typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = value.toLocaleString("es-AR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
