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
        <title>Fareham Kitchen Showroom | Bespoke Kitchens & Design Studio</title>
        <meta
          name="description"
          content="Bespoke designer kitchens in Fareham. Handleless and Shaker kitchens, granite and quartz worktops, full design and installation from our showroom."
        />
        <link rel="canonical" href="https://farehamkitchens.co.uk/" />
        <meta property="og:title" content="Fareham Kitchen Showroom | Bespoke Kitchens & Design Studio" />
        <meta property="og:description" content="Bespoke designer kitchens in Fareham. Handleless and Shaker kitchens, granite and quartz worktops, full design and installation from our showroom." />
        <meta property="og:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
        <meta property="og:url" content="https://farehamkitchens.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Fareham Kitchens" />
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fareham Kitchen Showroom | Bespoke Kitchens & Design Studio" />
        <meta name="twitter:description" content="Bespoke designer kitchens in Fareham. Handleless and Shaker kitchens, granite and quartz worktops, full design and installation from our showroom." />
        <meta name="twitter:image" content="https://farehamkitchens.co.uk/aok/AOK-showroom.jpg.webp" />
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
