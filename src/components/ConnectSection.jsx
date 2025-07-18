import { Link } from 'react-router-dom';

const ConnectSection = () => {
  return (
    <section className="s-connect">
      <div className="row connect-content">
        <div className="column large-half tab-full">
          <h3 className="display-1">Join KOKEM Ministry</h3>
          <p>
            Be part of God's army at KOKEM! We need dedicated believers who
            understand their divine authority to serve in various ministry areas.
            Whether in deliverance ministry, prayer warfare, worship, youth ministry,
            or community outreach, there's a place for you to use your gifts and
            calling. Join us in enforcing the supremacy of Christ over all through
            powerful ministry and supernatural service.
          </p>

          <Link to="/volunteer" className="btn btn--primary h-full-width">Join the Ministry</Link>
        </div>
        <div className="column large-half tab-full">
          <h3 className="display-1">Fellowship Groups</h3>
          <p>
            Connect with other Spirit-filled believers in our fellowship groups
            throughout Lagos. Experience community, spiritual growth, and breakthrough
            together as we study God's Word, engage in spiritual warfare, and support
            one another in our divine calling. Our groups meet regularly for prayer,
            Bible study, and fellowship that will strengthen your faith and empower
            your walk with God.
          </p>

          <Link to="/connect-group" className="btn btn--primary h-full-width">Join a Group</Link>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
