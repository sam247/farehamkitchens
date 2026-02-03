import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import TrustSignals from "@/components/home/TrustSignals";

const reviews = [
  {
    name: "Sarah & James",
    location: "Southampton",
    project: "Modern Handleless Kitchen",
    rating: 5,
    text: "Absolutely thrilled with our new kitchen! The design process was smooth, and the team was professional throughout. The quality is outstanding, and the installation was completed on time with minimal disruption. Couldn&apos;t be happier!",
    date: "2024"
  },
  {
    name: "Michael",
    location: "Portsmouth",
    project: "Shaker Kitchen with Island",
    rating: 5,
    text: "From initial consultation to final handover, the service was exceptional. The 3D visualisations helped us see exactly what we were getting, and the finished kitchen exceeded our expectations. Highly recommend!",
    date: "2024"
  },
  {
    name: "Emma & David",
    location: "Winchester",
    project: "Kitchen Extension & Renovation",
    rating: 5,
    text: "We extended our kitchen and needed a complete redesign. The team coordinated everything perfectly with our builders, and the result is a stunning open-plan space that&apos;s perfect for family life. Worth every penny!",
    date: "2024"
  },
  {
    name: "Robert",
    location: "Fareham",
    project: "Traditional Kitchen",
    rating: 5,
    text: "Beautiful traditional kitchen that perfectly suits our period home. The attention to detail is remarkable, and the craftsmanship is evident in every element. The team really understood our vision.",
    date: "2024"
  },
  {
    name: "Lisa & Mark",
    location: "Gosport",
    project: "Small Kitchen Redesign",
    rating: 5,
    text: "Our small kitchen now feels twice the size thanks to clever storage solutions and smart design. The team maximised every inch of space, and we couldn&apos;t be more pleased with the result.",
    date: "2024"
  },
  {
    name: "Jennifer",
    location: "Hedge End",
    project: "Modern Kitchen with Granite Worktops",
    rating: 5,
    text: "The granite worktops are stunning, and the whole kitchen has transformed our home. The installation team was tidy, professional, and completed the work efficiently. Excellent service from start to finish.",
    date: "2024"
  }
];

const Reviews = () => {
  return (
    <>
      <Head>
        <title>Kitchen Reviews & Testimonials | Customer Reviews | Fareham Kitchens Hampshire</title>
        <meta
          name="description"
          content="Read customer reviews and testimonials for Fareham Kitchens. See what our clients say about our kitchen design, installation, and service across Hampshire."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/reviews" />
        <meta property="og:title" content="Kitchen Reviews & Testimonials | Customer Reviews | Fareham Kitchens" />
        <meta property="og:description" content="Read customer reviews and testimonials for Fareham Kitchens. See what our clients say about our kitchen design, installation, and service." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/reviews" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Reviews & Testimonials | Customer Reviews" />
        <meta name="twitter:description" content="Read customer reviews and testimonials for Fareham Kitchens. See what our clients say about our kitchen design, installation, and service." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fareham Kitchens",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": reviews.length
              },
              "review": reviews.map(review => ({
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": review.name
                },
                "datePublished": review.date,
                "reviewBody": review.text,
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": review.rating
                }
              }))
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-34 pb-20 lg:pt-56 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Customer Reviews</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="What Our Clients" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Say About Us" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Don&apos;t just take our word for it. Read what our customers say about their experience with Fareham Kitchens, from initial consultation through to final installation.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <AnimatedSection
                  key={index}
                  delay={0.05 * index}
                  className="p-8 border border-border bg-secondary/40 hover:border-primary transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-xl">★</span>
                    ))}
                  </div>
                  <p className="body-elegant text-muted-foreground mb-6 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="heading-medium text-foreground text-sm mb-1">{review.name}</p>
                    <p className="body-elegant text-muted-foreground text-xs">
                      {review.location} • {review.project} • {review.date}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <AnimatedSection>
                <h2 className="heading-large text-foreground mb-4">
                  Trusted by Homeowners<br />
                  <span className="text-primary">Across Hampshire</span>
                </h2>
                <p className="body-elegant text-muted-foreground">
                  With over 40 years of experience, we&apos;ve helped thousands of homeowners create their dream kitchens. Our commitment to quality, service, and customer satisfaction is reflected in every project we complete.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="flex flex-wrap justify-center gap-8 items-center">
                  <div className="text-center">
                    <p className="heading-display text-primary mb-2">5.0</p>
                    <p className="body-elegant text-muted-foreground">Average Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="heading-display text-primary mb-2">40+</p>
                    <p className="body-elegant text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="heading-display text-primary mb-2">1000+</p>
                    <p className="body-elegant text-muted-foreground">Kitchens Installed</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Ready to Join Our Happy Customers?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Start Your Kitchen<br />
                <span className="text-primary">Journey Today</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation to discuss your kitchen project. Experience the same exceptional service and quality that our customers rave about.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/projects" variant="ghost">
                View Our Projects
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

export default Reviews;

