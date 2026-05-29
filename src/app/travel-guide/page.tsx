"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { Compass, FileCheck, Calendar, MapPin, Shirt, Camera, Hand, Footprints, Wifi, Smartphone } from "lucide-react";

const beforeYouTravel = [
  { icon: FileCheck, title: "Travel Insurance", description: "Get comprehensive travel insurance before your trip." },
  { icon: FileCheck, title: "Copies of Documents", description: "Keep digital and physical copies of your passport and visa." },
  { icon: FileCheck, title: "Currency Exchange", description: "Exchange currency at authorized dealers or ATMs." },
  { icon: Smartphone, title: "SIM Cards", description: "Purchase local SIM cards for connectivity during your stay." },
];

const seasons = [
  { name: "Spring", months: "March to May", description: "Pleasant weather with blooming flowers, ideal for sightseeing." },
  { name: "Summer", months: "June to August", description: "Best time for northern areas and mountain trekking." },
  { name: "Autumn", months: "September to November", description: "Clear skies and stunning fall colors in Hunza Valley." },
  { name: "Winter", months: "December to February", description: "Snow-covered landscapes and winter sports in northern regions." },
];

const destinations = [
  "Skardu",
  "Hunza",
  "Fairy Meadows",
  "Deosai",
  "Naran Kaghan",
  "Swat",
  "Lahore",
  "Islamabad",
  "Kashmir",
];

const culturalTips = [
  { icon: Shirt, title: "Dress Respectfully", description: "Wear modest clothing, especially in rural areas and religious sites." },
  { icon: Camera, title: "Ask Before Photographing", description: "Always ask permission before taking photos of people." },
  { icon: Hand, title: "Respect Local Customs", description: "Be mindful of local traditions and religious practices." },
  { icon: Footprints, title: "Remove Shoes", description: "Remove shoes when entering mosques and some homes." },
];

export default function TravelGuidePage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[#020817] text-white">
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
              alt="Mountain landscape"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/90 via-[#020817]/80 to-[#020817]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/15 mb-8"
              >
                <Compass className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-xs font-medium text-white/80 tracking-wide">
                  Travel Guide
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-3xl lg:text-4xl font-bold text-white leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <br/><br/>
                <span className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] bg-clip-text text-transparent">Travel Guide For</span>{" "}
                <span className="text-gold-gradient">Foreign Visitors</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
className="text-lg text-white/60 leading-relaxed font-light mb-8"              >
                Essential information about culture, currency, connectivity, transportation, and travel planning for your journey through Pakistan.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Before You Travel */}
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
                Before You{" "}
                <span className="text-gold-gradient">Travel</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/50 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Prepare for your journey with these essential pre-travel requirements
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {beforeYouTravel.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] text-center hover:border-[#F59E0B]/30 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#F59E0B]" />
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
<br/><br/><br/><br/>
        {/* Best Time To Visit */}
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
                Best Time To{" "}
                <span className="text-gold-gradient">Visit</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/50 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Plan your trip according to Pakistan's diverse seasons
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {seasons.map((season, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#F59E0B]/30 hover:bg-white/[0.05] transition-all duration-300"
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                    <Calendar className="w-8 h-8 text-[#F59E0B]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {season.name}
                  </h3>
                  <p className="text-sm text-[#F59E0B] mb-4 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                    {season.months}
                  </p>
                  <p className="text-sm text-white/50 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                    {season.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
<br/><br/><br/><br/>

        {/* Popular Destinations */}
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
                Popular{" "}
                <span className="text-gold-gradient">Destinations</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/50 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Explore Pakistan's most breathtaking locations
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="flex flex-wrap justify-center gap-4"
            >
              {destinations.map((dest, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/10 transition-all duration-300 cursor-pointer"
                >
                  <MapPin className="w-5 h-5 text-[#F59E0B] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base text-white/70 font-medium group-hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-inter)" }}>
                    {dest}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
<br/><br/><br/><br/>

        {/* Cultural Tips */}
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
                Cultural{" "}
                <span className="text-gold-gradient">Tips</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/50 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Respect local customs and traditions for a meaningful experience
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {culturalTips.map((tip, idx) => {
                const Icon = tip.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="group p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#F59E0B]/30 hover:bg-white/[0.05] transition-all duration-300"
                  >
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-[#F59E0B]" />
                    </div>
                    <h3
                      className="text-lg font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-poppins)" }}
                    >
                      {tip.title}
                    </h3>
                    <p className="text-sm text-white/50 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                      {tip.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
<br/><br/><br/><br/>

        {/* Currency & Connectivity */}
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
                Currency &{" "}
                <span className="text-gold-gradient">Connectivity</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-white/50 max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Stay connected and manage your finances while traveling
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={fadeUp}
                className="group p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#F59E0B]/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                  <Wifi className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Currency Information
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  The official currency of Pakistan is the Pakistani Rupee (PKR). ATMs are available in major cities, and currency exchange services can be found at airports and in city centers.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="group p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#F59E0B]/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-16 h-16 mb-6 rounded-2xl bg-[#F59E0B]/10 flex items-center justify-center group-hover:bg-[#F59E0B]/20 transition-colors duration-300">
                  <Smartphone className="w-8 h-8 text-[#F59E0B]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-4"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Connectivity
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  Local SIM cards are readily available for tourists. Internet is available in most cities and tourist destinations, though connectivity may be limited in remote mountain areas.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
