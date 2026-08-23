// Zentrale, leicht bearbeitbare Inhaltsstruktur für MAZA Vienna.
// Hinweis: Alle Preise, Adressen und Öffnungszeiten sind PLATZHALTER.

export const IMAGES = {
  heroFeast:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/fc0c7f349e30b43bd2d271171b1c4c310aaf99c5819fcf9b9635ce6aeeb3ec29.png",
  aboutInterior:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/7ffdf0bf0071ae87166561ee8ba46d80ad6d87c4d6b0953bd7888aef7194a2e3.png",
  dishQabeli:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/6ec865822058daf72811c6055508f44c4c86871a4cc7115c6fa934365e654bde.png",
  dishMantu:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/16b71aafc9cbe5969f89fa7b47aa9858f5b5507a216f7c04c533340886790f4c.png",
  dishBolani:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/7ca5061ec69c5d7cd205257f6bf10d6272559fa793d61496bed0a6ef7851d69a.png",
  dishKebab:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/b45e4f4353d38d6c5cdcfe3795630820bbc87c130ecc56c43ccd564bc6e750b1.png",
  galleryLantern:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/bb793e8bcebd2298dd6041a19d680ad0aa7f8f5782352b79c12186b00d438c0c.png",
  galleryTable:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/5d5ecfe41f4579f31fe042506f4600605f4b2b7424210c7333c30e486a47079d.png",
  galleryDessert:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/9f7e47760a74f4482f2f3c059efde51c9e866f6295174be1c949635fcb1300b8.png",
  galleryTea:
    "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/a059c9647b6761cbba11b522da2c2835a5acf3c34255811741e5121e4835d8b1.png",
};

// Einheitliches Platzhalter-/Mockup-Bild für alle Menü-Positionen.
export const MENU_IMAGE =
  "https://static.prod-images.emergentagent.com/jobs/c49a0473-23fc-435e-8088-4761aa7306c1/images/2732b97cc4edfa425e0410c6e89665d92139b1266150564a968c9d8606c7b64a.png";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Über MAZA", href: "#ueber" },
  { label: "Menü", href: "/speisekarte" },
  { label: "Galerie", href: "#galerie" },
  { label: "Reservierung", href: "#reservierung" },
  { label: "Kontakt", href: "#kontakt" },
];

export const SIGNATURE_DISHES = [
  {
    id: "qabeli",
    name: "Qabeli Palau",
    tagline: "Das Nationalgericht",
    description:
      "Duftender Basmatireis mit zart geschmortem Lamm, karamellisierten Karotten und Rosinen – langsam gegart nach überlieferter Tradition.",
    price: "€ 24",
    image: IMAGES.dishQabeli,
  },
  {
    id: "mantu",
    name: "Mantu",
    tagline: "Handgefaltet",
    description:
      "Zarte Teigtaschen mit gewürztem Rindfleisch, verfeinert mit Knoblauchjoghurt, einer Sauce aus gelben Erbsen und getrockneter Minze.",
    price: "€ 18",
    image: IMAGES.dishMantu,
  },
  {
    id: "kebab",
    name: "Afghanische Grillgerichte",
    tagline: "Über offener Glut",
    description:
      "Über offener Flamme gegrillte Lammspieße auf Safranreis, begleitet von hausgebackenem Fladenbrot und Sumach-Zwiebeln.",
    price: "€ 26",
    image: IMAGES.dishKebab,
  },
  {
    id: "bolani",
    name: "Bolani",
    tagline: "Vegetarisch",
    description:
      "Knusprig gebackenes Fladenbrot, gefüllt mit Kartoffeln und frischen Kräutern, serviert mit kühlem Minzjoghurt.",
    price: "€ 14",
    image: IMAGES.dishBolani,
  },
];

export const PHILOSOPHY = [
  { no: "01", icon: "Landmark", title: "Tradition", text: "Rezepte, die über Generationen weitergereicht wurden – bewahrt in jedem Handgriff unserer Küche." },
  { no: "02", icon: "Flower2", title: "Kultur", text: "Jedes Gericht erzählt von der Vielfalt und Wärme der afghanischen Esskultur." },
  { no: "03", icon: "Leaf", title: "Qualität", text: "Ausgewählte, frische Zutaten und sorgfältige Zubereitung als Grundlage jeder Speise." },
  { no: "04", icon: "Lamp", title: "Gastfreundschaft", text: "Ein gedeckter Tisch ist eine Einladung – aufmerksam, herzlich und ohne Eile." },
  { no: "05", icon: "TreePalm", title: "Orient", text: "Moderne Präsentation trifft auf die zeitlose Sinnlichkeit des Orients." },
];

