import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../data/blogData';
import useBlogStore from '../stores/blogStore';
import SEO from '../components/SEO';

const Blog = () => {
  const { getPublishedPosts, getPostsByCategory, categories, posts: storePosts } = useBlogStore();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    // Get published posts from store
    const publishedPosts = getPublishedPosts();
    setPosts(publishedPosts);
    setFilteredPosts(publishedPosts);
  }, [getPublishedPosts, storePosts]); // Add storePosts as dependency to refresh when posts change

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredPosts(posts);
    } else {
      const filtered = getPostsByCategory(selectedCategory).filter(post => post.status === 'published');
      setFilteredPosts(filtered);
    }
    setCurrentPage(1); // Reset to first page when filtering
  }, [selectedCategory, posts, getPostsByCategory]);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleCategoryFilter = (categorySlug) => {
    setSelectedCategory(categorySlug);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Blog - KOKEM"
        description="Read powerful messages from Pastor Evans Mozurunyem and KOKEM. Discover spiritual empowerment, revival messages, and testimonies of God's supernatural power."
        url={`${window.location.origin}/blog`}
      />

      {/* Page Header */}
      <section className="page-header page-header--blog">
        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
          <div className="column">
            <h1>KOKEM Blog</h1>
            <p>Powerful messages, testimonies, and spiritual empowerment from Pastor Evans Mozurunyem</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="page-content">
        <div className="row">
          <div className="column">
            
            {/* Category Filter */}
            <div className="blog-filters">
              <h3>Categories</h3>
              <div className="category-buttons">
                <button 
                  className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => handleCategoryFilter('all')}
                >
                  All Posts
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.slug ? 'active' : ''}`}
                    onClick={() => handleCategoryFilter(category.slug)}
                    style={{ '--category-color': category.color }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="blog-grid">
              {currentPosts.length > 0 ? (
                currentPosts.map(post => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card__image">
                      <Link to={`/blog/${post.slug}`}>
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/images/sample-image.jpg';
                          }}
                        />
                      </Link>
                    </div>
                    
                    <div className="blog-card__content">
                      <div className="blog-card__meta">
                        <span className="blog-card__date">
                          {formatDate(post.publishedAt)}
                        </span>
                        <div className="blog-card__categories">
                          {post.categories.slice(0, 2).map((category, index) => (
                            <span key={index} className="blog-card__category">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <h2 className="blog-card__title">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      
                      <p className="blog-card__excerpt">{post.excerpt}</p>
                      
                      <div className="blog-card__author">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="blog-card__author-avatar"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/images/avatars/user-01.jpg';
                          }}
                        />
                        <span className="blog-card__author-name">
                          By {post.author.name}
                        </span>
                      </div>
                      
                      <Link to={`/blog/${post.slug}`} className="blog-card__read-more">
                        Read More →
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="no-posts">
                  <h3>No posts found</h3>
                  <p>There are no blog posts in this category yet.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="blog-pagination">
                <ul className="pagination">
                  {currentPage > 1 && (
                    <li>
                      <button 
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="pagination__prev"
                      >
                        ← Previous
                      </button>
                    </li>
                  )}
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <li key={pageNumber}>
                      <button
                        onClick={() => handlePageChange(pageNumber)}
                        className={`pagination__number ${currentPage === pageNumber ? 'active' : ''}`}
                      >
                        {pageNumber}
                      </button>
                    </li>
                  ))}
                  
                  {currentPage < totalPages && (
                    <li>
                      <button 
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="pagination__next"
                      >
                        Next →
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
