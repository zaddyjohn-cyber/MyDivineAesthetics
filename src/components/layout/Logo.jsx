import { Link } from 'react-router-dom';

export default function Logo({ size = 'md' }) {
  const sizes = {
    sm: { ring: 'h-8 w-8', text: 'text-base' },
    md: { ring: 'h-10 w-10', text: 'text-lg' },
    lg: { ring: 'h-12 w-12', text: 'text-xl' },
  }[size];

  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className={`relative ${sizes.ring}`}>
        <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-90 blur-[1px]" />
        <div className="absolute inset-[3px] rounded-full bg-cream-50" />
        <div className="absolute inset-[6px] rounded-full bg-gradient-gold" />
        <div className="absolute inset-[10px] rounded-full bg-cream-50" />
        <div className="absolute inset-0 rounded-full ring-1 ring-champagne-300/40" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-display ${sizes.text} tracking-tight text-warmbrown-700`}>
          My Divine
        </span>
        <span className="text-[10px] uppercase tracking-[0.32em] text-champagne-500">
          Aesthetics
        </span>
      </div>
    </Link>
  );
}
