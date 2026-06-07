"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Star, Heart, Globe } from "lucide-react";

type AboutOwnerPopupProps = {
  onClose: () => void;
};

const achievements = [
  { icon: Globe, value: "15+", label: "Years Experience", color: "#F59E0B" },
  { icon: Star, value: "4.9★", label: "Average Rating", color: "#10B981" },
  { icon: Heart, value: "500+", label: "Tours Completed", color: "#EC4899" },
];

export default function AboutOwnerPopup({ onClose }: AboutOwnerPopupProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 transition hover:bg-gray-200"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="relative h-64 overflow-hidden">
            <Image
              src="/images/fatima1.JPG"
              alt="Fatima Ali - Your Local Travel Partner"
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/20 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#FBBF24]">
                Fatima Ali
              </div>

              <h3 className="text-xl font-bold text-white">
                Meet Your Local
              </h3>

              <h3 className="text-xl font-bold text-[#FBBF24]">
                Travel Partner
              </h3>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm leading-relaxed text-gray-600">
              Fatima&apos;s passion for travel began at the age of 16 and grew
              into a lifelong journey of exploration. With over 15 years of
              experience, she has traveled extensively across Pakistan,
              discovering iconic destinations such as Swat, Kalam, Malam Jabba,
              Fairy Meadows, Hunza, Skardu, Deosai, and the stunning valleys of
              Kashmir.
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {achievements.map(({ icon: Icon, value, label, color }) => (
                <div
                  key={label}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-2 text-center"
                >
                  <Icon
                    className="mx-auto mb-1 h-4 w-4"
                    style={{ color }}
                  />

                  <div className="text-sm font-bold" style={{ color }}>
                    {value}
                  </div>

                  <div className="text-[9px] text-gray-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border-l-4 border-[#F59E0B] bg-[#F59E0B]/5 p-3">
              <p className="text-xs italic text-gray-700">
                &quot;Pakistan is not just a destination — it&apos;s a feeling
                you carry with you forever. Let me help you find yours.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}