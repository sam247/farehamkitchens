import AnimatedSection from "../ui/AnimatedSection";

const ranges = [
  {
    title: "Modern",
    description: "Clean lines, handleless options, and seamless storage tailored to contemporary living.",
  },
  {
    title: "Shaker",
    description: "Timeless framed cabinetry with refined detailing and premium painted finishes.",
  },
  {
    title: "Traditional",
    description: "Classic proportion, warm materials, and artisan touches for heritage-inspired spaces.",
  },
];

const KitchenRanges = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12">
          <AnimatedSection>
            <span className="label-uppercase text-primary mb-4 block">Kitchen Ranges</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-large text-foreground">
              Crafted for the way{" "}
              <span className="text-primary">you live</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ranges.map((range, index) => (
            <AnimatedSection
              key={range.title}
              delay={0.1 * (index + 1)}
              className="p-8 bg-background border border-border hover:border-primary transition-colors duration-500"
            >
              <h3 className="heading-medium text-foreground mb-3">{range.title}</h3>
              <p className="body-elegant text-muted-foreground">{range.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenRanges;

