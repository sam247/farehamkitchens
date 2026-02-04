import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const DektonWorktops = () => {
  return (
    <>
      <Head>
        <title>Dekton Worktops | Fareham Kitchens</title>
        <meta
          name="description"
          content="Dekton ultra-compact worktops from our Fareham showroom. Extreme durability, heat-resistant, scratch-proof, UV-resistant. Design and installation."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/worktops/dekton-worktops" />
        <meta property="og:title" content="Dekton Worktops | Fareham Kitchens" />
        <meta property="og:description" content="Dekton ultra-compact worktops from our Fareham showroom. Extreme durability, heat-resistant, scratch-proof." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/worktops/dekton-worktops" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dekton Worktops | Fareham Kitchens" />
        <meta name="twitter:description" content="Dekton ultra-compact worktops from our Fareham showroom. Extreme durability, heat-resistant, scratch-proof." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Dekton Ultra-Compact Worktops",
              "description": "Premium ultra-compact Dekton worktops for kitchens in Hampshire",
              "brand": {
                "@type": "Brand",
                "name": "Fareham Kitchens"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "GBP"
              }
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-34 pb-20 lg:pt-54">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection>
                  <span className="label-uppercase text-primary">Dekton Worktops</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Ultra-compact, extreme performance</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Dekton is an ultra-compact surface that combines the best properties of quartz, porcelain, and glass. From <Link href="/" className="text-primary hover:underline">our Fareham showroom</Link> we supply and fit Dekton for extreme durability, exceptional heat resistance, and a modern aesthetic—ideal for contemporary kitchen designs and indoor or outdoor use.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Get a Quote
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Projects
                  </MagneticButton>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Dekton kitchen worktop" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Why Choose Dekton</span>
              <h2 className="heading-large text-foreground mt-3">Extreme durability, modern design</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Extreme Heat Resistance",
                  description: "Withstand temperatures up to 400°C. Place hot pans directly on the surface without damage."
                },
                {
                  title: "Scratch Proof",
                  description: "Harder than granite, Dekton resists scratches from knives and daily kitchen use."
                },
                {
                  title: "UV Resistant",
                  description: "Perfect for outdoor kitchens and areas with direct sunlight. Colours won't fade."
                },
                {
                  title: "Stain Resistant",
                  description: "Non-porous surface resists stains from wine, coffee, oil, and other substances."
                },
                {
                  title: "Low Maintenance",
                  description: "Easy to clean with soap and water. No sealing required."
                },
                {
                  title: "Modern Aesthetic",
                  description: "Sleek, contemporary appearance perfect for modern and minimalist kitchen designs."
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

        {/* Applications */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Perfect For</span>
              <h2 className="heading-large text-foreground mt-3">Indoor and outdoor applications</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Indoor Kitchens</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Kitchen worktops and islands</li>
                  <li>• Backsplashes and splashbacks</li>
                  <li>• Breakfast bars and dining surfaces</li>
                  <li>• Modern, minimalist designs</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Outdoor Kitchens</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Outdoor cooking areas</li>
                  <li>• BBQ and grilling stations</li>
                  <li>• Patio and terrace surfaces</li>
                  <li>• Weather-resistant applications</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready for Dekton?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Experience Ultra-Compact<br />
                <span className="text-primary">Performance</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Discover Dekton&apos;s extreme durability and modern aesthetic in our showroom. Perfect for contemporary kitchens where performance and style are equally important.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/blog/choosing-the-right-kitchen-worktop" variant="ghost">
                Read Worktop Guide
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

export default DektonWorktops;

