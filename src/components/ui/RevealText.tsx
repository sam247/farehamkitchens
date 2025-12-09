import { useEffect, useRef, useState } from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

const RevealText = ({ text, className = '', delay = 0, stagger = 0.03 }: RevealTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const words = text.split(' ');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em]">
          <span
            className={`inline-block transition-transform duration-700 ease-out-expo ${
              isVisible ? 'translate-y-0' : 'translate-y-full'
            }`}
            style={{
              transitionDelay: `${delay + wordIndex * stagger}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
};

export default RevealText;
