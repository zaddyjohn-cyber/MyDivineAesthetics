import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { useBooking } from '../booking/BookingModal.jsx';
import { whatsappLink } from '../../data/contact.js';

export default function MobileBookBar() {
  const [show, setShow] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-40 sm:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/90 p-1.5 shadow-halo backdrop-blur-xl">
            <a
              href="tel:+16179430892"
              aria-label="Call"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cream-100 text-warmbrown-700"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366]/15 text-[#128C7E]"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => open()}
              className="btn-gold ml-auto h-11 flex-1 !py-0 text-sm"
            >
              <Sparkles className="h-4 w-4" />
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
