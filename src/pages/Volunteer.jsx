import SEO from '../components/SEO';

const Volunteer = () => {
  const ministries = [
    {
      title: "Deliverance Ministry Team",
      description: "Join our powerful deliverance ministry team and be part of setting captives free from spiritual bondage. This ministry requires individuals who are spiritually mature, committed to prayer and fasting, and have a heart for seeing people delivered from demonic oppression. Training is provided under Pastor Evans' guidance."
    },
    {
      title: "Prayer Warriors",
      description: "Become part of our dedicated prayer team that intercedes for the ministry, our members, and the nations. Prayer warriors participate in our Friday prayer and fasting sessions, early morning prayer meetings, and special intercession for revival meetings. This is the backbone of our ministry's supernatural power."
    },
    {
      title: "Worship & Music Ministry",
      description: "Use your musical talents to usher in God's presence during our revival meetings and services. We need singers, instrumentalists, and worship leaders who understand the power of anointed worship to create an atmosphere for miracles and breakthrough. Must be Spirit-filled and committed to excellence."
    },
    {
      title: "Youth & Children's Ministry",
      description: "Help raise the next generation of Spirit-filled believers who understand their divine authority in Christ. This ministry focuses on teaching children and youth about their identity in Christ and empowering them to walk in supernatural power. Background check required for all children's ministry volunteers."
    },
    {
      title: "Ushering & Protocol",
      description: "Serve as the welcoming face of KOKEM by helping to create an atmosphere of order and reverence during our services. Ushers assist with seating, offering collection, and maintaining the flow of our revival meetings. This role requires individuals who are mature, reliable, and have a servant's heart."
    },
    {
      title: "Media & Communications",
      description: "Help spread the message of KOKEM through social media, website management, video production, and live streaming of our services. We need individuals with skills in photography, videography, social media management, and content creation to help us reach more souls for Christ."
    },
    {
      title: "Community Outreach",
      description: "Be part of our mission to impact the Lagos community with God's love through practical service and evangelism. This ministry organizes community service projects, evangelistic outreaches, and assistance programs for the needy. Heart for the lost and compassion for the hurting required."
    },
    {
      title: "Administrative Support",
      description: "Support the ministry's operations through various administrative tasks including event coordination, member care, data management, and general office support. This role requires individuals who are organized, detail-oriented, and committed to excellence in serving God's house."
    }
  ];

  return (
    <>
      <SEO
        title="Join KOKEM Ministry Team"
        description="Serve in KOKEM's powerful ministry. Join our deliverance team, prayer warriors, worship ministry, and community outreach. Be part of enforcing Christ's supremacy over all."
        url={`${window.location.origin}/volunteer`}
      />

      {/* Page Header */}
      <section className="page-header page-header--volunteer">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>Join KOKEM Ministry</h1>
            <p>Serve in the Army of God - Enforce the Supremacy of Christ</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            <p className="lead drop-cap">
              Nesciunt sit blanditiis dolor voluptatum est dignissimos et. Ut perferendis
              quis consequatur eos. Sed pariatur qui eum qui enim eum quam magni. Voluptatem
              nam quidem. Eveniet aut nulla nulla. Repellat nobis minus.
              Sunt et quis voluptas delectus ut soluta ipsum similique. Quia odit eos velit
              qui exercitationem nemo. Rerum eveniet molestiae perferendis aliquam voluptates.
              Soluta harum distinctio sit itaque vel ut maxime. Quos debitis magnam eveniet molestiae perferendis.
            </p>

            <p>
              Molestias nostrum aliquid repudiandae et. Adipisci omnis dolores sint
              dignissimos quae deserunt recusandae mollitia ab. Sequi rem odio molestiae
              hic repellendus odit molestiae enim aut. Itaque omnis tenetur libero rerum
              vel impedit ut saepe. Aut deleniti ex omnis libero. Deleniti minus voluptatem
              reiciendis molestiae omnis voluptate voluptatem. In odio voluptatem error
              asperiores aut dolore. Deserunt ullam deleniti est aperiam.
            </p>

            <br />

            <h2>Volunteer With Us Through the Following Ministries</h2>

            <div className="row block-large-1-2 block-1000-full block-list">
              {ministries.map((ministry, index) => (
                <div key={index} className="column block-list__item">
                  <h4 className="block-list__title-with-num">{ministry.title}</h4>
                  <p>{ministry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Volunteer;
