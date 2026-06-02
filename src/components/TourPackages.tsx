"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const packages = [
  {
    name: "Hunza",
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80",
  },
  {
    name: "Skardu (by road)",
    duration: "8 Days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    name: "Naran",
    duration: "3 Days",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
  },
  {
    name: "Kumrat",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
  },
  {
    name: "Chitral",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  },
  {
    name: "Fairy Meadows",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
  },
];

export default function TourPackages() {
  return (
    <section
      id="tours"
      className="relative overflow-hidden bg-[#03100f] py-24"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#159447]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-8 sm:px-12">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-0 text-left"
        >
          <motion.span
            variants={fadeUp}
            className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#159447]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tour Packages
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-[40px] font-bold leading-none tracking-[-0.035em] text-white sm:text-[48px]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Handpicked Tour Packages
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-4 h-px w-36 bg-gradient-to-r from-[#159447] via-[#159447]/60 to-transparent" />
        </motion.div>

        <div className="h-8" />

        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mx-auto grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              className="group relative w-full overflow-hidden rounded-xl border border-white/8 bg-[#071716] cursor-pointer shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
              whileHover={{ y: -6, transition: { duration: 0.35 } }}
            >
              <div className="relative h-[280px] overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03100f] via-[#03100f]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <h3 className="text-sm font-semibold text-white leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                    {pkg.name}
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                      {pkg.duration}
                    </span>
                    <a
                      href="https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-[#159447] text-white"
                    >
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="mt-2 text-[10px] text-white/40 leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                    Private guided trip · Hotels · Transport
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig} className="mt-9 text-center">
          <a href="https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package." className="inline-flex items-center gap-3 rounded-md border border-[#159447]/40 px-7 py-3 text-sm font-medium text-white/80 transition-all duration-300 hover:bg-[#159447] hover:text-white" style={{ fontFamily: "var(--font-inter)" }}>
            View All Tours
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}