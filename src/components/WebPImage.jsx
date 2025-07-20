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

  console.log(`🖼️ Rendering image - JPG: ${src}, WebP: ${webpSource}`);

  return (
    <picture className={className}>
      <source
        srcSet={webpSource}
        type="image/webp"
        onError={() => console.log(`⚠️ WebP source failed: ${webpSource}`)}
      />
      <img
        src={src}
        alt={alt}
        className={className}
        onError={(e) => {
          console.log(`❌ Image failed to load: ${src}`, e);
          setImageError(true);
        }}
        onLoad={(e) => {
          console.log(`✅ Image loaded successfully: ${e.target.currentSrc || src}`);
        }}
      />
    </picture>
  );
};

export default WebPImage;
