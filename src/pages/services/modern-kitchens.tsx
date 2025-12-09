import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const ModernKitchens = () => {
  return (
    <>
      <Head>
        <title>Modern Kitchens | Fareham Kitchens</title>
        <meta name="description" content="Sleek, handleless, and contemporary kitchens tailored to your space." />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Modern Kitchens</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-display text-foreground">Sleek lines, tailored to you</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground">
                Coming soon: full modern inspiration, finishes, and smart storage. Talk to us about handleless, slab, and contemporary designs, or explore our recent work.
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

export default ModernKitchens;

