"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { User, ArrowRight, Home, Car, Users, Heart, Compass, X } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Safe Accommodation",
    description: "Carefully selected hotels and guesthouses with verified safety standards for female travellers.",
    color: "#10B981",
  },
  {
    icon: Car,
    title: "Private Transport",
    description: "Reliable private vehicles with trusted drivers for comfortable and secure travel throughout Pakistan.",
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "Local Support",
    description: "24/7 support from our local team who understand the needs of solo female travellers.",
    color: "#3B82F6",
  },
  {
    icon: Heart,
    title: "Cultural Guidance",
    description: "Respectful cultural advice and dress code guidance to help you feel comfortable everywhere.",
    color: "#EC4899",
  },
  {
    icon: Compass,
    title: "Customized Experiences",
    description: "Personalized itineraries tailored to your interests, comfort level, and travel style.",
    color: "#8B5CF6",
  },
];

export default function SoloFemaleTravelPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <main className="relative bg-[#020817] text-white">
        {/* Hero */}
        <section className="relative min-h-[35vh] flex items-center overflow-hidden pt-24">
                  <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
              alt="Mountain landscape"
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
              <br/>
              <br/>
              <br/>
              <br/>
              
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/15 mb-6"
              >
                <User className="w-4 h-4 text-[#EC4899]" />
                <span className="text-xs font-medium text-white/80 tracking-wide">
                  Solo Female Travel
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-4xl font-bold text-white leading-[1.0] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Solo Female Travel{" "}
                <span className="text-gold-gradient">In Pakistan</span>
              </motion.h1>

              
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative pt-0 pb-20 -mt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              
              viewport={viewportConfig}
            >
              <motion.p
                variants={fadeUp}
                className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                I was born in Skardu, nestled among the majestic Karakoram Mountains, and grew up exploring landscapes that most people only dream of seeing.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                For more than 12 years, I have had the privilege of guiding travellers from around the world through Pakistan's most breathtaking destinations.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                As a female guide, I understand the concerns many women have when travelling to a new country.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="p-8 rounded-3xl border-l-4 border-[#EC4899] bg-[#EC4899]/5 my-8"
              >
               
                <p className="text-sm text-white/40 mt-4 font-light" style={{ fontFamily: "var(--font-inter)" }}>
                  — Fatima Ali, Founder & Guide
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-12"
            >
              
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  src: "/images/solo9.mp4",
                  alt: "Solo memories video",
                  title: "Travel Memories",
                  type: "video"
                },
                {
                  src: "/images/solo5.png",
                  alt: "Solo trekking",
                  title: "Solo Trekking",
                  type: "image"
                },
                {
                  src: "/images/solo1.jpeg",
                  alt: "Solo female traveler",
                  title: "Solo Adventure",
                  type: "image"
                },
                {
                  src: "/images/solo2.jpeg",
                  alt: "Solo travel experience",
                  title: "Travel Experience",
                  type: "image"
                },
                {
                  src: "/images/solo3.jpg",
                  alt: "Solo journey",
                  title: "Solo Journey",
                  type: "image"
                },
                {
                  src: "/images/solo4.png",
                  alt: "Solo exploration",
                  title: "Solo Exploration",
                  type: "image"
                },
                {
                  src: "/images/solo6.png",
                  alt: "Solo mountain adventure",
                  title: "Mountain Adventure",
                  type: "image"
                },
                {
                  src: "/images/solo15.png",
                  alt: "Solo valley view",
                  title: "Valley Views",
                  type: "image"
                },
                {
                  src: "/images/solo10.mp4",
                  alt: "Solo travel video",
                  title: "Travel Moments",
                  type: "video"
                },
                {
                  src: "/images/solo11.mp4",
                  alt: "Solo adventure video",
                  title: "Adventure Highlights",
                  type: "video"
                },
                {
                  src: "/images/solo134.mp4",
                  alt: "Solo experience video",
                  title: "Experience Video",
                  type: "video"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                  onClick={() => item.type === "video" && setSelectedVideo(item.src)}
                >
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      autoPlay
                      controls
                      muted
                      loop
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-poppins)" }}>
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Travel With A Female Local Guide */}
        <section className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="text-center mb-12"
            >
             
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
             
              
              <motion.div variants={fadeUp}>
               
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src={selectedVideo}
              className="w-full rounded-2xl"
              autoPlay
              controls
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
}
