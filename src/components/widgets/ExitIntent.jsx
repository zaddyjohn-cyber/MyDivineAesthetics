import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Check } from 'lucide-react';
import { useBooking } from '../booking/BookingModal.jsx';

const SHOWN_KEY = 'mda_exit_shown_v1';
const DELAY_MS = 8000;

export default function ExitIntent() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [saved, setSaved] = useState(false);
  const armed = useRef(false);
  const { open: openBooking } = useBooking();

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!desktop) return;

    let arm = false;
    try {
      if (sessionStorage.getItem(SHOWN_KEY)) return;
    } catch {}

    // Arm after a delay so we don't pop on first paint
    const armTimer = window.setTimeout(() => {
      arm = true;
      armed.current = true;
    }, DELAY_MS);

    const onMouseOut = (e) => {
      if (!arm) return;
      // True exit-intent: mouse moves above the top of the viewport
      if (e.clientY <= 0 && (!e.relatedTarget && !e.toElement)) {
        setOpen(true);
        try {
          sessionStorage.setItem(SHOWN_KEY, '1');
        } catch {}
        document.removeEventListener('mouseout', onMouseOut);
      }
    };

    document.addEventListener('mouseout', onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const claim = (e) => {
    e.preventDefault();
    try {
      const list = JSON.parse(localStorage.getItem('mda_emails') || '[]');
      list.push({ email, at: new Date().toISOString(), source: 'exit-intent', code: 'GLOW10' });
      localStorage.setItem('mda_emails', JSON.stringify(list));
    } catch {}
    setSaved(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-warmbrown-700/60 p-4 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-br from-cream-50 via-blush-50 to-champagne-50 shadow-halo"
          >
            <div className="halo-glow -left-20 -top-20 h-72 w-72 bg-rose-200/55" />
            <div className="halo-glow -right-20 -bottom-20 h-72 w-72 bg-champagne-200/55" />

            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-warmbrown-500/20 bg-white/70 text-warmbrown-600 transition hover:bg-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative px-8 py-10 sm:px-12 sm:py-14 text-center">
              <span className="section-eyebrow">
                <span className="h-1 w-1 rounded-full bg-champagne-400" />
                Before You Go
              </span>
              <h2 className="heading-md mt-5">
                Stay in the <span className="italic gold-text">Glow.</span>
              </h2>

              {!saved ? (
                <>
                  <p className="lead mx-auto mt-4 max-w-md">
                    Get <strong>10% off your first treatment</strong> when you join
                    our list. Skin tips, behind-the-scenes, and divine offers — never
                    spam.
                  </p>
                  <form
                    onSubmit={claim}
                    className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full border border-champagne-200/60 bg-white/90 p-1.5"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="w-full bg-transparent px-4 py-2.5 text-sm text-warmbrown-700 placeholder:text-warmbrown-400 focus:outline-none"
                    />
                    <button type="submit" className="btn-gold !px-5 !py-2.5 text-xs">
                      <Sparkles className="h-3.5 w-3.5" /> Claim 10% Off
                    </button>
                  </form>
                  <p className="mt-3 text-[11px] text-warmbrown-500">
                    No thanks?{' '}
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="underline underline-offset-2"
                    >
                      Maybe later.
                    </button>
                  </p>
                </>
              ) : (
                <>
                  <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-warmbrown-700 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cream-50">
                    <Check className="h-4 w-4 text-champagne-200" />
                    CODE: GLOW10
                  </div>
                  <p className="mx-auto mt-4 max-w-md text-sm text-warmbrown-600">
                    Use <strong>GLOW10</strong> when you book your first treatment.
                    We&apos;ve emailed it to you too.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      openBooking();
                    }}
                    className="btn-gold mt-6"
                  >
                    <Sparkles className="h-4 w-4" /> Book Now &amp; Use It
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
