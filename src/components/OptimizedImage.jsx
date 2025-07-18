import { useState, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/placeholder.jpg',
  webpSrc = null,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  // Generate WebP source if not provided
  const webpSource = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  useEffect(() => {
    // Preload the image
    const img = new Image();
    
    // Try WebP first, fallback to original
    const tryLoadWebP = () => {
      img.src = webpSource;
      img.onload = () => {
        setCurrentSrc(webpSource);
        setImageLoaded(true);
      };
      img.onerror = () => {
        // WebP failed, try original format
        tryLoadOriginal();
      };
    };

    const tryLoadOriginal = () => {
      img.src = src;
      img.onload = () => {
        setCurrentSrc(src);
        setImageLoaded(true);
      };
      img.onerror = () => {
        setImageError(true);
        setImageLoaded(true);
      };
    };

    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    if (supportsWebP()) {
      tryLoadWebP();
    } else {
      tryLoadOriginal();
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, webpSource]);

  if (imageError) {
    return (
      <div className={`image-error ${className}`}>
        <div className="error-placeholder">
          <span>Image not found</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`optimized-image-container ${className}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={`optimized-image ${imageLoaded ? 'loaded' : 'loading'}`}
        loading={loading}
        sizes={sizes}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
      />
      {!imageLoaded && (
        <div className="image-loading-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
