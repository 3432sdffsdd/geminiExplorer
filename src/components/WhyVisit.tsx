"use client";

import { motion } from "framer-motion";
import {
  Mountain,
  Droplets,
  Landmark,
  Heart,
  Sparkles,
  TreePine,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Mountain,
    title: "World’s Highest Roads",
    text: "Drive through the legendary Karakoram Highway, surrounded by some of the tallest peaks on Earth.",
    color: "#60A5FA",
  },
  {
    icon: Droplets,
    title: "Crystal Alpine Lakes",
    text: "Discover turquoise lakes, mirror-like reflections, and breathtaking alpine views.",
    color: "#22D3EE",
  },
  {
    icon: Landmark,
    title: "Ancient Heritage",
    text: "Explore forts, bazaars, valleys, and stories connected to thousands of years of civilization.",
    color: "#F59E0B",
  },
  {
    icon: Heart,
    title: "Warm Hospitality",
    text: "Feel a culture where guests are welcomed with kindness, chai, food, and respect.",
    color: "#FB7185",
  },
  {
    icon: Sparkles,
    title: "Affordable Luxury",
    text: "Enjoy premium guided tours, scenic hotels, comfortable travel, and great value.",
    color: "#10B981",
  },
  {
    icon: TreePine,
    title: "Untouched Wilderness",
    text: "Experience peaceful valleys, quiet trails, wild landscapes, and nature away from crowds.",
    color: "#34D399",
  },
];

export default function WhyVisit() {
  return (
    <section className="relative overflow-hidden bg-[#020817] px-6 py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />
<br/><br/><br/><br/><br/>
      <div className="relative left-1/2 w-full max-w-5xl -translate-x-1/2">
        <div className="mx-auto mb-16 flex w-full max-w-5xl flex-col items-center text-center">
          <span className="inline-flex rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-8 py-3.5 text-base font-bold uppercase tracking-[0.32em] text-[#F59E0B]">
            Why Pakistan
          </span>

          <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-4xl">
            Journeys That Feel{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-[#FFD36A] bg-clip-text text-transparent">
              Unreal
            </span>
          </h2>

          <p className="mt-7 text-lg leading-9 text-white/60">
            From mighty mountains to ancient culture, Pakistan offers travel
            experiences that feel raw, emotional, and unforgettable.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl transition hover:border-white/20"
              >
                <div
                  className="absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-20 blur-3xl"
                  style={{ background: item.color }}
                />

                <div className="relative z-10 flex flex-col items-start text-left">
                 <div
  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/30"
  style={{ boxShadow: `0 0 28px ${item.color}40` }}
>
                    <Icon size={22} style={{ color: item.color }} />
                  </div>

                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/60">
                      {item.text}
                    </p>

                    <div
                      className="mt-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/20 transition group-hover:translate-x-1"
                      style={{ color: item.color }}
                    >
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}