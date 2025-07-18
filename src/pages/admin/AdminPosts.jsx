import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../data/blogData';
import useBlogStore from '../../stores/blogStore';

const AdminPosts = () => {
  const { posts, deletePost, searchPosts } = useBlogStore();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  useEffect(() => {
    let filtered = posts;

    // Filter by status
    if (filter !== 'all') {
      filtered = filtered.filter(post => post.status === filter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = searchPosts(searchTerm);
      if (filter !== 'all') {
        filtered = filtered.filter(post => post.status === filter);
      }
    }

    setFilteredPosts(filtered);
  }, [posts, filter, searchTerm, searchPosts]);

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePost(postId);
      console.log('Post deleted:', postId);
    }
  };

  const getStatusCount = (status) => {
    if (status === 'all') return posts.length;
    return posts.filter(post => post.status === status).length;
  };

  return (
    <div className="admin-posts">
      <div className="admin-posts__header">
        <div className="admin-posts__title">
          <h1>Blog Posts</h1>
          <p>Manage your blog content</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={() => window.location.reload()}
            className="btn btn--stroke"
            title="Refresh posts"
          >
            🔄 Refresh
          </button>
          <Link to="/admin/posts/new" className="btn btn--primary">
            ➕ New Post
          </Link>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="admin-posts__filters">
        <div className="admin-filter-tabs">
          <button
            className={`admin-filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({getStatusCount('all')})
          </button>
          <button
            className={`admin-filter-tab ${filter === 'published' ? 'active' : ''}`}
            onClick={() => setFilter('published')}
          >
            Published ({getStatusCount('published')})
          </button>
          <button
            className={`admin-filter-tab ${filter === 'draft' ? 'active' : ''}`}
            onClick={() => setFilter('draft')}
          >
            Drafts ({getStatusCount('draft')})
          </button>
        </div>

        <div className="admin-search">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="admin-search__input"
          />
        </div>
      </div>

      {/* Posts Table */}
      <div className="admin-posts__table">
        {filteredPosts.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Post</th>
                <th>Author</th>
                <th>Categories</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map(post => (
                <tr key={post.id}>
                  <td>
                    <div className="admin-post-info">
                      <div className="admin-post-thumbnail">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          onError={(e) => {
                            e.target.src = '/images/sample-image.jpg';
                          }}
                        />
                      </div>
                      <div className="admin-post-details">
                        <h3 className="admin-post-title">{post.title}</h3>
                        <p className="admin-post-excerpt">
                          {post.excerpt.substring(0, 100)}...
                        </p>
                      </div>
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
                    <div className="admin-post-categories">
                      {post.categories.slice(0, 2).map((category, index) => (
                        <span key={index} className="admin-category-tag">
                          {category}
                        </span>
                      ))}
                      {post.categories.length > 2 && (
                        <span className="admin-category-more">
                          +{post.categories.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status admin-status--${post.status}`}>
                      {post.status}
                    </span>
                  </td>
                  <td>
                    <div className="admin-post-date">
                      <div>{formatDate(post.publishedAt)}</div>
                      <small>{new Date(post.publishedAt).toLocaleTimeString()}</small>
                    </div>
                  </td>
                  <td>
                    <div className="admin-post-actions">
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="admin-action-btn admin-action-btn--view"
                        title="View Post"
                        target="_blank"
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
                      <button 
                        onClick={() => handleDelete(post.id)}
                        className="admin-action-btn admin-action-btn--delete"
                        title="Delete Post"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="admin-no-posts">
            <h3>No posts found</h3>
            <p>
              {searchTerm 
                ? `No posts match your search for "${searchTerm}"`
                : `No ${filter === 'all' ? '' : filter} posts found`
              }
            </p>
            {filter === 'all' && !searchTerm && (
              <Link to="/admin/posts/new" className="btn btn--primary">
                Create Your First Post
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPosts;
