/**
 * Pure-CSS lookalike of DivineScene. Used on mobile (and reduced-motion)
 * to avoid loading the ~900KB Three.js bundle.
 */
export default function CssDivineScene({ className = '' }) {
  return (
    <div
      className={`relative h-[420px] w-full sm:h-[520px] lg:h-[680px] ${className}`}
      aria-hidden="true"
    >
      {/* Outer halo */}
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-rose-gold opacity-50 blur-3xl" />
      {/* Soft champagne glow */}
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-100 opacity-70 blur-2xl" />
      {/* Concentric gold rings */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-300/70" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-200/70" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-300/50" />
      {/* Center glass sphere */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[28%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/80 via-blush-50/60 to-champagne-100/70 shadow-halo backdrop-blur" />
      {/* Floating accent dots */}
      <span className="absolute left-[18%] top-[28%] h-3 w-3 rounded-full bg-gradient-gold opacity-70 blur-[1px]" />
      <span className="absolute left-[82%] top-[22%] h-2 w-2 rounded-full bg-rose-300 opacity-70 blur-[1px]" />
      <span className="absolute left-[14%] top-[72%] h-2.5 w-2.5 rounded-full bg-champagne-200 opacity-80 blur-[1px]" />
      <span className="absolute left-[86%] top-[78%] h-3 w-3 rounded-full bg-gradient-gold opacity-60 blur-[1px]" />
    </div>
  );
}
