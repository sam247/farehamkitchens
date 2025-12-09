/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ParallaxImage from "@/components/ui/ParallaxImage";
import RevealText from "@/components/ui/RevealText";

const values = [
  {
    title: 'Craftsmanship',
    description: 'Every kitchen is handcrafted by skilled artisans who take immense pride in their work, ensuring exceptional quality in every detail.',
  },
  {
    title: 'Innovation',
    description: 'We blend traditional techniques with cutting-edge design and technology to create kitchens that are both timeless and contemporary.',
  },
  {
    title: 'Sustainability',
    description: 'We source materials responsibly and craft kitchens that are built to last, reducing environmental impact through longevity.',
  },
  {
    title: 'Client Focus',
    description: 'Your vision is our priority. We listen, understand, and deliver bespoke solutions that exceed expectations.',
  },
];

const team = [
  {
    name: 'Richard Fareham',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Eleanor Hughes',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop',
  },
  {
    name: 'James Morrison',
    role: 'Master Craftsman',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>About Fareham Kitchens | Hampshire Kitchen Showroom</title>
        <meta
          name="description"
          content="About Fareham Kitchens by AOK: Hampshire kitchen showroom for bespoke luxury, Shaker and handleless kitchens, granite worktops, and full design-to-install service."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-4xl">
              <AnimatedSection>
                <span className="label-uppercase text-primary mb-6 block">Our Story</span>
              </AnimatedSection>
              <h1 className="heading-display text-foreground mb-8">
                <RevealText text="Crafting Exceptional" delay={0.2} />
                <br />
                <span className="text-primary">
                  <RevealText text="Kitchens Since 1998" delay={0.5} />
                </span>
              </h1>
              <AnimatedSection delay={0.8}>
                <p className="body-elegant text-muted-foreground text-lg max-w-2xl">
                  Every kitchen we create is made to order, balancing beauty and functionality. With over 40 years of expertise, premium materials, and state-of-the-art production, we craft kitchens that stand the test of time for homeowners, designers, and developers alike.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="pb-32">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimatedSection animation="fade-in-left">
              <ParallaxImage
                src="/aok/project2/DSC_2521-scaled.jpg"
                alt="Our workshop"
                className="aspect-[4/5]"
              />
              </AnimatedSection>

              <div>
                <AnimatedSection delay={0.2}>
                  <h2 className="heading-large text-foreground mb-8">
                    A Passion for<br />
                    <span className="text-primary">Perfection</span>
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <p className="body-elegant text-muted-foreground mb-6 leading-relaxed">
                    Our family has been in the KBB sector for over 40 years, starting with an appliance store in Woolston, Hampshire. Three generations on, we still lead with customer service and attention to detail, specializing in both German and British kitchens across modern and traditional styles.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <p className="body-elegant text-muted-foreground mb-6 leading-relaxed">
                    We build lasting relationships with homeowners, designers, and developers, delivering personalised service and meticulous craftsmanship. Glowing reviews reflect our commitment to quality, functionality, and style.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                  <p className="body-elegant text-muted-foreground leading-relaxed">
                    Visit our 2,500 sq ft showroom to explore multiple ranges and leading appliances. With expert designers and end-to-end project care led by Matt, we ensure a seamless journey from design to completion—and a kitchen that’s truly yours.
                  </p>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-20">
              <span className="label-uppercase text-primary mb-6 block">Our Values</span>
              <h2 className="heading-large text-foreground">
                What Drives<br />
                <span className="text-primary">Our Craft</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  delay={0.1 * (index + 1)}
                  className="group p-8 border border-border hover:border-primary transition-colors duration-500"
                >
                  <h3 className="heading-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="body-elegant text-muted-foreground">
                    {value.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatedSection className="text-center mb-20">
              <span className="label-uppercase text-primary mb-6 block">The Team</span>
              <h2 className="heading-large text-foreground">
                Meet the<br />
                <span className="text-primary">Artisans</span>
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <AnimatedSection
                  key={member.name}
                  delay={0.1 * (index + 1)}
                  className="group"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>
                  <h3 className="heading-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="label-uppercase text-muted-foreground text-xs mt-2">
                    {member.role}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Showroom Section */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <AnimatedSection>
                  <span className="label-uppercase text-primary mb-6 block">Visit Us</span>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                  <h2 className="heading-large text-foreground mb-8">
                    Our<br />
                    <span className="text-primary">Showroom</span>
                  </h2>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                  <p className="body-elegant text-muted-foreground mb-8 leading-relaxed">
                    Experience the quality and craftsmanship of Fareham Kitchens
                    firsthand at our beautifully appointed showroom in the heart
                    of Fareham. Browse our full range of kitchen styles, materials,
                    and finishes, and let our expert designers guide you through
                    the possibilities.
                  </p>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                  <div className="space-y-4">
                    <p className="body-elegant text-foreground">
                      <strong>Address:</strong><br />
                      123 High Street, Fareham, Hampshire, PO16 7AZ
                    </p>
                    <p className="body-elegant text-foreground">
                      <strong>Opening Hours:</strong><br />
                      Monday – Saturday: 9am – 6pm<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-in-right" delay={0.2}>
              <ParallaxImage
                src="/aok/AOK-showroom.jpg.webp"
                alt="Our showroom"
                className="aspect-square"
              />
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
