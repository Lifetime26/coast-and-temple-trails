// Tour packages and popular destinations shown on the home page, plus the simple
// description each one gets on its own page (/tours/<slug> and /places/<slug>).
// Photos are stand-ins until the owner supplies real ones. No prices anywhere.
import sMurudeshwara from "@/assets/slide-murudeshwara.jpg";
import sUdupi from "@/assets/slide-udupi-malpe.jpg";
import sKollur from "@/assets/slide-kollur.jpg";
import sCoorg from "@/assets/slide-coorg.jpg";
import sDharmasthala from "@/assets/slide-dharmasthala.jpg";
import sBeach from "@/assets/slide-mangaluru-beach.jpg";
import sGokarna from "@/assets/slide-gokarna.jpg";
import sHampi from "@/assets/slide-hampi.jpg";
import sJog from "@/assets/slide-jog-falls.jpg";
import sBandipur from "@/assets/slide-bandipur.jpg";
import sMysore from "@/assets/slide-mysore.jpg";
import sChikkamagaluru from "@/assets/slide-chikkamagaluru.jpg";
import dTannirbhavi from "@/assets/dest-tannirbhavi.jpg";
import dKadri from "@/assets/dest-kadri.jpg";
import dAloysius from "@/assets/dest-aloysius.jpg";
import dUdupi from "@/assets/dest-udupi.jpg";
import dKollur from "@/assets/dest-kollur.jpg";
import dMurudeshwara from "@/assets/dest-murudeshwara.jpg";
import dCoorg from "@/assets/dest-coorg.jpg";
import tKukke from "@/assets/tour-kukke.jpg";
import tSringeri from "@/assets/tour-sringeri.jpg";
import tHoranadu from "@/assets/tour-horanadu.jpg";
import tGoa from "@/assets/tour-goa.jpg";
import tBekal from "@/assets/tour-bekal.jpg";
import tWayanad from "@/assets/tour-wayanad.jpg";
import tMunnar from "@/assets/tour-munnar.jpg";
import tThekkady from "@/assets/tour-thekkady.jpg";
import tAlleppey from "@/assets/tour-alleppey.jpg";
import tOoty from "@/assets/tour-ooty.jpg";
import tKodaikanal from "@/assets/tour-kodaikanal.jpg";
import tValparai from "@/assets/tour-valparai.jpg";
import tTirupati from "@/assets/tour-tirupati.jpg";
import tMantralayam from "@/assets/tour-mantralayam.jpg";
import tRameshwaram from "@/assets/tour-rameshwaram.jpg";
import tKanyakumari from "@/assets/tour-kanyakumari.jpg";

export type Cat = "temple" | "coastal" | "outstation" | "beyond";
export type Spot = { name: string; desc: string };
export type Tip = { t: string; d: string };

type GuideBase = {
  slug: string;
  title: string;
  cat: Cat;
  img: string;
  intro: string;
  about: string[];
  distance: string;
  bestTime: string;
  idealFor: string;
  highlights: Spot[];
};
export type TourPackage = GuideBase & { places: string };
export type Destination = GuideBase & { loc: string; tour: string };

export const catLabel: Record<Cat, string> = {
  temple: "Temple Yatra",
  coastal: "Coastal & Beach",
  outstation: "Outstation & Hills",
  beyond: "Beyond Karnataka",
};

export const tipsFor: Record<Cat, Tip[]> = {
  temple: [
    { t: "Dress traditionally", d: "Modest, traditional wear is preferred. Some temples ask men to remove shirts before entering." },
    { t: "Start early", d: "Morning darshan is calmer. We plan your pickup time around temple timings and queues." },
    { t: "Add nearby temples", d: "Tell us on WhatsApp and we can add other temples on the same route to your trip." },
  ],
  coastal: [
    { t: "Catch the sunset", d: "Evenings are the best time on the coast — we time the drive so you reach before sunset." },
    { t: "Sea safety", d: "Swim only where it is allowed. The sea is rough during the monsoon (June to September)." },
    { t: "Stay cool", d: "Carry water, sunscreen and a cap — coastal afternoons are hot and humid." },
  ],
  outstation: [
    { t: "Carry a light jacket", d: "Hill stations get cool in the evenings, especially from October to February." },
    { t: "Ghat roads", d: "Let your driver know if anyone gets motion sickness — we drive gently and stop for fresh-air breaks." },
    { t: "Book stays early", d: "Weekends and holidays fill up quickly. Share your hotel or homestay location for doorstep drop." },
  ],
  beyond: [
    { t: "Plan overnight stays", d: "These are long drives — tell us how many days you have and we'll suggest a comfortable plan." },
    { t: "Carry ID proof", d: "Hotels, check-posts and some temples ask for identity proof, so keep it handy." },
    { t: "Clear quote on WhatsApp", d: "Interstate permit, tolls and driver allowance are explained clearly in your WhatsApp quote." },
  ],
};

const city = "Within Mangaluru city";

