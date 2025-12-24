/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const SustainableKitchenDesign = () => {
  return (
    <>
      <Head>
        <title>Sustainable Kitchen Design | Eco-Friendly Kitchens | Fareham Kitchens</title>
        <meta
          name="description"
          content="Guide to sustainable and eco-friendly kitchen design. Learn about sustainable materials, energy-efficient appliances, and creating an environmentally conscious kitchen."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/blog/sustainable-kitchen-design" />
        <meta property="og:title" content="Sustainable Kitchen Design | Eco-Friendly Kitchens | Fareham Kitchens" />
        <meta property="og:description" content="Guide to sustainable and eco-friendly kitchen design. Learn about sustainable materials, energy-efficient appliances, and creating an environmentally conscious kitchen." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/blog/sustainable-kitchen-design" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-12-24T00:00:00Z" />
        <meta property="article:author" content="Fareham Kitchens" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sustainable Kitchen Design | Eco-Friendly Kitchens" />
        <meta name="twitter:description" content="Guide to sustainable and eco-friendly kitchen design. Learn about sustainable materials and energy-efficient appliances." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Sustainable Kitchen Design | Eco-Friendly Kitchens",
              "description": "Guide to sustainable and eco-friendly kitchen design. Learn about sustainable materials, energy-efficient appliances, and creating an environmentally conscious kitchen.",
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
                "@id": "https://farehamkitchens.co.uk/blog/sustainable-kitchen-design"
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
                <span className="label-uppercase text-primary">Sustainability</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Sustainable<br />
                  <span className="text-primary">Kitchen Design</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Creating an eco-friendly kitchen doesn't mean compromising on style or quality. Learn how to design a sustainable kitchen that's beautiful, functional, and kind to the environment.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton to="/services" variant="ghost">Our Services</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src="/aok/blogimages/what_is_a_shaker_kitchen.webp"
                  alt="Sustainable kitchen design"
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
                <h2 className="heading-medium text-foreground">Why Choose Sustainable Kitchen Design?</h2>
                <p>
                  Sustainable kitchen design reduces environmental impact while creating a healthier home. By choosing responsibly sourced materials, energy-efficient appliances, and durable designs, you create a kitchen that's better for the planet and built to last.
                </p>

                <h2 className="heading-medium text-foreground">Sustainable Materials</h2>
                <p>
                  The materials you choose significantly impact your kitchen's environmental footprint:
                </p>

                <h3 className="heading-medium text-foreground">Cabinetry</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">FSC-certified wood:</strong> Ensures timber comes from responsibly managed forests</li>
                  <li><strong className="text-foreground">Recycled materials:</strong> Some manufacturers use recycled content in cabinetry</li>
                  <li><strong className="text-foreground">Low-VOC finishes:</strong> Reduce harmful emissions and improve indoor air quality</li>
                  <li><strong className="text-foreground">Durability:</strong> Quality cabinets last decades, reducing waste from replacements</li>
                </ul>

                <h3 className="heading-medium text-foreground">Worktops</h3>
                <p>
                  Consider the environmental impact of worktop materials:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Natural stone:</strong> Durable and long-lasting, but extraction has environmental impact</li>
                  <li><strong className="text-foreground">Quartz:</strong> Contains recycled materials and is very durable</li>
                  <li><strong className="text-foreground">Recycled materials:</strong> Some worktops use recycled glass or other materials</li>
                  <li><strong className="text-foreground">Local sourcing:</strong> Choosing locally sourced materials reduces transport emissions</li>
                </ul>

                <h2 className="heading-medium text-foreground">Energy-Efficient Appliances</h2>
                <p>
                  Modern appliances are significantly more energy-efficient than older models:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Energy ratings:</strong> Look for A+++ rated appliances for maximum efficiency</li>
                  <li><strong className="text-foreground">Induction hobs:</strong> More energy-efficient than gas or traditional electric</li>
                  <li><strong className="text-foreground">LED lighting:</strong> Use far less energy than traditional bulbs</li>
                  <li><strong className="text-foreground">Smart appliances:</strong> Can optimise energy use and reduce waste</li>
                </ul>
                <p>
                  <Link href="/appliances" className="text-primary hover:underline">See our appliance partners</Link> for energy-efficient options.
                </p>

                <h2 className="heading-medium text-foreground">Designing for Longevity</h2>
                <p>
                  The most sustainable kitchen is one that lasts. Designing for longevity means:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Choosing timeless styles that won't date quickly</li>
                  <li>Investing in quality materials and craftsmanship</li>
                  <li>Designing flexible layouts that adapt to changing needs</li>
                  <li>Ensuring easy maintenance and repair</li>
                </ul>

                <h2 className="heading-medium text-foreground">Waste Reduction</h2>
                <p>
                  Consider how your kitchen design reduces waste:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Recycling storage:</strong> Built-in recycling and composting solutions</li>
                  <li><strong className="text-foreground">Food waste:</strong> Composting systems and food waste disposers</li>
                  <li><strong className="text-foreground">Packaging:</strong> Consider how you'll store bulk items to reduce packaging waste</li>
                </ul>

                <h2 className="heading-medium text-foreground">Water Efficiency</h2>
                <p>
                  Kitchens use significant water. Consider:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Water-efficient dishwashers (use less water than hand-washing)</li>
                  <li>Tap aerators to reduce water flow</li>
                  <li>Instant boiling water taps to avoid boiling full kettles</li>
                  <li>Efficient plumbing design</li>
                </ul>

                <h2 className="heading-medium text-foreground">Creating Your Sustainable Kitchen</h2>
                <p>
                  Sustainable kitchen design balances environmental considerations with functionality and style. <Link href="/contact" className="text-primary hover:underline">Work with our designers</Link> to create a kitchen that's beautiful, functional, and environmentally conscious. We can help you choose sustainable materials, energy-efficient appliances, and design solutions that reduce your environmental impact without compromising on quality or style.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Design Sustainably</h3>
                <p className="body-elegant text-muted-foreground">
                  We can help you create an eco-friendly kitchen.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="/services" variant="ghost">Our Services</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Related Articles</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/kitchen-design-trends-2025" className="hover:text-primary transition-colors">Kitchen design trends 2025</Link></li>
                  <li><Link href="/blog/how-to-choose-kitchen-cabinets" className="hover:text-primary transition-colors">Choosing kitchen cabinets</Link></li>
                  <li><Link href="/appliances" className="hover:text-primary transition-colors">Kitchen appliances</Link></li>
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

export default SustainableKitchenDesign;

