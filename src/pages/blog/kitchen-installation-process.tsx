/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const KitchenInstallationProcess = () => {
  return (
    <>
      <Head>
        <title>Kitchen Installation Process | What to Expect During Kitchen Installation | Fareham Kitchens</title>
        <meta
          name="description"
          content="Complete guide to the kitchen installation process. Learn what to expect, timeline, preparation, and what happens during kitchen installation in Hampshire."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/blog/kitchen-installation-process" />
        <meta property="og:title" content="Kitchen Installation Process | What to Expect During Kitchen Installation" />
        <meta property="og:description" content="Complete guide to the kitchen installation process. Learn what to expect, timeline, preparation, and what happens during kitchen installation." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/blog/kitchen-installation-process" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-12-24T00:00:00Z" />
        <meta property="article:author" content="Fareham Kitchens" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Installation Process | What to Expect During Kitchen Installation" />
        <meta name="twitter:description" content="Complete guide to the kitchen installation process. Learn what to expect, timeline, preparation, and what happens during installation." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Kitchen Installation Process | What to Expect During Kitchen Installation",
              "description": "Complete guide to the kitchen installation process. Learn what to expect, timeline, preparation, and what happens during kitchen installation in Hampshire.",
              "image": "https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp",
              "datePublished": "2025-12-24T00:00:00Z",
              "dateModified": "2025-12-24T00:00:00Z",
              "author": {
                "@type": "Organization",
                "name": "Fareham Kitchens"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Fareham Kitchens",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://farehamkitchens.co.uk/logo.webp"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://farehamkitchens.co.uk/blog/kitchen-installation-process"
              }
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Installation Guide</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Kitchen Installation<br />
                  <span className="text-primary">Process</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Understanding the kitchen installation process helps you prepare and know what to expect. This guide walks you through each stage, from preparation to final handover.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton to="/process" variant="ghost">Our Process</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src="/aok/blogimages/what_is_a_shaker_kitchen.webp"
                  alt="Kitchen installation process"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AnimatedSection className="lg:col-span-2 space-y-10">
              <article className="space-y-6 body-elegant text-muted-foreground leading-relaxed">
                <h2 className="heading-medium text-foreground">Before Installation Begins</h2>
                <p>
                  Preparation is key to a smooth installation:
                </p>

                <h3 className="heading-medium text-foreground">Pre-Installation Checklist</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Clear the space:</strong> Remove all items from existing kitchen</li>
                  <li><strong className="text-foreground">Arrange temporary kitchen:</strong> Set up cooking facilities elsewhere if needed</li>
                  <li><strong className="text-foreground">Protect other areas:</strong> Cover floors and furniture in adjacent rooms</li>
                  <li><strong className="text-foreground">Plan access:</strong> Ensure clear access for delivery and installation</li>
                  <li><strong className="text-foreground">Coordinate utilities:</strong> Arrange for water and electricity to be turned off if needed</li>
                </ul>

                <h2 className="heading-medium text-foreground">Installation Timeline</h2>
                <p>
                  Typical kitchen installation takes 1-2 weeks, depending on the scope of work:
                </p>

                <h3 className="heading-medium text-foreground">Day 1-2: Preparation & Removal</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Remove old kitchen units and appliances</li>
                  <li>Prepare walls and floors</li>
                  <li>Make any necessary structural adjustments</li>
                  <li>Install new plumbing and electrical points if needed</li>
                </ul>

                <h3 className="heading-medium text-foreground">Day 3-5: Unit Installation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Install base units and wall units</li>
                  <li>Fit tall storage and larders</li>
                  <li>Install drawer systems and internal fittings</li>
                  <li>Level and secure all units</li>
                </ul>

                <h3 className="heading-medium text-foreground">Day 6-7: Worktops & Appliances</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Template and fit worktops</li>
                  <li>Install sinks and taps</li>
                  <li>Fit and connect appliances</li>
                  <li>Install splashbacks if required</li>
                </ul>

                <h3 className="heading-medium text-foreground">Day 8-10: Finishing & Testing</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Final connections and testing</li>
                  <li>Install lighting</li>
                  <li>Final adjustments and alignment</li>
                  <li>Clean and polish</li>
                  <li>Final inspection and handover</li>
                </ul>

                <h2 className="heading-medium text-foreground">What Happens During Installation</h2>
                <p>
                  Our installation team:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Works efficiently:</strong> Minimises disruption to your daily life</li>
                  <li><strong className="text-foreground">Keeps areas clean:</strong> Maintains a tidy work environment</li>
                  <li><strong className="text-foreground">Communicates regularly:</strong> Keeps you informed of progress</li>
                  <li><strong className="text-foreground">Tests everything:</strong> Ensures all appliances and connections work</li>
                  <li><strong className="text-foreground">Cleans up:</strong> Leaves your kitchen spotless</li>
                </ul>

                <h2 className="heading-medium text-foreground">Minimising Disruption</h2>
                <p>
                  We understand that kitchen installation disrupts your home. We work to minimise this by:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Working efficiently to complete installation as quickly as possible</li>
                  <li>Keeping work areas clean and organised</li>
                  <li>Protecting adjacent areas from dust and damage</li>
                  <li>Coordinating with other tradespeople to avoid delays</li>
                  <li>Providing clear timelines so you can plan accordingly</li>
                </ul>

                <h2 className="heading-medium text-foreground">Final Handover</h2>
                <p>
                  Once installation is complete:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Walkthrough:</strong> We show you how everything works</li>
                  <li><strong className="text-foreground">Demonstration:</strong> Explain appliance operation and maintenance</li>
                  <li><strong className="text-foreground">Documentation:</strong> Provide warranties and care instructions</li>
                  <li><strong className="text-foreground">Final inspection:</strong> Check everything meets our standards</li>
                  <li><strong className="text-foreground">Aftercare:</strong> Explain our aftercare service</li>
                </ul>

                <h2 className="heading-medium text-foreground">After Installation</h2>
                <p>
                  Following installation:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>We schedule a follow-up visit to ensure everything is perfect</li>
                  <li>Any minor adjustments are made promptly</li>
                  <li>You receive all warranty documentation</li>
                  <li>Our aftercare service is available for ongoing support</li>
                </ul>

                <p>
                  Understanding the installation process helps you prepare and know what to expect. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss your kitchen installation, or <Link href="/process" className="text-primary hover:underline">learn more about our process</Link> from design through to installation.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Installation Service</h3>
                <p className="body-elegant text-muted-foreground">
                  Professional installation by our expert team.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="/process" variant="ghost">Our Process</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Related Articles</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/kitchen-renovation-guide" className="hover:text-primary transition-colors">Kitchen renovation guide</Link></li>
                  <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">View Our Projects</Link></li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default KitchenInstallationProcess;

