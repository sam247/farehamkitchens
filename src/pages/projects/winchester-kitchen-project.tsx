import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const WinchesterKitchenProject = () => {
  return (
    <>
      <Head>
        <title>Traditional Kitchen with Island in Winchester | Fareham Kitchens</title>
        <meta
          name="description"
          content="Traditional in-frame kitchen with large island in Winchester. Period-appropriate design with modern functionality, granite worktops, and premium appliances."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/projects/winchester-kitchen-project" />
        <meta property="og:title" content="Traditional Kitchen with Island in Winchester | Fareham Kitchens" />
        <meta property="og:description" content="Traditional in-frame kitchen with large island in Winchester. Period-appropriate design with modern functionality." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/project4/image00012-1-scaled-2.jpeg" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/projects/winchester-kitchen-project" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Traditional Kitchen with Island in Winchester" />
        <meta name="twitter:description" content="Traditional in-frame kitchen with large island in Winchester. Period-appropriate design with modern functionality." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/project4/image00012-1-scaled-2.jpeg" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-34 pb-16 lg:pt-54">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection>
              <span className="label-uppercase text-primary mb-4 block">Case Study</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="heading-display text-foreground mb-6">
                Traditional Kitchen with Island in Winchester
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground max-w-3xl">
                A period property kitchen that perfectly balances traditional character with modern functionality. In-frame cabinetry, ornate details, and a large central island create a kitchen that honours the home&apos;s heritage while providing all the conveniences of contemporary living.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              "/aok/project4/image00012-1-scaled-2.jpeg",
              "/aok/project4/image00010-1-scaled-2.jpeg",
              "/aok/project4/image00008-1-scaled-2.jpeg",
              "/aok/project4/image00006-1-scaled-2.jpeg",
            ].map((src, index) => (
              <AnimatedSection key={src} delay={0.05 * index}>
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <Image 
                    src={src} 
                    alt="Traditional Kitchen with Island, Winchester" 
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
                  Complete kitchen renovation in a period property, maintaining traditional character while introducing modern functionality and appliances.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Design Approach</h2>
                <p className="body-elegant text-muted-foreground">
                  The design respects the property&apos;s period features while incorporating contemporary elements. In-frame cabinetry with ornate detailing creates an authentic traditional look, while the large island adds modern functionality.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Key Features</h2>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Traditional in-frame cabinetry</li>
                  <li>• Large central island with seating</li>
                  <li>• Granite worktops</li>
                  <li>• Integrated premium appliances</li>
                  <li>• Bespoke larder storage</li>
                  <li>• Period-appropriate detailing</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="space-y-6">
              <div>
                <h2 className="heading-medium text-foreground mb-3">Location</h2>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/locations/winchester-kitchens" className="text-primary hover:underline">Winchester, Hampshire</Link>
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Kitchen Range</h2>
                <p className="body-elegant text-muted-foreground">
                  British-made Traditional
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Worktops</h2>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/worktops/granite-worktops" className="text-primary hover:underline">Granite</Link>
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Island</h2>
                <p className="body-elegant text-muted-foreground">
                  Large island with seating for 4. <Link href="/kitchen-islands" className="text-primary hover:underline">See our kitchen island designs</Link>.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Appliances</h2>
                <p className="body-elegant text-muted-foreground">
                  Miele appliances integrated seamlessly into traditional cabinetry.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <h2 className="heading-large text-foreground">
                Planning a Traditional Kitchen?
              </h2>
              <p className="body-elegant text-muted-foreground mt-4">
                We specialise in traditional kitchens that honour period properties while providing modern functionality.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/services/traditional-kitchens" variant="ghost">
                Traditional Kitchens
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default WinchesterKitchenProject;

