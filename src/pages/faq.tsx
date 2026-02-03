import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const faqs = [
  {
    question: "How long does the kitchen design process take?",
    answer: "Our design process typically takes 2-4 weeks, depending on the complexity of your project. We begin with an initial consultation to understand your vision, lifestyle, and requirements. This is followed by detailed 3D visualisations, material selections, and comprehensive planning. We ensure every detail is perfect before proceeding to manufacturing, which typically takes 8-12 weeks depending on the kitchen range selected."
  },
  {
    question: "Do you offer kitchen installation services?",
    answer: "Yes, we provide a complete end-to-end service including professional installation by our expert team. Our skilled fitters ensure a seamless fit with meticulous attention to every detail. We handle project management, minimal disruption to your home, and conduct a final inspection to ensure everything meets our high standards. Installation typically takes 1-2 weeks depending on the scope of work."
  },
  {
    question: "What areas do you cover for kitchen design and installation?",
    answer: "We primarily serve Hampshire, especially Southampton, Portsmouth, Winchester, Fareham, Gosport, and surrounding areas. We also cover locations including Chilworth, Hedge End, Romsey, Warsash, and across the wider Hampshire region. For select projects, we may travel further—please contact us to discuss your location."
  },
  {
    question: "How much does a bespoke kitchen cost?",
    answer: "Kitchen costs vary significantly based on size, materials, appliances, and complexity. A typical bespoke kitchen in Hampshire ranges from £15,000 to £50,000+, with premium projects exceeding this. Factors affecting cost include: kitchen size and layout, choice of cabinetry (Häcker Systemat, Concept130, or British-made), worktop materials (granite, quartz, Dekton), appliances (AEG, Bora, Quooker), and installation requirements. We provide detailed quotes after your initial consultation. See our kitchen prices guide for more information."
  },
  {
    question: "What warranty do you offer on your kitchens?",
    answer: "We offer comprehensive warranty coverage: 10-year warranty on cabinets, appliance cover as per manufacturer warranties, workmanship guarantee on all installation work, and responsive support for any issues. Our aftercare service ensures your kitchen continues to perform perfectly long after installation."
  },
  {
    question: "Can you work with my existing kitchen appliances?",
    answer: "Yes, we can design around your existing appliances if they&apos;re in good condition and meet your needs. However, we often recommend upgrading to integrated appliances for a seamless, modern look. We work with premium brands including AEG, Bora, Quooker, Miele, and Gaggenau, and can help you select the perfect appliances for your new kitchen."
  },
  {
    question: "Do you work with a budget in mind?",
    answer: "Absolutely. We work with a wide range of budgets and can tailor your kitchen design to meet your financial requirements. During your initial consultation, we&apos;ll discuss your budget and show you options that work within it. We offer three main kitchen ranges: Häcker Systemat (premium), Concept130 (mid-range), and British-made (flexible pricing), allowing us to find the perfect solution for your budget."
  },
  {
    question: "How do I book a kitchen consultation?",
    answer: "You can book a consultation in several ways: visit our showroom at 491-493 Bitterne Road East, Southampton, SO18 5EQ; call us on 01489 788617; email us at info@aokitchens.co.uk; or use our online contact form. We offer both showroom visits and home consultations to discuss your project, view samples, and explore design options."
  },
  {
    question: "What kitchen styles do you offer?",
    answer: "We specialise in three main kitchen styles: Modern handleless kitchens with sleek, minimal lines and integrated technology; Shaker kitchens with framed cabinetry and timeless design; and Traditional kitchens with in-frame doors and ornate detailing. Each style can be customised with various materials, finishes, and layouts to suit your home and lifestyle."
  },
  {
    question: "Do you handle kitchen extensions and building work?",
    answer: "While we focus on kitchen design, supply, and installation, we work closely with trusted local builders and can coordinate building work for kitchen extensions, structural changes, and renovations. We can provide guidance on planning permission, building regulations, and project timelines to ensure your kitchen project runs smoothly from start to finish."
  },
  {
    question: "What worktop materials do you offer?",
    answer: "We offer a wide range of worktop materials including: Granite (natural stone, heat-resistant, unique patterns), Quartz (engineered stone, low maintenance, consistent appearance), Dekton (ultra-compact surface, extremely durable, modern aesthetic), and Solid wood (warm, traditional, requires maintenance). We&apos;ll help you choose the best material based on your lifestyle, budget, and design preferences."
  },
  {
    question: "How long does kitchen installation take?",
    answer: "Installation time varies based on project scope: Simple kitchen refits typically take 1-2 weeks; Full kitchen renovations with building work can take 2-4 weeks; Kitchen extensions with new builds may take 4-8 weeks. We provide a detailed timeline during the planning phase and work to minimise disruption to your daily life. Our team ensures a clean, organised work environment throughout the installation process."
  }
];

const FAQ = () => {
  return (
    <>
      <Head>
        <title>Kitchen Design FAQ | Frequently Asked Questions | Fareham Kitchens Hampshire</title>
        <meta
          name="description"
          content="Frequently asked questions about kitchen design, installation, costs, and services from Fareham Kitchens. Expert answers to help you plan your dream kitchen."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/faq" />
        <meta property="og:title" content="Kitchen Design FAQ | Frequently Asked Questions | Fareham Kitchens" />
        <meta property="og:description" content="Frequently asked questions about kitchen design, installation, costs, and services from Fareham Kitchens." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kitchen Design FAQ | Frequently Asked Questions" />
        <meta name="twitter:description" content="Frequently asked questions about kitchen design, installation, costs, and services from Fareham Kitchens." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }),
          }}
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-34 pb-20 lg:pt-56 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Help & Support</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Frequently Asked" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Questions" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Find answers to common questions about our kitchen design process, installation services, costs, and more. Can&apos;t find what you&apos;re looking for? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> and we&apos;ll be happy to help.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <AnimatedSection
                    key={index}
                    delay={0.05 * index}
                    className="border-b border-border pb-8 last:border-b-0"
                  >
                    <h2 className="heading-medium text-foreground mb-4 text-xl">
                      {faq.question}
                    </h2>
                    <p className="body-elegant text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl space-y-6">
            <AnimatedSection>
              <span className="label-uppercase text-primary">Still Have Questions?</span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-large text-foreground">
                Let&apos;s Discuss Your<br />
                <span className="text-primary">Kitchen Project</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-elegant text-muted-foreground leading-relaxed">
                Book a consultation with our team to discuss your kitchen design, get expert advice, and see our showroom in Southampton.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="flex flex-wrap justify-center gap-4">
              <MagneticButton to="/contact" variant="outline">
                Book a Consultation
              </MagneticButton>
              <MagneticButton to="/about" variant="ghost">
                Learn More About Us
              </MagneticButton>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default FAQ;

