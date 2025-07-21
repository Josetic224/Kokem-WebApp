import { useState } from 'react';

const WebPImage = ({ 
  src, 
  alt, 
  className = '',
  webpSrc = null
}) => {
  const [imageError, setImageError] = useState(false);
  
  // Generate WebP source if not provided
  const webpSource = webpSrc || src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  if (imageError) {
    return (
      <div className={`image-error ${className}`}>
        <div className="error-placeholder">
          <span>Image not found: {src}</span>
        </div>
      </div>
    );
  }

  return (
    <picture className={className}>
      <source
        srcSet={webpSource}
        type="image/webp"
      />
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(e) => {
          console.warn(`Image failed to load: ${src}`);
          setImageError(true);
        }}
        onLoad={() => {
          // Image loaded successfully
        }}
      />
    </picture>
  );
};

export default WebPImage;
