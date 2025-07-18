import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title = 'King of Kings Evangelical Ministries International',
  description = 'Enforcing the Supremacy of Christ Over All! Join KOKEM for powerful revival meetings, miracles, and supernatural testimonies in Lagos, Nigeria.',
  image = '/images/kokem.png',
  url,
  type = 'website',
  author = 'King of Kings Evangelical Ministries International',
  publishedTime,
  modifiedTime,
  tags = []
}) => {
  const location = useLocation();
  const currentUrl = url || `${window.location.origin}${location.pathname}`;
  const fullTitle = title === 'King of Kings Evangelical Ministries International' ? title : `${title} | KOKEM`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph meta tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `${window.location.origin}${image}`, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'King of Kings Evangelical Ministries International', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `${window.location.origin}${image}`);
    updateMetaTag('twitter:url', currentUrl);

    // Article-specific meta tags (for blog posts)
    if (type === 'article') {
      updateMetaTag('article:author', author, true);
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
      if (tags.length > 0) {
        tags.forEach(tag => {
          const tagMeta = document.createElement('meta');
          tagMeta.setAttribute('property', 'article:tag');
          tagMeta.setAttribute('content', tag);
          document.head.appendChild(tagMeta);
        });
      }
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'BlogPosting' : 'Organization',
      name: type === 'article' ? fullTitle : 'Hesed Church',
      description: description,
      url: currentUrl,
      image: `${window.location.origin}${image}`,
      ...(type === 'article' && {
        author: {
          '@type': 'Person',
          name: author
        },
        publisher: {
          '@type': 'Organization',
          name: 'King of Kings Evangelical Ministries International',
          logo: {
            '@type': 'ImageObject',
            url: `${window.location.origin}/images/kokem.png`
          }
        },
        ...(publishedTime && { datePublished: publishedTime }),
        ...(modifiedTime && { dateModified: modifiedTime }),
        ...(tags.length > 0 && { keywords: tags.join(', ') })
      }),
      ...(type === 'website' && {
        '@type': 'Organization',
        name: 'King of Kings Evangelical Ministries International',
        alternateName: 'KOKEM',
        url: window.location.origin,
        logo: `${window.location.origin}/images/kokem.png`,
        sameAs: [
          'https://web.facebook.com/evansmozurunyemministries',
          'https://www.youtube.com/@evansmozurunyem5037',
          'https://kokemfamily.top'
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Km 15 Badagry Expressway, Opposite Trade Fair Complex',
          addressLocality: 'Abule Osun',
          addressRegion: 'Lagos',
          postalCode: '',
          addressCountry: 'Nigeria'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+2348032688535',
          contactType: 'customer service',
          email: 'info@kokemfamily.top'
        }
      })
    };

    // Update or create JSON-LD script
    let jsonLdScript = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);

    // Cleanup function to remove article-specific tags when component unmounts
    return () => {
      if (type === 'article') {
        const articleTags = document.querySelectorAll('meta[property="article:tag"]');
        articleTags.forEach(tag => tag.remove());
      }
    };
  }, [fullTitle, description, image, currentUrl, type, author, publishedTime, modifiedTime, tags]);

  return null; // This component doesn't render anything
};

// Higher-order component for easy SEO integration
export const withSEO = (Component, seoProps) => {
  return (props) => (
    <>
      <SEO {...seoProps} />
      <Component {...props} />
    </>
  );
};

// Hook for dynamic SEO updates
export const useSEO = (seoProps) => {
  useEffect(() => {
    // This will trigger the SEO component to update
  }, [seoProps]);
};

export default SEO;
