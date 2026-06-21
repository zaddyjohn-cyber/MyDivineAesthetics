import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { featuredServices } from '../../data/services.js';

export default function FeaturedServices() {
  return (
    <section id="services" className="relative py-12 sm:py-16">
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/65 p-7 backdrop-blur-xl transition-shadow duration-500 hover:shadow-halo"
              >
                <div className="halo-glow -right-12 -top-12 h-36 w-36 bg-champagne-100/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cream-50 to-blush-100 text-warmbrown-700 shadow-soft">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/60 text-warmbrown-500 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-gradient-gold group-hover:text-warmbrown-700">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl text-warmbrown-700">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown-500">{s.blurb}</p>

                <Link
                  to={s.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-warmbrown-700"
                >
                  View details
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
