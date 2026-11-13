import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Phone, MessageCircle, Plane, Languages, Sparkles, BadgeCheck, Clock, Star,
  Car, ArrowRight, MapPin,
  Route as RouteIcon, Map, Building2,
} from "lucide-react";
import sMurudeshwara from "@/assets/murudeshwara.jpg";
import sUdupi from "@/assets/udupi.jpg";
import sKollur from "@/assets/kollur.jpg";
import sCoorg from "@/assets/coorg-tour.jpg";
import sDharmasthala from "@/assets/darmasthala-tour.jpg";
import sBeach from "@/assets/dest-beach.jpg";
import sGokarna from "@/assets/gokarna-tour.jpg";
import sHampi from "@/assets/hampi.jpg";
import sJog from "@/assets/jog-falls.jpg";
import sChik from "@/assets/chikamagaluru-tour.jpg";
import sMysore from "@/assets/mysore-tour.jpg";
import sBandipur from "@/assets/bandipur.jpg";
import tMurudeshwara from "@/assets/murudeshwara.jpg";
import tUdupi from "@/assets/udupi-mobile.jpg";
import tKollur from "@/assets/kollur-mobile.jpg";
import tCoorg from "@/assets/coorg-tour.jpg";
import tDharmasthala from "@/assets/darmasthala-tour.jpg";
import tBeach from "@/assets/dest-beach.jpg";
import tGokarna from "@/assets/gokarna-mobile.jpg";
import tHampi from "@/assets/hampi-mobile.jpg";
import tJog from "@/assets/jog-falls.jpg";
import tChik from "@/assets/chikamagaluru-tour.jpg";
import tMysore from "@/assets/mysore-tour.jpg";
import tBandipur from "@/assets/bandipur-mobile.jpg";
import dTannirbhavi from "@/assets/dest-beach.jpg";
import dCoorg from "@/assets/coorg-tour.jpg";
import fSedan from "@/assets/vehicle-sedan.jpg";
import fSuv from "@/assets/vehicle-suv.jpg";
import { BRAND, CALL_NUMBER, WHATSAPP_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";
import { SiteLayout, SectionTitle, GoldLink, DestinationCard, PackageCard, ext } from "@/components/SiteLayout";
import { destinations, packages } from "@/lib/places";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles } from "@/lib/fleet";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangalore Travel Cabs – Your Journey, Our Priority | 24/7 Taxi in Mangaluru" },
      { name: "description", content: "Reliable taxi and cab services in Mangalore for local rides, IXE airport transfers, outstation trips and custom tour packages. Call 8073565608." },
      { property: "og:title", content: "Mangalore Travel Cabs And Taxi Services" },
      { property: "og:description", content: "Local rides, airport transfers, outstation trips and temple & beach tours across Coastal Karnataka – book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Car, img: fSedan, t: "Local City Rides", d: "Quick & comfortable rides within Mangalore city." },
  { icon: Plane, img: fSedan, t: "Airport Transfers", d: "Timely pickup & drop to Mangaluru International Airport (IXE)." },
  { icon: RouteIcon, img: fSuv, t: "Outstation Trips", d: "Explore nearby and far destinations with ease." },
  { icon: Map, img: dTannirbhavi, t: "Custom Tour Packages", d: "Discover the best of Karnataka with our curated tours.", round: true },
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

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Services />
      <Destinations />
      <Fleet />
      <Packages />
      <About />
      <Reviews />
      <ContactForm />
    </SiteLayout>
  );
}

const SLIDE_MS = 4000;

