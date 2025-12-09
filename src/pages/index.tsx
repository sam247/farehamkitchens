import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import VideoSection from "@/components/home/VideoSection";
import ProcessPreview from "@/components/home/ProcessPreview";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Head>
        <title>Fareham Kitchens | Bespoke Luxury Kitchens in Hampshire</title>
        <meta
          name="description"
          content="Bespoke luxury kitchens crafted with timeless design, artisanal craftsmanship, and meticulous attention to detail by Fareham Kitchens."
        />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <AboutTeaser />
        <FeaturedProjects />
        <VideoSection />
        <ProcessPreview />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
