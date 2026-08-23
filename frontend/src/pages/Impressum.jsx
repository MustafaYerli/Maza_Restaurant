import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Reveal, GoldRule } from "../components/Reveal";
import { OrnamentDivider } from "../components/Ornament";
import { IMPRESSUM } from "../data/content";

const Block = ({ title, children }) => (
  <Reveal className="mb-12">
    <h2 className="maza-heading text-2xl md:text-3xl font-light text-[#F3EFE6] mb-4">
      {title}
    </h2>
    <div className="maza-body text-[#F3EFE6]/75 font-light leading-relaxed space-y-1.5">
      {children}
    </div>
  </Reveal>
);

export default function Impressum() {
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  const i = IMPRESSUM;

  return (
    <main data-testid="impressum-page" className="relative pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Rechtliche Informationen
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6]">
              Impressum
            </h1>
          </Reveal>
          <OrnamentDivider className="mt-8" />
        </div>

        <Block title="Medieninhaber & Diensteanbieter">
          <p data-testid="imp-company" className="text-[#F3EFE6] text-lg">{i.companyName}</p>
          <p data-testid="imp-address">{i.address}</p>
          <p>{i.country}</p>
        </Block>

        <Block title="Kontakt">
          <p>
            E-Mail:{" "}
            <a href={`mailto:${i.email}`} className="text-[#B19963] hover:underline">
              {i.email}
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a href={`tel:${i.phone.replace(/\s/g, "")}`} className="text-[#B19963] hover:underline">
              {i.phone}
            </a>
          </p>
        </Block>

        <Block title="Unternehmensdaten">
          <p data-testid="imp-uid">Umsatzsteuer-Identifikationsnummer (UID): {i.uid}</p>
          <p>Firmenbuchnummer: {i.fnNumber}</p>
          <p>Firmenbuchgericht: {i.fnCourt}</p>
          <p>Vertretungsbefugt / Geschäftsführung: {i.management}</p>
          <p>Unternehmensgegenstand: {i.businessObject}</p>
        </Block>

        <Block title="Kammerzugehörigkeit & Berufsrecht">
          <p>Mitgliedschaft: {i.chamber}</p>
          <p>Anwendbare Rechtsvorschrift: {i.tradeLaw}</p>
          <p>Aufsichts-/Gewerbebehörde: {i.supervisoryAuthority}</p>
        </Block>

        <Block title="Online-Streitbeilegung (OS)">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
            (OS) bereit:{" "}
            <a
              href={i.osPlatform}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B19963] hover:underline break-words"
            >
              {i.osPlatform}
            </a>
            . Wir sind nicht verpflichtet und grundsätzlich nicht bereit, an einem
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </Block>

        <Block title="Haftung für Inhalte">
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für
            die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
            keine Gewähr übernehmen. Angaben zu Speisen, Preisen und Öffnungszeiten
            können sich ändern und sind ohne Gewähr.
          </p>
        </Block>

        <Block title="Urheberrecht">
          <p>
            Sämtliche Inhalte dieser Website (Texte, Bilder, Grafiken, Logos) sind
            urheberrechtlich geschützt. Eine Verwendung außerhalb der Grenzen des
            Urheberrechts bedarf der vorherigen schriftlichen Zustimmung des jeweiligen
            Rechteinhabers.
          </p>
        </Block>

        <Reveal>
          <p className="maza-body text-[#F3EFE6]/40 text-xs mt-4">
            Alle Angaben in diesem Impressum entsprechen den offiziellen
            Unternehmensdaten der Shehad Gastro GmbH.
          </p>
        </Reveal>

        <GoldRule className="mx-auto my-12" width="5rem" />

        <div className="text-center">
          <Link
            data-testid="impressum-back-home"
            to="/"
            className="maza-fill inline-flex items-center gap-2 maza-body text-xs tracking-[0.22em] uppercase px-9 py-4 border border-[#B19963] text-[#B19963] hover:text-[#071E19]"
          >
            <ArrowLeft size={16} strokeWidth={1.4} /> Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
