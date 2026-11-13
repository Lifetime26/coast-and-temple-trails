import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Phone, MessageCircle, Plane, Languages, Sparkles, BadgeCheck, Clock, MapPin, Star, Users,
  Car, Menu, X, ArrowRight, Briefcase, Snowflake, Check,
  Route as RouteIcon, Map, Building2,
} from "lucide-react";
import sMurudeshwara from "@/assets/slide-murudeshwara.jpg";
import sUdupi from "@/assets/slide-udupi-malpe.jpg";
import sKollur from "@/assets/slide-kollur.jpg";
import sCoorg from "@/assets/slide-coorg.jpg";
import sDharmasthala from "@/assets/slide-dharmasthala.jpg";
import sBeach from "@/assets/slide-mangaluru-beach.jpg";
import sGokarna from "@/assets/slide-gokarna.jpg";
import sHampi from "@/assets/slide-hampi.jpg";
import sJog from "@/assets/slide-jog-falls.jpg";
import sBandipur from "@/assets/slide-bandipur.jpg";
import sMysore from "@/assets/slide-mysore.jpg";
import sChikkamagaluru from "@/assets/slide-chikkamagaluru.jpg";
import tBeach from "@/assets/thumb-mangaluru-beach.jpg";
import tUdupi from "@/assets/thumb-udupi-malpe.jpg";
import tKollur from "@/assets/thumb-kollur.jpg";
import tMurudeshwara from "@/assets/thumb-murudeshwara.jpg";
import tGokarna from "@/assets/thumb-gokarna.jpg";
import tDharmasthala from "@/assets/thumb-dharmasthala.jpg";
import tHampi from "@/assets/thumb-hampi.jpg";
import tJog from "@/assets/thumb-jog-falls.jpg";
import tBandipur from "@/assets/thumb-bandipur.jpg";
import tMysore from "@/assets/thumb-mysore.jpg";
import tCoorg from "@/assets/thumb-coorg.jpg";
import tChikkamagaluru from "@/assets/thumb-chikkamagaluru.jpg";
import dTannirbhavi from "@/assets/dest-tannirbhavi.jpg";
import dKadri from "@/assets/dest-kadri.jpg";
import dAloysius from "@/assets/dest-aloysius.jpg";
import dUdupi from "@/assets/dest-udupi.jpg";
import dKollur from "@/assets/dest-kollur.jpg";
import dMurudeshwara from "@/assets/dest-murudeshwara.jpg";
import dCoorg from "@/assets/dest-coorg.jpg";
import fSedan from "@/assets/fleet-sedan.jpg";
import fSuv from "@/assets/fleet-suv.jpg";
import vDzire from "@/assets/fleet-dzire.jpg";
import vErtiga from "@/assets/fleet-ertiga.jpg";
import vInnova from "@/assets/fleet-innova.jpg";
import vTempo from "@/assets/fleet-tempo-traveller.jpg";
import { BRAND, CALL_NUMBER, WHATSAPP_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangalore Travel Cabs – Your Journey, Our Priority | 24/7 Cab Service from Mangaluru" },
      { name: "description", content: "Mangaluru-based cab service open 24/7 – local rides, IXE airport transfers, outstation trips and custom tour packages to tourist places across Karnataka. Call 8073565608." },
      { property: "og:title", content: "Mangalore Travel Cabs And Taxi Services" },
      { property: "og:description", content: "Local rides, airport transfers, outstation trips and temple & beach tours from Mangaluru to tourist places across Karnataka – book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav: [string, string][] = [
  ["Home", "#home"], ["About Us", "#about"], ["Our Cabs", "#cabs"],
  ["Tour Packages", "#packages"], ["Places to Visit", "#places"], ["Contact", "#contact"],
];

const services = [
  { icon: Car, img: fSedan, t: "Local City Rides", d: "Quick & comfortable rides within the city and nearby areas." },
  { icon: Plane, img: fSedan, t: "Airport Transfers", d: "Timely pickup & drop to Mangaluru International Airport (IXE)." },
  { icon: RouteIcon, img: fSuv, t: "Outstation Trips", d: "One-way and round trips to towns across Karnataka." },
  { icon: Map, img: dTannirbhavi, t: "Custom Tour Packages", d: "Discover the best of Karnataka with our curated tours.", round: true },
];

const destinations = [
  { img: dTannirbhavi, t: "Tannirbhavi Beach", loc: "Mangalore" },
  { img: dKadri, t: "Kadri Manjunath Temple", loc: "Mangalore" },
  { img: dAloysius, t: "St. Aloysius Chapel", loc: "Mangalore" },
  { img: dUdupi, t: "Udupi Krishna Temple", loc: "Udupi" },
  { img: dKollur, t: "Kollur Mookambika", loc: "Kollur" },
  { img: dMurudeshwara, t: "Murudeshwara", loc: "Bhatkal" },
  { img: dCoorg, t: "Coorg", loc: "Kodagu" },
];

const fleet = [
  { img: vDzire, name: "Swift Dzire / Etios", short: "Sedan", type: "1 – 4 Seater Comfort Sedan", guests: "1 – 4", bags: "2 Large", ac: "Chilled AC", extra: "Smooth Ride", desc: "Comfortable and fuel-efficient for city rides, airport transfers and short sightseeing trips." },
  { img: vErtiga, name: "Maruti Suzuki Ertiga", short: "Ertiga", type: "5 – 6 Seater Family MPV", guests: "5 – 6", bags: "2 Medium", ac: "Roof Rear AC", extra: "Foldable Row", desc: "Reliable 3-row comfort for small families on temple trips and coastal sightseeing." },
  { img: vInnova, name: "Toyota Innova Crysta", short: "Innova Crysta", type: "6 – 7 Seater Prime MPV", guests: "6 – 7", bags: "3 Large", ac: "Dual AC Vents", extra: "Captain Seats", desc: "Smooth on Western Ghats hairpin bends — ideal for family yatras and long outstation journeys." },
  { img: vTempo, name: "Force Tempo Traveller", short: "Tempo Traveller", type: "12 Seater Mini Coach", guests: "Up to 12", bags: "Roof Carrier", ac: "High Roof AC", extra: "Push-back Seats", desc: "Roomy mini coach that keeps joint families, pilgrim groups and wedding parties together." },
];

type Cat = "temple" | "coastal" | "outstation" | "beyond";
const packages: { cat: Cat; title: string; places: string }[] = [
  { cat: "temple", title: "Kollur Mookambika Darshan", places: "Kollur Mookambika Temple, Kodachadri Hills view, Souparnika River, Arishina Gundi Falls, Maravanthe Beach" },
  { cat: "temple", title: "Murudeshwara Shiva Yatra", places: "Murudeshwara Temple & Shiva Statue, Netrani Island, Idagunji Ganapati, beach visit" },
  { cat: "temple", title: "Udupi Krishna Temple Tour", places: "Udupi Sri Krishna Matha, Malpe Beach, Kaup Lighthouse, St. Mary's Island, Manipal" },
  { cat: "temple", title: "Dharmasthala Manjunatha Darshan", places: "Sri Manjunatha Temple, Bahubali Statue, Vintage Car Museum, Netravathi River" },
  { cat: "temple", title: "Kukke Subrahmanya Yatra", places: "Kukke Subrahmanya Temple, Kumara Parvatha Trek, Biladwara Cave, Matsya Tirtha" },
  { cat: "temple", title: "Dharmasthala & Kukke Subrahmanya Circuit", places: "Sri Manjunatha Temple, Kukke Subrahmanya Temple, Sowthadka" },
  { cat: "temple", title: "Sringeri Sharadamba Yatra", places: "Sharadamba Temple, Vidyashankara Temple, Tunga River, Sirimane Falls" },
  { cat: "temple", title: "Horanadu Annapoorneshwari Yatra", places: "Annapoorneshwari Temple, Kyatanamakki, Kalasa, Kudremukh" },
  { cat: "coastal", title: "Mangaluru City & Beaches", places: "Panambur Beach, Tannirbhavi Beach, Sultan Battery" },
  { cat: "coastal", title: "Heritage & Temples of Mangaluru", places: "St. Aloysius Chapel, Mangaladevi Temple, Kadri Manjunatha" },
  { cat: "coastal", title: "Gokarna Temples & Beaches", places: "Mahabaleshwar Temple, Om Beach, Kudle Beach, Half Moon Beach" },
  { cat: "outstation", title: "Coorg Hill Station Getaway", places: "Coffee plantations, Abbey Falls, Raja's Seat, Dubare Elephant Camp, Golden Temple Bylakuppe" },
  { cat: "outstation", title: "Chikmagalur Coffee Trails", places: "Mullayanagiri Peak, Baba Budangiri, Coffee Museum, Kemmangundi, Hebbe Falls" },
  { cat: "outstation", title: "Mysore Royal Heritage", places: "Mysore Palace, Chamundi Hill, Brindavan Gardens, Mysore Zoo" },
  { cat: "outstation", title: "Hampi Ancient Ruins", places: "Virupaksha Temple, Vittala Temple & Stone Chariot, Hemakuta Hill, Tungabhadra River" },
  { cat: "outstation", title: "Jog Falls & Sharavathi Valley", places: "Jog Falls viewpoints, Sharavathi Valley, Linganamakki Dam" },
  { cat: "outstation", title: "Bandipur Tiger Safari", places: "Bandipur National Park jungle safari, Gopalaswamy Betta, wildlife reserve" },
  { cat: "beyond", title: "Goa Beaches & Heritage", places: "Baga Beach, Basilica of Bom Jesus, Dudhsagar Falls, Fort Aguada" },
  { cat: "beyond", title: "Bekal Fort & Kerala Coast", places: "Bekal Fort, Kappil Beach, Ananthapura Lake Temple" },
  { cat: "beyond", title: "Wayanad Forests & Hills", places: "Edakkal Caves, Chembra Peak, Banasura Sagar Dam, Soochipara Falls" },
  { cat: "beyond", title: "Munnar Tea Hills", places: "Tea gardens, Mattupetty Dam, Eravikulam National Park, Echo Point" },
  { cat: "beyond", title: "Thekkady Wildlife Escape", places: "Periyar Wildlife Sanctuary, spice plantation tour, bamboo rafting, elephant rides" },
  { cat: "beyond", title: "Alleppey Backwaters", places: "Houseboat cruise, Alappuzha Beach, Vembanad Lake, Marari Beach" },
  { cat: "beyond", title: "Ooty – Queen of Hill Stations", places: "Ooty Lake, Botanical Garden, Doddabetta Peak, Nilgiri Mountain Railway" },
  { cat: "beyond", title: "Kodaikanal Lakes & Valleys", places: "Kodaikanal Lake, Coaker's Walk, Bryant Park, Pillar Rocks" },
  { cat: "beyond", title: "Valparai Tea Estates", places: "Tea estates, Sholayar Dam, Aliyar Dam, Monkey Falls" },
  { cat: "beyond", title: "Tirupati Balaji Darshan", places: "Sri Venkateswara Temple, Padmavathi Temple, Silathoranam, Kapila Theertham" },
  { cat: "beyond", title: "Mantralayam Raghavendra Yatra", places: "Raghavendra Swamy Mutt, Panchamukhi Anjaneya Temple, Tungabhadra River, Manchalamma Temple" },
  { cat: "beyond", title: "Rameshwaram Temple Tour", places: "Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge, Agni Theertham" },
  { cat: "beyond", title: "Kanyakumari Sunrise Tour", places: "Vivekananda Rock Memorial, Thiruvalluvar Statue, Kanyakumari Beach, Padmanabhapuram Palace" },
];
const tabs: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "temple", label: "Temple Yatras" },
  { id: "coastal", label: "Coastal & Beach" },
  { id: "outstation", label: "Outstation & Hills" },
  { id: "beyond", label: "Beyond Karnataka" },
];
const PACKAGES_PREVIEW = 9;

