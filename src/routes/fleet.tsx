import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionTitle, GoldLink } from "@/components/SiteLayout";
import { VehicleCard } from "@/components/VehicleCard";
import { vehicles } from "@/lib/fleet";
import { BRAND, whatsappLink as wa } from "@/lib/booking";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Our Cabs & Vehicles in Mangalore | Mangalore Travel Cabs" },
      { name: "description", content: "Sedans, Ertiga, Kia Carens, Innova Crysta, Hycross, Tempo Traveller, Force Urbania, 21 seater mini bus and 50 seater bus in Mangaluru. Book on WhatsApp." },
      { property: "og:title", content: "Our Cabs & Vehicles in Mangalore" },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  return (
    <SiteLayout>
      <section className="bg-navy-deep py-14 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionTitle light center kicker="Our Cabs" title="The Right Vehicle for Every Trip" sub="Clean, air-conditioned vehicles driven by experienced local drivers. From a 4 seater sedan to a 50 seater bus, pick what suits your group." />
        </div>
      </section>
      <section className="bg-background py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((v) => <VehicleCard key={v.slug} v={v} detailed />)}
          </div>
          <div className="mt-12 rounded-2xl bg-secondary p-8 text-center">
            <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">Not sure which vehicle to pick?</h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">Tell us your group size, dates and luggage, and we will suggest the right vehicle. Price is shared on enquiry.</p>
            <GoldLink href={wa(`Hi ${BRAND}, I need help choosing a vehicle. Please share options and a quote.`)} className="mt-5">Ask on WhatsApp</GoldLink>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
