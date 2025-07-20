import { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import ConnectSection from '../components/ConnectSection';
import ServiceCarousel from '../components/ServiceCarousel';
import SeriesSection from '../components/SeriesSection';
import SocialSection from '../components/SocialSection';
import ImageTest from '../components/ImageTest';

const Home = () => {
  useEffect(() => {
    // Add home-page class to body
    document.body.classList.add('home-page');

    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <>
      <ImageTest />
      <ServiceCarousel />
      <AboutSection />
      <ConnectSection />
      <SeriesSection />
      <SocialSection />
    </>
  );
};

export default Home;
