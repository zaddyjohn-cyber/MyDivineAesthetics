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
        eyebrow="Gallery"
        title={
          <>
            Real Results, <span className="italic gold-text">Divine Confidence</span>
          </>
        }
        subtitle="A curated look at client journeys across skin, injectables, acne, facial balancing, and wellness. Subtle work. Honest results."
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
                  className="group relative overflow-hidden rounded-3xl border border-white/60"
                >
                  <div className={`aspect-[4/5] w-full bg-gradient-to-br ${g.tone}`}>
                    <div className="grid h-full grid-cols-2">
                      <div className="relative flex items-end justify-start p-4">
                        <span className="rounded-full bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-warmbrown-600 backdrop-blur">
                          Before
                        </span>
                      </div>
                      <div className="relative flex items-end justify-end border-l border-white/40 bg-white/15 p-4 backdrop-blur-sm">
                        <span className="rounded-full bg-gradient-gold px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-warmbrown-700">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="flex items-center justify-between rounded-2xl glass-card px-4 py-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-champagne-500">
                          {g.category}
                        </p>
                        <p className="font-display text-base text-warmbrown-700">{g.label}</p>
                      </div>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-warmbrown-700 transition-transform duration-500 group-hover:rotate-45">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="mt-10 max-w-2xl text-xs text-warmbrown-400">
            Individual results may vary. A consultation is required to determine the best
            treatment plan for your goals. Photos are placeholders for client privacy and will
            be updated as clients provide releases.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
