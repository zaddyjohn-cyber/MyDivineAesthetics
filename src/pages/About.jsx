import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Sparkles,
  HeartHandshake,
  Shield,
  Stethoscope,
  Leaf,
  Scale,
  Heart,
  ArrowRight,
  Quote,
} from 'lucide-react';
import PageHero from '../components/sections/PageHero.jsx';
import SectionHeader from '../components/sections/SectionHeader.jsx';
import FloatingOrbs from '../components/3d/FloatingOrbs.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';

const values = [
  { icon: HeartHandshake, label: 'Compassion' },
  { icon: Shield, label: 'Safety' },
  { icon: Stethoscope, label: 'Medical Expertise' },
  { icon: Leaf, label: 'Natural Results' },
  { icon: Sparkles, label: 'Confidence' },
  { icon: Scale, label: 'Balance' },
  { icon: Heart, label: 'Whole-Person Care' },
];

const trustPoints = [
  {
    title: 'A Decade of Nursing Foundation',
    body:
      'Nearly ten years of bedside, mental health, and clinical experience shape every consultation and every treatment plan.',
  },
  {
    title: 'Artistry With Restraint',
    body:
      'We believe the best aesthetic work is the kind no one can quite name. Subtle. Balanced. Refined.',
  },
  {
    title: 'Truly Personalized Plans',
    body:
      'You aren’t a menu item. We design plans around your goals, your skin, your lifestyle, and your timing.',
  },
  {
    title: 'Wellness Woven In',
    body:
      'From hydration to weight loss, the inside-out approach means you don’t just look better — you feel better.',
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            A Heavenly Approach to <span className="italic gold-text">Beauty & Wellness</span>
          </>
        }
        subtitle="My Divine Aesthetics was created to redefine beauty as an act of sacred self-care. Every treatment is personal, intentional, and restorative — combining clinical expertise with a deep respect for natural beauty."
      />

      {/* Brand story */}
      <section className="relative py-10 sm:py-14">
        <div className="container-luxe">
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="section-eyebrow">
                <span className="h-1 w-1 rounded-full bg-champagne-400" />
                The Brand
              </span>
              <h2 className="heading-md mt-5">
                Where medicine meets <span className="italic gold-text">artistry & spirit.</span>
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-warmbrown-500">
                <p>
                  My Divine Aesthetics is a luxury medical aesthetics and wellness brand built
                  around a single belief: caring for yourself is sacred work. We blend nurse
                  practitioner-led medical expertise with an artist’s eye for natural beauty and a
                  deep respect for whole-person wellness.
                </p>
                <p>
                  Every facial, every injectable, every drip is treated as a ritual — calm, considered,
                  and rooted in evidence-based care. The space, the products, and the protocols are
                  designed to make you feel held, never rushed.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {trustPoints.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="rounded-3xl glass-card gold-border p-5"
                  >
                    <h3 className="font-display text-xl text-warmbrown-700">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-warmbrown-500">{p.body}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-gradient-to-br from-blush-50 via-champagne-50 to-cream-100 p-8">
                <FloatingOrbs className="absolute inset-0 h-full w-full" />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                    Brand Promise
                  </p>
                  <p className="mt-3 font-display text-3xl leading-snug text-warmbrown-700">
                    Sacred self-care. <span className="italic gold-text">A heavenly approach</span>{' '}
                    to wellness and aesthetics that honors your natural beauty.
                  </p>
                  <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                    {['Enhance', 'Restore', 'Glow'].map((w) => (
                      <div
                        key={w}
                        className="rounded-2xl border border-white/60 bg-white/70 px-3 py-4 backdrop-blur"
                      >
                        <p className="font-display text-lg italic text-warmbrown-700">{w}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="relative py-10 sm:py-14">
        <div className="container-luxe">
          <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/55 p-8 backdrop-blur-xl sm:p-14">
            <div className="halo-glow -right-20 -top-20 h-72 w-72 bg-champagne-100/70" />
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-[32px] bg-gradient-to-br from-warmbrown-600 via-warmbrown-500 to-warmbrown-400">
                <FloatingOrbs className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <div className="mx-auto h-32 w-32 rounded-full bg-gradient-gold opacity-90 blur-2xl" />
                    <p className="mt-4 font-display text-4xl text-cream-50">Imani Bryan</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-champagne-200">
                      DNP, FNP-C, PMHNP-BC
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="section-eyebrow">
                  <span className="h-1 w-1 rounded-full bg-champagne-400" />
                  The Founder
                </span>
                <h2 className="heading-md mt-5">
                  A visionary nurse practitioner blending{' '}
                  <span className="italic gold-text">science & soul.</span>
                </h2>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-warmbrown-500">
                  <p>
                    Imani Bryan is a doctorally prepared nurse practitioner whose approach blends
                    clinical precision, emotional intelligence, and artistic intuition. With
                    backgrounds spanning family practice and psychiatric mental health, she sees
                    each client as more than a treatment plan — she sees the whole person.
                  </p>
                  <p>
                    Her work is rooted in respect for natural beauty, evidence-based care, and the
                    belief that aesthetic medicine, done well, is a quiet form of healing.
                  </p>
                </div>

                <div className="mt-7 flex items-start gap-4 rounded-3xl border border-champagne-200/60 bg-cream-50/80 p-6">
                  <Quote className="h-6 w-6 shrink-0 text-champagne-400" />
                  <p className="font-display text-xl italic leading-snug text-warmbrown-600">
                    Aesthetic medicine isn’t about changing who you are — it’s about helping you
                    see what was divine all along.
                  </p>
                </div>

                <Link to="/contact" className="btn-gold mt-8">
                  Book a Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Mission */}
      <section className="relative py-10 sm:py-14">
        <div className="container-luxe">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl glass-card gold-border p-8 sm:p-10">
              <span className="section-eyebrow">
                <span className="h-1 w-1 rounded-full bg-champagne-400" />
                Philosophy
              </span>
              <h3 className="heading-md mt-5">Refinement, not reinvention.</h3>
              <p className="mt-5 text-base leading-relaxed text-warmbrown-500">
                We honor the face you already have. Our work is restrained, balanced, and
                rooted in proportion. We say no to overfilled, frozen, or generic results — and yes
                to the most rested, lit-from-within version of you.
              </p>
            </div>
            <div className="rounded-3xl glass-card gold-border p-8 sm:p-10">
              <span className="section-eyebrow">
                <span className="h-1 w-1 rounded-full bg-champagne-400" />
                Mission
              </span>
              <h3 className="heading-md mt-5">
                To make luxury aesthetics feel like sacred self-care.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-warmbrown-500">
                Every appointment is a ritual: thoughtful intake, honest education, evidence-based
                care, and a result that helps you walk out feeling more like yourself, not less.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-10 sm:py-14">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Our Values"
            title={
              <>
                What we <span className="italic gold-text">stand for.</span>
              </>
            }
            subtitle="Seven pillars that shape every consultation, treatment, and conversation in the studio."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl glass-card p-6 text-center"
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-blush-gold text-warmbrown-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-xl text-warmbrown-700">{v.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
