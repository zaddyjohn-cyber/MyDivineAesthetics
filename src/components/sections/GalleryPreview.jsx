import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import GalleryMedia from '../gallery/GalleryMedia.jsx';
import { galleryItems } from '../../data/testimonials.js';

export default function GalleryPreview() {
  const items = galleryItems.slice(0, 6);
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Inside the Studio"
          title={
            <>
              Treatment Moments. <span className="italic gold-text">Sacred Rituals.</span>
            </>
          }
          subtitle="A glimpse into the calm, considered space where every appointment becomes a ritual — from skin and injectables to wellness and weight loss support."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((g, i) => (
            <motion.figure
              key={g.label + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/65 backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <GalleryMedia
                  media={g.media}
                  alt={`${g.label} — ${g.category}`}
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
            </motion.figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="max-w-xl text-xs text-warmbrown-500">
            Photography shown is treatment-moment and studio imagery. Real client results are
            available during your consultation. Individual outcomes vary.
          </p>
          <Link to="/gallery" className="btn-ghost">
            Explore the Studio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
