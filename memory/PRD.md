# PRD — MAZA Vienna

## Original Problem Statement
Vollständig responsive, hochwertige Premium-Onepage-Website für das afghanische Restaurant
„MAZA Vienna" in Wien. Dunkelgrün (#071E19) + Gold (#B19963) Markenidentität, orientalische
Eleganz + moderne Raffinesse. Award-worthy Motion (framer-motion + lenis), Kinetic Hero,
Editorial-Layouts. Deutschsprachig. Statisches Frontend, keine erfundenen Fakten/Preise.

## User Choices
- Tech: Statisches Frontend (React), kein Backend/DB.
- Reservierung: LazyForms Endpoint (multipart/form-data POST).
- Menü/Galerie: fest im Code (leicht editierbar in `src/data/content.js`).
- Bilder: KI-generierte, markengerechte, authentisch-afghanische Premium-Fotografie.
- Fonts: Cormorant Garamond (Headings) + Jost (Body) — TT Modernoir nicht verfügbar.

## Architecture / Tasks Done (2026-06)
- React SPA. Smooth scrolling via Lenis; framer-motion für Reveals, masked hero reveal, parallax.
- SVG-Logo & Emblem (`MazaLogo.jsx`), goldene Ornament-Divider & subtiles Girih-Muster (`Ornament.jsx`).
- Sektionen: Header (transparent→blur), Hero (parallax + masked reveal), Marquee, Über MAZA,
  Signature Dishes (Editorial-Raster), Kulinarische Philosophie (nummeriertes Manifest + Line-Icons),
  Menü-Vorschau (Kategorie-Tabs), Galerie (asymmetrisch + Lightbox), Reservierung (validiert, LazyForms,
  Lade-/Fehler-/Erfolgszustände), Standort & Kontakt (Maps-Platzhalter, Route/Anruf), Footer (dezentes Muster).
- SEO: Titel, Meta-Description, Open-Graph/Twitter, Schema.org Restaurant JSON-LD.
- A11y: Tastaturnavigation Lightbox, reduced-motion (MotionConfig + CSS), Kontraste, semantisches HTML.
- Inhalte: `src/data/content.js` (Gerichte, Menü, Galerie, Kontakt) — alle Preise/Adressen als PLATZHALTER markiert.

## Verified (Testing Agent — 100% frontend)
- iter1: Hero, Scroll-Reveals, Nav, Mobile-Menü, Galerie-Lightbox, Formular (DE-Validierung + LazyForms).
- iter2-4: /speisekarte Unterseite, sticky horizontal Kategorie-Leiste (overflow-x-clip Fix), Anker-Jumps + Gold-Highlight, Menü-Bilder (Vorschau + Unterseite), Router-Navigation. Kein Overflow, keine Console-Errors.

## Iteration 2 (2026-06) — Menü-Erweiterung
- Router (react-router-dom): '/' Home, '/speisekarte' vollständige Karte. Shared Header/Footer, Lenis global (window.__lenis).
- Jede Menü-Position mit einheitlichem Mockup-Bild links (MENU_IMAGE); Startseiten-Vorschau + Unterseite.
- Unterseite: sticky, horizontal scrollbare/ziehbare Kategorie-Leiste mit Anker-Links + aktivem Gold-Highlight (IntersectionObserver). 7 Kategorien (inkl. Töpfe & Eintöpfe).
- Nav „Menü" + Button „Gesamtes Menü ansehen" → /speisekarte.

