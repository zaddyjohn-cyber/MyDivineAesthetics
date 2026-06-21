import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import CssDivineScene from '../3d/CssDivineScene.jsx';

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
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[36px]">
                {/* Soft gradient portrait placeholder with floating 3D orbs */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-champagne-50 to-cream-100" />
                <div className="absolute inset-0">
                  <CssDivineScene className="h-full w-full" />
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="text-center">
                    <div className="mx-auto h-28 w-28 rounded-full bg-gradient-gold opacity-80 blur-2xl" />
                    <p className="mt-4 font-display text-3xl text-warmbrown-700">Imani</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.3em] text-champagne-500">
                      Founder · Nurse Practitioner
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/40" />
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
