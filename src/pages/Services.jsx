import SEO from '../components/SEO';

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services - KOKEM"
        description="Join us for powerful worship services, revival meetings, prayer sessions, and deliverance services at King of Kings Evangelical Ministries International."
        url={`${window.location.origin}/services`}
      />

      {/* Page Header */}
      <section className="page-header page-header--events">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>Our Services</h1>
            <p>Experience the Power of God in Every Service</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <div className="intro-text">
              <p className="lead">
                At <strong>King of Kings Evangelical Ministries International</strong>, our services are filled with the power of God's Word, fervent prayer, deliverance, and deep encounters with the Holy Spirit. Join us as we enforce the supremacy of Christ over all!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column large-12">
            <h2>Weekly Services</h2>
            
            <div className="events-list">
              <div className="events-list__item">
                <div className="events-list__date">
                  <span>Sunday</span>
                </div>
                <div className="events-list__content">
                  <h4 className="events-list__title">Sunday Worship Service</h4>
                  <p className="events-list__desc">
                    Join us for powerful worship, life-changing messages, and supernatural encounters with God. 
                    Experience the presence of the Holy Spirit as we gather to worship and receive from God's Word.
                  </p>
                  <ul className="events-list__meta">
                    <li className="events-list__meta-date">8:00 AM | 10:00 AM | 6:00 PM</li>
                    <li className="events-list__meta-loc">Km 15 Badagry Expressway, Lagos</li>
                  </ul>
                </div>
              </div>

              <div className="events-list__item">
                <div className="events-list__date">
                  <span>Wednesday</span>
                </div>
                <div className="events-list__content">
                  <h4 className="events-list__title">Revival Meetings</h4>
                  <p className="events-list__desc">
                    Powerful midweek revival meetings featuring deliverance ministry, healing services, and 
                    prophetic ministry. Come expecting miracles, breakthroughs, and supernatural testimonies.
                  </p>
                  <ul className="events-list__meta">
                    <li className="events-list__meta-date">6:00 PM</li>
                    <li className="events-list__meta-loc">Main Sanctuary</li>
                  </ul>
                </div>
              </div>

              <div className="events-list__item">
                <div className="events-list__date">
                  <span>Friday</span>
                </div>
                <div className="events-list__content">
                  <h4 className="events-list__title">Prayer & Fasting</h4>
                  <p className="events-list__desc">
                    Intensive prayer sessions and spiritual warfare meetings. Join us as we engage in powerful 
                    intercession, fasting, and breakthrough prayers that move mountains and change situations.
                  </p>
                  <ul className="events-list__meta">
                    <li className="events-list__meta-date">6:00 AM | 6:00 PM</li>
                    <li className="events-list__meta-loc">Prayer Hall</li>
                  </ul>
                </div>
              </div>
            </div>

            <br />

            <h2>Special Services</h2>
            
            <div className="events-list">
              <div className="events-list__item">
                <div className="events-list__date">
                  <span>Monthly</span>
                </div>
                <div className="events-list__content">
                  <h4 className="events-list__title">Deliverance Crusades</h4>
                  <p className="events-list__desc">
                    Special deliverance crusades where captives are set free from spiritual bondage, 
                    generational curses are broken, and families are restored through the power of Christ.
                  </p>
                  <ul className="events-list__meta">
                    <li className="events-list__meta-date">Last Sunday of Every Month</li>
                    <li className="events-list__meta-loc">Main Auditorium</li>
                  </ul>
                </div>
              </div>

              <div className="events-list__item">
                <div className="events-list__date">
                  <span>Quarterly</span>
                </div>
                <div className="events-list__content">
                  <h4 className="events-list__title">Healing Services</h4>
                  <p className="events-list__desc">
                    Special healing services where the sick are healed, the lame walk, and miracles manifest. 
                    Come with faith and expectation for your supernatural breakthrough.
                  </p>
                  <ul className="events-list__meta">
                    <li className="events-list__meta-date">Every 3rd Month</li>
                    <li className="events-list__meta-loc">Main Sanctuary</li>
                  </ul>
                </div>
              </div>

              <div className="events-list__item">
                <div className="events-list__date">
                  <span>Annual</span>
                </div>
                <div className="events-list__content">
                  <h4 className="events-list__title">KOKEM Convention</h4>
                  <p className="events-list__desc">
                    Our annual convention featuring powerful teachings, prophetic ministry, and supernatural 
                    encounters. Join believers from across Nigeria for this life-changing experience.
                  </p>
                  <ul className="events-list__meta">
                    <li className="events-list__meta-date">December</li>
                    <li className="events-list__meta-loc">Convention Center</li>
                  </ul>
                </div>
              </div>
            </div>

            <br />

            <div className="row">
              <div className="column large-6">
                <h3>What to Expect</h3>
                <ul>
                  <li><strong>Powerful Worship:</strong> Spirit-filled worship that ushers in God's presence</li>
                  <li><strong>Life-Changing Messages:</strong> Biblical teachings that transform lives</li>
                  <li><strong>Prayer Ministry:</strong> Personal prayer and ministry after services</li>
                  <li><strong>Deliverance:</strong> Freedom from spiritual bondage and oppression</li>
                  <li><strong>Healing:</strong> Divine healing and miraculous testimonies</li>
                  <li><strong>Fellowship:</strong> Warm community of Spirit-filled believers</li>
                </ul>
              </div>
              <div className="column large-6">
                <h3>Service Information</h3>
                <p>
                  <strong>Location:</strong><br />
                  Km 15 Badagry Expressway<br />
                  Lagos, Nigeria
                </p>
                <p>
                  <strong>Contact:</strong><br />
                  Phone: +234 (0) 123 456 7890<br />
                  Email: info@kokem.org
                </p>
                <p>
                  <strong>Parking:</strong><br />
                  Free parking available on-site
                </p>
                <p>
                  <strong>Childcare:</strong><br />
                  Children's ministry available during all services
                </p>
              </div>
            </div>

            <br />

            <div className="text-center">
              <h3>Join Us This Week!</h3>
              <p>
                Come as you are and experience the supernatural power of God. Every service is an opportunity 
                for breakthrough, healing, and transformation. We can't wait to see you!
              </p>
              <a href="/contact" className="btn btn--primary">Get Directions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
