import { useState, useEffect } from 'react';
import useBlogStore from '../../stores/blogStore';
import { downloadSitemap, downloadRobotsTxt, analyzeSEO } from '../../utils/sitemap';

const SEODashboard = () => {
  const { posts } = useBlogStore();
  const [seoAnalysis, setSeoAnalysis] = useState([]);
  const [overallStats, setOverallStats] = useState({
    averageScore: 0,
    excellentPosts: 0,
    goodPosts: 0,
    fairPosts: 0,
    poorPosts: 0
  });

  useEffect(() => {
    // Analyze SEO for all published posts
    const analysis = posts
      .filter(post => post.status === 'published')
      .map(post => ({
        ...post,
        seo: analyzeSEO(post.content, post.title, post.excerpt)
      }));

    setSeoAnalysis(analysis);

    // Calculate overall stats
    const scores = analysis.map(post => post.seo.score);
    const averageScore = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
    
    const stats = {
      averageScore: Math.round(averageScore),
      excellentPosts: analysis.filter(post => post.seo.score >= 80).length,
      goodPosts: analysis.filter(post => post.seo.score >= 60 && post.seo.score < 80).length,
      fairPosts: analysis.filter(post => post.seo.score >= 40 && post.seo.score < 60).length,
      poorPosts: analysis.filter(post => post.seo.score < 40).length
    };

    setOverallStats(stats);
  }, [posts]);

  const handleDownloadSitemap = () => {
    downloadSitemap(posts.filter(post => post.status === 'published'));
  };

  const handleDownloadRobotsTxt = () => {
    downloadRobotsTxt();
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#4caf50';
    if (score >= 60) return '#ff9800';
    if (score >= 40) return '#ff5722';
    return '#f44336';
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="seo-dashboard">
      <div className="seo-dashboard__header">
        <h1>SEO Dashboard</h1>
        <p>Monitor and improve your blog's search engine optimization</p>
      </div>

      {/* Overall Stats */}
      <div className="seo-stats">
        <div className="seo-stat-card">
          <div className="seo-stat-card__icon" style={{ backgroundColor: getScoreColor(overallStats.averageScore) }}>
            📊
          </div>
          <div className="seo-stat-card__content">
            <h3>{overallStats.averageScore}/100</h3>
            <p>Average SEO Score</p>
          </div>
        </div>

        <div className="seo-stat-card">
          <div className="seo-stat-card__icon" style={{ backgroundColor: '#4caf50' }}>
            ⭐
          </div>
          <div className="seo-stat-card__content">
            <h3>{overallStats.excellentPosts}</h3>
            <p>Excellent Posts</p>
          </div>
        </div>

        <div className="seo-stat-card">
          <div className="seo-stat-card__icon" style={{ backgroundColor: '#ff9800' }}>
            👍
          </div>
          <div className="seo-stat-card__content">
            <h3>{overallStats.goodPosts}</h3>
            <p>Good Posts</p>
          </div>
        </div>

        <div className="seo-stat-card">
          <div className="seo-stat-card__icon" style={{ backgroundColor: '#f44336' }}>
            ⚠️
          </div>
          <div className="seo-stat-card__content">
            <h3>{overallStats.poorPosts}</h3>
            <p>Needs Improvement</p>
          </div>
        </div>
      </div>

      {/* SEO Tools */}
      <div className="seo-tools">
        <h2>SEO Tools</h2>
        <div className="seo-tool-buttons">
          <button onClick={handleDownloadSitemap} className="btn btn--primary">
            📄 Download Sitemap
          </button>
          <button onClick={handleDownloadRobotsTxt} className="btn btn--stroke">
            🤖 Download Robots.txt
          </button>
          <a 
            href="https://search.google.com/search-console" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn--stroke"
          >
            🔍 Google Search Console
          </a>
        </div>
      </div>

      {/* Post Analysis */}
      <div className="seo-post-analysis">
        <h2>Post SEO Analysis</h2>
        <div className="seo-posts-table">
          {seoAnalysis.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Post Title</th>
                  <th>SEO Score</th>
                  <th>Assessment</th>
                  <th>Issues</th>
                  <th>Suggestions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {seoAnalysis.map(post => (
                  <tr key={post.id}>
                    <td>
                      <div className="seo-post-title">
                        <strong>{post.title}</strong>
                        <small>{post.slug}</small>
                      </div>
                    </td>
                    <td>
                      <div className="seo-score" style={{ color: getScoreColor(post.seo.score) }}>
                        <strong>{post.seo.score}/100</strong>
                      </div>
                    </td>
                    <td>
                      <span 
                        className="seo-assessment"
                        style={{ 
                          color: getScoreColor(post.seo.score),
                          fontWeight: '500'
                        }}
                      >
                        {getScoreLabel(post.seo.score)}
                      </span>
                    </td>
                    <td>
                      <div className="seo-issues">
                        {post.seo.issues.length > 0 ? (
                          <ul>
                            {post.seo.issues.map((issue, index) => (
                              <li key={index} className="seo-issue">
                                ❌ {issue}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="seo-no-issues">✅ No issues</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="seo-suggestions">
                        {post.seo.suggestions.length > 0 ? (
                          <ul>
                            {post.seo.suggestions.map((suggestion, index) => (
                              <li key={index} className="seo-suggestion">
                                💡 {suggestion}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="seo-no-suggestions">Perfect!</span>
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="seo-post-actions">
                        <a 
                          href={`/blog/${post.slug}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="seo-action-btn seo-action-btn--view"
                          title="View Post"
                        >
                          👁️
                        </a>
                        <a 
                          href={`/admin/posts/edit/${post.id}`}
                          className="seo-action-btn seo-action-btn--edit"
                          title="Edit Post"
                        >
                          ✏️
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="seo-no-posts">
              <h3>No published posts found</h3>
              <p>Publish some blog posts to see SEO analysis</p>
            </div>
          )}
        </div>
      </div>

      {/* SEO Tips */}
      <div className="seo-tips">
        <h2>SEO Best Practices</h2>
        <div className="seo-tips-grid">
          <div className="seo-tip">
            <h4>📝 Title Optimization</h4>
            <p>Keep titles between 30-60 characters. Include your main keyword near the beginning.</p>
          </div>
          <div className="seo-tip">
            <h4>📄 Meta Description</h4>
            <p>Write compelling descriptions between 120-160 characters that encourage clicks.</p>
          </div>
          <div className="seo-tip">
            <h4>🏷️ Heading Structure</h4>
            <p>Use H1-H6 tags to create a clear content hierarchy. Only one H1 per page.</p>
          </div>
          <div className="seo-tip">
            <h4>🖼️ Image Optimization</h4>
            <p>Use descriptive alt text for images and compress files for faster loading.</p>
          </div>
          <div className="seo-tip">
            <h4>🔗 Internal Linking</h4>
            <p>Link to other relevant posts and pages to improve site navigation and SEO.</p>
          </div>
          <div className="seo-tip">
            <h4>📱 Mobile-Friendly</h4>
            <p>Ensure your content looks great and loads fast on all devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEODashboard;
