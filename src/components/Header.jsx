import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      const toggleButton = document.querySelector('.header-menu-toggle');
      if (toggleButton) {
        const isVisible = window.getComputedStyle(toggleButton).display !== 'none';
        setIsMobile(isVisible);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = () => {
    if (isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const isCurrentPage = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="s-header">
      <div className="header-logo">
        <Link className="site-logo" to="/">
          <img
            src="/images/kokem.png"
            alt="KOKEM - King of Kings Evangelical Ministries International"
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
              fontSize: '1.2rem',
              padding: '0.5rem'
            }}
          >
            KOKEM
          </div>
        </Link>
      </div>

      <nav className={`header-nav-wrap ${isMobile ? 'mobile' : ''}`} style={{
        display: isMobile && !isMobileMenuOpen ? 'none' : 'block'
      }}>
        <ul className="header-nav">
          <li className={isCurrentPage('/') ? 'current' : ''}>
            <Link to="/" title="Home" onClick={handleNavClick}>Home</Link>
          </li>
          <li className={isCurrentPage('/about') ? 'current' : ''}>
            <Link to="/about" title="About" onClick={handleNavClick}>About</Link>
          </li>
          <li className={isCurrentPage('/setman') ? 'current' : ''}>
            <Link to="/setman" title="The Set Man" onClick={handleNavClick}>The Set Man</Link>
          </li>
          <li className={isCurrentPage('/services') ? 'current' : ''}>
            <Link to="/services" title="Our Services" onClick={handleNavClick}>Services</Link>
          </li>
          <li className={location.pathname.startsWith('/blog') ? 'current' : ''}>
            <Link to="/blog" title="Blog" onClick={handleNavClick}>Blog</Link>
          </li>
          <li className={isCurrentPage('/contact') ? 'current' : ''}>
            <Link to="/contact" title="Contact us" onClick={handleNavClick}>Contact</Link>
          </li>
        </ul>
      </nav>

      <a
        className={`header-menu-toggle ${isMobileMenuOpen ? 'is-clicked' : ''}`}
        href="#0"
        onClick={(e) => {
          e.preventDefault();
          toggleMobileMenu();
        }}
      >
        <span>Menu</span>
      </a>
    </header>
  );
};

export default Header;
