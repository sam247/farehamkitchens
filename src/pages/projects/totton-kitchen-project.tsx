/* eslint-disable @next/next/no-img-element */
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const TottonKitchenProject = () => {
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
              Taupe & Oak Kitchen in Totton
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground max-w-3xl">
              Top Soft taupe paired with Toronto natural vintage oak fascias and worktops. A breakfast bar with wine chiller, bespoke larder and appliance housing, and ample storage keep this warm, inviting kitchen organized and clutter-free.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            "/aok/project3/image00016-scaled.jpeg",
            "/aok/project3/image00020-scaled.jpeg",
            "/aok/project3/image00024-scaled.jpeg",
            "/aok/project3/image00032-scaled-e1737040946128.jpeg",
          ].map((src, index) => (
            <AnimatedSection key={src} delay={0.05 * index}>
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img src={src} alt="Taupe and Oak Kitchen, Totton" className="w-full h-full object-cover" />
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
                Supply of bespoke kitchen furniture, quartz worktops, kitchen accessories, and appliances.
              </p>
            </div>
            <div>
              <h2 className="heading-medium text-foreground mb-3">Service</h2>
              <p className="body-elegant text-muted-foreground">
                Design & Supply of bespoke kitchen furniture, quartz worktops, kitchen accessories, and appliances.
              </p>
            </div>
            <div>
              <h2 className="heading-medium text-foreground mb-3">Highlights</h2>
              <ul className="space-y-2 body-elegant text-muted-foreground">
                <li>Top Soft taupe with Toronto natural vintage oak</li>
                <li>Vintage oak worktops and dedicated breakfast bar with wine chiller</li>
                <li>Bespoke larder and appliance housing for organized storage</li>
                <li>Warm, inviting palette for everyday living</li>
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

export default TottonKitchenProject;

