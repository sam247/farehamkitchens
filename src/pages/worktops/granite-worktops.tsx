import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const GraniteWorktops = () => {
  return (
    <>
      <Head>
        <title>Granite Worktops Hampshire | Natural Stone Kitchen Worktops | Fareham Kitchens</title>
        <meta
          name="description"
          content="Premium granite worktops in Hampshire. Natural stone kitchen worktops, heat-resistant, durable, and available in a wide range of colours. Expert installation by Fareham Kitchens."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/worktops/granite-worktops" />
        <meta property="og:title" content="Granite Worktops Hampshire | Natural Stone Kitchen Worktops | Fareham Kitchens" />
        <meta property="og:description" content="Premium granite worktops in Hampshire. Natural stone kitchen worktops, heat-resistant, durable, and available in a wide range of colours." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/worktops/granite-worktops" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Granite Worktops Hampshire | Natural Stone Kitchen Worktops" />
        <meta name="twitter:description" content="Premium granite worktops in Hampshire. Natural stone kitchen worktops, heat-resistant, durable, and available in a wide range of colours." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Granite Kitchen Worktops",
              "description": "Premium natural stone granite worktops for kitchens in Hampshire",
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
                  <span className="label-uppercase text-primary">Granite Worktops</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Natural stone, timeless elegance</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Granite worktops bring the beauty of natural stone into your kitchen. Each slab is unique, with distinctive patterns and colours that create a one-of-a-kind surface. Heat-resistant, scratch-resistant, and incredibly durable, granite worktops are perfect for busy family kitchens and will last for decades with proper care.
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
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Granite kitchen worktop" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Why Choose Granite</span>
              <h2 className="heading-large text-foreground mt-3">Durability meets natural beauty</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Heat Resistant",
                  description: "Place hot pans directly on granite without damage. Perfect for busy cooking."
                },
                {
                  title: "Scratch Resistant",
                  description: "Harder than most materials, granite resists scratches from daily use."
                },
                {
                  title: "Unique Patterns",
                  description: "Each granite slab is one-of-a-kind with natural veining and colour variations."
                },
                {
                  title: "Long Lasting",
                  description: "With proper sealing and care, granite worktops last for decades."
                },
                {
                  title: "Easy Maintenance",
                  description: "Regular cleaning with mild soap and water keeps granite looking pristine."
                },
                {
                  title: "Value for Money",
                  description: "Premium material that adds value to your home and stands the test of time."
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
              <h2 className="heading-large text-foreground mt-3">Keeping your granite worktop perfect</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Daily Care</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Clean with warm water and mild dish soap</li>
                  <li>• Wipe dry with a soft cloth to prevent water spots</li>
                  <li>• Use cutting boards to protect the surface</li>
                  <li>• Avoid harsh chemicals or abrasive cleaners</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Sealing & Protection</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Granite should be sealed annually for best protection</li>
                  <li>• We provide sealing services as part of our aftercare</li>
                  <li>• Sealed granite resists stains and bacteria</li>
                  <li>• Professional sealing ensures long-term durability</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Colour Options */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Colour Range</span>
              <h2 className="heading-large text-foreground mt-3">Find your perfect granite</h2>
              <p className="body-elegant text-muted-foreground max-w-3xl mx-auto mt-4">
                Granite comes in a vast array of colours, from classic blacks and whites to warm browns, elegant greys, and striking blues. Visit our showroom to see our full range of granite samples and find the perfect match for your kitchen design.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Compare Options</span>
              <h2 className="heading-large text-foreground mt-3">Granite vs Other Worktops</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40">
                <h3 className="heading-medium text-foreground mb-3">Granite vs Quartz</h3>
                <p className="body-elegant text-muted-foreground mb-3">
                  Granite is 100% natural stone with unique patterns, while quartz is engineered for consistency. Granite offers superior heat resistance, while quartz requires less maintenance. <Link href="/worktops/quartz-worktops" className="text-primary hover:underline">Compare quartz worktops</Link> to find the best fit for your kitchen.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40">
                <h3 className="heading-medium text-foreground mb-3">Granite vs Laminate</h3>
                <p className="body-elegant text-muted-foreground">
                  Granite is significantly more durable and heat-resistant than laminate, with a premium appearance that adds value to your home. While laminate is more budget-friendly, granite offers superior longevity and performance.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Choose Granite?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Visit Our Showroom to<br />
                <span className="text-primary">See Granite Samples</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Experience the beauty and quality of granite worktops in person. Our showroom features a wide selection of granite samples, and our team can help you choose the perfect option for your kitchen.
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

export default GraniteWorktops;

