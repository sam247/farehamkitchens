import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { Star } from "lucide-react";

const badges = [
  {
    label: "Trustpilot",
    score: "5.0",
    href: "https://uk.trustpilot.com/review/aokitchens.co.uk",
    logo: "/trustpilot-white.webp",
  },
  {
    label: "Google Reviews",
    score: "5.0",
    href: "https://www.google.com/search?q=Andrew+Osborne+Kitchens+reviews",
    logo: "/google_reviews_logo.png",
  },
];

const testimonials = [
  { quote: "The design team transformed our space and managed the fit seamlessly.", name: "Client, Hampshire" },
  { quote: "Brilliant handleless kitchen with quartz worktops—on time and on budget.", name: "Homeowner, Fareham" },
  { quote: "Great communication, premium appliances, and superb install quality.", name: "Customer, Southampton" },
  { quote: "Shaker kitchen looks incredible—craftsmanship and attention to detail.", name: "Family, Botley" },
  { quote: "Professional fitters, tidy workmanship, and clear pricing throughout.", name: "Client, Totton" },
  { quote: "Showroom visit was invaluable—team helped us choose the right finishes.", name: "Visitor, West Wellow" },
];

const TrustSignals = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <AnimatedSection className="text-center mb-12 space-y-4">
          <span className="label-uppercase text-primary mb-4 block">Trust & Reputation</span>
          <h2 className="heading-large text-foreground">Loved by homeowners</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {badges.map((item, index) => (
            <AnimatedSection
              key={item.label}
              delay={0.05 * (index + 1)}
              className="p-4 bg-background border border-border flex items-center justify-between gap-4 hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <Image src={item.logo} alt={item.label} width={110} height={28} />
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="label-uppercase text-xs text-foreground/80 hover:text-primary transition-colors"
              >
                View
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.1}>
          <div className="relative p-6 bg-background border border-border">
            <p className="body-elegant text-foreground leading-relaxed mb-4 min-h-[96px]">
              “{testimonials[active].quote}”
            </p>
            <p className="label-uppercase text-xs text-muted-foreground">{testimonials[active].name}</p>
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 w-6 transition-all duration-300 ${active === i ? "bg-primary" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustSignals;

