import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const TraditionalKitchens = () => {
  return (
    <>
      <Head>
        <title>Traditional Kitchens Hampshire | Fareham Kitchen Showroom</title>
        <meta name="description" content="Classic kitchens with bespoke detailing, premium materials, and modern function." />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Traditional Kitchens</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-display text-foreground">Classic details, modern comfort</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground">
                A dedicated page is coming soon with full inspiration, finishes, and storage ideas. For now, reach out to plan your traditional scheme or browse our projects.
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

export default TraditionalKitchens;

