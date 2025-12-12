import { useEffect, useState } from 'react';
import MagneticButton from '../ui/MagneticButton';
import RevealText from '../ui/RevealText';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);


  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/placeholder.svg"
          className="w-full h-full object-cover"
        >
          <source
            src="https://qwsbn0lr4mojvbjy.public.blob.vercel-storage.com/video-optimized.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        {/* Tagline */}
        <div
          className={`mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="label-uppercase text-foreground/80">Quality Kitchens for Fareham</span>
        </div>

        {/* Main Heading */}
        <h1 className="heading-display text-foreground mb-8">
          <RevealText text="Fareham Kitchen" delay={0.5} />
          <br />
          <span className="text-foreground">
            <RevealText text="Showroom" delay={0.8} />
          </span>
        </h1>

        {/* Subheading */}
        <p
          className={`body-elegant text-foreground/80 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Creating timeless kitchens that become the heart of your home. Our Fareham kitchen showroom designs and installs bespoke handleless and Shaker kitchens with granite or quartz worktops across Hampshire.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[1200ms] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <MagneticButton to="/contact" variant="outline">
            Book a Consultation
          </MagneticButton>
                      <MagneticButton to="/brochures" variant="ghost">
            Download Brochure
          </MagneticButton>
        </div>
      </div>


      {/* Decorative Lines */}
      <div
        className={`absolute left-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-foreground/30 to-transparent transition-all duration-1000 delay-[1500ms] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute right-12 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-foreground/30 to-transparent transition-all duration-1000 delay-[1500ms] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </section>
  );
};

export default HeroSection;
