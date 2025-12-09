/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Compass, Palette, Hammer, Sparkles, Shield, HeartHandshake } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const services = [
  {
    icon: Compass,
    title: 'Design Consultation',
    description: 'Begin your journey with a comprehensive consultation where we explore your vision, lifestyle, and aspirations for your dream kitchen.',
    features: ['In-home or showroom visits', 'Lifestyle assessment', 'Budget planning', 'Initial concepts'],
  },
  {
    icon: Palette,
    title: 'Bespoke Design',
    description: 'Our expert designers create detailed 3D visualisations and plans, bringing your kitchen to life before a single element is crafted.',
    features: ['3D visualisation', 'Material selection', 'Appliance integration', 'Lighting design'],
  },
  {
    icon: Hammer,
    title: 'Expert Craftsmanship',
    description: 'Every element of your kitchen is meticulously handcrafted by our skilled artisans using only the finest materials.',
    features: ['Hand-built cabinetry', 'Premium materials', 'Bespoke finishes', 'Quality assurance'],
  },
  {
    icon: Sparkles,
    title: 'Professional Installation',
    description: 'Our dedicated installation team ensures a seamless fit, with meticulous attention to every detail.',
    features: ['Project management', 'Skilled fitters', 'Minimal disruption', 'Final inspection'],
  },
  {
    icon: Shield,
    title: 'Extended Warranty',
    description: 'Enjoy peace of mind with our comprehensive warranty covering all aspects of your bespoke kitchen.',
    features: ['10-year cabinet warranty', 'Appliance cover', 'Workmanship guarantee', 'Responsive support'],
  },
  {
    icon: HeartHandshake,
    title: 'Aftercare Service',
    description: 'Our relationship continues long after installation with dedicated aftercare and maintenance support.',
    features: ['Annual check-ups', 'Care guidance', 'Adjustment service', 'Priority support'],
  },
];

const appliances = [
  { name: 'Gaggenau', logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop' },
  { name: 'Miele', logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop' },
  { name: 'Sub-Zero', logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop' },
  { name: 'Wolf', logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=200&auto=format&fit=crop' },
];

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Fareham Kitchens</title>
        <meta
          name="description"
          content="Discover Fareham Kitchens' full-service approach from consultation and bespoke design to expert craftsmanship and installation."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <AnimatedSection>
                  <span className="label-uppercase text-primary mb-6 block">Our Services</span>
                </AnimatedSection>
                <h1 className="heading-display text-foreground mb-8">
                  <RevealText text="Complete Kitchen" delay={0.2} />
                  <br />
                  <span className="text-primary">
                    <RevealText text="Solutions" delay={0.5} />
                  </span>
                </h1>
                <AnimatedSection delay={0.8}>
                  <p className="body-elegant text-muted-foreground text-lg max-w-xl">
                    From initial inspiration to final installation, we provide a
                    comprehensive, end-to-end service that ensures your bespoke
                    kitchen exceeds every expectation.
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.4}>
                <ParallaxImage
                src="/aok/AV7080_Rauchblau_HS-offen_1700x1200.jpg.webp"
                  alt="Kitchen design consultation"
                  className="aspect-square"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <AnimatedSection
                  key={service.title}
                  delay={0.1 * (index + 1)}
                  className="group p-8 lg:p-10 bg-background border border-border hover:border-primary transition-all duration-500"
                >
                  <service.icon
                    size={40}
                    className="text-primary mb-6"
                    strokeWidth={1}
                  />
                  <h3 className="heading-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="body-elegant text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Partners */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <AnimatedSection>
                  <span className="label-uppercase text-primary mb-6 block">Partnerships</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h2 className="heading-large text-foreground mb-8">
                    Premium<br />
                    <span className="text-primary">Appliance Partners</span>
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground mb-8 leading-relaxed">
                    We partner with the world&apos;s finest appliance manufacturers to
                    ensure your kitchen is equipped with the very best. From German
                    engineering excellence to American innovation, we source and
                    integrate appliances that match the quality of our cabinetry.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <div className="grid grid-cols-2 gap-6">
                    {['Gaggenau', 'Miele', 'Sub-Zero', 'Wolf', 'Bora', 'Siemens'].map((brand) => (
                      <div
                        key={brand}
                        className="p-4 border border-border text-center hover:border-primary transition-colors duration-300"
                      >
                        <span className="body-elegant text-foreground">{brand}</span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.2}>
                <ParallaxImage
                src="/aok/28164-Painted-Milford-Oak-LightGrey-Wide.jpg.webp"
                  alt="Premium kitchen appliances"
                  className="aspect-[4/5]"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <AnimatedSection>
              <span className="label-uppercase text-primary mb-6 block">Get Started</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground mb-8 max-w-3xl mx-auto">
                Ready to Begin Your<br />
                <span className="text-primary">Kitchen Journey?</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground mb-12 max-w-2xl mx-auto">
                Book a complimentary design consultation at our Fareham showroom
                and take the first step towards your dream kitchen.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <MagneticButton to="/contact" variant="outline">
                Book Your Consultation
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Services;
