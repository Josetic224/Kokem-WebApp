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
  const [currentSrc, setCurrentSrc] = useState(src); // Start with original src

  // Generate WebP source if not provided
  const webpSource = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);

    // Check if browser supports WebP
    const supportsWebP = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      } catch {
        return false;
      }
    };

    // Simple image loading with WebP preference
    const loadImage = () => {
      const img = new Image();

      // If browser supports WebP, try WebP first
      if (supportsWebP()) {
        img.src = webpSource;
        img.onload = () => {
          console.log(`✅ Loaded WebP: ${webpSource}`);
          setCurrentSrc(webpSource);
          setImageLoaded(true);
        };
        img.onerror = () => {
          console.log(`⚠️ WebP failed, trying JPG: ${src}`);
          // WebP failed, try original
          const fallbackImg = new Image();
          fallbackImg.src = src;
          fallbackImg.onload = () => {
            console.log(`✅ Loaded JPG fallback: ${src}`);
            setCurrentSrc(src);
            setImageLoaded(true);
          };
          fallbackImg.onerror = () => {
            console.log(`❌ Both formats failed: ${src}`);
            setImageError(true);
            setImageLoaded(true);
          };
        };
      } else {
        // Browser doesn't support WebP, use original
        img.src = src;
        img.onload = () => {
          console.log(`✅ Loaded JPG (no WebP support): ${src}`);
          setCurrentSrc(src);
          setImageLoaded(true);
        };
        img.onerror = () => {
          console.log(`❌ Image failed: ${src}`);
          setImageError(true);
          setImageLoaded(true);
        };
      }
    };

    loadImage();
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
