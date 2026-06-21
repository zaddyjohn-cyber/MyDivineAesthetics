import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-white/40 p-10 text-center sm:p-16"
        >
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-warmbrown-700 via-warmbrown-600 to-warmbrown-500" />
          <div className="halo-glow left-1/2 top-0 h-96 w-96 -translate-x-1/2 bg-champagne-300/40" />
          <div className="halo-glow -left-10 bottom-0 h-72 w-72 bg-blush-200/30" />
          <div className="halo-glow -right-10 bottom-0 h-72 w-72 bg-champagne-200/30" />

          <span className="inline-flex items-center gap-2 rounded-full border border-champagne-200/30 bg-white/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-champagne-100 backdrop-blur-sm">
            <Sparkles className="h-3 w-3" />
            Begin Your Divine Ritual
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight text-cream-50 sm:text-5xl lg:text-6xl">
            Ready to <span className="italic gold-text">Feel Divine?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-cream-100/85">
            Book your appointment today and experience a thoughtful, luxury approach to beauty,
            wellness, and confidence.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-gold">
              <Sparkles className="h-4 w-4" /> Book Now
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-champagne-100/30 bg-white/10 px-7 py-3.5 text-sm font-medium text-cream-50 backdrop-blur-md transition hover:bg-white/15"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
