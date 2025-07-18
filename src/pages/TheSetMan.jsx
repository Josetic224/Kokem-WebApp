import SEO from '../components/SEO';

const TheSetMan = () => {
  return (
    <>
      <SEO
        title="The Set Man - Pastor Evans Mozurunyem"
        description="Meet Pastor Evans Mozurunyem, General Overseer of King of Kings Evangelical Ministries International. A man called by God to enforce the supremacy of Christ over all."
        url={`${window.location.origin}/the-set-man`}
      />
      
      {/* Page Header */}
      <section className="s-pageheader">
        <div className="row">
          <div className="column large-full">
            <h1 className="page-header__title">
              The Set Man
            </h1>
            <p className="page-header__text">
              Pastor Evans Mozurunyem - General Overseer
            </p>
          </div>
        </div>
      </section>

      {/* Pastor Profile Section */}
      <section className="s-content">
        <div className="row">
          <div className="column large-8 medium-full">
            <article className="pastor-profile">
              <div className="pastor-profile__image">
                <img 
                  src="/images/pastor-evans.jpg" 
                  alt="Pastor Evans Mozurunyem"
                  onError={(e) => {
                    e.target.src = '/images/sample-image.jpg';
                  }}
                />
              </div>

              <div className="pastor-profile__content">
                <h2>Pastor Evans Mozurunyem</h2>
                <h3>General Overseer, King of Kings Evangelical Ministries International</h3>

                <p className="lead">
                  Pastor Evans Mozurunyem is a man called by God to enforce the supremacy of Christ over all. 
                  As the General Overseer of King of Kings Evangelical Ministries International (KOKEM), 
                  he has dedicated his life to preaching Christ to all nations and delivering souls from spiritual captivity.
                </p>

                <h4>Ministry Background</h4>
                <p>
                  Founded in August 1997, King of Kings Evangelical Ministries International has grown under 
                  Pastor Evans' leadership to become a powerful force for the Kingdom of God. With over 3,000 
                  members, the ministry continues to impact lives through powerful revival meetings, miracles, 
                  and supernatural testimonies.
                </p>

                <h4>Vision & Mission</h4>
                <p>
                  Pastor Evans carries a divine mandate to:
                </p>
                <ul>
                  <li>Preach Christ to all nations</li>
                  <li>Deliver souls from spiritual captivity</li>
                  <li>Enforce Christ's victory over the powers of darkness</li>
                  <li>Raise Spirit-filled believers who will impact their communities</li>
                  <li>Demonstrate the love and truth of God through practical service</li>
                </ul>

                <h4>Ministry Focus</h4>
                <p>
                  Under Pastor Evans' leadership, KOKEM specializes in:
                </p>
                <ul>
                  <li><strong>Revival Meetings:</strong> Powerful gatherings that bring spiritual awakening</li>
                  <li><strong>Deliverance Ministry:</strong> Setting captives free from spiritual bondage</li>
                  <li><strong>Healing Services:</strong> Demonstrating God's power through miraculous healings</li>
                  <li><strong>Prophetic Ministry:</strong> Speaking God's word with accuracy and power</li>
                  <li><strong>Community Outreach:</strong> Serving the community with love and compassion</li>
                </ul>

                <h4>Core Message</h4>
                <p>
                  Pastor Evans' central message revolves around the supremacy of Christ over all things. 
                  He teaches believers to understand their identity in Christ and to speak with the 
                  authority that comes from being children of God. His powerful teaching on "You Are a God, 
                  Speak Like One" has transformed countless lives and empowered believers to walk in their 
                  divine calling.
                </p>

                <h4>Personal Life</h4>
                <p>
                  Pastor Evans is a devoted family man who exemplifies the principles he teaches. 
                  His life is a testament to the transforming power of God's grace and the importance 
                  of living with integrity, respect, and unwavering faith.
                </p>

                <h4>Contact & Ministry Location</h4>
                <p>
                  King of Kings Evangelical Ministries International is located at Km 15 Badagry Expressway, 
                  opposite Trade Fair Complex, Abule Osun, Lagos, Nigeria. The ministry welcomes all who 
                  seek to experience the power and love of God.
                </p>

                <div className="pastor-profile__quote">
                  <blockquote>
                    "We are called to enforce the supremacy of Christ over all. Every believer must 
                    understand their divine nature and speak with the authority that comes from being 
                    children of the Most High God."
                    <cite>- Pastor Evans Mozurunyem</cite>
                  </blockquote>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="column large-4 medium-full">
            <div className="sidebar">
              <div className="sidebar-widget">
                <h4>Ministry Information</h4>
                <ul className="ministry-info">
                  <li><strong>Founded:</strong> August 1997</li>
                  <li><strong>Members:</strong> 3,000+</li>
                  <li><strong>Location:</strong> Lagos, Nigeria</li>
                  <li><strong>Focus:</strong> Revival & Deliverance</li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Service Times</h4>
                <ul className="service-times">
                  <li><strong>Sunday Service:</strong><br />8:00 AM | 10:00 AM | 6:00 PM</li>
                  <li><strong>Revival Meetings:</strong><br />Wednesday 6:00 PM</li>
                  <li><strong>Prayer & Fasting:</strong><br />Friday 6:00 AM | 6:00 PM</li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Connect With Pastor Evans</h4>
                <ul className="social-links">
                  <li><a href="https://web.facebook.com/evansmozurunyemministries" target="_blank" rel="noopener noreferrer">Facebook Ministry Page</a></li>
                  <li><a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer">YouTube Channel</a></li>
                  <li><a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer">Official Website</a></li>
                </ul>
              </div>

              <div className="sidebar-widget">
                <h4>Ministry Contact</h4>
                <div className="contact-info">
                  <p><strong>Phone:</strong> +234 803 268 8535</p>
                  <p><strong>Email:</strong> info@kokemfamily.top</p>
                  <p><strong>Address:</strong><br />
                    Km 15 Badagry Expressway<br />
                    Opposite Trade Fair Complex<br />
                    Abule Osun, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheSetMan;
