import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const KitchenExtensions = () => {
  return (
    <>
      <Head>
        <title>Kitchen Extensions Hampshire | Open Plan Kitchen Extension Design | Fareham Kitchens</title>
        <meta
          name="description"
          content="Kitchen extension design and planning in Hampshire. Open plan kitchen extensions, planning permission advice, and expert design by Fareham Kitchens."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/kitchen-extensions" />
        <meta property="og:title" content="Kitchen Extensions Hampshire | Open Plan Kitchen Extension Design | Fareham Kitchens" />
        <meta property="og:description" content="Kitchen extension design and planning in Hampshire. Open plan kitchen extensions, planning permission advice, and expert design." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/kitchen-extensions" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Extensions Hampshire | Open Plan Kitchen Extension Design" />
        <meta name="twitter:description" content="Kitchen extension design and planning in Hampshire. Open plan kitchen extensions, planning permission advice." />
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
                  <span className="label-uppercase text-primary">Kitchen Extensions</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Transform your space with a kitchen extension</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    A kitchen extension is one of the most valuable home improvements you can make. Whether you&apos;re creating an open-plan living space, adding a dining area, or simply gaining more room for cooking and storage, we work with trusted local builders to design and coordinate kitchen extensions that transform how you live.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Book a Consultation
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Extension Projects
                  </MagneticButton>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Kitchen extension with open plan design" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Extension Benefits</span>
              <h2 className="heading-large text-foreground mt-3">Why extend your kitchen?</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "More Space",
                  description: "Gain valuable square footage for cooking, dining, and entertaining without moving house."
                },
                {
                  title: "Open Plan Living",
                  description: "Create seamless connections between kitchen, dining, and living areas for modern family life."
                },
                {
                  title: "Increased Property Value",
                  description: "Kitchen extensions typically add significant value to your home, often more than the cost of the extension."
                },
                {
                  title: "Better Natural Light",
                  description: "Large windows, bi-fold doors, and rooflights flood your extended kitchen with natural light."
                },
                {
                  title: "Improved Workflow",
                  description: "Design a kitchen layout that works perfectly for your lifestyle with ample prep space and storage."
                },
                {
                  title: "Future-Proof Your Home",
                  description: "Create a space that adapts to changing family needs and modern living requirements."
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

        {/* Extension Types */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Extension Types</span>
              <h2 className="heading-large text-foreground mt-3">Types of kitchen extensions</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Single-Storey Rear Extension</h3>
                <p className="body-elegant text-muted-foreground">
                  The most common type of kitchen extension, extending backwards into your garden. Perfect for creating open-plan kitchen-dining spaces with bi-fold doors opening to the garden.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Side Return Extension</h3>
                <p className="body-elegant text-muted-foreground">
                  Utilise the side return of your property (the space between your house and boundary) to widen your kitchen. Often combined with rear extensions for maximum space.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Wraparound Extension</h3>
                <p className="body-elegant text-muted-foreground">
                  Combine rear and side extensions to create a wraparound extension, maximising space and creating a truly open-plan living area.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Double-Storey Extension</h3>
                <p className="body-elegant text-muted-foreground">
                  Extend both ground and first floor to create a larger kitchen below and additional living space or bedrooms above. Requires planning permission.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Planning Permission */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Planning & Regulations</span>
              <h2 className="heading-large text-foreground mt-3">Planning permission and building regulations</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Permitted Development Rights</h3>
                <p className="body-elegant text-muted-foreground mb-3">
                  Many single-storey rear extensions fall under permitted development, meaning you may not need planning permission if:
                </p>
                <ul className="space-y-2 body-elegant text-muted-foreground list-disc list-inside">
                  <li>The extension doesn&apos;t extend more than 6m from the original house (8m for detached)</li>
                  <li>It&apos;s no higher than 4m</li>
                  <li>It doesn&apos;t cover more than 50% of your garden</li>
                  <li>It meets other specific criteria</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">When You Need Planning Permission</h3>
                <p className="body-elegant text-muted-foreground">
                  You&apos;ll need planning permission for larger extensions, double-storey extensions, or if your property is in a conservation area or listed. We work with local architects and can guide you through the planning process, helping with applications and liaising with your local council.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Building Regulations</h3>
                <p className="body-elegant text-muted-foreground">
                  All extensions require building regulations approval, regardless of planning permission. This covers structural safety, insulation, fire safety, and electrical work. We coordinate with builders to ensure all work meets current building regulations.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Design Considerations */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Design Process</span>
              <h2 className="heading-large text-foreground mt-3">Designing your kitchen extension</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Initial Consultation</h3>
                <p className="body-elegant text-muted-foreground">
                  We assess your existing space, discuss your vision, and explore extension possibilities. We&apos;ll consider your budget, planning constraints, and how you want to use the new space.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">3D Visualisations</h3>
                <p className="body-elegant text-muted-foreground">
                  See your extended kitchen before any building work begins. Our detailed 3D visualisations show exactly how your new space will look and function.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Builder Coordination</h3>
                <p className="body-elegant text-muted-foreground">
                  We work with trusted local builders to coordinate the extension build and kitchen installation, ensuring seamless project management from start to finish.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Kitchen Installation</h3>
                <p className="body-elegant text-muted-foreground">
                  Once the extension is complete, we install your bespoke kitchen, ensuring perfect integration with the new space and existing areas of your home.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Cost Guide */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Cost Guide</span>
              <h2 className="heading-large text-foreground mt-3">Kitchen extension costs</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <p className="body-elegant text-muted-foreground mb-4">
                  Extension costs vary significantly based on size, complexity, and location. As a rough guide:
                </p>
                <ul className="space-y-3 body-elegant text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                    <span><strong className="text-foreground">Small single-storey extension (15-20m²):</strong> £25,000 - £40,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                    <span><strong className="text-foreground">Medium extension (25-35m²):</strong> £40,000 - £60,000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                    <span><strong className="text-foreground">Large extension (40m²+):</strong> £60,000 - £100,000+</span>
                  </li>
                </ul>
                <p className="body-elegant text-muted-foreground mt-4">
                  These costs typically include building work, but not the kitchen itself. Kitchen costs are separate and depend on your chosen range and specifications. <Link href="/blog/kitchen-prices-uk" className="text-primary hover:underline">See our kitchen prices guide</Link> for more information.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Extend Your Kitchen?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Start Planning Your<br />
                <span className="text-primary">Kitchen Extension</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation to discuss your kitchen extension project. We&apos;ll help you understand planning requirements, explore design options, and create a plan to transform your home.
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

export default KitchenExtensions;

