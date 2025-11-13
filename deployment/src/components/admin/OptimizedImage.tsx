'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  blurPlaceholder?: string;
  sizes?: {
    size: string;
    url: string;
    width: number;
    height: number;
  }[];
  className?: string;
  targetWidth?: number;
}

export default function OptimizedImage({
  src,
  alt,
  blurPlaceholder,
  sizes,
  className,
  targetWidth = 300,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(blurPlaceholder || src);

  // Select the best size based on target width
  useEffect(() => {
    if (!sizes || sizes.length === 0) {
      setImageSrc(src);
      return;
    }

    // Find the smallest size that's larger than target
    const suitable = sizes
      .filter(s => s.width >= targetWidth)
      .sort((a, b) => a.width - b.width);

    const bestSize = suitable.length > 0 
      ? suitable[0] 
      : sizes.sort((a, b) => b.width - a.width)[0];

    setImageSrc(bestSize.url);
  }, [sizes, targetWidth, src]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Blur placeholder */}
      {blurPlaceholder && !isLoaded && (
        <img
          src={blurPlaceholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
}
