import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const ModernKitchens = () => {
  return (
    <>
      <Head>
        <title>Modern Kitchens Hampshire | Fareham Kitchen Showroom</title>
        <meta
          name="description"
          content="Sleek handleless kitchens, minimal lines, and integrated technology crafted by Fareham Kitchens for Hampshire homes."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection>
                  <span className="label-uppercase text-primary">Modern Kitchens</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Handleless calm, precision-built</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Modern kitchens are about clarity: uninterrupted lines, tactile matt finishes, and storage that disappears until you need it. We design handleless, slab, and ultra-thin profiled doors with precision reveals, mitred worktops, and integrated lighting so the space feels sculpted and calm—perfect for open-plan living, new builds, and extensions with lots of glass.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Book a Consultation
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Modern Projects
                  </MagneticButton>
                </AnimatedSection>
                <AnimatedSection delay={0.35} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: "Lead time", value: "8–12 weeks" },
                    { label: "Profiles", value: "True handleless, J-pull, integrated" },
                    { label: "Finishes", value: "Supermatt, gloss, woodgrain, metallic" },
                    { label: "Smart options", value: "App-enabled lighting & appliances" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 border border-border bg-secondary/50">
                      <p className="label-uppercase text-xs text-muted-foreground mb-2">{item.label}</p>
                      <p className="text-foreground font-medium">{item.value}</p>
                    </div>
                  ))}
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/services/modern1.webp" alt="Modern handleless kitchen with island" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-8">
              <h2 className="heading-large text-foreground">Minimal lines, tactile finishes</h2>
              <p className="body-elegant text-muted-foreground max-w-3xl mt-3">
                Supermatt laminates, soft-touch lacquers, and aluminium trims give modern kitchens their crisp silhouette. These Hampshire projects show how texture and light balance each scheme.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["modern1.webp", "modern2.jpg", "modern3.jpg", "modern4.webp"].map((image) => (
                <AnimatedSection key={image} delay={0.05} className="relative aspect-square overflow-hidden border border-border">
                  <Image src={`/services/${image}`} alt="Modern kitchen detail" fill className="object-cover" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Where it works */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Designed for modern living</span>
              <h2 className="heading-large text-foreground mt-3">Built for light, space, and flow</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Open-plan extensions",
                  text: "Keep sightlines clean with true-handleless rails, flush appliances, and downdraft extraction. Islands double as dining and prep space without visible clutter.",
                },
                {
                  title: "New builds",
                  text: "Architectural glazing and higher ceilings suit tall banks of integrated appliances, pocket-door breakfast stations, and seamless utility rooms that mirror the main kitchen.",
                },
                {
                  title: "Compact apartments",
                  text: "Supermatt slab fronts, reflective glass splashbacks, and integrated lighting enlarge smaller rooms. Tall larders and internal drawers keep everything organised.",
                },
                {
                  title: "Mixed-era homes",
                  text: "Blend period architecture with modern cabinetry by pairing warm woodgrain doors, slim black rails, and subtle bronze accents. Minimal doesn’t have to feel cold.",
                },
              ].map((item, idx) => (
                <AnimatedSection key={item.title} delay={0.05 * idx} className="p-6 border border-border bg-secondary/40">
                  <h3 className="heading-medium text-foreground mb-2">{item.title}</h3>
                  <p className="body-elegant text-muted-foreground leading-relaxed">{item.text}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Specification */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl space-y-10">
            <AnimatedSection className="space-y-3">
              <span className="label-uppercase text-primary">Specification-first</span>
              <h2 className="heading-large text-foreground">Precision cabinetry, integrated technology</h2>
              <p className="body-elegant text-muted-foreground leading-relaxed max-w-4xl">
                We focus on materials that resist fingerprints, stay colour-true under sunlight, and align perfectly along every reveal. Hardware is silent, lighting is hidden, and tech integrates cleanly so the space stays restful.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cabinetry & fronts",
                  points: [
                    "True handleless rails in matching, contrast, or metallic finishes.",
                    "Supermatt anti-fingerprint fronts, high-gloss lacquers, or textured woodgrain.",
                    "18–22mm doors with laser-edged detail for seamless edges and durability.",
                  ],
                },
                {
                  title: "Worktops & appliances",
                  points: [
                    "Ultra-thin 12–20mm quartz or Dekton for a floating look.",
                    "Flush-fit hobs with integrated extraction to avoid overhead bulk.",
                    "Column refrigeration, pocket-door coffee stations, and integrated bins.",
                  ],
                },
                {
                  title: "Lighting & tech",
                  points: [
                    "App or voice-controlled scenes: task, dining, and evening modes.",
                    "Profile lighting within rails, plinth lighting, and glass-shelf illumination.",
                    "Cable-free charging points and neatly housed routers/servers for hybrid work.",
                  ],
                },
              ].map((card, idx) => (
                <AnimatedSection key={card.title} delay={0.05 * idx} className="p-6 border border-border bg-background h-full flex flex-col">
                  <h3 className="heading-medium text-foreground mb-4">{card.title}</h3>
                  <ul className="space-y-2 body-elegant text-muted-foreground">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Lifestyle & ergonomics */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection className="space-y-3">
              <span className="label-uppercase text-primary">Calm everyday living</span>
              <h2 className="heading-large text-foreground">Minimal clutter, maximum usability</h2>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Modern kitchens succeed when every utensil, appliance, and cable has a home. We design drawer galleries, recycling centres, and tall storage so counters stay clear and the island remains a sculptural focal point.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Workflow & ergonomics</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Drawer stacks for pans and crockery adjacent to the dishwasher.</li>
                  <li>• Tall banks for ovens, coffee machines, and cooling—keeping sightlines horizontal.</li>
                  <li>• Pocket doors hiding breakfast or bar zones that open only when needed.</li>
                  <li>• Oversized sinks with accessories (rails, boards) to keep prep contained.</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Material palettes we love</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Graphite supermatt with smoked oak accents and bronze rails.</li>
                  <li>• Soft white fronts with thin Calacatta quartz and discreet stainless handles.</li>
                  <li>• Charcoal stone-effect doors with black appliances and linear profile lighting.</li>
                  <li>• Sand-toned cabinets with champagne metallic rails for a warm minimal look.</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-6">
            <AnimatedSection>
              <h2 className="heading-large text-foreground">Compare styles</h2>
              <p className="body-elegant text-muted-foreground mt-2 max-w-3xl">
                If you’re deciding between framed details and ultra-minimal lines, explore our Shaker and Traditional collections to see how profiles and textures change the mood.
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4">
              <MagneticButton to="/services/shaker-kitchens" variant="outline">
                Shaker Kitchens
              </MagneticButton>
              <MagneticButton to="/services/traditional-kitchens" variant="ghost">
                Traditional Kitchens
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Trust */}
        <TrustSignals />

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Book your design session</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Let’s create your<br />
                <span className="text-primary">modern kitchen</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                We’ll map your appliances, lighting, and storage, then build a 3D concept with sample boards so you can feel every finish before we order a single cabinet.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/projects" variant="ghost">
                Browse Projects
              </MagneticButton>
              <Link href="tel:+441329271600" className="label-uppercase text-sm text-primary hover:text-primary/80">
                Call 01329 271600
              </Link>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ModernKitchens;

