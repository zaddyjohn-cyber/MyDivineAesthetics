import { motion } from 'framer-motion';
import { Stethoscope, Leaf, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const pillars = [
  {
    icon: Stethoscope,
    title: 'Medical Precision',
    body:
      'Every treatment is rooted in clinical training, safety, and an artist’s sense of proportion. Nothing rushed. Nothing guessed.',
  },
  {
    icon: Leaf,
    title: 'Natural Beauty',
    body:
      'We don’t change who you are. We refine, soften, and enhance — so the result still looks like the most rested version of you.',
  },
  {
    icon: HeartHandshake,
    title: 'Whole-Person Wellness',
    body:
      'From IV hydration to weight loss support, your skin and your wellness are treated as one — because they are.',
  },
  {
    icon: Sparkles,
    title: 'Confidence & Self-Love',
    body:
      'You leave seen, heard, and lit from within. Care that honors your worth, not just your appearance.',
  },
];

export default function DivineApproach() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="halo-glow left-0 top-20 h-72 w-72 bg-blush-100/60" />
      <div className="halo-glow right-0 bottom-0 h-80 w-80 bg-champagne-100/60" />

      <div className="container-luxe">
        <SectionHeader
          eyebrow="Our Approach"
          title={
            <>
              Sacred Self-Care, <span className="italic gold-text">Backed by Skill</span>
            </>
          }
          subtitle="My Divine Aesthetics isn’t about changing who you are. It’s about helping you see — and gently enhance — what was already beautiful."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl glass-card gold-border p-7"
              >
                <div className="halo-glow -right-10 -top-10 h-32 w-32 bg-champagne-100/80" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-warmbrown-700 shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-warmbrown-700">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-warmbrown-500">{p.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
