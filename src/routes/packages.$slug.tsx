import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Car, Clock, Footprints, HeartHandshake, MessageCircle, Phone, Route as RouteIcon, Shirt, Sunrise } from "lucide-react";
import { SiteLayout, SectionTitle, PackageCard, RouteRail, PhotoSlide, ext } from "@/components/SiteLayout";
import { catLabel, getPackage, packages, travelGuide } from "@/lib/places";
import { BRAND, CALL_NUMBER, callLink, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }) => {
    const pkg = getPackage(params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.pkg.title} | Mangalore Travel Cabs` : "Tour Package | Mangalore Travel Cabs" },
      { name: "description", content: loaderData?.pkg.summary ?? "Tour packages from Mangalore." },
    ],
  }),
  component: PackagePage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="bg-background px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-primary">Package not found</h1>
        <p className="mt-2 text-muted-foreground">This package does not exist or has been moved.</p>
        <Link to="/packages" className="mt-6 inline-flex rounded-full bg-gold px-5 py-2 text-sm font-bold text-gold-foreground">See all packages</Link>
      </section>
    </SiteLayout>
  ),
});

const guideIcons = [Shirt, Sunrise, Footprints, HeartHandshake];

function PackagePage() {
  const { pkg: p } = Route.useLoaderData();
  const msg = `Hi ${BRAND}, I'm interested in the "${p.title}" package. Please share details and a quote.`;
  const others = packages.filter((x) => x.slug !== p.slug).slice(0, 3);
  const guide = travelGuide[p.cat as keyof typeof travelGuide];
  const facts = [
    { icon: RouteIcon, l: "Distance", v: p.distance },
    { icon: CalendarDays, l: "Duration", v: p.duration },
    { icon: Car, l: "Suggested vehicle", v: p.vehicle },
  ];

  return (
    <SiteLayout>
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-navy-deep text-primary-foreground sm:min-h-[440px]">
        <div className="absolute inset-0 -z-20"><PhotoSlide imgs={p.imgs ?? [p.img]} alt={p.title} eager /></div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep/95 via-navy-deep/50 to-navy-deep/10" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-8 pt-16 sm:pb-12">
          <Link to="/packages" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-foreground/80 hover:text-gold">
            <ArrowLeft className="h-3.5 w-3.5" /> All packages
          </Link>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">{catLabel[p.cat as keyof typeof catLabel]}</p>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-5xl">{p.title}</h1>
          <p className="mt-3 max-w-xl text-sm text-primary-foreground/85 sm:text-base">{p.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold sm:text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 backdrop-blur"><RouteIcon className="h-3.5 w-3.5 text-gold" />{p.distance}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1.5 backdrop-blur"><Clock className="h-3.5 w-3.5 text-gold" />{p.duration}</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary">Route at a glance</h2>
            <div className="mt-4 rounded-2xl bg-secondary p-5"><RouteRail stops={p.stops} /></div>

            <h3 className="mt-10 font-display text-xl font-bold text-primary">What you will see</h3>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {p.stops.map((s, i) => (
                <li key={s.name} className="relative overflow-hidden rounded-2xl border border-border bg-card p-5">
                  <span className="absolute -right-2 -top-4 font-display text-7xl font-extrabold text-gold/15">{i + 1}</span>
                  <p className="relative font-display text-lg font-bold text-primary">{s.name}</p>
                  <p className="relative mt-1.5 text-sm text-muted-foreground">{s.note}</p>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-display text-xl font-bold text-primary">How the trip works</h3>
            <ol className="relative mt-5 space-y-5 border-l-2 border-dashed border-gold/50 pl-7">
              {p.plan.map((step: string, i: number) => (
                <li key={step} className="relative">
                  <span className="absolute -left-[2.35rem] grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-bold text-gold-foreground">{i + 1}</span>
                  <p className="text-sm text-muted-foreground sm:text-base">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted-foreground">The plan is flexible. Tell us what you would like to add or skip and we will adjust the trip.</p>

            <h3 className="mt-12 font-display text-xl font-bold text-primary">Travel guide</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {guide.map((g, i) => {
                const I = guideIcons[i % guideIcons.length] as typeof Shirt;
                return (
                  <div key={g.title} className="rounded-2xl border border-border bg-card p-5">
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-deep text-gold"><I className="h-4 w-4" /></span>
                      <h4 className="font-display font-bold text-primary">{g.title}</h4>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {g.items.map((t) => <li key={t} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{t}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-float lg:sticky lg:top-28">
            <h3 className="font-display text-lg font-bold text-primary">Trip details</h3>
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
              <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
            </a>
            <a href={callLink} className="mt-3 flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-primary transition hover:border-gold">
              <Phone className="h-4 w-4" /> Call {CALL_NUMBER.slice(0, 5)} {CALL_NUMBER.slice(5)}
            </a>
            <p className="mt-4 text-xs text-muted-foreground">Price is shared on enquiry. Tell us your date and group size. Distances are approximate.</p>
          </aside>
        </div>
      </section>

      <section className="bg-secondary py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle kicker="More trips" title="Other tour packages" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((x) => <PackageCard key={x.slug} p={x} />)}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
