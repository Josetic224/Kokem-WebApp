import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { formatDate } from '../data/blogData';
import useBlogStore from '../stores/blogStore';
import SEO from '../components/SEO';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getPostBySlug, getRecentPosts } = useBlogStore();
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundPost = getPostBySlug(slug);

    if (!foundPost) {
      navigate('/blog', { replace: true });
      return;
    }

    setPost(foundPost);

    // Get recent posts excluding current post
    const recent = getRecentPosts(4).filter(p => p.id !== foundPost.id).slice(0, 3);
    setRecentPosts(recent);

    setLoading(false);
  }, [slug, navigate, getPostBySlug, getRecentPosts]);

  useEffect(() => {
    // Update page title and meta description
    if (post) {
      document.title = `${post.title} | Hesed Church Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    }

    return () => {
      // Reset title when component unmounts
      document.title = 'Hesed';
    };
  }, [post]);

  if (loading) {
    return (
      <div className="blog-post-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        image={post.featuredImage}
        type="article"
        author={post.author.name}
        publishedTime={post.publishedAt}
        tags={post.tags}
        url={`${window.location.origin}/blog/${post.slug}`}
      />

      {/* Blog Post Header */}
      <section className="blog-post-header">
        <div className="gradient-overlay"></div>
        <div className="row blog-post-header__content">
          <div className="column">
            <nav className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb__separator">→</span>
              <Link to="/blog">Blog</Link>
              <span className="breadcrumb__separator">→</span>
              <span className="breadcrumb__current">{post.title}</span>
            </nav>
            
            <div className="blog-post-header__meta">
              <div className="blog-post-categories">
                {post.categories.map((category, index) => (
                  <span key={index} className="blog-post-category">
                    {category}
                  </span>
                ))}
              </div>
              <span className="blog-post-date">
                {formatDate(post.publishedAt)}
              </span>
            </div>
            
            <h1 className="blog-post-title">{post.title}</h1>
            
            <div className="blog-post-author">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="blog-post-author__avatar"
                loading="lazy"
                onError={(e) => {
                  e.target.src = '/images/avatars/user-01.jpg';
                }}
              />
              <div className="blog-post-author__info">
                <span className="blog-post-author__name">By {post.author.name}</span>
                <span className="blog-post-author__date">{formatDate(post.publishedAt)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="blog-post-content">
        <div className="row">
          <div className="column large-8 medium-full">
            <article className="blog-post-article">
              {post.featuredImage && (
                <div className="blog-post-featured-image">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/images/sample-image.jpg';
                    }}
                  />
                </div>
              )}
              
              <div className="blog-post-excerpt">
                <p className="lead">{post.excerpt}</p>
              </div>
              
              <div 
                className="blog-post-body"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="blog-post-tags">
                <h4>Tags:</h4>
                <div className="tag-list">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="blog-post-navigation">
                <Link to="/blog" className="btn btn--primary">
                  ← Back to Blog
                </Link>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="column large-4 medium-full">
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="recent-posts">
                  {recentPosts.map(recentPost => (
                    <article key={recentPost.id} className="recent-post">
                      <div className="recent-post__image">
                        <Link to={`/blog/${recentPost.slug}`}>
                          <img
                            src={recentPost.featuredImage}
                            alt={recentPost.title}
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = '/images/sample-image.jpg';
                            }}
                          />
                        </Link>
                      </div>
                      <div className="recent-post__content">
                        <h4 className="recent-post__title">
                          <Link to={`/blog/${recentPost.slug}`}>
                            {recentPost.title}
                          </Link>
                        </h4>
                        <span className="recent-post__date">
                          {formatDate(recentPost.publishedAt)}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              
              <div className="sidebar-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="category-list">
                  {[...new Set(post.categories)].map((category, index) => (
                    <li key={index}>
                      <Link to={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
