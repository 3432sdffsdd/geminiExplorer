import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyVisit from "@/components/WhyVisit";
import TrustSection from "@/components/TrustSection";
import TourPackages from "@/components/TourPackages";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AboutOwner from "@/components/AboutOwner";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";
import WelcomePopup from "@/components/WelcomePopup";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <WelcomePopup />
      <main className="relative bg-[#020817] text-white">
        <Navbar />
        <Hero />
        <TrustSection />
        <TourPackages />
        <WhyVisit />
        <Experiences />
        <Gallery />
        <Testimonials />
        <AboutOwner />
        <FinalCTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
