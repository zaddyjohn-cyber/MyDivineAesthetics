import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen, Check, Download } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;
const GUIDE_URL = `${BASE}divine-skin-guide.html`;

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // In production, POST to Mailchimp/Klaviyo/Formspree. For now, save locally + open guide.
    try {
      const list = JSON.parse(localStorage.getItem('mda_emails') || '[]');
      list.push({ email, at: new Date().toISOString(), source: 'skin-guide' });
      localStorage.setItem('mda_emails', JSON.stringify(list));
    } catch {}
    window.open(GUIDE_URL, '_blank', 'noopener,noreferrer');
    setDone(true);
  };

  return (
    <section className="relative py-12 sm:py-16">
      <div className="container-luxe">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] border border-white/60 bg-gradient-to-br from-blush-50 via-champagne-50 to-cream-100 p-8 shadow-soft sm:p-12"
        >
          <div className="halo-glow -left-20 -top-20 h-80 w-80 bg-rose-200/55" />
          <div className="halo-glow -right-20 -bottom-20 h-80 w-80 bg-champagne-200/55" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
            {/* Visual */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-rose-gold opacity-40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/85 p-7 shadow-halo backdrop-blur">
                <span className="inline-flex items-center gap-2 rounded-full bg-warmbrown-700 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream-50">
                  <BookOpen className="h-3 w-3" /> Free Guide
                </span>
                <h3 className="mt-4 font-display text-3xl leading-tight text-warmbrown-700">
                  The Divine <span className="italic gold-text">Skin Guide</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warmbrown-600">
                  A nurse practitioner&apos;s walkthrough of the 4-step Divine Routine,
                  how to read your skin each week, and when it&apos;s time to escalate
                  to professional care.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-warmbrown-600">
                  {[
                    'The 4-Step Divine Routine, simplified',
                    'How to read dull, breakout, reactive, or pigmented skin',
                    'When over-the-counter isn&apos;t enough',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne-500" />
                      <span dangerouslySetInnerHTML={{ __html: b }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <span className="section-eyebrow">
                <span className="h-1 w-1 rounded-full bg-champagne-400" />
                Lead With Knowledge
              </span>
              <h2 className="heading-md mt-5">
                Get the guide. Glow on <span className="italic gold-text">your terms.</span>
              </h2>
              <p className="lead mt-4">
                Drop your email and we&apos;ll send the guide straight to your inbox — plus
                occasional skin tips and divine offers. Unsubscribe anytime.
              </p>

              {!done ? (
                <form onSubmit={onSubmit} className="mt-7 space-y-3">
                  <div className="flex items-center gap-2 rounded-full border border-champagne-200/60 bg-white/85 p-1.5 backdrop-blur">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@yourdomain.com"
                      className="w-full bg-transparent px-4 py-2.5 text-sm text-warmbrown-700 placeholder:text-warmbrown-400 focus:outline-none"
                    />
                    <button type="submit" className="btn-gold !px-5 !py-2.5 text-xs">
                      <Sparkles className="h-3.5 w-3.5" /> Send the Guide
                    </button>
                  </div>
                  <p className="text-[11px] text-warmbrown-500">
                    No spam, ever. By submitting, you agree to receive occasional
                    emails — opt out with one click.
                  </p>
                </form>
              ) : (
                <div className="mt-7 rounded-2xl border border-champagne-200/60 bg-white/85 p-5 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-warmbrown-700">
                      <Check className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-display text-lg text-warmbrown-700">
                        Your guide is on the way.
                      </p>
                      <p className="mt-1 text-sm text-warmbrown-600">
                        It also just opened in a new tab.{' '}
                        <a
                          href={GUIDE_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-warmbrown-700 underline underline-offset-2"
                        >
                          Reopen it <Download className="h-3.5 w-3.5" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
