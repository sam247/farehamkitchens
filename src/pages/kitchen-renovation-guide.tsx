import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const KitchenRenovationGuide = () => {
  return (
    <>
      <Head>
        <title>Kitchen Renovation Guide 2025 | Complete Kitchen Renovation Checklist | Fareham Kitchens</title>
        <meta
          name="description"
          content="Complete kitchen renovation guide for 2025. Step-by-step checklist, planning tips, budget advice. From our Fareham showroom."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/kitchen-renovation-guide" />
        <meta property="og:title" content="Kitchen Renovation Guide 2025 | Complete Kitchen Renovation Checklist | Fareham Kitchens" />
        <meta property="og:description" content="Complete kitchen renovation guide for 2025. Step-by-step checklist, planning tips, budget advice, and timeline for kitchen renovations." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/kitchen-renovation-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Renovation Guide 2025 | Complete Kitchen Renovation Checklist" />
        <meta name="twitter:description" content="Complete kitchen renovation guide for 2025. Step-by-step checklist, planning tips, budget advice, and timeline." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Kitchen Renovation Guide 2025 | Complete Kitchen Renovation Checklist",
              "description": "Complete kitchen renovation guide for 2025. Step-by-step checklist, planning tips, budget advice, and timeline.",
              "image": "https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp",
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
                "@id": "https://farehamkitchens.co.uk/kitchen-renovation-guide"
              }
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-34 pb-20 lg:pt-56 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Complete Guide</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Kitchen Renovation" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Guide 2025" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Everything you need to know about planning, budgeting, and executing a successful kitchen renovation. From initial inspiration to final installation, this comprehensive guide covers every step of the process.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Planning Phase */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Phase 1: Planning</span>
              <h2 className="heading-large text-foreground mt-3">Planning your kitchen renovation</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">1. Define Your Goals</h3>
                <p className="body-elegant text-muted-foreground mb-3">
                  Start by identifying what you want to achieve:
                </p>
                <ul className="space-y-2 body-elegant text-muted-foreground list-disc list-inside">
                  <li>More storage and workspace</li>
                  <li>Better layout and workflow</li>
                  <li>Modern appliances and technology</li>
                  <li>Updated style and finishes</li>
                  <li>Increased property value</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">2. Set Your Budget</h3>
                <p className="body-elegant text-muted-foreground mb-3">
                  Establish a realistic budget early. Consider:
                </p>
                <ul className="space-y-2 body-elegant text-muted-foreground list-disc list-inside">
                  <li>Kitchen units and cabinetry (30-35% of total)</li>
                  <li>Appliances (15-20% of total)</li>
                  <li>Worktops (10-15% of total)</li>
                  <li>Installation and labour (15-20% of total)</li>
                  <li>Plumbing, electrical, and building work (10-15% of total)</li>
                  <li>Contingency fund (10-15% for unexpected costs)</li>
                </ul>
                <p className="body-elegant text-muted-foreground mt-4">
                  <Link href="/blog/kitchen-prices-uk" className="text-primary hover:underline">See our detailed kitchen prices guide</Link> for more information.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">3. Research and Inspiration</h3>
                <p className="body-elegant text-muted-foreground">
                  Gather inspiration from magazines, websites, and showrooms. Create a mood board of styles, colours, and features you love. Visit our <Link href="/" className="text-primary hover:underline">Fareham showroom</Link> to see kitchen ranges, materials, and finishes in person.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Design Phase */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Phase 2: Design</span>
              <h2 className="heading-large text-foreground mt-3">Design development</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40">
                <h3 className="heading-medium text-foreground mb-3">Initial Consultation</h3>
                <p className="body-elegant text-muted-foreground">
                  Book a consultation to discuss your vision, lifestyle, and requirements. We&apos;ll measure your space, understand your cooking habits, and explore design options. This typically takes 1-2 hours and can be at our showroom or your home.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40">
                <h3 className="heading-medium text-foreground mb-3">3D Visualisations</h3>
                <p className="body-elegant text-muted-foreground">
                  Our designers create detailed 3D CAD drawings showing your new kitchen from every angle. You&apos;ll see exactly how it will look, how the layout works, and how materials and finishes come together. This process typically takes 2-4 weeks.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-secondary/40">
                <h3 className="heading-medium text-foreground mb-3">Material Selection</h3>
                <p className="body-elegant text-muted-foreground">
                  Choose cabinetry finishes, worktops, appliances, and hardware. We&apos;ll help you select materials that match your style, budget, and lifestyle. Visit our showroom to see and feel samples in person.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Installation Phase */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Phase 3: Installation</span>
              <h2 className="heading-large text-foreground mt-3">Installation process</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Preparation</h3>
                <p className="body-elegant text-muted-foreground">
                  Before installation begins, we&apos;ll coordinate with any builders or tradespeople needed for structural work, plumbing, or electrical updates. We ensure everything is ready for a smooth installation.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Installation Timeline</h3>
                <p className="body-elegant text-muted-foreground mb-3">
                  Typical installation takes 1-2 weeks:
                </p>
                <ul className="space-y-2 body-elegant text-muted-foreground list-disc list-inside">
                  <li><strong className="text-foreground">Day 1-2:</strong> Remove old kitchen, prepare space</li>
                  <li><strong className="text-foreground">Day 3-5:</strong> Install new units and cabinetry</li>
                  <li><strong className="text-foreground">Day 6-7:</strong> Fit worktops and appliances</li>
                  <li><strong className="text-foreground">Day 8-10:</strong> Final connections, testing, and finishing touches</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Minimal Disruption</h3>
                <p className="body-elegant text-muted-foreground">
                  We work efficiently to minimise disruption to your daily life. Our team keeps the work area clean and organised, and we&apos;ll discuss temporary kitchen arrangements if needed during the renovation.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Renovation Checklist</span>
              <h2 className="heading-large text-foreground mt-3">Kitchen renovation checklist</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-4">
              {[
                { phase: "Planning", items: ["Define goals and requirements", "Set realistic budget", "Research styles and materials", "Book initial consultation", "Measure existing space"] },
                { phase: "Design", items: ["Review 3D visualisations", "Select materials and finishes", "Choose appliances", "Finalise layout", "Approve design and place order"] },
                { phase: "Preparation", items: ["Arrange building work if needed", "Order appliances", "Plan temporary kitchen setup", "Clear existing kitchen", "Coordinate tradespeople"] },
                { phase: "Installation", items: ["Remove old kitchen", "Install new units", "Fit worktops", "Connect appliances", "Final inspection and handover"] },
                { phase: "Aftercare", items: ["Learn how to care for your kitchen", "Register warranties", "Schedule follow-up visit", "Enjoy your new kitchen!"] }
              ].map((section, idx) => (
                <AnimatedSection key={section.phase} delay={0.05 * idx} className="p-6 border border-border bg-secondary/40">
                  <h3 className="heading-medium text-foreground mb-4">{section.phase}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 body-elegant text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Avoid Common Mistakes</span>
              <h2 className="heading-large text-foreground mt-3">Common kitchen renovation mistakes to avoid</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Insufficient Budget Planning</h3>
                <p className="body-elegant text-muted-foreground">
                  Always include a contingency fund (10-15%) for unexpected costs. Don&apos;t forget to budget for building work, electrical, plumbing, and finishing touches.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Poor Layout Planning</h3>
                <p className="body-elegant text-muted-foreground">
                  Consider your workflow and how you use your kitchen. The triangle between sink, hob, and fridge should be efficient, and storage should be accessible where you need it.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Inadequate Storage</h3>
                <p className="body-elegant text-muted-foreground">
                  Plan for more storage than you think you need. Consider tall larders, deep drawers, and clever corner solutions. <Link href="/kitchen-storage" className="text-primary hover:underline">See our storage solutions</Link> for ideas.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Skipping Professional Design</h3>
                <p className="body-elegant text-muted-foreground">
                  Professional design ensures your kitchen works perfectly for your space and lifestyle. 3D visualisations help you see potential issues before installation begins.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Start Your Renovation?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Let&apos;s Plan Your<br />
                <span className="text-primary">Kitchen Renovation</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation to discuss your kitchen renovation project. We&apos;ll guide you through every step, from initial planning to final installation.
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

export default KitchenRenovationGuide;

