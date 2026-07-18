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

## Backlog / Next
- P1: Header optional komplett transparent am Seitenanfang (aktuell dezent dunkel) — kosmetisch.
- P1: Echte Restaurant-Fotos, echte Adresse/Öffnungszeiten/Preise ersetzen die Platzhalter.
- P2: Echte Impressum-/Datenschutz-/Cookie-Seiten & DSGVO-konformes Maps-Consent-Loading.
- P2: Mehrsprachigkeit (EN), separate vollständige Menü-Seite.
