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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left: Text Content */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
              >
                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Fatima&apos;s passion for travel began at the age of 16 and grew into a lifelong journey of exploration. With over 15 years of experience, she has traveled extensively across Pakistan, discovering iconic destinations such as Swat, Kalam, Malam Jabba, Fairy Meadows, Hunza, Skardu, Deosai, and the stunning valleys of Kashmir.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  What makes Fatima&apos;s story truly remarkable is her journey as both a traveler and a mother. As a solo female traveler, she continued exploring Pakistan&apos;s remote valleys, mountains, and challenging terrains while raising her children and often taking them along on her adventures. By successfully balancing family life with her love for travel, she has broken stereotypes and become an inspiration for women and families who aspire to explore Pakistan with confidence and freedom.
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

              {/* Right: Gallery */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  {
                    src: "/images/solofemale.mp4",
                    alt: "Solo female travel journey",
                    title: "Travel Journey",
                    type: "video"
                  },
                  {
                    src: "/images/solofemale (2).mp4",
                    alt: "Solo female adventure",
                    title: "Adventure Stories",
                    type: "video"
                  },
                  {
                    src: "/images/solofemale (3).mp4",
                    alt: "Solo female exploration",
                    title: "Exploration",
                    type: "video"
                  },
                  {
                    src: "/images/solo9.mp4",
                    alt: "Solo memories video",
                    title: "Travel Memories",
                    type: "video"
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
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    className="group relative w-full overflow-hidden rounded-2xl cursor-pointer bg-white/5"
                    style={{ aspectRatio: '4/3' }}
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
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ objectFit: 'cover' }}
                        autoPlay
                        controls
                        muted
                        loop
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-white font-semibold text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
