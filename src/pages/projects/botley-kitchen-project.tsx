import Head from "next/head";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import MagneticButton from "@/components/ui/MagneticButton";

const BotleyKitchenProject = () => {
  return (
    <>
      <Head>
        <title>Handleless Blue Kitchen in Botley | Fareham Kitchens</title>
        <meta
          name="description"
          content="Systemat AV6000 true handleless in a bespoke blue, bronze mirror splashback, Dekton island, AEG + Bora appliances, Quooker boiling tap, and tall cabinetry for concealed storage."
        />
        <meta property="og:title" content="Handleless Blue Kitchen in Botley | Fareham Kitchens" />
        <meta property="og:description" content="Systemat AV6000 true handleless in a bespoke blue, bronze mirror splashback, Dekton island, AEG + Bora appliances, Quooker boiling tap, and tall cabinetry for concealed storage." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/project1/Cinney-Ray-4-scaled.jpg" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/projects/botley-kitchen-project" />
        <meta property="og:type" content="article" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />

      <section className="pt-32 pb-16 lg:pt-44">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="label-uppercase text-primary mb-4 block">Case Study</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="heading-display text-foreground mb-6">
              Handleless Blue Kitchen in Botley
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground max-w-3xl">
              Systemat AV6000 true handleless in a bespoke blue, contrasted with metallic rails and a bronze mirror splashback. Floor-to-ceiling tall cabinetry hides storage, while AEG and Bora appliances elevate cooking. A Quooker boiling tap and Blanco sink add convenience, and the Dekton-topped island anchors the space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            "/aok/project1/Cinney-Ray-4-scaled.jpg",
            "/aok/project1/Cinney-Ray-scaled.jpg",
            "/aok/project1/cr7-scaled.jpg",
            "/aok/project1/cr8-scaled.jpg",
          ].map((src, index) => (
            <AnimatedSection key={src} delay={0.05 * index}>
              <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                <Image 
                  src={src} 
                  alt="Handleless Blue Kitchen, Botley" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="pb-32">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection delay={0.1} className="space-y-6">
            <div>
              <h2 className="heading-medium text-foreground mb-3">Project</h2>
              <p className="body-elegant text-muted-foreground">
                Supply of bespoke kitchen furniture, quartz worktops, kitchen accessories, and appliances.
              </p>
            </div>
            <div>
              <h2 className="heading-medium text-foreground mb-3">Service</h2>
              <p className="body-elegant text-muted-foreground">
                Design & Supply of bespoke kitchen furniture, quartz worktops, kitchen accessories, and appliances.
              </p>
            </div>
            <div>
              <h2 className="heading-medium text-foreground mb-3">Highlights</h2>
              <ul className="space-y-2 body-elegant text-muted-foreground">
                <li>Systemat AV6000 true handleless in bespoke blue</li>
                <li>Metallic rails with bronze mirror splashback</li>
                <li>AEG & Bora appliances, Quooker boiling tap, Blanco sink</li>
                <li>Dekton island worktop and full-height storage</li>
              </ul>
            </div>
            <MagneticButton to="/contact" variant="outline">
              Start Your Project
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
};

export default BotleyKitchenProject;

