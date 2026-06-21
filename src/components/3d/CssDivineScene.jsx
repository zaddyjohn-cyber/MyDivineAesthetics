/**
 * Pure-CSS divine orbit: rotating rings, pulsing glow, twinkling
 * sparkles, drifting pearls. No WebGL, no JS animation loop, no
 * dependencies — paints in <16ms and animates entirely on the GPU.
 */

const sparkles = [
  { left: '14%', top: '22%', delay: '0s', size: 'h-1.5 w-1.5' },
  { left: '78%', top: '16%', delay: '0.6s', size: 'h-2 w-2' },
  { left: '88%', top: '54%', delay: '1.2s', size: 'h-1.5 w-1.5' },
  { left: '10%', top: '68%', delay: '0.4s', size: 'h-2 w-2' },
  { left: '24%', top: '88%', delay: '1.8s', size: 'h-1 w-1' },
  { left: '72%', top: '90%', delay: '1s', size: 'h-1.5 w-1.5' },
  { left: '52%', top: '8%', delay: '2s', size: 'h-1 w-1' },
  { left: '6%', top: '46%', delay: '1.4s', size: 'h-1 w-1' },
  { left: '94%', top: '32%', delay: '0.2s', size: 'h-1.5 w-1.5' },
  { left: '46%', top: '94%', delay: '0.9s', size: 'h-1.5 w-1.5' },
  { left: '36%', top: '14%', delay: '1.6s', size: 'h-1 w-1' },
  { left: '64%', top: '74%', delay: '0.3s', size: 'h-2 w-2' },
];

const pearls = [
  { left: '12%', top: '24%', size: 'h-3 w-3', color: 'bg-gradient-gold', float: 'animate-float' },
  { left: '86%', top: '18%', size: 'h-2.5 w-2.5', color: 'bg-rose-300', float: 'animate-float-slow' },
  { left: '8%', top: '72%', size: 'h-2 w-2', color: 'bg-champagne-200', float: 'animate-float' },
  { left: '90%', top: '76%', size: 'h-3 w-3', color: 'bg-gradient-gold', float: 'animate-float-slow' },
  { left: '48%', top: '6%', size: 'h-1.5 w-1.5', color: 'bg-champagne-300', float: 'animate-float' },
  { left: '52%', top: '92%', size: 'h-2 w-2', color: 'bg-rose-200', float: 'animate-float-slow' },
];

export default function CssDivineScene({ className = '' }) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Rose-gold ambient glow — pulses slowly */}
      <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-rose-gold opacity-45 blur-3xl animate-pulse-glow" />
      {/* Champagne core glow */}
      <div className="absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-100 opacity-60 blur-2xl animate-pulse-glow" />

      {/* Concentric rotating orbit rings */}
      <div className="absolute left-1/2 top-1/2 aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 animate-spin-slower [will-change:transform]">
        <div className="absolute inset-0 rounded-full border border-champagne-300/55" />
        {/* a "bead" on the ring to make the rotation visible */}
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-gradient-gold opacity-90" />
      </div>
      <div className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow [will-change:transform]">
        <div className="absolute inset-0 rounded-full border border-champagne-300/70 [transform:rotate(15deg)]" />
        <div className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-rose-300 opacity-90" />
      </div>
      <div className="absolute left-1/2 top-1/2 aspect-square w-[56%] -translate-x-1/2 -translate-y-1/2 animate-spin-rev [will-change:transform]">
        <div className="absolute inset-0 rounded-full border border-champagne-200/60 [transform:rotate(-12deg)]" />
        <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-champagne-300 opacity-90" />
      </div>

      {/* Drifting pearls */}
      {pearls.map((p, i) => (
        <span
          key={`p${i}`}
          style={{ left: p.left, top: p.top, animationDelay: `${(i % 3) * 0.7}s` }}
          className={`pointer-events-none absolute ${p.size} ${p.color} ${p.float} rounded-full opacity-80 blur-[0.5px] shadow-soft`}
        />
      ))}

      {/* Twinkling sparkles */}
      {sparkles.map((s, i) => (
        <span
          key={`s${i}`}
          style={{ left: s.left, top: s.top, animationDelay: s.delay }}
          className={`pointer-events-none absolute ${s.size} rounded-full bg-champagne-200 opacity-70 animate-twinkle`}
        />
      ))}
    </div>
  );
}
