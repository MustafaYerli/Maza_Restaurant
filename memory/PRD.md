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

## Verified (Testing Agent iteration_1 — 100% frontend)
Hero voll sichtbar; Scroll-Reveals; Nav Smooth-Scroll; Mobile-Menü; Menü-Tabs; Galerie-Lightbox;
Formular-Validierung (DE-Fehlermeldungen) + erfolgreiche LazyForms-Übermittlung; kein Overflow; keine Console-Errors.

## Backlog / Next
- P1: Header optional komplett transparent am Seitenanfang (aktuell dezent dunkel) — kosmetisch.
- P1: Echte Restaurant-Fotos, echte Adresse/Öffnungszeiten/Preise ersetzen die Platzhalter.
- P2: Echte Impressum-/Datenschutz-/Cookie-Seiten & DSGVO-konformes Maps-Consent-Loading.
- P2: Mehrsprachigkeit (EN), separate vollständige Menü-Seite.
