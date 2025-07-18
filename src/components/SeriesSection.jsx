const SeriesSection = () => {
  return (
    <section className="s-series">
      <div 
        className="series-img" 
        style={{ backgroundImage: "url('/images/series-2000.jpg')" }}
      ></div>

      <div className="row row-y-center series-content">
        <div className="column large-half medium-full">
          <h3 className="subhead">Current Teaching Series</h3>
          <h2>You Are a God, Speak Like One</h2>
          <p>
            Discover your divine nature and authority in Christ through Pastor Evans Mozurunyem's
            powerful teaching series. Learn how to speak with the authority that comes from being
            a child of the Most High God. This life-transforming series will revolutionize how
            you see yourself and how you exercise your God-given authority over every situation.
          </p>
        </div>

        <div className="column large-half medium-full">
          <div className="series-content__buttons">
            <a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer" className="btn btn--large h-full-width">Watch on YouTube</a>
            <a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer" className="btn btn--large h-full-width">Visit Our Website</a>
          </div>

          <div className="series-content__subscribe">
            <p>
              Never miss a powerful message from Pastor Evans. Follow KOKEM on our social platforms.
            </p>

            <ul className="series-content__subscribe-links">
              <li className="ss-youtube"><a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li className="ss-facebook"><a href="https://web.facebook.com/evansmozurunyemministries" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="ss-website"><a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer">Website</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesSection;
