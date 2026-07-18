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

// Vollständiges Menü — jede Kategorie hat eine slug-id für Anker-Links.
// Alle Angaben sind Platzhalter und können frei angepasst werden.
export const MENU = [
  {
    id: "vorspeisen",
    category: "Vorspeisen",
    items: [
      { name: "Bolani", desc: "Gefülltes Fladenbrot, Minzjoghurt", price: "€ 9" },
      { name: "Sambosa", desc: "Knusprige Teigtaschen, Kräuter", price: "€ 8" },
      { name: "Borani Banjan", desc: "Aubergine, Tomate, Joghurt", price: "€ 10" },
      { name: "Kichererbsen-Salat", desc: "Frische Kräuter, Zitrone, Sumach", price: "€ 8" },
    ],
  },
  {
    id: "toepfe",
    category: "Töpfe & Eintöpfe",
    items: [
      { name: "Qorma-e-Sabzi", desc: "Spinat-Eintopf mit Lamm", price: "€ 19" },
      { name: "Qorma-e-Lawand", desc: "Huhn, Joghurt, Kurkuma", price: "€ 18" },
      { name: "Shorwa", desc: "Klare Lammsuppe, Kichererbsen", price: "€ 12" },
    ],
  },
  {
    id: "klassiker",
    category: "Afghanische Klassiker",
    items: [
      { name: "Qabeli Palau", desc: "Lamm, Basmati, Karotten, Rosinen", price: "€ 24" },
      { name: "Mantu", desc: "Teigtaschen, Knoblauchjoghurt", price: "€ 18" },
      { name: "Kabuli Chicken", desc: "Huhn, Safranreis, Gewürze", price: "€ 21" },
      { name: "Aushak", desc: "Lauch-Teigtaschen, Joghurt, Minze", price: "€ 17" },
    ],
  },
  {
    id: "grill",
    category: "Grillgerichte",
    items: [
      { name: "Lamm Kebab", desc: "Safranreis, Fladenbrot", price: "€ 26" },
      { name: "Chapli Kebab", desc: "Würziges Rindfleisch, Kräuter", price: "€ 22" },
      { name: "Hähnchen-Spieß", desc: "Mariniert, gegrilltes Gemüse", price: "€ 20" },
      { name: "Gemischte Platte", desc: "Für zwei Personen", price: "€ 48" },
    ],
  },
  {
    id: "vegetarisch",
    category: "Vegetarische Gerichte",
    items: [
      { name: "Sabzi Palau", desc: "Spinat, Kräuter, Basmati", price: "€ 16" },
      { name: "Kadu Buranee", desc: "Kürbis, Joghurt, Minze", price: "€ 15" },
      { name: "Dal Afghani", desc: "Linsen, Gewürze, Fladenbrot", price: "€ 14" },
    ],
  },
  {
    id: "desserts",
    category: "Desserts",
    items: [
      { name: "Firni", desc: "Reispudding, Pistazie, Rosenwasser", price: "€ 8" },
      { name: "Baklava", desc: "Blätterteig, Honig, Nüsse", price: "€ 7" },
      { name: "Sheer Yakh", desc: "Kardamom-Eis, Rosensirup", price: "€ 7" },
    ],
  },
  {
    id: "getraenke",
    category: "Getränke",
    items: [
      { name: "Grüner Kardamom-Tee", desc: "Traditionell serviert", price: "€ 4" },
      { name: "Doogh", desc: "Joghurtgetränk, Minze", price: "€ 5" },
      { name: "Granatapfelsaft", desc: "Frisch gepresst", price: "€ 6" },
      { name: "Schwarzer Tee", desc: "Mit Kardamom & Zucker", price: "€ 4" },
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
  addressLabel: "Adresse (Platzhalter)",
  address: "Musterstraße 1, 1010 Wien, Österreich",
  phoneLabel: "Telefon (Platzhalter)",
  phone: "+43 1 000 00 00",
  emailLabel: "E-Mail (Platzhalter)",
  email: "reservierung@maza-vienna.at",
  hours: [
    { day: "Dienstag – Donnerstag", time: "17:00 – 23:00" },
    { day: "Freitag – Samstag", time: "17:00 – 00:00" },
    { day: "Sonntag – Montag", time: "Ruhetag" },
  ],
  hoursNote: "Öffnungszeiten sind Platzhalter.",
  socials: [
    { name: "Instagram", href: "#", icon: "Instagram" },
    { name: "Facebook", href: "#", icon: "Facebook" },
  ],
};

export const LAZYFORMS_ENDPOINT =
  "https://api.lazyforms.com/f/a2c063a6-e789-4627-861b-62538523bd1c";
