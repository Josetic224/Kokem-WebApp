const SocialSection = () => {
  return (
    <section className="s-social">
      <div className="row social-content">
        <div className="column">
          <ul className="social-list">
            <li className="social-list__item">
              <a href="https://web.facebook.com/evansmozurunyemministries" target="_blank" rel="noopener noreferrer" title="Follow KOKEM on Facebook">
                <span className="social-list__icon social-list__icon--facebook"></span>
                <span className="social-list__text">Facebook</span>
              </a>
            </li>
            <li className="social-list__item">
              <a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer" title="Subscribe to Pastor Evans on YouTube">
                <span className="social-list__icon social-list__icon--youtube"></span>
                <span className="social-list__text">YouTube</span>
              </a>
            </li>
            <li className="social-list__item">
              <a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer" title="Visit KOKEM Official Website">
                <span className="social-list__icon social-list__icon--website"></span>
                <span className="social-list__text">Website</span>
              </a>
            </li>
            <li className="social-list__item">
              <a href="mailto:info@kokemfamily.top" title="Email KOKEM">
                <span className="social-list__icon social-list__icon--email"></span>
                <span className="social-list__text">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
