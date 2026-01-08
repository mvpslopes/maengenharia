import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  background?: boolean;
}

export default function LazyImage({ src, alt, className = '', style, background = false }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView && !isLoaded) {
      const img = new Image();
      img.onload = () => setIsLoaded(true);
      img.src = src;
    }
  }, [isInView, src, isLoaded]);

  if (background) {
    return (
      <div
        ref={imgRef}
        className={className}
        style={{
          ...style,
          backgroundImage: isLoaded ? `url('${src}')` : 'none',
          backgroundColor: isLoaded ? 'transparent' : '#e5e7eb',
          transition: 'opacity 0.3s ease-in-out',
          opacity: isLoaded ? 1 : 0.3,
        }}
        aria-label={alt}
      />
    );
  }

  return (
    <div ref={imgRef} className={className} style={style}>
      {isInView && (
        <img
          src={isLoaded ? src : undefined}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
        />
      )}
    </div>
  );
}
