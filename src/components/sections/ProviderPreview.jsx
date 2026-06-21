import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';

export default function ProviderPreview() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-gradient-to-br from-cream-50/90 via-blush-50/70 to-champagne-50/90 p-8 shadow-soft backdrop-blur-xl sm:p-14">
          <div className="halo-glow -left-20 -top-20 h-72 w-72 bg-champagne-100/80" />
          <div className="halo-glow -right-20 -bottom-20 h-80 w-80 bg-blush-100/70" />

          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative z-10">
              <span className="section-eyebrow">
                <span className="h-1 w-1 rounded-full bg-champagne-400" />
                Meet the Provider
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="heading-lg mt-5"
              >
                Imani Bryan, <span className="italic gold-text">DNP, FNP-C, PMHNP-BC</span>
              </motion.h2>
              <p className="lead mt-5 max-w-xl">
                Led by Imani Bryan, a compassionate Nurse Practitioner with nearly a decade of
                nursing experience, My Divine Aesthetics brings together clinical knowledge,
                emotional intelligence, and artistic precision.
              </p>

              <div className="mt-7 flex items-start gap-4 rounded-3xl border border-champagne-200/60 bg-white/70 p-6 backdrop-blur">
                <Quote className="h-6 w-6 shrink-0 text-champagne-400" />
                <p className="font-display text-xl italic leading-snug text-warmbrown-600">
                  Aesthetic medicine isn’t about changing who you are — it’s about helping you see
                  what was divine all along.
                </p>
              </div>

              <Link to="/about" className="btn-gold mt-8">
                Meet Imani <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative">
              {/* Soft gold halo behind the portrait */}
              <div className="pointer-events-none absolute inset-0 -m-6 rounded-[44px] bg-gradient-rose-gold opacity-40 blur-2xl" />

              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[36px] shadow-halo">
                {/* Brand-tone backdrop in case the image is still loading */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-champagne-50 to-cream-100" />

                {/* Real portrait */}
                <img
                  src={`${import.meta.env.BASE_URL}imani.jpg`}
                  alt="Imani Bryan, DNP, FNP-C, PMHNP-BC — founder of My Divine Aesthetics"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  style={{ filter: 'saturate(1.05) contrast(1.02)' }}
                />

                {/* Soft warm tint to unify with the brand palette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne-100/15 via-transparent to-blush-100/20 mix-blend-multiply" />

                {/* Vignette so the background fades into the brand mood */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(58,39,25,0.25)_100%)]" />

                {/* Bottom caption gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-warmbrown-700/65 via-warmbrown-700/15 to-transparent" />

                {/* Founder caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 text-center sm:p-6">
                  <p className="font-display text-3xl text-cream-50 drop-shadow">Imani Bryan</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-champagne-100">
                    Founder · Nurse Practitioner
                  </p>
                </div>

                {/* Gold inner ring frame */}
                <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-inset ring-white/40" />
                <div className="pointer-events-none absolute inset-[3px] rounded-[33px] ring-1 ring-inset ring-champagne-300/40" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute -left-2 bottom-3 rounded-2xl glass-card p-3 sm:-left-4 sm:bottom-6 sm:p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-champagne-500">
                  Nearly
                </p>
                <p className="mt-1 font-display text-2xl text-warmbrown-700">10 years</p>
                <p className="mt-1 text-xs text-warmbrown-500">of nursing experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
