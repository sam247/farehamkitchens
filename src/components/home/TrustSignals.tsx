import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { Star } from "lucide-react";

const ratings = [
  {
    label: "Trustpilot",
    score: "5.0",
    blurb: "Rated 5/5 by homeowners",
    href: "https://uk.trustpilot.com/review/aokitchens.co.uk",
  },
  {
    label: "Google Reviews",
    score: "5.0",
    blurb: "5-star Google reputation",
    href: "https://www.google.com/search?q=Andrew+Osborne+Kitchens+reviews",
  },
];

const TrustSignals = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-12 space-y-4">
          <span className="label-uppercase text-primary mb-4 block">Trust & Reputation</span>
          <h2 className="heading-large text-foreground">Loved by homeowners</h2>
          <div className="flex justify-center">
            <a
              href="https://uk.trustpilot.com/review/aokitchens.co.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-4 py-3 bg-background border border-border hover:border-primary transition-colors duration-300"
            >
              <Image src="/trustpilot-white.webp" alt="Trustpilot" width={120} height={30} />
              <div className="flex items-center gap-2 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="label-uppercase text-xs text-foreground/80">5.0 rating</span>
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ratings.map((item, index) => (
            <AnimatedSection
              key={item.label}
              delay={0.1 * (index + 1)}
              className="p-8 bg-background border border-border hover:border-primary transition-colors duration-500"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="label-uppercase text-primary block">{item.label}</span>
                  <div className="flex items-baseline gap-3">
                    <span className="heading-medium text-foreground">{item.score}</span>
                    <div className="flex items-center gap-1 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label-uppercase text-sm text-foreground hover:text-primary transition-colors"
                >
                  View
                </a>
              </div>
              <p className="body-elegant text-muted-foreground">{item.blurb}</p>
              {item.label === "Google Reviews" && (
                <div className="mt-4">
                  <Image src="/google_reviews_logo.png" alt="Google Reviews" width={120} height={30} />
                </div>
              )}
              {item.label === "Trustpilot" && (
                <div className="mt-4">
                  <Image src="/trustpilot-white.webp" alt="Trustpilot" width={120} height={30} />
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;

