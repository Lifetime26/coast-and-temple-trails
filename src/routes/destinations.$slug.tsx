import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Car, Check, Clock, DoorOpen, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout, SectionTitle, DestinationCard, ext } from "@/components/SiteLayout";
import { destinations, getDestination } from "@/lib/places";
import { BRAND, CALL_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const place = getDestination(params.slug);
    if (!place) throw notFound();
    return { place };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.place.title} | Mangalore Travel Cabs` : "Destination | Mangalore Travel Cabs" },
      { name: "description", content: loaderData?.place.short ?? "Places to visit near Mangalore." },
    ],
  }),
  component: DestinationPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="bg-background px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-primary">Place not found</h1>
        <p className="mt-2 text-muted-foreground">This destination does not exist or has been moved.</p>
        <Link to="/destinations" className="mt-6 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground">See all places</Link>
      </section>
    </SiteLayout>
  ),
});

function DestinationPage() {
  const { place: p } = Route.useLoaderData();
  const msg = `Hi ${BRAND}, I'd like to plan a trip to ${p.title}. Please share details.`;
  const others = destinations.filter((d) => d.slug !== p.slug).slice(0, 4);
  const facts = [
    { icon: Car, l: "Distance", v: p.distance },
    { icon: CalendarDays, l: "Best time to visit", v: p.bestTime },
    { icon: Clock, l: "Suggested time", v: p.duration },
    ...(p.timings ? [{ icon: DoorOpen, l: "Temple timings (open / close)", v: p.timings }] : []),
  ];

  return (
    <SiteLayout>
      <section className="relative isolate flex min-h-[320px] items-end overflow-hidden bg-navy-deep text-primary-foreground sm:min-h-[420px]">
        <img src={p.img} alt={p.title} width={944} height={704} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/95 via-navy-deep/40 to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-16 sm:pb-12">
          <Link to="/destinations" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/80 hover:text-gold">
            <ArrowLeft className="h-3.5 w-3.5" /> All places
          </Link>
          <p className="mt-4 flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold"><MapPin className="h-3.5 w-3.5" />{p.loc}</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-5xl">{p.title}</h1>
          <p className="mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">{p.short}</p>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">About {p.title}</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {p.about.map((t) => <p key={t}>{t}</p>)}
            </div>
            <h3 className="mt-8 font-display text-xl font-bold text-primary">Highlights</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 rounded-xl bg-secondary p-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />{h}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-float lg:sticky lg:top-28">
            <h3 className="font-display text-lg font-bold text-primary">Plan your trip</h3>
            <dl className="mt-4 space-y-4">
              {facts.map(({ icon: I, l, v }) => (
                <div key={l} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground"><I className="h-4 w-4" /></span>
                  <div className="min-w-0">
                    <dt className="text-xs text-muted-foreground">{l}</dt>
                    <dd className="text-sm font-semibold text-primary">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <a href={wa(msg)} {...ext} className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
              <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
            </a>
            <a href={callLink} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:border-gold">
              <Phone className="h-4 w-4" /> Call {CALL_NUMBER.slice(0, 5)} {CALL_NUMBER.slice(5)}
            </a>
            <p className="mt-4 text-xs text-muted-foreground">Timings and entry rules can change. Message us and we will confirm before your trip. Price is shared on enquiry.</p>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="Keep exploring" title="More places to visit" />
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {others.map((d) => <DestinationCard key={d.slug} d={d} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
