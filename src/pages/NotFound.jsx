import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Home, MessageCircle } from 'lucide-react';
import BookButton from '../components/booking/BookButton.jsx';
import { whatsappLink } from '../data/contact.js';

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="halo-glow -left-32 top-20 h-96 w-96 bg-champagne-100/60" />
      <div className="halo-glow -right-20 top-40 h-80 w-80 bg-rose-200/55" />
      <div className="halo-glow left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 bg-rose-100/55" />

      <div className="container-luxe text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          <span className="h-1 w-1 rounded-full bg-champagne-400" />
          Lost in the glow
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="heading-xl mx-auto mt-6 max-w-3xl"
        >
          This page took a <span className="italic gold-text">restful day off.</span>
        </motion.h1>

        <p className="lead mx-auto mt-5 max-w-xl">
          The link you followed doesn&apos;t exist — or it&apos;s on its own little
          retreat. Let&apos;s get you back to something restorative.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <BookButton>Book Your Ritual</BookButton>
          <Link to="/" className="btn-ghost">
            <Home className="h-4 w-4" /> Back home
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D366]/20"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>

        <p className="mt-14 font-display text-2xl italic text-warmbrown-500">
          Enhance. Restore. Glow.
        </p>
      </div>
    </section>
  );
}
