import { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasIntersected, options]);

  return [elementRef, isIntersecting, hasIntersected];
};

// Custom hook for lazy loading images
export const useLazyImage = (src, options = {}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [imageRef, isIntersecting, hasIntersected] = useIntersectionObserver(options);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasIntersected && src && !imageSrc) {
      setImageSrc(src);
    }
  }, [hasIntersected, src, imageSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return {
    imageRef,
    imageSrc,
    isLoaded,
    hasError,
    isIntersecting,
    handleLoad,
    handleError
  };
};

// Custom hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0
  });

  useEffect(() => {
    // Measure page load performance
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const newMetrics = {
          loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.loadEventStart) : 0,
          domContentLoaded: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart) : 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0
        };

        // First Contentful Paint
        const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
        if (fcp) {
          newMetrics.firstContentfulPaint = Math.round(fcp.startTime);
        }

        // Largest Contentful Paint (if supported)
        if ('PerformanceObserver' in window) {
          try {
            const observer = new PerformanceObserver((list) => {
              const entries = list.getEntries();
              const lastEntry = entries[entries.length - 1];
              if (lastEntry) {
                newMetrics.largestContentfulPaint = Math.round(lastEntry.startTime);
                setMetrics(prev => ({ ...prev, largestContentfulPaint: newMetrics.largestContentfulPaint }));
              }
            });
            observer.observe({ entryTypes: ['largest-contentful-paint'] });
          } catch (e) {
            console.warn('LCP measurement not supported');
          }
        }

        setMetrics(newMetrics);
      }
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  return metrics;
};

// Custom hook for scroll performance optimization
export const useScrollOptimization = (callback, delay = 16) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef();
  const lastCallRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      
      if (now - lastCallRef.current >= delay) {
        callback();
        lastCallRef.current = now;
      }

      setIsScrolling(true);
      
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutRef.current);
    };
  }, [callback, delay]);

  return isScrolling;
};

// Custom hook for debouncing
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default {
  useIntersectionObserver,
  useLazyImage,
  usePerformanceMonitor,
  useScrollOptimization,
  useDebounce
};
