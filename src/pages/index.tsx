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
        <title>Fareham Kitchen Showroom | Bespoke Luxury Kitchens in Hampshire</title>
        <meta
          name="description"
          content="Fareham kitchen showroom crafting bespoke luxury kitchens in Hampshire. Handleless and Shaker kitchens, granite worktops, and full design-to-installation by expert kitchen fitters."
        />
        <meta property="og:title" content="Fareham Kitchen Showroom | Bespoke Luxury Kitchens in Hampshire" />
        <meta property="og:description" content="Fareham kitchen showroom crafting bespoke luxury kitchens in Hampshire. Handleless and Shaker kitchens, granite worktops, and full design-to-installation by expert kitchen fitters." />
        <meta property="og:image" content="https://www.farehamkitchens.co.uk/logo.webp" />
        <meta property="og:url" content="https://www.farehamkitchens.co.uk/" />
        <meta property="og:type" content="website" />
      </Head>
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <OfferBanner />
        <KitchenRanges />
        <AboutTeaser />
        <FeaturedProjects />
        <TrustSignals />
        <VideoSection />
        <ProcessPreview />
        <ShowroomInvite />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
