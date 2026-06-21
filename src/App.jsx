import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import WhatsAppFab from './components/widgets/WhatsAppFab.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

function PageShell({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="relative">
        <Suspense fallback={<div className="flex h-[60vh] items-center justify-center text-warmbrown-500">Loading…</div>}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageShell><Home /></PageShell>} />
              <Route path="/about" element={<PageShell><About /></PageShell>} />
              <Route path="/services" element={<PageShell><Services /></PageShell>} />
              <Route path="/gallery" element={<PageShell><Gallery /></PageShell>} />
              <Route path="/blog" element={<PageShell><Blog /></PageShell>} />
              <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
              <Route path="*" element={<PageShell><Home /></PageShell>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
