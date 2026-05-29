"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Camera, X, Play } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const galleryImages = [
  { src: "/images/pakistan.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/pakistan2.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/pakistan4.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/pakistan5.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/pakistan7.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/pakistan9.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/v1.mp4", alt: "Pakistan video", tall: true, type: "video" },
  { src: "/images/g7.jpeg", alt: "Pakistan valley", tall: false, type: "image" },
  { src: "/images/g8.jpeg", alt: "Valley scene", tall: true, type: "image" },
  { src: "/images/g10.jpeg", alt: "Pakistan landscape", tall: false, type: "image" },
  { src: "/images/g11.jpeg", alt: "Cultural scene", tall: true, type: "image" },
  { src: "/images/g12.jpeg", alt: "Beautiful views", tall: false, type: "image" },
  { src: "/images/g44.JPG", alt: "Pakistan scenery", tall: true, type: "image" },
  { src: "/images/localgroup1.jpeg", alt: "Local people", tall: false, type: "image" },
  { src: "/images/localgroup2.jpeg", alt: "Local group", tall: true, type: "image" },
  { src: "/images/localgroup3.jpeg", alt: "Local gathering", tall: false, type: "image" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Hunza mountains", tall: true, type: "image" },
  { src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", alt: "Snow peaks", tall: false, type: "image" },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80", alt: "Starry mountain night", tall: true, type: "image" },
  { src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80", alt: "Mountain lake", tall: false, type: "image" },
  { src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=600&q=80", alt: "Lake reflection", tall: true, type: "image" },
];

export default function Gallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Stop video when modal closes
  useEffect(() => {
    if (!selectedVideo && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [selectedVideo]);

  return (
    <section id="gallery" className="relative py-28 bg-[#0A0F1E] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-left mb-16"
        >
          <br/><br/>
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Visual Journey
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 tracking-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pakistan Through{" "}
            <span className="text-gold-gradient">Our Lens</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-white/45 max-w-xl mx-auto font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Dream, Discover & Explore
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              onClick={() => img.type === "video" && setSelectedVideo(img.src)}
            >
              <div className={`relative w-full ${img.tall ? "h-72 md:h-80" : "h-44 md:h-52"}`}>
                {img.type === "video" ? (
                  <video
                    src={img.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#020817]/0 group-hover:bg-[#020817]/40 transition-all duration-400 flex items-center justify-center">
                  {img.type === "video" ? (
                    <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                  ) : (
                    <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4" style={{ fontFamily: "var(--font-inter)" }}>
            Follow our journey on Instagram
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/15 text-white font-medium text-sm hover:border-[#F59E0B]/40 hover:text-[#F59E0B] transition-all duration-300"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <span>@DiscoverPakistan</span>
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
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
                ref={videoRef}
                src={selectedVideo}
                className="w-full rounded-2xl"
                autoPlay
                controls
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
