// Sitemap generator utility
export const generateSitemap = (posts = []) => {
  const baseUrl = window.location.origin;
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9'
    },
    {
      url: `${baseUrl}/events`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/volunteer`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    },
    {
      url: `${baseUrl}/connect-group`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.7'
    }
  ];

  // Dynamic blog post pages
  const blogPages = posts
    .filter(post => post.status === 'published')
    .map(post => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.publishedAt || post.updatedAt || currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    }));

  const allPages = [...staticPages, ...blogPages];

  // Generate XML sitemap
  const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xmlSitemap;
};

// Generate robots.txt content
export const generateRobotsTxt = () => {
  const baseUrl = window.location.origin;
  
  return `User-agent: *
Allow: /

# Disallow admin pages
Disallow: /admin/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay (optional)
Crawl-delay: 1`;
};

// Download sitemap as file
export const downloadSitemap = (posts = []) => {
  const sitemap = generateSitemap(posts);
  const blob = new Blob([sitemap], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

// Download robots.txt as file
export const downloadRobotsTxt = () => {
  const robotsTxt = generateRobotsTxt();
  const blob = new Blob([robotsTxt], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'robots.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

// SEO analysis utility
export const analyzeSEO = (content, title, description) => {
  const analysis = {
    score: 0,
    issues: [],
    suggestions: []
  };

  // Title analysis
  if (!title || title.length === 0) {
    analysis.issues.push('Missing title');
  } else if (title.length < 30) {
    analysis.suggestions.push('Title could be longer (30-60 characters recommended)');
  } else if (title.length > 60) {
    analysis.issues.push('Title is too long (over 60 characters)');
  } else {
    analysis.score += 20;
  }

  // Description analysis
  if (!description || description.length === 0) {
    analysis.issues.push('Missing meta description');
  } else if (description.length < 120) {
    analysis.suggestions.push('Description could be longer (120-160 characters recommended)');
  } else if (description.length > 160) {
    analysis.issues.push('Description is too long (over 160 characters)');
  } else {
    analysis.score += 20;
  }

  // Content analysis
  if (!content || content.length === 0) {
    analysis.issues.push('Missing content');
  } else {
    const wordCount = content.split(/\s+/).length;
    if (wordCount < 300) {
      analysis.suggestions.push('Content could be longer (300+ words recommended)');
    } else {
      analysis.score += 20;
    }

    // Check for headings
    const headingMatches = content.match(/<h[1-6][^>]*>/gi);
    if (!headingMatches || headingMatches.length === 0) {
      analysis.suggestions.push('Add headings (H1-H6) to improve content structure');
    } else {
      analysis.score += 15;
    }

    // Check for images
    const imageMatches = content.match(/<img[^>]*>/gi);
    if (!imageMatches || imageMatches.length === 0) {
      analysis.suggestions.push('Add images to make content more engaging');
    } else {
      analysis.score += 10;
    }

    // Check for links
    const linkMatches = content.match(/<a[^>]*>/gi);
    if (linkMatches && linkMatches.length > 0) {
      analysis.score += 10;
    }
  }

  // Calculate final score
  analysis.score = Math.min(100, analysis.score);
  
  // Add overall assessment
  if (analysis.score >= 80) {
    analysis.assessment = 'Excellent SEO';
  } else if (analysis.score >= 60) {
    analysis.assessment = 'Good SEO';
  } else if (analysis.score >= 40) {
    analysis.assessment = 'Fair SEO';
  } else {
    analysis.assessment = 'Poor SEO';
  }

  return analysis;
};

export default {
  generateSitemap,
  generateRobotsTxt,
  downloadSitemap,
  downloadRobotsTxt,
  analyzeSEO
};
