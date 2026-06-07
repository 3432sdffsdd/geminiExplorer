"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Check, Sparkles, X } from "lucide-react";
import { FormEvent, useState, useEffect } from "react";
import { fadeUp, staggerContainer, viewportConfig } from "@/lib/animations";
import BestTimePopup from "@/components/BestTimePopup";

const CUSTOM_TOUR_WHATSAPP_NUMBER = "923003667466";

const destinationOptions = [
  "Hunza",
  "Skardu",
  "Swat",
  "Naran Kaghan",
  "Murree",
  "Fairy Meadows",
  "Chitral",
  "Kashmir",
  "Islamabad",
  "Lahore",
  "Karachi",
  
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type CustomTourForm = {
  name: string;
  phone: string;
  destinations: string[];
  otherDestination: string;
  days: string;
  month: string;
  travelers: string;
  specialRequest: string;
};

const initialCustomTourForm: CustomTourForm = {
  name: "",
  phone: "",
  destinations: [],
  otherDestination: "",
  days: "",
  month: "",
  travelers: "",
  specialRequest: "",
};

const packages = [
  {
    name: "Hunza",
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80",
    link: "/hunza",
    title: "Best Time to Visit Hunza",
    subtitle: "April to October",
    description: "Hunza is beautiful throughout this period, with pleasant weather, open routes, and amazing mountain views. Spring brings blossoms, summer is best for family tours and sightseeing, while autumn offers golden colors and peaceful views.",
    imageUrl: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=1200&q=90",
    bestMonths: [
      { month: "April", benefit: "Cherry blossoms and spring beauty" },
      { month: "May", benefit: "Pleasant weather and blooming valleys" },
      { month: "June", benefit: "Best for family tours and sightseeing" },
      { month: "July", benefit: "Peak summer with clear mountain views" },
      { month: "August", benefit: "Warm days and accessible high passes" },
    ],
  },
  {
    name: "Skardu",
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    link: "/skardu",
    title: "Best Time to Visit Skardu",
    subtitle: "May to October",
    description: "Skardu is best visited during late spring, summer, and early autumn. During this time, the weather is pleasant, roads are more accessible, and famous places like Shangrila, Upper Kachura Lake, Deosai Plains, Shigar Valley, Khaplu, and Katpana Desert are easier to explore.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=90",
    bestMonths: [
      { month: "May", benefit: "Spring blossoms and pleasant weather" },
      { month: "June", benefit: "Best for families and first-time visitors" },
      { month: "July", benefit: "Deosai Plains accessible and green" },
      { month: "August", benefit: "Peak summer with clear mountain views" },
      { month: "September", benefit: "Comfortable weather and open routes" },
    ],
  },
  {
    name: "Neelum Valley",
    duration: "6 Days",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    link: "/neelum-valley",
    title: "Best Time to Visit Neelum Valley",
    subtitle: "June to September",
    description: "Neelum Valley is at its most beautiful during summer, when the weather is pleasant, the mountains are green, and upper areas like Kel, Arang Kel, Taobat, and Ratti Gali Lake are more accessible. Ratti Gali Lake is usually best from July to September when the lake is unfrozen and the trekking route is open.",
    imageUrl: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=90",
    bestMonths: [
      { month: "June", benefit: "Pleasant weather and green mountains" },
      { month: "July", benefit: "Best time for Ratti Gali Lake and upper areas" },
      { month: "August", benefit: "Peak beauty with accessible trekking routes" },
      { month: "September", benefit: "Better weather, fewer crowds, beautiful views" },
    ],
  },
  {
    name: "Kumrat",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    link: "/kumrat",
    title: "Best Time to Visit Kumrat",
    subtitle: "May to September",
    description: "Kumrat is best visited from May to September because the valley is lush green, rivers and waterfalls are active, and most major attractions are accessible. Roads can be rough in some parts, so local jeep use is often needed.",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=90",
    bestMonths: [
      { month: "May", benefit: "Fresh greenery and fewer crowds" },
      { month: "June", benefit: "Best weather and beautiful river views" },
      { month: "July", benefit: "Peak green valley and active waterfalls" },
      { month: "August", benefit: "Best for families, camping and sightseeing" },
      { month: "September", benefit: "Peaceful weather and less crowd" },
    ],
  },
  {
    name: "Chitral",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    link: "/chitral",
    title: "Best Time to Visit Chitral",
    subtitle: "April to October",
    description: "Chitral and Kalash are generally best from April to October, but for comfortable weather and good scenery, May–June and September–October are usually the best. Summer is popular, but July/August can be hotter in Chitral town and busier. Autumn gives golden colors and peaceful photography.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=90",
    bestMonths: [
      { month: "April", benefit: "Spring bloom and mild weather" },
      { month: "May", benefit: "Comfortable temperatures and clear views" },
      { month: "June", benefit: "Best for Kalash festivals" },
      { month: "September", benefit: "Golden autumn colors" },
      { month: "October", benefit: "Peaceful photography season" },
    ],
  },
  {
    name: "Fairy Meadows",
    duration: "5 Days",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    link: "/fairy-meadows",
    title: "Best Time to Visit Fairy Meadows",
    subtitle: "June to October",
    description: "Fairy Meadows is best when access is open and the weather is stable. Many travel guides mention June to October as the main visiting season, with July–August as peak season and September–October better for quieter trips and photography.",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=90",
    bestMonths: [
      { month: "June", benefit: "Access roads open, stable weather" },
      { month: "July", benefit: "Peak season, best views" },
      { month: "August", benefit: "Warm weather, ideal camping" },
      { month: "September", benefit: "Quieter, great photography" },
      { month: "October", benefit: "Peaceful trips, clear skies" },
    ],
  },
];

export default function TourPackages() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const [customTourOpen, setCustomTourOpen] = useState(false);

  // Debug: log when customTourOpen changes
  useEffect(() => {
    console.log('customTourOpen changed:', customTourOpen);
  }, [customTourOpen]);
  const [customTourForm, setCustomTourForm] = useState<CustomTourForm>(initialCustomTourForm);
  const [customTourErrors, setCustomTourErrors] = useState<Partial<Record<keyof CustomTourForm | "destination", string>>>({});

  // Check for query parameter to open custom tour modal
  useEffect(() => {
    const checkHash = () => {
      if (typeof window !== 'undefined') {
        const hash = window.location.hash;
        if (hash.includes('openCustomTour=true')) {
          setCustomTourOpen(true);
          // Clean the URL
          window.history.replaceState(null, '', '#tours');
        }
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleCardClick = (pkg: typeof packages[0]) => {
    if ("custom" in pkg && pkg.custom) {
      setCustomTourOpen(true);
    } else if (pkg.title) {
      setSelectedPackage(pkg);
    } else if (pkg.link) {
      router.push(pkg.link);
    } else {
      window.open("https://wa.me/923003667466?text=Hi%2C%20I%20am%20interested%20in%20a%20Pakistan%20tour%20package.", "_blank");
    }
  };

  const updateCustomTourField = (field: keyof CustomTourForm, value: string) => {
    setCustomTourForm((prev) => ({ ...prev, [field]: value }));
    setCustomTourErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleDestination = (destination: string) => {
    setCustomTourForm((prev) => {
      const selected = prev.destinations.includes(destination);
      return {
        ...prev,
        destinations: selected
          ? prev.destinations.filter((item) => item !== destination)
          : [...prev.destinations, destination],
      };
    });
    setCustomTourErrors((prev) => ({ ...prev, destination: undefined }));
  };

  const closeCustomTourModal = () => {
    setCustomTourOpen(false);
    setCustomTourErrors({});
  };

  const handleCustomTourSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors: Partial<Record<keyof CustomTourForm | "destination", string>> = {};

    if (!customTourForm.name.trim()) errors.name = "Name is required";
    if (!customTourForm.phone.trim()) errors.phone = "WhatsApp Number is required";
    if (!customTourForm.destinations.length && !customTourForm.otherDestination.trim()) {
      errors.destination = "Select at least one destination or enter another destination";
    }
    if (!customTourForm.days.trim()) errors.days = "Number of Days is required";
    if (!customTourForm.month) errors.month = "Tentative Month is required";
    if (!customTourForm.travelers.trim()) errors.travelers = "Number of Travelers is required";

    if (Object.keys(errors).length) {
      setCustomTourErrors(errors);
      return;
    }

    const message = `Hello, I want to plan a custom Pakistan tour.

Name: ${customTourForm.name}
WhatsApp Number: ${customTourForm.phone}
Selected Destinations: ${customTourForm.destinations.join(", ") || "Not selected"}
Other Destination: ${customTourForm.otherDestination || "N/A"}
Tour Duration: ${customTourForm.days}
Tentative Month: ${customTourForm.month}
Number of Travelers: ${customTourForm.travelers}
Special Request: ${customTourForm.specialRequest || "N/A"}

Please share a customized tour plan and estimated cost.`;

    window.open(`https://wa.me/${CUSTOM_TOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    setCustomTourForm(initialCustomTourForm);
    closeCustomTourModal();
  };

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
              onClick={() => handleCardClick(pkg)}
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
                    {pkg.duration ? (
                      <span className="text-xs text-white/60" style={{ fontFamily: "var(--font-inter)" }}>
                        {pkg.duration}
                      </span>
                    ) : null}
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#159447] text-white">
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="mt-2 text-[10px] text-white/40 leading-tight" style={{ fontFamily: "var(--font-inter)" }}>
                    Private guided trip · Hotels · Transport
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
 <br/>
        <div className="my-12 flex">
          <button
            type="button"
            onClick={() => {
              console.log('Custom tour button clicked');
              setCustomTourOpen(true);
            }}
            className="inline-flex items-center gap-3 rounded-2xl border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-8 py-4 text-[15px] font-bold text-[#EA580C] transition-all duration-300 hover:bg-[#F59E0B]/20 hover:border-[#F59E0B]/60 hover:-translate-y-0.5 shadow-lg"
            style={{ fontFamily: "var(--font-inter)" }}
          >
           
            Can't find your Dream Destination? Make your own Custom Tour Program - Click Here
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
       <br/>

      {/* Best Time Popup */}
      {selectedPackage && (
        <BestTimePopup
          title={selectedPackage.title}
          subtitle={selectedPackage.subtitle}
          description={selectedPackage.description}
          imageUrl={selectedPackage.imageUrl}
          bestMonths={selectedPackage.bestMonths}
          onClose={() => setSelectedPackage(null)}
          onViewDetails={() => {
            setSelectedPackage(null);
            if (selectedPackage.link) {
              router.push(selectedPackage.link);
            }
          }}
          onCustomTour={() => {
            setSelectedPackage(null);
            setCustomTourOpen(true);
          }}
        />
      )}
      <AnimatePresence>
        {customTourOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
            onClick={closeCustomTourModal}
          >
            
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-gray-200 bg-white shadow-[0_30px_120px_rgba(0,0,0,0.15)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button type="button" onClick={closeCustomTourModal} aria-label="Close custom tour form" className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-600 shadow-sm transition hover:bg-gray-200 hover:scale-105">
                <X className="h-4 w-4" />
              </button>

              <div className="border-b border-gray-200 px-6 py-5 sm:px-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#EA580C]">
                  <Sparkles className="h-3 w-3" />
                  Personalized Travel Plan
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-[#EA580C] sm:text-3xl" style={{ fontFamily: "var(--font-poppins)" }}>
                  Plan Your Custom Pakistan Tour
                </h3>
                <p className="mt-2 text-sm leading-5 text-gray-600" style={{ fontFamily: "var(--font-inter)" }}>
                  Tell us your preferred places, month, days, and travelers. We will prepare a custom Pakistan tour plan for you on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleCustomTourSubmit} className="space-y-5 p-6 sm:p-8">
               <br/>
                <div className="grid gap-5 sm:grid-cols-2">
                   
                  <div>
                   
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">Name *</label>
                    <input type="text" value={customTourForm.name} onChange={(event) => updateCustomTourField("name", event.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10" placeholder="Your name" />
                    {customTourErrors.name && <p className="mt-1.5 text-xs text-red-500">{customTourErrors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">WhatsApp Number *</label>
                    <input type="text" value={customTourForm.phone} onChange={(event) => updateCustomTourField("phone", event.target.value)} required className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10" placeholder="+92..." />
                    {customTourErrors.phone && <p className="mt-1.5 text-xs text-red-500">{customTourErrors.phone}</p>}
                  </div>
                </div>
 <br/>
                <div>
                  <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-gray-700">Select Destinations</label>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {destinationOptions.map((destination) => {
                      const selected = customTourForm.destinations.includes(destination);
                      return (
                        <button key={destination} type="button" onClick={() => toggleDestination(destination)} className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2.5 text-left text-sm transition ${selected ? "border-[#159447] bg-[#159447]/10 text-[#159447]" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50"}`}>
                          <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${selected ? "border-[#159447] bg-[#159447]" : "border-gray-300"}`}>{selected && <Check className="h-3 w-3 text-white" />}</span>
                          {destination}
                        </button>
                      );
                    })}
                  </div>
                  {customTourErrors.destination && <p className="mt-2 text-xs text-red-500">{customTourErrors.destination}</p>}
                </div>
 <br/>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">Other Destination</label>
                  <input type="text" value={customTourForm.otherDestination} onChange={(event) => updateCustomTourField("otherDestination", event.target.value)} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10" placeholder="Any destination not listed" />
                </div>
 <br/>
                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">Number of Days</label>
                    <input type="text" value={customTourForm.days} onChange={(event) => updateCustomTourField("days", event.target.value)} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10" placeholder="e.g. 7 Days" />
                    {customTourErrors.days && <p className="mt-1.5 text-xs text-red-500">{customTourErrors.days}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">Tentative Month</label>
                    <select value={customTourForm.month} onChange={(event) => updateCustomTourField("month", event.target.value)} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10">
                      <option value="">Select month</option>
                      {months.map((month) => <option key={month} value={month}>{month}</option>)}
                    </select>
                    {customTourErrors.month && <p className="mt-1.5 text-xs text-red-500">{customTourErrors.month}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">Number of Travelers</label>
                    <input type="text" value={customTourForm.travelers} onChange={(event) => updateCustomTourField("travelers", event.target.value)} className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10" placeholder="e.g. 4" />
                    {customTourErrors.travelers && <p className="mt-1.5 text-xs text-red-500">{customTourErrors.travelers}</p>}
                  </div>
                </div>
 <br/>
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-700">Special Request</label>
                  <textarea value={customTourForm.specialRequest} onChange={(event) => updateCustomTourField("specialRequest", event.target.value)} className="h-10 w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10" placeholder="Hotel preference, family trip, honeymoon, transport, food, budget, etc." />
                </div>

                <a
                  href={`https://wa.me/${CUSTOM_TOUR_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'd like to plan a custom Pakistan tour!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-bold text-[#EA580C] hover:underline"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Request Custom Tour Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
