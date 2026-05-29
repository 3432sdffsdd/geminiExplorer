import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyVisit from "@/components/WhyVisit";
import Destinations from "@/components/Destinations";
import TrustSection from "@/components/TrustSection";
import TourPackages from "@/components/TourPackages";
import Transport from "@/components/Transport";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import AboutOwner from "@/components/AboutOwner";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <main className="relative bg-[#020817] text-white">
        <Navbar />
        <Hero />
        <Destinations />
        <TrustSection />
        <TourPackages />
        <WhyVisit />
        <Transport />
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
