import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { showPreferences } from "../lib/cc";
import { Reveal, GoldRule } from "../components/Reveal";
import { OrnamentDivider } from "../components/Ornament";
import { IMPRESSUM } from "../data/content";

const Block = ({ title, children }) => (
  <Reveal className="mb-12">
    <h2 className="maza-heading text-2xl md:text-3xl font-light text-[#F3EFE6] mb-4">
      {title}
    </h2>
    <div className="maza-body text-[#F3EFE6]/75 font-light leading-relaxed space-y-3">
      {children}
    </div>
  </Reveal>
);

export default function Datenschutz() {
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, []);

  const i = IMPRESSUM;

  return (
    <main data-testid="datenschutz-page" className="relative pt-40 pb-28 md:pt-48 md:pb-36">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Datenschutz
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6]">
              Datenschutzerklärung
            </h1>
          </Reveal>
          <OrnamentDivider className="mt-8" />
        </div>

        <Block title="1. Verantwortlicher">
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der
            Datenschutz-Grundverordnung (DSGVO) ist:
          </p>
          <p className="text-[#F3EFE6]">
            {i.companyName}
            <br />
            {i.address}
            <br />
            {i.country}
          </p>
          <p>
            E-Mail:{" "}
            <a href={`mailto:${i.email}`} className="text-[#B19963] hover:underline">
              {i.email}
            </a>
            <br />
            Telefon:{" "}
            <a href={`tel:${i.phone.replace(/\s/g, "")}`} className="text-[#B19963] hover:underline">
              {i.phone}
            </a>
          </p>
        </Block>

        <Block title="2. Allgemeines & Rechtsgrundlagen">
          <p>
            Wir verarbeiten personenbezogene Daten nur im Einklang mit der DSGVO und dem
            österreichischen Datenschutzgesetz (DSG). Rechtsgrundlagen sind je nach Fall
            Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Erfüllung
            vorvertraglicher bzw. vertraglicher Maßnahmen (lit. b) sowie unser
            berechtigtes Interesse an einem sicheren und funktionalen Webauftritt
            (lit. f).
          </p>
        </Block>

        <Block title="3. Hosting & Server-Logfiles">
          <p>
            Diese Website wird bei einem externen Dienstleister (Hoster) betrieben. Beim
            Aufruf der Seite werden durch den Browser automatisch technische Daten
            übermittelt und in sogenannten Server-Logfiles gespeichert: IP-Adresse,
            Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Browsertyp sowie
            Betriebssystem. Diese Verarbeitung erfolgt zur Gewährleistung eines sicheren
            und stabilen Betriebs (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </Block>

        <Block title="4. Cookies & Einwilligungsverwaltung">
          <p>
            Wir setzen keine Tracking-, Analyse- oder Marketing-Cookies ein. Zur
            Speicherung Ihrer Datenschutz-Entscheidung wird lediglich eine technisch
            notwendige Information lokal in Ihrem Browser abgelegt (Consent-Speicher).
            Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft anpassen
            oder widerrufen.
          </p>
          <p>
            <button
              data-testid="datenschutz-open-cookies"
              onClick={() => showPreferences()}
              className="text-[#B19963] hover:underline"
            >
              Cookie- & Datenschutz-Einstellungen öffnen
            </button>
          </p>
        </Block>

        <Block title="5. Interaktive Karte (externe Medien)">
          <p>
            Zur Darstellung unseres Standorts binden wir – nur nach Ihrer ausdrücklichen
            Einwilligung – eine interaktive Karte ein. Das Kartenmaterial wird über
            CARTO bzw. OpenStreetMap geladen. Beim Laden der Karte wird Ihre IP-Adresse
            an den jeweiligen Anbieter übertragen, da dies technisch erforderlich ist,
            um die Karteninhalte an Ihren Browser auszuliefern. Rechtsgrundlage ist Ihre
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ohne Einwilligung wird die Karte
            nicht geladen.
          </p>
        </Block>

        <Block title="6. Schriftarten (Google Fonts)">
          <p>
            Zur einheitlichen Darstellung von Schriftarten werden Web-Fonts (Google
            Fonts) verwendet. Beim Aufruf einer Seite lädt Ihr Browser die benötigten
            Schriften, wobei eine Verbindung zu Servern von Google hergestellt und Ihre
            IP-Adresse übertragen werden kann. Rechtsgrundlage ist unser berechtigtes
            Interesse an einer ansprechenden Darstellung (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </Block>

        <Block title="7. Reservierungsformular">
          <p>
            Wenn Sie über das Formular eine Tischreservierung anfragen, verarbeiten wir
            die von Ihnen angegebenen Daten (z. B. Name, Kontaktdaten, gewünschtes
            Datum, Personenanzahl), um Ihre Anfrage zu bearbeiten. Die Übermittlung
            erfolgt über den Formular-Dienstleister LazyForms. Rechtsgrundlage ist die
            Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO). Die
            Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind
            und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </Block>

        <Block title="8. Social-Media-Verlinkung">
          <p>
            Auf unserer Website verlinken wir auf unser Instagram-Profil. Erst durch
            Anklicken des Links werden Sie zur Plattform weitergeleitet und es werden
            Daten an den jeweiligen Anbieter übertragen. Auf die dortige Verarbeitung
            haben wir keinen Einfluss.
          </p>
        </Block>

        <Block title="9. Ihre Rechte">
          <p>
            Ihnen stehen nach der DSGVO folgende Rechte zu: Auskunft (Art. 15),
            Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung
            (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21). Eine
            erteilte Einwilligung können Sie jederzeit widerrufen.
          </p>
          <p>
            Sie haben zudem das Recht auf Beschwerde bei der österreichischen
            Datenschutzbehörde (Barichgasse 40–42, 1030 Wien,{" "}
            <a
              href="https://www.dsb.gv.at"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B19963] hover:underline"
            >
              www.dsb.gv.at
            </a>
            ).
          </p>
        </Block>

        <Reveal>
          <p className="maza-body text-[#F3EFE6]/40 text-xs mt-4">
            Stand: {new Date().toLocaleDateString("de-AT", { month: "long", year: "numeric" })}.
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an
            geänderte Rechtslagen oder Funktionen der Website anzupassen.
          </p>
        </Reveal>

        <GoldRule className="mx-auto my-12" width="5rem" />

        <div className="text-center">
          <Link
            data-testid="datenschutz-back-home"
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
