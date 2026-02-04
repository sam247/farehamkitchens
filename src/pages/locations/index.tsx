import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const locations = [
  {
    slug: "chilworth-kitchens",
    name: "Chilworth",
    description: "Bespoke kitchen design and installation services in Chilworth, Hampshire.",
  },
  {
    slug: "portsmouth-kitchens",
    name: "Portsmouth",
    description: "Premium kitchen showroom serving Portsmouth and surrounding areas.",
  },
  {
    slug: "southampton-kitchens",
    name: "Southampton",
    description: "Kitchen design and installation in Southampton, close to our showroom.",
  },
  {
    slug: "gosport-kitchens",
    name: "Gosport",
    description: "Expert kitchen design services for Gosport homeowners.",
  },
  {
    slug: "hampshire-kitchens",
    name: "Hampshire",
    description: "Serving homeowners across Hampshire with bespoke kitchen solutions.",
  },
  {
    slug: "hedge-end-kitchens",
    name: "Hedge End",
    description: "Kitchen design and installation in Hedge End, Hampshire.",
  },
  {
    slug: "romsey-kitchens",
    name: "Romsey",
    description: "Bespoke kitchens for Romsey homes, from design to installation.",
  },
  {
    slug: "warsash-kitchens",
    name: "Warsash",
    description: "Premium kitchen solutions for Warsash homeowners.",
  },
  {
    slug: "winchester-kitchens",
    name: "Winchester",
    description: "Luxury kitchen design and installation in Winchester, Hampshire.",
  },
  {
    slug: "eastleigh-kitchens",
    name: "Eastleigh",
    description: "Kitchen design and installation services in Eastleigh, Hampshire.",
  },
  {
    slug: "waterlooville-kitchens",
    name: "Waterlooville",
    description: "Bespoke kitchen solutions for Waterlooville homeowners.",
  },
  {
    slug: "bishops-waltham-kitchens",
    name: "Bishops Waltham",
    description: "Premium kitchen design and installation in Bishops Waltham, Hampshire.",
  },
];

const LocationIndex = () => {
  return (
    <>
      <Head>
        <title>Areas We Serve | Fareham Kitchen Showroom</title>
        <meta
          name="description"
          content="Kitchen design and installation from our Fareham showroom. We serve Chilworth, Portsmouth, Southampton, Gosport, Winchester and surrounding areas."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/locations" />
        <meta property="og:title" content="Areas We Serve | Fareham Kitchen Showroom" />
        <meta property="og:description" content="Kitchen design and installation from our Fareham showroom. Chilworth, Portsmouth, Southampton, Gosport and more." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/locations" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Areas We Serve | Fareham Kitchen Showroom" />
        <meta name="twitter:description" content="Kitchen design and installation from our Fareham showroom. Chilworth, Portsmouth, Southampton, Gosport and more." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-34 pb-20 lg:pt-56 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Our Locations</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Kitchen Showrooms" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Across Hampshire" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  While our main showroom is located in Southampton, we serve homeowners across Hampshire, bringing our expertise in bespoke kitchen design and installation to your area. Explore our service areas below.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={1}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <MagneticButton to="/contact" variant="outline">
                    Book a Consultation
                  </MagneticButton>
                  <MagneticButton to="/" variant="ghost">
                    Visit Our Showroom
                  </MagneticButton>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => (
                <AnimatedSection
                  key={location.slug}
                  delay={0.1 * (index + 1)}
                  className="group"
                >
                  <Link
                    href={`/locations/${location.slug}`}
                    className="block p-8 bg-secondary border border-border hover:border-primary transition-all duration-500 h-full"
                  >
                    <h3 className="heading-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {location.name} Kitchens
                    </h3>
                    <p className="body-elegant text-muted-foreground mb-6">
                      {location.description}
                    </p>
                    <span className="label-uppercase text-primary text-xs">
                      Learn More →
                    </span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <h2 className="heading-large text-foreground mb-8">
                  Ready to Start Your Kitchen Project?
                </h2>
                <p className="body-elegant text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Whether you&apos;re in {locations.map(l => l.name).join(", ")}, or anywhere else in Hampshire, we&apos;re here to help create your dream kitchen. Visit our <Link href="/" className="text-primary hover:underline">Fareham showroom</Link> or <Link href="/contact" className="text-primary hover:underline">book a consultation</Link> to get started.
                </p>
                <MagneticButton to="/contact" variant="outline">
                  Book Your Consultation
                </MagneticButton>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default LocationIndex;