const features = [
  { icon: Plane, t: "24/7 Airport Transfers", d: "On-time pickups & drops at Mangaluru International Airport (IXE), day or night." },
  { icon: Languages, t: "Experienced Local Drivers", d: "Courteous drivers fluent in Tulu, Kannada, English and Hindi." },
  { icon: Sparkles, t: "Clean, Sanitized AC Cars", d: "Every vehicle cleaned and sanitized before each trip." },
  { icon: BadgeCheck, t: "Transparent Quotes", d: "Clear pricing shared upfront on WhatsApp – zero hidden charges." },
];

const reviews = [
  { n: "Ramesh K.", p: "Bengaluru", t: "Driver was waiting at IXE before our flight landed. Very punctual and the Innova was spotless." },
  { n: "Priya Shetty", p: "Udupi", t: "Did Kollur, Murudeshwara and Udupi in one trip. Polite driver who knew every temple timing. Highly recommend!" },
  { n: "Anil Menon", p: "Kochi", t: "Booking on WhatsApp took two minutes. Clear quote, no surprises, smooth Coorg trip with family." },
  { n: "Fathima R.", p: "Mangaluru", t: "Booked a Tempo Traveller for 15 people to Dharmasthala. Clean vehicle and very safe driving." },
];

const coverage = ["Mangaluru & Nearby", "Udupi & Manipal", "Kollur & Murudeshwara", "Coorg & Chikmagalur", "Across Karnataka"];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label={BRAND}>
      <svg viewBox="0 0 48 40" className={`${small ? "h-9 w-11" : "h-11 w-13"} shrink-0`} aria-hidden>
        <path d="M8 26a16 16 0 0 1 32 0Z" className="fill-gold" />
        <path d="M2 28c6-4 10 4 16 0s10 4 16 0 8 3 12 1" className="stroke-primary-foreground" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M6 34c6-4 10 4 16 0s10 4 16 0" className="stroke-primary-foreground/70" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <span className="min-w-0 leading-none">
        <span className={`block font-display font-bold text-primary-foreground ${small ? "text-base" : "text-lg sm:text-xl"}`}>Mangalore</span>
        <span className={`block font-display font-bold text-gold ${small ? "text-base" : "text-lg sm:text-xl"}`}>Travel Cabs</span>
        <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70 sm:block">Safe • Comfortable • On Time</span>
      </span>
    </a>
  );
}

function GoldLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} {...ext} className={`inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-gold-foreground transition hover:brightness-105 ${className}`}>
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}

function SectionTitle({ kicker, title, sub, center, light }: { kicker: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{kicker}</p>
      <h2 className={`mt-2 font-display text-2xl font-bold sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-sm sm:text-base ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans text-foreground">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Fleet />
      <Packages />
      <About />
      <Reviews />
      <ContactForm />
      <Footer />
      <FloatingContacts />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 text-primary-foreground transition-[background-color,box-shadow] duration-300 ${solid ? "bg-navy-deep shadow-lg" : "bg-gradient-to-b from-navy-deep/80 via-navy-deep/30 to-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium xl:flex">
          {nav.map(([l, h], i) => (
            <a key={h} href={h} className={`transition hover:text-gold ${i === 0 ? "border-b-2 border-gold pb-0.5 text-gold" : "text-primary-foreground/90"}`}>{l}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <a href={callLink} aria-label={`Call ${CALL_NUMBER}`} className="inline-flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold text-gold"><Phone className="h-4 w-4" /></span>
            <span className="hidden md:inline">+91 {CALL_NUMBER.slice(0, 5)} {CALL_NUMBER.slice(5)}</span>
          </a>
          <a href={wa(`Hi ${BRAND}, I'd like to book a cab.`)} {...ext} className="hidden rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground transition hover:brightness-105 sm:inline-flex">Book a Cab</a>
          <button aria-label="Menu" className="xl:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-primary-foreground/10 px-4 pb-4 xl:hidden">
          {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2.5 font-medium hover:text-gold">{l}</a>)}
          <a href={wa(`Hi ${BRAND}, I'd like to book a cab.`)} {...ext} className="mt-2 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground sm:hidden">Book a Cab</a>
        </nav>
      )}
    </header>
  );
}