type Slide = { img: string; thumb: string; place: string; sub: string };
const slides: Slide[] = [
  { img: sBeach, thumb: tBeach, place: "Mangaluru", sub: "City & Beaches" },
  { img: sMurudeshwara, thumb: tMurudeshwara, place: "Murudeshwara", sub: "Coastal Karnataka" },
  { img: sGokarna, thumb: tGokarna, place: "Gokarna", sub: "Beaches & Temples" },
  { img: sDharmasthala, thumb: tDharmasthala, place: "Dharmasthala", sub: "Temple Yatra" },
  { img: sHampi, thumb: tHampi, place: "Hampi", sub: "Ancient Ruins" },
  { img: sJog, thumb: tJog, place: "Jog Falls", sub: "Sharavathi Waterfalls" },
  { img: sUdupi, thumb: tUdupi, place: "Udupi", sub: "Krishna Temple & Malpe" },
  { img: sKollur, thumb: tKollur, place: "Kollur", sub: "Mookambika Temple" },
  { img: sCoorg, thumb: tCoorg, place: "Coorg", sub: "Hills & Coffee" },
  { img: sChik, thumb: tChik, place: "Chikkamagaluru", sub: "Coffee Hills" },
  { img: sMysore, thumb: tMysore, place: "Mysore", sub: "Palace City" },
  { img: sBandipur, thumb: tBandipur, place: "Bandipur", sub: "Wildlife Safari" },
];

