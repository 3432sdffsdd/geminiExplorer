"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { FileText, ArrowRight, Globe, FileCheck, Camera, Clock, AlertCircle, CheckCircle } from "lucide-react";

const visaSteps = [
  { step: "1", title: "Apply Online", description: "Visit the official Pakistan visa portal and complete the online application form." },
  { step: "2", title: "Upload Documents", description: "Upload your passport, photo, and supporting documents securely." },
  { step: "3", title: "Submit Application", description: "Review your application and submit it for processing." },
  { step: "4", title: "Receive Approval", description: "Wait for your visa approval notification via email." },
  { step: "5", title: "Travel to Pakistan", description: "Print your visa and start your Pakistan adventure!" },
];

const requiredDocuments = [
  { icon: Globe, title: "Passport", description: "Valid passport with at least 6 months validity remaining." },
  { icon: Camera, title: "Photo", description: "Recent passport-sized photograph with white background." },
  { icon: FileCheck, title: "Travel Itinerary", description: "Details of your travel plans and destinations in Pakistan." },
  { icon: FileText, title: "Accommodation Information", description: "Hotel bookings or accommodation details for your stay." },
];

const travelTips = [
  { icon: Clock, title: "Apply Early", description: "Start your visa application at least 4-6 weeks before your travel date." },
  { icon: Globe, title: "Check Embassy Requirements", description: "Verify specific requirements with the nearest Pakistan embassy or consulate." },
  { icon: AlertCircle, title: "Verify Latest Regulations", description: "Check for the latest visa policies and travel regulations before applying." },
];

export default function VisaInformationPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#020817] text-white">
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
              alt="Travel landscape"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/80 via-[#020817]/70 to-[#020817]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-3xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/15 mb-6"
              >
                <FileText className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-xs font-medium text-white/80 tracking-wide">
                  Visa Information
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.0] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Pakistan{" "}
                <span className="text-gold-gradient">Visa</span>{" "}
                Information
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/55 max-w-xl leading-relaxed font-light"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Learn about Pakistan's visa process, required documents, and travel preparation tips.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Visa Process */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Visa{" "}
                <span className="text-gold-gradient">Process</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            >
              {visaSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="relative p-6 rounded-3xl border border-white/10 bg-white/[0.03] text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-[#F59E0B]/5 border border-[#F59E0B]/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-[#F59E0B]">{item.step}</span>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 font-light" style={{ fontFamily: "var(--font-inter)" }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
<br/><br/><br/><br/>
        {/* Required Documents */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Required{" "}
                <span className="text-gold-gradient">Documents</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {requiredDocuments.map((doc, idx) => {
                const Icon = doc.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] text-center"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-4 text-[#F59E0B]" />
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {doc.title}
                    </h3>
                    <p className="text-sm text-white/50 font-light" style={{ fontFamily: "var(--font-inter)" }}>
                      {doc.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
<br/><br/><br/><br/>

        {/* Travel Tips */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-12"
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Travel{" "}
                <span className="text-gold-gradient">Tips</span>
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {travelTips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]"
                  >
                    <Icon className="w-8 h-8 text-[#F59E0B] mb-4" />
                    <h3
                      className="text-lg font-bold text-white mb-2"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {tip.title}
                    </h3>
                    <p className="text-sm text-white/50 font-light" style={{ fontFamily: "var(--font-inter)" }}>
                      {tip.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <br/><br/><br/><br/>

                Need Help Planning{" "}
                <span className="text-gold-gradient">Your Trip?</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-base text-white/50 mb-8 font-light whitespace-nowrap"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Our team is here to assist you with visa guidance and travel planning. Get in touch with us today.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base text-[#020817] bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] hover:scale-105 transition-all duration-300"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
