import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Fareham Kitchens</title>
        <meta
          name="description"
          content="Terms of Service for AO Kitchens trading as Fareham Kitchens. Read our terms and conditions for using our website and services."
        />
        <meta property="og:title" content="Terms of Service | Fareham Kitchens" />
        <meta property="og:description" content="Terms of Service for AO Kitchens trading as Fareham Kitchens. Read our terms and conditions for using our website and services." />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/terms-of-service" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Legal</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                Terms of Service
              </h1>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground text-lg">
                  Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl prose prose-lg">
              <AnimatedSection>
                <div className="space-y-8 body-elegant text-muted-foreground leading-relaxed">
                  <div>
                    <h2 className="heading-medium text-foreground mb-4">1. Introduction</h2>
                    <p>
                      These Terms of Service ("Terms") govern your access to and use of the website www.farehamkitchens.co.uk (the "Website") and the services provided by AO Kitchens trading as Fareham Kitchens ("we", "our", or "us"). By accessing or using our Website or services, you agree to be bound by these Terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">2. About Us</h2>
                    <p>
                      AO Kitchens trading as Fareham Kitchens is a kitchen design and installation company operating in Hampshire, United Kingdom. Our registered business address is 491-493 Bitterne Road East, Southampton, SO18 5EQ.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">3. Use of Website</h2>
                    <h3 className="heading-small text-foreground mb-3">3.1 Acceptable Use</h3>
                    <p className="mb-4">You agree to use our Website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behaviour includes:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Harassing or causing distress or inconvenience to any person</li>
                      <li>Transmitting obscene or offensive content</li>
                      <li>Disrupting the normal flow of dialogue within our Website</li>
                      <li>Attempting to gain unauthorised access to our systems</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">4. Intellectual Property</h2>
                    <p>
                      All content on this Website, including text, graphics, logos, images, and software, is the property of AO Kitchens trading as Fareham Kitchens or its content suppliers and is protected by UK and international copyright laws. You may not reproduce, distribute, modify, or create derivative works from any content on this Website without our prior written consent.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">5. Products and Services</h2>
                    <h3 className="heading-small text-foreground mb-3">5.1 Product Information</h3>
                    <p className="mb-4">
                      We strive to ensure that all product descriptions, images, and specifications on our Website are accurate. However, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                    </p>
                    <h3 className="heading-small text-foreground mb-3">5.2 Pricing</h3>
                    <p>
                      All prices are quoted in British Pounds (GBP) and are subject to change without notice. Prices do not include VAT unless otherwise stated. Final pricing will be confirmed in writing as part of your quotation.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">6. Consultations and Quotations</h2>
                    <p className="mb-4">
                      When you request a consultation or quotation:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We will provide an initial consultation, which may be free of charge or subject to a fee as specified</li>
                      <li>Quotations are valid for 30 days unless otherwise stated</li>
                      <li>All quotations are estimates and final costs may vary based on site conditions and specifications</li>
                      <li>We reserve the right to decline any project at our discretion</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">7. Orders and Contracts</h2>
                    <p className="mb-4">
                      When you place an order with us:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>A formal contract will be provided detailing specifications, pricing, and terms</li>
                      <li>You must review and sign the contract before work commences</li>
                      <li>A deposit may be required as specified in your contract</li>
                      <li>Payment terms will be outlined in your individual contract</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">8. Cancellation and Refunds</h2>
                    <h3 className="heading-small text-foreground mb-3">8.1 Consumer Rights</h3>
                    <p className="mb-4">
                      Under UK consumer law, if you are a consumer, you have the right to cancel your order within 14 days of placing it, subject to certain conditions. However, this right may not apply if work has already commenced with your agreement.
                    </p>
                    <h3 className="heading-small text-foreground mb-3">8.2 Cancellation by Us</h3>
                    <p>
                      We reserve the right to cancel or refuse any order at any time. If we cancel your order, we will refund any payments made, minus any costs already incurred.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">9. Warranties and Guarantees</h2>
                    <p className="mb-4">
                      We provide the following warranties:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Cabinet Warranty:</strong> 10-year warranty on kitchen cabinets (subject to terms and conditions)</li>
                      <li><strong>Workmanship:</strong> Warranty on installation workmanship as specified in your contract</li>
                      <li><strong>Appliances:</strong> Warranties provided by manufacturers apply</li>
                    </ul>
                    <p className="mt-4">
                      All warranties are subject to proper use and maintenance. Full warranty terms will be provided in your contract.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">10. Limitation of Liability</h2>
                    <p className="mb-4">
                      To the fullest extent permitted by law:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>We shall not be liable for any indirect, incidental, or consequential damages</li>
                      <li>Our total liability shall not exceed the value of the contract</li>
                      <li>We are not responsible for delays caused by circumstances beyond our reasonable control</li>
                    </ul>
                    <p className="mt-4">
                      Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud, or any other liability that cannot be excluded by law.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">11. Dispute Resolution</h2>
                    <p className="mb-4">
                      If you have a complaint or dispute:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Please contact us first to try to resolve the matter amicably</li>
                      <li>If we cannot resolve the dispute, you may refer it to an alternative dispute resolution scheme</li>
                      <li>These Terms are governed by English law and subject to the jurisdiction of English courts</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">12. Third-Party Links</h2>
                    <p>
                      Our Website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites. Your use of third-party sites is at your own risk.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">13. Changes to Terms</h2>
                    <p>
                      We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Website. Your continued use of the Website after changes are posted constitutes acceptance of the modified Terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">14. Severability</h2>
                    <p>
                      If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">15. Contact Information</h2>
                    <p className="mb-4">If you have any questions about these Terms, please contact us:</p>
                    <p className="mb-2">
                      <strong>AO Kitchens trading as Fareham Kitchens</strong><br />
                      491-493 Bitterne Road East<br />
                      Southampton<br />
                      SO18 5EQ<br />
                      United Kingdom
                    </p>
                    <p className="mb-2">
                      <strong>Email:</strong> <a href="mailto:info@aokitchens.co.uk" className="text-primary hover:underline">info@aokitchens.co.uk</a>
                    </p>
                    <p>
                      <strong>Phone:</strong> <a href="tel:+441489788617" className="text-primary hover:underline">01489 788617</a>
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

export default TermsOfService;

