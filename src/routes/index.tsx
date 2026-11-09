import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Plane, Languages, Sparkles, BadgeCheck, Clock, MapPin, Star, Users, Car, Menu, X } from "lucide-react";
import hero from "@/assets/hero-coast.jpg";

const CALL = "8073565608";
const WA = "916366335594";
const BRAND = "Mangalore Travel Cabs And Taxi Services";
const wa = (msg: string) => `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mangalore Travel Cabs & Taxi – 24/7 Airport, Temple & Outstation Trips" },
      { name: "description", content: "Reliable, affordable cabs in Mangaluru: IXE airport pickups, temple yatras, outstation trips and sightseeing across Coastal Karnataka. Call 8073565608." },
      { property: "og:title", content: "Mangalore Travel Cabs And Taxi Services" },
      { property: "og:description", content: "24/7 taxi & tour services in Mangaluru – airport, temples, beaches, Coorg & more." },
    ],
  }),
  component: Index,
});

type Cat = "temple" | "coastal" | "outstation";
const packages: { cat: Cat; title: string; places: string; duration: string }[] = [
  { cat: "temple", title: "Kollur Mookambika Darshan", places: "Kollur Mookambika Temple, Kodachadri view, Maravanthe Beach", duration: "1 Day" },
  { cat: "temple", title: "Murudeshwara Shiva Yatra", places: "Murudeshwara Temple & Statue, Idagunji Ganapati, Bhatkal", duration: "1 Day" },
  { cat: "temple", title: "Dharmasthala & Kukke Subrahmanya", places: "Sri Manjunatha Temple, Kukke Subrahmanya Temple, Sowthadka", duration: "1–2 Days" },
  { cat: "temple", title: "Udupi Krishna Temple Tour", places: "Udupi Sri Krishna Matha, Malpe Beach, Manipal", duration: "1 Day" },
  { cat: "coastal", title: "Mangaluru City & Beaches", places: "Panambur Beach, Tannirbhavi Beach, Sultan Battery", duration: "Half / Full Day" },
  { cat: "coastal", title: "Heritage & Temples of Mangaluru", places: "St. Aloysius Chapel, Mangaladevi Temple, Kadri Manjunatha", duration: "Half Day" },
  { cat: "outstation", title: "Coorg Hill Station Getaway", places: "Abbey Falls, Raja's Seat, Dubare, Golden Temple Bylakuppe", duration: "2–3 Days" },
  { cat: "outstation", title: "Chikmagalur Coffee Trails", places: "Mullayanagiri, Baba Budangiri, Hebbe Falls, coffee estates", duration: "2 Days" },
  { cat: "outstation", title: "Bekal Fort & Kerala Coast", places: "Bekal Fort, Kappil Beach, Ananthapura Lake Temple", duration: "1 Day" },
];
const tabs: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "temple", label: "Temple Pilgrimage Yatras" },
  { id: "coastal", label: "Coastal & Beach Tours" },
  { id: "outstation", label: "Outstation & Hill Stations" },
];
const fleet = [
  { name: "Sedans", models: "Swift Dzire / Toyota Etios", pax: "4 Passengers", use: "Local rides & airport transfers", specs: ["AC", "2 bags", "Fuel efficient"] },
  { name: "SUVs", models: "Ertiga / Innova / Innova Crysta", pax: "6–7 Passengers", use: "Family trips & outstation tours", specs: ["AC", "Spacious luggage", "Comfort seats"] },
  { name: "Tempo Travellers", models: "12 / 17 / 26 Seaters", pax: "12–26 Passengers", use: "Groups, weddings & temple yatras", specs: ["Push-back seats", "AC", "Music system"] },
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
const nav = [["Home", "#home"], ["Tour Packages", "#packages"], ["Our Fleet", "#fleet"], ["Why Choose Us", "#why"], ["Reviews", "#reviews"], ["Contact Us", "#contact"]];

function CallBtn({ className = "" }: { className?: string }) {
  return (
    <a href={`tel:+91${CALL}`} className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-gold-foreground shadow-lg transition hover:brightness-105 ${className}`}>
      <Phone className="h-4 w-4" /> Call {CALL}
    </a>
  );
}
function WaBtn({ msg = `Hi ${BRAND}, I'd like to book a cab.`, label = "WhatsApp 6366335594", className = "" }: { msg?: string; label?: string; className?: string }) {
  return (
    <a href={wa(msg)} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 font-semibold text-primary-foreground shadow-lg transition hover:brightness-110 ${className}`}>
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
}

function Index() {
  const [tab, setTab] = useState<"all" | Cat>("all");
  const [open, setOpen] = useState(false);
  const list = tab === "all" ? packages : packages.filter((p) => p.cat === tab);

  return (
    <div className="font-sans text-foreground">
      <header className="sticky top-0 z-50 bg-navy-deep/95 text-primary-foreground backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-gold-foreground"><Car className="h-5 w-5" /></span>
            <span className="font-display text-sm font-bold leading-tight sm:text-base">Mangalore Travel Cabs<br className="sm:hidden" /><span className="text-gold"> & Taxi Services</span></span>
          </a>
          <nav className="hidden gap-5 text-sm lg:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="opacity-85 hover:text-gold hover:opacity-100">{l}</a>)}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <a href={`tel:+91${CALL}`} className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground"><Phone className="h-4 w-4" />{CALL}</a>
            <a href={wa(`Hi ${BRAND}, I'd like to book a cab.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold"><MessageCircle className="h-4 w-4" />WhatsApp</a>
          </div>
          <button aria-label="Menu" className="lg:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="border-t border-primary-foreground/10 px-4 pb-4 lg:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2.5">{l}</a>)}
            <div className="mt-2 grid grid-cols-2 gap-2 md:hidden"><CallBtn className="text-sm" /><WaBtn label="WhatsApp" className="text-sm" /></div>
          </nav>
        )}
      </header>

      <section id="home" className="relative isolate overflow-hidden text-primary-foreground">
        <img src={hero} alt="Taxi on a coastal road near Mangaluru with temple and beach at sunset" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/20" />
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground"><Clock className="h-3.5 w-3.5" /> Open 24/7</span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">Reliable & Affordable Cabs in Mangaluru – <span className="text-gold">24/7 Taxi & Tour Services</span></h1>
          <p className="mt-5 max-w-2xl text-base opacity-90 sm:text-lg">Airport Pickups (IXE), Outstation Trips, Temple Yatras & Local Sightseeing across Coastal Karnataka – with clean AC cars and friendly local drivers.</p>
          <div className="mt-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
            <CallBtn className="py-4 text-lg" /><WaBtn className="py-4 text-lg" />
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:py-20">
        <Heading kicker="Tour Packages" title="Explore Coastal Karnataka" sub="Prices shared on enquiry – tell us your dates and group size on WhatsApp." />
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${tab === t.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary"}`}>{t.label}</button>
          ))}
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-lg">
              <span className="w-fit rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-gold-foreground">{p.duration}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 flex flex-1 gap-2 text-sm text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{p.places}</p>
              <WaBtn msg={`Hi ${BRAND}, I'm interested in the "${p.title}" package (${p.duration}). Please share details and a quote.`} label="Inquire on WhatsApp" className="mt-5 w-full text-sm" />
            </article>
          ))}
        </div>
      </section>

      <section id="fleet" className="scroll-mt-20 bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Heading kicker="Our Fleet" title="The Right Vehicle for Every Trip" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {fleet.map((f) => (
              <article key={f.name} className="flex flex-col rounded-2xl bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between"><Car className="h-10 w-10 text-primary" /><span className="inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground"><Users className="h-3.5 w-3.5" />{f.pax}</span></div>
                <h3 className="mt-4 font-display text-xl font-bold text-primary">{f.name}</h3>
                <p className="font-semibold">{f.models}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.use}</p>
                <ul className="mt-4 flex flex-1 flex-wrap content-start gap-2">{f.specs.map((s) => <li key={s} className="rounded-md bg-secondary px-2 py-1 text-xs">{s}</li>)}</ul>
                <WaBtn msg={`Hi ${BRAND}, I'd like to book a ${f.name.slice(0, -1)} (${f.models}). Please share availability and a quote.`} label="Inquire on WhatsApp" className="mt-5 w-full text-sm" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:py-20">
        <Heading kicker="Why Choose Us" title="Travel Easy with Local Experts" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-gold"><I className="h-6 w-6" /></span>
              <h3 className="mt-4 font-display font-bold text-primary">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="scroll-mt-20 bg-navy-deep py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <Heading kicker="Reviews" title="What Our Travellers Say" light />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <figure key={r.n} className="rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10">
                <div className="flex gap-0.5 text-gold">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <blockquote className="mt-3 text-sm opacity-90">"{r.t}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">{r.n} <span className="font-normal opacity-60">· {r.p}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-navy-deep py-6 text-center text-xs text-primary-foreground/70">© {new Date().getFullYear()} {BRAND}. All rights reserved.</footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-navy-deep/95 p-2 md:hidden">
        <CallBtn className="py-2.5 text-sm" /><WaBtn label="WhatsApp" className="py-2.5 text-sm" />
      </div>
    </div>
  );
}

