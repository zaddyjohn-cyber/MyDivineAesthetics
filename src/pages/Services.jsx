import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PageHero from '../components/sections/PageHero.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';
import BookButton from '../components/booking/BookButton.jsx';
import { serviceCategories } from '../data/services.js';

function PriceRow({ name, price, highlight }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-champagne-200/40 py-3 last:border-b-0">
      <span className="text-sm text-warmbrown-600">{name}</span>
      <span
        className={`shrink-0 text-sm ${
          highlight ? 'font-medium text-warmbrown-700' : 'text-warmbrown-500'
        }`}
      >
        {price}
      </span>
    </li>
  );
}

function ServiceCategory({ category, index }) {
  const flip = index % 2 === 1;
  return (
    <section id={category.id} className="relative py-10 sm:py-14">
      <div className="container-luxe">
        <div
          className={`grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] ${
            flip ? 'lg:[&>div:first-child]:order-2' : ''
          }`}
        >
          <div>
            <span className="section-eyebrow">
              <span className="h-1 w-1 rounded-full bg-champagne-400" />
              {category.eyebrow}
            </span>
            <h2 className="heading-md mt-5">{category.title}</h2>
            <p className="lead mt-5">{category.description}</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl glass-card p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                  Best For
                </p>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown-600">
                  {category.bestFor}
                </p>
              </div>
              <div className="rounded-3xl glass-card p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                  Main Benefits
                </p>
                <ul className="mt-3 space-y-2">
                  {category.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-warmbrown-600">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <BookButton preset={category.eyebrow}>Book {category.eyebrow}</BookButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl"
          >
            <div className="halo-glow -right-12 -top-12 h-40 w-40 bg-champagne-100/70" />
            <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
              Menu & Pricing
            </p>
            <ul className="mt-5">
              {category.items.map((item) => (
                <PriceRow key={item.name} name={item.name} price={item.price} highlight />
              ))}
            </ul>

            {category.addons && (
              <>
                <p className="mt-8 text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                  Add-On Boosters
                </p>
                <ul className="mt-3">
                  {category.addons.map((item) => (
                    <PriceRow key={item.name} name={item.name} price={item.price} />
                  ))}
                </ul>
              </>
            )}

            <p className="mt-6 text-xs text-warmbrown-400">
              Prices are guides — your custom plan is confirmed at consultation.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Luxury Treatments Designed to <span className="italic gold-text">Enhance, Restore, and Glow</span>
          </>
        }
        subtitle="From facials to facial balancing, IV hydration to medical weight loss — every service is rooted in clinical care, customized to you, and delivered as a ritual."
      >
        <div className="flex flex-wrap gap-2">
          {serviceCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-champagne-200/60 bg-white/60 px-4 py-2 text-xs font-medium text-warmbrown-600 backdrop-blur transition hover:bg-gradient-blush-gold hover:text-warmbrown-700"
            >
              {c.eyebrow}
            </a>
          ))}
        </div>
      </PageHero>

      {serviceCategories.map((cat, i) => (
        <ServiceCategory key={cat.id} category={cat} index={i} />
      ))}

      <FinalCTA />
    </>
  );
}
