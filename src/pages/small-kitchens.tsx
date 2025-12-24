import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const SmallKitchens = () => {
  return (
    <>
      <Head>
        <title>Small Kitchen Design Hampshire | Compact Kitchen Solutions | Fareham Kitchens</title>
        <meta
          name="description"
          content="Small kitchen design solutions in Hampshire. Space-saving kitchen designs, compact appliances, and storage solutions for small kitchens. Expert design by Fareham Kitchens."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/small-kitchens" />
        <meta property="og:title" content="Small Kitchen Design Hampshire | Compact Kitchen Solutions | Fareham Kitchens" />
        <meta property="og:description" content="Small kitchen design solutions in Hampshire. Space-saving kitchen designs, compact appliances, and storage solutions." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/small-kitchens" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Small Kitchen Design Hampshire | Compact Kitchen Solutions" />
        <meta name="twitter:description" content="Small kitchen design solutions in Hampshire. Space-saving kitchen designs, compact appliances, and storage solutions." />
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
                  <span className="label-uppercase text-primary">Small Kitchens</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Maximise every inch</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Small kitchens don&apos;t mean small possibilities. With smart design, space-saving solutions, and compact appliances, we create functional, beautiful kitchens that make the most of every square inch. From galley kitchens to compact apartments, we specialise in maximising space without compromising on style or functionality.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Design Consultation
                  </MagneticButton>
                  <MagneticButton to="/blog/best-kitchen-appliances-for-small-uk-homes" variant="ghost">
                    Read Appliance Guide
                  </MagneticButton>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Small kitchen design" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Space-Saving Solutions</span>
              <h2 className="heading-large text-foreground mt-3">Smart design for small spaces</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tall Storage",
                  description: "Maximise vertical space with full-height cabinets and tall larders that reach to the ceiling, providing maximum storage in minimal floor space."
                },
                {
                  title: "Pull-Out Systems",
                  description: "Corner carousels, pull-out pantries, and drawer systems ensure no space is wasted, making every corner accessible and functional."
                },
                {
                  title: "Compact Appliances",
                  description: "Choose from slimline dishwashers, compact ovens, and space-saving appliances designed specifically for small kitchens."
                },
                {
                  title: "Multi-Functional Islands",
                  description: "Small islands or peninsulas that provide prep space, storage, and seating without overwhelming the room."
                },
                {
                  title: "Wall-Mounted Storage",
                  description: "Utilise wall space with open shelving, magnetic strips, and hanging storage to keep worktops clear and organised."
                },
                {
                  title: "Light Colours & Mirrors",
                  description: "Strategic use of light colours, reflective surfaces, and integrated lighting to create the illusion of more space."
                }
              ].map((solution, idx) => (
                <AnimatedSection key={solution.title} delay={0.05 * idx} className="p-6 border border-border bg-background">
                  <h3 className="heading-medium text-foreground mb-3">{solution.title}</h3>
                  <p className="body-elegant text-muted-foreground">{solution.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Layout Options */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Layout Options</span>
              <h2 className="heading-large text-foreground mt-3">Best layouts for small kitchens</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Galley Kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  Two parallel runs of units create an efficient, compact workspace. Perfect for narrow spaces, galley kitchens maximise storage and create an efficient cooking zone.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">L-Shaped Kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  Utilise two adjacent walls to create a functional workspace. L-shaped layouts work well in corners and provide good workflow with space for a small dining area.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">U-Shaped Kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  Three walls of units create maximum storage and workspace. Ideal for slightly larger small kitchens, U-shaped layouts provide excellent storage and workflow.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Single-Wall Kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  All units along one wall, perfect for very compact spaces or open-plan living. Single-wall layouts can be enhanced with a small island or peninsula if space allows.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Design Tips</span>
              <h2 className="heading-large text-foreground mt-3">Making small spaces feel larger</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Light & Bright</h3>
                <p className="body-elegant text-muted-foreground">
                  Light colours, reflective surfaces, and good lighting make small kitchens feel more spacious. Consider light-coloured cabinets, glossy finishes, and integrated LED lighting to brighten the space.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Keep It Clutter-Free</h3>
                <p className="body-elegant text-muted-foreground">
                  Smart storage solutions keep worktops clear. Integrated storage, pull-out systems, and tall cabinets ensure everything has a place, creating a clean, uncluttered appearance.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Choose Compact Appliances</h3>
                <p className="body-elegant text-muted-foreground">
                  <Link href="/blog/best-kitchen-appliances-for-small-uk-homes" className="text-primary hover:underline">Compact appliances</Link> are designed specifically for small kitchens. Slimline dishwashers, compact ovens, and space-saving hobs maximise functionality without taking up valuable space.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Maximise Your Space?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Design Your Perfect<br />
                <span className="text-primary">Small Kitchen</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation to discuss your small kitchen design. We&apos;ll help you create a functional, beautiful kitchen that makes the most of every inch of space.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/services" variant="ghost">
                View Our Services
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

export default SmallKitchens;

