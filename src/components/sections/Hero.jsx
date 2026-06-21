import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Leaf, HeartHandshake, Stethoscope } from 'lucide-react';
import BookButton from '../booking/BookButton.jsx';
import CssDivineScene from '../3d/CssDivineScene.jsx';

function VideoOrb({ size }) {
  // mobile orb gets bigger relative to viewport; desktop orb keeps the original sizes
  const dim =
    size === 'mobile'
      ? 'h-[360px] w-[360px]'
      : 'h-[440px] w-[440px] lg:h-[540px] lg:w-[540px]';
  const brandText =
    size === 'mobile'
      ? 'text-[26px]'
      : 'text-[30px] lg:text-[36px]';
  const captionText =
    size === 'mobile' ? 'text-[11px]' : 'text-[12px] lg:text-[13px]';

  return (
    <div className={`relative ${dim}`}>
      {/* Outer gold halo glow */}
      <div className="absolute -inset-8 rounded-full bg-gradient-gold opacity-50 blur-3xl animate-glow" />
      {/* Gold ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-gold opacity-90" />
      {/* Cream gap */}
      <div className="absolute inset-[4px] rounded-full bg-cream-50/40 backdrop-blur-sm" />
      {/* Video well — circular mask */}
      <div className="absolute inset-[11px] overflow-hidden rounded-full ring-1 ring-inset ring-white/40 shadow-halo">
        <video
          src={`${import.meta.env.BASE_URL}divine-hero.mp4`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover scale-[1.35] origin-center"
        />
        {/* Side masks to hide any source watermark */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-warmbrown-700/75 via-warmbrown-700/35 to-transparent backdrop-blur-[2px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-warmbrown-700/55 via-warmbrown-700/25 to-transparent backdrop-blur-[2px]" />
        {/* Soft inner vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warmbrown-700/40 via-transparent to-cream-50/10" />
        {/* Blinking brand overlay */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1.5 bg-gradient-to-t from-warmbrown-700/95 via-warmbrown-700/70 to-transparent px-4 pb-6 pt-10 text-center sm:gap-2 sm:pb-8 sm:pt-14">
          <p className={`animate-brand-blink font-display ${brandText} leading-tight text-cream-50`}>
            My Divine <span className="italic gold-text">Aesthetics</span>
          </p>
          <p className={`animate-brand-blink ${captionText} uppercase tracking-[0.32em] text-champagne-100`}>
            Sacred · Self · Care
          </p>
        </div>
      </div>
    </div>
  );
}

const badges = [
  { icon: Stethoscope, label: 'Nurse Practitioner-Led Care' },
  { icon: Leaf, label: 'Natural-Looking Results' },
  { icon: HeartHandshake, label: 'Personalized Treatments' },
  { icon: Shield, label: 'Wellness Meets Aesthetics' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 sm:pb-12">
      <div className="halo-glow -left-32 top-20 h-96 w-96 bg-champagne-100/60" />
      <div className="halo-glow -right-20 top-40 h-80 w-80 bg-rose-200/55" />
      <div className="halo-glow left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 bg-rose-100/60" />

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
              <BookButton>Book Your Appointment</BookButton>
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
              {/* Animated CSS orbit — compact on mobile, full on sm+ */}
              <div className="relative h-[220px] sm:h-[600px] lg:h-[680px]">
                <CssDivineScene />

                {/* Video orb — overlaid on the orbit at sm+ only */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-[5] hidden -translate-x-1/2 -translate-y-1/2 sm:block"
                  aria-hidden="true"
                >
                  <VideoOrb size="desktop" />
                </motion.div>
              </div>

              {/* Video orb — stacked under the orbit on mobile only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto -mt-4 flex justify-center sm:hidden"
                aria-hidden="true"
              >
                <VideoOrb size="mobile" />
              </motion.div>

              {/* Floating trust pill — top right of the column */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7 }}
                className="absolute right-2 top-2 z-10 flex items-center gap-1.5 rounded-full glass-card px-3 py-1.5 text-[10px] text-warmbrown-700 sm:top-10 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-gold sm:h-6 sm:w-6">
                  <Sparkles className="h-2.5 w-2.5 text-white sm:h-3 sm:w-3" />
                </span>
                <span className="hidden sm:inline">DNP, FNP-C, PMHNP-BC</span>
                <span className="sm:hidden">Nurse Practitioner</span>
              </motion.div>

              {/* Floating appointment card — bottom left of the column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="absolute left-2 bottom-2 z-10 w-40 rounded-2xl glass-card p-3 sm:left-4 sm:bottom-6 sm:w-56 sm:p-4"
              >
                <p className="text-[9px] uppercase tracking-[0.22em] text-champagne-500 sm:text-[10px]">
                  Next available
                </p>
                <p className="mt-1 font-display text-base text-warmbrown-700 sm:text-lg">
                  Divine Glow Facial
                </p>
                <p className="mt-1 text-[11px] text-warmbrown-500 sm:text-xs">Thursday · 11:30 AM</p>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-warmbrown-700 sm:mt-3 sm:text-xs"
                >
                  Book session <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
