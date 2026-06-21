/**
 * Pure-CSS lookalike of DivineScene. Used on every device below the
 * large-desktop threshold, plus reduced-motion and Save-Data clients.
 * The video orb is the center; this scene only paints the orbit + glow.
 */
export default function CssDivineScene({ className = '' }) {
  return (
    <div
      className={`relative h-[420px] w-full sm:h-[520px] lg:h-[680px] ${className}`}
      aria-hidden="true"
    >
      {/* Rose-gold ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-rose-gold opacity-45 blur-3xl" />
      {/* Champagne core glow */}
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-100 opacity-60 blur-2xl" />
      {/* Concentric orbit rings — gold */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-300/55" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-300/70 [transform:translate(-50%,-50%)_rotate(15deg)]" />
      <div className="absolute left-1/2 top-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-champagne-200/60 [transform:translate(-50%,-50%)_rotate(-12deg)]" />
      {/* Soft floating pearls */}
      <span className="absolute left-[14%] top-[26%] h-3 w-3 rounded-full bg-gradient-gold opacity-80 blur-[0.5px] shadow-soft" />
      <span className="absolute left-[86%] top-[20%] h-2.5 w-2.5 rounded-full bg-rose-300 opacity-75 blur-[0.5px]" />
      <span className="absolute left-[10%] top-[76%] h-2 w-2 rounded-full bg-champagne-200 opacity-85" />
      <span className="absolute left-[88%] top-[80%] h-3 w-3 rounded-full bg-gradient-gold opacity-70 blur-[0.5px]" />
      <span className="absolute left-[48%] top-[8%] h-1.5 w-1.5 rounded-full bg-champagne-300 opacity-80" />
      <span className="absolute left-[52%] top-[90%] h-2 w-2 rounded-full bg-rose-200 opacity-80" />
    </div>
  );
}
