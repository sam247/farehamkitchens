import AnimatedSection from '../ui/AnimatedSection';
import MagneticButton from '../ui/MagneticButton';
import ParallaxImage from '../ui/ParallaxImage';

const CTASection = () => {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury kitchen showroom"
          className="w-full h-full"
          overlay={false}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="label-uppercase text-foreground/60 mb-6 block">
              Begin Your Journey
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="heading-large text-foreground mb-8">
              Ready to Create Your<br />
              <span className="text-foreground/80">Dream Kitchen?</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground mb-12 max-w-xl mx-auto">
              Visit our Fareham showroom to experience the quality and craftsmanship 
              that sets us apart. Our design consultants are ready to bring your 
              vision to life.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <MagneticButton to="/contact" variant="primary">
                Book Consultation
              </MagneticButton>
              <MagneticButton to="/projects" variant="outline">
                View Our Work
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Showroom Info */}
          <AnimatedSection delay={0.4} className="mt-16 pt-16 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <span className="label-uppercase text-foreground/60 text-xs block mb-2">Location</span>
                <p className="body-elegant text-foreground">
                  123 High Street<br />
                  Fareham, Hampshire
                </p>
              </div>
              <div>
                <span className="label-uppercase text-foreground/60 text-xs block mb-2">Hours</span>
                <p className="body-elegant text-foreground">
                  Mon - Sat: 9am - 6pm<br />
                  Sunday: By Appointment
                </p>
              </div>
              <div>
                <span className="label-uppercase text-foreground/60 text-xs block mb-2">Contact</span>
                <p className="body-elegant text-foreground">
                  +44 (0) 1329 123 456<br />
                  hello@farehamkitchens.co.uk
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
