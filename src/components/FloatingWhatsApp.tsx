"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-4 py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-poppins)" }}>
                    Gemini Explorer
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-white/80 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                      Typically replies instantly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat bubble */}
            <div className="bg-[#0D1B2A] p-4">
              <div className="bg-[#1A2F44] rounded-2xl rounded-tl-sm p-3 mb-4 max-w-[85%]">
                <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                  Hello! 👋 Ready to plan your Pakistan adventure? Tell us your dream destination and we&apos;ll make it happen.
                </p>
                <span className="text-white/30 text-[10px] mt-1 block" style={{ fontFamily: "var(--font-inter)" }}>
                  Today
                </span>
              </div>

              <a
                href="https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#22c55e] transition-colors"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Start Conversation
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-shadow duration-300"
        aria-label="WhatsApp Chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6 text-white fill-white" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#F59E0B] border-2 border-[#020817]" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
