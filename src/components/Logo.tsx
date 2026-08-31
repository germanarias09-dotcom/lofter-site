export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display inline-flex items-center gap-1 text-2xl font-semibold tracking-tight ${className}`}
    >
      <span className="text-navy">L</span>
      <span
        className="relative inline-flex h-[0.85em] w-[0.85em] items-center justify-center rounded-full bg-teal align-middle"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-[0.55em] w-[0.55em] text-white" fill="currentColor">
          <circle cx="12" cy="9" r="4.2" />
          <path d="M9.6 12.5h4.8l1.6 8.5a1 1 0 0 1-1 1.2H9a1 1 0 0 1-1-1.2z" />
        </svg>
      </span>
      <span className="text-teal">FTER</span>
    </span>
  );
}
