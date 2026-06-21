import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/sections/PageHero.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';
import { galleryItems } from '../data/testimonials.js';

const FILTERS = ['All', 'Skin Care', 'Injectables', 'Acne Care', 'Facial Balancing', 'Wellness'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const items = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Inside the Studio"
        title={
          <>
            Treatment Moments. <span className="italic gold-text">Sacred Rituals.</span>
          </>
        }
        subtitle="A curated look inside My Divine Aesthetics — the calm, considered space where skin, injectables, acne care, facial balancing, and wellness become rituals."
      >
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition backdrop-blur ${
                filter === f
                  ? 'border-transparent bg-gradient-gold text-warmbrown-700 shadow-soft'
                  : 'border-champagne-200/60 bg-white/60 text-warmbrown-600 hover:bg-white/80'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </PageHero>

      <section className="relative pb-16">
        <div className="container-luxe">
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.article
                  key={g.label + i}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: i * 0.03 }}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 backdrop-blur-xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={g.image}
                      alt={`${g.label} — ${g.category}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warmbrown-700/55 via-warmbrown-700/10 to-transparent" />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-warmbrown-700 backdrop-blur">
                        {g.category}
                      </span>
                    </div>
                  </div>

                  <figcaption className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-end justify-between gap-3 rounded-2xl glass-card px-4 py-3">
                      <div className="min-w-0">
                        <p className="font-display text-base leading-tight text-warmbrown-700">
                          {g.label}
                        </p>
                        <p className="mt-1 truncate text-xs leading-snug text-warmbrown-500">
                          {g.caption}
                        </p>
                      </div>
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-warmbrown-700 transition-transform duration-500 group-hover:rotate-45">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </figcaption>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-10 max-w-2xl text-xs text-warmbrown-500">
            Photography on this page is treatment-moment and studio imagery. Real client
            results are reviewed privately during your consultation. Individual outcomes vary
            and a consultation is required to determine the right treatment plan for your goals.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
