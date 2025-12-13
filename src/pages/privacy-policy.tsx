import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Fareham Kitchens</title>
        <meta
          name="description"
          content="Privacy Policy for AO Kitchens trading as Fareham Kitchens. Learn how we collect, use, and protect your personal information."
        />
        <meta property="og:title" content="Privacy Policy | Fareham Kitchens" />
        <meta property="og:description" content="Privacy Policy for AO Kitchens trading as Fareham Kitchens. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://farehamkitchens.co.uk/privacy-policy" />
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
                Privacy Policy
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
                      AO Kitchens trading as Fareham Kitchens (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.farehamkitchens.co.uk or use our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We may collect information about you in a variety of ways:</p>
                    <h3 className="heading-small text-foreground mb-3">2.1 Personal Information</h3>
                    <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Contact us via our website contact form</li>
                      <li>Request a consultation or quote</li>
                      <li>Download brochures or other materials</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Visit our showroom</li>
                    </ul>
                    <p>This information may include your name, email address, phone number, postal address, and any other information you choose to provide.</p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Respond to your enquiries and provide customer service</li>
                      <li>Schedule consultations and appointments</li>
                      <li>Send you information about our products and services</li>
                      <li>Process and fulfil your orders</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                      <li>Send you marketing communications (with your consent)</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">4. Legal Basis for Processing</h2>
                    <p className="mb-4">Under UK GDPR, we process your personal data on the following legal bases:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Consent:</strong> When you have given clear consent for us to process your personal data for specific purposes</li>
                      <li><strong>Contract:</strong> When processing is necessary for the performance of a contract with you</li>
                      <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate business interests</li>
                      <li><strong>Legal Obligation:</strong> When processing is necessary to comply with a legal obligation</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">5. Data Sharing and Disclosure</h2>
                    <p className="mb-4">We may share your information with:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Service providers who assist us in operating our website and conducting our business</li>
                      <li>Third-party suppliers and contractors involved in fulfilling your kitchen order</li>
                      <li>Legal authorities when required by law or to protect our rights</li>
                    </ul>
                    <p className="mt-4">We do not sell, trade, or rent your personal information to third parties for marketing purposes.</p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">6. Data Retention</h2>
                    <p>
                      We will retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We typically retain customer information for up to 7 years after the completion of a project to comply with legal and accounting requirements.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">7. Your Rights</h2>
                    <p className="mb-4">Under UK GDPR, you have the following rights:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Right of Access:</strong> You can request a copy of the personal data we hold about you</li>
                      <li><strong>Right to Rectification:</strong> You can request correction of inaccurate or incomplete data</li>
                      <li><strong>Right to Erasure:</strong> You can request deletion of your personal data in certain circumstances</li>
                      <li><strong>Right to Restrict Processing:</strong> You can request limitation of how we use your data</li>
                      <li><strong>Right to Data Portability:</strong> You can request transfer of your data to another service provider</li>
                      <li><strong>Right to Object:</strong> You can object to processing of your personal data</li>
                      <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you can withdraw it at any time</li>
                    </ul>
                    <p className="mt-4">To exercise any of these rights, please contact us using the details provided below.</p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
                    <p>
                      Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors are coming from. You can control cookie preferences through your browser settings. For more information, please see our Cookie Policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">9. Data Security</h2>
                    <p>
                      We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">10. Third-Party Links</h2>
                    <p>
                      Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">11. Children&apos;s Privacy</h2>
                    <p>
                      Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">12. Changes to This Privacy Policy</h2>
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                    </p>
                  </div>

                  <div>
                    <h2 className="heading-medium text-foreground mb-4">13. Contact Us</h2>
                    <p className="mb-4">If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
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

export default PrivacyPolicy;

