import { useState } from 'react';
import SEO from '../components/SEO';
import SocialSection from '../components/SocialSection';

const ConnectGroup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facebook: '',
    age: '',
    availability: '',
    comments: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Connect Group form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      facebook: '',
      age: '',
      availability: '',
      comments: ''
    });
  };

  return (
    <>
      <SEO
        title="KOKEM Fellowship Groups"
        description="Join a KOKEM fellowship group and connect with other Spirit-filled believers. Experience community, spiritual growth, and supernatural breakthrough together."
        url={`${window.location.origin}/connect-group`}
      />

      {/* Page Header */}
      <section className="page-header page-header--connect">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>KOKEM Fellowship Groups</h1>
            <p>Connect, Grow, and Experience Breakthrough Together</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <p className="lead drop-cap">
              At KOKEM, we believe in the power of fellowship and community. Our fellowship groups
              provide an intimate setting where believers can connect, grow spiritually, and
              experience breakthrough together. These groups are designed to help you develop
              deeper relationships with God and fellow believers while learning to walk in your
              divine authority as children of the Most High.
            </p>

            <p>
              Our fellowship groups meet regularly for prayer, Bible study, spiritual warfare,
              and mutual encouragement. Each group is led by trained leaders who understand
              the ministry's vision of enforcing the supremacy of Christ over all. Whether you're
              a new believer or mature in faith, there's a fellowship group that will help you
              grow and impact others with the love and power of God.
            </p>

            <br />

            <h2>Join a KOKEM Fellowship Group</h2>

            <p>
              Fill out the form below to help us connect you with a fellowship group that matches
              your needs and schedule. Our groups meet throughout Lagos and focus on different
              aspects of spiritual growth and ministry.
            </p>

            <form name="connectForm" id="connectForm" className="connectForm" onSubmit={handleSubmit} autoComplete="off">
              <fieldset>
                <div className="form-field">
                  <input
                    name="name"
                    id="cName"
                    className="h-full-width h-remove-bottom"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="email"
                    id="cEmail"
                    className="h-full-width h-remove-bottom"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="phone"
                    id="cPhone"
                    className="h-full-width h-remove-bottom"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="facebook"
                    id="cFacebook"
                    className="h-full-width h-remove-bottom"
                    placeholder="Facebook URL"
                    value={formData.facebook}
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="age"
                    id="cAge"
                    className="h-full-width h-remove-bottom"
                    placeholder="Your Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>

                <div className="form-field">
                  <input
                    name="availability"
                    id="cAvailability"
                    className="h-full-width h-remove-bottom"
                    placeholder="Availability (Day & Time)"
                    value={formData.availability}
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>

                <div className="comments form-field">
                  <textarea
                    name="comments"
                    id="cComments"
                    className="h-full-width h-remove-bottom"
                    placeholder="Comments & Questions"
                    value={formData.comments}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <br />

                <input
                  name="submit"
                  id="submit"
                  className="btn btn--primary btn--large h-full-width"
                  value="Get Connected"
                  type="submit"
                />
              </fieldset>
            </form>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <SocialSection />
    </>
  );
};

export default ConnectGroup;
