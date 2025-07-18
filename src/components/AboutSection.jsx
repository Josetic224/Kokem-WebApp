import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section id="about" className="s-about">
      <div className="row row-y-center about-content">
        <div className="column large-half medium-full">
          <h3 className="subhead">Welcome to KOKEM</h3>
          <p className="lead">
            King of Kings Evangelical Ministries International is a dynamic ministry
            founded in August 1997, dedicated to enforcing the supremacy of Christ over all.
            With over 3,000 members, we are committed to preaching Christ to all nations,
            delivering souls from spiritual captivity, and raising Spirit-filled believers
            who will impact their communities with the love and truth of God.
          </p>
          <Link to="/about" className="btn btn--primary btn--about">More About KOKEM</Link>
        </div>

        <div className="column large-half medium-full">
          <ul className="about-sched">
            <li>
              <h4>Sunday Service</h4>
              <p>
                Sunday - 8:00 AM | 10:00 AM | 6:00 PM <br />
                Km 15 Badagry Expressway, Lagos, Nigeria
              </p>
            </li>
            <li>
              <h4>Revival Meetings</h4>
              <p>
                Wednesday - 6:00 PM <br />
                Powerful deliverance and healing services
              </p>
            </li>
            <li>
              <h4>Prayer & Fasting</h4>
              <p>
                Friday - 6:00 AM | 6:00 PM <br />
                Spiritual warfare and breakthrough sessions
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
