import { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";
import { useToast } from "@/hooks/use-toast";

type Brochure = {
  id: string;
  title: string;
  description: string;
  bestFor: string;
  bullets: string[];
  href: string;
};

const brochures: Brochure[] = [
  {
    id: "systemat",
    title: "Häcker Systemat",
    description:
      "Our premium German range with the broadest design flexibility, thicker carcasses, and elevated internal fittings.",
    bestFor: "Premium German kitchens with maximum flexibility and storage efficiency.",
    href: "/systemat2026.pdf",
    bullets: [
      "Premium materials and finishes including lacquer, veneer, and glass",
      "Widest choice of unit sizes and bespoke elements for complex layouts",
      "Upgraded carcasses, drawer systems, and hardware for longevity",
      "Maximised storage heights and organisation for clean, ergonomic kitchens",
    ],
  },
  {
    id: "concept130",
    title: "Häcker Concept130",
    description:
      "Excellent German build quality at a sharper price point, with strong colour and style options.",
    bestFor: "Design-led German kitchens that balance value, style, and durability.",
    href: "/concept2026.pdf",
    bullets: [
      "Great value German-built cabinetry without compromising durability",
      "Wide mix of modern, classic, and trending door colours",
      "Popular, practical cabinet sizes for efficient layouts",
      "Reliable everyday performance for busy family kitchens",
    ],
  },
  {
    id: "british",
    title: "British Furniture (AOK Main)",
    description:
      "Fully made-to-order UK cabinetry with coordinated carcasses and expansive colour and material choice.",
    bestFor: "Bespoke British-made kitchens tailored to unique layouts and briefs.",
    href: "/Andrew-Osborne-Brochure.pdf",
    bullets: [
      "Made-to-measure cabinetry for maximum design flexibility",
      "Colour-coordinated carcasses for a cohesive designer look",
      "Quality options spanning a broad range of budgets",
      "Extensive paints, woodgrains, and specialist material choices",
    ],
  },
];

const Brochures = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: "Brochure download",
          message: "Brochure download request from brochures page.",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      toast({
        title: "Brochures unlocked",
        description: "Thanks—downloads are ready below. We’ll be in touch soon.",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Brochures unlocked",
        description: "Downloads are ready below. We’ll follow up if needed.",
      });
    } finally {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Download Kitchen Brochures | Fareham Kitchens</title>
        <meta
          name="description"
          content="Download Häcker Systemat, Häcker Concept130, and British-made kitchen brochures. Share your details to unlock the PDFs and choose the right range for your home."
        />
        <meta property="og:title" content="Download Kitchen Brochures | Fareham Kitchens" />
        <meta property="og:description" content="Download Häcker Systemat, Häcker Concept130, and British-made kitchen brochures. Share your details to unlock the PDFs and choose the right range for your home." />
        <meta property="og:image" content="https://www.farehamkitchens.co.uk/logo.webp" />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/brochures" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Brochure Downloads</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Find the Right" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Kitchen Range" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-3xl">
                  Tell us a few details and unlock our latest brochures. Compare British-made furniture with
                  Häcker&apos;s German ranges—Systemat for premium flexibility and Concept130 for outstanding value.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Form + note */}
        <section className="pb-24">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimatedSection>
                <div className="bg-secondary p-8 lg:p-12 border border-border">
                  <h2 className="heading-medium text-foreground mb-4">Unlock the brochures</h2>
                  <p className="body-elegant text-muted-foreground mb-8">
                    We&apos;ll follow up to help you choose the right range and book a showroom visit if helpful.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label htmlFor="name" className="label-uppercase text-foreground text-xs block mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="email" className="label-uppercase text-foreground text-xs block mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="label-uppercase text-foreground text-xs block mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-border pb-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300 body-elegant"
                          placeholder="+44 1234 567890"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm text-muted-foreground">
                        Once submitted, the downloads unlock instantly below.
                      </p>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="label-uppercase px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Unlock Brochures"}
                      </button>
                    </div>
                  </form>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} className="self-center">
                <div className="space-y-6">
                  <div className="p-6 border border-border bg-background">
                    <h3 className="heading-medium text-foreground mb-3">What to expect</h3>
                    <p className="body-elegant text-muted-foreground">
                      Compare our British-made furniture with Häcker&apos;s Systemat and Concept130 German ranges.
                      Each PDF highlights materials, storage options, and layout ideas to help you shortlist the right fit.
                    </p>
                  </div>
                  <div className="p-6 border border-border bg-background">
                    <h3 className="heading-medium text-foreground mb-3">Need advice?</h3>
                    <p className="body-elegant text-muted-foreground">
                      Share any notes when we call and we&apos;ll recommend the best range for your space, budget, and timeline.
                    </p>
                    <div className="mt-4 flex gap-3">
                      <MagneticButton to="/contact" variant="outline">
                        Book a Consultation
                      </MagneticButton>
                      <MagneticButton href="tel:+441489788617" variant="ghost">
                        Call 01489 788617
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Brochures grid */}
        <section className="pb-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-12">
              <span className="label-uppercase text-primary mb-4 block">Choose your brochure</span>
              <h2 className="heading-large text-foreground">
                Guided Choices<br />
                <span className="text-primary">For Every Kitchen</span>
              </h2>
              <p className="body-elegant text-muted-foreground mt-4">
                Downloads unlock after you submit your details. Each card outlines who the range suits best.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brochures.map((brochure, index) => (
                <AnimatedSection
                  key={brochure.id}
                  delay={0.05 * (index + 1)}
                  className="p-8 bg-background border border-border hover:border-primary transition-colors duration-300 flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="heading-medium text-foreground mb-2">{brochure.title}</h3>
                    <p className="body-elegant text-primary text-sm mb-4">{brochure.bestFor}</p>
                    <p className="body-elegant text-muted-foreground mb-6">{brochure.description}</p>
                    <ul className="space-y-3">
                      {brochure.bullets.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                          <span className="w-2 h-2 bg-primary mt-1.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    {isSubmitted ? (
                      <MagneticButton href={brochure.href} variant="outline">
                        Download PDF
                      </MagneticButton>
                    ) : (
                      <button
                        type="button"
                        className="w-full label-uppercase px-8 py-3 border border-border text-muted-foreground cursor-not-allowed"
                        aria-disabled
                      >
                        Complete form to download
                      </button>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Brochures;

