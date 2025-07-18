import { useState } from 'react';
import SEO from '../components/SEO';
import SocialSection from '../components/SocialSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
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
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      website: '',
      message: ''
    });
  };

  return (
    <>
      <SEO
        title="Contact Us - King of Kings Evangelical Ministries International"
        description="Get in touch with KOKEM. Visit us at Km 15 Badagry Expressway, Lagos, Nigeria. Join us for powerful revival meetings and experience God's supernatural power."
        url={`${window.location.origin}/contact`}
      />

      {/* Page Header */}
      <section className="page-header page-header--contact">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>Contact KOKEM</h1>
            <p>Get in touch with King of Kings Evangelical Ministries International</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <p className="lead drop-cap">
              We would love to hear from you! Whether you're seeking prayer, have questions
              about our ministry, or want to join our powerful revival meetings, we're here
              to help. King of Kings Evangelical Ministries International welcomes all who
              seek to experience the supernatural power of God and the transforming love of
              Jesus Christ.
            </p>

            <p>
              Located in the heart of Lagos, Nigeria, our ministry has been impacting lives
              since 1997. Join us for our regular services, revival meetings, and special
              events where miracles happen and lives are transformed. Contact us today to
              learn more about how you can be part of the KOKEM family.
            </p>

            <div className="row">
              <div className="column large-6 tab-full">
                <h3>Ministry Location</h3>
                <p>
                  Km 15 Badagry Expressway<br />
                  Opposite Trade Fair Complex<br />
                  Abule Osun, Lagos, Nigeria<br />
                  <strong>Service Times:</strong><br />
                  Sunday: 8:00 AM | 10:00 AM | 6:00 PM<br />
                  Wednesday: 6:00 PM (Revival)<br />
                  Friday: 6:00 AM | 6:00 PM (Prayer)
                </p>
              </div>

              <div className="column large-6 tab-full">
                <h3>Contact Information</h3>
                <p>
                  <strong>Phone:</strong> +234 803 268 8535<br />
                  <strong>Email:</strong> info@kokemfamily.top<br />
                  <strong>Website:</strong> <a href="https://kokemfamily.top" target="_blank" rel="noopener noreferrer">kokemfamily.top</a><br />
                  <strong>Facebook:</strong> <a href="https://web.facebook.com/evansmozurunyemministries" target="_blank" rel="noopener noreferrer">Evans Mozurunyem Ministries</a><br />
                  <strong>YouTube:</strong> <a href="https://www.youtube.com/@evansmozurunyem5037" target="_blank" rel="noopener noreferrer">Pastor Evans Mozurunyem</a>
                </p>
              </div>
            </div>

            <h2>Send Us a Message</h2>
            <p>We'd love to hear from you! Whether you need prayer, have questions about our ministry, or want to join our services, please reach out to us.</p>

            <form name="contactForm" id="contactForm" onSubmit={handleSubmit} autoComplete="off">
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
                    name="website"
                    id="cWebsite"
                    className="h-full-width h-remove-bottom"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleInputChange}
                    type="text"
                  />
                </div>

                <div className="message form-field">
                  <textarea
                    name="message"
                    id="cMessage"
                    className="h-full-width h-remove-bottom"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <br />

                <input
                  name="submit"
                  id="submit"
                  className="btn btn--primary btn-wide btn--large h-full-width"
                  value="Send Message"
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

export default Contact;
