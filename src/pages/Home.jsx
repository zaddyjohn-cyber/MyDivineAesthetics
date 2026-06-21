import Hero from '../components/sections/Hero.jsx';
import DivineApproach from '../components/sections/DivineApproach.jsx';
import FeaturedServices from '../components/sections/FeaturedServices.jsx';
import GalleryPreview from '../components/sections/GalleryPreview.jsx';
import GoogleReviews from '../components/sections/GoogleReviews.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import InstagramFeed from '../components/sections/InstagramFeed.jsx';
import LeadMagnet from '../components/sections/LeadMagnet.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <DivineApproach />
      <FeaturedServices />
      <GalleryPreview />
      <GoogleReviews />
      <Testimonials />
      <LeadMagnet />
      <InstagramFeed />
      <FinalCTA />
    </>
  );
}
