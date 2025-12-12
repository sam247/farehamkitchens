/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const AegOffer = () => {
  return (
    <>
      <Head>
        <title>Free AEG Saphir Matt Induction Hob | New Year Kitchen Offer</title>
        <meta
          name="description"
          content="Order your new kitchen by March 31st 2026 and receive a free AEG SaphirMatt induction hob with 5-year warranty. Limited to 6 hobs. Terms apply."
        />
        <meta property="og:title" content="Free AEG Saphir Matt Induction Hob | New Year Kitchen Offer" />
        <meta property="og:description" content="Order your new kitchen by March 31st 2026 and receive a free AEG SaphirMatt induction hob with 5-year warranty. Limited to 6 hobs. Terms apply." />
        <meta property="og:image" content="https://www.farehamkitchens.co.uk/aok/offer_image1.webp" />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/blog/aeg-offer" />
        <meta property="og:type" content="article" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Limited Offer</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Get a free AEG SaphirMatt<br />
                  <span className="text-primary">induction hob</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Order your new kitchen by March 31st 2026 and receive an AEG SaphirMatt induction hob, completely free. We have 6 hobs reserved for this promotion—each with a 5-year parts and labour warranty, exclusive to AEG Premier Partners.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton to="tel:+441489788617" variant="ghost">Call Us</MagneticButton>
                <MagneticButton to="/brochures" variant="ghost">Download Brochure</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary border border-border">
                <img
                  src="/aok/offer_image1.webp"
                  alt="AEG SaphirMatt induction hob close-up"
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
                  Start your new year with a kitchen that feels as fresh as your resolutions. We’re kicking off 2026 with an offer that pairs design, durability, and premium technology straight to your worktop.
                </p>
                <p>
                  Order your new kitchen by the end of March and you will receive an AEG SaphirMatt Induction Hob completely free. This is no ordinary hob—it’s engineered for real cooking and modern hosting.
                </p>

                <h3 className="heading-medium text-foreground">Why this hob is a showstopper</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Up to four times more scratch resistant—ideal for family cooking and enthusiastic pan shuffles.</li>
                  <li>Anti-fingerprint surface—stays looking smart even during busy dinner prep.</li>
                  <li>More durable construction—designed for years of dependable performance.</li>
                  <li>Elegant matt black finish—a sophisticated upgrade for any modern kitchen.</li>
                  <li>Five-year parts and labour warranty included, free for our customers.</li>
                  <li>Exclusive AEG Premier Partner range—you won’t find this extended warranty everywhere.</li>
                </ul>

                <h3 className="heading-medium text-foreground">How to claim</h3>
                <p>
                  It all starts with a chat. Book a consultation, share your plans, and we’ll scope your new kitchen. Place your order by March 31st 2026 and we’ll reserve one of the six available AEG SaphirMatt hobs for you—free of charge.
                </p>
                <div className="flex flex-wrap gap-4">
                  <MagneticButton to="/contact" variant="outline">Get In Touch</MagneticButton>
                  <MagneticButton to="/services" variant="ghost">View Our Services</MagneticButton>
                </div>

                <h3 className="heading-medium text-foreground">What you get with Fareham Kitchens</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Bespoke design aligned to your cooking style, appliances, and storage needs.</li>
                  <li>Premium cabinetry, quartz/granite surfaces, and integrated lighting plans.</li>
                  <li>Project-managed installation with trusted fitters and electricians.</li>
                  <li>Aftercare, adjustments, and responsive support post-install.</li>
                </ul>

                <h3 className="heading-medium text-foreground">Terms & Conditions</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Offer: AEG SaphirMatt Induction Hob supplied free with a full fitted kitchen order.</li>
                  <li>Minimum kitchen order value: £20,000.</li>
                  <li>Limited to 6 hobs; first-come, first-served.</li>
                  <li>Order must be placed by March 31st 2026.</li>
                  <li>Includes 5-year parts and labour warranty (AEG Premier Partner benefit).</li>
                  <li>Offer valid on the specified AEG SaphirMatt model only. T’s & C’s apply.</li>
                </ul>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Ready to claim?</h3>
                <p className="body-elegant text-muted-foreground">
                  Book a showroom visit or request a call. We’ll confirm availability and reserve your hob when your kitchen order is placed.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="tel:+441489788617" variant="ghost">Call 01489 788617</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Explore</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/choosing-the-right-kitchen-worktop" className="hover:text-primary transition-colors">Choosing the right worktop</Link></li>
                  <li><Link href="/services/modern-kitchens" className="hover:text-primary transition-colors">Modern kitchens</Link></li>
                  <li><Link href="/services/shaker-kitchens" className="hover:text-primary transition-colors">Shaker kitchens</Link></li>
                  <li><Link href="/services/traditional-kitchens" className="hover:text-primary transition-colors">Traditional kitchens</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">View projects</Link></li>
                </ul>
              </div>
              <div className="overflow-hidden border border-border">
                <img
                  src="/aok/offer_image2.webp"
                  alt="AEG induction hob installed in modern kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default AegOffer;