export const packages: TourPackage[] = [
  // ---------- Temple Yatras ----------
  {
    slug: "kollur-mookambika-darshan", cat: "temple", title: "Kollur Mookambika Darshan", img: sKollur,
    places: "Kollur Mookambika Temple, Kodachadri Hills view, Souparnika River, Arishina Gundi Falls, Maravanthe Beach",
    intro: "Visit the sacred Mookambika Devi temple at the foot of the Kodachadri hills, with a scenic stop at Maravanthe beach on the way.",
    about: [
      "Kollur is one of the most important Devi temples in Karnataka, dedicated to Goddess Mookambika and associated with Adi Shankaracharya. The temple sits in a quiet green valley beside the Souparnika river.",
      "The drive from Mangaluru follows the coastal highway through Udupi and Kundapura. Many travellers stop at Maravanthe, where the road runs between the sea on one side and the river on the other.",
    ],
    distance: "approx. 135 km", bestTime: "October to March; Navaratri for festivities", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Mookambika Temple", desc: "The main shrine of Goddess Mookambika, open for darshan from early morning." },
      { name: "Kodachadri Hills view", desc: "Forest-covered peak near Kollur, known for sunrise views and the Sarvajna Peetha." },
      { name: "Souparnika River", desc: "Holy river flowing past the temple where pilgrims take a dip." },
      { name: "Arishina Gundi Falls", desc: "Forest waterfall reached by a short trek — best after the monsoon." },
      { name: "Maravanthe Beach", desc: "Beautiful stretch where the highway runs between the Arabian Sea and the river." },
    ],
  },
  {
    slug: "murudeshwara-shiva-yatra", cat: "temple", title: "Murudeshwara Shiva Yatra", img: sMurudeshwara,
    places: "Murudeshwara Temple & Shiva Statue, Netrani Island, Idagunji Ganapati, beach visit",
    intro: "See the giant Lord Shiva statue facing the Arabian Sea, the towering temple gopura and the beach below.",
    about: [
      "Murudeshwara is a seaside temple town in Uttara Kannada, built on Kanduka hill and surrounded on three sides by the sea. Its huge Shiva statue and tall Raja Gopura are visible from far away.",
      "The trip combines darshan with time on the beach and a visit to the famous Idagunji Ganapati temple near Honnavar. Netrani Island, off the coast, is popular for snorkelling and scuba diving in season.",
    ],
    distance: "approx. 165 km", bestTime: "October to March", idealFor: "Families, pilgrims & beach lovers",
    highlights: [
      { name: "Murudeshwara Temple & Shiva Statue", desc: "One of the tallest Shiva statues in the world, beside a 20-storey gopura with a lift to the top." },
      { name: "Netrani Island", desc: "Heart-shaped island known for snorkelling and scuba diving (seasonal)." },
      { name: "Idagunji Ganapati", desc: "Ancient and much-loved Ganesha temple near Honnavar." },
      { name: "Beach visit", desc: "Relax on the beach right below the temple hill." },
    ],
  },
  {
    slug: "udupi-krishna-temple-tour", cat: "temple", title: "Udupi Krishna Temple Tour", img: sUdupi,
    places: "Udupi Sri Krishna Matha, Malpe Beach, Kaup Lighthouse, St. Mary's Island, Manipal",
    intro: "Darshan at the famous Sri Krishna Matha, followed by Malpe beach, Kaup lighthouse and the university town of Manipal.",
    about: [
      "Udupi is known across India for its Sri Krishna Matha, founded by Sri Madhvacharya in the 13th century, and for its delicious Udupi-style vegetarian food.",
      "A short drive from the temple brings you to Malpe beach and the boat jetty for St. Mary's Island, the old Kaup lighthouse on the rocky shore, and the lively town of Manipal.",
    ],
    distance: "approx. 60 km", bestTime: "All year; October to March is most pleasant", idealFor: "Families, pilgrims & day trips",
    highlights: [
      { name: "Sri Krishna Matha", desc: "Famous temple where devotees see Lord Krishna through the Kanakana Kindi window." },
      { name: "Malpe Beach", desc: "Lively beach with water sports and boat rides." },
      { name: "Kaup Lighthouse", desc: "Old lighthouse on a rocky beach with lovely sunset views." },
      { name: "St. Mary's Island", desc: "Small islands with rare hexagonal basalt rocks, reached by boat from Malpe (seasonal)." },
      { name: "Manipal", desc: "University town with the End Point viewpoint and Hasta Shilpa Heritage Village." },
    ],
  },
  {
    slug: "dharmasthala-manjunatha-darshan", cat: "temple", title: "Dharmasthala Manjunatha Darshan", img: sDharmasthala,
    places: "Sri Manjunatha Temple, Bahubali Statue, Vintage Car Museum, Netravathi River",
    intro: "A peaceful day trip to the Sri Manjunatha Swamy temple on the banks of the Netravathi river.",
    about: [
      "Dharmasthala is one of Karnataka's most visited pilgrim centres. The Sri Manjunatha temple is known for its tradition of free meals (annadana) served to thousands of devotees every day.",
      "Besides the temple, visitors see the tall Bahubali statue on Ratnagiri hill and the Manjusha museum's collection of vintage cars.",
    ],
    distance: "approx. 75 km", bestTime: "All year; avoid peak festival days for shorter queues", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Sri Manjunatha Temple", desc: "Famous Shiva temple known for its daily free meals for devotees." },
      { name: "Bahubali Statue", desc: "A 39-foot monolithic statue of Lord Bahubali on Ratnagiri hill." },
      { name: "Vintage Car Museum", desc: "A large collection of classic cars from around the world." },
      { name: "Netravathi River", desc: "Holy river where pilgrims bathe before darshan." },
    ],
  },
  {
    slug: "kukke-subrahmanya-yatra", cat: "temple", title: "Kukke Subrahmanya Yatra", img: tKukke,
    places: "Kukke Subrahmanya Temple, Kumara Parvatha Trek, Biladwara Cave, Matsya Tirtha",
    intro: "Visit the ancient Kukke Subrahmanya temple, set among the forests and hills of the Western Ghats.",
    about: [
      "Kukke Subrahmanya is a famous temple of Lord Subrahmanya, worshipped here as the lord of serpents. Devotees come from across India for Sarpa Samskara and Ashlesha Bali poojas.",
      "The temple lies at the foot of Kumara Parvatha, one of the most popular treks in Karnataka, and is surrounded by thick green forest.",
    ],
    distance: "approx. 105 km", bestTime: "October to February", idealFor: "Pilgrims, families & trekkers",
    highlights: [
      { name: "Kukke Subrahmanya Temple", desc: "Ancient temple known for Sarpa Samskara and Naga poojas." },
      { name: "Kumara Parvatha Trek", desc: "One of Karnataka's toughest treks, starting near the temple." },
      { name: "Biladwara Cave", desc: "Natural cave near the temple linked to the legend of Vasuki." },
      { name: "Matsya Tirtha", desc: "Sacred bathing spot on the Kumaradhara river." },
    ],
  },
  {
    slug: "dharmasthala-kukke-subrahmanya-circuit", cat: "temple", title: "Dharmasthala & Kukke Subrahmanya Circuit", img: sDharmasthala,
    places: "Sri Manjunatha Temple, Kukke Subrahmanya Temple, Sowthadka",
    intro: "Cover two of Dakshina Kannada's most important temples, plus the open-air Sowthadka Ganapati, in one comfortable trip.",
    about: [
      "This popular circuit pairs Dharmasthala's Sri Manjunatha temple with the Kukke Subrahmanya temple in the Western Ghats. Both are well connected by road and easy to visit in a day or with an overnight stay.",
      "On the way, many families stop at Sowthadka, a unique Ganesha temple with no walls or roof, set in an open green clearing.",
    ],
    distance: "approx. 75–105 km", bestTime: "All year; October to February is most pleasant", idealFor: "Families & pilgrim groups",
    highlights: [
      { name: "Sri Manjunatha Temple", desc: "Dharmasthala's famous Shiva temple on the Netravathi river." },
      { name: "Kukke Subrahmanya Temple", desc: "Ancient temple of Lord Subrahmanya in the Western Ghats." },
      { name: "Sowthadka Mahaganapati", desc: "Open-air Ganesha temple with no walls or roof." },
    ],
  },
  {
    slug: "sringeri-sharadamba-yatra", cat: "temple", title: "Sringeri Sharadamba Yatra", img: tSringeri,
    places: "Sharadamba Temple, Vidyashankara Temple, Tunga River, Sirimane Falls",
    intro: "Visit the peaceful temple town of Sringeri on the banks of the Tunga river in the Malnad hills.",
    about: [
      "Sringeri is home to the Sharada Peetham, the first matha established by Adi Shankaracharya. The Sharadamba temple and the stone Vidyashankara temple stand side by side on the riverbank.",
      "The drive climbs through green Malnad countryside, and the nearby Sirimane Falls makes a refreshing stop.",
    ],
    distance: "approx. 105 km", bestTime: "September to March", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Sharadamba Temple", desc: "Seat of the Sringeri Sharada Peetham, dedicated to Goddess Sharada." },
      { name: "Vidyashankara Temple", desc: "14th-century stone temple famous for its zodiac pillars." },
      { name: "Tunga River", desc: "Feed the fish from the river steps beside the temple." },
      { name: "Sirimane Falls", desc: "Easy-to-reach waterfall near Kigga, a short drive away." },
    ],
  },
  {
    slug: "horanadu-annapoorneshwari-yatra", cat: "temple", title: "Horanadu Annapoorneshwari Yatra", img: tHoranadu,
    places: "Annapoorneshwari Temple, Kyatanamakki, Kalasa, Kudremukh",
    intro: "Visit Goddess Annapoorneshwari at Horanadu, deep in the green hills of the Western Ghats.",
    about: [
      "Horanadu's Annapoorneshwari temple is dedicated to the goddess of food, and every visitor is served a meal. The temple sits on the banks of the Bhadra river surrounded by hills and plantations.",
      "The route passes the temple town of Kalasa and the Kudremukh range, with lovely viewpoints along the way.",
    ],
    distance: "approx. 130 km", bestTime: "September to March", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Annapoorneshwari Temple", desc: "Temple of the goddess of food, where every visitor is served a meal." },
      { name: "Kyatanamakki", desc: "Hilltop viewpoint near Kalasa with sweeping Western Ghats views." },
      { name: "Kalasa", desc: "Temple town of Sri Kalaseshwara on the Bhadra river." },
      { name: "Kudremukh", desc: "Horse-face shaped peak and national park with grasslands and forests." },
    ],
  },
  // ---------- Coastal & Beach ----------
  {
    slug: "mangaluru-city-beaches", cat: "coastal", title: "Mangaluru City & Beaches", img: sBeach,
    places: "Panambur Beach, Tannirbhavi Beach, Sultan Battery",
    intro: "An easy city tour of Mangaluru's best beaches and the historic Sultan Battery watchtower.",
    about: [
      "Mangaluru has a long, beautiful coastline right inside the city. Panambur is lively and wide, while Tannirbhavi is quieter and lined with casuarina trees.",
      "The tour also covers Sultan Battery, a black-stone watchtower built by Tipu Sultan on the Gurupura river — perfect for a half-day or evening outing.",
    ],
    distance: city, bestTime: "October to March, evenings", idealFor: "Families, couples & visitors in town",
    highlights: [
      { name: "Panambur Beach", desc: "Wide, clean beach with sunsets, food stalls and water sports." },
      { name: "Tannirbhavi Beach", desc: "Calm beach lined with casuarina trees, reached by road or ferry." },
      { name: "Sultan Battery", desc: "Watchtower built by Tipu Sultan beside the Gurupura river." },
    ],
  },
  {
    slug: "heritage-temples-mangaluru", cat: "coastal", title: "Heritage & Temples of Mangaluru", img: dKadri,
    places: "St. Aloysius Chapel, Mangaladevi Temple, Kadri Manjunatha",
    intro: "Explore Mangaluru's famous painted chapel and its oldest temples in a relaxed city tour.",
    about: [
      "Mangaluru is a city of many faiths. This tour visits the St. Aloysius Chapel, known for its stunning wall-to-ceiling paintings, along with two of the city's most important temples.",
      "The Mangaladevi temple gives the city its name, and Kadri Manjunatha is an ancient temple on Kadri hill with sacred water tanks.",
    ],
    distance: city, bestTime: "All year", idealFor: "Families & first-time visitors",
    highlights: [
      { name: "St. Aloysius Chapel", desc: "Famous for paintings covering its walls and ceiling by Italian artist Antonio Moscheni." },
      { name: "Mangaladevi Temple", desc: "The temple from which Mangaluru gets its name." },
      { name: "Kadri Manjunatha", desc: "Ancient temple on Kadri hill with sacred water tanks and caves." },
    ],
  },
  {
    slug: "gokarna-temples-beaches", cat: "coastal", title: "Gokarna Temples & Beaches", img: sGokarna,
    places: "Mahabaleshwar Temple, Om Beach, Kudle Beach, Half Moon Beach",
    intro: "Combine darshan at the ancient Mahabaleshwar temple with Gokarna's famous beaches.",
    about: [
      "Gokarna is a small temple town on the Uttara Kannada coast. The Mahabaleshwar temple, home to the Atmalinga, is one of the holiest Shiva shrines in South India.",
      "Just outside town are some of Karnataka's most beautiful beaches — Kudle, Om and Half Moon — connected by cliff paths and boats.",
    ],
    distance: "approx. 230 km", bestTime: "October to March", idealFor: "Pilgrims, friends & beach lovers",
    highlights: [
      { name: "Mahabaleshwar Temple", desc: "Ancient Shiva temple housing the Atmalinga." },
      { name: "Om Beach", desc: "Beach shaped like the sacred Om symbol." },
      { name: "Kudle Beach", desc: "Relaxed beach with cafés, good for sunsets." },
      { name: "Half Moon Beach", desc: "Secluded crescent beach reached by trek or boat." },
    ],
  },
  // ---------- Outstation & Hills ----------
  {
    slug: "coorg-hill-station-getaway", cat: "outstation", title: "Coorg Hill Station Getaway", img: sCoorg,
    places: "Coffee plantations, Abbey Falls, Raja's Seat, Dubare Elephant Camp, Golden Temple Bylakuppe",
    intro: "Misty hills, coffee estates and waterfalls — Coorg is the favourite hill getaway from Mangaluru.",
    about: [
      "Coorg (Kodagu) is a hill district famous for coffee and spice plantations, cool weather and warm hospitality. The drive from Mangaluru climbs gently through the Sampaje ghat into Madikeri.",
      "Spend your days visiting waterfalls and viewpoints, watching elephants at Dubare, and seeing the beautiful Tibetan Golden Temple at Bylakuppe.",
    ],
    distance: "approx. 140 km", bestTime: "October to March; monsoon for greenery", idealFor: "Families, couples & friends",
    highlights: [
      { name: "Coffee plantations", desc: "Walk through coffee and pepper estates, many with homestays." },
      { name: "Abbey Falls", desc: "Popular waterfall surrounded by plantations, near Madikeri." },
      { name: "Raja's Seat", desc: "Garden viewpoint famous for sunsets over the valleys." },
      { name: "Dubare Elephant Camp", desc: "Watch elephants bathe and learn about them by the Kaveri river." },
      { name: "Golden Temple, Bylakuppe", desc: "Large, colourful Tibetan Buddhist monastery." },
    ],
  },
  {
    slug: "chikmagalur-coffee-trails", cat: "outstation", title: "Chikmagalur Coffee Trails", img: sChikkamagaluru,
    places: "Mullayanagiri Peak, Baba Budangiri, Coffee Museum, Kemmangundi, Hebbe Falls",
    intro: "Drive into Karnataka's coffee country for mountain peaks, waterfalls and cool, fresh air.",
    about: [
      "Chikkamagaluru is where coffee was first grown in India. Its hills are covered in coffee estates and shola forests, with the state's highest peak, Mullayanagiri, close to town.",
      "It's a great choice for a two- or three-day trip with family or friends, with plenty of viewpoints and waterfalls to explore.",
    ],
    distance: "approx. 150 km", bestTime: "September to March", idealFor: "Families, couples & friends",
    highlights: [
      { name: "Mullayanagiri Peak", desc: "The highest peak in Karnataka, with a temple at the top." },
      { name: "Baba Budangiri", desc: "Hill range where coffee was first planted in India." },
      { name: "Coffee Museum", desc: "Learn how coffee goes from bean to cup." },
      { name: "Kemmangundi", desc: "Quiet hill station with gardens and valley viewpoints." },
      { name: "Hebbe Falls", desc: "Two-step waterfall reached by jeep through coffee estates." },
    ],
  },
  {
    slug: "mysore-royal-heritage", cat: "outstation", title: "Mysore Royal Heritage", img: sMysore,
    places: "Mysore Palace, Chamundi Hill, Brindavan Gardens, Mysore Zoo",
    intro: "Discover the royal city of Mysuru — its grand palace, hilltop temple and famous gardens.",
    about: [
      "Mysuru was the seat of the Wodeyar kings and is known for its palaces, silk, sandalwood and the grand Dasara festival.",
      "The route from Mangaluru usually goes via Coorg, so it's easy to combine both in one trip.",
    ],
    distance: "approx. 250 km", bestTime: "October to March; Dasara for festivities", idealFor: "Families & history lovers",
    highlights: [
      { name: "Mysore Palace", desc: "Grand palace that is lit up with thousands of bulbs on Sunday evenings." },
      { name: "Chamundi Hill", desc: "Hilltop Chamundeshwari temple and the giant Nandi statue." },
      { name: "Brindavan Gardens", desc: "Terraced gardens below the KRS dam with a musical fountain." },
      { name: "Mysore Zoo", desc: "One of the oldest and best-kept zoos in India." },
    ],
  },
  {
    slug: "hampi-ancient-ruins", cat: "outstation", title: "Hampi Ancient Ruins", img: sHampi,
    places: "Virupaksha Temple, Vittala Temple & Stone Chariot, Hemakuta Hill, Tungabhadra River",
    intro: "Step back in time among the boulder hills and temple ruins of the Vijayanagara empire.",
    about: [
      "Hampi was once the capital of the mighty Vijayanagara empire and is now a UNESCO World Heritage Site. Hundreds of temples, palaces and markets are spread across a landscape of giant boulders.",
      "It's a long drive from Mangaluru, so we recommend at least two to three days with a night stay near Hampi or Hosapete.",
    ],
    distance: "approx. 370 km", bestTime: "October to February", idealFor: "Families, friends & history lovers",
    highlights: [
      { name: "Virupaksha Temple", desc: "A living temple that has been in worship for centuries." },
      { name: "Vittala Temple & Stone Chariot", desc: "Home of Hampi's iconic stone chariot and musical pillars." },
      { name: "Hemakuta Hill", desc: "Cluster of early temples and a favourite sunset spot." },
      { name: "Tungabhadra River", desc: "Take a round coracle ride between the boulders." },
    ],
  },
  {
    slug: "jog-falls-sharavathi-valley", cat: "outstation", title: "Jog Falls & Sharavathi Valley", img: sJog,
    places: "Jog Falls viewpoints, Sharavathi Valley, Linganamakki Dam",
    intro: "See one of India's highest waterfalls thunder into the Sharavathi valley.",
    about: [
      "At Jog Falls, the Sharavathi river drops about 250 metres in four streams known as Raja, Rani, Roarer and Rocket. It is at its most powerful during and just after the monsoon.",
      "The drive passes through thick Western Ghats forest, and the nearby Linganamakki dam and valley viewpoints make the trip complete.",
    ],
    distance: "approx. 225 km", bestTime: "July to November", idealFor: "Families, friends & nature lovers",
    highlights: [
      { name: "Jog Falls viewpoints", desc: "Watch the four streams of the falls from the viewing gallery." },
      { name: "Sharavathi Valley", desc: "Deep, forested valley and wildlife sanctuary." },
      { name: "Linganamakki Dam", desc: "Large reservoir on the Sharavathi river above the falls." },
    ],
  },
  {
    slug: "bandipur-tiger-safari", cat: "outstation", title: "Bandipur Tiger Safari", img: sBandipur,
    places: "Bandipur National Park jungle safari, Gopalaswamy Betta, wildlife reserve",
    intro: "Head into one of India's best tiger reserves for jungle safaris and wildlife sightings.",
    about: [
      "Bandipur National Park is part of the Nilgiri Biosphere Reserve and home to tigers, elephants, gaur, deer and many birds.",
      "Forest department safaris run in the early morning and late afternoon. We plan the drive so you reach in time for your safari slot.",
    ],
    distance: "approx. 290 km", bestTime: "October to May", idealFor: "Families, friends & wildlife lovers",
    highlights: [
      { name: "Jungle safari", desc: "Forest department jeep and bus safaris to spot tigers, elephants and deer." },
      { name: "Gopalaswamy Betta", desc: "Hilltop temple inside the reserve, often covered in mist." },
      { name: "Wildlife reserve", desc: "Part of the Nilgiri Biosphere, rich in birds and animals." },
    ],
  },
  // ---------- Beyond Karnataka ----------
  {
    slug: "goa-beaches-heritage", cat: "beyond", title: "Goa Beaches & Heritage", img: tGoa,
    places: "Baga Beach, Basilica of Bom Jesus, Dudhsagar Falls, Fort Aguada",
    intro: "Golden beaches, old Portuguese churches and forts — a road trip up the coast to Goa.",
    about: [
      "Goa is India's favourite beach holiday, known for its relaxed vibe, seafood and Portuguese heritage.",
      "The coastal drive from Mangaluru passes Udupi, Murudeshwara and Karwar, so you can add stops on the way.",
    ],
    distance: "approx. 365 km", bestTime: "November to February", idealFor: "Friends, couples & families",
    highlights: [
      { name: "Baga Beach", desc: "Lively North Goa beach with shacks and water sports." },
      { name: "Basilica of Bom Jesus", desc: "UNESCO-listed church in Old Goa holding the relics of St. Francis Xavier." },
      { name: "Dudhsagar Falls", desc: "Four-tiered waterfall on the Goa–Karnataka border, best after the monsoon." },
      { name: "Fort Aguada", desc: "17th-century Portuguese fort and lighthouse by the sea." },
    ],
  },
  {
    slug: "bekal-fort-kerala-coast", cat: "beyond", title: "Bekal Fort & Kerala Coast", img: tBekal,
    places: "Bekal Fort, Kappil Beach, Ananthapura Lake Temple",
    intro: "A short, scenic drive south to Kerala's largest fort, quiet beaches and a lake temple.",
    about: [
      "Bekal, just across the Kerala border, is home to a huge seaside fort with walls that rise straight out of the Arabian Sea.",
      "It's an easy day trip from Mangaluru, combined with the calm Kappil beach and the Ananthapura lake temple.",
    ],
    distance: "approx. 65 km", bestTime: "October to March", idealFor: "Families, couples & day trips",
    highlights: [
      { name: "Bekal Fort", desc: "Kerala's largest fort, overlooking the Arabian Sea." },
      { name: "Kappil Beach", desc: "Quiet beach with backwater views nearby." },
      { name: "Ananthapura Lake Temple", desc: "Kerala's only lake temple, set in the middle of a pond." },
    ],
  },
  {
    slug: "wayanad-forests-hills", cat: "beyond", title: "Wayanad Forests & Hills", img: tWayanad,
    places: "Edakkal Caves, Chembra Peak, Banasura Sagar Dam, Soochipara Falls",
    intro: "Green hills, ancient caves and waterfalls in Kerala's Wayanad district.",
    about: [
      "Wayanad is a hilly district of forests, tea and spice plantations, popular for nature stays and easy treks.",
      "From Mangaluru, the drive usually goes via Coorg or the Kerala coast, making it a good two- to three-day trip.",
    ],
    distance: "approx. 250 km", bestTime: "October to May", idealFor: "Families, couples & nature lovers",
    highlights: [
      { name: "Edakkal Caves", desc: "Natural caves with prehistoric rock carvings." },
      { name: "Chembra Peak", desc: "Trek up to a famous heart-shaped lake." },
      { name: "Banasura Sagar Dam", desc: "Large earth dam with islands and boating." },
      { name: "Soochipara Falls", desc: "Three-tiered waterfall in the forest." },
    ],
  },
  {
    slug: "munnar-tea-hills", cat: "beyond", title: "Munnar Tea Hills", img: tMunnar,
    places: "Tea gardens, Mattupetty Dam, Eravikulam National Park, Echo Point",
    intro: "Endless green tea gardens, cool weather and misty peaks in Kerala's most famous hill station.",
    about: [
      "Munnar sits high in the Western Ghats of Kerala and is covered in neat rows of tea gardens.",
      "It's a long journey from Mangaluru, so we recommend planning a multi-day trip with overnight stops on the way.",
    ],
    distance: "approx. 550 km", bestTime: "September to March", idealFor: "Couples & families",
    highlights: [
      { name: "Tea gardens", desc: "Walk through rolling hills of tea and visit a tea museum." },
      { name: "Mattupetty Dam", desc: "Scenic dam and lake with boating." },
      { name: "Eravikulam National Park", desc: "Home of the rare Nilgiri tahr." },
      { name: "Echo Point", desc: "Lakeside spot famous for its natural echo." },
    ],
  },
  {
    slug: "thekkady-wildlife-escape", cat: "beyond", title: "Thekkady Wildlife Escape", img: tThekkady,
    places: "Periyar Wildlife Sanctuary, spice plantation tour, bamboo rafting, elephant rides",
    intro: "Boat rides on Periyar lake, spice gardens and forest adventures in Thekkady.",
    about: [
      "Thekkady is home to the Periyar Tiger Reserve, where boat rides on the lake give you a chance to see elephants, gaur and birds at the water's edge.",
      "The town is also surrounded by spice plantations growing cardamom, pepper and more.",
    ],
    distance: "approx. 580 km", bestTime: "October to March", idealFor: "Families & nature lovers",
    highlights: [
      { name: "Periyar Wildlife Sanctuary", desc: "Boat rides on Periyar lake to watch wildlife." },
      { name: "Spice plantation tour", desc: "See how cardamom, pepper and cinnamon are grown." },
      { name: "Bamboo rafting", desc: "Guided rafting and forest walks inside the reserve." },
      { name: "Elephant rides", desc: "Elephant experiences offered around Thekkady." },
    ],
  },
  {
    slug: "alleppey-backwaters", cat: "beyond", title: "Alleppey Backwaters", img: tAlleppey,
    places: "Houseboat cruise, Alappuzha Beach, Vembanad Lake, Marari Beach",
    intro: "Float through palm-lined canals on a traditional Kerala houseboat.",
    about: [
      "Alappuzha (Alleppey) is famous for its backwaters — a network of canals, lakes and villages best seen from a houseboat.",
      "We drive you to the houseboat jetty and pick you up after your cruise. Combine it with Munnar or Thekkady for a complete Kerala trip.",
    ],
    distance: "approx. 470 km", bestTime: "October to March", idealFor: "Couples & families",
    highlights: [
      { name: "Houseboat cruise", desc: "Day or overnight cruise on a traditional kettuvallam." },
      { name: "Alappuzha Beach", desc: "Long beach with an old pier and lighthouse." },
      { name: "Vembanad Lake", desc: "Kerala's longest lake, at the heart of the backwaters." },
      { name: "Marari Beach", desc: "Quiet fishing-village beach near Alleppey." },
    ],
  },
  {
    slug: "ooty-queen-of-hill-stations", cat: "beyond", title: "Ooty – Queen of Hill Stations", img: tOoty,
    places: "Ooty Lake, Botanical Garden, Doddabetta Peak, Nilgiri Mountain Railway",
    intro: "Cool weather, gardens and the famous toy train in the Nilgiri hills.",
    about: [
      "Ooty (Udhagamandalam) is one of South India's best-loved hill stations, with tea estates, lakes and colonial-era gardens.",
      "The route goes via Mysuru and Bandipur, so wildlife sightings on the way are common.",
    ],
    distance: "approx. 360 km", bestTime: "October to June", idealFor: "Families & couples",
    highlights: [
      { name: "Ooty Lake", desc: "Boating on a lake surrounded by eucalyptus trees." },
      { name: "Botanical Garden", desc: "Large terraced garden with rare plants and flowers." },
      { name: "Doddabetta Peak", desc: "Highest point in the Nilgiris with a viewing tower." },
      { name: "Nilgiri Mountain Railway", desc: "UNESCO heritage toy train through the hills." },
    ],
  },
  {
    slug: "kodaikanal-lakes-valleys", cat: "beyond", title: "Kodaikanal Lakes & Valleys", img: tKodaikanal,
    places: "Kodaikanal Lake, Coaker's Walk, Bryant Park, Pillar Rocks",
    intro: "Misty valleys, pine forests and a star-shaped lake in the Palani hills.",
    about: [
      "Kodaikanal is a peaceful hill station in Tamil Nadu, known as the 'Princess of Hill Stations'.",
      "It's a long trip from Mangaluru, best planned over several days with comfortable overnight stops.",
    ],
    distance: "approx. 620 km", bestTime: "October to June", idealFor: "Couples & families",
    highlights: [
      { name: "Kodaikanal Lake", desc: "Star-shaped lake with boating and cycling around it." },
      { name: "Coaker's Walk", desc: "Paved path along a cliff with valley views." },
      { name: "Bryant Park", desc: "Flower garden beside the lake." },
      { name: "Pillar Rocks", desc: "Three tall granite pillars rising from the valley." },
    ],
  },
  {
    slug: "valparai-tea-estates", cat: "beyond", title: "Valparai Tea Estates", img: tValparai,
    places: "Tea estates, Sholayar Dam, Aliyar Dam, Monkey Falls",
    intro: "A quiet hill escape of tea estates, hairpin bends and wildlife in the Anamalai hills.",
    about: [
      "Valparai is a less-crowded hill station in Tamil Nadu, reached by a scenic road with 40 hairpin bends from Aliyar.",
      "Expect tea estates, dams, waterfalls and frequent wildlife sightings, including lion-tailed macaques and elephants.",
    ],
    distance: "approx. 460 km", bestTime: "September to May", idealFor: "Nature lovers & couples",
    highlights: [
      { name: "Tea estates", desc: "Miles of tea gardens covering the hills." },
      { name: "Sholayar Dam", desc: "One of the deepest dams in Asia, surrounded by forest." },
      { name: "Aliyar Dam", desc: "Reservoir with a park at the foot of the ghat road." },
      { name: "Monkey Falls", desc: "Natural waterfall on the way up to Valparai." },
    ],
  },
  {
    slug: "tirupati-balaji-darshan", cat: "beyond", title: "Tirupati Balaji Darshan", img: tTirupati,
    places: "Sri Venkateswara Temple, Padmavathi Temple, Silathoranam, Kapila Theertham",
    intro: "A comfortable road pilgrimage to Lord Venkateswara at Tirumala.",
    about: [
      "Tirumala's Sri Venkateswara temple is one of the most visited pilgrim centres in the world. Most families book their darshan tickets online in advance.",
      "We plan the long drive with rest stops and can wait while you complete darshan and visit nearby temples.",
    ],
    distance: "approx. 600 km", bestTime: "All year; September to February is cooler", idealFor: "Families & pilgrim groups",
    highlights: [
      { name: "Sri Venkateswara Temple", desc: "The famous hill temple of Lord Balaji at Tirumala." },
      { name: "Padmavathi Temple", desc: "Temple of Goddess Padmavathi at Tiruchanur." },
      { name: "Silathoranam", desc: "Rare natural rock arch near the Tirumala temple." },
      { name: "Kapila Theertham", desc: "Shiva temple with a waterfall at the foot of the hills." },
    ],
  },
  {
    slug: "mantralayam-raghavendra-yatra", cat: "beyond", title: "Mantralayam Raghavendra Yatra", img: tMantralayam,
    places: "Raghavendra Swamy Mutt, Panchamukhi Anjaneya Temple, Tungabhadra River, Manchalamma Temple",
    intro: "Pilgrimage to the Brindavana of Sri Raghavendra Swamy on the banks of the Tungabhadra.",
    about: [
      "Mantralayam is the holy town where Sri Raghavendra Swamy entered Brindavana. Devotees from across South India visit the mutt throughout the year.",
      "Many pilgrims first visit the Manchalamma temple and take a dip in the Tungabhadra river before darshan.",
    ],
    distance: "approx. 590 km", bestTime: "October to February", idealFor: "Families & pilgrim groups",
    highlights: [
      { name: "Raghavendra Swamy Mutt", desc: "The Brindavana of Sri Raghavendra Swamy." },
      { name: "Panchamukhi Anjaneya Temple", desc: "Five-faced Hanuman temple near Mantralayam." },
      { name: "Tungabhadra River", desc: "Holy river with bathing ghats beside the mutt." },
      { name: "Manchalamma Temple", desc: "Village goddess traditionally visited before the mutt." },
    ],
  },
  {
    slug: "rameshwaram-temple-tour", cat: "beyond", title: "Rameshwaram Temple Tour", img: tRameshwaram,
    places: "Ramanathaswamy Temple, Dhanushkodi, Pamban Bridge, Agni Theertham",
    intro: "Visit the Ramanathaswamy Jyotirlinga and the island's sacred shores.",
    about: [
      "Rameshwaram is one of the Char Dham pilgrimages and home to the Ramanathaswamy temple, famous for its long pillared corridors.",
      "The island is reached by the Pamban bridge, and a drive to Dhanushkodi at the tip of India is a must.",
    ],
    distance: "approx. 900 km", bestTime: "October to April", idealFor: "Families & pilgrim groups",
    highlights: [
      { name: "Ramanathaswamy Temple", desc: "Jyotirlinga temple with one of the longest temple corridors in India." },
      { name: "Dhanushkodi", desc: "Ghost town and beach at the southern tip of the island." },
      { name: "Pamban Bridge", desc: "Sea bridge connecting Rameshwaram to the mainland." },
      { name: "Agni Theertham", desc: "Sacred beach where pilgrims take a holy dip." },
    ],
  },
  {
    slug: "kanyakumari-sunrise-tour", cat: "beyond", title: "Kanyakumari Sunrise Tour", img: tKanyakumari,
    places: "Vivekananda Rock Memorial, Thiruvalluvar Statue, Kanyakumari Beach, Padmanabhapuram Palace",
    intro: "Watch the sunrise at the southern tip of India, where three seas meet.",
    about: [
      "Kanyakumari is where the Arabian Sea, the Bay of Bengal and the Indian Ocean meet. Sunrise and sunset here are unforgettable.",
      "The coastal drive down through Kerala can be combined with Alleppey or Thiruvananthapuram for a longer holiday.",
    ],
    distance: "approx. 730 km", bestTime: "October to March", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Vivekananda Rock Memorial", desc: "Memorial on a rock island, reached by ferry." },
      { name: "Thiruvalluvar Statue", desc: "133-foot stone statue of the Tamil poet." },
      { name: "Kanyakumari Beach", desc: "Watch sunrise and sunset over the meeting of three seas." },
      { name: "Padmanabhapuram Palace", desc: "Beautiful wooden palace of the Travancore kings." },
    ],
  },
];

