"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Heart, Globe } from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, viewportConfig } from "@/lib/animations";

const achievements = [
  { icon: Globe, value: "15+", label: "Years Experience", color: "#F59E0B" },
  { icon: Star, value: "4.9★", label: "Average Rating", color: "#10B981" },
  { icon: Heart, value: "500+", label: "Tours Completed", color: "#EC4899" },
  { icon: Award, value: "50+", label: "Countries Served", color: "#3B82F6" },
];

export default function AboutOwner() {
  return (
    <section id="about" className="relative py-28 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#10B981]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden h-[500px]">
              <Image
                src="/images/fatima1.JPG"
                alt="Your Local Travel Partner"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/60 to-transparent" />
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 grid grid-cols-2 gap-3">
              {achievements.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="px-4 py-3 rounded-2xl glass-dark border border-white/10 text-center shadow-xl"
                >
                  <Icon className="w-4 h-4 mx-auto mb-1" style={{ color }} />
                  <div
                    className="text-xl font-black"
                    style={{ color, fontFamily: "var(--font-poppins)" }}
                  >
                    {value}
                  </div>
                  <div className="text-white/50 text-[10px]" style={{ fontFamily: "var(--font-inter)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="pt-8 lg:pt-0"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-[0.2em] uppercase text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fatima Ali
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-2 tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Meet Your Local
            </motion.h2>
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold text-gold-gradient leading-tight mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Travel Partner
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base text-white/55 leading-relaxed mb-5 font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Fatima&apos;s connection with travel started at a young age. At just 16, she began exploring Pakistan, guided by a strong love for nature, adventure, and discovering places beyond the usual routes. What started as passion slowly became a lifelong journey.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-base text-white/55 leading-relaxed mb-8 font-light"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              With more than 15 years of travel experience, Fatima has explored Pakistan extensively. From the mountains of Swat, Kalam, Malam Jabba, Fairy Meadows, Hunza, Skardu, and Deosai, to the valleys of Kashmir including Ratti Gali, Taobat, Baboon Valley, and Kutora Lake, her footsteps cover some of the most breathtaking landscapes in the country.
            </motion.p>

            {/* Signature quote */}
            <motion.div
              variants={fadeUp}
              className="p-6 rounded-2xl border-l-4 border-[#F59E0B] bg-[#F59E0B]/5 mb-8"
            >
              <p className="text-white/80 italic text-base" style={{ fontFamily: "var(--font-inter)" }}>
                &ldquo;Pakistan is not just a destination — it&apos;s a feeling you carry with you forever.
                Let me help you find yours.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              
             
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
