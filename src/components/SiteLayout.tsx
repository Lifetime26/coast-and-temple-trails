import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Clock, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { BRAND, CALL_NUMBER, WHATSAPP_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";
import { catLabel, type Destination, type TourPackage } from "@/lib/places";

export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

type NavItem = { l: string; href: string; to?: "/" | "/destinations" | "/packages" | "/fleet" };
export const nav: NavItem[] = [
  { l: "Home", href: "/", to: "/" },
  { l: "About Us", href: "/#about" },
  { l: "Our Cabs", href: "/fleet", to: "/fleet" },
  { l: "Tour Packages", href: "/packages", to: "/packages" },
  { l: "Places to Visit", href: "/destinations", to: "/destinations" },
  { l: "Contact", href: "/#contact" },
];

const coverage = ["Mangaluru", "Udupi", "Manipal", "Kundapura", "South Canara"];

function NavAnchor({ item, className, onClick }: { item: NavItem; className?: string; onClick?: () => void }) {
  return item.to ? (
    <Link to={item.to} className={className} onClick={onClick}>{item.l}</Link>
  ) : (
    <a href={item.href} className={className} onClick={onClick}>{item.l}</a>
  );
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={BRAND}>
      <svg viewBox="0 0 48 40" className={`${small ? "h-9 w-11" : "h-11 w-13"} shrink-0`} aria-hidden>
        <path d="M8 26a16 16 0 0 1 32 0Z" className="fill-gold" />
        <path d="M2 28c6-4 10 4 16 0s10 4 16 0 8 3 12 1" className="stroke-primary-foreground" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M6 34c6-4 10 4 16 0s10 4 16 0" className="stroke-primary-foreground/70" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
      <span className="min-w-0 leading-tight">
        <span className={`block font-display font-bold text-primary-foreground ${small ? "text-sm" : "text-sm sm:text-lg"}`}>Mangalore Travel Cabs</span>
        <span className={`block font-display font-bold text-gold ${small ? "text-xs" : "text-xs sm:text-base"}`}>And Taxi Services</span>
        <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/70 sm:block">Safe • Comfortable • On Time</span>
      </span>
    </Link>
  );
}

export function PhotoSlide({ imgs, alt, eager = false, className = "" }: { imgs: string[]; alt: string; eager?: boolean; className?: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (imgs.length < 2) return;
    const t = setInterval(() => setI((x) => (x + 1) % imgs.length), 3500);
    return () => clearInterval(t);
  }, [imgs.length]);
  return (
    <>
      {imgs.map((src, k) => (
        <img key={src} src={src} alt={k === 0 ? alt : ""} loading={eager || k === 0 ? undefined : "lazy"} width={1920} height={1088} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${k === i ? "opacity-100" : "opacity-0"} ${className}`} />
      ))}
    </>
  );
}

export function RouteRail({ stops, light = false }: { stops: { name: string }[]; light?: boolean }) {
  const pill = light ? "bg-primary-foreground/10 text-primary-foreground" : "bg-secondary text-primary";
  return (
    <ol className="flex flex-wrap items-center gap-y-2" aria-label="Route">
      <li className="flex items-center">
        <span className="grid h-5 w-5 place-items-center rounded-full border-2 border-gold"><span className="h-1.5 w-1.5 rounded-full bg-gold" /></span>
        <span className="ml-1.5 text-xs font-semibold opacity-80">Mangaluru</span>
        <span className="mx-2 h-px w-4 bg-gold/70 sm:w-6" />
      </li>
      {stops.map((s) => (
        <li key={s.name} className="flex items-center">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${pill}`}>
            <MapPin className="h-3 w-3 text-gold" />{s.name}
          </span>
          <span className="mx-2 h-px w-4 bg-gold/70 sm:w-6" />
        </li>
      ))}
      <li className="text-xs font-semibold opacity-80">Back home</li>
    </ol>
  );
}

export function GoldLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} {...ext} className={`inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-gold-foreground transition hover:brightness-105 ${className}`}>
      {children} <ArrowRight className="h-3.5 w-3.5" />
    </a>
  );
}

