import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const ShakerKitchens = () => {
  return (
    <>
      <Head>
        <title>Shaker Kitchens | Fareham Kitchens</title>
        <meta name="description" content="Bespoke Shaker kitchens by Fareham Kitchens. Detailed craftsmanship, timeless frames, modern function." />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Shaker Kitchens</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-display text-foreground">Detailed frames, crafted to last</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground">
                We’re preparing this page with full Shaker inspiration, finishes, and case studies. In the meantime, book a consultation or explore our projects to see recent Shaker installations.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
              <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
              <MagneticButton to="/projects" variant="ghost">View Projects</MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ShakerKitchens;