## Iteration 3 (2026-07) — Logo, Deploy-Fix, Inhalte & Feinschliff
- Render npm ERESOLVE (date-fns 4 vs react-day-picker) via `frontend/.npmrc` (legacy-peer-deps=true) behoben.
- Offizielles Marken-Logo eingebunden: horizontal `public/maza-logo-h.webp` (Navbar), gestapelt `public/maza-logo.webp` (Footer); MazaLogo.jsx als `<img>`.
- Favicon aus dem Emblem generiert (`favicon.ico`, `favicon-32/192.png`, `apple-touch-icon.png`) + Links in index.html.
- Echte Adresse: Gunoldstraße 1 / Heiligenstädterstraße 78, 1190 Wien (content.js, Kontakt, Footer, Schema.org).
- Footer/Kontakt: Instagram-Icon → https://www.instagram.com/maza.vienna/ ; Facebook entfernt.
- Google-Maps-iframe (kein API-Key) im Kontakt-Bereich statt Platzhalter.
- Wording „Premium"/generische Begriffe durch erlebnisorientierte Formulierungen ersetzt (Titel/OG/Twitter/Schema, Hero-Untertitel, Signature-Heading).
- Bugfix: Descender-Clipping im Hero-Titel („g" in Afghanische) via `pb-[0.18em] -mb-[0.18em]` am MaskedLines-Wrapper. Verifiziert Testing-Agent iter5 (100%).

## Iteration 4 (2026-06) — UX-/Eleganz-Feinschliff (Testing-Agent iter6: 100%)
- Preloader (`components/Preloader.jsx`): MAZA-Wortmarke (Buchstaben-Reveal) + goldene Linie, gleitet nach oben weg; sperrt Scroll (Lenis stop) ~2,1s, dann frei. Einmal pro Sitzung via sessionStorage `maza_intro`.
- Aktiver Nav-Zustand (`hooks/useScrollSpy.js` + `Header.jsx`): Scroll-Spy über SPY_IDS (home, ueber, galerie, reservierung, kontakt) → aktiver Link gold + dauerhafte Unterstreichung (`data-active`). „Menü" (Route) bewusst ausgenommen.
- Elegante Hover-States (`index.css`): `.maza-fill` (Gold füllt von links, Outline-Buttons: header-reserve, hero-menu, full-menu, contact-call, res-reset), `.maza-lift` (dezentes Anheben + Schein, Solid-Buttons: hero-reserve, contact-route, reservation-submit).
- Galerie-Lightbox (`Gallery.jsx`): stärkerer Blur (backdrop-blur-xl), Bildunterschrift + Zähler „NN / 08", weichere Übergänge; Pfeile + Escape + Close.
- Reservierungsformular (`Reservation.jsx`): Felder mit `.maza-field` Fokus-Schein; Erfolgsanimation neu gestaffelt (Spring-Check-Icon + einlaufende Texte).
- „Nach oben"-Button (`components/BackToTop.jsx`): erscheint > 700px, scrollt via Lenis nach oben.

## Iteration 5 (2026-06) — Echte Speisekarte + Cookie-Consent/DSGVO
- Speisekarte (`content.js` MENU + `Speisekarte.jsx`): echte Gerichte in 8 Kategorien
  (Suppen, Vorspeisen, Hauptspeisen, Saucen, Kindermenü, Beilagen, Salat, Nachspeisen)
  mit echten Preisen. Allergen-Codes (A/C/G/H/L) je Gericht + Allergen-Legende (`ALLERGENS`).
  „2x" aus Namen in Beschreibung („2 Stück") verschoben. Platzhalter-Hinweis in MenuPreview entfernt.
- Cookie-Consent (orestbida/cookieconsent v3.1.0), SELBST GEHOSTET unter
  `public/vendor/cookieconsent/` (umd.js + css), eingebunden in `public/index.html`.
  Grund: CRA/Babel-Bundling ist nicht die Ursache — Banner erschien nicht, weil `hideFromBots`
  (Default true) Automatisierung via `navigator.webdriver` ausblendet. Fix: `hideFromBots:false`.
  - Config: `src/config/cookieConsentConfig.js` (DE, Markendesign, Kategorien: necessary readonly + functional).
  - Theme: `src/styles/cookieconsent-theme.css` (Dunkelgrün/Gold CSS-Variablen, #cc-main scoped).
  - Wrapper `src/lib/cc.js` (window.CookieConsent), Hook `src/hooks/useConsent.js` (Event `cc:consent-updated`).
  - Init in `App.js` via Poll auf window.CookieConsent.run.
- Karte (Leaflet/CARTO) DSGVO-konform hinter Einwilligung: `Contact.jsx` zeigt Platzhalter
  („Karte aktivieren") bis Kategorie `functional` akzeptiert → dann MazaMap.
- Datenschutzerklärung: neue Seite `src/pages/Datenschutz.jsx` (Route `/datenschutz`), Footer-Links
  „Datenschutz" → /datenschutz, „Cookie-Einstellungen" → showPreferences().
- Verifiziert per Screenshot: Banner + Preferences-Modal (Markendesign), Karten-Consent-Flow (Platzhalter→Karte).

## Backlog / Next
- P1: Echte Restaurant-Fotos ersetzen die Menü-/Galerie-Mockups (Kundendaten ausstehend).
- P1: Signature Dishes (Startseite) zeigen noch alte Beispielpreise — an Karte angleichen?
- P2: Getränkekarte ergänzen (in echter Liste nicht enthalten).
- P2: Google Fonts selbst hosten (IP-Transfer an Google vermeiden).
- P2: Mehrsprachigkeit (EN).
