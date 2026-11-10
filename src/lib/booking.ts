export const CALL_NUMBER = "8073565608";
export const WHATSAPP_NUMBER = "6366335594";
export const BRAND = "Mangalore Travel Cabs And Taxi Services";

export function whatsappLink(message: string) {
  return `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const callLink = `tel:+91${CALL_NUMBER}`;
