import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const QuartzWorktops = () => {
  return (
    <>
      <Head>
        <title>Quartz Worktops Hampshire | Engineered Stone Kitchen Worktops | Fareham Kitchens</title>
        <meta
          name="description"
          content="Premium quartz worktops in Hampshire. Low-maintenance engineered stone kitchen worktops, non-porous, stain-resistant, and available in consistent colours. Expert installation."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/worktops/quartz-worktops" />
        <meta property="og:title" content="Quartz Worktops Hampshire | Engineered Stone Kitchen Worktops | Fareham Kitchens" />
        <meta property="og:description" content="Premium quartz worktops in Hampshire. Low-maintenance engineered stone kitchen worktops, non-porous, stain-resistant, and available in consistent colours." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/worktops/quartz-worktops" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quartz Worktops Hampshire | Engineered Stone Kitchen Worktops" />
        <meta name="twitter:description" content="Premium quartz worktops in Hampshire. Low-maintenance engineered stone kitchen worktops, non-porous, stain-resistant." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Quartz Kitchen Worktops",
              "description": "Premium engineered quartz worktops for kitchens in Hampshire",
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
                  <span className="label-uppercase text-primary">Quartz Worktops</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Engineered perfection, effortless care</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Quartz worktops combine the beauty of natural stone with the consistency and low maintenance of engineered materials. Made from 90% natural quartz and 10% resin, quartz worktops are non-porous, stain-resistant, and require no sealing. Perfect for modern kitchens where ease of maintenance is a priority.
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
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Quartz kitchen worktop" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Why Choose Quartz</span>
              <h2 className="heading-large text-foreground mt-3">Low maintenance, high performance</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Non-Porous",
                  description: "No sealing required. Quartz resists stains, bacteria, and moisture naturally."
                },
                {
                  title: "Consistent Appearance",
                  description: "Uniform colour and pattern throughout, perfect for matching multiple slabs."
                },
                {
                  title: "Stain Resistant",
                  description: "Resistant to wine, coffee, oil, and other common kitchen stains."
                },
                {
                  title: "Scratch Resistant",
                  description: "Hard surface that resists scratches from daily kitchen use."
                },
                {
                  title: "Easy Cleaning",
                  description: "Simple cleaning with soap and water—no special products needed."
                },
                {
                  title: "Wide Colour Range",
                  description: "Available in hundreds of colours, from classic whites to bold statement colours."
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

        {/* Care & Maintenance */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Care & Maintenance</span>
              <h2 className="heading-large text-foreground mt-3">Minimal maintenance, maximum beauty</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Daily Care</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Clean with warm water and mild dish soap</li>
                  <li>• Wipe dry with a soft cloth</li>
                  <li>• Use cutting boards to protect the surface</li>
                  <li>• Avoid harsh chemicals or bleach</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Heat Protection</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Use trivets or hot pads for hot pans</li>
                  <li>• Quartz can withstand moderate heat but avoid extreme temperatures</li>
                  <li>• Never place hot pans directly from the oven</li>
                  <li>• Protect with cutting boards for chopping</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Compare Options</span>
              <h2 className="heading-large text-foreground mt-3">Quartz vs Granite</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Quartz Advantages</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• No sealing required—maintenance-free</li>
                  <li>• Consistent appearance across slabs</li>
                  <li>• Non-porous surface resists bacteria</li>
                  <li>• Wide range of colours and patterns</li>
                  <li>• Easier to match for large installations</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">When to Choose Granite</h3>
                <p className="body-elegant text-muted-foreground mb-3">
                  Granite offers superior heat resistance and unique natural patterns. If you prefer the one-of-a-kind beauty of natural stone and need maximum heat resistance, <Link href="/worktops/granite-worktops" className="text-primary hover:underline">granite may be the better choice</Link>.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Choose Quartz?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Experience Quartz Worktops<br />
                <span className="text-primary">In Our Showroom</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Visit our Southampton showroom to see our extensive range of quartz worktop samples. Our team can help you choose the perfect colour and finish for your kitchen design.
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

export default QuartzWorktops;

