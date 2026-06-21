/**
 * Brand illustrations for the "Sacred Self-Care, Backed by Skill" pillars.
 * Inline SVG — zero network, perfectly themable, scales cleanly.
 */

const Gradients = ({ id }) => (
  <defs>
    <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#F7EBD2" />
      <stop offset="50%" stopColor="#D4AC70" />
      <stop offset="100%" stopColor="#B8843D" />
    </linearGradient>
    <linearGradient id={`${id}-blush`} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#FBEFEB" />
      <stop offset="100%" stopColor="#E8C0B3" />
    </linearGradient>
    <radialGradient id={`${id}-glow`} cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stopColor="#EFD9B1" stopOpacity="0.7" />
      <stop offset="100%" stopColor="#EFD9B1" stopOpacity="0" />
    </radialGradient>
  </defs>
);

export function MedicalPrecisionArt({ className = '' }) {
  const id = 'mp';
  return (
    <svg viewBox="0 0 240 160" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Gradients id={id} />
      {/* Halo glow */}
      <circle cx="120" cy="80" r="70" fill={`url(#${id}-glow)`} />

      {/* Outer precision ring */}
      <circle cx="120" cy="80" r="46" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.5" opacity="0.85" />
      {/* Inner ring */}
      <circle cx="120" cy="80" r="32" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1" opacity="0.65" />
      {/* Crosshair ticks */}
      <g stroke={`url(#${id}-gold)`} strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        <line x1="120" y1="22" x2="120" y2="30" />
        <line x1="120" y1="130" x2="120" y2="138" />
        <line x1="62" y1="80" x2="70" y2="80" />
        <line x1="170" y1="80" x2="178" y2="80" />
      </g>

      {/* Pulse line through center */}
      <path
        d="M 70 80 L 90 80 L 100 64 L 112 96 L 122 56 L 134 100 L 144 80 L 170 80"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Center gem */}
      <circle cx="120" cy="80" r="5" fill={`url(#${id}-gold)`} />
      <circle cx="120" cy="80" r="2" fill="#FBF7F1" />

      {/* Floating dots */}
      <circle cx="58" cy="50" r="1.6" fill="#D4AC70" opacity="0.7" />
      <circle cx="186" cy="118" r="2" fill="#D4AC70" opacity="0.6" />
      <circle cx="190" cy="46" r="1.4" fill="#D4AC70" opacity="0.5" />
    </svg>
  );
}

export function NaturalBeautyArt({ className = '' }) {
  const id = 'nb';
  return (
    <svg viewBox="0 0 240 160" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Gradients id={id} />
      <circle cx="120" cy="80" r="70" fill={`url(#${id}-glow)`} />

      {/* Stem */}
      <path
        d="M 120 138 C 120 110, 124 96, 130 80"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Leaf left */}
      <path
        d="M 92 96 C 80 88, 78 76, 92 68 C 104 76, 106 90, 92 96 Z"
        fill={`url(#${id}-blush)`}
        stroke={`url(#${id}-gold)`}
        strokeWidth="1"
        opacity="0.95"
      />
      <path d="M 92 96 C 92 86, 92 76, 92 68" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="0.6" opacity="0.7" />

      {/* Leaf right */}
      <path
        d="M 148 92 C 162 84, 164 72, 150 64 C 138 72, 134 86, 148 92 Z"
        fill={`url(#${id}-blush)`}
        stroke={`url(#${id}-gold)`}
        strokeWidth="1"
        opacity="0.95"
      />
      <path d="M 148 92 C 148 82, 148 72, 150 64" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="0.6" opacity="0.7" />

      {/* Top petal cluster — bloom */}
      <g transform="translate(120 64)">
        {[0, 60, 120, 180, 240, 300].map((d) => (
          <ellipse
            key={d}
            cx="0"
            cy="-14"
            rx="6"
            ry="14"
            fill={`url(#${id}-blush)`}
            stroke={`url(#${id}-gold)`}
            strokeWidth="0.8"
            transform={`rotate(${d})`}
            opacity="0.95"
          />
        ))}
        <circle cx="0" cy="0" r="6" fill={`url(#${id}-gold)`} />
        <circle cx="0" cy="0" r="2.5" fill="#FBF7F1" />
      </g>

      {/* Dew drops */}
      <circle cx="58" cy="118" r="2" fill="#FBEFEB" stroke="#D4AC70" strokeWidth="0.5" />
      <circle cx="184" cy="124" r="2.4" fill="#FBEFEB" stroke="#D4AC70" strokeWidth="0.5" />
      <circle cx="48" cy="48" r="1.4" fill="#D4AC70" opacity="0.6" />
    </svg>
  );
}

