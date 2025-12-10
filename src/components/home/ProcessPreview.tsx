import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a detailed conversation about your vision, lifestyle, and aspirations for your dream kitchen.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our designers create bespoke 3D visualisations, bringing your kitchen to life before a single piece is crafted.',
  },
  {
    number: '03',
    title: 'Craftsmanship',
    description: 'Every element is meticulously handcrafted by our skilled artisans using only the finest materials.',
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Our expert team ensures a seamless installation, with attention to every detail until perfection is achieved.',
  },
];

const ProcessPreview = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <AnimatedSection>
            <span className="label-uppercase text-foreground/60 mb-6 block">Our Process</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-large text-foreground mb-6">
              From Vision to<br />
              <span className="text-foreground/80">Reality</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground">
              Every Fareham Kitchen follows a meticulous journey—turning your ideas into bespoke Shaker or handleless kitchens with smart storage, granite or quartz worktops, and premium appliances installed by our Hampshire fitters.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {steps.map((step, index) => (
            <AnimatedSection
              key={step.number}
              delay={0.1 * (index + 1)}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border" />
              )}
              
              {/* Step Number */}
              <span className="heading-display text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500">
                {step.number}
              </span>
              
              {/* Content */}
              <div className="mt-4">
                <h3 className="heading-medium text-foreground mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="body-elegant text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-foreground transition-all duration-500 group-hover:w-full" />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.6} className="text-center lg:text-left">
          <Link
            href="/process"
            className="inline-flex items-center gap-3 label-uppercase text-foreground group"
          >
            <span className="link-elegant">Explore Our Process</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProcessPreview;
