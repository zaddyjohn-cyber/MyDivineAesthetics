import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollToTop from './components/layout/ScrollToTop.jsx';
import WhatsAppFab from './components/widgets/WhatsAppFab.jsx';
import { BookingProvider } from './components/booking/BookingModal.jsx';
import ExitIntent from './components/widgets/ExitIntent.jsx';
import MobileBookBar from './components/widgets/MobileBookBar.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const Faqs = lazy(() => import('./pages/Faqs.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Privacy = lazy(() => import('./pages/Privacy.jsx'));
const Cancellation = lazy(() => import('./pages/Cancellation.jsx'));
const Hipaa = lazy(() => import('./pages/Hipaa.jsx'));
const Accessibility = lazy(() => import('./pages/Accessibility.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

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
    <BookingProvider>
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
              <Route path="/blog/:slug" element={<PageShell><BlogPost /></PageShell>} />
              <Route path="/faqs" element={<PageShell><Faqs /></PageShell>} />
              <Route path="/contact" element={<PageShell><Contact /></PageShell>} />
              <Route path="/privacy" element={<PageShell><Privacy /></PageShell>} />
              <Route path="/cancellation" element={<PageShell><Cancellation /></PageShell>} />
              <Route path="/hipaa" element={<PageShell><Hipaa /></PageShell>} />
              <Route path="/accessibility" element={<PageShell><Accessibility /></PageShell>} />
              <Route path="*" element={<PageShell><NotFound /></PageShell>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileBookBar />
      <ExitIntent />
    </div>
    </BookingProvider>
  );
}
