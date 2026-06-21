import { motion } from 'framer-motion';
import { Stethoscope, Leaf, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';

const BASE = import.meta.env.BASE_URL;

const pillars = [
  {
    icon: Stethoscope,
    image: `${BASE}pillars/medical-precision.jpg`,
    alt: 'Clinical aesthetic treatment representing medical precision',
    title: 'Medical Precision',
    body:
      'Every treatment is rooted in clinical training, safety, and an artist’s sense of proportion. Nothing rushed. Nothing guessed.',
  },
  {
    icon: Leaf,
    image: `${BASE}pillars/natural-beauty.jpg`,
    alt: 'Soft natural beauty inspiration',
    title: 'Natural Beauty',
    body:
      'We don’t change who you are. We refine, soften, and enhance — so the result still looks like the most rested version of you.',
    watermarkCover: { top: '14%', right: '30%', width: '14%', height: '13%' },
  },
  {
    icon: HeartHandshake,
    image: `${BASE}pillars/whole-person-wellness.jpg`,
    alt: 'Whole-person wellness imagery',
    title: 'Whole-Person Wellness',
    body:
      'From IV hydration to weight loss support, your skin and your wellness are treated as one — because they are.',
  },
  {
    icon: Sparkles,
    image: `${BASE}pillars/confidence-self-love.jpg`,
    alt: 'Confidence and self-love imagery',
    title: 'Confidence & Self-Love',
    body:
      'You leave seen, heard, and lit from within. Care that honors your worth, not just your appearance.',
  },
];

export default function DivineApproach() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="halo-glow left-0 top-20 h-72 w-72 bg-rose-100/60" />
      <div className="halo-glow right-0 bottom-0 h-80 w-80 bg-champagne-100/60" />
      <div className="halo-glow left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 bg-rose-200/35" />

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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group relative overflow-hidden rounded-3xl glass-card gold-border"
              >
                {/* Image header */}
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Targeted watermark cover (frosted blur + soft tint) */}
                  {p.watermarkCover && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute rounded-full bg-cream-50/60 backdrop-blur-md"
                      style={p.watermarkCover}
                    />
                  )}
                  {/* Champagne tint for brand cohesion */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-champagne-100/10 via-transparent to-white/40 mix-blend-multiply" />
                  {/* Soft bottom fade so the image meets the card body smoothly */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/85 to-transparent" />
                </div>

                {/* Body */}
                <div className="relative p-6 sm:p-7">
                  <span className="absolute -top-6 right-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold text-warmbrown-700 shadow-soft ring-4 ring-white/80">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-warmbrown-700">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-warmbrown-600">{p.body}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
