import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Clock, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { BRAND, CALL_NUMBER, WHATSAPP_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";

export const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Header/footer links point at sections of the home page so they work from every page. */
export const nav: [label: string, hash: string][] = [
  ["Home", "home"], ["About Us", "about"], ["Our Cabs", "cabs"],
  ["Tour Packages", "packages"], ["Places to Visit", "places"], ["Contact", "contact"],
];

const coverage = ["Mangaluru & Nearby", "Udupi & Manipal", "Kollur & Murudeshwara", "Coorg & Chikmagalur", "Across Karnataka"];

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <Link to="/" hash="home" className="flex min-w-0 items-center gap-2.5" aria-label={BRAND}>
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
    </Link>
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

export function Header({ active = "home" }: { active?: string }) {
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
          {nav.map(([l, h]) => (
            <Link key={h} to="/" hash={h} className={`transition hover:text-gold ${h === active ? "border-b-2 border-gold pb-0.5 text-gold" : "text-primary-foreground/90"}`}>{l}</Link>
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
          {nav.map(([l, h]) => <Link key={h} to="/" hash={h} onClick={() => setOpen(false)} className="block py-2.5 font-medium hover:text-gold">{l}</Link>)}
          <a href={wa(`Hi ${BRAND}, I'd like to book a cab.`)} {...ext} className="mt-2 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground sm:hidden">Book a Cab</a>
        </nav>
      )}
    </header>
  );
}

export function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function FloatingContacts() {
  const msg = `Hi ${BRAND}, I'd like to book a cab.`;
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6 sm:gap-3">
      <a href={wa(msg)} {...ext} aria-label={`Chat with us on WhatsApp ${WHATSAPP_NUMBER}`} className="grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-float transition hover:scale-105 sm:h-14 sm:w-14">
        <WhatsAppLogo className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      <a href={callLink} aria-label={`Call us on ${CALL_NUMBER}`} className="grid h-12 w-12 place-items-center rounded-full bg-gold text-gold-foreground shadow-float transition hover:scale-105 sm:h-14 sm:w-14">
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </div>
  );
}

export function Footer() {
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
            {nav.map(([l, h]) => <li key={h}><Link to="/" hash={h} className="hover:text-gold">{l}</Link></li>)}
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
