import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const TraditionalKitchens = () => {
  return (
    <>
      <Head>
        <title>Traditional Kitchens Hampshire | Fareham Kitchen Showroom</title>
        <meta
          name="description"
          content="Classic bespoke kitchens with in-frame doors, ornate detailing, and modern comfort. Handcrafted in Hampshire by Fareham Kitchens."
        />
        <meta property="og:title" content="Traditional Kitchens Hampshire | Fareham Kitchen Showroom" />
        <meta property="og:description" content="Classic bespoke kitchens with in-frame doors, ornate detailing, and modern comfort. Handcrafted in Hampshire by Fareham Kitchens." />
        <meta property="og:image" content="https://www.farehamkitchens.co.uk/services/traditional1.jpg" />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/services/traditional-kitchens" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection>
                  <span className="label-uppercase text-primary">Traditional Kitchens</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Classic British craft, refined for today</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Traditional kitchens celebrate joinery, heritage profiles, and generous storage. We pair in-frame doors, beaded panels, and decorative cornice with soft-close runners, hidden lighting, and modern appliances. Each room is measured, designed, and installed by our Fareham team to suit manor houses, farmhouses, and period terraces across Hampshire.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Book a Consultation
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Traditional Projects
                  </MagneticButton>
                </AnimatedSection>
                <AnimatedSection delay={0.35} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { label: "Lead time", value: "12–16 weeks" },
                    { label: "Cabinet warranty", value: "10 years" },
                    { label: "Door styles", value: "In-frame, raised panel, bead" },
                    { label: "Finishes", value: "Hand-sprayed or stained timber" },
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
                  <Image src="/services/traditional1.jpg" alt="Traditional in-frame kitchen with cornice" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-8">
              <h2 className="heading-large text-foreground">Layered detail, lasting quality</h2>
              <p className="body-elegant text-muted-foreground max-w-3xl mt-3">
                From raised panels to mantle surrounds, traditional kitchens are full of crafted moments. Here are recent finishes that show how we balance warmth, storage, and elegant hardware.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {["traditional1.jpg", "traditional2.jpg", "traditional3.webp", "traditional4.jpg"].map((image) => (
                <AnimatedSection key={image} delay={0.05} className="relative aspect-square overflow-hidden border border-border">
                  <Image src={`/services/${image}`} alt="Traditional kitchen detail" fill className="object-cover" />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Homes that suit it */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Heritage ready</span>
              <h2 className="heading-large text-foreground mt-3">Made for homes with history</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Farmhouse and barn conversions",
                  text: "We lean into natural oak, framed doors, and chimney features that respect exposed beams. Freestanding-look dressers and boot-room storage keep the room practical for muddy boots and busy family life.",
                },
                {
                  title: "Victorian and Edwardian terraces",
                  text: "Slimmer stiles, lighter colours, and glazed wall cabinets keep narrow rooms bright. Concealed extraction and tall larders maximise height while respecting original cornice lines.",
                },
                {
                  title: "Country manors and larger homes",
                  text: "Statement mantles, paneled appliance housings, and in-frame drawers give depth. We add hidden appliance garages, wine storage, and soft undercabinet lighting for evening ambience.",
                },
                {
                  title: "Extensions blending old and new",
                  text: "A classic door with modern hardware and sleek quartz lets the kitchen bridge period architecture with contemporary glazing. Shadow gaps and discreet lighting keep everything cohesive.",
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

        {/* Craft & materials */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl space-y-10">
            <AnimatedSection className="space-y-3">
              <span className="label-uppercase text-primary">Craft & specification</span>
              <h2 className="heading-large text-foreground">Timber frames, ornate profiles, reliable mechanics</h2>
              <p className="body-elegant text-muted-foreground leading-relaxed max-w-4xl">
                Traditional kitchens reward close inspection. We specify timber frames, moisture-resistant carcasses, dovetailed drawers, and premium hinges so ornate detailing never compromises longevity. Every cornice, pilaster, and mantle is proportioned to your ceiling heights and window placements.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Door & trim choices",
                  points: [
                    "In-frame doors with optional bead, raised panels, or ovolo edges.",
                    "Decorative cornice, light pelmets, and curved end posts for softness.",
                    "Bespoke mantle surrounds to frame range cookers or induction hobs.",
                  ],
                },
                {
                  title: "Worktops & appliances",
                  points: [
                    "Honed or leathered granite, marble-effect quartz, or timber insets.",
                    "Range cookers (Everhot, Aga, Falcon) integrated with modern extraction.",
                    "Quiet dishwashers, warming drawers, and filtered hot taps to declutter counters.",
                  ],
                },
                {
                  title: "Storage planning",
                  points: [
                    "Pantries with spice racks, marble cold shelves, and concealed plug points.",
                    "Wide pan drawers with peg systems, cutlery inserts, and tray dividers.",
                    "Boot-room benches, utility tall storage, and laundry zones behind matching doors.",
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

        {/* Lighting & mood */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection className="space-y-3">
              <span className="label-uppercase text-primary">Comfort & hosting</span>
              <h2 className="heading-large text-foreground">Traditional doesn’t mean old-fashioned</h2>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                We use layered lighting, integrated speakers, and smart controls to keep the room comfortable without visible technology. Seating is planned so guests feel part of cooking without blocking prep space, and ventilation is sized for quiet operation in open-plan settings.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Lighting plan</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Warm-white undercabinet lighting to wash the frame profiles.</li>
                  <li>• Pendants over islands sized to the seating count, with dimming.</li>
                  <li>• In-cornice uplighting to give evening softness without glare.</li>
                  <li>• Discreet plinth lighting for safe night-time movement.</li>
                </ul>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Finishing touches</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Aged brass, pewter, or porcelain knobs for tactile contrast.</li>
                  <li>• Antique mirror or reeded glass in dresser doors to bounce light.</li>
                  <li>• Integrated seating cushions and panelled walls for coherence.</li>
                  <li>• Colour-drenched sculleries so mess stays hidden during hosting.</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-6">
            <AnimatedSection>
              <h2 className="heading-large text-foreground">Explore other looks</h2>
              <p className="body-elegant text-muted-foreground mt-2 max-w-3xl">
                Prefer cleaner lines or handleless cabinetry? Compare our modern and Shaker options to see how finishes, rail widths, and hardware change the atmosphere.
              </p>
            </AnimatedSection>
            <div className="flex flex-wrap gap-4">
              <MagneticButton to="/services/shaker-kitchens" variant="outline">
                Shaker Kitchens
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
              <span className="label-uppercase text-primary">Plan your project</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Let’s design your<br />
                <span className="text-primary">traditional kitchen</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                We’ll map storage, lighting, and appliance choices to your cooking style, then present drawings and samples so you can see every detail before we build.
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

export default TraditionalKitchens;

