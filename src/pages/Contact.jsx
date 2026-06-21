import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Calendar,
  Check,
  MessageCircle,
} from 'lucide-react';
import PageHero from '../components/sections/PageHero.jsx';
import { featuredServices } from '../data/services.js';
import { whatsappLink } from '../data/contact.js';

const hours = [
  { day: 'Monday', time: 'By appointment' },
  { day: 'Tuesday', time: '10:00 AM – 6:00 PM' },
  { day: 'Wednesday', time: '10:00 AM – 6:00 PM' },
  { day: 'Thursday', time: '10:00 AM – 7:00 PM' },
  { day: 'Friday', time: '10:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 3:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title={
          <>
            Let’s Begin Your <span className="italic gold-text">Divine Ritual</span>
          </>
        }
        subtitle="Have questions about your skin, aesthetic goals, or wellness journey? Reach out today and let us help you choose the right treatment for your needs."
      />

      <section className="relative pb-16">
        <div className="container-luxe">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/70 p-8 backdrop-blur-xl sm:p-10"
            >
              <div className="halo-glow -right-12 -top-12 h-40 w-40 bg-champagne-100/70" />

              {!submitted ? (
                <form onSubmit={onSubmit} className="relative space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Full Name"
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      required
                    />
                    <Field
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={update('phone')}
                    />
                    <div>
                      <label className="text-[11px] font-medium uppercase tracking-[0.22em] text-champagne-500">
                        Service Interested In
                      </label>
                      <div className="mt-2 rounded-2xl border border-champagne-200/60 bg-white/80 px-4 py-3">
                        <select
                          value={form.service}
                          onChange={update('service')}
                          className="w-full bg-transparent text-sm text-warmbrown-700 focus:outline-none"
                        >
                          <option value="">Select a service</option>
                          {featuredServices.map((s) => (
                            <option key={s.title}>{s.title}</option>
                          ))}
                          <option>Consultation</option>
                          <option>Not sure yet</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.22em] text-champagne-500">
                      Your Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      rows={5}
                      placeholder="Tell us about your goals, concerns, or anything you’d like us to know."
                      className="mt-2 w-full rounded-2xl border border-champagne-200/60 bg-white/80 px-4 py-3 text-sm text-warmbrown-700 placeholder:text-warmbrown-400 focus:border-champagne-300 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button type="submit" className="btn-gold">
                      <Sparkles className="h-4 w-4" /> Send Message
                    </button>
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost"
                    >
                      <Calendar className="h-4 w-4" /> Book via Calendly
                    </a>
                  </div>

                  <p className="text-xs text-warmbrown-400">
                    By submitting, you agree to be contacted about your inquiry. We never share
                    your information.
                  </p>
                </form>
              ) : (
                <div className="relative grid place-items-center py-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-warmbrown-700 shadow-soft">
                    <Check className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-3xl text-warmbrown-700">
                    Thank you, beautiful soul.
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-warmbrown-500">
                    Your message has reached us. We’ll be in touch within 1–2 business days to
                    plan your divine ritual.
                  </p>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="rounded-[32px] glass-card gold-border p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                  Get in Touch
                </p>
                <ul className="mt-5 space-y-4 text-sm text-warmbrown-600">
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-blush-gold">
                      <Phone className="h-4 w-4 text-warmbrown-700" />
                    </span>
                    <div>
                      <a href="tel:+16179430892" className="font-medium text-warmbrown-700 transition hover:text-warmbrown-500">
                        +1 (617) 943-0892
                      </a>
                      <p className="text-xs text-warmbrown-400">Call or text</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#25D366]/15">
                      <MessageCircle className="h-4 w-4 text-[#128C7E]" />
                    </span>
                    <div>
                      <a
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-warmbrown-700 transition hover:text-[#128C7E]"
                      >
                        Chat on WhatsApp
                      </a>
                      <p className="text-xs text-warmbrown-400">Fastest way to reach us</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-blush-gold">
                      <Mail className="h-4 w-4 text-warmbrown-700" />
                    </span>
                    <div>
                      <p className="font-medium text-warmbrown-700">
                        hello@mydivineaesthetics.com
                      </p>
                      <p className="text-xs text-warmbrown-400">We respond within 1 business day</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-blush-gold">
                      <MapPin className="h-4 w-4 text-warmbrown-700" />
                    </span>
                    <div>
                      <p className="font-medium text-warmbrown-700">By appointment only</p>
                      <p className="text-xs text-warmbrown-400">
                        Studio address shared upon booking
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/70 text-warmbrown-600 transition hover:bg-gradient-blush-gold"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/70 text-warmbrown-600 transition hover:bg-gradient-blush-gold"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-[32px] glass-card p-7">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-champagne-500" />
                  <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                    Business Hours
                  </p>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-champagne-200/30 pb-2 last:border-b-0 last:pb-0"
                    >
                      <span className="text-warmbrown-600">{h.day}</span>
                      <span className="text-warmbrown-500">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br from-blush-50 via-champagne-50 to-cream-100 p-7">
                <p className="text-[11px] uppercase tracking-[0.24em] text-champagne-500">
                  Studio Location
                </p>
                <p className="mt-3 font-display text-2xl leading-tight text-warmbrown-700">
                  A calm, private, luxury studio.
                </p>
                <div className="mt-5 aspect-[5/3] w-full rounded-2xl border border-white/60 bg-[radial-gradient(ellipse_at_top_left,_rgba(239,217,177,0.6),_transparent_55%),radial-gradient(ellipse_at_bottom_right,_rgba(243,219,210,0.55),_transparent_55%)]">
                  <div className="grid h-full place-items-center">
                    <div className="text-center">
                      <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-warmbrown-700 mx-auto shadow-soft">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <p className="mt-3 text-xs uppercase tracking-[0.24em] text-warmbrown-500">
                        Map preview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type, value, onChange, required }) {
  return (
    <div>
      <label className="text-[11px] font-medium uppercase tracking-[0.22em] text-champagne-500">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-2xl border border-champagne-200/60 bg-white/80 px-4 py-3 text-sm text-warmbrown-700 placeholder:text-warmbrown-400 focus:border-champagne-300 focus:outline-none"
      />
    </div>
  );
}
