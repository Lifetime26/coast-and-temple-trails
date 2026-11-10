export const CALL_NUMBER = "8073565608";
export const WHATSAPP_NUMBER = "6366335594";
export const BRAND = "Mangalore Travel Cabs And Taxi Services";

export const TRIP_TYPES = ["One Way", "Round Trip", "Outstation / Tour"] as const;

export function whatsappLink(message: string) {
  return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const callLink = `tel:+91${CALL_NUMBER}`;

export type QuickBooking = { from: string; to: string; date: string; tripType: string };

export function buildQuickBookingMessage(b: QuickBooking) {
  return [
    `Hi ${BRAND}, I'd like to book a cab.`,
    "",
    `From: ${b.from.trim()}`,
    `To: ${b.to.trim()}`,
    `Date: ${b.date || "Flexible"}`,
    `Trip Type: ${b.tripType}`,
  ].join("\n");
}
