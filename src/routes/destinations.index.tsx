import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, DestinationCard, GoldLink } from "@/components/SiteLayout";
import { destinations } from "@/lib/places";
import { BRAND, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/destinations/")({
  head: () => ({
    meta: [
      { title: "Places to Visit near Mangalore | Mangalore Travel Cabs" },
      { name: "description", content: "Beaches, temples and hill stations near Mangaluru. Read about each place and book a cab on WhatsApp." },
      { property: "og:title", content: "Places to Visit near Mangalore" },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <SiteLayout>
      <section className="bg-navy-deep py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle light center kicker="Explore Mangalore" title="Places to Visit" sub="From quiet beaches to ancient temples and misty hills, here are the places our guests love most. Tap a place to read more." />
        </div>
      </section>
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {destinations.map((d) => <DestinationCard key={d.slug} d={d} detailed />)}
          </div>
          <div className="mt-12 rounded-2xl bg-secondary p-8 text-center">
            <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">Not sure where to go?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us your dates and group size and we will suggest a plan.</p>
            <GoldLink href={wa(`Hi ${BRAND}, I need help planning a trip. Please suggest places and share details.`)} className="mt-5">Plan on WhatsApp</GoldLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
