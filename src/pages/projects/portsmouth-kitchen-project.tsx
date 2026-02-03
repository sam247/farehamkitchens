import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const PortsmouthKitchenProject = () => {
  return (
    <>
      <Head>
        <title>Small Kitchen Redesign in Portsmouth | Fareham Kitchens</title>
        <meta
          name="description"
          content="Clever small kitchen redesign in Portsmouth maximising space with tall storage, compact appliances, and smart layout solutions."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/projects/portsmouth-kitchen-project" />
        <meta property="og:title" content="Small Kitchen Redesign in Portsmouth | Fareham Kitchens" />
        <meta property="og:description" content="Clever small kitchen redesign in Portsmouth maximising space with tall storage, compact appliances, and smart layout solutions." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/project3/image00024-scaled.jpeg" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/projects/portsmouth-kitchen-project" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Small Kitchen Redesign in Portsmouth" />
        <meta name="twitter:description" content="Clever small kitchen redesign in Portsmouth maximising space with tall storage and compact appliances." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/project3/image00024-scaled.jpeg" />
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
                Small Kitchen Redesign in Portsmouth
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground max-w-3xl">
                A compact galley kitchen transformed with smart storage solutions and space-maximising design. Tall larders, deep drawers, and compact appliances create a highly functional kitchen that feels much larger than its footprint.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              "/aok/project3/image00024-scaled.jpeg",
              "/aok/project3/image00020-scaled.jpeg",
              "/aok/project3/image00016-scaled.jpeg",
              "/aok/project3/image00032-scaled-e1737040946128.jpeg",
            ].map((src, index) => (
              <AnimatedSection key={src} delay={0.05 * index}>
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <Image 
                    src={src} 
                    alt="Small Kitchen Redesign, Portsmouth" 
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
                  Complete redesign of a compact galley kitchen, maximising every inch of space with clever storage solutions and efficient layout.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Design Challenge</h2>
                <p className="body-elegant text-muted-foreground">
                  The kitchen measured just 3m x 2.5m, requiring innovative solutions to create adequate storage and workspace while maintaining a sense of space.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Key Features</h2>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Full-height larder reaching to ceiling</li>
                  <li>• Deep drawers replacing base cabinets</li>
                  <li>• Compact appliances for small spaces</li>
                  <li>• Quartz worktops for easy maintenance</li>
                  <li>• Integrated lighting for brightness</li>
                  <li>• Pull-out corner storage system</li>
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="space-y-6">
              <div>
                <h2 className="heading-medium text-foreground mb-3">Location</h2>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/locations/portsmouth-kitchens" className="text-primary hover:underline">Portsmouth, Hampshire</Link>
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Kitchen Range</h2>
                <p className="body-elegant text-muted-foreground">
                  Concept130 Modern
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Worktops</h2>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/worktops/quartz-worktops" className="text-primary hover:underline">Quartz</Link>
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Storage Solutions</h2>
                <p className="body-elegant text-muted-foreground">
                  Tall larder, deep drawers, pull-out corner unit. <Link href="/kitchen-storage" className="text-primary hover:underline">See our storage solutions</Link>.
                </p>
              </div>
              <div>
                <h2 className="heading-medium text-foreground mb-3">Design Tip</h2>
                <p className="body-elegant text-muted-foreground">
                  For small kitchens, tall storage and deep drawers maximise space. <Link href="/small-kitchens" className="text-primary hover:underline">See our small kitchen solutions</Link>.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <h2 className="heading-large text-foreground">
                Need Help with a Small Kitchen?
              </h2>
              <p className="body-elegant text-muted-foreground mt-4">
                We specialise in maximising space in compact kitchens. Book a consultation to discuss your project.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/small-kitchens" variant="ghost">
                Small Kitchen Solutions
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default PortsmouthKitchenProject;

