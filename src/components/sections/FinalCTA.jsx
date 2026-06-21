import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Calendar, Heart, Shield } from 'lucide-react';
import FloatingOrbs from '../3d/FloatingOrbs.jsx';

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
    <section className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-warmbrown-700/40 bg-gradient-to-br from-warmbrown-700 via-warmbrown-600 to-warmbrown-500 p-8 shadow-halo sm:p-14"
        >
          {/* Soft glowing accents */}
          <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-champagne-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-blush-200/25 blur-3xl" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne-200/15 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            {/* Left: copy + buttons */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-champagne-100/40 bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-champagne-50 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Begin Your Divine Ritual
              </span>

              <h2 className="mt-6 font-display text-4xl leading-tight text-cream-50 sm:text-5xl lg:text-[3.5rem]">
                Ready to <span className="italic gold-text">Feel Divine?</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-50/95 sm:text-lg">
                Book your appointment today and experience a thoughtful, luxury approach to
                beauty, wellness, and confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
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

            {/* Right: glass highlight cards over floating orbs */}
            <div className="relative min-h-[340px]">
              <div className="absolute inset-0">
                <FloatingOrbs className="h-full w-full" />
              </div>

              <div className="relative space-y-3">
                {highlights.map((h, i) => {
                  const Icon = h.icon;
                  return (
                    <motion.div
                      key={h.title}
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
