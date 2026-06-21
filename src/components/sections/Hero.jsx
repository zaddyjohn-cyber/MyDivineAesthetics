import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Leaf, HeartHandshake, Stethoscope } from 'lucide-react';
import DivineScene from '../3d/DivineScene.jsx';

const badges = [
  { icon: Stethoscope, label: 'Nurse Practitioner-Led Care' },
  { icon: Leaf, label: 'Natural-Looking Results' },
  { icon: HeartHandshake, label: 'Personalized Treatments' },
  { icon: Shield, label: 'Wellness Meets Aesthetics' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="halo-glow -left-32 top-20 h-96 w-96 bg-champagne-100/60" />
      <div className="halo-glow -right-20 top-40 h-80 w-80 bg-blush-100/70" />
      <div className="halo-glow left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 bg-champagne-100/60" />

      <div className="container-luxe">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow"
            >
              <span className="h-1 w-1 rounded-full bg-champagne-400" />
              Sacred Self-Care
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl mt-6"
            >
              Where Beauty <span className="italic gold-text">Feels Divine</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="lead mt-6 max-w-xl"
            >
              Experience sacred self-care through medical aesthetics, skin treatments, IV hydration,
              acne care, and wellness services designed to enhance your natural beauty with
              confidence and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="btn-gold">
                <Sparkles className="h-4 w-4" /> Book Your Appointment
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4"
            >
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.label}
                    className="flex items-start gap-2 rounded-2xl border border-white/60 bg-white/55 p-3 text-[12px] text-warmbrown-600 backdrop-blur"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-blush-gold text-warmbrown-700">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="leading-snug">{b.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 font-display text-xl italic text-warmbrown-500"
            >
              Enhance. Restore. Glow.
            </motion.p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <DivineScene />

              {/* Video orb infused inside the divine globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                <div className="relative h-[210px] w-[210px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px]">
                  {/* Outer gold halo glow */}
                  <div className="absolute -inset-6 rounded-full bg-gradient-gold opacity-50 blur-2xl animate-glow" />
                  {/* Gold ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-90" />
                  {/* Cream gap */}
                  <div className="absolute inset-[3px] rounded-full bg-cream-50/40 backdrop-blur-sm" />
                  {/* Video well — circular mask */}
                  <div className="absolute inset-[8px] overflow-hidden rounded-full ring-1 ring-inset ring-white/40 shadow-halo">
                    <video
                      src={`${import.meta.env.BASE_URL}divine-hero.mp4`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                    {/* Soft inner vignette so the video blends with the divine palette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-warmbrown-700/40 via-transparent to-cream-50/10" />

                    {/* Blinking brand overlay — covers any original watermark */}
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 bg-gradient-to-t from-warmbrown-700/95 via-warmbrown-700/70 to-transparent px-3 pb-4 pt-6 text-center">
                      <p className="animate-brand-blink font-display text-[15px] leading-tight text-cream-50 sm:text-[17px]">
                        My Divine <span className="italic gold-text">Aesthetics</span>
                      </p>
                      <p className="animate-brand-blink text-[8px] uppercase tracking-[0.32em] text-champagne-100 sm:text-[9px]">
                        Sacred · Self · Care
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating appointment card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute left-4 bottom-6 z-10 hidden w-56 rounded-2xl glass-card p-4 sm:block"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-champagne-500">
                  Next available
                </p>
                <p className="mt-1 font-display text-lg text-warmbrown-700">
                  Divine Glow Facial
                </p>
                <p className="mt-1 text-xs text-warmbrown-500">Thursday · 11:30 AM</p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-warmbrown-700"
                >
                  Book session <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>

              {/* Floating trust pill */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="absolute right-2 top-10 z-10 hidden items-center gap-2 rounded-full glass-card px-4 py-2 text-xs text-warmbrown-700 sm:flex"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-gold">
                  <Sparkles className="h-3 w-3 text-white" />
                </span>
                DNP, FNP-C, PMHNP-BC
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
