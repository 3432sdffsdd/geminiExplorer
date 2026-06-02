"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const videos = [
  "/images/sli1.mp4",
  "/images/sli2.mp4",
  "/images/sli3.mp4",
  "/images/sli4.mp4",
  "/images/sli5.mp4",
  "/images/sli6.mp4",
  "/images/sli7.mp4",
  "/images/sli8.mp4",
  "/images/sli9.mp4",
  "/images/sli10.mp4",
];

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    // Randomly select a video
    const randomIndex = Math.floor(Math.random() * videos.length);
    setSelectedVideo(videos[randomIndex]);

    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-10 right-0 z-10 flex items-center gap-2 text-white hover:text-[#F59E0B] transition-colors group"
            >
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Close
              </span>
              <X className="w-6 h-6" />
            </button>

            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#F59E0B]/20 border border-[#F59E0B]/30 bg-[#020817]">
              <video
                src={selectedVideo}
                className="w-full aspect-video"
                autoPlay
                muted
                loop
                playsInline
                controls
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                    Welcome to Pakistan
                  </h2>
                  <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    Discover the beauty of our land
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Skip Button */}
            <button
              onClick={handleClose}
              className="absolute -bottom-10 right-0 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm hover:bg-white/20 transition-all"
            >
              Skip
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
