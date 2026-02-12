import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

/**
 * Thank-you page shown after successful contact form submission.
 * Use this URL as the conversion destination in Google Ads, Meta, etc.:
 * https://farehamkitchens.co.uk/thank-you
 */
const ThankYou = () => {
  return (
    <>
      <Head>
        <title>Thank You | Fareham Kitchens</title>
        <meta
          name="description"
          content="Thank you for your enquiry. We'll be in touch within 24 hours."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://farehamkitchens.co.uk/thank-you" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-34 pb-20 lg:pt-56 lg:pb-32 min-h-[70vh] flex flex-col justify-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <AnimatedSection>
                <CheckCircle
                  size={80}
                  className="text-primary mx-auto mb-8"
                  strokeWidth={1}
                />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground mb-6">
                  Thank You
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground text-lg mb-10">
                  Your message has been received. One of our design consultants
                  will be in touch within 24 hours.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton to="/" variant="outline">
                  Back to Home
                </MagneticButton>
                <MagneticButton to="/contact" variant="primary">
                  Send Another Enquiry
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

export default ThankYou;
