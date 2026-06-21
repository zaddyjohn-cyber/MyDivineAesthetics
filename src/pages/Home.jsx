import { lazy, Suspense } from 'react';
import Hero from '../components/sections/Hero.jsx';
import DivineApproach from '../components/sections/DivineApproach.jsx';
import FeaturedServices from '../components/sections/FeaturedServices.jsx';
import GalleryPreview from '../components/sections/GalleryPreview.jsx';

// Below-the-fold sections load only when scrolled into view
const GoogleReviews = lazy(() => import('../components/sections/GoogleReviews.jsx'));
const LeadMagnet = lazy(() => import('../components/sections/LeadMagnet.jsx'));
const InstagramFeed = lazy(() => import('../components/sections/InstagramFeed.jsx'));
const FinalCTA = lazy(() => import('../components/sections/FinalCTA.jsx'));

const fallback = <div className="h-[400px]" aria-hidden="true" />;

export default function Home() {
  return (
    <>
      <Hero />
      <DivineApproach />
      <FeaturedServices />
      <GalleryPreview />
      <Suspense fallback={fallback}>
        <GoogleReviews />
      </Suspense>
      <Suspense fallback={fallback}>
        <LeadMagnet />
      </Suspense>
      <Suspense fallback={fallback}>
        <InstagramFeed />
      </Suspense>
      <Suspense fallback={fallback}>
        <FinalCTA />
      </Suspense>
    </>
  );
}
