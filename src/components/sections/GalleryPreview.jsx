import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { galleryItems } from '../../data/testimonials.js';

export default function GalleryPreview() {
  const items = galleryItems.slice(0, 6);
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Results"
          title={
            <>
              Real Results. <span className="italic gold-text">Natural Confidence.</span>
            </>
          }
          subtitle="A glimpse at real client transformations across skin care, injectables, acne, and wellness — refined and never overdone."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <motion.div
              key={g.label + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
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
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="max-w-xl text-xs text-warmbrown-400">
            Individual results may vary. A consultation is required to determine the best
            treatment plan for your goals.
          </p>
          <Link to="/gallery" className="btn-ghost">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
