import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { posts } from '../data/posts.js';
import FinalCTA from '../components/sections/FinalCTA.jsx';
import BookButton from '../components/booking/BookButton.jsx';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const index = posts.findIndex((p) => p.slug === slug);
  const next = index >= 0 ? posts[(index + 1) % posts.length] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — My Divine Aesthetics`;
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 sm:pb-12">
        <div className="halo-glow -left-32 top-20 h-96 w-96 bg-champagne-100/60" />
        <div className="halo-glow -right-20 top-40 h-80 w-80 bg-rose-200/50" />
        <div className="container-luxe max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-warmbrown-500 transition hover:text-warmbrown-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]"
          >
            <span className="rounded-full bg-gradient-blush-gold px-3 py-1 text-warmbrown-700">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-champagne-500">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="heading-xl mt-5"
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="lead mt-5"
          >
            {post.excerpt}
          </motion.p>

          <p className="mt-5 text-xs text-warmbrown-500">
            By Imani Bryan, DNP, FNP-C, PMHNP-BC
          </p>
        </div>
      </section>

      <article className="relative pb-16">
        <div className="container-luxe max-w-3xl">
          <div className="rounded-[28px] border border-white/60 bg-white/75 p-8 backdrop-blur-xl sm:p-12">
            {post.body.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={i}
                    className="mt-10 font-display text-2xl text-warmbrown-700 first:mt-0 sm:text-3xl"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'p') {
                return (
                  <p
                    key={i}
                    className="mt-4 text-base leading-relaxed text-warmbrown-600"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === 'ul') {
                return (
                  <ul
                    key={i}
                    className="mt-4 space-y-2 text-base leading-relaxed text-warmbrown-600"
                  >
                    {block.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-champagne-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}

            {next && (
              <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-champagne-200/40 pt-8 sm:flex-row sm:items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-champagne-500">
                    Read next
                  </p>
                  <p className="mt-1 font-display text-xl text-warmbrown-700">
                    {next.title}
                  </p>
                </div>
                <Link to={`/blog/${next.slug}`} className="btn-ghost">
                  Continue reading <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}

            <div className="mt-10 rounded-2xl border border-champagne-200/60 bg-gradient-blush-gold/40 p-6 text-center">
              <Sparkles className="mx-auto h-5 w-5 text-warmbrown-700" />
              <p className="mt-2 font-display text-2xl text-warmbrown-700">
                Ready for your own ritual?
              </p>
              <p className="mt-1 text-sm text-warmbrown-600">
                Book a consultation and we’ll plan it together.
              </p>
              <div className="mt-5">
                <BookButton>Book Now</BookButton>
              </div>
            </div>
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
