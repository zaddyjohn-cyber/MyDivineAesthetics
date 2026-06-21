import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import { sampleReviews } from '../../data/reviews.js';

function GoogleGLogo({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.5-5.2l-6.2-5.2C29.3 35 26.8 36 24 36c-5.3 0-9.7-3.3-11.3-8L6.2 33C9.4 39.6 16.1 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.7 2-2 3.7-3.7 5l6.2 5.2C40 35 44 30 44 24c0-1.2-.1-2.3-.4-3.5z" />
    </svg>
  );
}

function Stars({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < value ? 'fill-champagne-400 text-champagne-500' : 'text-champagne-200'
          }`}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const { averageRating, totalReviews, reviews } = sampleReviews;

  return (
    <section className="relative py-12 sm:py-16">
      <div className="halo-glow left-10 top-10 h-72 w-72 bg-rose-100/55" />
      <div className="halo-glow right-10 bottom-10 h-72 w-72 bg-champagne-100/60" />

      <div className="container-luxe">
        <SectionHeader
          eyebrow="Google Reviews"
          title={
            <>
              Loved by Real <span className="italic gold-text">Divine Clients</span>
            </>
          }
          subtitle="Live reviews from clients in the studio — refreshed straight from Google."
        />

        {/* Average rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-md items-center gap-5 rounded-3xl border border-white/60 bg-white/75 p-5 backdrop-blur-xl"
        >
          <GoogleGLogo className="h-10 w-10 shrink-0" />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl text-warmbrown-700">
                {averageRating.toFixed(1)}
              </span>
              <Stars value={Math.round(averageRating)} />
            </div>
            <p className="mt-1 text-xs text-warmbrown-500">
              Based on {totalReviews}+ Google reviews
            </p>
          </div>
          <a
            href="https://search.google.com/local/writereview"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost !px-4 !py-2 text-xs"
          >
            Leave one
          </a>
        </motion.div>

        {/* Reviews grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.author + i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-card gold-border p-6"
            >
              <div className="flex items-center justify-between">
                <Stars value={r.rating} />
                <GoogleGLogo className="h-5 w-5 opacity-80" />
              </div>
              <Quote className="mt-4 h-6 w-6 text-champagne-300" />
              <blockquote className="mt-2 text-sm leading-relaxed text-warmbrown-600">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 flex items-center justify-between text-xs">
                <span className="font-medium text-warmbrown-700">{r.author}</span>
                <span className="text-warmbrown-500">{r.timeAgo}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
