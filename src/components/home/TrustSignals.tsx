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
  { quote: "We are absolutely delighted with the kitchen the design for which we developed with Matt’s great patience over a long period of time. The result has given us the perfect layout for our needs. Matt took great care to inform us of progress and the process of installation.", name: "Adrian Hannen" },
  { quote: "We are very happy with our new kitchen! The design is stunning, with colours in perfect harmony, pleasing shapes, and ingenious ideas. The attention to detail really stands out. From the moment we visited Matt’s showroom, it was clear he has exceptional talent, and the final result truly lived up to our expectations.", name: "Antoine Marcade" },
  { quote: "I cannot praise Matt and his team enough for creating my dream kitchen. From my first visit to completion nothing was too much trouble. Everything was scheduled like clockwork. Pete the fitter and Steve the electrician were Matt’s recommended installation team and they were fantastic, the workmanship was second to none.", name: "Nicki Coxall" },
  { quote: "Brilliant from start to finish. Matt worked through my wish list and found solutions to fit my budget. The fitter Pete, and electrician Steve both worked well together, and created a beautiful kitchen. It was finished off with Grace's decorating and I couldn't be happier with the result.", name: "Deborah Reilly" },
  { quote: "Our recent kitchen refurb was a fantastic experience from start to finish with Andrew Osborne Kitchens. The design was perfect for our new layout and the whole scheme was planned and managed really well by Matt and his team of highly experienced professionals.", name: "Stephen Joyce" },
  { quote: "Amazing kitchen and fabulous experience from Matt. AOK created a bespoke kitchen for us which was expertly installed by Pete. All the way through the process Matt was in touch helping us with everything from unit design, kitchen surface materials and a few changes in schedule caused by our build plan.", name: "Jon Grubb" },
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