const SLIDE_MS = 6000;

type Slide = { img: string; thumb: string; place: string; sub: string };
const slides: Slide[] = [
  { img: sBeach, thumb: tBeach, place: "Mangaluru", sub: "Coastal City" },
  { img: sUdupi, thumb: tUdupi, place: "Udupi", sub: "Temple Town" },
  { img: sKollur, thumb: tKollur, place: "Kollur", sub: "Mookambika Temple" },
  { img: sMurudeshwara, thumb: tMurudeshwara, place: "Murudeshwara", sub: "Coastal Karnataka" },
  { img: sGokarna, thumb: tGokarna, place: "Gokarna", sub: "Beaches & Temples" },
  { img: sDharmasthala, thumb: tDharmasthala, place: "Dharmasthala", sub: "Temple Yatra" },
  { img: sHampi, thumb: tHampi, place: "Hampi", sub: "Ancient Ruins" },
  { img: sJog, thumb: tJog, place: "Jog Falls", sub: "Sharavathi Waterfalls" },
  { img: sBandipur, thumb: tBandipur, place: "Bandipur", sub: "Tiger Safari" },
  { img: sMysore, thumb: tMysore, place: "Mysore", sub: "Heritage City" },
  { img: sCoorg, thumb: tCoorg, place: "Coorg", sub: "Misty Hills" },
  { img: sChikkamagaluru, thumb: tChikkamagaluru, place: "Chikkamagaluru", sub: "Coffee Country" },
];

