import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const appliances = [
  {
    name: "AEG",
    description: "German engineering excellence with innovative features and outstanding performance. Perfect for modern kitchens.",
    features: ["Induction hobs", "Steam ovens", "Dishwashers", "Refrigeration"]
  },
  {
    name: "Bora",
    description: "Revolutionary downdraft extraction systems that eliminate the need for overhead extractors.",
    features: ["Integrated extraction", "Sleek design", "Powerful performance"]
  },
  {
    name: "Quooker",
    description: "Instant boiling water taps that provide 100°C boiling water on demand, saving time and energy.",
    features: ["Instant boiling water", "Energy efficient", "Space saving"]
  },
  {
    name: "Miele",
    description: "Premium German appliances known for exceptional quality, durability, and innovative technology.",
    features: ["Ovens", "Hobs", "Dishwashers", "Coffee machines"]
  },
  {
    name: "Gaggenau",
    description: "Luxury appliances with minimalist design and professional-grade performance for the ultimate kitchen experience.",
    features: ["Professional performance", "Minimalist design", "Premium quality"]
  },
  {
    name: "NEFF",
    description: "Innovative German appliances with unique features like Slide&Hide ovens and HomeConnect technology.",
    features: ["Slide&Hide ovens", "Induction hobs", "Dishwashers"]
  }
];

const Appliances = () => {
  return (
    <>
      <Head>
        <title>Kitchen Appliances Hampshire | Integrated Appliances | Fareham Kitchens</title>
        <meta
          name="description"
          content="Premium kitchen appliances in Hampshire. AEG, Bora, Quooker, Miele, and Gaggenau appliances integrated into bespoke kitchens. Expert installation by Fareham Kitchens."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/appliances" />
        <meta property="og:title" content="Kitchen Appliances Hampshire | Integrated Appliances | Fareham Kitchens" />
        <meta property="og:description" content="Premium kitchen appliances in Hampshire. AEG, Bora, Quooker, Miele, and Gaggenau appliances integrated into bespoke kitchens." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/appliances" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Appliances Hampshire | Integrated Appliances" />
        <meta name="twitter:description" content="Premium kitchen appliances in Hampshire. AEG, Bora, Quooker, Miele, and Gaggenau appliances integrated into bespoke kitchens." />
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
                  <span className="label-uppercase text-primary">Kitchen Appliances</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Premium appliances, seamlessly integrated</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    We partner with the world&apos;s finest appliance manufacturers to ensure your kitchen is equipped with the very best. From German engineering excellence to innovative extraction systems and instant boiling water, we source and integrate appliances that match the quality of our bespoke cabinetry.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Discuss Appliances
                  </MagneticButton>
                  <MagneticButton to="/blog/best-kitchen-appliances-for-small-uk-homes" variant="ghost">
                    Appliance Guide
                  </MagneticButton>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Integrated kitchen appliances" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Appliance Brands */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Our Partners</span>
              <h2 className="heading-large text-foreground mt-3">Premium appliance brands</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appliances.map((appliance, idx) => (
                <AnimatedSection key={appliance.name} delay={0.05 * idx} className="p-6 border border-border bg-background">
                  <h3 className="heading-medium text-foreground mb-3">{appliance.name}</h3>
                  <p className="body-elegant text-muted-foreground mb-4">{appliance.description}</p>
                  <ul className="space-y-2">
                    {appliance.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Process */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Integration</span>
              <h2 className="heading-large text-foreground mt-3">Seamless appliance integration</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Design Phase</h3>
                <p className="body-elegant text-muted-foreground">
                  We design your kitchen around your chosen appliances, ensuring perfect fit and optimal placement. Appliances are integrated into our 3D visualisations so you can see exactly how everything works together.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Installation</h3>
                <p className="body-elegant text-muted-foreground">
                  Our expert team installs and connects all appliances, ensuring they&apos;re properly integrated with your cabinetry and fully functional. We handle all electrical and plumbing connections.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Appliance Types */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Appliance Types</span>
              <h2 className="heading-large text-foreground mt-3">Complete appliance solutions</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Cooking Appliances</h3>
                <p className="body-elegant text-muted-foreground">
                  Induction hobs, gas hobs, steam ovens, conventional ovens, and combination ovens. We help you choose the perfect cooking setup for your lifestyle and kitchen design.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Extraction</h3>
                <p className="body-elegant text-muted-foreground">
                  Traditional extractor hoods or innovative <strong className="text-foreground">Bora downdraft extraction</strong> systems that eliminate the need for overhead extractors, creating a cleaner, more open design.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Refrigeration</h3>
                <p className="body-elegant text-muted-foreground">
                  Integrated fridges, freezers, and wine coolers that blend seamlessly into your cabinetry. Column refrigeration systems offer flexibility and premium performance.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Water & Coffee</h3>
                <p className="body-elegant text-muted-foreground">
                  <strong className="text-foreground">Quooker instant boiling water taps</strong> provide 100°C boiling water on demand. Integrated coffee machines and filtered water systems complete your kitchen.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection className="text-center">
              <span className="label-uppercase text-primary">Special Offers</span>
              <h2 className="heading-large text-foreground mt-3">Current Appliance Offers</h2>
              <p className="body-elegant text-muted-foreground mt-4 max-w-2xl mx-auto">
                We regularly offer special deals on premium appliances. <Link href="/blog/aeg-offer" className="text-primary hover:underline">See our current AEG offer</Link> for details on free appliances with your new kitchen.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Choose Your Appliances?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Discuss Appliance Options<br />
                <span className="text-primary">With Our Team</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Visit our showroom to see appliances in action, or book a consultation to discuss which appliances best suit your kitchen design and lifestyle.
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

export default Appliances;

