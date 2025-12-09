import AnimatedSection from "../ui/AnimatedSection";
import MagneticButton from "../ui/MagneticButton";

const ShowroomInvite = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <AnimatedSection>
            <span className="label-uppercase text-primary mb-4 block">Visit Our Showroom</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-large text-foreground">
              Experience our craft<br />
              <span className="text-primary">in person</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground max-w-xl">
              Explore materials, finishes, and appliances up close with our design team. Book a visit to our Fareham showroom and plan your project with the specialists behind every kitchen.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="space-y-2 body-elegant text-foreground">
              <p><strong>Address:</strong> 123 High Street, Fareham, Hampshire, PO16 7AZ</p>
              <p><strong>Opening Hours:</strong> Monday – Saturday: 9am – 6pm · Sunday: By Appointment</p>
              <p><strong>Call:</strong> <a href="tel:+441329123456" className="hover:text-primary transition-colors">+44 (0) 1329 123 456</a></p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton to="/contact" variant="outline">Book a Visit</MagneticButton>
              <MagneticButton to="tel:+441329123456" variant="ghost">Call Us</MagneticButton>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection delay={0.2} animation="fade-in-right" className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-secondary border border-border">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
              alt="Showroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-6 border border-primary/25 pointer-events-none" />
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ShowroomInvite;