const wrap = (i: number, n: number) => ((i % n) + n) % n;

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const n = slides.length;
  const go = (i: number) => setActive(wrap(i, n));
  const s = slides[active] as Slide;

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => wrap(a + 1, n)), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active, paused, n]);

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Popular trips from Mangalore"
      className="relative isolate flex min-h-[100svh] items-center overflow-clip bg-navy-deep text-primary-foreground"
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
      {slides.map((sl, i) => (
        <img
          key={sl.place}
          src={sl.img}
          alt=""
          aria-hidden
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center] transition-[opacity,transform] duration-[1400ms] ease-out lg:object-center ${i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/95 via-navy-deep/55 to-navy-deep/30 lg:bg-gradient-to-r lg:from-navy-deep/90 lg:via-navy-deep/45 lg:to-navy-deep/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy-deep/80 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 pb-10 pt-32 sm:px-6 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:items-center lg:gap-6 lg:pb-12 lg:pl-8 lg:pr-14">
        <div className="min-w-0 max-w-3xl">
          <div key={active} aria-live="polite" className="inline-flex max-w-full animate-in fade-in slide-in-from-bottom-2 items-center gap-2.5 rounded-full border border-primary-foreground/20 bg-navy-deep/60 px-5 py-2.5 text-sm backdrop-blur-md duration-500 sm:text-base">
            <MapPin className="h-4 w-4 shrink-0 text-gold" />
            <span className="truncate"><span className="font-bold">{s.place}</span> <span className="text-primary-foreground/70">· {s.sub}</span></span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl xl:text-7xl">
            Taxi Service in Mangaluru for <span className="text-gold">Local &amp; Outstation Travel</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/85 sm:text-lg">
            Private cab rides, airport transfers and tour packages to tourist places across Karnataka — planned around your dates, your group and your pace.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link to="/packages" className="inline-flex items-center gap-2.5 rounded-xl bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground shadow-float transition hover:brightness-105 sm:text-base">
              Explore Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="-mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:hidden">
            {slides.map((sl, i) => (
              <li key={sl.place} className="shrink-0">
                <button type="button" onClick={() => go(i)} aria-label={`Show ${sl.place}`} aria-current={i === active} className="flex w-20 flex-col items-center gap-1.5 text-center">
                  <img src={sl.thumb} alt="" loading="lazy" className={`h-16 w-16 rounded-full object-cover ring-2 transition ${i === active ? "ring-gold" : "ring-primary-foreground/40"}`} />
                  <span className={`text-[11px] font-semibold leading-tight ${i === active ? "text-gold" : "text-primary-foreground/80"}`}>{sl.place}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="relative hidden h-[min(720px,70svh)] lg:block">
          {slides.map((sl, i) => {
            const d = wrap(i - active + n / 2, n) - n / 2;
            const abs = Math.abs(d);
            const sign = d < 0 ? -1 : 1;
            const y = abs === 0 ? "0px" : abs === 1 ? `${sign} * min(190px, 22svh)` : abs === 2 ? `${sign} * min(335px, 39svh)` : `${sign} * min(480px, 56svh)`;
            const on = abs === 0;
            return (
              <li
                key={sl.place}
                className="absolute right-0 top-1/2 transition-[transform,opacity] duration-700 ease-out"
                style={{
                  transform: `translate(${-Math.min(abs, 3) * 36}px, calc(-50% + ${y}))`,
                  opacity: abs > 2 ? 0 : 1,
                  pointerEvents: abs > 2 ? "none" : "auto",
                }}
              >
                <button type="button" onClick={() => go(i)} tabIndex={abs > 2 ? -1 : 0} aria-label={`Show ${sl.place}`} aria-current={on} className="group flex items-center gap-5 text-right">
                  <span className="block">
                    <span className={`block font-display font-bold transition-all duration-700 ${on ? "text-3xl text-gold" : "text-xl text-primary-foreground group-hover:text-gold"}`}>{sl.place}</span>
                    <span className={`block transition-all duration-700 ${on ? "mt-1 text-xl text-primary-foreground" : "text-sm text-primary-foreground/75"}`}>{sl.sub}</span>
                  </span>
                  <span
                    className={`relative block shrink-0 overflow-hidden rounded-full shadow-float transition-all duration-700 ${on ? "ring-[3px] ring-gold" : "ring-2 ring-primary-foreground/60 group-hover:ring-gold"}`}
                    style={{ width: on ? "min(220px, 26svh)" : "min(120px, 14svh)", height: on ? "min(220px, 26svh)" : "min(120px, 14svh)" }}
                  >
                    <img src={sl.thumb} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex" role="tablist" aria-label="Choose trip">
        {slides.map((sl, i) => (
          <button
            key={sl.place}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show ${sl.place}`}
            onClick={() => go(i)}
            className={`rounded-full transition-all ${i === active ? "h-3.5 w-3.5 bg-gold" : "h-2.5 w-2.5 bg-primary-foreground/50 hover:bg-primary-foreground"}`}
          />
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="Our Services" title="Taxi & Cab Services in Mangalore" sub="From city rides to long journeys, we've got you covered. Choose from a range of vehicles and travel options tailored to your needs." />
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
  return (
    <section id="places" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-deep py-14 text-primary-foreground sm:py-16">
      <img src={dCoorg} alt="" loading="lazy" width={944} height={704} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-[minmax(0,300px)_1fr] lg:items-start">
        <div>
          <SectionTitle light kicker="Explore Mangalore" title="Popular Destinations" sub="From pristine beaches to ancient temples, let us take you to the best places around Mangalore." />
          <Link to="/destinations" className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            View All Destinations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {destinations.slice(0, 4).map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>
      </div>
    </section>
  );
}

function Fleet() {
  const list = vehicles.filter((v) => v.featured);
  return (
    <section id="cabs" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="Our Cabs" title="The Right Vehicle for Every Trip" sub="Clean, air-conditioned vehicles driven by experienced local drivers." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {list.map((v) => <VehicleCard key={v.slug} v={v} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/fleet" className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            Explore all vehicles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const list = packages.filter((p) => p.featured);
  return (
    <section id="packages" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle kicker="Tour Packages" title="Explore Coastal Karnataka" sub="Prices shared on enquiry – tell us your dates and group size on WhatsApp." />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PackageCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-10 text-center">
          <Link to="/packages" className="inline-flex items-center gap-1.5 rounded-lg bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            View All Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle center kicker="About Us" title="Travel Easy with Local Experts" sub="A Mangaluru-based cab service open 24/7 – trusted by families, pilgrims and business travellers across South Canara." />
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
              {["Sedan (Dzire / Etios)", "MPV (Ertiga / Kia Carens)", "Innova Crysta / Hycross", "Tempo Traveller / Force Urbania", "Mini Bus (21 Seater)", "Bus (50 Seater)", "Not sure"].map((v) => <option key={v}>{v}</option>)}
            </select>
          </label>
          {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3.5 font-bold text-gold-foreground transition hover:brightness-105 sm:col-span-2">Send Inquiry on WhatsApp <ArrowRight className="h-4 w-4" /></button>
        </form>
      </div>
    </section>
  );
}
