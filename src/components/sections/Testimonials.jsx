import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { testimonials } from '../../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="halo-glow left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-champagne-100/60" />
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Client Love"
          title={
            <>
              Stories from <span className="italic gold-text">Divine Clients</span>
            </>
          }
          subtitle="The kind of care that lingers long after the appointment ends."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-card gold-border p-7"
            >
              <Quote className="h-7 w-7 text-champagne-300" />
              <blockquote className="mt-4 font-display text-lg leading-snug text-warmbrown-700">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star
                    key={k}
                    className="h-3.5 w-3.5 fill-champagne-300 text-champagne-400"
                  />
                ))}
              </div>
              <figcaption className="mt-4">
                <p className="text-sm font-medium text-warmbrown-700">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-champagne-500">
                  {t.treatment}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
