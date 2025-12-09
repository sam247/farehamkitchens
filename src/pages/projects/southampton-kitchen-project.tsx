/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const SouthamptonKitchenProject = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-16 lg:pt-44">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="label-uppercase text-primary mb-4 block">Case Study</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="heading-display text-foreground mb-6">
              Contemporary Shaker Kitchen in Southampton
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground max-w-3xl">
              Full kitchen remodel with minor building works and reconfiguration. Contemporary shaker cabinetry with peninsula seating, oak shelves with integrated LED, full-height storage, and solid timber doors for durability.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            "/aok/project2/DSC_2513-scaled.jpg",
            "/aok/project2/DSC_2515-scaled.jpg",
            "/aok/project2/DSC_2521-scaled.jpg",
            "/aok/project2/DSC_2555.jpg",
          ].map((src, index) => (
            <AnimatedSection key={src} delay={0.05 * index}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={src} alt="Contemporary Shaker Kitchen, Southampton" className="w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1} className="space-y-6">
            <div>
              <h2 className="heading-medium text-foreground mb-3">Project</h2>
              <p className="body-elegant text-muted-foreground">
                Full kitchen remodel, including removal of existing kitchen, minor building works, and complete reconfiguration of space.
              </p>
            </div>
            <div>
              <h2 className="heading-medium text-foreground mb-3">Service</h2>
              <p className="body-elegant text-muted-foreground">
                Design, Supply, and Installation of bespoke kitchen furniture, worktops, kitchen accessories, and appliances.
              </p>
            </div>
            <div>
              <h2 className="heading-medium text-foreground mb-3">Highlights</h2>
              <ul className="space-y-2 body-elegant text-muted-foreground">
                <li>Contemporary shaker cabinetry with solid timber doors</li>
                <li>Peninsula seating and oak shelves with integrated LED</li>
                <li>Full-height storage maximizing every inch</li>
                <li>Complete reconfiguration managed end-to-end</li>
              </ul>
            </div>
            <MagneticButton to="/contact" variant="outline">
              Start Your Project
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SouthamptonKitchenProject;

