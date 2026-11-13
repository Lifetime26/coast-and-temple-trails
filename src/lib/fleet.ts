import fSedan from "@/assets/vehicle-sedan.jpg";
import fSuv from "@/assets/vehicle-suv.jpg";
import fTempo from "@/assets/vehicle-van.jpg";
import fErtiga from "@/assets/ertiga.png";
import fHycross from "@/assets/Hycross.jpg";
import fUrbania from "@/assets/vehicle-urbania.jpg";
import fKia from "@/assets/Kia.jpg";

/* ------------------------------------------------------------------ */
/*  EDIT VEHICLES HERE.                                               */
/*  To add a photo later:                                             */
/*   1. Put the image in src/assets (e.g. fleet-hycross.jpg)          */
/*   2. Add at the top:  import fHycross from "@/assets/fleet-hycross.jpg"; */
/*   3. Set  img: fHycross  on that vehicle (replaces the placeholder) */
/*  Set  featured: true  to show a vehicle on the home page.          */
/*  Seat counts and features below are standard guesses: please check */
/* ------------------------------------------------------------------ */

export type Vehicle = {
  slug: string;
  name: string;
  type: string;
  guests: string;
  bags?: string;
  features: string[];
  desc: string;
  bestFor: string;
  img?: string;
  zoom?: number;
  focus?: [number, number];
  featured?: boolean;
};

export const vehicles: Vehicle[] = [
  {
    slug: "sedan",
    name: "Swift Dzire / Toyota Etios",
    type: "4 Seater Sedan",
    guests: "4 Seater",
    bags: "2 bags",
    features: ["Chilled AC", "Fuel efficient", "Comfortable seats"],
    desc: "Comfortable, fuel-efficient sedans for city rides, airport transfers and small family trips.",
    bestFor: "Local rides and airport transfers",
    img: fSedan,
    featured: true,
  },
  {
    slug: "maruti-ertiga",
    name: "Maruti Suzuki Ertiga",
    type: "6 - 7 Seater Family MPV",
    guests: "6 - 7 Seater",
    bags: "2 medium bags",
    features: ["Rear AC vents", "Foldable rows", "Good mileage"],
    desc: "A reliable three-row MPV for small families, temple trips and sightseeing across Coastal Karnataka.",
    bestFor: "Family trips and temple yatras",
    img: fErtiga,
  },
  {
    slug: "kia-carens",
    name: "Kia Carens",
    type: "6 - 7 Seater Modern MPV",
    guests: "6 - 7 Seater",
    bags: "2 medium bags",
    features: ["Rear AC vents", "Spacious cabin", "Comfortable seats"],
    desc: "A modern, roomy MPV for families who want a smooth and comfortable ride.",
    bestFor: "Family trips and outstation tours",
    img: fKia,
    zoom: 1.5,
    focus: [46, 66],
  },
  {
    slug: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "6 - 7 Seater Prime MPV",
    guests: "6 - 7 Seater",
    bags: "3 large bags",
    features: ["Chilled AC", "Spacious seats", "Ghat-road comfort"],
    desc: "A smooth and powerful ride for family trips, ghat roads and long outstation journeys.",
    bestFor: "Outstation trips and long drives",
    img: fSuv,
    featured: true,
  },
  {
    slug: "innova-hycross",
    name: "Toyota Innova Hycross",
    type: "7 Seater Premium MPV",
    guests: "6 - 7 Seater",
    bags: "3 large bags",
    features: ["Premium interiors", "Rear AC", "Smooth ride"],
    desc: "Toyota's newest premium MPV. Roomy, quiet and comfortable for family trips and airport transfers.",
    bestFor: "Premium family travel and airport pickups",
    img: fHycross,
    zoom: 1.6,
    focus: [52, 74],
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    type: "12 - 17 Seater Mini Coach",
    guests: "12 - 17 Seater",
    bags: "Dedicated luggage space",
    features: ["Pushback seats", "Chilled AC", "Music system"],
    desc: "A roomy mini coach that keeps joint families and pilgrim groups together on one trip.",
    bestFor: "Groups, weddings and temple yatras",
    img: fTempo,
    featured: true,
  },
  {
    slug: "force-urbania",
    name: "Force Urbania",
    type: "13 - 17 Seater Premium Van",
    guests: "13 - 17 Seater",
    bags: "Luggage space",
    features: ["Chilled AC", "Pushback seats", "High roof"],
    desc: "A modern, comfortable van for groups who want extra legroom and a smooth ride.",
    bestFor: "Group tours and corporate travel",
    img: fUrbania,
  },
  {
    slug: "mini-bus-21",
    name: "21 Seater Mini Bus",
    type: "21 Seater Mini Bus",
    guests: "21 Seater",
    bags: "Luggage space",
    features: ["Chilled AC", "Comfortable seats", "Music system"],
    desc: "For medium-sized groups, wedding parties and pilgrim tours travelling together.",
    bestFor: "Weddings and medium groups",
  },
  {
    slug: "bus-50",
    name: "50 Seater Bus",
    type: "50 Seater Tourist Bus",
    guests: "50 Seater",
    bags: "Large luggage space",
    features: ["Chilled AC", "Comfortable seats", "Music system"],
    desc: "For large groups, school and college tours, wedding functions and pilgrimages.",
    bestFor: "Large groups and long tours",
  },
];
