import SEO from '../components/SEO';

const Events = () => {
  const services = [
    {
      id: 1,
      title: "Monday — High Tension",
      description: "A day of intense spiritual warfare and intercession. Fasting, Prayer Vigil where we engage in powerful spiritual warfare against the forces of darkness. 'For the weapons of our warfare are not carnal...' - 2 Corinthians 10:4. Come prepared for an all-night encounter with God.",
      date: "Every Monday",
      time: "10:00 PM - Till Dawn",
      location: "Km 15 Badagry Expressway, Lagos, Nigeria",
      attendance: "In-person only",
      featuredImage: "/images/highTension.jpg",
      verse: "For the weapons of our warfare are not carnal... - 2 Corinthians 10:4"
    },
    {
      id: 2,
      title: "Wednesday — Covenant Hour of Breakthrough",
      description: "Deliverance & Counseling Service anointed for breakthroughs, healing, and personal deliverance. Come with expectation. Leave with a testimony. This service focuses on breaking spiritual bondages and receiving divine breakthrough in every area of your life.",
      date: "Every Wednesday",
      time: "9:00 AM - 12:00 NOON",
      location: "Km 15 Badagry Expressway, Lagos, Nigeria",
      attendance: "In-person and Online",
      featuredImage: "/images/communion.jpg",
      verse: "Come with expectation. Leave with a testimony."
    },
    {
      id: 3,
      title: "Sunday — Worship Encounter",
      description: "A full worship experience in God's presence, beginning with deep Bible teaching. Bible Study + Worship Service where we dive deep into God's Word and experience His manifest presence. A place for worship, Word, and wonders.",
      date: "Every Sunday",
      time: "Bible Study: 8:00 AM - 9:00 AM | Main Service: 9:00 AM - 11:30 AM",
      location: "Km 15 Badagry Expressway, Lagos, Nigeria",
      attendance: "In-person and Online",
      featuredImage: "/images/sunday.jpg",
      verse: "A place for worship, Word, and wonders."
    },
    {
      id: 4,
      title: "Special Revival Meetings",
      description: "Periodic special revival meetings where the supernatural power of God is demonstrated through miracles, signs, and wonders. These meetings are characterized by powerful deliverance, divine healing, and life-transforming encounters with the Holy Spirit.",
      date: "As Announced",
      time: "Various Times",
      location: "Km 15 Badagry Expressway, Lagos, Nigeria",
      attendance: "In-person and Online",
      featuredImage: "/images/blog/revival-meeting.jpg",
      verse: "And these signs shall follow them that believe... - Mark 16:17"
    },
    {
      id: 5,
      title: "Counseling & Deliverance Sessions",
      description: "Personal counseling and deliverance sessions with Pastor Evans Mozurunyem and trained ministry team. Individual attention for those seeking freedom from spiritual bondage, personal breakthrough, and divine guidance for life decisions.",
      date: "By Appointment",
      time: "Various Times",
      location: "Km 15 Badagry Expressway, Lagos, Nigeria",
      attendance: "In-person only",
      featuredImage: "/images/blog/counseling.jpg",
      verse: "And ye shall know the truth, and the truth shall make you free. - John 8:32"
    },
    {
      id: 6,
      title: "Prayer & Fasting Programs",
      description: "Corporate prayer and fasting programs designed to seek God's face for breakthrough, revival, and supernatural intervention. These intensive sessions combine fasting with fervent prayer for personal and corporate breakthroughs.",
      date: "Monthly",
      time: "Various Schedules",
      location: "Km 15 Badagry Expressway, Lagos, Nigeria",
      attendance: "In-person and Online",
      featuredImage: "/images/blog/prayer-fasting.jpg",
      verse: "This kind can come forth by nothing, but by prayer and fasting. - Mark 9:29"
    }
  ];

  return (
    <>
      <SEO
        title="Our Services - KOKEM Ministry Services"
        description="Discover KOKEM's powerful weekly services including Monday High Tension prayer vigils, Wednesday Covenant Hour of Breakthrough, and Sunday Worship Encounters in Lagos, Nigeria."
        url={`${window.location.origin}/events`}
      />

      {/* Page Header */}
      <section className="page-header page-header--events">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>Our Services</h1>
            <p>Weekly Services Filled with God's Power, Prayer, Deliverance & Holy Spirit Encounters</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <div className="intro-text">
              <p className="lead">
                At <strong>King of Kings Evangelical Ministries International</strong>, our weekly services are filled with the power of God's Word, fervent prayer, deliverance, and deep encounters with the Holy Spirit. Here's a breakdown of our regular church activities:
              </p>
            </div>
          </div>
        </div>

        <div className="row wide block-large-1-2 block-900-full events-list">
          {services.map((service) => (
            <div key={service.id} className="column events-list__item">
              {service.featuredImage && (
                <div className="service-image-container">
                  <img
                    src={service.featuredImage}
                    alt={service.title}
                    className="service-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3 className="display-1 events-list__item-title">
                <a href="#0" title="">{service.title}</a>
              </h3>
              <p>{service.description}</p>
              <ul className="events-list__meta">
                <li className="events-list__meta-date">{service.date}</li>
                <li className="events-list__meta-time">{service.time}</li>
                <li className="events-list__meta-location">{service.location}</li>
                {service.attendance && (
                  <li className="events-list__meta-attendance">📍 {service.attendance}</li>
                )}
              </ul>
              {service.verse && (
                <blockquote className="service-verse" style={{
                  fontStyle: 'italic',
                  color: '#1E40AF',
                  borderLeft: '3px solid #1E40AF',
                  paddingLeft: '1rem',
                  marginTop: '1rem'
                }}>
                  "{service.verse}"
                </blockquote>
              )}
            </div>
          ))}
        </div>

        <div className="row">
          <div className="column">
            <div className="contact-info" style={{
              textAlign: 'center',
              marginTop: '3rem',
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px'
            }}>
              <h3>Join Us for Our Services</h3>
              <p><strong>Location:</strong> Km 15 Badagry Expressway, Opposite Trade Fair Complex, Abule Osun, Lagos, Nigeria</p>
              <p><strong>Phone:</strong> +234 803 268 8535</p>
              <p><strong>Email:</strong> info@kokemfamily.top</p>
              <p style={{color: '#1E40AF', fontWeight: 'bold', marginTop: '1rem'}}>
                "Enforcing the Supremacy of Christ Over All!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
