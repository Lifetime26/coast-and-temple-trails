import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Car, ChevronDown, Clock, HeartHandshake, MessageCircle, Route as RouteIcon, Shirt, Sunrise, Footprints } from "lucide-react";
import { SiteLayout, RouteRail, PhotoSlide, ext } from "@/components/SiteLayout";
import { catLabel, packages, travelGuide, yatraFaqs, type Cat, type TourPackage } from "@/lib/places";
import { BRAND, whatsappLink as wa } from "@/lib/booking";
import sDharmasthala from "@/assets/darmasthala-tour.jpg";

export const Route = createFileRoute("/packages/")({
  head: () => ({
    meta: [
      { title: "Temple Yatras & Tour Packages from Mangalore | Mangalore Travel Cabs" },
      { name: "description", content: "Temple yatras, beach tours and hill station trips from Mangaluru. See the route, stops and travel guide for each package and enquire on WhatsApp." },
      { property: "og:title", content: "Temple Yatras & Tour Packages from Mangalore" },
    ],
  }),
  component: PackagesPage,
});

const tabs: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All trips" },
  { id: "temple", label: "Temple Yatras" },
  { id: "coastal", label: "Coastal & City" },
  { id: "outstation", label: "Hills & Outstation" },
];

const guideIcons = [Shirt, Sunrise, Footprints, HeartHandshake];

function PackageRow({ p, flip }: { p: TourPackage; flip: boolean }) {
  return (
    <article className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-float md:flex-row ${flip ? "md:flex-row-reverse" : ""}`}>
      <Link to="/packages/$slug" params={{ slug: p.slug }} className="relative block aspect-[16/10] overflow-hidden md:aspect-auto md:w-[36%] md:shrink-0" aria-label={p.title}>
        <PhotoSlide imgs={p.imgs ?? [p.img]} alt="" />
        <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-foreground">{catLabel[p.cat]}</span>
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-sm font-semibold text-primary-foreground"><RouteIcon className="h-4 w-4 text-gold" />{p.distance}</span>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">{p.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{p.summary}</p>

        <div className="mt-5"><RouteRail stops={p.stops} /></div>

        <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2.5 rounded-xl bg-secondary p-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div><dt className="text-xs text-muted-foreground">Duration</dt><dd className="font-semibold text-primary">{p.duration}</dd></div>
          </div>
          <div className="flex items-start gap-2.5 rounded-xl bg-secondary p-3">
            <Car className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div><dt className="text-xs text-muted-foreground">Suggested vehicle</dt><dd className="font-semibold text-primary">{p.vehicle}</dd></div>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link to="/packages/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:brightness-105">
            Trip &amp; travel guide <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={wa(`Hi ${BRAND}, I'm interested in the "${p.title}" package. Please share details and a quote.`)} {...ext} className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-primary transition hover:border-gold">
            <MessageCircle className="h-4 w-4" /> Get a quote
          </a>
        </div>
      </div>
    </article>
  );
}

function PackagesPage() {
  const [tab, setTab] = useState<"all" | Cat>("all");
  const list = tab === "all" ? packages : packages.filter((p) => p.cat === tab);
  const count = (id: "all" | Cat) => (id === "all" ? packages.length : packages.filter((p) => p.cat === id).length);

  return (
    <SiteLayout>
      <section className="relative isolate overflow-hidden bg-navy-deep py-16 text-primary-foreground sm:py-24">
        <img src={sDharmasthala} alt="" width={1920} height={1088} className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Tour packages from Mangaluru</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">
            Temple yatras and trips, <span className="text-gold">planned stop by stop</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Pick a trip to see the route, what each stop is known for and a simple travel guide. Prices are shared on WhatsApp once you tell us your dates and group size.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5 text-sm font-semibold">
            {["Local drivers who know the temples", "Slow pacing for elders", "Quote on WhatsApp"].map((t) => (
              <li key={t} className="rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 backdrop-blur">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter trips">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${tab === t.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-primary hover:border-gold"}`}
              >
                {t.label} <span className={tab === t.id ? "text-gold" : "text-muted-foreground"}>{count(t.id)}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 space-y-6">
            {list.map((p, i) => <PackageRow key={p.slug} p={p} flip={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Temple travel guide</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-4xl">Before you go on a yatra</h2>
            <p className="mt-3 text-sm text-muted-foreground sm:text-base">A few simple things that make darshan smoother for you and your family.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {travelGuide.temple.map((g, i) => {
              const I = guideIcons[i % guideIcons.length] as typeof Shirt;
              return (
                <div key={g.title} className="rounded-2xl border border-border bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-deep text-gold"><I className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-display text-lg font-bold text-primary">{g.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {g.items.map((t) => <li key={t} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{t}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
            <div>
              <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Common questions</h2>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">Cannot find your answer? Message us and we will reply on WhatsApp.</p>
              <a href={wa(`Hi ${BRAND}, I have a question about a tour package.`)} {...ext} className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-gold-foreground transition hover:brightness-105">
                <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
            <div className="space-y-3">
              {yatraFaqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-card p-5 open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary">
                    {f.q}
                    <ChevronDown className="h-4 w-4 shrink-0 text-gold transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl bg-navy-deep p-8 text-center text-primary-foreground sm:p-12">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Want to mix temples from different trips?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 sm:text-base">Tell us the temples you want to visit and your dates. We will build a route that fits your family.</p>
            <a href={wa(`Hi ${BRAND}, I'd like a custom tour package. Please share details.`)} {...ext} className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition hover:brightness-105">
              <MessageCircle className="h-4 w-4" /> Plan my trip on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
