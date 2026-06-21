import Hero from '../components/sections/Hero.jsx';
import DivineApproach from '../components/sections/DivineApproach.jsx';
import FeaturedServices from '../components/sections/FeaturedServices.jsx';
import GalleryPreview from '../components/sections/GalleryPreview.jsx';
import Testimonials from '../components/sections/Testimonials.jsx';
import FinalCTA from '../components/sections/FinalCTA.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <DivineApproach />
      <FeaturedServices />
      <GalleryPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
