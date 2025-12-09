import AnimatedSection from '../ui/AnimatedSection';

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection>
            <span className="label-uppercase text-foreground/60 mb-6 block">Experience</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-large text-foreground mb-6">
              The Art of<br />
              <span className="text-foreground/80">Kitchen Making</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground">
              Step inside our world of bespoke craftsmanship, where every detail 
              is considered and every kitchen tells a unique story.
            </p>
          </AnimatedSection>
        </div>

        {/* Video Container */}
        <AnimatedSection delay={0.3}>
          <div className="relative aspect-video bg-secondary overflow-hidden group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/DQAUbbnnzOI?rel=0&modestbranding=1&controls=0&showinfo=0"
              title="The Art of Kitchen Making"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background/60 pointer-events-none" />
            <div className="absolute bottom-6 left-6">
              <span className="label-uppercase text-foreground/80 text-xs">
                The Art of Kitchen Making
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
