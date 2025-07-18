import { Link } from 'react-router-dom';
import useSmoothScroll from '../hooks/useSmoothScroll';
import useBackToTop from '../hooks/useBackToTop';

const Footer = () => {
  const { scrollToTop } = useSmoothScroll();
  const isBackToTopVisible = useBackToTop(500);

  const handleScrollToTop = (e) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <footer className="s-footer">
      <div className="row footer-top">
        <div className="column large-4 medium-5 tab-full">
          <div className="footer-logo">
            <Link className="site-footer-logo" to="/">
              <img
                src="/images/kokem.png"
                alt="KOKEM"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div
                style={{
                  display: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  padding: '1rem'
                }}
              >
                KOKEM
              </div>
            </Link>
          </div>
          <p>
            King of Kings Evangelical Ministries International - Enforcing the Supremacy of Christ Over All!
            Join us for powerful revival meetings, miracles, and supernatural testimonies.
            We are committed to preaching Christ to all nations and delivering souls from spiritual captivity.
          </p>
        </div>
        <div className="column large-half tab-full">
          <div className="row">
            <div className="column large-7 medium-full">
              <h4 className="h6">Our Location</h4>
              <p>
                Km 15 Badagry Expressway <br />
                Opposite Trade Fair Complex <br />
                Abule Osun, Lagos, Nigeria
              </p>
              <p>
                <strong>Phone:</strong> +234 803 268 8535<br />
                <strong>Email:</strong> info@kokemfamily.top
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=Km+15+Badagry+Expressway+Lagos+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--footer"
                >
                  Get Direction
                </a>
              </p>
            </div>
            <div className="column large-5 medium-full">
              <h4 className="h6">Quick Links</h4>
              <ul className="footer-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/the-set-man">The Set Man</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/events">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/admin/login" style={{color: '#1E40AF', fontSize: '1.2rem'}}>🔐 Admin</Link></li>
              </ul>

              <h4 className="h6" style={{marginTop: '2rem'}}>Connect With Us</h4>
              <ul className="footer-list">
                <li><a href="https://web.facebook.com/evansmozurunyemministries" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                <li><a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row footer-bottom">
        <div className="column ss-copyright">
          <span>© Copyright KOKEM {new Date().getFullYear()}</span>
          <span>King of Kings Evangelical Ministries International</span>
        </div>
      </div>

      <div className={`ss-go-top ${isBackToTopVisible ? 'link-is-visible' : ''}`}>
        <a
          className="smoothscroll"
          title="Back to Top"
          href="#top"
          onClick={handleScrollToTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 0l8 9h-6v15h-4v-15h-6z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
