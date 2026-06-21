import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Calendar, Heart, Shield, Play } from 'lucide-react';

const highlights = [
  {
    icon: Calendar,
    title: 'Same-week availability',
    body: 'Book your divine ritual at a time that flows with your life.',
  },
  {
    icon: Heart,
    title: 'Personalized to you',
    body: 'Every plan is custom-built around your goals and your skin.',
  },
  {
    icon: Shield,
    title: 'Nurse practitioner-led',
    body: 'Medical precision, evidence-based care, every appointment.',
  },
];

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-warmbrown-700/40 bg-gradient-to-br from-warmbrown-700 via-warmbrown-600 to-warmbrown-500 p-8 shadow-halo sm:p-12 lg:p-14"
        >
          {/* Soft glowing accents */}
          <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-champagne-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-rose-300/35 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-200/20 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.85fr_1fr] lg:gap-12">
            {/* Left: copy + buttons */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-champagne-100/40 bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne-50 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Begin Your Divine Ritual
              </span>

              <h2 className="mt-6 font-display text-4xl leading-tight text-cream-50 sm:text-5xl">
                Ready to <span className="italic gold-text">Feel Divine?</span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-relaxed text-cream-50/95">
                Book your appointment today and experience a thoughtful, luxury approach to
                beauty, wellness, and confidence.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-gold">
                  <Sparkles className="h-4 w-4" /> Book Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-champagne-100/50 bg-white/15 px-7 py-3.5 text-sm font-semibold text-cream-50 backdrop-blur-md transition hover:bg-white/25"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Center: ritual video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none"
            >
              {/* Gold halo glow behind video */}
              <div className="pointer-events-none absolute -inset-3 rounded-[36px] bg-gradient-gold opacity-40 blur-2xl" />

              {/* Frame */}
              <div className="relative overflow-hidden rounded-[28px] border border-champagne-100/30 bg-warmbrown-700/40 shadow-halo">
                <div className="relative aspect-[9/16]">
                  <video
                    src={`${import.meta.env.BASE_URL}divine-ritual.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Subtle vignette so the video blends into the card */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warmbrown-700/40 via-transparent to-warmbrown-700/20" />

                  {/* Floating play hint pill */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full border border-champagne-100/40 bg-warmbrown-700/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cream-50 backdrop-blur">
                    <Play className="h-2.5 w-2.5 fill-cream-50" />
                    A Divine Ritual
                  </div>
                </div>
              </div>

              {/* Floating caption pill */}
              <div className="absolute -bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-champagne-100/40 bg-warmbrown-700/70 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-cream-50 backdrop-blur lg:inline-flex">
                <Sparkles className="h-3 w-3 text-champagne-200" />
                Relax · Restore · Glow
              </div>
            </motion.div>

            {/* Right: glass highlight cards */}
            <div className="relative space-y-3">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-4 rounded-2xl border border-champagne-100/30 bg-white/12 p-4 backdrop-blur-xl sm:p-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-warmbrown-700 shadow-soft">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-display text-lg text-cream-50">{h.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-cream-50/85">{h.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
