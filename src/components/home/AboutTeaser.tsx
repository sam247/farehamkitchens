/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "../ui/AnimatedSection";
import ParallaxImage from "../ui/ParallaxImage";

const AboutTeaser = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <AnimatedSection animation="fade-in-left" className="order-2 lg:order-1">
            <div className="relative">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop"
                alt="Kitchen craftsmanship"
                className="aspect-[4/5] w-full"
              />
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-foreground/20 -z-10" />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 bg-foreground text-background p-8">
                <span className="heading-medium block">25+</span>
                <span className="label-uppercase text-xs">Years Experience</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <AnimatedSection delay={0.2}>
              <span className="label-uppercase text-foreground/60 mb-6 block">About Us</span>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <h2 className="heading-large text-foreground mb-8">
                A Legacy of<br />
                <span className="text-foreground/80">Exceptional Design</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <p className="body-elegant text-muted-foreground mb-6 leading-relaxed">
                For over two decades, Fareham Kitchens has been crafting bespoke kitchens 
                that transform the way families live. Our dedication to excellence, 
                attention to detail, and passion for innovative design has established 
                us as Hampshire&apos;s premier kitchen design studio.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <p className="body-elegant text-muted-foreground mb-10 leading-relaxed">
                Every kitchen we create is a unique expression of our clients&apos; lifestyle, 
                meticulously designed and handcrafted to the highest standards of quality 
                and craftsmanship.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 label-uppercase text-foreground group"
              >
                <span className="link-elegant">Our Story</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
