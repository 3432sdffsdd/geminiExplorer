"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./poster.module.css";
import MediumImagePopup from "@/components/MediumImagePopup";

export default function ChitralTourPoster() {
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
        href="https://wa.me/923003667466?text=I%20want%20to%20inquire%20about%20Chitral%20package"
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
                Chitral, Kalash Valley &<br />
                Shandur Tour
              </h1>

              <div className={styles.duration}>
                <span className={styles.iconBox}>▣</span>
                <span>5 Days, 4 Nights</span>
              </div>

              <div className={styles.locationLine}>
                <span className={styles.locationPin} />
                <p>
                  Chitral • Kalash Valley • Drosh • Ayun • Rumbur •<br />
                  Bumburate • Garam Chashma • Qaqlasht •<br />
                  Shandur • Madaglasht
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
              image="/images/chillas.webp"
              items={[
                "Early morning departure from designated spot in Islamabad for Dir",
                "Travel towards Lower Pech / Lowari Chitral",
                "Refreshment stop with tea / vehicle",
                "Enjoy the scenic and adventurous drive through Lowari / Middle Dir",
                "Continue journey towards Chitral",
                "Arrival in Chitral by evening",
                "Dinner & overnight stay at hotel in Chitral",
              ]}
              styles={styles}
            />

            <DayCard
              icon="◉"
              day="DAY 2"
              image="/images/chitralday2.jfif"
              items={[
                "Breakfast at hotel",
                "Enjoy beautiful views of Tirich Mir, the highest peak of Hindukush Range",
                "Explore Chitral town and weekend local fruit market",
                "Departure for Garam Chashma Valley",
                "Visit famous Sulphur Springs",
                "Enjoy beauty of trout fishing area",
                "Photography and free time at Garam Chashma",
                "Return back to Chitral",
                "Dinner & overnight stay at hotel in Chitral",
              ]}
              styles={styles}
            />

            <DayCard
              icon="♟"
              day="DAY 3"
              image="/images/chitralday3.jfif"
              items={[
                "Breakfast at hotel",
                "Departure for Kalash Valley",
                "Check-in at hotel in Bumburate",
                "Visit Kalash largest village",
                "Visit local schools supported by the people of Greece",
                "Meet and interact with Kalash community members",
                "Experience traditional dress, cuisine and local lifestyle",
                "Dinner & overnight stay in Bumburate",
              ]}
              styles={styles}
            />

            <DayCard
              icon="⌂"
              day="DAY 4"
              image="/images/chitralday4.jfif"
              items={[
                "Breakfast in Bumburate",
                "Free day to relax and enjoy breathtaking views of Kalash Valley",
                "Explore the unique culture, traditions, clothing and lifestyle of Kalash people",
                "Photography and sightseeing in the valley",
                "Optional visit to Rumbur Valley, another beautiful Kalash village",
                "Free evening time",
                "Dinner & overnight stay in Bumburate",
              ]}
              styles={styles}
            />

            <DayCard
              icon="▣"
              day="DAY 5"
              image="/images/isbfree.webp"
              items={[
                "Breakfast early morning",
                "Departure from Bumburate for Islamabad",
                "Long drive back with short stops on the way",
                "Arrival at designated drop-off point in Islamabad",
                "End of tour services with satisfied clients",
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
                <li className={styles.check}>4x4 jeeps where required</li>
                <li className={styles.check}>Hotel accommodations as per policy</li>
                <li className={styles.check}>Half-board meals: Breakfast & Dinner</li>
                <li className={styles.check}>Pick and drop from station / designated point</li>
                <li className={styles.check}>Professional tour manager / guide</li>
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
                <span className={styles.smallIcon}>◎</span> TERMS & CONDITIONS
              </h3>
              <ul>
                <li>Minimum 50% of total amount is required at the time of booking.</li>
                <li>Remaining amount must be cleared one day before departure.</li>
                <li>Participants must carry valid CNIC / Passport Card.</li>
                <li>Registration deadline: 15 days before departure.</li>
                <li>Cancellation accepted before 72 hours of departure.</li>
                <li>80% of paid amount will be refunded in case of valid cancellation.</li>
                <li>Booking slip will be provided by the tour operator.</li>
              </ul>
            </div>

            <div className={styles.smallPanel}>
              <h3>
                <span className={styles.smallIcon}>▣</span> PAYMENT DETAILS
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
                <li>Breathtaking Mountain Scenery</li>
                <li>Rich Kalash Culture</li>
                <li>Historic Chitral Heritage</li>
                <li>Garam Chashma Hot Springs</li>
                <li>Shandur Polo Ground</li>
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

      <MediumImagePopup imageSrc={image} alt={`${day} Image`}>
        <img className={styles.dayImg} src={image} alt={day} />
      </MediumImagePopup>
    </article>
  );
}