// Allergen-Kennzeichnung nach österreichischer Lebensmittelinformations-VO.
export const ALLERGENS = {
  A: "Glutenhaltiges Getreide",
  C: "Ei",
  G: "Milch / Laktose",
  H: "Schalenfrüchte (Nüsse)",
  L: "Sellerie",
};

// Vollständiges Menü — jede Kategorie hat eine slug-id für Anker-Links.
export const MENU = [
  {
    id: "suppen",
    category: "Suppen",
    items: [
      { name: "Hühnersuppe", desc: "Mit frischem Gemüse", allergens: ["A", "C", "L"], price: "€ 5,50" },
      { name: "Ash e Afghani", desc: "Afghanische Nudelsuppe", allergens: ["A", "C", "G"], price: "€ 5,50" },
    ],
  },
  {
    id: "vorspeisen",
    category: "Vorspeisen",
    items: [
      { name: "Sambosa Veggie", desc: "Gefüllte Teigtaschen", allergens: ["A"], price: "€ 4,90" },
      { name: "Sambosa mit Fleisch", desc: "Gefüllte Teigtaschen mit Hackfleisch", allergens: ["A"], price: "€ 5,90" },
      { name: "Bolani", desc: "Gefülltes Pfannenbrot mit Lauch oder Kartoffel", allergens: ["A"], price: "€ 2,90" },
    ],
  },
  {
    id: "hauptspeisen",
    category: "Hauptspeisen",
    items: [
      { name: "Maza Platte", desc: "Mixgrill mit beiden Reissorten – für 1, 2 oder 4 Personen", allergens: ["A", "G"], price: "auf Anfrage" },
      { name: "Kofta Chalau", desc: "Fleischbällchen in Tomatensauce mit Reis", allergens: ["A"], price: "€ 14,90" },
      { name: "Kabuli Palau mit Gosht", desc: "Afghanischer Reis mit Lamm", allergens: [], price: "€ 17,90" },
      { name: "Kabuli Palau mit Mahitscha", desc: "Afghanischer Reis mit Lammstelze", allergens: [], price: "€ 20,90" },
      { name: "Bamiya mit Reis", desc: "Okra mit Reis", allergens: [], price: "€ 12,90" },
      { name: "Ashak", desc: "Teigtaschen gefüllt mit Lauch", allergens: ["A", "G"], price: "€ 14,90" },
      { name: "Mantu", desc: "Gedämpfte Teigtaschen gefüllt mit Hackfleisch", allergens: ["A", "G"], price: "€ 16,90" },
      { name: "Borani Banjan", desc: "Auberginen mit Joghurtsauce und Reis", allergens: ["G"], price: "€ 12,90" },
      { name: "Kubideh", desc: "Hackfleischspieße aus Lamm und Rind mit Reis oder Pommes – 2 Stück", allergens: [], price: "€ 17,90" },
      { name: "Kabab-e Morgh", desc: "Hühnerspieße mit Reis oder Pommes – 2 Stück", allergens: [], price: "€ 16,90" },
      { name: "Teka Kabab", desc: "Lammspieß mit Reis oder Pommes", allergens: [], price: "€ 18,90" },
      { name: "Lammkotelett", desc: "Mit Reis oder Pommes", allergens: [], price: "€ 21,90" },
      { name: "Chapli Kabab mit Brot", desc: "Rinderhack-Patty", allergens: ["A"], price: "€ 11,90" },
      { name: "Gemischter Teller", desc: "2 Spieße nach Wahl: Kubideh, Huhn oder Teka", allergens: [], price: "€ 22,90" },
    ],
  },
  {
    id: "saucen",
    category: "Saucen",
    items: [
      { name: "Chatni", desc: "Scharfe Würzsauce", allergens: [], price: "€ 2,90" },
      { name: "Afghanische Joghurtsauce", desc: "", allergens: ["G"], price: "€ 2,90" },
      { name: "Traditionelle Torschi", desc: "Eingelegtes Gemüse", allergens: [], price: "€ 2,90" },
    ],
  },
  {
    id: "kindermenue",
    category: "Kindermenü",
    items: [
      { name: "Schnitzel", desc: "", allergens: ["A", "C"], price: "€ 10,90" },
      { name: "Pommes", desc: "", allergens: [], price: "€ 5,90" },
      { name: "Nuggets", desc: "", allergens: ["A", "C"], price: "€ 6,90" },
    ],
  },
  {
    id: "beilagen",
    category: "Beilagen",
    items: [
      { name: "Chalau", desc: "Afghanischer Reis", allergens: [], price: "€ 6,90" },
      { name: "Korma Lobya", desc: "Bohneneintopf nach afghanischer Art", allergens: [], price: "€ 4,90" },
      { name: "Korma Kofta", desc: "Fleischbällchen mit Sauce", allergens: ["A"], price: "€ 8,90" },
      { name: "Naan", desc: "Afghanisches Brot", allergens: ["A"], price: "€ 2,90" },
      { name: "Bamiya", desc: "Okra nach afghanischer Art", allergens: [], price: "€ 5,90" },
      { name: "Borani Banjan", desc: "Auberginen mit Joghurtsauce", allergens: ["G"], price: "€ 5,90" },
      { name: "Pommes", desc: "", allergens: [], price: "€ 5,90" },
    ],
  },
  {
    id: "salat",
    category: "Salat",
    items: [
      { name: "Afghanischer Salat", desc: "", allergens: [], price: "€ 2,90" },
    ],
  },
  {
    id: "nachspeisen",
    category: "Nachspeisen",
    items: [
      { name: "Firni", desc: "Afghanischer Milchpudding", allergens: ["G"], price: "€ 5,90" },
      { name: "Shir Berench", desc: "Afghanischer Milchreis", allergens: ["G"], price: "€ 5,90" },
      { name: "Shol-e Zard", desc: "Reispudding mit Safran", allergens: ["G"], price: "€ 5,90" },
      { name: "Hausgemachte Torten", desc: "Verschiedene Sorten", allergens: ["A", "C", "G", "H"], price: "€ 5,90" },
      { name: "Cream Roll", desc: "Teigröllchen mit süßer Sahnefüllung – 2 Stück", allergens: ["A", "C", "G"], price: "€ 4,90" },
      { name: "Jelabi", desc: "2 Stück", allergens: ["A"], price: "€ 4,90" },
      { name: "Shirpeera", desc: "", allergens: ["G", "H"], price: "€ 3,90" },
    ],
  },
];

