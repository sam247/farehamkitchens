import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const EastleighKitchenProject = () => {
  return (
    <>
      <Head>
        <title>Modern Shaker Kitchen Extension in Eastleigh | Fareham Kitchens</title>
        <meta
          name="description"
          content="Contemporary Shaker kitchen extension in Eastleigh with open-plan design, granite worktops, integrated appliances, and bespoke storage solutions."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/projects/eastleigh-kitchen-project" />
        <meta property="og:title" content="Modern Shaker Kitchen Extension in Eastleigh | Fareham Kitchens" />
        <meta property="og:description" content="Contemporary Shaker kitchen extension in Eastleigh with open-plan design, granite worktops, integrated appliances, and bespoke storage solutions." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/project2/DSC_2513-scaled.jpg" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/projects/eastleigh-kitchen-project" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Modern Shaker Kitchen Extension in Eastleigh" />
        <meta name="twitter:description" content="Contemporary Shaker kitchen extension in Eastleigh with open-plan design, granite worktops, and integrated appliances." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/project2/DSC_2513-scaled.jpg" />
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
                Modern Shaker Kitchen Extension in Eastleigh
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground max-w-3xl">
                A complete kitchen extension and renovation creating a stunning open-plan space. Contemporary Shaker cabinetry in soft grey, granite worktops, and integrated AEG appliances combine to create a family-friendly kitchen that&apos;s both beautiful and highly functional.
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
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <Image 
                    src={src} 
                    alt="Modern Shaker Kitchen Extension, Eastleigh" 
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
                  Full kitchen extension with building works, complete kitchen design, supply, and installation. The project involved extending the rear of the property to create an open-plan kitchen-dining-living space.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Design</h2>
                <p className="body-elegant text-muted-foreground">
                  Contemporary Shaker cabinetry in soft grey creates a timeless look that works perfectly in the new extension. The design maximises natural light from large bi-fold doors, creating a bright, airy space perfect for family life.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Key Features</h2>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Contemporary Shaker cabinetry in soft grey</li>
                  <li>• Granite worktops throughout</li>
                  <li>• Large kitchen island with seating</li>
                  <li>• Integrated AEG appliances</li>
                  <li>• Bespoke tall storage and larder</li>
                  <li>• Bi-fold doors opening to garden</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="space-y-6">
              <div>
                <h2 className="heading-medium text-foreground mb-3">Location</h2>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/locations/eastleigh-kitchens" className="text-primary hover:underline">Eastleigh, Hampshire</Link>
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Kitchen Range</h2>
                <p className="body-elegant text-muted-foreground">
                  Concept130 Shaker
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Worktops</h2>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/worktops/granite-worktops" className="text-primary hover:underline">Granite</Link>
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Appliances</h2>
                <p className="body-elegant text-muted-foreground">
                  AEG induction hob, oven, and dishwasher. <Link href="/appliances" className="text-primary hover:underline">See our appliance partners</Link>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <h2 className="heading-large text-foreground">
                Inspired by This Project?
              </h2>
              <p className="body-elegant text-muted-foreground mt-4">
                Book a consultation to discuss your kitchen extension or renovation project.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/projects" variant="ghost">
                View More Projects
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default EastleighKitchenProject;

