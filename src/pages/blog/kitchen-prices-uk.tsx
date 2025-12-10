/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const KitchenPricesUK = () => {
  return (
    <>
      <Head>
        <title>Average Kitchen Prices in the UK 2025 | Fareham Kitchens</title>
        <meta
          name="description"
          content="Kitchen prices in the UK for 2025: costs by size, budget, materials, appliances, labour, and tips to plan your renovation."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Budget & Planning</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Average Kitchen Prices<br />
                  <span className="text-primary">in the UK 2025</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  A comprehensive guide to 2025 kitchen costs—covering sizes, budgets, materials, appliances, labour, and how to plan your renovation with confidence.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton href="/Andrew-Osborne-Brochure.pdf" variant="ghost">Download Brochure</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src="/aok/blogimages/window-prices-uk.jpg"
                  alt="Kitchen cost planning"
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
                  Kitchen renovation is one of the most significant investments you can make in your home. Whether you&apos;re aiming for a budget update or a luxury overhaul, understanding kitchen prices in the UK for 2025 is essential for informed decisions.
                </p>
                <h3 className="heading-medium text-foreground">What's the average kitchen cost?</h3>
                <p>
                  Most homeowners can expect to spend between £5,000 and £20,000 for a complete kitchen renovation. The common mid-range sits around £12,000–£20,000 with branded appliances, durable worktops, and professional fitting. Budget projects can be £3,000–£7,000; high-end bespoke can exceed £55,000+.
                </p>

                <h3 className="heading-medium text-foreground">Prices by size</h3>
                <p><strong>Small kitchens (~9m²):</strong> £4,500–£7,000 for full renovation; labour £2,200–£2,500.</p>
                <p><strong>Medium kitchens (~15m²):</strong> £7,500–£10,000; mid-range £12,000–£15,000; labour £3,000–£3,500.</p>
                <p><strong>Large kitchens (20m²+):</strong> £10,000–£20,000+; labour £4,600–£5,000; premium bespoke £25,000–£60,000+.</p>

                <h3 className="heading-medium text-foreground">Costs by component</h3>
                <p><strong>Cabinets:</strong> £1,500–£3,000 for standard; handmade/bespoke £5,000–£15,000+.</p>
                <p><strong>Worktops (per 5m run):</strong> Laminate £200–£800; wood £300–£900; quartz £500–£1,100; granite £550–£1,150. A fitted quartz/granite package may be £2,500–£4,500+.</p>
                <p><strong>Appliances:</strong> Mid-range set £2,000–£3,500; premium integrated £5,000–£10,000+. Fridge freezers £300–£2,300+; ovens £150–£1,000+; hobs £60–£400+; dishwashers £200–£800+; extractors £130–£2,000+.</p>
                <p><strong>Flooring & tiling:</strong> £1,000–£3,500 depending on material/area.</p>
                <p><strong>Plumbing & electrics:</strong> £1,000–£4,000 each, higher for rewires, smart, or layout moves.</p>
                <p><strong>Lighting:</strong> £500–£2,500 for spots, pendants, LED strips.</p>
                <p><strong>Labour/fitting:</strong> £3,500–£9,500; day rates ~£250–£350; hourly ~£37.</p>
                <p><strong>Finishing touches:</strong> £300–£1,500 for handles, taps, splashbacks, paint.</p>

                <h3 className="heading-medium text-foreground">Budget tiers</h3>
                <p><strong>Budget (£6,000–£12,000):</strong> Stock/flat-pack units, laminate tops, minimal layout changes, local fitter or DIY.</p>
                <p><strong>Mid-range (£12,000–£25,000):</strong> Semi-bespoke cabinetry, quartz/granite tops, branded appliances, pro install with building regs compliance.</p>
                <p><strong>High-end (£25,000–£60,000+):</strong> Handmade cabinetry, premium stone (marble/Dekton), top-end appliances, structural changes, managed install.</p>

                <h3 className="heading-medium text-foreground">Location impact</h3>
                <p>
                  London/South East can be ~20% higher on labour. Northern regions and smaller towns often offer more competitive pricing. Always get multiple quotes from local kitchen fitters.
                </p>

                <h3 className="heading-medium text-foreground">Cost-saving tips</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Add 10–15% contingency for surprises (damp, rewiring).</li>
                  <li>Phase upgrades: cabinetry now, appliances later.</li>
                  <li>Material swaps: laminate/wood tops vs stone; vinyl/laminate vs premium tiles.</li>
                  <li>Use stock units/off-the-shelf components where possible.</li>
                  <li>DIY finishing touches like painting or handles.</li>
                </ul>

                <h3 className="heading-medium text-foreground">Planning your 2025 kitchen budget</h3>
                <p>
                  Allocate by priority. A typical split: 30–35% units, 15–20% appliances, 10–15% worktops, 15–20% labour, remainder to flooring, electrics, plumbing, finishes. Don’t rush decisions; ensure quotes include building regulations and installation details.
                </p>

                <p>
                  At Fareham Kitchens, we design and install bespoke kitchens across Hampshire and the South—handleless, Shaker, granite and quartz worktops, and premium appliances. <Link href="/projects" className="text-primary hover:text-primary/80 underline">View our projects</Link> or <Link href="/contact" className="text-primary hover:text-primary/80 underline">book a consultation</Link> to plan your space with accurate, transparent pricing.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Plan your budget</h3>
                <p className="body-elegant text-muted-foreground">
                  We’ll help you scope costs, select materials, and balance value with long-term quality for your new kitchen.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton href="/Andrew-Osborne-Brochure.pdf" variant="ghost">Download Brochure</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Explore</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/best-kitchen-appliances-for-small-uk-homes" className="hover:text-primary transition-colors">Best appliances for small kitchens</Link></li>
                  <li><Link href="/blog/what-is-a-shaker-kitchen" className="hover:text-primary transition-colors">What is a Shaker kitchen?</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">See Our Projects</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                  <li><Link href="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
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

export default KitchenPricesUK;

