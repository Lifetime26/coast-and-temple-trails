import { describe, expect, it } from "vitest";
import { callLink, whatsappLink } from "@/lib/booking";

describe("booking links", () => {
  it("sends WhatsApp inquiries to 6366335594", () => {
    expect(whatsappLink("hi")).toBe("https://wa.me/916366335594?text=hi");
  });

  it("calls 8073565608", () => {
    expect(callLink).toBe("tel:+918073565608");
  });
});
