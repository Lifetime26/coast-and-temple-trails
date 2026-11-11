import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  Phone, MessageCircle, Plane, Languages, Sparkles, BadgeCheck, Clock, MapPin, Star, Users,
  Car, Menu, X, ArrowRight, ChevronLeft, ChevronRight,
  Route as RouteIcon, Map, Building2,
} from "lucide-react";
import hero from "@/assets/hero-coastal-drive-branded.jpg";
import sMurudeshwara from "@/assets/slide-murudeshwara.jpg";
import sUdupi from "@/assets/slide-udupi-malpe.jpg";
import sKollur from "@/assets/slide-kollur.jpg";
import sCoorg from "@/assets/slide-coorg.jpg";
import sDharmasthala from "@/assets/slide-dharmasthala.jpg";
import sBeach from "@/assets/slide-mangaluru-beach.jpg";
import dTannirbhavi from "@/assets/dest-tannirbhavi.jpg";
import dKadri from "@/assets/dest-kadri.jpg";
import dAloysius from "@/assets/dest-aloysius.jpg";
import dUdupi from "@/assets/dest-udupi.jpg";
import dKollur from "@/assets/dest-kollur.jpg";
import dMurudeshwara from "@/assets/dest-murudeshwara.jpg";
import dCoorg from "@/assets/dest-coorg.jpg";
import fSedan from "@/assets/fleet-sedan.jpg";
import fSuv from "@/assets/fleet-suv.jpg";
import fTempo from "@/assets/fleet-tempo.jpg";
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
  { img: fSedan, name: "Sedans", models: "Swift Dzire / Toyota Etios", pax: "4 Passengers", use: "Local rides & airport transfers", specs: ["AC", "2 bags", "Fuel efficient"] },
  { img: fSuv, name: "SUVs", models: "Ertiga / Innova / Innova Crysta", pax: "6–7 Passengers", use: "Family trips & outstation tours", specs: ["AC", "Spacious luggage", "Comfort seats"] },
  { img: fTempo, name: "Tempo Travellers", models: "12 / 17 / 26 Seaters", pax: "12–26 Passengers", use: "Groups, weddings & temple yatras", specs: ["Push-back seats", "AC", "Music system"] },
];

