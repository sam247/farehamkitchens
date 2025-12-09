import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";
import MagneticButton from "@/components/ui/MagneticButton";

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    subtitle: 'Understanding Your Vision',
    description: 'Every great kitchen begins with a conversation. We invite you to our Fareham showroom or arrange a home visit to discuss your aspirations, lifestyle, and the unique requirements of your space.',
    details: [
      'Explore your design preferences and lifestyle needs',
      'Review our portfolio and material samples',
      'Discuss budget considerations and timeline',
      'Take initial measurements and photographs',
    ],
    image: '/aok/AV7080_Rauchblau_HS-offen_1700x1200.jpg.webp',
    duration: '1-2 hours',
  },
  {
    number: '02',
    title: 'Design Development',
    subtitle: 'Bringing Ideas to Life',
    description: 'Our talented designers transform your vision into reality through detailed 3D visualisations, material selections, and comprehensive planning that leaves nothing to chance.',
    details: [
      'Detailed 3D CAD drawings and visualisations',
      'Material and finish selections',
      'Appliance specification and integration',
      'Lighting and electrical planning',
    ],
    image: '/aok/Bali_Nussbaum_M_Querformat_1700x1200.jpg.webp',
    duration: '2-4 weeks',
  },
  {
    number: '03',
    title: 'Craftsmanship',
    subtitle: 'Where Artistry Meets Precision',
    description: 'With designs finalised, our master craftsmen begin the meticulous process of bringing your kitchen to life, using time-honoured techniques and the finest materials.',
    details: [
      'Hand-built cabinetry to exact specifications',
      'Premium material preparation and finishing',
      'Quality control at every stage',
      'Coordination with suppliers and specialists',
    ],
    image: '/aok/Top_Soft_Graphit_Querformat_1700x1200.jpg.webp',
    duration: '6-10 weeks',
  },
  {
    number: '04',
    title: 'Installation & Handover',
    subtitle: 'The Final Transformation',
    description: 'Our expert installation team brings everything together with precision and care, transforming your space into the kitchen of your dreams with minimal disruption.',
    details: [
      'Professional project management',
      'Expert fitting by our dedicated team',
      'Appliance installation and testing',
      'Comprehensive handover and aftercare',
    ],
    image: '/aok/AOK-showroom.jpg.webp',
    duration: '1-2 weeks',
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      stepsRef.current.forEach((ref, index) => {
        if (ref) {
          const { top, bottom } = ref.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Process | Fareham Kitchens</title>
        <meta
          name="description"
          content="See how Fareham Kitchens guides you from consultation and design to craftsmanship, installation, and aftercare for bespoke kitchens."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Our Process</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="From Vision" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="to Reality" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Every Fareham Kitchen is the result of a carefully considered journey,
                  where your dreams are transformed into a masterpiece of design and craftsmanship.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Progress Indicator */}
        <div className="hidden lg:block fixed left-12 top-1/2 -translate-y-1/2 z-40">
          <div className="flex flex-col items-center gap-4">
            {processSteps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => {
                  stepsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className="group flex items-center gap-4"
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-primary scale-125'
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
                <span
                  className={`label-uppercase text-xs transition-all duration-300 ${
                    activeStep === index
                      ? 'opacity-100 text-primary'
                      : 'opacity-0 group-hover:opacity-100 text-muted-foreground'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            {processSteps.map((step, index) => (
            <div
              key={step.number}
              ref={(el) => {
                stepsRef.current[index] = el;
              }}
              className="py-20 lg:py-32 border-t border-border first:border-t-0"
            >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <AnimatedSection>
                      <div className="flex items-baseline gap-6 mb-6">
                        <span className="heading-display text-primary/20">{step.number}</span>
                        <span className="label-uppercase text-primary">{step.duration}</span>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                      <h2 className="heading-large text-foreground mb-4">{step.title}</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2}>
                      <p className="heading-medium text-primary mb-8">{step.subtitle}</p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.3}>
                      <p className="body-elegant text-muted-foreground mb-8 leading-relaxed">
                        {step.description}
                      </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.4}>
                      <ul className="space-y-4">
                        {step.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-4 body-elegant text-foreground"
                          >
                            <span className="w-2 h-2 bg-primary mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>
                  </div>

                  {/* Image */}
                  <AnimatedSection
                    animation={index % 2 === 1 ? 'fade-in-left' : 'fade-in-right'}
                    delay={0.2}
                    className={index % 2 === 1 ? 'lg:order-1' : ''}
                  >
                    <div className="relative">
                      <ParallaxImage
                        src={step.image}
                        alt={step.title}
                        className="aspect-[4/5]"
                      />
                      {/* Decorative Frame */}
                      <div
                        className={`absolute -top-6 w-full h-full border border-primary/30 -z-10 ${
                          index % 2 === 1 ? '-right-6' : '-left-6'
                        }`}
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Summary */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-16">
              <h2 className="heading-large text-foreground">
                Your Journey<br />
                <span className="text-primary">Timeline</span>
              </h2>
            </AnimatedSection>

            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                {processSteps.map((step, index) => (
                  <AnimatedSection
                    key={step.number}
                    delay={0.1 * (index + 1)}
                    className="flex flex-col items-center text-center"
                  >
                    <span className="heading-medium text-primary mb-2">{step.number}</span>
                    <span className="label-uppercase text-foreground text-xs mb-1">{step.title}</span>
                    <span className="text-muted-foreground text-sm">{step.duration}</span>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-px bg-border" />
                    )}
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.6} className="text-center mt-16">
                <p className="body-elegant text-muted-foreground mb-8">
                  <strong className="text-foreground">Total estimated timeline: 10-18 weeks</strong>
                  <br />
                  Every project is unique, and timelines may vary based on complexity and specifications.
                </p>
                <MagneticButton to="/contact" variant="outline">
                  Start Your Journey
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

export default Process;