export function WholePersonArt({ className = '' }) {
  const id = 'wp';
  return (
    <svg viewBox="0 0 240 160" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Gradients id={id} />
      <circle cx="120" cy="82" r="70" fill={`url(#${id}-glow)`} />

      {/* Outer ripple rings — wellness */}
      <circle cx="120" cy="82" r="58" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="0.7" opacity="0.4" />
      <circle cx="120" cy="82" r="44" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="0.8" opacity="0.55" />

      {/* Lotus base — three layered petals */}
      <g transform="translate(120 96)">
        <path d="M -30 0 C -22 -18, -8 -22, 0 -10 C 8 -22, 22 -18, 30 0 Z" fill={`url(#${id}-blush)`} stroke={`url(#${id}-gold)`} strokeWidth="0.8" />
        <path d="M -22 0 C -14 -14, -4 -16, 0 -8 C 4 -16, 14 -14, 22 0 Z" fill="#FBEFEB" stroke={`url(#${id}-gold)`} strokeWidth="0.7" opacity="0.95" />
        <path d="M -12 0 C -8 -8, -2 -10, 0 -4 C 2 -10, 8 -8, 12 0 Z" fill={`url(#${id}-gold)`} opacity="0.85" />
      </g>

      {/* Meditating figure silhouette — head + shoulders */}
      <g transform="translate(120 70)" fill="none" stroke={`url(#${id}-gold)`} strokeWidth="1.5" strokeLinecap="round">
        {/* head */}
        <circle cx="0" cy="-14" r="7" fill={`url(#${id}-gold)`} stroke="none" />
        {/* shoulders / posture arc */}
        <path d="M -18 6 C -12 -2, 12 -2, 18 6" />
      </g>

      {/* Balanced floating dots — body, mind, soul */}
      <g fill={`url(#${id}-gold)`}>
        <circle cx="58" cy="60" r="2.4" opacity="0.85" />
        <circle cx="184" cy="62" r="2" opacity="0.7" />
        <circle cx="56" cy="120" r="1.8" opacity="0.6" />
        <circle cx="188" cy="118" r="2.2" opacity="0.8" />
      </g>
    </svg>
  );
}

export function ConfidenceArt({ className = '' }) {
  const id = 'cf';
  return (
    <svg viewBox="0 0 240 160" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <Gradients id={id} />
      <circle cx="120" cy="80" r="72" fill={`url(#${id}-glow)`} />

      {/* Radiating rays */}
      <g stroke={`url(#${id}-gold)`} strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((d) => (
          <line
            key={d}
            x1="120"
            y1="32"
            x2="120"
            y2="22"
            transform={`rotate(${d} 120 80)`}
          />
        ))}
      </g>

      {/* Heart */}
      <g transform="translate(120 86)">
        <path
          d="M 0 18 C -22 4, -28 -10, -16 -18 C -8 -22, -2 -18, 0 -10 C 2 -18, 8 -22, 16 -18 C 28 -10, 22 4, 0 18 Z"
          fill={`url(#${id}-blush)`}
          stroke={`url(#${id}-gold)`}
          strokeWidth="1.5"
        />
        {/* inner glow heart */}
        <path
          d="M 0 10 C -12 0, -16 -8, -10 -12 C -6 -14, -2 -12, 0 -8 C 2 -12, 6 -14, 10 -12 C 16 -8, 12 0, 0 10 Z"
          fill={`url(#${id}-gold)`}
          opacity="0.85"
        />
      </g>

      {/* Sparkles */}
      <g fill={`url(#${id}-gold)`}>
        <path d="M 60 50 l 2 -8 l 2 8 l 8 2 l -8 2 l -2 8 l -2 -8 l -8 -2 z" opacity="0.8" />
        <path d="M 180 56 l 1.4 -5 l 1.4 5 l 5 1.4 l -5 1.4 l -1.4 5 l -1.4 -5 l -5 -1.4 z" opacity="0.7" />
        <path d="M 188 110 l 1.8 -6 l 1.8 6 l 6 1.8 l -6 1.8 l -1.8 6 l -1.8 -6 l -6 -1.8 z" opacity="0.7" />
        <path d="M 52 116 l 1.4 -5 l 1.4 5 l 5 1.4 l -5 1.4 l -1.4 5 l -1.4 -5 l -5 -1.4 z" opacity="0.65" />
      </g>
    </svg>
  );
}
