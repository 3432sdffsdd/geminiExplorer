"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./poster.module.css";
import MediumImagePopup from "@/components/MediumImagePopup";

export default function HunzaTourPoster() {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sticky Website Menu */}
      <header className="fixed left-1/2 top-4 z-[9999] w-[calc(100%-24px)] max-w-[980px] -translate-x-1/2">
        <div className="relative flex h-[58px] items-center justify-between overflow-hidden rounded-full border border-white/30 bg-black/85 px-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <Link href="/" className="relative flex min-w-0 items-center gap-2">
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-transparent">
              {!logoError ? (
                <Image
                  src="/images/logo.png"
                  alt="Gemini Explorer Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-2xl">🌍</span>
              )}
            </div>

            <div className="hidden min-w-0 leading-tight sm:block">
              <p className="truncate text-[13px] font-black uppercase tracking-wide text-white">
                Gemini Explorer
              </p>
              <p className="truncate text-[7px] font-bold uppercase tracking-[0.22em] text-white/75">
                Dream • Discover • Explore
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 md:flex">
            <Link href="/" className="text-[12px] font-extrabold text-white hover:text-white/70">
              Home
            </Link>
            <Link href="/#tours" className="text-[12px] font-extrabold text-white hover:text-white/70">
              Tours
            </Link>
            <Link href="/#experiences" className="text-[12px] font-extrabold text-white hover:text-white/70">
              Experiences
            </Link>
            <Link href="/#gallery" className="text-[12px] font-extrabold text-white hover:text-white/70">
              Gallery
            </Link>
            <Link href="/#transport" className="text-[12px] font-extrabold text-white hover:text-white/70">
              Transport
            </Link>
            <Link href="/#contact" className="text-[12px] font-extrabold text-white hover:text-white/70">
              Contact
            </Link>
          </nav>

          <div className="relative flex items-center gap-2">
            <a
              href="tel:+923003667466"
              className="hidden items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-extrabold text-white shadow-sm backdrop-blur transition hover:text-white/70 md:inline-flex"
            >
              <Phone className="h-3 w-3 text-[#46e28d]" />
              +92 300 3667466
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>

            <a
              href="https://www.instagram.com/havocfati/profilecard/?igsh=bGE3eXB4MThiYW1m"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-md md:flex"
              aria-label="Instagram"
            >
              <Camera className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/20 bg-black/95 p-4 shadow-xl md:hidden">
            <div className="mb-4 border-b border-white/10 pb-4">
              <p className="text-[14px] font-black uppercase tracking-wide text-white">
                Gemini Explorer
              </p>
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/75">
                Dream • Discover • Explore
              </p>
            </div>

            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className="text-[13px] font-extrabold text-white hover:text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/#tours"
                className="text-[13px] font-extrabold text-white hover:text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </Link>

              <Link
                href="/#experiences"
                className="text-[13px] font-extrabold text-white hover:text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experiences
              </Link>

              <Link
                href="/#gallery"
                className="text-[13px] font-extrabold text-white hover:text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              <Link
                href="/#transport"
                className="text-[13px] font-extrabold text-white hover:text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Transport
              </Link>

              <Link
                href="/#contact"
                className="text-[13px] font-extrabold text-white hover:text-white/70"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <a
                href="tel:+923003667466"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-[12px] font-extrabold text-white"
              >
                <Phone className="h-3 w-3 text-[#46e28d]" />
                +92 300 3667466
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 left-4 z-[9998] flex flex-col items-center gap-1 md:bottom-6 md:left-6">
        <a
          href="https://wa.me/923003667466?text=I%20want%20to%20inquire%20about%20Hunza%20package"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)]"
        >
          <MessageCircle className="h-5 w-5 fill-white text-white" />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-black bg-[#F59E0B]" />
        </a>
        <span className="text-xs font-bold text-black drop-shadow-md">Chat with us</span>
      </div>

      <main className={styles.posterWrap}>
        <section className={styles.poster}>
          {/* HERO */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Hunza
                <br />
                Tour
              </h1>

              <div className={styles.duration}>
                <span className={styles.iconBox}>▣</span>
                <span>6 Days, 5 Nights</span>
              </div>

              <div className={styles.locationLine}>
                <span className={styles.locationPin} />
                <p>
                  Islamabad • Naran / Chilas • Hunza •
                  <br />
                  Khunjerab Pass • Hunza • Naran / Chilas • Islamabad
                </p>
              </div>
            </div>
          </section>

          {/* TOP INFO */}
          <section className={styles.topInfo}>
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>●</div>
              <div>
                <h3>Main Pick Up Point</h3>
                <p>
                  Islamabad:
                  <br />
                  Designated
                  <br />
                  pick-up point
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>♟</div>
              <div>
                <h3>Children Policy</h3>
                <ul>
                  <li>Kids below 4 years — Free of charge</li>
                  <li>Kids 4 to 7 years — 50% charges</li>
                  <li>Kids above 7 years — Full charges as adult</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ITINERARY TITLE */}
          <section className={styles.sectionHeading}>
            <span className={styles.line} />
            <h2>
              <span className={styles.mountainIcon}>⌁</span> ITINERARY
            </h2>
            <span className={styles.line} />
          </section>

          {/* ITINERARY */}
          <section className={styles.itinerary}>
            <DayCard
              icon="♟"
              day="DAY 1"
              image="/images/hunzaday1.jpeg"
              items={[
                "Early morning departure from Islamabad",
                "Travel towards Naran or Chilas depending on route condition",
                "If Babusar Top is open: travel via Naran",
                "If Babusar Top is closed: travel via Besham and Chilas",
                "Visit Kiwai Waterfall and Kaghan Valley",
                "Visit Lulusar Lake and Babusar Top (if open)",
                "Alternative route: Besham, Dasu, Diamer Bhasha Dam View",
                "Dinner & overnight stay in Naran / Chilas",
              ]}
              styles={styles}
            />

            <DayCard
              icon="◉"
              day="DAY 2"
              image="/images/hunzaday2.jpeg"
              items={[
                "Breakfast at hotel",
                "Continue journey towards Hunza via Karakoram Highway",
                "Enjoy beautiful mountain views and short stops",
                "Visit Rakaposhi View Point",
                "Stop at Gilgit",
                "Enjoy KKH Scenic Drive",
                "Visit Gulmit Village",
                "Visit Hussaini Suspension Bridge",
                "Visit Passu Cones View Point",
                "Visit Borith Lake",
                "Dinner & overnight stay in Hunza / Gulmit / Karimabad",
              ]}
              styles={styles}
            />

            <DayCard
              icon="♟"
              day="DAY 3"
              image="/images/karimabadday3.jpg"
              items={[
                "Breakfast in Hunza",
                "Explore culture and history of Central Hunza",
                "Visit Baltit Fort",
                "Visit Altit Fort",
                "Explore Karimabad Bazaar",
                "Visit Eagle's Nest View Point",
                "Visit Duikar Sunset Point",
                "Enjoy panoramic views of the valley",
                "Dinner & overnight stay in Hunza",
              ]}
              styles={styles}
            />

            <DayCard
              icon="⌂"
              day="DAY 4"
              image="/images/hunzaday4.jpeg"
              items={[
                "Breakfast in Hunza",
                "Full-day excursion towards Upper Hunza",
                "Visit Sost Dry Port",
                "Visit Khunjerab National Park",
                "Visit Khunjerab Pass (Pakistan-China border)",
                "Enjoy scenic viewpoints and glaciers",
                "Visit Passu Glacier Viewpoints",
                "Optional stop at Attabad Lake",
                "Return to Hunza",
                "Dinner & overnight stay in Hunza",
              ]}
              styles={styles}
            />

            <DayCard
              icon="▣"
              day="DAY 5"
              image="/images/hundayday5.webp"
              items={[
                "Breakfast in Hunza",
                "Begin return journey towards Naran / Chilas",
                "Enjoy scenic drive on Karakoram Highway",
                "Photography stops along the way",
                "Visit KKH Scenic Drive",
                "Visit Rakaposhi View Point",
                "Enjoy river viewpoints",
                "Dinner & overnight stay in Naran / Chilas",
              ]}
              styles={styles}
            />

            <DayCard
              icon="★"
              day="DAY 6"
              image="/images/isbfree.webp"
              items={[
                "Breakfast in Naran / Chilas",
                "Departure for Islamabad via same route",
                "If via Naran: stops at Babusar Top and Lulusar Lake",
                "If via Besham: scenic drive through Dasu and Besham",
                "Sightseeing on the way back",
                "Arrival in Islamabad by evening",
                "Tour ends with beautiful memories",
              ]}
              styles={styles}
            />
          </section>

          {/* MAIN PANELS */}
          <section className={styles.mainPanels}>
            <div className={styles.panel}>
              <div className={styles.panelHeading}>
                <span className={styles.circleIcon}>✓</span> SERVICES INCLUDED
              </div>

              <ul>
                <li className={styles.check}>Luxury AC Transport</li>
                <li className={styles.check}>4x4 Jeeps where required</li>
                <li className={styles.check}>Hotel accommodation as per policy</li>
                <li className={styles.check}>Half-board meals: Breakfast & Dinner</li>
                <li className={styles.check}>Pick and drop from designated point</li>
                <li className={styles.check}>Professional Tour Manager / Guide</li>
                <li className={styles.check}>Basic Phone Photography</li>
                <li className={styles.check}>Basic First Aid</li>
                <li className={styles.check}>Fuel expenses</li>
                <li className={styles.check}>Parking fees</li>
                <li className={styles.check}>Toll taxes</li>
                <li className={styles.check}>Challan & driver expenses</li>
              </ul>

              <img
                className={styles.vehicle}
                src="https://pngimg.com/uploads/jeep/jeep_PNG95.png"
                alt="vehicle"
              />
            </div>

            <div className={`${styles.panel} ${styles.foodPanel}`}>
              <div className={styles.panelHeading}>
                <span className={styles.circleIcon}>♨</span> FOOD MENU
              </div>

              <h4>BREAKFAST:</h4>
              <p>Tea, Paratha, Egg, Channa</p>

              <div className={styles.dash} />

              <h4>DINNER:</h4>
              <p>
                Karahi, Biryani, Sabzi,
                <br />
                BBQ, Pulao, Chinese
              </p>

              <p className={styles.foodNote}>♟ Menu will be based on availability.</p>

              <img
                className={styles.soup}
                src="https://pngimg.com/uploads/soup/soup_PNG52.png"
                alt="food"
              />
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeading}>
                <span className={styles.circleIcon}>×</span> SERVICES NOT INCLUDED
              </div>

              <ul>
                <li className={styles.cross}>Bus / Train / Air tickets</li>
                <li className={styles.cross}>Travel insurance</li>
                <li className={styles.cross}>Lunch & refreshments</li>
                <li className={styles.cross}>Trekking equipment</li>
                <li className={styles.cross}>Water sports charges</li>
                <li className={styles.cross}>Chairlift charges</li>
                <li className={styles.cross}>Zip line charges</li>
                <li className={styles.cross}>Entry fee of any fort, national park, etc.</li>
                <li className={styles.cross}>Laundry</li>
                <li className={styles.cross}>Heater / AC charges where not included</li>
                <li className={styles.cross}>Extra Jeep / Careem / Uber charges</li>
                <li className={styles.cross}>
                  Any extra expense due to landslides, road closure or any reason beyond human control
                </li>
                <li className={styles.cross}>Tips</li>
                <li className={styles.cross}>Any item not mentioned in Services Included</li>
              </ul>

              <div className={styles.fadeMountain}>⛰</div>
            </div>
          </section>

          {/* BOTTOM GRID */}
          <section className={styles.bottomGrid}>
            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>◎</span> BEST TIME TO VISIT
              </h3>
              <p>
                April to August is the best time to visit Hunza, when the weather is pleasant
                and routes are open. Spring brings blossoms, while summer is best for family tours.
              </p>
            </div>

            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>◎</span> TERMS
              </h3>
              <ul>
                <li>Minimum 50% amount is required at booking.</li>
                <li>Remaining amount must be cleared before departure.</li>
                <li>Participants must carry valid CNIC / Passport Card.</li>
                <li>Registration deadline: 15 days before departure.</li>
                <li>Cancellation accepted before 72 hours of departure.</li>
                <li>80% refund in case of valid cancellation.</li>
              </ul>
            </div>

            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>▣</span> PAYMENT
              </h3>

              <div className={styles.payRow}>
                <span className={styles.payLogo}>JazzCash</span>
                <span>03003667466</span>
              </div>

              <div className={styles.payRow}>
                <span className={styles.payLogo}>RAAST</span>
                <span>03003667466</span>
              </div>

              <div className={styles.payRow}>
                <span className={styles.payLogo}>HBL</span>
                <span>00177900675201</span>
              </div>
            </div>

            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>☎</span> CONTACT
              </h3>

              <p className={styles.contactNumber}>
                +92 333 5999879
                <br />
                +92 345 8943205
              </p>

              <div className={styles.instaRow}>
                <span className={styles.instagram} />
                <span>
                  Instagram:
                  <br />
                  <strong>@havocfati</strong>
                </span>
              </div>

              <div className={styles.forest} />
            </div>

            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>▣</span> HIGHLIGHTS
              </h3>

              <ul>
                <li>Khunjerab Pass</li>
                <li>Attabad Lake</li>
                <li>Baltit & Altit Forts</li>
                <li>Passu Cones</li>
                <li>Eagle's Nest</li>
                <li>Karakoram Highway</li>
              </ul>

              <div className={styles.mountainDrawing}>⌁</div>
            </div>
          </section>

          <footer className={styles.footer}>
            UNFORGETTABLE JOURNEYS. AUTHENTIC EXPERIENCES.
          </footer>
        </section>
      </main>
    </>
  );
}

function DayCard({
  icon,
  day,
  image,
  items,
  styles,
}: {
  icon: string;
  day: string;
  image: string;
  items: string[];
  styles: any;
}) {
  const isDay1 = day === "DAY 1";

  return (
    <article
      className={styles.dayCard}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: isDay1 ? "center 35%" : "center",
      }}
    >
      <div className={styles.dayBody} style={{ background: "rgba(255, 255, 255, 0.92)" }}>
        <div className={styles.dayTitle}>
          <span className={styles.dayIcon}>{icon}</span> {day}
        </div>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={styles.dayImgHolder}>
        {isDay1 ? (
          <MediumImagePopup imageSrc={image} alt={`${day} Image`}>
            <motion.img
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={{ duration: 3.0, ease: "easeOut" }}
              className={`${styles.dayImg} ${styles.day1Img}`}
              src={image}
              alt={day}
            />
          </MediumImagePopup>
        ) : (
          <MediumImagePopup imageSrc={image} alt={`${day} Image`}>
            <img className={styles.dayImg} src={image} alt={day} />
          </MediumImagePopup>
        )}
      </div>
    </article>
  );
}