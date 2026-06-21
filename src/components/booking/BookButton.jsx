import { Sparkles } from 'lucide-react';
import { useBooking } from './BookingModal.jsx';

/**
 * Drop-in Book button that opens the booking modal.
 * - preset: optional service name pre-filled on the booking page (e.g. "Botox").
 * - variant: "gold" (default) | "ghost"
 */
export default function BookButton({
  preset,
  children = 'Book Now',
  variant = 'gold',
  showIcon = true,
  className = '',
}) {
  const { open } = useBooking();
  const base = variant === 'ghost' ? 'btn-ghost' : 'btn-gold';
  return (
    <button type="button" onClick={() => open(preset)} className={`${base} ${className}`}>
      {showIcon && <Sparkles className="h-4 w-4" />}
      {children}
    </button>
  );
}