// Position of each circle on the right-hand wheel, by distance from the active slide.
const WHEEL: Record<number, { x: number; y: number; size: number; opacity: number }> = {
  0: { x: 0, y: 0, size: 176, opacity: 1 },
  1: { x: -30, y: 142, size: 96, opacity: 1 },
  2: { x: -58, y: 258, size: 96, opacity: 0.9 },
  3: { x: -80, y: 340, size: 80, opacity: 0 },
};

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0, 1]));
  const touchX = useRef<number | null>(null);
  const n = slides.length;
  const go = (i: number) => setActive(((i % n) + n) % n);
  const s = slides[active] as Slide;
  const offset = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  useEffect(() => {
    setSeen((prev) => (prev.has(active) && prev.has((active + 1) % n) ? prev : new Set([...prev, active, (active + 1) % n])));
    if (paused) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % n), SLIDE_MS);
    return () => window.clearTimeout(t);
  }, [active, paused, n]);

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Popular places we drive to from Mangaluru"
      className="relative isolate flex min-h-svh scroll-mt-20 items-end overflow-clip bg-navy-deep text-primary-foreground lg:items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false); }}
      onTouchStart={(e) => { touchX.current = e.touches[0]?.clientX ?? null; setPaused(true); }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        touchX.current = null;
        setPaused(false);
        if (start === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? start) - start;
        if (Math.abs(dx) > 50) go(active + (dx < 0 ? 1 : -1));
      }}
    >
      {slides.map((sl, i) =>
        seen.has(i) || i === active ? (
          <img
            key={sl.img}
            src={sl.img}
            alt=""
            aria-hidden
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out ${i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
          />
        ) : null,
      )}
      <div className="absolute inset-0 -z-10 bg-navy-deep/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent lg:bg-gradient-to-r lg:from-navy-deep/85 lg:via-navy-deep/35 lg:to-transparent" />

      <div className="mx-auto w-full max-w-screen-2xl px-5 pb-6 pt-28 sm:px-6 lg:px-12 lg:pb-16 lg:pt-32 xl:px-16">
        <div className="max-w-2xl lg:max-w-[48%] 2xl:max-w-3xl">
          <p key={active} aria-live="polite" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-navy-deep/40 px-4 py-2 text-sm backdrop-blur-md animate-in fade-in slide-in-from-left-4 duration-500 sm:px-5 sm:py-2.5 sm:text-base">
            <MapPin className="h-4 w-4 text-gold sm:h-5 sm:w-5" />
            <span className="font-bold">{s.place}</span>
            <span className="text-primary-foreground/75">· {s.sub}</span>
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Taxi Service in Mangaluru for <span className="text-gold">Local &amp; Outstation Travel</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm text-primary-foreground/85 sm:text-lg">
            Private cab rides, airport transfers and tour packages to tourist places across Karnataka — planned around your dates, your group and your pace.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#packages" className="inline-flex items-center gap-2 rounded-xl bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-float transition hover:brightness-105 sm:text-base">
              Explore Packages <ArrowRight className="h-4 w-4" />
            </a>
            <a href={wa(`Hi ${BRAND}, I'd like to book a cab to ${s.place}. Please share the details.`)} {...ext} className="hidden items-center gap-2 rounded-xl border border-primary-foreground/40 bg-navy-deep/40 px-6 py-3 text-base font-semibold backdrop-blur-md transition hover:border-gold hover:text-gold md:inline-flex">
              <MessageCircle className="h-4 w-4" /> Book a Cab to {s.place}
            </a>
          </div>
        </div>

        {/* Phone & tablet: row of round place photos */}
        <ul className="mr-14 mt-8 flex snap-x gap-3 overflow-x-auto px-1 py-1.5 [scrollbar-width:none] sm:mr-16 lg:hidden">
          {slides.map((c, i) => (
            <li key={c.place} className="shrink-0 snap-start">
              <button type="button" onClick={() => go(i)} aria-label={`Show ${c.place}`} aria-current={i === active} className="flex w-16 flex-col items-center gap-1.5 text-center">
                <span className={`block h-14 w-14 overflow-hidden rounded-full border-2 transition ${i === active ? "scale-110 border-gold" : "border-primary-foreground/60"}`}>
                  <img src={c.thumb} alt="" loading="lazy" width={360} height={360} className="h-full w-full object-cover" />
                </span>
                <span className={`line-clamp-1 text-[11px] font-semibold ${i === active ? "text-gold" : "text-primary-foreground/85"}`}>{c.place}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: wheel of round place photos */}
      <div className="absolute right-24 top-[calc(50%+40px)] hidden h-0 w-[380px] lg:block xl:right-28">
        {slides.map((c, i) => {
          const d = offset(i);
          const pos = WHEEL[Math.min(Math.abs(d), 3)] as (typeof WHEEL)[number];
          const visible = Math.abs(d) <= 2;
          const isActive = d === 0;
          return (
            <button
              key={c.place}
              type="button"
              onClick={() => go(i)}
              aria-label={`Show ${c.place}`}
              aria-current={isActive}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              className={`group absolute right-0 top-0 flex items-center gap-4 transition-all duration-700 ease-out ${visible ? "" : "pointer-events-none"}`}
              style={{ transform: `translate(${pos.x}px, calc(-50% + ${Math.sign(d) * pos.y}px))`, opacity: pos.opacity }}
            >
              <span className="text-right drop-shadow-md">
                <span className={`block font-display font-bold leading-tight transition-all duration-700 ${isActive ? "text-2xl text-gold" : "text-base group-hover:text-gold"}`}>{c.place}</span>
                <span className={`block text-primary-foreground/80 ${isActive ? "text-base" : "text-xs"}`}>{c.sub}</span>
              </span>
              <span
                className={`block shrink-0 overflow-hidden rounded-full border-[3px] shadow-float transition-all duration-700 ease-out ${isActive ? "border-gold" : "border-primary-foreground/80 group-hover:border-gold"}`}
                style={{ width: pos.size, height: pos.size }}
              >
                <img src={c.thumb} alt="" loading="lazy" width={360} height={360} className="h-full w-full object-cover" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Desktop: vertical dots */}
      <div className="absolute right-6 top-[calc(50%+40px)] hidden -translate-y-1/2 flex-col gap-2.5 lg:flex">
        {slides.map((c, i) => (
          <button
            key={c.place}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to ${c.place}`}
            className={`rounded-full transition-all duration-300 ${i === active ? "h-3.5 w-3.5 bg-gold" : "h-2.5 w-2.5 bg-primary-foreground/45 hover:bg-primary-foreground"}`}
          />
        ))}
      </div>
    </section>
  );
}

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function FloatingContacts() {
  const msg = `Hi ${BRAND}, I'd like to book a cab.`;
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:gap-3 sm:bottom-6 sm:right-6">
      <a href={wa(msg)} {...ext} aria-label={`Chat with us on WhatsApp ${WHATSAPP_NUMBER}`} className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-float transition hover:scale-105 sm:h-14 sm:w-14">
        <WhatsAppLogo className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a href={callLink} aria-label={`Call us on ${CALL_NUMBER}`} className="grid h-12 w-12 place-items-center rounded-full bg-gold text-gold-foreground shadow-float transition hover:scale-105 sm:h-14 sm:w-14">
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}

function Services() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="Our Services" title="Taxi & Cab Services from Mangaluru, Across Karnataka" sub="From city rides to long journeys, we've got you covered. Choose from a range of vehicles and travel options tailored to your needs." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map(({ icon: I, img, t, d, round }) => (
            <article key={t} className="flex flex-col items-center rounded-2xl border border-border bg-card p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-float sm:p-6">
              <div className="flex w-full items-center justify-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground"><I className="h-5 w-5" /></span>
                <img src={img} alt="" loading="lazy" width={1024} height={656} className={`h-14 w-24 object-cover sm:h-16 sm:w-28 ${round ? "rounded-full" : "object-contain"}`} />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold text-primary sm:text-lg">{t}</h3>
              <p className="mt-1.5 flex-1 text-xs text-muted-foreground sm:text-sm">{d}</p>
              <GoldLink href={wa(`Hi ${BRAND}, I'd like to book: ${t}. Please share details.`)} className="mt-4">Book Now</GoldLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  const [all, setAll] = useState(false);
  const list = all ? destinations : destinations.slice(0, 4);
  return (
    <section id="places" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-deep py-14 text-primary-foreground sm:py-16">
      <img src={dCoorg} alt="" loading="lazy" width={944} height={704} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start">
        <div>
          <SectionTitle light kicker="Explore Karnataka" title="Popular Destinations" sub="From pristine beaches to ancient temples and hill stations, let us take you to the best places across Karnataka." />
          <button onClick={() => setAll(!all)} className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            {all ? "Show Fewer" : "View All Destinations"} <ArrowRight className={`h-4 w-4 transition ${all ? "-rotate-90" : ""}`} />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {list.map((p) => (
            <a key={p.t} href={wa(`Hi ${BRAND}, I'd like to plan a trip to ${p.t}. Please share details.`)} {...ext} className="group overflow-hidden rounded-xl bg-card shadow-float">
              <div className="aspect-[4/3] overflow-hidden"><img src={p.img} alt={p.t} loading="lazy" width={944} height={704} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="px-3 py-2.5 text-center">
                <p className="truncate text-sm font-bold text-primary">{p.t}</p>
                <p className="mt-0.5 flex items-center justify-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3 text-gold" />{p.loc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  return (
    <section id="cabs" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="Our Travel Fleet" title="Recommended Vehicles for Your Karnataka Journeys" sub="Well-maintained cabs, spacious MPVs and group coaches driven by polite, route-experienced local drivers." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((f) => (
            <article key={f.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-float">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img src={f.img} alt={`${f.name} – ${f.type}`} loading="lazy" width={960} height={600} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold text-primary">{f.name}</h3>
                <p className="text-sm font-semibold text-navy-soft/80">{f.type}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2.5 rounded-xl bg-secondary p-3 text-xs text-primary">
                  <li className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 shrink-0 text-gold" /><span><b>{f.guests}</b> Guests</span></li>
                  <li className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 shrink-0 text-gold" /><span><b>{f.bags}</b>{f.bags.endsWith("Carrier") ? "" : " Bags"}</span></li>
                  <li className="flex items-center gap-1.5"><Snowflake className="h-3.5 w-3.5 shrink-0 text-gold" />{f.ac}</li>
                  <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 shrink-0 text-gold" />{f.extra}</li>
                </ul>
                <p className="mt-4 flex-1 text-sm text-muted-foreground">{f.desc}</p>
                <a href={wa(`Hi ${BRAND}, I'd like to book a ${f.name} (${f.type}). Please share availability and a quote.`)} {...ext} className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gold px-4 py-2.5 text-sm font-bold text-gold-foreground transition hover:brightness-105">
                  Book {f.short} <ArrowRight className="h-4 w-4" />
                </a>
                <a href={callLink} className="mt-3 text-center text-xs font-semibold text-muted-foreground transition hover:text-primary">Call to check availability →</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">Travelling with a bigger group? We also arrange 17 and 26-seater Tempo Travellers.</p>
          <a href={wa(`Hi ${BRAND}, I need a bigger vehicle (17 / 26-seater Tempo Traveller) for a group trip. Please share options and a quote.`)} {...ext} className="mt-2 inline-flex items-center gap-1.5 border-b-2 border-gold pb-0.5 text-sm font-bold text-primary transition hover:text-gold">
            Ask about group vehicles on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const [tab, setTab] = useState<"all" | Cat>("all");
  const [showAll, setShowAll] = useState(false);
  const filtered = tab === "all" ? packages : packages.filter((p) => p.cat === tab);
  const collapsed = tab === "all" && !showAll && filtered.length > PACKAGES_PREVIEW;
  const list = collapsed ? filtered.slice(0, PACKAGES_PREVIEW) : filtered;
  return (
    <section id="packages" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Tour Packages" title="Trips & Tours Across Karnataka & Beyond" sub="Prices shared on enquiry – tell us your dates and group size on WhatsApp." />
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${tab === t.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-gold"}`}>{t.label}</button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-float">
              <h3 className="font-display text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 flex flex-1 gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{p.places}</p>
              <GoldLink href={wa(`Hi ${BRAND}, I'm interested in the "${p.title}" package. Please share details and a quote.`)} className="mt-5 w-fit">Inquire on WhatsApp</GoldLink>
            </article>
          ))}
        </div>
        {tab === "all" && filtered.length > PACKAGES_PREVIEW && (
          <div className="mt-8 text-center">
            <button onClick={() => setShowAll((v) => !v)} className="rounded-full border border-primary px-6 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">
              {showAll ? "Show fewer packages" : `View all ${filtered.length} packages`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="About Us" title="Travel Easy with Local Experts" sub="A Mangaluru-based cab service open 24/7 – trusted by families, pilgrims and business travellers for trips across Karnataka." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 text-center">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-gold-foreground"><I className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-navy-soft py-16 text-primary-foreground sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center light kicker="Reviews" title="What Our Travellers Say" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <figure key={r.n} className="rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10">
              <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-3 text-sm text-primary-foreground/90">"{r.t}"</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{r.n} <span className="font-normal text-primary-foreground/60">· {r.p}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", pickup: "", dest: "", date: "", vehicle: "Sedan (Dzire / Etios)" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value.slice(0, 120) });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !/^[0-9+\s-]{7,15}$/.test(f.phone.trim()) || !f.pickup.trim() || !f.dest.trim()) {
      setErr("Please enter your name, a valid phone number, pickup and destination.");
      return;
    }
    setErr("");
    const msg = `Hi ${BRAND}, new trip inquiry:\n\nName: ${f.name.trim()}\nPhone: ${f.phone.trim()}\nPickup: ${f.pickup.trim()}\nDestination/Package: ${f.dest.trim()}\nTravel Date: ${f.date || "Flexible"}\nVehicle: ${f.vehicle}`;
    window.open(wa(msg), "_blank", "noopener,noreferrer");
  };
  const input = "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40";
  return (
    <section id="contact" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionTitle kicker="Contact" title="Book Your Ride in Minutes" sub="Share your trip details and we'll reply on WhatsApp with a clear quote." />
          <div className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            {[
              { icon: Phone, l: "Call Now", v: CALL_NUMBER, h: callLink },
              { icon: MessageCircle, l: "WhatsApp", v: WHATSAPP_NUMBER, h: wa(`Hi ${BRAND}`) },
              { icon: Clock, l: "Service Hours", v: "Open 24/7" },
              { icon: Building2, l: "Based in", v: "Mangaluru, Karnataka" },
            ].map(({ icon: I, l, v, h }) => (
              <div key={l} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground"><I className="h-5 w-5" /></span>
                <span className="min-w-0"><span className="block text-xs text-muted-foreground">{l}</span>
                  {h ? <a href={h} {...(h.startsWith("http") ? ext : {})} className="font-bold text-primary hover:text-gold">{v}</a> : <span className="font-bold text-primary">{v}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-card p-6 shadow-float sm:grid-cols-2">
          <label className="text-sm font-semibold text-primary">Name<input className={input} value={f.name} onChange={set("name")} required /></label>
          <label className="text-sm font-semibold text-primary">Phone Number<input type="tel" className={input} value={f.phone} onChange={set("phone")} required /></label>
          <label className="text-sm font-semibold text-primary">Pickup Location<input className={input} value={f.pickup} onChange={set("pickup")} placeholder="e.g. IXE Airport" required /></label>
          <label className="text-sm font-semibold text-primary">Destination / Package<input className={input} value={f.dest} onChange={set("dest")} placeholder="e.g. Kollur Mookambika" required /></label>
          <label className="text-sm font-semibold text-primary">Travel Date<input type="date" className={input} value={f.date} onChange={set("date")} /></label>
          <label className="text-sm font-semibold text-primary">Vehicle Type
            <select className={input} value={f.vehicle} onChange={set("vehicle")}>
              {["Sedan (Dzire / Etios)", "SUV (Ertiga / Innova / Crysta)", "Tempo Traveller (12 / 17 / 26 Seater)", "Not sure"].map((v) => <option key={v}>{v}</option>)}
            </select>
          </label>
          {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3.5 font-bold text-gold-foreground transition hover:brightness-105 sm:col-span-2">Send Inquiry on WhatsApp <ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep pb-28 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr_1fr]">
        <div>
          <Logo small />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">Mangaluru-based 24/7 taxi and tour service – trips to tourist places across Karnataka.</p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-gold">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-gold">Contact Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li><a href={callLink} className="flex items-center gap-2 hover:text-gold"><Phone className="h-4 w-4 text-gold" />+91 {CALL_NUMBER}</a></li>
            <li><a href={wa(`Hi ${BRAND}`)} {...ext} className="flex items-center gap-2 hover:text-gold"><MessageCircle className="h-4 w-4 text-gold" />+91 {WHATSAPP_NUMBER}</a></li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" />Open 24 hours, 7 days</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" />Mangaluru, Karnataka</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-gold">Coverage Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {coverage.map((c) => <li key={c} className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" />{c}</li>)}
          </ul>
        </div>
        <div className="flex items-center lg:justify-end">
          <p className="font-display text-xl font-semibold italic leading-snug text-gold">Ride Mangalore<br />with Confidence</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
          <p className="flex items-center gap-1.5"><MessageCircle className="h-3.5 w-3.5" />Bookings via WhatsApp {WHATSAPP_NUMBER} · Call {CALL_NUMBER}</p>
        </div>
      </div>
    </footer>
  );
}
