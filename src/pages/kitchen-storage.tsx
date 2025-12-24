import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const KitchenStorage = () => {
  return (
    <>
      <Head>
        <title>Kitchen Storage Solutions Hampshire | Larder & Pantry Design | Fareham Kitchens</title>
        <meta
          name="description"
          content="Kitchen storage solutions in Hampshire. Bespoke larders, pantry storage, drawer systems, and tall storage. Expert storage design by Fareham Kitchens."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/kitchen-storage" />
        <meta property="og:title" content="Kitchen Storage Solutions Hampshire | Larder & Pantry Design | Fareham Kitchens" />
        <meta property="og:description" content="Kitchen storage solutions in Hampshire. Bespoke larders, pantry storage, drawer systems, and tall storage." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/kitchen-storage" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Storage Solutions Hampshire | Larder & Pantry Design" />
        <meta name="twitter:description" content="Kitchen storage solutions in Hampshire. Bespoke larders, pantry storage, drawer systems, and tall storage." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <AnimatedSection>
                  <span className="label-uppercase text-primary">Kitchen Storage</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h1 className="heading-display text-foreground">Storage that works as hard as you do</h1>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Smart storage is the foundation of a functional kitchen. From bespoke larders and tall storage to innovative drawer systems and corner solutions, we design storage that maximises space, keeps everything organised, and makes cooking a joy. Every item has its place, and every space is utilised.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">
                    Design Your Storage
                  </MagneticButton>
                  <MagneticButton to="/projects" variant="ghost">
                    View Storage Solutions
                  </MagneticButton>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.15} className="lg:col-span-5">
                <div className="relative aspect-[4/5] overflow-hidden border border-border">
                  <Image src="/aok/AOK-showroom.jpg.webp" alt="Kitchen storage solutions" fill className="object-cover" priority />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Storage Types */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary">Storage Solutions</span>
              <h2 className="heading-large text-foreground mt-3">Types of kitchen storage</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Tall Larders",
                  description: "Full-height storage units that reach to the ceiling, providing maximum storage for dry goods, appliances, and kitchen essentials. Perfect for keeping worktops clear and everything organised."
                },
                {
                  title: "Drawer Systems",
                  description: "Deep drawers with dividers, cutlery trays, and organisers. Modern drawer systems make everything accessible and keep items neatly separated."
                },
                {
                  title: "Corner Storage",
                  description: "Carousel units, pull-out corner drawers, and magic corner systems ensure no corner space is wasted. Access everything easily without reaching into dark corners."
                },
                {
                  title: "Pull-Out Pantries",
                  description: "Narrow pull-out units that fit between cabinets, providing vertical storage for spices, tins, and small items. Perfect for maximising every inch of space."
                },
                {
                  title: "Tall Storage",
                  description: "Full-height cabinets for baking sheets, trays, and tall items. Often includes internal drawers and shelves for flexible organisation."
                },
                {
                  title: "Integrated Storage",
                  description: "Built-in solutions for bins, recycling, and cleaning supplies. Keep everything hidden but easily accessible when needed."
                }
              ].map((solution, idx) => (
                <AnimatedSection key={solution.title} delay={0.05 * idx} className="p-6 border border-border bg-background">
                  <h3 className="heading-medium text-foreground mb-3">{solution.title}</h3>
                  <p className="body-elegant text-muted-foreground">{solution.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Larder Details */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-10">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Bespoke Larders</span>
              <h2 className="heading-large text-foreground mt-3">The ultimate storage solution</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">Larder Features</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Full-height storage reaching to ceiling</li>
                  <li>• Adjustable shelves for flexibility</li>
                  <li>• Internal drawers for small items</li>
                  <li>• Integrated lighting for visibility</li>
                  <li>• Pull-out baskets for easy access</li>
                  <li>• Spice racks and door storage</li>
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-secondary/40 space-y-3">
                <h3 className="heading-medium text-foreground">What to Store</h3>
                <ul className="space-y-2 body-elegant text-muted-foreground">
                  <li>• Dry goods and pantry items</li>
                  <li>• Small appliances (mixers, blenders)</li>
                  <li>• Baking equipment and trays</li>
                  <li>• Cleaning supplies</li>
                  <li>• Spices and condiments</li>
                  <li>• Overflow from main cabinets</li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Drawer Systems */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Drawer Systems</span>
              <h2 className="heading-large text-foreground mt-3">Modern drawer storage</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Deep Drawers</h3>
                <p className="body-elegant text-muted-foreground">
                  Deep drawers replace traditional base cabinets, making everything more accessible. Perfect for heavy pots and pans, crockery, and large items. No more bending down to reach items at the back of cupboards.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Drawer Organisers</h3>
                <p className="body-elegant text-muted-foreground">
                  Custom dividers, cutlery trays, and organisers keep drawers neat and functional. Everything has its place, making it easy to find what you need and maintain organisation.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.15} className="p-6 border border-border bg-background">
                <h3 className="heading-medium text-foreground mb-3">Soft-Close Mechanisms</h3>
                <p className="body-elegant text-muted-foreground">
                  All our drawers feature soft-close mechanisms for smooth, quiet operation. Premium hardware ensures drawers glide effortlessly and last for years.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Small Kitchen Storage */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Small Kitchen Storage</span>
              <h2 className="heading-large text-foreground mt-3">Maximising space in compact kitchens</h2>
            </AnimatedSection>
            <div className="mt-8 space-y-6">
              <AnimatedSection delay={0.05} className="p-6 border border-border bg-secondary/40">
                <p className="body-elegant text-muted-foreground">
                  In small kitchens, every inch counts. We specialise in space-saving storage solutions including tall larders that reach to the ceiling, pull-out pantries that fit in narrow gaps, and clever corner storage systems. <Link href="/small-kitchens" className="text-primary hover:underline">See our small kitchen solutions</Link> for more ideas on maximising storage in compact spaces.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Optimise Your Storage?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Design Storage That<br />
                <span className="text-primary">Works for You</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation to discuss your storage needs. We'll design bespoke storage solutions that keep your kitchen organised and make cooking more enjoyable.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/services" variant="ghost">
                View Our Services
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <TrustSignals />
        <Footer />
      </main>
    </>
  );
};

export default KitchenStorage;

