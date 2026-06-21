import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import PageHero from '../components/sections/PageHero.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';
import { faqGroups, faqJsonLd } from '../data/faqs.js';

export default function Faqs() {
  const [open, setOpen] = useState({});

  // Inject FAQ schema for rich snippets
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqJsonLd());
    script.setAttribute('data-faq', '1');
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggle = (key) => setOpen((o) => ({ ...o, [key]: !o[key] }));

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            Real Answers to <span className="italic gold-text">Real Questions</span>
          </>
        }
        subtitle="Everything we get asked most often — about treatments, results, recovery, pricing, and what to expect inside the studio."
      />

      <section className="relative pb-16">
        <div className="container-luxe max-w-4xl">
          <div className="space-y-12">
            {faqGroups.map((group, gi) => (
              <div key={group.group}>
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-2xl text-warmbrown-700 sm:text-3xl"
                >
                  {group.group}
                </motion.h2>
                <div className="mt-5 space-y-3">
                  {group.items.map((item, ii) => {
                    const key = `${gi}-${ii}`;
                    const isOpen = !!open[key];
                    return (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.45, delay: ii * 0.04 }}
                        className="overflow-hidden rounded-2xl border border-white/60 bg-white/75 backdrop-blur-xl"
                      >
                        <button
                          type="button"
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-7 sm:py-5"
                        >
                          <span className="font-display text-lg text-warmbrown-700 sm:text-xl">
                            {item.q}
                          </span>
                          <span
                            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-blush-gold text-warmbrown-700 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="px-5 pb-5 text-sm leading-relaxed text-warmbrown-600 sm:px-7 sm:pb-6 sm:text-base">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