export const GALLERY = [
  { src: IMAGES.heroFeast, alt: "Afghanisches Festmahl", span: "wide" },
  { src: IMAGES.galleryLantern, alt: "Orientalische Messinglaterne", span: "tall" },
  { src: IMAGES.dishQabeli, alt: "Qabeli Palau", span: "normal" },
  { src: IMAGES.galleryTable, alt: "Gedeckter Tisch", span: "normal" },
  { src: IMAGES.galleryTea, alt: "Afghanischer Tee", span: "normal" },
  { src: IMAGES.dishKebab, alt: "Afghanische Grillgerichte", span: "tall" },
  { src: IMAGES.galleryDessert, alt: "Afghanisches Dessert Firni", span: "normal" },
  { src: IMAGES.aboutInterior, alt: "Restaurant-Interieur", span: "wide" },
];

export const CONTACT = {
  addressLabel: "Adresse",
  address: "Gunoldstraße 1 / Heiligenstädterstraße 78, 1190 Wien",
  phoneLabel: "Telefon",
  phone: "+43 676 7222182",
  emailLabel: "E-Mail",
  email: "office@mazavienna.at",
  hours: [
    { day: "Montag – Sonntag", time: "11:00 – 22:00" },
  ],
  hoursNote: "Täglich geöffnet.",
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/maza.vienna/",
      icon: "Instagram",
    },
  ],
};

export const IMPRESSUM = {
  companyName: "Shehad Gastro GmbH",
  address: "Heiligenstädterstraße 87, 1190 Wien",
  country: "Österreich",
  uid: "ATU80895925",
  // PLATZHALTER — bitte mit den offiziellen Daten ergänzen:
  fnNumber: "FN 631698v",
  fnCourt: "Handelsgericht Wien",
  management: "Ramin Shehad",
  email: "office@mazavienna.at",
  phone: "+43 676 7222182",
  businessObject: "Gastronomie / Restaurantbetrieb",
  chamber: "Wirtschaftskammer Wien, Fachgruppe Gastronomie",
  tradeLaw: "Gewerbeordnung 1994 (GewO), abrufbar unter www.ris.bka.gv.at",
  supervisoryAuthority:
    "Magistratisches Bezirksamt für den 19. Bezirk (Gewerbebehörde)",
  osPlatform: "https://ec.europa.eu/consumers/odr",
};

export const LAZYFORMS_ENDPOINT =
  "https://api.lazyforms.com/f/a2c063a6-e789-4627-861b-62538523bd1c";
