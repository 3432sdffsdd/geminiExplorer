"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./poster.module.css";
import MediumImagePopup from "@/components/MediumImagePopup";

export default function FairyMeadowsTourPoster() {
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

            {/* Mobile Menu Toggle */}
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
          <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-white/20 bg-black/95 p-4 shadow-xl md:hidden">
            <div className="mb-4 pb-4 border-b border-white/10">
              <p className="text-[14px] font-black uppercase tracking-wide text-white">
                Gemini Explorer
              </p>
              <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-white/75">
                Dream • Discover • Explore
              </p>
            </div>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-[13px] font-extrabold text-white hover:text-white/70" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#tours" className="text-[13px] font-extrabold text-white hover:text-white/70" onClick={() => setMobileMenuOpen(false)}>
                Tours
              </Link>
              <Link href="/#experiences" className="text-[13px] font-extrabold text-white hover:text-white/70" onClick={() => setMobileMenuOpen(false)}>
                Experiences
              </Link>
              <Link href="/#gallery" className="text-[13px] font-extrabold text-white hover:text-white/70" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/#transport" className="text-[13px] font-extrabold text-white hover:text-white/70" onClick={() => setMobileMenuOpen(false)}>
                Transport
              </Link>
              <Link href="/#contact" className="text-[13px] font-extrabold text-white hover:text-white/70" onClick={() => setMobileMenuOpen(false)}>
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
      <a
        href="https://wa.me/923003667466?text=I%20want%20to%20inquire%20about%20Fairy%20Meadows%20package"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-4 bottom-4 z-[9998] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] md:left-6 md:bottom-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="text-xs font-bold">Get Package Details</span>
      </a>

      <main className={styles.posterWrap}>
        <section className={styles.poster}>
          {/* HERO */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Fairy Meadows &<br />
                Nanga Parbat
              </h1>

              <div className={styles.duration}>
                <span className={styles.iconBox}>▣</span>
                <span>5 Days, 4 Nights</span>
              </div>

              <div className={styles.locationLine}>
                <span className={styles.locationPin} />
                <p>
                  Lahore • Islamabad • Naran • Lulusar Lake • Babusar Top •<br />
                  Chilas • Raikot • Tattu Village • Fairy Meadows •<br />
                  Bayal Camp • Nanga Parbat View Point
                </p>
              </div>
            </div>
          </section>

          {/* TOP INFO */}
          <section className={styles.topInfo}>
            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>●</div>
              <div>
                <h3>Main Pick Up Points</h3>
                <p>
                  Lahore:
                  <br />
                  Thokar Niaz Baig
                  <br />
                  Islamabad: Daewoo / EME
                </p>
              </div>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoIcon}>♟</div>
              <div>
                <h3>Children Policy</h3>
                <ul>
                  <li>Under 3 years — Free of charge (Lap seat or folding seat)</li>
                  <li>3 to 8 years — Half charges (Folding seat)</li>
                  <li>8 years and above — Full charges</li>
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
              image="/images/lulusar lake.jpeg"
              items={[
                "Departure from Islamabad",
                "Short stops on the way",
                "Sightseeing en route: Abbottabad, Mansehra, Balakot",
                "Breakfast stop at Balakot",
                "Short stay in Naran",
                "Visit Lulusar Lake",
                "Free time at Babusar Top for photography",
                "Dinner and overnight stay in Chilas / Gonar Farm",
              ]}
              styles={styles}
            />

            <DayCard
              icon="◉"
              day="DAY 2"
              image="/images/fairy2.jpeg"
              items={[
                "Early morning breakfast",
                "Departure towards Raikot Bridge",
                "Jeep ride towards Tattu Village",
                "Trekking of around 3 hours to Fairy Meadows",
                "Arrival and check-in",
                "Enjoy the peaceful evening with beautiful views",
                "Night stay in Fairy Meadows",
              ]}
              styles={styles}
            />

            <DayCard
              icon="♟"
              day="DAY 3"
              image="/images/nangaparbat.jpg"
              items={[
                "Breakfast at Fairy Meadows",
                "Free time to explore Fairy Meadows",
                "Optional trek towards Bayal Camp / View Point / Nanga Parbat Base Camp",
                "Photography under the snowy Nanga Parbat",
                "Bonfire night at Fairy Meadows",
                "Dinner at Fairy Meadows",
                "Night stay in Fairy Meadows",
              ]}
              styles={styles}
            />

            <DayCard
              icon="⌂"
              day="DAY 4"
              image="/images/chillas.webp"
              items={[
                "Breakfast at Fairy Meadows",
                "Relax and enjoy the morning view of Nanga Parbat",
                "Trek back to Tattu Village",
                "Jeep ride back to Raikot",
                "Continue journey towards Chilas / Naran",
                "Dinner and overnight stay",
                "Night stay in Chilas / Naran",
              ]}
              styles={styles}
            />

            <DayCard
              icon="▣"
              day="DAY 5"
              image="/images/isbfree.webp"
              items={[
                "Early morning breakfast",
                "Sightseeing on the way back",
                "Safe arrival back to Islamabad",
                "End of services with beautiful memories",
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
                <li className={styles.check}>Private AC Transportation (Toyota Coaster / Grand Cabin)</li>
                <li className={styles.check}>Accommodation for 4 nights (Hotel in Chilas, camping in Fairy Meadows)</li>
                <li className={styles.check}>Quality hygienic meals (5 Breakfasts and 4 Dinners)</li>
                <li className={styles.check}>Fuel, Diesel and Toll Expenses</li>
                <li className={styles.check}>Jeep Charges for Fairy Meadows</li>
                <li className={styles.check}>Guide Services</li>
                <li className={styles.check}>Basic Group Photography</li>
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
              <p>Paratha, Omelette, Tea, Channay</p>

              <div className={styles.dash} />

              <h4>DINNER:</h4>
              <p>
                Chicken Dish with Roti / Nan,
                <br />
                Raita, Salad, Cold Drink
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
                <li className={styles.cross}>Personal expenses (tea, mineral water, lunch)</li>
                <li className={styles.cross}>Extra expense due to road blockage, landslide or weather</li>
                <li className={styles.cross}>Extra vehicle usage due to road closure or emergency</li>
                <li className={styles.cross}>Anything not mentioned in Services Included</li>
              </ul>

              <div className={styles.fadeMountain}>⛰</div>
            </div>
          </section>

          {/* BOTTOM GRID */}
          <section className={styles.bottomGrid}>
            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>◎</span> ROOM SHARING
              </h3>
              <p>
                Package is based on 4 persons sharing room. Couple separate room.
                Contact for details.
              </p>
            </div>

            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>◎</span> TOUR NOTES
              </h3>
              <ul>
                <li>Trekking is required for Fairy Meadows.</li>
                <li>Road and jeep timings may change due to weather.</li>
                <li>Participants should carry warm clothes.</li>
                <li>Keep CNIC with you during travel.</li>
                <li>Schedule may change due to road conditions.</li>
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
                <li>Fairy Meadows</li>
                <li>Nanga Parbat View</li>
                <li>Bayal Camp Trek</li>
                <li>Babusar Top</li>
                <li>Lulusar Lake</li>
                <li>Bonfire Night</li>
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
  const isDay2 = day === "DAY 2";
  
  return (
    <article 
      className={styles.dayCard}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.dayBody} style={{ background: 'rgba(255, 255, 255, 0.92)' }}>
        <div className={styles.dayTitle}>
          <span className={styles.dayIcon}>{icon}</span> {day}
        </div>

        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {isDay1 ? (
        <MediumImagePopup imageSrc={image} alt={`${day} Image`}>
          <motion.img
            initial={{ scale: 1.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={styles.dayImg}
            src={image}
            alt={day}
          />
        </MediumImagePopup>
      ) : isDay2 ? (
        <MediumImagePopup imageSrc={image} alt={`${day} Image`}>
          <motion.img
            initial={{ scale: 2.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className={styles.dayImg}
            src={image}
            alt={day}
          />
        </MediumImagePopup>
      ) : (
        <MediumImagePopup imageSrc={image} alt={`${day} Image`}>
          <img className={styles.dayImg} src={image} alt={day} />
        </MediumImagePopup>
      )}
    </article>
  );
}