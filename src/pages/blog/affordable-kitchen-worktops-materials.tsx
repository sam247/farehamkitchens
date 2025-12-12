/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const AffordableWorktops = () => {
  return (
    <>
      <Head>
        <title>Affordable Kitchen Worktop Materials | Fareham Kitchens</title>
        <meta
          name="description"
          content="Budget-friendly kitchen worktops: laminate, solid wood, concrete, tile, solid surface, and sustainable options with pros, costs, and maintenance."
        />
        <meta property="og:title" content="Affordable Kitchen Worktop Materials | Fareham Kitchens" />
        <meta property="og:description" content="Budget-friendly kitchen worktops: laminate, solid wood, concrete, tile, solid surface, and sustainable options with pros, costs, and maintenance." />
        <meta property="og:image" content="https://www.farehamkitchens.co.uk/aok/blogimages/affordable-kitchen-worktops.jpg" />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/blog/affordable-kitchen-worktops-materials" />
        <meta property="og:type" content="article" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Materials Guide</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Affordable Kitchen<br />
                  <span className="text-primary">Worktop Materials</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Budget-friendly worktops that balance style, durability, and maintenance—ideal for UK kitchens needing value without sacrificing design.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton to="/brochures" variant="ghost">Download Brochure</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src="/aok/blogimages/affordable-kitchen-worktops.jpg"
                  alt="Affordable kitchen worktops"
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
                <p>
                  The right worktop sets the tone for your kitchen—functionally and aesthetically. Here are the best affordable kitchen worktop materials in the UK, with costs, pros, and maintenance tips.
                </p>

                <h3 className="heading-medium text-foreground">Laminate: most affordable</h3>
                <p>
                  Laminate worktops start around £10–£50 per sq ft. Modern printing makes laminate convincingly mimic granite, marble, wood, or slate. Lightweight, easy to cut, DIY-friendly, and simple to clean with soapy water.
                </p>
                <p>
                  Watch-outs: prone to scratches, heat marks, and edge moisture if not cared for. Not easily repairable—but unbeatable at this price point.
                </p>

                <h3 className="heading-medium text-foreground">Solid wood: warmth and character</h3>
                <p>
                  Typically £300–£900 depending on species. Butcher block, veneers, or MDF-core options keep costs lower. Wood gains a patina over time and suits traditional or modern schemes.
                </p>
                <p>
                  Requires periodic oiling; protect from hot pans and pooled water. The tactile appeal and natural ageing offset the maintenance.
                </p>

                <h3 className="heading-medium text-foreground">Concrete: industrial on a budget</h3>
                <p>
                  Around £50–£100 per sq ft. Customisable shapes, colours, and finishes; can embed decorative elements. Durable and heat resistant; DIY pour can cut costs.
                </p>
                <p>
                  Needs regular sealing to resist stains (especially acids). Can be repaired, but ongoing care is required.
                </p>

                <h3 className="heading-medium text-foreground">Tile: variety and easy repair</h3>
                <p>
                  Ceramic/porcelain tile is budget-friendly with huge design range—even premium stone looks. DIY-installable; individual tiles can be replaced if damaged.
                </p>
                <p>
                  Grout needs cleaning and periodic sealing to avoid staining. Heat resistant and hygienic with routine care.
                </p>

                <h3 className="heading-medium text-foreground">Solid surface: low-maintenance middle ground</h3>
                <p>
                  Typically £30–£120 per sq ft. Non-porous, hygienic, and seamless; scratches and minor burns can be sanded out. Wide colour range and modern joins.
                </p>
                <p>
                  Usually professionally installed for a seamless finish, but still cheaper than premium stone.
                </p>

                <h3 className="heading-medium text-foreground">Sustainable options</h3>
                <p>
                  Recycled plastic (e.g., Durat) or paper-based options (e.g., Richlite) offer eco-friendly alternatives with quartz-like looks and good durability. Expect mid-range pricing with strong sustainability credentials.
                </p>

                <h3 className="heading-medium text-foreground">How to choose</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Budget vs maintenance: laminate for lowest cost; solid surface for easy care; wood for character.</li>
                  <li>Heat and wear: use trivets on laminate/wood; seal concrete; refresh grout on tile.</li>
                  <li>DIY vs pro: laminate and tile suit DIY; solid surface and concrete benefit from pro install.</li>
                </ul>

                <p>
                  Affordable worktops today look and perform far better than older budget options. Modern laminates, solid surfaces, and sustainable materials give you style and practicality without premium prices.
                </p>
                <p>
                  <Link href="/projects" className="text-primary hover:text-primary/80 underline">View our kitchens</Link> or <Link href="/contact" className="text-primary hover:text-primary/80 underline">talk to our team</Link> to plan worktops that fit your budget, lifestyle, and aesthetic.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Plan your worktops</h3>
                <p className="body-elegant text-muted-foreground">
                  We’ll help you choose and fit budget-friendly worktops—laminate, solid surface, wood, or sustainable options.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="/brochures" variant="ghost">Download Brochure</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Explore</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/kitchen-prices-uk" className="hover:text-primary transition-colors">Kitchen prices in the UK</Link></li>
                  <li><Link href="/blog/best-kitchen-appliances-for-small-uk-homes" className="hover:text-primary transition-colors">Best appliances for small kitchens</Link></li>
                  <li><Link href="/blog/what-is-a-shaker-kitchen" className="hover:text-primary transition-colors">What is a Shaker kitchen?</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">See Our Projects</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
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

export default AffordableWorktops;

