import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import Logo from './Logo.jsx';
import { whatsappLink } from '../../data/contact.js';

const linkGroups = [
  {
    title: 'Explore',
    links: [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/services', label: 'Services' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { to: '/services#skin', label: 'Skin Care' },
      { to: '/services#injectables', label: 'Botox & Facial Balancing' },
      { to: '/services#acne', label: 'Acne Care' },
      { to: '/services#iv', label: 'IV Hydration' },
      { to: '/services#weight', label: 'Medical Weight Loss' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-cream-100/40 to-cream-200/60" />
      <div className="halo-glow left-1/2 top-0 h-72 w-72 -translate-x-1/2 bg-champagne-100/70" />
      <div className="halo-glow left-10 bottom-10 h-60 w-60 bg-rose-100/50" />
      <div className="halo-glow right-10 top-1/2 h-60 w-60 bg-rose-200/35" />

      <div className="container-luxe pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo size="lg" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-warmbrown-500">
              Sacred self-care. A heavenly approach to wellness and aesthetics that honors
              your natural beauty.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/70 text-warmbrown-600 transition hover:bg-gradient-blush-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/70 text-warmbrown-600 transition hover:bg-gradient-blush-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@mydivineaesthetics.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/70 text-warmbrown-600 transition hover:bg-gradient-blush-gold"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-full border border-champagne-200/60 bg-white/70 text-[#128C7E] transition hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-500">
                {group.title}
              </h4>
              <ul className="mt-5 space-y-3 text-sm text-warmbrown-500">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="transition hover:text-warmbrown-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-champagne-500">
              Stay in the glow
            </h4>
            <p className="mt-5 text-sm text-warmbrown-500">
              Skin tips, behind-the-scenes, and divine offers — straight to your inbox.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex items-center gap-2 rounded-full border border-champagne-200/60 bg-white/70 p-1.5 backdrop-blur"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-2 text-sm text-warmbrown-700 placeholder:text-warmbrown-400 focus:outline-none"
              />
              <button type="submit" className="btn-gold !px-4 !py-2 text-xs">
                <Sparkles className="h-3.5 w-3.5" /> Join
              </button>
            </form>

            <ul className="mt-6 space-y-3 text-sm text-warmbrown-500">
              <li className="flex items-center gap-3">
                <a href="tel:+16179430892" className="inline-flex items-center gap-3 transition hover:text-warmbrown-700">
                  <Phone className="h-4 w-4 text-champagne-500" /> +1 (617) 943-0892
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-champagne-500" /> By appointment only
              </li>
            </ul>
          </div>
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-warmbrown-400 sm:flex-row">
          <p>© {new Date().getFullYear()} My Divine Aesthetics. All rights reserved.</p>
          <p className="font-display italic text-warmbrown-500">
            Enhance. Restore. Glow.
          </p>
        </div>
      </div>
    </footer>
  );
}
