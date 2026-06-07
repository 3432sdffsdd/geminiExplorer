"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

type CustomTourPopupProps = {
  onClose: () => void;
  onOpenFullForm: () => void;
};

export default function CustomTourPopup({ onClose, onOpenFullForm }: CustomTourPopupProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open full form with pre-filled data
    onOpenFullForm();
  };

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
          className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 transition hover:bg-gray-200"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="border-b border-gray-200 px-5 py-4">
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-700">
              <Sparkles className="h-2.5 w-2.5" />
              Quick Inquiry
            </div>
            <h3 className="text-lg font-bold text-gray-900">Plan Your Custom Tour</h3>
            <p className="mt-1 text-xs text-gray-600">Tell us your details and we'll create a personalized plan</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 p-5">
            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black/10"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-gray-700">WhatsApp Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black/10"
                placeholder="+92..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-black px-4 py-2.5 text-sm font-bold text-white transition hover:bg-gray-800"
            >
              Continue to Full Form
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
