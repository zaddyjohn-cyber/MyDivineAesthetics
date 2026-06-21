import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import PageHero from '../components/sections/PageHero.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';
import { blogPosts } from '../data/testimonials.js';

const CATEGORIES = ['All', 'Skin Care', 'Injectables', 'Acne Care', 'IV Hydration', 'Philosophy'];

export default function Blog() {
  const [cat, setCat] = useState('All');
  const posts = useMemo(
    () => (cat === 'All' ? blogPosts : blogPosts.filter((p) => p.category === cat)),
    [cat]
  );

  const featured = blogPosts[0];

  return (
    <>
      <PageHero
        eyebrow="Education"
        title={
          <>
            Aesthetic Wisdom for a <span className="italic gold-text">Radiant Life</span>
          </>
        }
        subtitle="Honest, nurse practitioner-written guides on injectables, skin care, acne treatment, IV hydration, and the philosophy behind natural-looking results."
      >
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition backdrop-blur ${
                cat === c
                  ? 'border-transparent bg-gradient-gold text-warmbrown-700 shadow-soft'
                  : 'border-champagne-200/60 bg-white/60 text-warmbrown-600 hover:bg-white/80'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </PageHero>

      {/* Featured */}
      <section className="relative pb-8">
        <div className="container-luxe">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[32px] border border-white/60 bg-white/65 backdrop-blur-xl"
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr]">
              <div className="relative aspect-[16/10] bg-gradient-to-br from-blush-100 via-champagne-50 to-cream-100 lg:aspect-auto">
                <div className="halo-glow left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-champagne-100/80" />
                <span className="absolute left-5 top-5 rounded-full bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-warmbrown-600 backdrop-blur">
                  Featured · {featured.category}
                </span>
              </div>
              <div className="p-8 sm:p-12">
                <h2 className="font-display text-3xl leading-tight text-warmbrown-700 sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-warmbrown-500">
                  {featured.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-xs text-warmbrown-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {featured.readTime}
                  </span>
                  <span>By Imani Bryan, DNP</span>
                </div>
                <button type="button" className="btn-gold mt-7">
                  Read Article <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Grid */}
      <section className="relative pb-16">
        <div className="container-luxe">
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 p-6 backdrop-blur-xl"
              >
                <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-cream-100 via-blush-50 to-champagne-50">
                  <div className="halo-glow left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 bg-champagne-100/70" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
                  <span className="rounded-full bg-gradient-blush-gold px-3 py-1 text-warmbrown-700">
                    {p.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-champagne-500">
                    <Clock className="h-3 w-3" /> {p.readTime}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-warmbrown-700">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown-500">{p.excerpt}</p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-warmbrown-700"
                >
                  Read More
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
