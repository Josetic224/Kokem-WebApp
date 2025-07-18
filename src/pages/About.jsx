import SEO from '../components/SEO';

const About = () => {
  const values = [
    {
      title: "Supremacy of Christ",
      description: "We believe in enforcing the supremacy of Christ over all things. Every aspect of life, every challenge, and every situation must bow to the authority of Jesus Christ. This is the foundation of our ministry and the core of our message to the world."
    },
    {
      title: "Spiritual Empowerment",
      description: "We are committed to raising Spirit-filled believers who understand their divine nature and authority in Christ. Through our teaching 'You Are a God, Speak Like One,' we empower believers to walk in their God-given authority and make a lasting impact in their communities."
    },
    {
      title: "Revival & Deliverance",
      description: "Our ministry specializes in powerful revival meetings and deliverance services. We believe in the supernatural power of God to heal, deliver, and transform lives. Through prayer, fasting, and spiritual warfare, we see breakthrough and victory in every situation."
    },
    {
      title: "Community Impact",
      description: "We are dedicated to serving our community with love, truth, and practical assistance. Our goal is to demonstrate the love of Christ through our actions and to be a beacon of hope and transformation in Lagos, Nigeria, and beyond."
    }
  ];

  const beliefs = [
    {
      title: "The Authority of Scripture",
      description: "We believe in the absolute authority and infallibility of the Holy Bible as the Word of God. Scripture is our final authority in all matters of faith, doctrine, and Christian living. Every teaching and practice in our ministry is grounded in biblical truth."
    },
    {
      title: "The Power of Prayer",
      description: "We believe in the transformative power of prayer and intercession. Through prayer and fasting, we engage in spiritual warfare, break strongholds, and see supernatural breakthrough in every area of life. Prayer is the foundation of our ministry and the key to our success."
    },
    {
      title: "Divine Healing & Miracles",
      description: "We believe that God still performs miracles today. Divine healing, deliverance, and supernatural intervention are normal expressions of God's power in our ministry. We have witnessed countless testimonies of God's miraculous power transforming lives and situations."
    },
    {
      title: "The Great Commission",
      description: "We are committed to fulfilling the Great Commission by preaching Christ to all nations. Our mandate is to make disciples, baptize believers, and teach them to observe all that Christ has commanded. We are called to reach the unreached and impact the world for Christ."
    }
  ];

  return (
    <>
      <SEO
        title="About Us - King of Kings Evangelical Ministries International"
        description="Learn about KOKEM's history, mission, and vision. Founded in 1997 by Pastor Evans Mozurunyem, we are dedicated to enforcing the supremacy of Christ over all."
        url={`${window.location.origin}/about`}
      />

      {/* Page Header */}
      <section className="page-header page-header--about">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>About KOKEM</h1>
            <p>King of Kings Evangelical Ministries International</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <p className="lead drop-cap">
              King of Kings Evangelical Ministries International (KOKEM) was founded in August 1997
              with a divine mandate to enforce the supremacy of Christ over all. Under the leadership
              of Pastor Evans Mozurunyem, our ministry has grown to over 3,000 members and continues
              to impact lives through powerful revival meetings, miracles, and supernatural testimonies.
              We are committed to preaching Christ to all nations and delivering souls from spiritual captivity.
            </p>

            <div className="row">
              <div className="column large-half medium-full">
                <h2>Our Purpose</h2>
                <p>
                  Our primary purpose is to enforce the supremacy of Christ over all things.
                  We believe that Jesus Christ is Lord over every situation, every challenge,
                  and every aspect of life. Through our ministry, we demonstrate this truth
                  through powerful preaching, miraculous healings, and supernatural deliverances.
                </p>
                <p>
                  We exist to raise Spirit-filled believers who understand their divine nature
                  and authority in Christ. Our teaching empowers believers to speak with the
                  authority that comes from being children of the Most High God, transforming
                  their lives and communities.
                </p>
              </div>

              <div className="column large-half medium-full">
                <h2>Our Mission</h2>
                <p>
                  Our mission is to preach Christ to all nations, delivering souls from
                  spiritual captivity and enforcing Christ's victory over the powers of
                  darkness. We are committed to raising Spirit-filled believers who will
                  impact their communities with the love and truth of God.
                </p>
                <p>
                  Through revival meetings, deliverance services, and community outreach,
                  we demonstrate the supernatural power of God and the transforming love
                  of Jesus Christ. Our goal is to see lives transformed, families restored,
                  and communities impacted for the Kingdom of God.
                </p>
              </div>
            </div>

            <blockquote cite="http://where-i-got-my-info-from.com">
              <p>
                For God so loved the world, that he gave his only Son, that whoever believes in 
                him should not perish but have eternal life. For God did not send his Son into 
                the world to condemn the world, but in order that the world might be 
                saved through him.
              </p>
              <cite>
                <a href="#0">John 3:16-17 ESV</a>
              </cite>
            </blockquote>

            <br />

            <h2>Our Values.</h2>
            <div className="row block-large-1-2 block-1000-full block-list">
              {values.map((value, index) => (
                <div key={index} className="column block-list__item">
                  <h6>{value.title}</h6>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>

            <br />

            <h2>What We Believe.</h2>
            <div className="row block-large-1-2 block-1000-full block-list">
              {beliefs.map((belief, index) => (
                <div key={index} className="column block-list__item">
                  <h6>{belief.title}</h6>
                  <p>{belief.description}</p>
                </div>
              ))}
            </div>

            <br />

            <h2>Our Leadership</h2>
            <div className="row block-large-1-2 block-tab-full church-staff">
              <div className="column church-staff__item">
                <div className="church-staff__header">
                  <div className="church-staff__picture">
                    <img src="/images/pastor-evans.jpg" alt="Pastor Evans Mozurunyem" />
                  </div>
                  <h4 className="church-staff__name">
                    Pastor Evans Mozurunyem
                    <span className="church-staff__position">
                      General Overseer
                    </span>
                  </h4>
                </div>
                <p>
                  Pastor Evans Mozurunyem is the founder and General Overseer of King of Kings
                  Evangelical Ministries International. Called by God to enforce the supremacy
                  of Christ over all, he has led the ministry since its founding in August 1997.
                  His powerful teaching on divine authority and spiritual empowerment has
                  transformed thousands of lives.
                </p>
              </div>

              <div className="column church-staff__item">
                <div className="church-staff__header">
                  <div className="church-staff__picture">
                    <img src="/images/avatars/user-02.jpg" alt="Ministry Leadership" />
                  </div>
                  <h4 className="church-staff__name">
                    Ministry Leadership Team
                    <span className="church-staff__position">
                      Pastoral Care & Administration
                    </span>
                  </h4>
                </div>
                <p>
                  Our dedicated leadership team works alongside Pastor Evans to provide
                  pastoral care, administrative support, and ministry coordination. Together,
                  they ensure that every member of the KOKEM family receives the spiritual
                  guidance and support they need to grow in their faith and calling.
                </p>
              </div>

              <div className="column church-staff__item">
                <div className="church-staff__header">
                  <div className="church-staff__picture">
                    <img src="/images/avatars/user-03.jpg" alt="Deliverance Ministry Team" />
                  </div>
                  <h4 className="church-staff__name">
                    Deliverance Ministry Team
                    <span className="church-staff__position">
                      Spiritual Warfare & Healing
                    </span>
                  </h4>
                </div>
                <p>
                  Our specialized deliverance ministry team is trained in spiritual warfare
                  and divine healing. They work under Pastor Evans' guidance to minister to
                  those seeking freedom from spiritual bondage and to demonstrate God's
                  supernatural power through miraculous healings and deliverances.
                </p>
              </div>

              <div className="column church-staff__item">
                <div className="church-staff__header">
                  <div className="church-staff__picture">
                    <img src="/images/avatars/user-04.jpg" alt="Youth & Community Outreach" />
                  </div>
                  <h4 className="church-staff__name">
                    Youth & Outreach Ministry
                    <span className="church-staff__position">
                      Community Impact & Youth Development
                    </span>
                  </h4>
                </div>
                <p>
                  Our youth and community outreach ministry focuses on raising the next
                  generation of Spirit-filled believers and impacting the Lagos community
                  with God's love. Through various programs and initiatives, we demonstrate
                  the practical love of Christ while empowering young people to walk in
                  their divine calling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
