import AnimatedSection from "../ui/AnimatedSection";
import MagneticButton from "../ui/MagneticButton";

const OfferBanner = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <AnimatedSection>
          <img
            src="/aok/offer.png.webp"
            alt="Special offer"
            className="w-full h-auto object-contain"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.1} className="space-y-4">
          <span className="label-uppercase text-primary">Limited Offer</span>
          <h2 className="heading-medium text-foreground">
            Get a free AEG Saphir Matt induction hob with your new kitchen
          </h2>
          <p className="body-elegant text-muted-foreground">
            Enquire now to lock in this offer for your project. Subject to availability and consultation.
          </p>
          <div className="flex flex-wrap gap-4">
            <MagneticButton to="/contact" variant="outline">
              Claim the Offer
            </MagneticButton>
            <MagneticButton to="tel:+441329123456" variant="ghost">
              Call Us
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default OfferBanner;

