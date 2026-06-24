"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, CheckCircle, User, MapPin, Package, MessageSquareText, PenLine } from "lucide-react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import { reviewsUrl } from "@/lib/reviewsApi";

const TOUR_PACKAGES = [
  "Hunza Valley Tour",
  "Fairy Meadows & Nanga Parbat",
  "Skardu & Deosai National Park",
  "Neelum Valley Tour",
  "Chitral & Kalash Valley",
  "Kumrat Valley & Upper Dir",
  "Custom / Other",
];

export default function ReviewForm() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    tourPackage: "",
    rating: 0,
    review: "",
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.review.trim() || form.rating === 0) {
      setError("Please fill in your name, rating, and review message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(reviewsUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to submit. Please try again.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const labelClass =
    "flex items-center gap-2 text-[13px] font-semibold text-slate-700 mb-2.5";
  const inputClass =
    "w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-[#10B981] focus:ring-4 focus:ring-[#10B981]/10 focus:bg-white transition-all duration-200";

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f8fafc] to-[#eef2f5]">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
         <br/>
          <motion.div variants={fadeUp} className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase text-[#047857] bg-[#10B981]/10 border border-[#10B981]/20 mb-5">
              <PenLine size={13} />
              Share Your Story
            </span>
            <h2 className="text-3xl sm:text-[2.75rem] font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
              Write a Review
            </h2>
          <p
  className="text-base text-slate-500 text-left leading-relaxed whitespace-nowrap"
  style={{ fontFamily: "var(--font-inter)" }}
>
  Your experience helps other travelers plan their dream Pakistan journey.
</p>
<br/>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4 rounded-[28px] border border-[#10B981]/30 bg-gradient-to-b from-[#10B981]/10 to-white p-14 text-center shadow-[0_12px_50px_rgba(16,185,129,0.12)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#10B981]/15">
                <CheckCircle size={36} className="text-[#10B981]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "var(--font-poppins)" }}>
                Thank You!
              </h3>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-8 sm:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#047857] via-[#10B981] to-[#F59E0B]" />

              <div className="flex flex-col gap-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  
                  <div>
                    <br/>
                    <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      <User size={15} className="text-[#10B981]" />
                      Full Name <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Ali Khan"
                      className={inputClass}
                      required
                    />
                  </div>
                 
                  <div>
                     <br/>
                    <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                      <MapPin size={15} className="text-[#10B981]" />
                      City / Country
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="e.g. Karachi, Pakistan"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                    <Package size={15} className="text-[#10B981]" />
                    Tour Package
                  </label>
                  <select
                    name="tourPackage"
                    value={form.tourPackage}
                    onChange={handleChange}
                    className={inputClass + " cursor-pointer"}
                  >
                    <option value="">Select a package</option>
                    {TOUR_PACKAGES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <label className={labelClass + " mb-3"} style={{ fontFamily: "var(--font-inter)" }}>
                    <Star size={15} className="text-[#F59E0B]" />
                    Your Rating <span className="text-[#F59E0B]">*</span>
                  </label>
                  <div className="flex items-center gap-2.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, rating: s }))}
                        onMouseEnter={() => setHoverRating(s)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform duration-150 hover:scale-125"
                      >
                        <Star
                          size={32}
                          className={
                            s <= (hoverRating || form.rating)
                              ? "text-[#F59E0B] fill-[#F59E0B]"
                              : "text-slate-300"
                          }
                        />
                      </button>
                    ))}
                    {form.rating > 0 && (
                      <span className="ml-3 self-center rounded-full bg-[#F59E0B]/10 px-3 py-1 text-xs font-semibold text-[#B45309]" style={{ fontFamily: "var(--font-inter)" }}>
                        {["", "Poor", "Fair", "Good", "Great", "Excellent"][form.rating]}
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass} style={{ fontFamily: "var(--font-inter)" }}>
                    <MessageSquareText size={15} className="text-[#10B981]" />
                    Your Review <span className="text-[#F59E0B]">*</span>
                  </label>
                  <textarea
                    name="review"
                    value={form.review}
                    onChange={handleChange}
                    placeholder="Share your experience, highlights, and tips for future travelers…"
                    rows={5}
                    className={inputClass + " resize-none"}
                    required
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#047857] to-[#10B981] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#10B981]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#10B981]/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {submitting ? "Submitting…" : (
                    <>
                      <Send size={40} />
                      Submit Review
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
