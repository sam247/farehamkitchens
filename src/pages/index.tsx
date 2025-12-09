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
import KitchenRanges from "@/components/home/KitchenRanges";
import ShowroomInvite from "@/components/home/ShowroomInvite";
import OfferBanner from "@/components/home/OfferBanner";
import TrustSignals from "@/components/home/TrustSignals";

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
        <OfferBanner />
        <KitchenRanges />
        <AboutTeaser />
        <FeaturedProjects />
        <VideoSection />
        <ProcessPreview />
        <TrustSignals />
        <ShowroomInvite />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
