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
                  Fatima&apos;s connection with travel started at a young age. At just 16, she began exploring Pakistan, guided by a strong love for nature, adventure, and discovering places beyond the usual routes. What started as passion slowly became a lifelong journey.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  With more than 15 years of travel experience, Fatima has explored Pakistan extensively. From the mountains of Swat, Kalam, Malam Jabba, Fairy Meadows, Hunza, Skardu, and Deosai, to the valleys of Kashmir including Ratti Gali, Taobat, Baboon Valley, and Kutora Lake, her footsteps cover some of the most breathtaking landscapes in the country. Her travels also extend to southern and central Pakistan, including Gorakh Hill, Kund Malir, Ormara Beach, Quetta, Ziarat, Uch Sharif, Dadu, and major cities such as Lahore, Multan, Faisalabad, and Islamabad.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  In 2019, Fatima stepped into tour planning on a professional level. Over time, she began leading tours on her own, handling groups of all sizes, from small circles to gatherings of over 250 people. She continued this work before and after marriage with the same focus, responsibility, and commitment.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  One of the most inspiring parts of Fatima&apos;s journey is how she balanced travel with motherhood. Even with two very young children, she never stepped back. She successfully managed full tours in harsh and sub-zero weather. Her children joined her on their first trips when they were barely toddlers, growing up surrounded by mountains, trails, and open skies.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Alhamdulillah, Fatima stands among the few women in Pakistan who continued leading travel journeys while raising young children. Today, her children actively hike and trek with her, reflecting the values she has passed on through her lifestyle.
                </motion.p>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-white/60 leading-relaxed mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  For Fatima, travel is not just about reaching destinations. It is about building strength, confidence, and a deep respect for nature. Her journey reflects love for Pakistan, resilience in the face of challenges, and a desire to raise her children with meaningful, adventurous experiences.
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
