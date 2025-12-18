import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

interface LocationTemplateProps {
  locationName: string;
  locationSlug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

const LocationTemplate = ({
  locationName,
  locationSlug,
  description,
  metaTitle,
  metaDescription,
}: LocationTemplateProps) => {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content={`https://farehamkitchens.co.uk/locations/${locationSlug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Kitchen Showroom</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text={`${locationName} Kitchen`} delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Showroom" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  {description}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={1}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <MagneticButton to="/contact" variant="outline">
                    Book a Consultation
                  </MagneticButton>
                  <MagneticButton to="/" variant="ghost">
                    View Our Showroom
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl prose prose-lg">
              <AnimatedSection>
                <div className="space-y-8 body-elegant text-muted-foreground leading-relaxed">
                  <div>
                    <h2 className="heading-medium text-foreground mb-4">Bespoke Kitchen Design in {locationName}</h2>
                    <p>
                      At <Link href="/" className="text-primary hover:underline">Fareham Kitchens</Link>, we serve homeowners across {locationName} and the wider Hampshire area, bringing our expertise in bespoke kitchen design and installation to your doorstep. Whether you&apos;re looking for a modern handleless kitchen, a classic Shaker design, or a traditional in-frame kitchen, our team can help bring your vision to life.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">Why Choose Fareham Kitchens for Your {locationName} Kitchen?</h2>
                    <p className="mb-4">When you choose Fareham Kitchens for your {locationName} kitchen project, you benefit from:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Over 40 years of experience in bespoke kitchen design and installation</li>
                      <li>Premium kitchen ranges including Häcker Systemat and Concept130</li>
                      <li>Expert design consultation and 3D visualizations</li>
                      <li>Full installation service by our experienced team</li>
                      <li>Granite, quartz, and Dekton worktop options</li>
                      <li>Premium appliance partnerships with AEG, Bora, and Quooker</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">Visit Our Showroom</h2>
                    <p className="mb-4">
                      While we&apos;re based in Southampton, we&apos;re easily accessible from {locationName} and welcome visitors from across Hampshire. Our showroom at 491-493 Bitterne Road East, Southampton, SO18 5EQ, showcases our full range of kitchen styles, materials, and finishes.
                    </p>
                    <p>
                      <Link href="/contact" className="text-primary hover:underline">Book a consultation</Link> to discuss your {locationName} kitchen project, or <Link href="/" className="text-primary hover:underline">explore our portfolio</Link> to see examples of our work across Hampshire.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">Our Kitchen Services in {locationName}</h2>
                    <p className="mb-4">We offer comprehensive kitchen design and installation services for {locationName} homeowners:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><Link href="/services/modern-kitchens" className="text-primary hover:underline">Modern handleless kitchens</Link> with sleek, minimal lines</li>
                      <li><Link href="/services/shaker-kitchens" className="text-primary hover:underline">Shaker kitchens</Link> with framed cabinetry and balanced proportions</li>
                      <li><Link href="/services/traditional-kitchens" className="text-primary hover:underline">Traditional kitchens</Link> with in-frame doors and ornate detailing</li>
                      <li>Granite and quartz worktop installation</li>
                      <li>Full kitchen fitting and installation service</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">Other Areas We Serve</h2>
                    <p className="mb-4">
                      We also serve homeowners in nearby areas. Explore our other locations:
                    </p>
                    <p>
                      <Link href="/locations" className="text-primary hover:underline">View all locations</Link> we serve, including Portsmouth, Winchester, Gosport, Hedge End, Romsey, Warsash, Chilworth, and across Hampshire.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default LocationTemplate;

