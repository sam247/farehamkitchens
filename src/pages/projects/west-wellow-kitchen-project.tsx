import Head from "next/head";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const WestWellowKitchenProject = () => {
  return (
    <>
      <Head>
        <title>Oak Shaker Kitchen in West Wellow | Fareham Kitchens</title>
        <meta
          name="description"
          content="Milford shaker in natural oak stained with Osmo Raw, large larder storage with internal drawers, statement Smeg range under a custom mantle, and a re-used oak beam to preserve character."
        />
        <meta property="og:title" content="Oak Shaker Kitchen in West Wellow | Fareham Kitchens" />
        <meta property="og:description" content="Milford shaker in natural oak stained with Osmo Raw, large larder storage with internal drawers, statement Smeg range under a custom mantle, and a re-used oak beam to preserve character." />
        <meta property="og:image" content="https://www.farehamkitchens.co.uk/aok/project4/image00012-1-scaled-2.jpeg" />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/projects/west-wellow-kitchen-project" />
        <meta property="og:type" content="article" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

      <section className="pt-32 pb-16 lg:pt-44">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="label-uppercase text-primary mb-4 block">Case Study</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="heading-display text-foreground mb-6">
              Oak Shaker Kitchen in West Wellow
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground max-w-3xl">
              Milford shaker in natural oak stained with Osmo Raw. Large larder storage with internal drawers, a statement Smeg range under a custom mantle, and a re-used oak beam to preserve character.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            "/aok/project4/image00006-1-scaled-2.jpeg",
            "/aok/project4/image00008-1-scaled-2.jpeg",
            "/aok/project4/image00010-1-scaled-2.jpeg",
            "/aok/project4/image00012-1-scaled-2.jpeg",
          ].map((src, index) => (
            <AnimatedSection key={src} delay={0.05 * index}>
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <Image 
                  src={src} 
                  alt="Oak Shaker Kitchen, West Wellow" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading={index < 2 ? "eager" : "lazy"}
                />
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
                <li>Milford shaker in natural oak, stained with Osmo Raw</li>
                <li>Large larder with internal drawers for organization</li>
                <li>Smeg range beneath a custom mantle</li>
                <li>Re-used oak beam to preserve original character</li>
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
    </>
  );
};

export default WestWellowKitchenProject;

