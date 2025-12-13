/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const BestAppliancesSmallHomes = () => {
  return (
    <>
      <Head>
        <title>Best Kitchen Appliances for Small UK Homes | Fareham Kitchens</title>
        <meta
          name="description"
          content="Compact ovens, hobs, cooling, dishwashers, laundry, and smart tech to maximise space in small UK kitchens—curated by Fareham Kitchens."
        />
        <meta property="og:title" content="Best Kitchen Appliances for Small UK Homes | Fareham Kitchens" />
        <meta property="og:description" content="Compact ovens, hobs, cooling, dishwashers, laundry, and smart tech to maximise space in small UK kitchens—curated by Fareham Kitchens." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/blogimages/best-kitchen-appliances-for-small-uk-homes.jpg" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/blog/best-kitchen-appliances-for-small-uk-homes" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Kitchen Appliances for Small UK Homes | Fareham Kitchens" />
        <meta name="twitter:description" content="Compact ovens, hobs, cooling, dishwashers, laundry, and smart tech to maximise space in small UK kitchens—curated by Fareham Kitchens." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/blogimages/best-kitchen-appliances-for-small-uk-homes.jpg" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Appliance Guide</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Best Kitchen Appliances<br />
                  <span className="text-primary">for Small UK Homes</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Smart choices for compact kitchens: combi ovens, slimline dishwashers, integrated cooling, and multifunctional small appliances tailored to city flats and cottages alike.
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
                  src="/aok/blogimages/best-kitchen-appliances-for-small-uk-homes.jpg"
                  alt="Compact kitchen appliances"
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
                  Designing a kitchen in a smaller space can feel challenging, but with the right appliances, smart design, and clever storage, it can look stunning and work brilliantly. Here’s how to choose the best kitchen appliances for small UK homes—balancing practicality, efficiency, and aesthetics.
                </p>
                <p>
                  We also pair new kitchen designs with premium appliances via our sister company, <Link href="https://premiumappliances.co.uk" className="text-primary hover:text-primary/80 underline" target="_blank" rel="noreferrer">premiumappliances.co.uk</Link>.
                </p>

                <h3 className="heading-medium text-foreground">Why smart appliance choices matter</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Save space and keep layouts uncluttered.</li>
                  <li>Improve energy efficiency and running costs.</li>
                  <li>Leverage smart-home features for convenience.</li>
                  <li>Enhance usability for couples, families, and professionals.</li>
                </ul>
                <p>
                  Focus on built-in, integrated, or multifunctional appliances to achieve both luxury and functionality—even in the smallest kitchens.
                </p>

                <h3 className="heading-medium text-foreground">Compact cooking: ovens and hobs</h3>
                <p><strong>1. Combi ovens:</strong> Combine oven, microwave, and grill in one 45cm unit with moisture control and rapid pre-heat.</p>
                <p><strong>2. Two-zone or domino induction hobs:</strong> Precise, safe, and space-saving. Mix induction with a wok/gas module for flexibility.</p>

                <h3 className="heading-medium text-foreground">Cooling solutions</h3>
                <p><strong>3. Integrated fridge freezers:</strong> 70/30 or 60/40 layouts with No Frost, quiet operation, and seamless fronts.</p>
                <p><strong>4. Under-counter fridges/freezers:</strong> Great for small households; keep a continuous worktop and reversible doors.</p>

                <h3 className="heading-medium text-foreground">Efficient cleaning</h3>
                <p><strong>5. Slimline integrated dishwashers (45cm):</strong> 9–10 place settings, quiet, eco modes, adjustable racks.</p>
                <p><strong>6. Countertop dishwashers:</strong> Portable convenience for 4–6 place settings; minimal installation.</p>

                <h3 className="heading-medium text-foreground">Laundry for compact spaces</h3>
                <p><strong>7. Washer-dryer combos:</strong> One drum, no venting needed; load-sensing tech and energy efficient.</p>
                <p><strong>8. Compact washing machines:</strong> 60cm wide, 45–55cm deep; quiet inverter motors for open-plan living.</p>

                <h3 className="heading-medium text-foreground">Small appliances, big impact</h3>
                <p><strong>9. Combination microwaves:</strong> Roast, bake, grill, and reheat in a wall-cabinet-sized unit.</p>
                <p><strong>10. Air fryers and mini ovens:</strong> Multi-function cookers that double as second ovens.</p>

                <h3 className="heading-medium text-foreground">Ventilation and water</h3>
                <p><strong>11. Integrated or downdraft cooker hoods:</strong> Retract to keep sightlines open; excellent for open-plan layouts.</p>
                <p><strong>12. Boiling water taps:</strong> Save counter space, heat only what you need; Quooker leads the market.</p>

                <h3 className="heading-medium text-foreground">Smart tech and energy efficiency</h3>
                <p><strong>13. Compact coffee machines:</strong> Built-in or countertop with smart controls for dosing and maintenance.</p>
                <p><strong>14. Smart ovens and fridges:</strong> Wi-Fi cooking modes, voice control, and inventory-aware features.</p>

                <h3 className="heading-medium text-foreground">Recommended brands for small kitchens</h3>
                <p>
                  Neff (Slide & Hide), Bosch, Miele, Siemens, and Quooker are trusted for compact, integrated systems. Explore these via our partner, <Link href="https://premiumappliances.co.uk" className="text-primary hover:text-primary/80 underline" target="_blank" rel="noreferrer">premiumappliances.co.uk</Link>.
                </p>

                <h3 className="heading-medium text-foreground">Design tips for small UK kitchens</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Integrate appliances to reduce visual clutter.</li>
                  <li>Go vertical with tall units for ovens and storage.</li>
                  <li>Choose handleless cabinetry for a streamlined look.</li>
                  <li>Use light tones and reflective finishes to open the space.</li>
                  <li>Optimise workflow zones for prep, cook, and wash.</li>
                </ul>
                <p>
                  Small kitchens can rival larger ones with the right plan. We’ll design and install a cohesive scheme—cabinetry, storage, worktops, and appliances—tailored to your space.
                </p>

                <h3 className="heading-medium text-foreground">Transform your compact kitchen with Fareham Kitchens</h3>
                <p>
                  We create bespoke fitted kitchens across Hampshire and the South, integrating premium compact appliances and space-saving cabinetry. Our partnership with premiumappliances.co.uk gives you access to leading brands for small-space living.
                </p>
                <p>
                  <Link href="/contact" className="text-primary hover:text-primary/80 underline">Contact our design team</Link> or visit our Hampshire showroom to plan your compact kitchen that maximises space and elevates daily life.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Plan your compact kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  Book a design consultation or download our brochure to explore compact layouts, appliances, and finishes.
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
                  <li><Link href="/blog/what-is-a-shaker-kitchen" className="hover:text-primary transition-colors">What is a Shaker kitchen?</Link></li>
                  <li><Link href="/blog/affordable-kitchen-worktops-materials" className="hover:text-primary transition-colors">Affordable worktops</Link></li>
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

export default BestAppliancesSmallHomes;

