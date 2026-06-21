import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { featuredServices } from '../../data/services.js';

function ServiceMedia({ media, title }) {
  if (media?.type === 'video') {
    return (
      <video
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  if (media?.type === 'image') {
    return (
      <img
        src={media.src}
        alt={title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    );
  }
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-blush-50 to-champagne-50" />
  );
}

export default function FeaturedServices() {
  return (
    <section id="services" className="relative py-12 sm:py-16">
      <div className="halo-glow -left-10 top-10 h-72 w-72 bg-rose-100/55" />
      <div className="halo-glow -right-10 bottom-20 h-80 w-80 bg-rose-200/40" />
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Signature Services"
          title={
            <>
              Treatments Designed to <span className="italic gold-text">Enhance & Restore</span>
            </>
          }
          subtitle="From the Divine Glow Facial to natural-looking Botox, every service is curated to refresh your skin, restore your energy, and honor your natural beauty."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/70 backdrop-blur-xl transition-shadow duration-500 hover:shadow-halo"
              >
                {/* Media header */}
                <div className="relative h-56 overflow-hidden sm:h-60">
                  <ServiceMedia media={s.media} title={s.title} />

                  {/* Soft champagne tint */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-champagne-100/10 via-transparent to-warmbrown-700/15 mix-blend-multiply" />

                  {/* Bottom fade into card body */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/90 to-transparent" />

                  {/* Category pill */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-warmbrown-600 backdrop-blur">
                      Signature
                    </span>
                  </div>

                  {/* Arrow chip */}
                  <div className="absolute right-4 top-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/70 text-warmbrown-600 backdrop-blur transition-transform duration-500 group-hover:rotate-45 group-hover:bg-gradient-gold group-hover:text-warmbrown-700">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="relative p-7">
                  <span className="absolute -top-6 left-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cream-50 to-blush-100 text-warmbrown-700 shadow-soft ring-4 ring-white/80">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-2 font-display text-2xl text-warmbrown-700">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warmbrown-600">{s.blurb}</p>

                  <Link
                    to={s.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-warmbrown-700"
                  >
                    View details
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
