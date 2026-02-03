/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const AEG_CASHBACK_PDF = "/AEG%202026%20Premier%20Partner%20Consumer%20Cashback.pdf";

const AegCashbackOffer = () => {
  return (
    <>
      <Head>
        <title>AEG 2026 Premier Partner Consumer Cashback | Up to £1,300</title>
        <meta
          name="description"
          content="Claim up to £500 cashback on 3+ AEG appliances, plus £500 on selected hobs and £300 on MaxiSpace fridge freezer. Offer 02.01.26 – 30.06.26. Terms apply."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/blog/aeg-cashback-offer" />
        <meta property="og:title" content="AEG 2026 Premier Partner Consumer Cashback | Up to £1,300" />
        <meta property="og:description" content="Claim up to £500 cashback on 3+ AEG appliances, plus £500 on selected hobs and £300 on MaxiSpace fridge freezer. Offer 02.01.26 – 30.06.26." />
        <meta property="og:url" content="https://farehamkitchens.co.uk/blog/aeg-cashback-offer" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AEG 2026 Premier Partner Consumer Cashback" />
        <meta name="twitter:description" content="Claim up to £1,300 cashback on AEG appliances. Offer 02.01.26 – 30.06.26." />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        <section className="pt-34 pb-12 lg:pt-54">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <AnimatedSection>
                <span className="label-uppercase text-primary">AEG Premier Partner</span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-display text-foreground">
                  Claim up to <span className="text-primary">£1,300</span>
                  <br />
                  cashback
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-elegant text-muted-foreground max-w-2xl">
                  Buy 3 or more AEG appliances for your kitchen (including a single oven and a hob) and claim up to £500 cashback. Earn a further £500 with a selected AEG hob and £300 with a MaxiSpace fridge freezer. Offer available 02.01.26 – 30.06.26.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.3} className="flex flex-wrap gap-4">
                <MagneticButton to="/contact" variant="outline">Book a Consultation</MagneticButton>
                <MagneticButton to="tel:+441489788617" variant="ghost">Call Us</MagneticButton>
                <a
                  href={AEG_CASHBACK_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 label-uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
                >
                  Download PDF
                </a>
              </AnimatedSection>
            </div>
            <AnimatedSection delay={0.2} animation="fade-in-right">
              <div className="aspect-[4/3] overflow-hidden bg-secondary border border-border flex items-center justify-center p-8">
                <p className="heading-medium text-muted-foreground text-center">
                  AEG Premier Partner<br />Consumer Cashback 2026
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section className="pb-12">
          <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <AnimatedSection className="lg:col-span-2 space-y-10">
              <article className="space-y-6 body-elegant text-muted-foreground leading-relaxed">
                <h3 className="heading-medium text-foreground">How to claim your reward</h3>
                <p>
                  All claims must be submitted after you purchase your AEG appliances. Visit{" "}
                  <a href="https://aeg.co.uk/PPRewards26H1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    aeg.co.uk/PPRewards26H1
                  </a>{" "}
                  and follow the step-by-step instructions to register your appliances and claim your cashback.
                </p>
                <p>
                  <strong className="text-foreground">Before you log on</strong>, have ready: (1) model number, and (2) a scanned image of your sales receipt (PDF, JPEG or TIF) clearly showing the retailer, model number, price and date of purchase. The final date for submitting a claim is 31st August 2026.
                </p>

                <h3 className="heading-medium text-foreground">Cashback amounts</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>3 appliances – £150</li>
                  <li>4 appliances – £200</li>
                  <li>5 appliances – £300</li>
                  <li>6 appliances – £400</li>
                  <li>7+ appliances – £500</li>
                  <li>Selected AEG hob – £500 extra</li>
                  <li>Selected AEG MaxiSpace Fridge Freezer – £300 extra</li>
                </ul>
                <p className="text-sm">
                  You must purchase 1 single or double oven and 1 hob within each tier to qualify. Terms and conditions apply.
                </p>

                <h3 className="heading-medium text-foreground">Eligible products</h3>
                <p>
                  Selected hob models: NIK85M30AZ, NIK85M00AZ, NII64G00AZ, T064IB00FZ, NCP84C01AZ, NCH84B03AZ, TCH74B01FZ. MaxiSpace Fridge Freezer: NSC7G752ES (NSC8T751ES from April 2026). Speak to your AEG Premier Partner Kitchen Studio for full details.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <MagneticButton to="/contact" variant="outline">Get In Touch</MagneticButton>
                  <a
                    href={AEG_CASHBACK_PDF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center label-uppercase px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
                  >
                    Download full terms (PDF)
                  </a>
                </div>
              </article>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-8">
              <div className="p-6 bg-secondary border border-border space-y-4">
                <h3 className="heading-medium text-foreground">Ready to claim?</h3>
                <p className="body-elegant text-muted-foreground">
                  Book a showroom visit or call us. We’ll help you choose qualifying AEG appliances and complete your purchase.
                </p>
                <div className="flex flex-col gap-3">
                  <MagneticButton to="/contact" variant="outline">Book Consultation</MagneticButton>
                  <MagneticButton to="tel:+441489788617" variant="ghost">Call 01489 788617</MagneticButton>
                </div>
              </div>
              <div className="p-6 bg-background border border-border space-y-3">
                <span className="label-uppercase text-primary text-xs">Explore</span>
                <ul className="space-y-2 body-elegant text-foreground">
                  <li><Link href="/blog/aeg-offer" className="hover:text-primary transition-colors">Free AEG SaphirMatt Hob offer</Link></li>
                  <li><Link href="/appliances" className="hover:text-primary transition-colors">Appliances</Link></li>
                  <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">View projects</Link></li>
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

export default AegCashbackOffer;
