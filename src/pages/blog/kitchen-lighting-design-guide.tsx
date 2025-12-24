/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const KitchenLightingDesignGuide = () => {
  return (
    <>
      <Head>
        <title>Kitchen Lighting Design Guide | Kitchen Lighting Ideas | Fareham Kitchens</title>
        <meta
          name="description"
          content="Complete guide to kitchen lighting design. Learn about task lighting, ambient lighting, accent lighting, and how to create the perfect lighting scheme for your kitchen."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/blog/kitchen-lighting-design-guide" />
        <meta property="og:title" content="Kitchen Lighting Design Guide | Kitchen Lighting Ideas | Fareham Kitchens" />
        <meta property="og:description" content="Complete guide to kitchen lighting design. Learn about task lighting, ambient lighting, accent lighting, and how to create the perfect lighting scheme." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/blog/kitchen-lighting-design-guide" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-12-24T00:00:00Z" />
        <meta property="article:author" content="Fareham Kitchens" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Lighting Design Guide | Kitchen Lighting Ideas" />
        <meta name="twitter:description" content="Complete guide to kitchen lighting design. Learn about task lighting, ambient lighting, accent lighting." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Kitchen Lighting Design Guide | Kitchen Lighting Ideas",
              "description": "Complete guide to kitchen lighting design. Learn about task lighting, ambient lighting, accent lighting, and how to create the perfect lighting scheme for your kitchen.",
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
                "@id": "https://farehamkitchens.co.uk/blog/kitchen-lighting-design-guide"
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
                <span className="label-uppercase text-primary">Design Guide</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Kitchen Lighting<br />
                  <span className="text-primary">Design Guide</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Good lighting transforms a kitchen from functional to fabulous. This guide covers the three types of kitchen lighting and how to layer them for a perfect lighting scheme.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton to="/services" variant="ghost">View Our Services</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src="/aok/blogimages/what_is_a_shaker_kitchen.webp"
                  alt="Kitchen lighting design"
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
                <h2 className="heading-medium text-foreground">The Three Types of Kitchen Lighting</h2>
                <p>
                  Effective kitchen lighting uses three layers: task lighting for work areas, ambient lighting for general illumination, and accent lighting for visual interest. Combining all three creates a functional and beautiful lighting scheme.
                </p>

                <h3 className="heading-medium text-foreground">1. Task Lighting</h3>
                <p>
                  Task lighting provides focused, bright light where you need it most—over worktops, sinks, and cooking areas. This is the most important layer for functionality.
                </p>
                <p>
                  <strong className="text-foreground">Options include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Under-cabinet LED strips or spotlights</li>
                  <li>Pendant lights over islands and breakfast bars</li>
                  <li>Recessed downlights above worktops</li>
                  <li>Integrated lighting within handleless rails</li>
                </ul>
                <p>
                  Task lighting should be bright enough to see clearly when chopping, cooking, and cleaning, without creating harsh shadows.
                </p>

                <h3 className="heading-medium text-foreground">2. Ambient Lighting</h3>
                <p>
                  Ambient lighting provides general illumination throughout the kitchen, creating a comfortable overall light level. This is your base layer of lighting.
                </p>
                <p>
                  <strong className="text-foreground">Options include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Ceiling downlights distributed evenly</li>
                  <li>Track lighting systems</li>
                  <li>Wall-mounted lights</li>
                  <li>Natural light from windows and rooflights</li>
                </ul>
                <p>
                  Ambient lighting should be dimmable, allowing you to adjust brightness for different times of day and activities.
                </p>

                <h3 className="heading-medium text-foreground">3. Accent Lighting</h3>
                <p>
                  Accent lighting adds visual interest and highlights specific features, creating depth and atmosphere.
                </p>
                <p>
                  <strong className="text-foreground">Options include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>LED strips in plinths (toe kicks)</li>
                  <li>Lighting within glass-fronted cabinets</li>
                  <li>Pendant lights as focal points</li>
                  <li>Wall lights for decorative effect</li>
                  <li>Profile lighting within handleless rails</li>
                </ul>

                <h2 className="heading-medium text-foreground">Lighting by Kitchen Zone</h2>
                <p>
                  Different areas of your kitchen need different lighting approaches:
                </p>

                <h3 className="heading-medium text-foreground">Worktop Areas</h3>
                <p>
                  Under-cabinet lighting is essential for worktops. LED strips provide even, shadow-free light. Consider dimmable options for flexibility.
                </p>

                <h3 className="heading-medium text-foreground">Islands & Breakfast Bars</h3>
                <p>
                  Pendant lights create focal points and provide task lighting. Consider multiple pendants for larger islands, or a single statement piece for smaller areas. Height should be 75-90cm above the surface.
                </p>

                <h3 className="heading-medium text-foreground">Cooking Areas</h3>
                <p>
                  Bright task lighting above hobs and ovens is essential. Consider extractor hoods with integrated lighting, or downlights positioned to avoid shadows.
                </p>

                <h3 className="heading-medium text-foreground">Dining Areas</h3>
                <p>
                  Softer, warmer lighting creates atmosphere for dining. Pendant lights or wall lights work well, with dimmers to adjust mood.
                </p>

                <h2 className="heading-medium text-foreground">Smart Lighting Control</h2>
                <p>
                  Modern kitchens increasingly use smart lighting systems that allow you to control lights via app or voice. You can create scenes for different activities—bright for cooking, softer for dining, dimmed for evening.
                </p>
                <p>
                  Smart lighting integrates with other smart home systems and can be programmed to adjust automatically based on time of day or natural light levels.
                </p>

                <h2 className="heading-medium text-foreground">Planning Your Lighting</h2>
                <p>
                  Lighting should be planned early in your kitchen design process, as it affects electrical work and cabinet design. We include lighting design in our <Link href="/process" className="text-primary hover:underline">kitchen design process</Link>, ensuring your lighting scheme works perfectly with your layout and cabinetry.
                </p>
                <p>
                  <Link href="/contact" className="text-primary hover:underline">Book a consultation</Link> to discuss your kitchen lighting requirements, or <Link href="/projects" className="text-primary hover:underline">view our projects</Link> to see lighting schemes in action.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Design Your Kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  We include lighting design in every kitchen project.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="/process" variant="ghost">Our Process</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Related Articles</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/kitchen-design-trends-2025" className="hover:text-primary transition-colors">Kitchen design trends 2025</Link></li>
                  <li><Link href="/blog/how-to-choose-kitchen-cabinets" className="hover:text-primary transition-colors">How to choose kitchen cabinets</Link></li>
                  <li><Link href="/services/modern-kitchens" className="hover:text-primary transition-colors">Modern kitchens</Link></li>
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

export default KitchenLightingDesignGuide;