function Heading({ kicker, title, sub, light }: { kicker: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-widest text-gold">{kicker}</p>
      <h2 className={`mt-2 font-display text-3xl font-extrabold sm:text-4xl ${light ? "" : "text-primary"}`}>{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Contact() {
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
  const input = "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
  return (
    <section id="contact" className="scroll-mt-20 bg-secondary pb-24 pt-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-2">
        <div>
          <Heading kicker="Contact Us" title="Book Your Ride in Minutes" sub="Fill in your trip details and we'll reply on WhatsApp with a clear quote." />
          <div className="mt-8 space-y-4 text-sm">
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /> Call: <a className="font-semibold text-primary" href={`tel:+91${CALL}`}>{CALL}</a></p>
            <p className="flex items-center gap-3"><MessageCircle className="h-5 w-5 text-primary" /> WhatsApp: <a className="font-semibold text-primary" href={wa(`Hi ${BRAND}`)} target="_blank" rel="noopener noreferrer">6366335594</a></p>
            <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /> Open 24 hours, 7 days a week</p>
            <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary" /> Serving Mangaluru, Udupi, Manipal, Kundapura & all of South Canara</p>
          </div>
        </div>
        <form onSubmit={submit} className="grid gap-4 rounded-2xl bg-card p-6 shadow-lg sm:grid-cols-2">
          <label className="text-sm font-medium">Name<input className={`${input} mt-1`} value={f.name} onChange={set("name")} required /></label>
          <label className="text-sm font-medium">Phone Number<input type="tel" className={`${input} mt-1`} value={f.phone} onChange={set("phone")} required /></label>
          <label className="text-sm font-medium">Pickup Location<input className={`${input} mt-1`} value={f.pickup} onChange={set("pickup")} placeholder="e.g. IXE Airport" required /></label>
          <label className="text-sm font-medium">Destination / Package<input className={`${input} mt-1`} value={f.dest} onChange={set("dest")} placeholder="e.g. Kollur Mookambika" required /></label>
          <label className="text-sm font-medium">Travel Date<input type="date" className={`${input} mt-1`} value={f.date} onChange={set("date")} /></label>
          <label className="text-sm font-medium">Vehicle Type
            <select className={`${input} mt-1`} value={f.vehicle} onChange={set("vehicle")}>
              {["Sedan (Dzire / Etios)", "SUV (Ertiga / Innova / Crysta)", "Tempo Traveller (12 / 17 / 26 Seater)", "Not sure"].map((v) => <option key={v}>{v}</option>)}
            </select>
          </label>
          {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3.5 font-semibold text-primary-foreground sm:col-span-2"><MessageCircle className="h-5 w-5" /> Submit via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
