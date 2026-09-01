import { useState, useEffect, useMemo } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

const SIZES = [400, 800, 1200, 1920];

function generateSrcSet(src: string | undefined): string | undefined {
  if (!src) return undefined;
  
  // Only process if it's a known image format and path we can handle
  if (
    !src.includes('/images/') || 
    src.endsWith('.svg') || 
    src.startsWith('data:')
  ) {
    return undefined;
  }

  // Parse out the base url/path without extension
  const lastDotIndex = src.lastIndexOf('.');
  if (lastDotIndex === -1) return undefined;
  
  const basePath = src.substring(0, lastDotIndex);
  
  return SIZES.map(size => `${basePath}-${size}w.webp ${size}w`).join(', ');
}

export function SafeImage({ src, fallbackSrc, alt, sizes: propsSizes, ...props }: SafeImageProps) {
  const [error, setError] = useState(false);
  
  const currentSrc = error ? fallbackSrc : src;
  
  const srcSet = useMemo(() => {
    if (!error) {
      return generateSrcSet(src);
    }
    return undefined;
  }, [src, error]);

  const defaultSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
  const sizes = propsSizes || defaultSizes;

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <img
      src={currentSrc}
      srcSet={srcSet || undefined}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      style={{ color: 'transparent' }}
      onError={(e) => {
        if (!error) {
          setError(true);
          // Force remove the srcset attribute from the DOM element directly
          // This ensures the browser falls back to the src attribute immediately
          e.currentTarget.removeAttribute('srcset');
          e.currentTarget.removeAttribute('sizes');
        }
      }}
      {...props}
    />
  );
}
