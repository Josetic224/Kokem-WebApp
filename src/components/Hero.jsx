import { Link } from 'react-router-dom';
import useSmoothScroll from '../hooks/useSmoothScroll';

const Hero = () => {
  const { scrollToElement } = useSmoothScroll();

  const scrollToAbout = (e) => {
    e.preventDefault();
    scrollToElement('about');
  };

  return (
    <section 
      className="s-hero" 
      data-parallax="scroll" 
      data-image-src="/images/hero-bg-3000.jpg" 
      data-natural-width="3000" 
      data-natural-height="2000" 
      data-position-y="center"
      style={{
        backgroundImage: 'url(/images/hero-bg-3000.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-left-bar"></div>

      <div className="row hero-content">
        <div className="column large-full hero-content__text">
          <h1>
            Enforcing The <br />
            Supremacy Of Christ <br />
            Over All!
          </h1>

          <div className="hero-content__buttons">
            <Link to="/events" className="btn btn--stroke">Revival Meetings</Link>
            <Link to="/the-set-man" className="btn btn--stroke">The Set Man</Link>
          </div>
        </div>
      </div>

      <ul className="hero-social">
        <li className="hero-social__title">Follow Us</li>
        <li>
          <a href="https://web.facebook.com/evansmozurunyemministries" target="_blank" rel="noopener noreferrer" title="Facebook">Facebook</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer" title="YouTube">YouTube</a>
        </li>
        <li>
          <a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer" title="Official Website">Website</a>
        </li>
      </ul>

      <div className="hero-scroll">
        <a href="#about" className="scroll-link smoothscroll" onClick={scrollToAbout}>
          Scroll For More
        </a>
      </div>
    </section>
  );
};

export default Hero;
