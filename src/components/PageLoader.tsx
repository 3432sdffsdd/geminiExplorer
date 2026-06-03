"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mountain } from "lucide-react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-[#020817] flex flex-col items-center justify-center"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4 mb-8"
          >
            <img src="/logo.png" alt="Gemini Explorer Logo" className="w-40 h-40 object-contain" />
            <div className="text-center">
              <div
                className="text-2xl font-black text-white tracking-tight"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                GEMINI EXPLORER
              </div>
              <div
                className="text-xs text-[#F59E0B] tracking-[0.3em] uppercase mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Dream, Discover & Explore
              </div>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 text-xs text-white/30 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Where Heaven Meets Earth
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
