import { useState, useEffect, useRef } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
}

export function SafeImage({ src, fallbackSrc, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleDomError = () => {
      setImgSrc((current) => {
        if (current !== fallbackSrc) {
          return fallbackSrc;
        }
        return current;
      });
    };

    if (img.complete && img.naturalWidth === 0) {
      handleDomError();
    }

    img.addEventListener('error', handleDomError);
    return () => {
      img.removeEventListener('error', handleDomError);
    };
  }, [imgSrc, fallbackSrc, src]);

  return (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={alt}
      {...props}
    />
  );
}
