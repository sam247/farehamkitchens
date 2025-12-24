import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const KitchenIslands = () => {
  return (
    <>
      <Head>
        <title>Kitchen Islands Hampshire | Bespoke Kitchen Island Design | Fareham Kitchens</title>
        <meta
          name="description"
          content="Bespoke kitchen island design in Hampshire. Kitchen islands with seating, storage, and appliances. Expert design and installation by Fareham Kitchens."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/kitchen-islands" />
        <meta property="og:title" content="Kitchen Islands Hampshire | Bespoke Kitchen Island Design | Fareham Kitchens" />
        <meta property="og:description" content="Bespoke kitchen island design in Hampshire. Kitchen islands with seating, storage, and appliances." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/kitchen-islands" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Islands Hampshire | Bespoke Kitchen Island Design" />
        <meta name="twitter:description" content="Bespoke kitchen island design in Hampshire. Kitchen islands with seating, storage, and appliances." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection>
                  <span className="label-uppercase text-primary">Kitchen Islands</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">The heart of your kitchen</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    A kitchen island transforms your space, creating a central hub for cooking, dining, and socialising. Whether you need extra storage, additional workspace, seating for family meals, or integrated appliances, we design bespoke kitchen islands that perfectly suit your lifestyle and space.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Design Your Island
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Island Projects
                  </MagneticButton>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Kitchen island with seating" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Island Benefits</span>
              <h2 className="heading-large text-foreground mt-3">More than just extra workspace</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Additional Storage",
                  description: "Maximise storage with drawers, cupboards, and pull-out systems integrated into your island."
                },
                {
                  title: "Seating & Dining",
                  description: "Create a casual dining area with bar stools or built-in seating for family meals and entertaining."
                },
                {
                  title: "Appliance Integration",
                  description: "Integrate hobs, sinks, wine coolers, or dishwashers for a functional, streamlined design."
                },
                {
                  title: "Zoning Your Space",
                  description: "Define cooking, prep, and dining zones in open-plan kitchens for better workflow."
                },
                {
                  title: "Social Hub",
                  description: "Islands create a natural gathering point where family and guests can interact while you cook."
                },
                {
                  title: "Increased Value",
                  description: "Well-designed islands add significant value to your home and enhance your kitchen's appeal."
                }
              ].map((benefit, idx) => (
                <AnimatedSection key={benefit.title} delay={0.05 * idx} className="p-6 border border-border bg-background">
                  <h3 className="heading-medium text-foreground mb-3">{benefit.title}</h3>
                  <p className="body-elegant text-muted-foreground">{benefit.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Design Options */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Design Options</span>
              <h2 className="heading-large text-foreground mt-3">Tailored to your space and needs</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Size & Layout</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Small islands for compact kitchens</li>
                  <li>• Large islands for spacious open-plan areas</li>
                  <li>• Peninsula designs for smaller spaces</li>
                  <li>• Multi-level islands with different heights</li>
                  <li>• Custom shapes to fit your layout</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Features & Functions</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Integrated sinks and prep areas</li>
                  <li>• Built-in hobs and extractors</li>
                  <li>• Wine storage and coolers</li>
                  <li>• Breakfast bar seating</li>
                  <li>• Hidden storage and pull-out systems</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Considerations */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Planning Your Island</span>
              <h2 className="heading-large text-foreground mt-3">Key considerations</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Space Requirements</h3>
                <p className="body-elegant text-muted-foreground">
                  Ensure adequate clearance around your island—typically 900-1200mm between the island and other units for comfortable movement. We'll measure your space and design an island that maximises functionality without overwhelming the room.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Workflow & Function</h3>
                <p className="body-elegant text-muted-foreground">
                  Consider how you use your kitchen. Do you need extra prep space, storage, or seating? We'll design your island to support your cooking style and lifestyle, creating a functional centrepiece that enhances your daily routine.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Design Your Island?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Create the Perfect<br />
                <span className="text-primary">Kitchen Centrepiece</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation to discuss your kitchen island design. We'll help you create a bespoke island that perfectly suits your space, style, and needs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/process" variant="ghost">
                Learn About Our Process
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <TrustSignals />
        <Footer />
      </main>
    </>
  );
};

export default KitchenIslands;

