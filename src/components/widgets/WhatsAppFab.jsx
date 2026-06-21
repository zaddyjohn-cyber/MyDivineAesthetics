import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappLink, BRAND } from '../../data/contact.js';

function WhatsAppIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.001 4C9.374 4 4 9.373 4 16c0 2.122.555 4.21 1.608 6.045L4 28l6.13-1.59A11.95 11.95 0 0 0 16 28c6.627 0 12-5.373 12-12S22.628 4 16.001 4Zm0 21.818a9.79 9.79 0 0 1-4.99-1.366l-.358-.213-3.638.944.97-3.547-.234-.366A9.78 9.78 0 0 1 6.182 16c0-5.413 4.405-9.818 9.819-9.818 5.413 0 9.818 4.405 9.818 9.818 0 5.413-4.405 9.818-9.818 9.818Zm5.396-7.353c-.296-.149-1.75-.864-2.022-.962-.272-.099-.47-.149-.667.149-.198.297-.766.961-.939 1.16-.173.198-.346.223-.643.074-.297-.148-1.252-.461-2.385-1.47-.881-.787-1.476-1.76-1.65-2.058-.173-.297-.018-.458.13-.606.133-.133.297-.346.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.074-.148-.667-1.611-.913-2.205-.241-.581-.486-.502-.667-.51l-.569-.011a1.09 1.09 0 0 0-.79.371c-.272.297-1.04 1.016-1.04 2.477 0 1.462 1.064 2.873 1.213 3.071.149.198 2.095 3.2 5.078 4.488.71.306 1.265.488 1.697.625.713.227 1.362.195 1.875.118.572-.085 1.75-.715 1.998-1.405.248-.69.248-1.282.173-1.405-.074-.124-.272-.198-.569-.346Z" />
    </svg>
  );
}

export default function WhatsAppFab() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 800);
    return () => window.clearTimeout(t);
  }, []);

  const send = (message) => {
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 w-[300px] overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-halo backdrop-blur-xl sm:w-[320px]"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-br from-warmbrown-700 via-warmbrown-600 to-warmbrown-500 px-5 py-4 text-cream-50">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white shadow-soft">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-base leading-tight">{BRAND}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-champagne-100">
                    Usually replies within an hour
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-2 p-4">
              <p className="px-1 text-xs leading-relaxed text-warmbrown-600">
                Hi beautiful soul — tap a quick start, or send your own message.
              </p>

              {[
                "Hi My Divine Aesthetics — I'd love to book a consultation.",
                "Hi! I have a question about Botox or Facial Balancing.",
                "Hi! I'd like to learn about your IV hydration drips.",
                "Hi! I'd like to start a personalized acne program.",
              ].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => send(m)}
                  className="group flex w-full items-start gap-3 rounded-2xl border border-champagne-200/60 bg-cream-50/70 px-3 py-2.5 text-left text-xs text-warmbrown-700 transition hover:bg-gradient-blush-gold/60"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#128C7E]">
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">{m}</span>
                </button>
              ))}

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-[#1ebe5d]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Open WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        type="button"
        aria-label={open ? 'Close WhatsApp chat' : 'Chat on WhatsApp'}
        onClick={() => setOpen((o) => !o)}
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-halo focus:outline-none focus:ring-4 focus:ring-champagne-200"
      >
        {/* Pulse rings */}
        {!open && (
          <>
            <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
            <span className="pointer-events-none absolute -inset-2 rounded-full bg-champagne-200/60 blur-xl" />
          </>
        )}
        <WhatsAppIcon className={`relative h-7 w-7 transition-transform ${open ? 'rotate-90' : ''}`} />
      </motion.button>
    </div>
  );
}
