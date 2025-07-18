const EventsSection = () => {
  const services = [
    {
      id: 1,
      title: "Monday — High Tension",
      description: "A day of intense spiritual warfare and intercession. Fasting, Prayer Vigil where we engage in powerful spiritual warfare against the forces of darkness.",
      date: "Every Monday",
      time: "10:00 PM - Till Dawn",
      location: "Km 15 Badagry Expressway, Lagos",
      featuredImage: "/images/highTension.jpg"
    },
    {
      id: 2,
      title: "Wednesday — Covenant Hour of Breakthrough",
      description: "Deliverance & Counseling Service anointed for breakthroughs, healing, and personal deliverance. Come with expectation. Leave with a testimony.",
      date: "Every Wednesday",
      time: "9:00 AM - 12:00 NOON",
      location: "Km 15 Badagry Expressway, Lagos",
      featuredImage: "/images/communion.jpg"
    },
    {
      id: 3,
      title: "Sunday — Worship Encounter",
      description: "A full worship experience in God's presence, beginning with deep Bible teaching. Bible Study + Worship Service where we dive deep into God's Word.",
      date: "Every Sunday",
      time: "Bible Study: 8:00 AM - 9:00 AM | Main Service: 9:00 AM - 11:30 AM",
      location: "Km 15 Badagry Expressway, Lagos",
      featuredImage: "/images/sunday.jpg"
    }
  ];

  return (
    <section className="s-events">
      <div className="row events-header">
        <div className="column">
          <h2 className="subhead">Our Weekly Services</h2>
          <p>Weekly services filled with God's power, prayer, deliverance & Holy Spirit encounters</p>
        </div>
      </div>

      <div className="row block-large-1-2 block-900-full events-list">
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
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
