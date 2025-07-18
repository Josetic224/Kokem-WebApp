import { useState, useEffect } from 'react';

const ServiceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 0,
      type: 'tagline',
      title: 'Enforcing the Supremacy of Christ Over All!',
      backgroundImage: '/images/hero-bg-3000.jpg'
    },
    {
      id: 1,
      type: 'service',
      image: '/images/highTension.jpg'
    },
    {
      id: 2,
      type: 'service',
      image: '/images/communion.jpg'
    },
    {
      id: 3,
      type: 'service',
      image: '/images/sunday.jpg'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Show header logo on all slides
  useEffect(() => {
    const body = document.body;
    // Always show logo in navbar
    body.classList.remove('hide-logo');
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    setTimeout(() => setIsTransitioning(false), 800);
    // Resume auto-play after 10 seconds of manual control
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);

    setTimeout(() => setIsTransitioning(false), 800);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);

    setTimeout(() => setIsTransitioning(false), 800);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="service-carousel">
      <div className="carousel-container">
        {/* Main Slide Display */}
        <div className="carousel-slide">
          {currentSlideData.type === 'tagline' ? (
            // Tagline Slide - background image with title
            <div
              className="tagline-slide"
              style={{
                backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.6)), url(${currentSlideData.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="slide-content">
                <h1 className="tagline-title">{currentSlideData.title}</h1>
              </div>
            </div>
          ) : (
            // Service Slide - just image
            <div className="service-slide">
              <div className="service-image-container">
                <img
                  src={currentSlideData.image}
                  alt="Service"
                  className="service-carousel-image"
                />
              </div>
            </div>
          )}
        </div>



        {/* Navigation Dots */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
