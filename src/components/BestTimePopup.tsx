"use client";

import { X, CalendarDays, ArrowRight } from "lucide-react";
import { useEffect } from "react";

type BestTimePopupProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  bestMonths?: {
    month: string;
    benefit: string;
  }[];
  imageUrl?: string;
  onClose?: () => void;
  onViewDetails?: () => void;
  onCustomTour?: () => void;
};

export default function BestTimePopup({
  title = "Best Time to Visit Chitral",
  subtitle = "April to October",
  description = "Chitral and Kalash are generally best from April to October, but for comfortable weather and good scenery, May–June and September–October are usually the best. Summer is popular, but July/August can be hotter in Chitral town and busier. Autumn gives golden colors and peaceful photography.",
  imageUrl = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=90",
  bestMonths = [
    {
      month: "April",
      benefit: "Spring bloom and mild weather",
    },
    {
      month: "May",
      benefit: "Comfortable temperatures and clear views",
    },
    {
      month: "June",
      benefit: "Best for Kalash festivals",
    },
    {
      month: "September",
      benefit: "Golden autumn colors",
    },
    {
      month: "October",
      benefit: "Peaceful photography season",
    },
  ],
  onClose,
  onViewDetails,
  onCustomTour,
}: BestTimePopupProps) {
  // Auto-close on mobile after 5 seconds and navigate to details
  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    if (isMobile && onViewDetails) {
      const timer = setTimeout(() => {
        onViewDetails();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [onViewDetails]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 backdrop-blur-[4px] sm:items-center sm:p-5"
      onClick={() => {
        if (onViewDetails) {
          onViewDetails();
        } else {
          onClose?.();
        }
      }}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-[900px] flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            if (onViewDetails) {
              onViewDetails();
            } else {
              onClose?.();
            }
          }}
          aria-label="Close"
          className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-xl ring-1 ring-black/10 transition hover:scale-105 hover:bg-black hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-[180px] shrink-0 overflow-hidden sm:h-[200px]">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
            Best Season Guide
          </div>

          <div className="absolute bottom-7 left-6 max-w-[720px] pr-16 sm:left-8">
            <h2 className="max-w-[690px] text-[26px] font-black leading-[1.06] tracking-[-0.03em] text-white drop-shadow-xl sm:text-[32px]">
              {title}
            </h2>
          </div>
        </div>

        {/* White Content Area */}
        <div className="flex-1 overflow-y-auto px-6 py-4 sm:px-8 sm:py-5">
          <p className="max-w-[820px] text-[14px] font-medium leading-7 text-black/70 sm:text-[15px]">
            {description}
          </p>

          {/* Best Months */}
          <div className="mt-5 hidden sm:block">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white">
                <CalendarDays className="h-4 w-4" />
              </div>

              <div>
                <h3 className="text-[18px] font-black leading-tight text-black">
                  Best Months
                </h3>
                <p className="mt-1 text-[11px] font-semibold text-black/45">
                  Month-wise travel experience
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {bestMonths.map((item) => (
                <div
                  key={item.month}
                  className="min-h-[100px] flex flex-col items-center justify-center rounded-[20px] border border-black/10 bg-[#fafafa] p-3 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]"
                >
                  <p className="text-[20px] font-black leading-none text-black text-center">
                    {item.month}
                  </p>

                  <p className="mt-2 text-[12px] font-medium leading-4 text-black/60 text-center">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 hidden flex-col gap-3 border-t border-black/10 pt-4 sm:flex">
            <div className="flex justify-end">
              <button
                onClick={onViewDetails}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5"
              >
                View Details
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            {onCustomTour && (
              <div className="flex justify-start">
                <button
                  onClick={onCustomTour}
                  className="inline-flex items-center gap-3 rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-6 py-3 text-sm font-bold text-[#F59E0B] transition-all duration-300 hover:bg-[#F59E0B]/20 hover:border-[#F59E0B]/60 hover:-translate-y-0.5"
                >
                  Can't find your Dream Destination? Make your own Custom Tour Program
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}