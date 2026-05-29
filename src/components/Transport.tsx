"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Users, Wifi, Snowflake, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";

const vehicles = [
  {
    name: "Toyota Land Cruiser",
    type: "Premium 4×4 SUV",
    capacity: "4–6 passengers",
    ideal: "Mountain routes & off-road",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=700&q=80",
    features: ["High clearance 4WD", "Leather seats", "Air conditioning", "Expert mountain driver"],
    accent: "#F59E0B",
  },
  {
    name: "Toyota Prado",
    type: "Luxury 4×4 SUV",
    capacity: "4–5 passengers",
    ideal: "Family & luxury tours",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=700&q=80",
    features: ["Plush interiors", "Panoramic windows", "Luggage space", "Comfortable long drives"],
    accent: "#10B981",
  },
  {
    name: "Honda Civic / Corolla",
    type: "Comfortable Sedan",
    capacity: "3–4 passengers",
    ideal: "City transfers & highways",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=700&q=80",
    features: ["Fuel efficient", "Smooth city ride", "Clean & modern", "GPS navigation"],
    accent: "#3B82F6",
  },
  {
    name: "Toyota Coaster",
    type: "Group Minibus",
    capacity: "12–20 passengers",
    ideal: "Group & family tours",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=700&q=80",
    features: ["Spacious seating", "Group comfort", "Luggage hold", "Tour group leader"],
    accent: "#8B5CF6",
  },
];

const trustFeatures = [
  { icon: Shield, text: "Verified professional drivers" },
  { icon: Users, text: "Private family-friendly tours" },
  { icon: Snowflake, text: "Fully air-conditioned fleet" },
  { icon: Wifi, text: "Airport pickup & drop service" },
];

export default function Transport() {
  return (
    <section className="relative py-28 bg-[#0A0F1E] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#F59E0B]/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-6"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <br />
              <br />
              <br />
             <br />
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Comfort &{" "}
              <span className="text-gold-gradient">Class</span>
             Every Kilometre
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/45 max-w-md leading-relaxed font-light text-base"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Every vehicle is meticulously maintained, thoroughly cleaned, and driven
              by experienced local professionals who know every mountain pass.
            </motion.p>
          </div>

          {/* Trust Pills */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 gap-3"
          >
            {trustFeatures.map(({ icon: Icon, text }) => (
              <motion.div
                key={text}
                variants={fadeUp}
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl glass border border-white/10"
              >
                <Icon className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span className="text-xs text-white/70 font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vehicle Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {vehicles.map((vehicle) => (
            <motion.div
              key={vehicle.name}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group rounded-2xl overflow-hidden bg-[#0D1B2A] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Vehicle Image */}
              <div className="relative h-44 overflow-hidden bg-[#162032]">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent" />
                <div
                  className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${vehicle.accent}20`, color: vehicle.accent, border: `1px solid ${vehicle.accent}30` }}
                >
                  {vehicle.capacity}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-white text-base mb-0.5" style={{ fontFamily: "var(--font-poppins)" }}>
                  {vehicle.name}
                </h3>
                <p className="text-xs font-medium mb-1" style={{ color: vehicle.accent, fontFamily: "var(--font-inter)" }}>
                  {vehicle.type}
                </p>
                <p className="text-xs text-white/35 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                  Ideal for: {vehicle.ideal}
                </p>

                <ul className="space-y-1.5">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/50" style={{ fontFamily: "var(--font-inter)" }}>
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: vehicle.accent }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl glass border border-white/10"
        >
          <div>
            <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
              Need airport pickup from Islamabad?
            </h3>
            <p className="text-white/50 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
              We&apos;ll be there when you land. Comfortable, punctual, and professional.
            </p>
          </div>
          <a
            href="https://wa.me/923001234567?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package."
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm text-[#020817] bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105 transition-all duration-300"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Book Transport
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
