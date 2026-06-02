"use client";

import { motion } from "framer-motion";
import { Shield, User, Compass, FileText, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import Link from "next/link";

const cards = [
  {
    icon: Shield,
    title: "Is Pakistan Safe To Travel?",
    description:
      "Discover why thousands of travellers visit Pakistan every year and explore the country's most breathtaking destinations safely and confidently.",
    link: "/is-pakistan-safe",
    color: "#10B981",
  },
  {
    icon: User,
    title: "Solo Female Travel",
    description:
      "Travel with confidence and local support while exploring Pakistan's mountains, valleys, culture, and hospitality.",
    link: "/solo-female-travel",
    color: "#EC4899",
  },
  {
    icon: Compass,
    title: "Travel Guide For Foreign Visitors",
    description:
      "Essential information about culture, currency, connectivity, transportation, and travel planning.",
    link: "/travel-guide",
    color: "#F59E0B",
  },
  {
    icon: FileText,
    title: "Visa Info",
    description:
      "Learn about Pakistan's visa process, required documents, and travel preparation tips.",
    link: "/visa-information",
    color: "#3B82F6",
  },
];

export default function PakistanWaiting() {
  return (
    <section className="relative py-28 bg-[#020817] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#10B981]/4 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#F59E0B]/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-4 tracking-tight"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pakistan is <span className="text-[#10B981]">Waiting</span> for You
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/70 font-light"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Pakistan is <span className="text-[#F59E0B] font-semibold">Safer</span> than you think
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${card.color}15, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: card.color }} />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="text-sm text-white/50 leading-relaxed mb-6 font-light"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {card.description}
                  </p>

                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold group/link transition-colors duration-300"
                    style={{ color: card.color }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
