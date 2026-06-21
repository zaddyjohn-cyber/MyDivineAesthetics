import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import Logo from './Logo.jsx';
import BookButton from '../booking/BookButton.jsx';

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2.5' : 'py-5'
      }`}
    >
      <div className="container-luxe">
        <div
          className={`flex items-center justify-between rounded-full border px-4 transition-all duration-500 sm:px-6 ${
            scrolled
              ? 'border-white/60 bg-white/70 py-2 shadow-soft backdrop-blur-xl'
              : 'border-white/30 bg-white/40 py-3 backdrop-blur-md'
          }`}
        >
          <Logo size="md" />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                    isActive
                      ? 'text-warmbrown-700'
                      : 'text-warmbrown-500 hover:text-warmbrown-700'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-blush-gold/60"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <BookButton className="hidden md:inline-flex">Book Now</BookButton>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/60 bg-white/70 text-warmbrown-600 backdrop-blur lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="container-luxe lg:hidden"
          >
            <div className="mt-3 overflow-hidden rounded-3xl border border-white/60 bg-white/85 p-2 shadow-soft backdrop-blur-xl">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-2xl px-5 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gradient-blush-gold/50 text-warmbrown-700'
                        : 'text-warmbrown-500 hover:bg-cream-100/70 hover:text-warmbrown-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <BookButton className="mt-2 w-full">Book Now</BookButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