export const destinations: Destination[] = [
  {
    slug: "tannirbhavi-beach", cat: "coastal", title: "Tannirbhavi Beach", loc: "Mangaluru", img: dTannirbhavi, tour: "mangaluru-city-beaches",
    intro: "A calm, clean beach in Mangaluru, lined with casuarina trees — perfect for a relaxed evening.",
    about: [
      "Tannirbhavi is one of Mangaluru's most peaceful beaches, quieter than Panambur and loved by families for evening walks and sunsets.",
      "You can reach it by road or take the short ferry ride across the Gurupura river from Sultan Battery.",
    ],
    distance: city, bestTime: "October to March, evenings", idealFor: "Families & couples",
    highlights: [
      { name: "Sunset views", desc: "Wide, open beach facing west over the Arabian Sea." },
      { name: "Ferry from Sultan Battery", desc: "A short boat ride across the river to the beach." },
      { name: "Tree Park", desc: "Shady park with walking paths beside the beach." },
    ],
  },
  {
    slug: "kadri-manjunath-temple", cat: "temple", title: "Kadri Manjunath Temple", loc: "Mangaluru", img: dKadri, tour: "heritage-temples-mangaluru",
    intro: "One of Mangaluru's oldest temples, on Kadri hill, with sacred water tanks and caves.",
    about: [
      "The Kadri Manjunatha temple is dedicated to Lord Shiva and is famous for its ancient bronze idols, including a statue of Lokeshwara.",
      "Behind the temple, natural springs flow into sacred tanks, and steps lead up to small caves on the hill.",
    ],
    distance: city, bestTime: "All year; mornings and evenings", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Main shrine", desc: "Ancient Shiva temple with beautiful bronze idols." },
      { name: "Sacred water tanks", desc: "Spring-fed tanks where water flows through stone spouts." },
      { name: "Kadri caves", desc: "Small caves on the hill behind the temple." },
    ],
  },
  {
    slug: "st-aloysius-chapel", cat: "coastal", title: "St. Aloysius Chapel", loc: "Mangaluru", img: dAloysius, tour: "heritage-temples-mangaluru",
    intro: "A historic chapel in the heart of Mangaluru, famous for paintings that cover every wall and ceiling.",
    about: [
      "The St. Aloysius Chapel stands on Lighthouse Hill inside the St. Aloysius College campus. Its walls and ceiling were painted by Italian Jesuit artist Antonio Moscheni.",
      "It is one of Mangaluru's best-known landmarks and an easy stop on a city tour.",
    ],
    distance: city, bestTime: "All year", idealFor: "Families & art lovers",
    highlights: [
      { name: "Painted walls & ceiling", desc: "Large paintings showing the life of St. Aloysius and Bible stories." },
      { name: "Lighthouse Hill", desc: "Historic hill area with the old lighthouse nearby." },
      { name: "College campus", desc: "Calm, green campus around the chapel." },
    ],
  },
  {
    slug: "udupi-krishna-temple", cat: "temple", title: "Udupi Krishna Temple", loc: "Udupi", img: dUdupi, tour: "udupi-krishna-temple-tour",
    intro: "The famous Sri Krishna Matha, where devotees see Lord Krishna through a small silver window.",
    about: [
      "Founded by Sri Madhvacharya in the 13th century, the Udupi Sri Krishna Matha is one of the most important Krishna temples in India.",
      "The temple is surrounded by the eight mathas (Ashta Mathas), and the town is famous for its vegetarian food.",
    ],
    distance: "approx. 60 km", bestTime: "All year", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Kanakana Kindi", desc: "The small window through which devotees see Lord Krishna." },
      { name: "Madhva Sarovara", desc: "Sacred temple tank beside the matha." },
      { name: "Car Street", desc: "The square around the temple, home of the Ashta Mathas." },
    ],
  },
  {
    slug: "kollur-mookambika", cat: "temple", title: "Kollur Mookambika", loc: "Kollur", img: dKollur, tour: "kollur-mookambika-darshan",
    intro: "The sacred temple of Goddess Mookambika, in a green valley at the foot of the Kodachadri hills.",
    about: [
      "Kollur Mookambika is one of the most visited Devi temples in South India, associated with Adi Shankaracharya.",
      "The Souparnika river flows past the temple, and the Kodachadri hills rise behind it.",
    ],
    distance: "approx. 135 km", bestTime: "October to March", idealFor: "Families & pilgrims",
    highlights: [
      { name: "Mookambika Temple", desc: "Main shrine of Goddess Mookambika." },
      { name: "Souparnika River", desc: "Holy river beside the temple." },
      { name: "Kodachadri", desc: "Forest peak nearby, famous for sunrise views." },
    ],
  },
  {
    slug: "murudeshwara", cat: "temple", title: "Murudeshwara", loc: "Bhatkal", img: dMurudeshwara, tour: "murudeshwara-shiva-yatra",
    intro: "A seaside temple town with a giant Lord Shiva statue and one of the tallest temple towers in India.",
    about: [
      "Murudeshwara is built on a small hill surrounded by the Arabian Sea on three sides. The huge Shiva statue and the 20-storey Raja Gopura are its famous landmarks.",
      "The beach below the temple and nearby Netrani Island make it a great mix of pilgrimage and holiday.",
    ],
    distance: "approx. 165 km", bestTime: "October to March", idealFor: "Families, pilgrims & beach lovers",
    highlights: [
      { name: "Shiva Statue", desc: "One of the tallest Shiva statues in the world." },
      { name: "Raja Gopura", desc: "20-storey temple tower with a lift to the top for sea views." },
      { name: "Murudeshwara Beach", desc: "Beach right below the temple hill." },
    ],
  },
  {
    slug: "coorg", cat: "outstation", title: "Coorg", loc: "Kodagu", img: dCoorg, tour: "coorg-hill-station-getaway",
    intro: "Misty hills, coffee estates and waterfalls — the 'Scotland of India', a short drive from Mangaluru.",
    about: [
      "Coorg (Kodagu) is a hill district famous for coffee, spices, cool weather and homestays.",
      "Madikeri, the main town, is about four hours from Mangaluru via the Sampaje ghat.",
    ],
    distance: "approx. 140 km", bestTime: "October to March; monsoon for greenery", idealFor: "Families, couples & friends",
    highlights: [
      { name: "Abbey Falls", desc: "Popular waterfall near Madikeri." },
      { name: "Raja's Seat", desc: "Sunset viewpoint over the valleys." },
      { name: "Dubare Elephant Camp", desc: "See elephants by the Kaveri river." },
    ],
  },
];

export const findTour = (slug: string) => packages.find((p) => p.slug === slug);
export const findPlace = (slug: string) => destinations.find((d) => d.slug === slug);
