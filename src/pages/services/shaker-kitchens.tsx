import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const ShakerKitchens = () => {
  return (
    <>
      <Head>
        <title>Shaker Kitchens Hampshire | Fareham Kitchen Showroom</title>
        <meta
          name="description"
          content="Bespoke Shaker kitchens by Fareham Kitchens. Framed cabinetry, balanced proportions, and handcrafted details tailored to Hampshire homes."
        />
        <meta property="og:title" content="Shaker Kitchens Hampshire | Fareham Kitchen Showroom" />
        <meta property="og:description" content="Bespoke Shaker kitchens by Fareham Kitchens. Framed cabinetry, balanced proportions, and handcrafted details tailored to Hampshire homes." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/services/shaker1.jpg" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/services/shaker-kitchens" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shaker Kitchens Hampshire | Fareham Kitchen Showroom" />
        <meta name="twitter:description" content="Bespoke Shaker kitchens by Fareham Kitchens. Framed cabinetry, balanced proportions, and handcrafted details tailored to Hampshire homes." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/services/shaker1.jpg" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection>
                  <span className="label-uppercase text-primary">Shaker Kitchens</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Framed, balanced, and beautifully calm</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Shaker kitchens are defined by proportion, restraint, and craftsmanship. We build framed doors with crisp rails, durable timber, and smooth paint finishes, then layer modern storage, soft-close hardware, and integrated lighting. The result is a kitchen that feels timeless in a Georgian townhouse, a coastal cottage, or a modern extension—quietly luxurious and designed to serve daily life.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Book a Consultation
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Recent Projects
                  </MagneticButton>
                </AnimatedSection>
                <AnimatedSection delay={0.35} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: "Typical lead time", value: "10–14 weeks" },
                    { label: "Cabinet warranty", value: "10 years" },
                    { label: "Paint options", value: "400+ tones" },
                    { label: "Worktop pairings", value: "Quartz, stone, timber" },
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
                  <Image src="/services/shaker1.jpg" alt="Painted Shaker kitchen with framed doors" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-8">
              <h2 className="heading-large text-foreground">Details you can feel</h2>
              <p className="body-elegant text-muted-foreground max-w-3xl mt-3">
                Solid frames, perfectly even shadow lines, and hand-finished paintwork are the hallmarks of a true Shaker kitchen. Here are a few recent textures and palettes from our Hampshire installs.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["shaker1.jpg", "shaker2.jpg", "shaker3.jpg", "shaker4.webp"].map((image) => (
                <AnimatedSection key={image} delay={0.05} className="relative aspect-square overflow-hidden border border-border">
                  <Image src={`/services/${image}`} alt="Shaker kitchen detail" fill className="object-cover" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Where it fits */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Where Shaker shines</span>
              <h2 className="heading-large text-foreground mt-3">Tailored to the home, not a template</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Period homes",
                  text: "Keep character with framed doors, inset plinths, and classic cornice. We colour-match to heritage paints, add tongue-and-groove panelling, and conceal modern extraction to keep proportions calm.",
                },
                {
                  title: "Country cottages",
                  text: "Slim rails, warm whites, and light-reflecting satin finishes brighten lower ceilings. Curated hardware, compact larders, and bench seating maximise charm without crowding the room.",
                },
                {
                  title: "Extended family spaces",
                  text: "In open-plan spaces we pair a painted Shaker run with a contrasting island, hidden pocket doors for breakfast stations, and low-noise extraction so cooking feels part of the room without dominating it.",
                },
                {
                  title: "Modern builds",
                  text: "A pared-back Shaker with minimal bead, slab end panels, and slim quartz edges gives a contemporary twist. We align sightlines with glazing, integrate lighting, and keep profiles crisp.",
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

        {/* Design principles */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl space-y-10">
            <AnimatedSection className="space-y-3">
              <span className="label-uppercase text-primary">Design approach</span>
              <h2 className="heading-large text-foreground">Balanced frames, practical interiors</h2>
              <p className="body-elegant text-muted-foreground leading-relaxed max-w-4xl">
                Every Shaker kitchen we build starts with the frame thickness, rail width, and shadow gap. From there we plan how you cook, host, and store. Expect dovetailed drawers, soft-close hardware, smooth cabinet reveals, and storage that feels almost invisible until you need it.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cabinetry & finishes",
                  points: [
                    "Tulipwood, ash, or oak frames with stable moisture-resistant cores.",
                    "Hand-sprayed paints in Farrow & Ball, Little Greene, or bespoke mixes.",
                    "Option for visible grain stains, two-tone palettes, or colour-drenched islands.",
                  ],
                },
                {
                  title: "Worktops & appliances",
                  points: [
                    "Quartz, sintered stone, or honed granite with pencil or chamfered edges.",
                    "Butcher block or oak for breakfast bars when warmth is needed.",
                    "Induction hobs with integrated extraction to keep sightlines open.",
                  ],
                },
                {
                  title: "Storage & workflow",
                  points: [
                    "Full-height larders with internal drawers and spice racks.",
                    "Corner optimisers, pocket-door breakfast stations, and tray dividers.",
                    "Drawer galleries for utensils, pans, and recycling to keep counters clear.",
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

        {/* Workflow & lifestyle */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection className="space-y-3">
              <span className="label-uppercase text-primary">Life in a Shaker kitchen</span>
              <h2 className="heading-large text-foreground">Designed for real cooking, calm hosting</h2>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Whether you batch-cook, host regularly, or need a calm space for family life, we plan the working triangle, appliance placement, and ventilation so the room feels effortless. Zones for prep, cooking, baking, and clearing are anchored by lighting that flatters the paint finish and keeps surfaces usable day and night.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Workflow priorities</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Islands sized for two chefs, with seating that doesn’t block the prep run.</li>
                  <li>• Galley layouts with wide gangways and integrated waste near the sink.</li>
                  <li>• Ovens at ergonomic height, with cooling racks and baking storage adjacent.</li>
                  <li>• Ventilation specified to suit open-plan acoustics and ceiling heights.</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Material pairings we love</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Painted frames in Bone or Pigeon with honed Carrara-style quartz.</li>
                  <li>• Deep green islands with satin brass pulls and warm white perimeter units.</li>
                  <li>• Natural oak accents, reeded glass, and unlacquered brass taps for patina.</li>
                  <li>• Soft black handles against dusky blues for a tailored, modern edge.</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-6">
            <AnimatedSection>
              <h2 className="heading-large text-foreground">Compare other styles</h2>
              <p className="body-elegant text-muted-foreground mt-2 max-w-3xl">
                If you love framed doors but want slimmer lines or handleless cabinetry, explore our other collections to see how finishes change the feel of your space.
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4">
              <MagneticButton to="/services/traditional-kitchens" variant="outline">
                Traditional Kitchens
              </MagneticButton>
              <MagneticButton to="/services/modern-kitchens" variant="ghost">
                Modern Kitchens
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
              <span className="label-uppercase text-primary">Start your design</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Let’s plan your bespoke<br />
                <span className="text-primary">Shaker kitchen</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Visit our Fareham showroom or book a home consultation. We will measure, sketch, and prototype colour palettes so you can see exactly how your Shaker kitchen will feel before we build.
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

export default ShakerKitchens;

