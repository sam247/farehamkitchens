/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const WhatIsAShakerKitchen = () => {
  return (
    <>
      <Head>
        <title>What Is a Shaker Kitchen? | Shaker Kitchens in Hampshire</title>
        <meta
          name="description"
          content="Learn the history, design principles, and ways to personalise Shaker kitchens in Hampshire, including colours, materials, and layout tips."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Design Insight</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  What Is a<br />
                  <span className="text-primary">Shaker Kitchen?</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Timeless framed cabinetry, honest materials, and a focus on beauty through utility. Here’s how Shaker design endures—and how to make it your own.
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
                  src="/aok/blogimages/what_is_a_shaker_kitchen.webp"
                  alt="Shaker kitchen inspiration"
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
                  Shaker kitchens date back to the mid-18th century, pairing elegant simplicity with functionality. Flat centre panels, square edges, and minimal detailing create a clean, enduring look that suits both classic and contemporary homes.
                </p>
                <h3 className="heading-medium text-foreground">History of a Shaker Kitchen</h3>
                <p>
                  Historically, Shaker kitchens used bold paints—red, yellow, green, blue—or oiled wood for a natural aesthetic. Today you can honour tradition or modernise with your own palette and finishes. Colour defines mood: airy tones brighten; deeper shades add depth.
                </p>
                <p>
                  The Shakers built self-sufficient communities rooted in equality, honesty, and craft. They used durable local hardwoods, often left natural or in restrained hues. Iconic ladderback chairs and inventive tilting mechanisms reflect their “beauty through utility” philosophy—carried forward in the Shaker kitchen.
                </p>

                <h3 className="heading-medium text-foreground">Timeless Shaker Kitchen Design</h3>
                <p>
                  Clean lines, flat-panel doors, understated hardware, and quality timber set the tone. Neutral palettes—white, cream, light woods—keep spaces calm and uncluttered, while bold hues add character.
                </p>

                <h3 className="heading-medium text-foreground">Worktops, Finishes & Appliances</h3>
                <p>
                  Pair Shaker cabinetry with stone worktops (granite, quartz, sintered stone), timber, or Corian. Finish options span soft neutrals to deep statement colours. Appliances from premium brands elevate both function and form.
                </p>

                <h3 className="heading-medium text-foreground">Why Shaker Endures</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Fashion-proof simplicity and clean lines.</li>
                  <li>Values of durability, honest materials, and low waste resonate with sustainability.</li>
                  <li>Highly practical layouts with efficient storage.</li>
                  <li>Modular and versatile—works in cottages, apartments, and open-plan homes.</li>
                  <li>Easy to personalise with colour, hardware, and surface choices.</li>
                </ul>

                <h3 className="heading-medium text-foreground">How to Personalise a Shaker Kitchen</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Paint colours: from soft greys/whites to deep blues and bold tones.</li>
                  <li>Exposed timber: celebrate grain with clear lacquer.</li>
                  <li>Glass fronts: add lightness and variety.</li>
                  <li>Handles/knobs: almost any style works with framed doors.</li>
                  <li>Worktops: timber, natural stone, or contemporary composites.</li>
                  <li>Splashbacks/tiles: be adventurous—Shaker is a great backdrop.</li>
                  <li>Lighting: pendants over an island can contrast beautifully with classic cabinetry.</li>
                </ul>

                <p>
                  Our team can guide colours, materials, storage, and layout to tailor a Shaker kitchen to your lifestyle. <Link href="/contact" className="text-primary hover:text-primary/80 underline">Contact us</Link> to start your design, or <Link href="/projects" className="text-primary hover:text-primary/80 underline">view our projects</Link> for inspiration.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Plan your Shaker kitchen</h3>
                <p className="body-elegant text-muted-foreground">
                  Book a design consultation or download our brochure to explore ranges, finishes, and storage options.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton href="/Andrew-Osborne-Brochure.pdf" variant="ghost">Download Brochure</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Explore</span>
                <ul className="space-y-2 body-elegant text-foreground">
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

export default WhatIsAShakerKitchen;

