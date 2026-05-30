import Navbar from "@/components/Navbar";
import Transport from "@/components/Transport";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";

export default function TransportPage() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <main className="relative bg-[#020817] text-white">
        <Navbar />
        <Transport />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </>
  );
}
