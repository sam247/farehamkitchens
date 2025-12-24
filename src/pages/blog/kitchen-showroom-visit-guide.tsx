/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const KitchenShowroomVisitGuide = () => {
  return (
    <>
      <Head>
        <title>Kitchen Showroom Visit Guide | What to Ask at a Kitchen Showroom | Fareham Kitchens</title>
        <meta
          name="description"
          content="Complete guide to visiting a kitchen showroom. Learn what to ask, what to look for, and how to make the most of your showroom visit when planning your kitchen."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/blog/kitchen-showroom-visit-guide" />
        <meta property="og:title" content="Kitchen Showroom Visit Guide | What to Ask at a Kitchen Showroom" />
        <meta property="og:description" content="Complete guide to visiting a kitchen showroom. Learn what to ask, what to look for, and how to make the most of your showroom visit." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/blog/kitchen-showroom-visit-guide" />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2025-12-24T00:00:00Z" />
        <meta property="article:author" content="Fareham Kitchens" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Showroom Visit Guide | What to Ask at a Kitchen Showroom" />
        <meta name="twitter:description" content="Complete guide to visiting a kitchen showroom. Learn what to ask, what to look for, and how to make the most of your showroom visit." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Kitchen Showroom Visit Guide | What to Ask at a Kitchen Showroom",
              "description": "Complete guide to visiting a kitchen showroom. Learn what to ask, what to look for, and how to make the most of your showroom visit when planning your kitchen.",
              "image": "https://farehamkitchens.co.uk/aok/blogimages/what_is_a_shaker_kitchen.webp",
              "datePublished": "2025-12-24T00:00:00Z",
              "dateModified": "2025-12-24T00:00:00Z",
              "author": {
                "@type": "Organization",
                "name": "Fareham Kitchens"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Fareham Kitchens",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://farehamkitchens.co.uk/logo.webp"
                }
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://farehamkitchens.co.uk/blog/kitchen-showroom-visit-guide"
              }
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-32 pb-12 lg:pt-44">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">Buying Guide</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Kitchen Showroom<br />
                  <span className="text-primary">Visit Guide</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Make the most of your kitchen showroom visit. This guide covers what to ask, what to look for, and how to prepare for your visit to ensure you get all the information you need.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Visit</MagneticButton>
                <MagneticButton to="/about" variant="ghost">About Our Showroom</MagneticButton>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src="/aok/blogimages/what_is_a_shaker_kitchen.webp"
                  alt="Kitchen showroom visit guide"
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
                <h2 className="heading-medium text-foreground">Before Your Visit</h2>
                <p>
                  Preparation makes your showroom visit more productive:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Measure your space:</strong> Bring room dimensions and photos</li>
                  <li><strong className="text-foreground">Set a budget:</strong> Know your approximate budget range</li>
                  <li><strong className="text-foreground">Gather inspiration:</strong> Bring photos, Pinterest boards, or magazine clippings</li>
                  <li><strong className="text-foreground">List your priorities:</strong> What matters most—storage, style, appliances?</li>
                  <li><strong className="text-foreground">Book an appointment:</strong> Ensure you get dedicated time with a designer</li>
                </ul>

                <h2 className="heading-medium text-foreground">What to Look For</h2>
                <p>
                  During your visit, pay attention to:
                </p>

                <h3 className="heading-medium text-foreground">Quality & Craftsmanship</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Open and close doors and drawers—do they feel smooth and solid?</li>
                  <li>Check the finish quality—is it consistent and well-applied?</li>
                  <li>Examine joints and construction—are they well-made?</li>
                  <li>Look at hardware quality—hinges, handles, and drawer runners</li>
                </ul>

                <h3 className="heading-medium text-foreground">Materials & Finishes</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>See worktop materials in person—photos don't show texture</li>
                  <li>Compare different door finishes and colours</li>
                  <li>Feel the quality of materials</li>
                  <li>Ask about durability and maintenance requirements</li>
                </ul>

                <h3 className="heading-medium text-foreground">Storage Solutions</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>See storage systems in action—larders, drawers, corner units</li>
                  <li>Understand how different storage solutions work</li>
                  <li>Ask about custom storage options</li>
                </ul>

                <h2 className="heading-medium text-foreground">Questions to Ask</h2>
                <p>
                  Come prepared with questions:
                </p>

                <h3 className="heading-medium text-foreground">About the Process</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>What does the design process involve?</li>
                  <li>How long does the design phase take?</li>
                  <li>What&apos;s included in the design service?</li>
                  <li>Do you provide 3D visualisations?</li>
                </ul>

                <h3 className="heading-medium text-foreground">About Installation</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Do you provide installation services?</li>
                  <li>How long does installation typically take?</li>
                  <li>What&apos;s included in the installation?</li>
                  <li>Do you coordinate with other tradespeople?</li>
                </ul>

                <h3 className="heading-medium text-foreground">About Costs</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>What&apos;s included in the quoted price?</li>
                  <li>Are there any additional costs to consider?</li>
                  <li>What payment terms do you offer?</li>
                  <li>Are there any current offers or promotions?</li>
                </ul>

                <h3 className="heading-medium text-foreground">About Warranties</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>What warranties do you offer?</li>
                  <li>How long are warranties valid?</li>
                  <li>What&apos;s covered under warranty?</li>
                  <li>What&apos;s your aftercare service like?</li>
                </ul>

                <h2 className="heading-medium text-foreground">Making the Most of Your Visit</h2>
                <p>
                  To get the most from your showroom visit:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong className="text-foreground">Take photos:</strong> Document styles and features you like</li>
                  <li><strong className="text-foreground">Ask for samples:</strong> Take home door samples and worktop samples if possible</li>
                  <li><strong className="text-foreground">See projects:</strong> Ask to see examples of completed projects</li>
                  <li><strong className="text-foreground">Discuss your space:</strong> Bring your room dimensions and discuss layout options</li>
                  <li><strong className="text-foreground">Take notes:</strong> Write down important information and answers</li>
                </ul>

                <h2 className="heading-medium text-foreground">Red Flags to Watch For</h2>
                <p>
                  Be cautious if you notice:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pressure to make immediate decisions</li>
                  <li>Unclear pricing or hidden costs</li>
                  <li>Poor quality materials or construction</li>
                  <li>Lack of portfolio or project examples</li>
                  <li>Unprofessional service or communication</li>
                </ul>

                <h2 className="heading-medium text-foreground">After Your Visit</h2>
                <p>
                  Following your visit:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Review your notes and photos</li>
                  <li>Compare different showrooms if visiting multiple</li>
                  <li>Request written quotes for comparison</li>
                  <li>Check reviews and testimonials</li>
                  <li>Follow up with any additional questions</li>
                </ul>

                <p>
                  A showroom visit is an essential step in planning your kitchen. <Link href="/contact" className="text-primary hover:underline">Book a visit to our Southampton showroom</Link> to see our kitchen ranges, materials, and finishes in person. Our team is here to answer all your questions and help you plan your perfect kitchen.
                </p>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Visit Our Showroom</h3>
                <p className="body-elegant text-muted-foreground">
                  See our kitchens in person at our Southampton showroom.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book a Visit</MagneticButton>
                  <MagneticButton to="/about" variant="ghost">About Us</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Related Articles</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/kitchen-renovation-guide" className="hover:text-primary transition-colors">Kitchen renovation guide</Link></li>
                  <li><Link href="/blog/how-to-choose-kitchen-cabinets" className="hover:text-primary transition-colors">Choosing kitchen cabinets</Link></li>
                  <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
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

export default KitchenShowroomVisitGuide;