export function SectionTitle({ kicker, title, sub, center, light }: { kicker: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">{kicker}</p>
      <h2 className={`mt-2 font-display text-2xl font-bold sm:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-3 text-sm sm:text-base ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

export function DestinationCard({ d, detailed = false }: { d: Destination; detailed?: boolean }) {
  return (
    <Link to="/destinations/$slug" params={{ slug: d.slug }} className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-float">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={d.img} alt={d.title} loading="lazy" width={944} height={704} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className={detailed ? "flex flex-1 flex-col p-4" : "px-3 py-2.5 text-center"}>
        <p className={`text-sm font-bold text-primary ${detailed ? "" : "truncate"}`}>{d.title}</p>
        <p className={`mt-0.5 flex items-center gap-1 text-xs text-muted-foreground ${detailed ? "" : "justify-center"}`}>
          <MapPin className="h-3 w-3 text-gold" />{d.loc}
        </p>
        {detailed && (
          <>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{d.short}</p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">Read more <ArrowRight className="h-3.5 w-3.5" /></span>
          </>
        )}
      </div>
    </Link>
  );
}

export function PackageCard({ p }: { p: TourPackage }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-float">
      <Link to="/packages/$slug" params={{ slug: p.slug }} className="relative block aspect-[16/10] overflow-hidden">
        <PhotoSlide imgs={p.imgs ?? [p.img]} alt={p.title} />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-wider text-gold">{catLabel[p.cat]} · {p.duration}</p>
        <h3 className="mt-1 font-display text-lg font-bold text-primary">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Link to="/packages/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-gold-foreground transition hover:brightness-105">
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a href={wa(`Hi ${BRAND}, I'm interested in the "${p.title}" package. Please share details and a quote.`)} {...ext} className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-primary transition hover:border-gold">
            Inquire on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (i: NavItem) => (i.to ? (i.to === "/" ? path === "/" : path.startsWith(i.to)) : false);
  const isHome = path === "/";
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = !isHome || scrolled || open;
  return (
    <header className={`${isHome ? "fixed inset-x-0" : "sticky"} top-0 z-50 text-primary-foreground transition-colors duration-300 ${solid ? "bg-navy-deep shadow-lg" : "bg-gradient-to-b from-navy-deep/70 to-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium xl:flex">
          {nav.map((item) => (
            <NavAnchor key={item.l} item={item} className={`transition hover:text-gold ${isActive(item) ? "border-b-2 border-gold pb-0.5 text-gold" : "text-primary-foreground/90"}`} />
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
          {nav.map((item) => (
            <NavAnchor key={item.l} item={item} onClick={() => setOpen(false)} className="block py-2.5 font-medium hover:text-gold" />
          ))}
          <a href={wa(`Hi ${BRAND}, I'd like to book a cab.`)} {...ext} className="mt-2 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground sm:hidden">Book a Cab</a>
        </nav>
      )}
    </header>
  );
}

function FloatingContacts() {
  const msg = `Hi ${BRAND}, I'd like to book a cab.`;
  return (
    <div className="fixed bottom-4 right-4 z-50 hidden flex-col items-end gap-2.5 sm:gap-3 sm:bottom-6 sm:right-6 md:flex">
      <a href={wa(msg)} {...ext} aria-label={`Chat with us on WhatsApp ${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-whatsapp p-3 text-sm font-bold text-primary-foreground shadow-float transition hover:brightness-105 sm:px-5 sm:py-3">
        <MessageCircle className="h-5 w-5" /><span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a href={callLink} aria-label={`Call us on ${CALL_NUMBER}`} className="inline-flex items-center gap-2 rounded-full bg-gold p-3 text-sm font-bold text-gold-foreground shadow-float transition hover:brightness-105 sm:px-5 sm:py-3">
        <Phone className="h-5 w-5" /><span className="hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep pb-4 text-primary-foreground md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr_1fr]">
        <div>
          <Logo small />
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">Reliable 24/7 taxi and tour services across Mangaluru and Coastal Karnataka.</p>
        </div>
        <div>
          <h4 className="font-display text-sm font-bold text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {nav.map((item) => <li key={item.l}><NavAnchor item={item} className="hover:text-gold" /></li>)}
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

export function SiteLayout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [path]);
  return (
    <div className="font-sans text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContacts />
    </div>
  );
}
