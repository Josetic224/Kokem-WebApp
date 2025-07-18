import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useBlogStore from '../../stores/blogStore';

const AdminDashboard = () => {
  const { getStats, getRecentPosts } = useBlogStore();
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0
  });
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    // Get stats from store
    setStats(getStats());

    // Get recent posts
    setRecentPosts(getRecentPosts(5));
  }, [getStats, getRecentPosts]);

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard__header">
        <h1>Dashboard</h1>
        <p>Welcome to your blog management dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-card__icon">📝</div>
          <div className="admin-stat-card__content">
            <h3>{stats.totalPosts}</h3>
            <p>Total Posts</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__icon">✅</div>
          <div className="admin-stat-card__content">
            <h3>{stats.publishedPosts}</h3>
            <p>Published</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__icon">📄</div>
          <div className="admin-stat-card__content">
            <h3>{stats.draftPosts}</h3>
            <p>Drafts</p>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-card__icon">👁️</div>
          <div className="admin-stat-card__content">
            <h3>{stats.totalViews.toLocaleString()}</h3>
            <p>Total Views</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="admin-quick-actions">
        <h2>Quick Actions</h2>
        <div className="admin-action-buttons">
          <Link to="/admin/posts/new" className="btn btn--primary">
            ➕ Create New Post
          </Link>
          <Link to="/admin/posts" className="btn btn--stroke">
            📝 Manage Posts
          </Link>
          <Link to="/blog" className="btn btn--stroke">
            🌐 View Blog
          </Link>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="admin-recent-posts">
        <div className="admin-section-header">
          <h2>Recent Posts</h2>
          <Link to="/admin/posts" className="admin-section-link">
            View All →
          </Link>
        </div>

        <div className="admin-posts-table">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Status</th>
                <th>Published</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map(post => (
                <tr key={post.id}>
                  <td>
                    <div className="admin-post-title">
                      <strong>{post.title}</strong>
                      <span className="admin-post-excerpt">
                        {post.excerpt.substring(0, 80)}...
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="admin-post-author">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name}
                        className="admin-author-avatar"
                      />
                      {post.author.name}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status admin-status--${post.status}`}>
                      {post.status}
                    </span>
                  </td>
                  <td>
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </td>
                  <td>
                    <div className="admin-post-actions">
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="admin-action-btn admin-action-btn--view"
                        title="View Post"
                      >
                        👁️
                      </Link>
                      <Link 
                        to={`/admin/posts/edit/${post.id}`} 
                        className="admin-action-btn admin-action-btn--edit"
                        title="Edit Post"
                      >
                        ✏️
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Info */}
      <div className="admin-system-info">
        <h2>System Information</h2>
        <div className="admin-info-grid">
          <div className="admin-info-item">
            <strong>Blog Version:</strong> 1.0.0
          </div>
          <div className="admin-info-item">
            <strong>Last Backup:</strong> {new Date().toLocaleDateString()}
          </div>
          <div className="admin-info-item">
            <strong>Storage Used:</strong> 2.3 GB / 10 GB
          </div>
          <div className="admin-info-item">
            <strong>Active Users:</strong> 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
