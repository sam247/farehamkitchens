import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
  priority?: boolean;
}

const ParallaxImage = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  overlay = true,
  priority = false,
}: ParallaxImageProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.innerHeight - rect.top;
        if (scrolled > 0 && rect.bottom > 0) {
          setOffset(scrolled * speed * 0.1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-100"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      )}
    </div>
  );
};

export default ParallaxImage;
