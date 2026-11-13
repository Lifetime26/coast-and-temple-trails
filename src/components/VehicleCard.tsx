import { Link } from "@tanstack/react-router";
import { Briefcase, Car, Check, Users } from "lucide-react";
import { BRAND, whatsappLink as wa } from "@/lib/booking";
import type { Vehicle } from "@/lib/fleet";
import { GoldLink } from "@/components/SiteLayout";

function VehiclePhoto({ v }: { v: Vehicle }) {
  if (v.img) {
    return (
      <div className="h-40 overflow-hidden">
        <img src={v.img} alt={`${v.name} – ${v.type}`} loading="lazy" width={1024} height={656} style={v.zoom ? { transform: `translate(${-v.zoom * ((v.focus?.[0] ?? 50) - 50)}%, ${-v.zoom * ((v.focus?.[1] ?? 50) - 50)}%) scale(${v.zoom})` } : undefined} className="mx-auto h-40 w-auto object-contain" />
      </div>
    );
  }
  return (
    <div className="grid h-40 w-full place-items-center rounded-xl bg-secondary text-center text-muted-foreground">
      <div>
        <Car className="mx-auto h-10 w-10 text-gold" />
        <p className="mt-2 text-xs font-semibold">Photo coming soon</p>
      </div>
    </div>
  );
}

export function VehicleCard({ v, detailed = false }: { v: Vehicle; detailed?: boolean }) {
  const msg = `Hi ${BRAND}, I'd like to book the ${v.name}. Please share availability and a quote.`;
  return (
    <article id={v.slug} className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-float">
      <div className="relative px-6 pt-6">
        <VehiclePhoto v={v} />
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">
          <Users className="h-3.5 w-3.5" />{v.guests}
        </span>
      </div>
      <div className="mt-6 flex flex-1 flex-col border-t border-border p-6">
        <h3 className="font-display text-xl font-bold text-primary">{v.name}</h3>
        <p className="text-sm font-semibold">{v.type}</p>
        <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
        {v.bags && (
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Briefcase className="h-3.5 w-3.5 text-gold" />{v.bags}</p>
        )}
        <ul className="mt-4 flex flex-wrap content-start gap-2">
          {v.features.map((f) => <li key={f} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{f}</li>)}
        </ul>
        {detailed && (
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span><span className="font-semibold text-primary">Best for:</span> {v.bestFor}</span>
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          <GoldLink href={wa(msg)}>Book Now</GoldLink>
          {!detailed && (
            <Link to="/fleet" hash={v.slug} className="text-xs font-bold text-primary hover:text-gold">View specs &amp; features →</Link>
          )}
        </div>
      </div>
    </article>
  );
}
