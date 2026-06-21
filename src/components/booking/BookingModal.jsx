import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ExternalLink } from 'lucide-react';

// === CONFIGURATION ===
// Replace this with the real Calendly link once she has one,
// or swap for Vagaro / Square / Acuity / Boulevard URL.
// All Book Now buttons across the site flow through this single value.
export const BOOKING_URL = 'https://calendly.com/mydivineaesthetics/consultation';

const Ctx = createContext({ open: () => {}, close: () => {} });

export function BookingProvider({ children }) {
  const [openWith, setOpenWith] = useState(null);

  const open = useCallback((preset = null) => setOpenWith(preset || 'general'), []);
  const close = useCallback(() => setOpenWith(null), []);

  useEffect(() => {
    if (!openWith) return;
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openWith, close]);

  // Build the booking URL with optional service prefill in the query string
  const urlFor = (preset) => {
    if (!preset || preset === 'general') return BOOKING_URL;
    const sep = BOOKING_URL.includes('?') ? '&' : '?';
    return `${BOOKING_URL}${sep}a1=${encodeURIComponent(preset)}`;
  };

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {openWith && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-warmbrown-700/60 p-4 backdrop-blur-md"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/60 bg-cream-50 shadow-halo"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-br from-warmbrown-700 via-warmbrown-600 to-warmbrown-500 px-6 py-5 text-cream-50">
                <div className="halo-glow -right-10 -top-10 h-40 w-40 bg-champagne-300/30" />
                <div className="halo-glow -left-10 -bottom-10 h-32 w-32 bg-rose-300/30" />
                <div className="relative flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center gap-2 rounded-full border border-champagne-100/40 bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-champagne-50 backdrop-blur-sm">
                      <Sparkles className="h-3 w-3" /> Book Your Ritual
                    </span>
                    <h2 className="mt-3 font-display text-2xl text-cream-50 sm:text-3xl">
                      Choose a time that flows with your life
                    </h2>
                    {openWith && openWith !== 'general' && (
                      <p className="mt-1 text-sm text-cream-50/85">
                        Pre-filled for <span className="italic gold-text">{openWith}</span>
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    aria-label="Close"
                    onClick={close}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-champagne-100/30 bg-white/10 text-cream-50 transition hover:bg-white/20"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Embed */}
              <div className="relative bg-cream-50">
                <iframe
                  title="Book an appointment"
                  src={urlFor(openWith)}
                  className="block h-[600px] w-full sm:h-[680px]"
                  style={{ border: 0 }}
                />
              </div>

              {/* Footer */}
              <div className="flex flex-col items-start justify-between gap-3 border-t border-champagne-200/50 bg-cream-100/50 px-6 py-4 text-xs text-warmbrown-600 sm:flex-row sm:items-center">
                <p>
                  Prefer to chat first?{' '}
                  <a
                    href="https://wa.me/16179430892"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-warmbrown-700 underline underline-offset-2"
                  >
                    Message us on WhatsApp
                  </a>{' '}
                  or call{' '}
                  <a href="tel:+16179430892" className="font-medium text-warmbrown-700 underline underline-offset-2">
                    (617) 943-0892
                  </a>.
                </p>
                <a
                  href={urlFor(openWith)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-warmbrown-700 transition hover:text-warmbrown-500"
                >
                  Open in new tab <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Ctx.Provider>
  );
}

export function useBooking() {
  return useContext(Ctx);
}
