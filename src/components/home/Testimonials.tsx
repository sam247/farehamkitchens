/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    quote: "Fareham Kitchens transformed our house into a home. The attention to detail and quality of craftsmanship is simply outstanding. We couldn't be happier with our new kitchen.",
    author: 'Sarah & James Mitchell',
    location: 'Southsea, Hampshire',
  },
  {
    id: 2,
    quote: "From the initial consultation to the final installation, the team at Fareham Kitchens exceeded our expectations at every turn. They truly understood our vision.",
    author: 'The Thornton Family',
    location: 'Winchester, Hampshire',
  },
  {
    id: 3,
    quote: "A truly bespoke experience. The design team listened to our every need and created a kitchen that is both beautiful and perfectly functional for our family.",
    author: 'Dr. Elizabeth Grant',
    location: 'Petersfield, Hampshire',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-32 bg-secondary relative overflow-hidden">
      {/* Decorative Quote */}
      <Quote
        size={400}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-foreground/5"
        strokeWidth={1}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <AnimatedSection>
            <span className="label-uppercase text-foreground/60 mb-6 block">Testimonials</span>
          </AnimatedSection>

          {/* Testimonial */}
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out-expo ${
                  index === currentIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <blockquote className="heading-medium text-foreground mb-10 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="not-italic">
                  <span className="body-elegant text-foreground block mb-1">
                    {testimonial.author}
                  </span>
                  <span className="label-uppercase text-muted-foreground text-xs">
                    {testimonial.location}
                  </span>
                </cite>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-12">
            <button
              onClick={goToPrev}
              className="p-3 border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Indicators */}
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-12 h-px transition-all duration-500 ${
                    index === currentIndex ? 'bg-foreground' : 'bg-border hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 border border-border text-muted-foreground hover:border-foreground hover:text-foreground transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
