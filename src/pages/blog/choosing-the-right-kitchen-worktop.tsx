/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const ChoosingTheRightKitchenWorktop = () => {
  return (
    <>
      <Head>
        <title>Choosing the Right Kitchen Worktop: Quartz, Granite or Laminate</title>
        <meta
          name="description"
          content="Compare quartz, granite, and laminate kitchen worktops: pros, cons, cost, maintenance, sustainability, and how to match each surface to your style and lifestyle."
        />
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
                  Choosing the Right Kitchen Worktop:<br />
                  <span className="text-primary">Quartz, Granite or Laminate</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Worktops shape the look, feel, and practicality of your kitchen. This guide compares quartz, granite, and laminate—covering durability, heat resistance, maintenance, cost, sustainability, and which style each best suits.
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
                  src="/aok/blogimages/choosing-the-right-kitchen-worktop.jpg"
                  alt="Quartz, granite, and laminate kitchen worktop samples"
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
                  Worktops are the daily-use surface in your kitchen—where you prep food, set hot pans (sometimes without thinking), gather with friends, and showcase your design. In the UK, quartz, granite, and laminate remain the most popular choices, each with different costs, maintenance needs, and looks.
                </p>
                <p>
                  The right material depends on how you cook, entertain, and maintain your space. Below, we break down pros, cons, and real-world considerations so you can choose confidently.
                </p>

                <h3 className="heading-medium text-foreground">Quartz Worktops: Style Meets Practicality</h3>
                <p>
                  Quartz is engineered stone—around 90–95% natural quartz crystals combined with resins and pigments. It delivers a dense, non-porous surface available in marble-style veining, concretes, and uniform modern finishes.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Low maintenance:</strong> Non-porous; no sealing; resists wine, coffee, and oil stains.</li>
                  <li><strong>Consistent appearance:</strong> Engineered for even colour and pattern—ideal for sleek modern schemes.</li>
                  <li><strong>Durability:</strong> Highly scratch- and chip-resistant in normal use.</li>
                  <li><strong>Design versatility:</strong> Works across minimalist, contemporary, and warm farmhouse palettes.</li>
                </ul>
                <p className="italic text-foreground/80">
                  Consider: heat sensitivity (use trivets), mid-to-high price bracket, and faint seams on large runs.
                </p>

                <h3 className="heading-medium text-foreground">Granite Worktops: Timeless Natural Beauty</h3>
                <p>
                  Granite is quarried natural stone—every slab unique. It brings authentic character, depth, and a sense of permanence to luxury kitchens.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Outstanding durability:</strong> Extremely tough; good for baking and moderate heat.</li>
                  <li><strong>Natural variation:</strong> One-of-a-kind veining and speckles for statement islands.</li>
                  <li><strong>Perceived value:</strong> Seen as a premium feature that can enhance resale appeal.</li>
                  <li><strong>Lifespan:</strong> Decades of use with correct care.</li>
                </ul>
                <p className="italic text-foreground/80">
                  Consider: periodic sealing, heavy weight (professional install essential), higher cost, and pattern-matching across joins.
                </p>

                <h3 className="heading-medium text-foreground">Laminate Worktops: Affordable and Versatile</h3>
                <p>
                  Laminate pairs a printed decorative layer with a chipboard or MDF core and protective coating. Modern options convincingly mimic stone or timber at a fraction of the price.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Budget-friendly:</strong> Ideal for first homes, rentals, or phased renovations.</li>
                  <li><strong>Lightweight:</strong> Faster, easier installs and simpler replacements.</li>
                  <li><strong>Design variety:</strong> Endless patterns, from marble effects to warm oaks.</li>
                  <li><strong>Low maintenance:</strong> No sealing; wipe with mild detergent.</li>
                </ul>
                <p className="italic text-foreground/80">
                  Consider: lower heat and scratch resistance, not repairable after deep damage, shorter lifespan, and more visible joins.
                </p>

                <h3 className="heading-medium text-foreground">Comparing Quartz, Granite and Laminate at a Glance</h3>
                <div className="overflow-x-auto border border-border">
                  <table className="w-full text-left text-sm md:text-base">
                    <thead className="bg-secondary text-foreground">
                      <tr>
                        <th className="p-3">Feature</th>
                        <th className="p-3">Quartz</th>
                        <th className="p-3">Granite</th>
                        <th className="p-3">Laminate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr>
                        <td className="p-3">Material type</td>
                        <td className="p-3">Engineered stone</td>
                        <td className="p-3">Natural stone</td>
                        <td className="p-3">Printed laminate on composite core</td>
                      </tr>
                      <tr>
                        <td className="p-3">Look</td>
                        <td className="p-3">Consistent; wide colour range</td>
                        <td className="p-3">Unique; every slab differs</td>
                        <td className="p-3">Imitates stone, wood, solids</td>
                      </tr>
                      <tr>
                        <td className="p-3">Durability</td>
                        <td className="p-3">Very high</td>
                        <td className="p-3">Extremely high</td>
                        <td className="p-3">Low–moderate</td>
                      </tr>
                      <tr>
                        <td className="p-3">Maintenance</td>
                        <td className="p-3">No sealing</td>
                        <td className="p-3">Seal every 1–2 years</td>
                        <td className="p-3">Minimal</td>
                      </tr>
                      <tr>
                        <td className="p-3">Heat resistance</td>
                        <td className="p-3">Moderate</td>
                        <td className="p-3">Very high</td>
                        <td className="p-3">Low</td>
                      </tr>
                      <tr>
                        <td className="p-3">Installed cost (approx.)</td>
                        <td className="p-3">£300–£600 per m²</td>
                        <td className="p-3">£400–£800 per m²</td>
                        <td className="p-3">£50–£200 per m²</td>
                      </tr>
                      <tr>
                        <td className="p-3">Best for</td>
                        <td className="p-3">Modern, low-maintenance kitchens</td>
                        <td className="p-3">Luxury, natural statements</td>
                        <td className="p-3">Budget updates & rentals</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground">Pricing is indicative and varies by supplier, thickness, templating, and installation complexity.</p>

                <h3 className="heading-medium text-foreground">Matching Worktops to Your Kitchen Style</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Modern & minimalist:</strong> Polished quartz or granite with clean edges; light tones to keep spaces open.</li>
                  <li><strong>Country & Shaker:</strong> Textured granite or warm stone/wood-effect laminates pair with framed doors.</li>
                  <li><strong>Contemporary family:</strong> Quartz balances durability with elegance; mid-tones hide crumbs yet reflect light.</li>
                  <li><strong>Landlords/budget:</strong> Quality laminate offers best ROI and easy replacement if worn.</li>
                </ul>

                <h3 className="heading-medium text-foreground">Practical Considerations Before You Buy</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Usage habits:</strong> Heavy cooking or baking? Choose higher heat resistance (granite) or tough quartz.</li>
                  <li><strong>Maintenance:</strong> Prefer low upkeep? Quartz or laminate trump porous granite.</li>
                  <li><strong>Lighting & space:</strong> Dark tops can shrink small rooms; light tops brighten and balance glazing.</li>
                  <li><strong>Edge profiles:</strong> Square, bevel, or bullnose change the look—and in laminate, impact longevity.</li>
                  <li><strong>Installation quality:</strong> Professional templating and fitting are essential for seamless joins and lifespan.</li>
                </ul>

                <h3 className="heading-medium text-foreground">Environmental and Sustainability Factors</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Quartz:</strong> Some ranges include recycled glass or reclaimed stone.</li>
                  <li><strong>Granite:</strong> Durable and long-lasting; locally sourced stone reduces transport impact.</li>
                  <li><strong>Laminate:</strong> Lower production energy; lightweight for transport, but not easily recyclable.</li>
                </ul>
                <p>
                  If sustainability matters, ask about eco-certified suppliers, recycled content, and local fabrication options.
                </p>

                <h3 className="heading-medium text-foreground">The Installation and Aftercare Process</h3>
                <p>
                  At Fareham Kitchens we template, fabricate, and install every worktop with precision:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Templating:</strong> Exact measurements for corners, joins, sinks, and hobs.</li>
                  <li><strong>Fabrication:</strong> Quartz and granite cut, edged, and polished to the template.</li>
                  <li><strong>Installation:</strong> Professional fitting, sealing, and alignment for seamless joints.</li>
                  <li><strong>Aftercare:</strong> Cleaning and maintenance guidance tailored to your chosen surface.</li>
                </ul>

                <h3 className="heading-medium text-foreground">Final Thoughts</h3>
                <p>
                  Choose quartz for sleek looks and minimal maintenance, granite for natural luxury and heat resilience, or laminate for budget-friendly versatility. Each has a place—it’s about matching the surface to your lifestyle, cooking habits, and desired aesthetic.
                </p>
                <p>
                  Want to see full-size samples and pair them with cabinetry, flooring, and lighting? <Link href="/contact" className="text-primary hover:text-primary/80 underline">Book a showroom visit</Link> or <Link href="/services" className="text-primary hover:text-primary/80 underline">explore our services</Link> to plan your new kitchen with accurate guidance.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Plan your worktop</h3>
                <p className="body-elegant text-muted-foreground">
                  Compare quartz, granite, and laminate in our showroom. We’ll align material choice with your cooking habits, lighting, and cabinetry.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="/brochures" variant="ghost">Download Brochure</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Explore</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/affordable-kitchen-worktops-materials" className="hover:text-primary transition-colors">Affordable worktops</Link></li>
                  <li><Link href="/blog/what-is-a-shaker-kitchen" className="hover:text-primary transition-colors">What is a Shaker kitchen?</Link></li>
                  <li><Link href="/blog/kitchen-prices-uk" className="hover:text-primary transition-colors">Kitchen prices UK</Link></li>
                  <li><Link href="/services/modern-kitchens" className="hover:text-primary transition-colors">Modern kitchens</Link></li>
                  <li><Link href="/services/shaker-kitchens" className="hover:text-primary transition-colors">Shaker kitchens</Link></li>
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

export default ChoosingTheRightKitchenWorktop;