type Cat = "temple" | "coastal" | "outstation";
const packages: { cat: Cat; title: string; places: string }[] = [
  { cat: "temple", title: "Kollur Mookambika Darshan", places: "Kollur Mookambika Temple, Kodachadri view, Maravanthe Beach" },
  { cat: "temple", title: "Murudeshwara Shiva Yatra", places: "Murudeshwara Temple & Statue, Idagunji Ganapati, Bhatkal" },
  { cat: "temple", title: "Dharmasthala & Kukke Subrahmanya", places: "Sri Manjunatha Temple, Kukke Subrahmanya Temple, Sowthadka" },
  { cat: "temple", title: "Udupi Krishna Temple Tour", places: "Udupi Sri Krishna Matha, Malpe Beach, Manipal" },
  { cat: "coastal", title: "Mangaluru City & Beaches", places: "Panambur Beach, Tannirbhavi Beach, Sultan Battery" },
  { cat: "coastal", title: "Heritage & Temples of Mangaluru", places: "St. Aloysius Chapel, Mangaladevi Temple, Kadri Manjunatha" },
  { cat: "outstation", title: "Coorg Hill Station Getaway", places: "Abbey Falls, Raja's Seat, Dubare, Golden Temple Bylakuppe" },
  { cat: "outstation", title: "Chikmagalur Coffee Trails", places: "Mullayanagiri, Baba Budangiri, Hebbe Falls, coffee estates" },
  { cat: "outstation", title: "Bekal Fort & Kerala Coast", places: "Bekal Fort, Kappil Beach, Ananthapura Lake Temple" },
];
const tabs: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "temple", label: "Temple Yatras" },
  { id: "coastal", label: "Coastal & Beach" },
  { id: "outstation", label: "Outstation & Hills" },
];

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
  return (
    <header className="sticky top-0 z-50 bg-navy-deep text-primary-foreground shadow-lg">
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

const SLIDE_MS = 6500;

type Slide = { img: string; tag: string; title: [string, string]; text: string; brand?: boolean };
const slides: Slide[] = [
  { img: hero, tag: "Mangaluru · 24/7 Cabs", title: ["Your Journey,", "Our Priority"], text: "Mangaluru-based cab service for local rides, airport transfers, outstation trips and custom tours to tourist places across Karnataka.", brand: true },
  { img: sMurudeshwara, tag: "Bhatkal · Temple Yatra", title: ["Murudeshwara", "Shiva Yatra"], text: "The towering Shiva statue and Raja Gopura on the Arabian Sea, with stops at Idagunji Ganapati and Bhatkal." },
  { img: sUdupi, tag: "Udupi · Temple & Beach", title: ["Udupi Krishna Temple", "& Malpe Beach"], text: "Darshan at Sri Krishna Matha, sunset at Malpe Beach and a drive through Manipal." },
  { img: sKollur, tag: "Kollur · Temple Yatra", title: ["Kollur Mookambika", "Darshan"], text: "The Mookambika Temple in the Western Ghats, with Kodachadri views and Maravanthe Beach on the way." },
  { img: sCoorg, tag: "Kodagu · Hill Station", title: ["Coorg Hills", "& Coffee"], text: "Misty coffee estates, Abbey Falls, Raja's Seat and Dubare — a cool escape from the coast." },
  { img: sDharmasthala, tag: "Temple Yatra · Day Trip", title: ["Dharmasthala &", "Kukke Subrahmanya"], text: "Sri Manjunatha Temple at Dharmasthala and Kukke Subrahmanya Temple in one comfortable trip." },
  { img: sBeach, tag: "Mangaluru · Coastal Tour", title: ["Mangaluru City", "& Beaches"], text: "Panambur and Tannirbhavi beaches, Sultan Battery and the best of the city by the sea." },
];

const pad = (n: number) => String(n).padStart(2, "0");

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = slides.length;
  const go = (i: number) => setActive(((i % n) + n) % n);
  const s = slides[active] as Slide;
  const upcoming = Array.from({ length: n - 1 }, (_, k) => (active + 1 + k) % n);
  const name = s.title.join(" ");
  const msg = s.brand ? `Hi ${BRAND}, I'd like to book a cab.` : `Hi ${BRAND}, I'm interested in the "${name}" trip. Please share the details.`;

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Popular trips from Mangaluru"
      className="relative isolate flex min-h-[calc(100svh-80px)] scroll-mt-20 items-end overflow-clip md:items-center bg-navy-deep text-primary-foreground md:min-h-[calc(100svh-93px)]"
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
      <h1 className="sr-only">{BRAND} – Your Journey, Our Priority</h1>
      {slides.map((sl, i) => (
        <img
          key={sl.img}
          src={sl.img}
          alt=""
          aria-hidden
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center] transition-[opacity,transform] duration-[1400ms] ease-out lg:object-center ${i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40 lg:bg-gradient-to-r lg:from-navy-deep/95 lg:via-navy-deep/60 lg:to-navy-deep/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/2 bg-gradient-to-t from-navy-deep/90 to-transparent lg:block" />

      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 pb-5 pt-8 sm:px-6 md:gap-8 md:pb-20 md:pt-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-end lg:gap-10 lg:px-8 lg:py-16">
        <div key={active} aria-live="polite" className="min-w-0 max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-700 lg:pb-24">
          <span className="block h-0.5 w-10 bg-gold" />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-gold sm:text-sm">{s.tag}</p>
          <p className="mt-3 font-display text-4xl font-bold leading-[1.08] sm:text-5xl xl:text-6xl">
            {s.title[0]}<br /><span className="text-gold">{s.title[1]}</span>
          </p>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/85 sm:text-base">{s.text}</p>
          <div className="mt-6 hidden flex-wrap items-center gap-3 md:flex">
            <a href={wa(msg)} {...ext} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-gold-foreground shadow-float transition hover:brightness-105">
              <MessageCircle className="h-4 w-4" /> {s.brand ? "Book on WhatsApp" : "Enquire on WhatsApp"}
            </a>
            <a href={callLink} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-5 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold">
              <Phone className="h-4 w-4" /> Call {CALL_NUMBER.slice(0, 5)} {CALL_NUMBER.slice(5)}
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <ul key={active} className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:mx-0 lg:gap-4 lg:overflow-visible lg:px-0">
            {upcoming.map((i, k) => {
              const c = slides[i] as Slide;
              return (
                <li key={i} className="shrink-0 snap-start animate-in fade-in slide-in-from-right-8 fill-mode-both duration-700" style={{ animationDelay: `${k * 80}ms` }}>
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Show ${c.title.join(" ")}`}
                    className="group relative block h-40 w-28 overflow-hidden rounded-2xl text-left shadow-float ring-1 ring-primary-foreground/15 transition hover:-translate-y-1 hover:ring-gold sm:h-48 sm:w-36 lg:h-64 lg:w-44 xl:h-72 xl:w-48"
                  >
                    <img src={c.img} alt="" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                    <span className="absolute inset-x-0 bottom-0 p-3 lg:p-4">
                      <span className="block line-clamp-2 text-[10px] font-semibold uppercase tracking-wider text-gold lg:text-[11px]">{c.tag}</span>
                      <span className="mt-1 block font-display text-xs font-bold leading-tight text-primary-foreground sm:text-sm lg:text-base">{c.title.join(" ")}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-5 flex items-center gap-3 pr-16 sm:gap-4 md:mt-6 md:pr-0 lg:mt-8">
            <button type="button" onClick={() => go(active - 1)} aria-label="Previous trip" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/40 transition hover:border-gold hover:text-gold sm:h-12 sm:w-12">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Next trip" className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-primary-foreground/40 transition hover:border-gold hover:text-gold sm:h-12 sm:w-12">
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="relative h-0.5 min-w-0 flex-1 overflow-hidden rounded-full bg-primary-foreground/25">
              <span
                key={active}
                onAnimationEnd={() => go(active + 1)}
                className="absolute inset-0 origin-left bg-gold"
                style={{ animation: `hero-progress ${SLIDE_MS}ms linear forwards`, animationPlayState: paused ? "paused" : "running" }}
              />
            </div>
            <p className="shrink-0 font-display font-bold tabular-nums" aria-label={`Slide ${active + 1} of ${n}`}>
              <span className="text-3xl sm:text-4xl">{pad(active + 1)}</span>
              <span className="text-sm text-primary-foreground/60"> / {pad(n)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingContacts() {
  const msg = `Hi ${BRAND}, I'd like to book a cab.`;
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:gap-3 sm:bottom-6 sm:right-6">
      <a href={wa(msg)} {...ext} aria-label={`Chat with us on WhatsApp ${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-whatsapp p-3 text-sm font-bold text-primary-foreground shadow-float transition hover:brightness-105 sm:px-5 sm:py-3">
        <MessageCircle className="h-5 w-5" /><span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a href={callLink} aria-label={`Call us on ${CALL_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-gold p-3 text-sm font-bold text-gold-foreground shadow-float transition hover:brightness-105 sm:px-5 sm:py-3">
        <Phone className="h-5 w-5" /><span className="hidden sm:inline">Call Now</span>
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
        <SectionTitle center kicker="Our Cabs" title="The Right Vehicle for Every Trip" sub="Clean, air-conditioned vehicles driven by experienced local drivers." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {fleet.map((f) => (
            <article key={f.name} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-float">
              <div className="relative bg-card px-6 pt-6">
                <img src={f.img} alt={`${f.name} – ${f.models}`} loading="lazy" width={1024} height={656} className="mx-auto h-40 w-auto object-contain" />
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground"><Users className="h-3.5 w-3.5" />{f.pax}</span>
              </div>
              <div className="flex flex-1 flex-col border-t border-border p-6">
                <h3 className="font-display text-xl font-bold text-primary">{f.name}</h3>
                <p className="text-sm font-semibold">{f.models}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.use}</p>
                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">{f.specs.map((s) => <li key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{s}</li>)}</ul>
                <GoldLink href={wa(`Hi ${BRAND}, I'd like to book a ${f.name.slice(0, -1)} (${f.models}). Please share availability and a quote.`)} className="mt-5 w-fit">Book Now</GoldLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const [tab, setTab] = useState<"all" | Cat>("all");
  const list = tab === "all" ? packages : packages.filter((p) => p.cat === tab);
  return (
    <section id="packages" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Tour Packages" title="Trips & Tours Across Karnataka" sub="Prices shared on enquiry – tell us your dates and group size on WhatsApp." />
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
