import { describe, expect, it } from "vitest";
import { buildQuickBookingMessage, callLink, whatsappLink } from "@/lib/booking";

describe("booking links", () => {
  it("sends WhatsApp inquiries to 6366335594", () => {
    expect(whatsappLink("hi")).toBe("https://wa.me/916366335594?text=hi");
  });

  it("calls 8073565608", () => {
    expect(callLink).toBe("tel:+918073565608");
  });

  it("pre-fills from, to, date and trip type in the hero booking message", () => {
    const msg = buildQuickBookingMessage({ from: " Mangalore ", to: "Udupi", date: "2026-12-01", tripType: "Round Trip" });
    expect(msg).toContain("From: Mangalore\n");
    expect(msg).toContain("To: Udupi");
    expect(msg).toContain("Date: 2026-12-01");
    expect(msg).toContain("Trip Type: Round Trip");
  });
});
