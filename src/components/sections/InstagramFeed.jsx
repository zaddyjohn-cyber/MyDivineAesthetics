import { motion } from 'framer-motion';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const IG_HANDLE = 'mydivineaesthetics';
const IG_URL = `https://instagram.com/${IG_HANDLE}`;

/**
 * Live Instagram grid. We render a curated set of square tiles drawn
 * from the brand's existing imagery so the section never blinks empty.
 * When the Meta Graph API token is wired (env: VITE_IG_TOKEN), the
 * widget can be swapped for live posts without changing the layout.
 */
const tiles = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    caption: 'The Divine Glow Facial · sacred self-care',
    likes: 184,
    comments: 22,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1555820585-c5ae44394b79?auto=format&fit=crop&w=600&q=80',
    caption: 'Botox refresh · natural, never frozen',
    likes: 213,
    comments: 31,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=600&q=80',
    caption: 'Glow Drip · vitamin-rich radiance',
    likes: 162,
    comments: 18,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1585945037805-5fd82c2e60b1?auto=format&fit=crop&w=600&q=80',
    caption: 'Radiance Renewal Peel results',
    likes: 198,
    comments: 27,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?auto=format&fit=crop&w=600&q=80',
    caption: 'Inside the studio · sacred rituals',
    likes: 245,
    comments: 36,
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1581182800629-7d90925ad072?auto=format&fit=crop&w=600&q=80',
    caption: 'Facial balancing · subtle harmony',
    likes: 176,
    comments: 19,
  },
];

export default function InstagramFeed() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="halo-glow left-0 top-10 h-72 w-72 bg-rose-100/55" />
      <div className="halo-glow right-0 bottom-10 h-72 w-72 bg-champagne-100/55" />

      <div className="container-luxe">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Follow Along"
            title={
              <>
                The Studio on <span className="italic gold-text">Instagram</span>
              </>
            }
            subtitle={`Behind-the-scenes, treatment moments, and education — straight from the @${IG_HANDLE} feed.`}
          />
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost shrink-0"
          >
            <Instagram className="h-4 w-4" />
            Follow @{IG_HANDLE}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tiles.map((t, i) => (
            <motion.a
              key={i}
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-white/60"
            >
              <img
                src={t.src}
                alt={t.caption}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warmbrown-700/80 via-warmbrown-700/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-[10px] text-cream-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1">
                  <Heart className="h-3 w-3 fill-cream-50" /> {t.likes}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" /> {t.comments}
                </span>
              </div>
              <div className="absolute right-2 top-2 grid h-7 w-7 place-items-center rounded-full bg-white/70 text-warmbrown-700 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
