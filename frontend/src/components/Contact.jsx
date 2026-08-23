import React from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Map as MapIcon } from "lucide-react";
import { acceptCategory, showPreferences } from "../lib/cc";
import { Reveal, GoldRule } from "./Reveal";
import { MazaMap } from "./MazaMap";
import { useConsent } from "../hooks/useConsent";
import { CONTACT } from "../data/content";

const SOCIAL_ICONS = { Instagram, Facebook };

const MapPlaceholder = () => (
  <div
    data-testid="map-consent-placeholder"
    className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 gap-5"
  >
    <MapIcon className="text-[#B19963]" strokeWidth={1} size={40} />
    <p className="maza-body text-[#F3EFE6]/70 text-sm font-light max-w-xs leading-relaxed">
      Zum Anzeigen der interaktiven Karte ist Ihre Zustimmung für externe Medien
      erforderlich. Dabei wird Ihre IP-Adresse an den Kartenanbieter übertragen.
    </p>
    <button
      data-testid="map-consent-accept-btn"
      onClick={() => acceptCategory(["functional"])}
      className="maza-body text-xs tracking-[0.22em] uppercase px-8 py-3.5 bg-[#B19963] text-[#071E19] hover:bg-[#c5ac74] transition-colors duration-300"
    >
      Karte aktivieren
    </button>
    <button
      data-testid="map-consent-settings-btn"
      onClick={() => showPreferences()}
      className="maza-body text-[11px] tracking-[0.18em] uppercase text-[#F3EFE6]/45 hover:text-[#B19963] transition-colors"
    >
      Datenschutz-Einstellungen
    </button>
  </div>
);

const Contact = () => {
  const mapAllowed = useConsent("functional");
  return (
    <section id="kontakt" data-testid="contact-section" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
        <div>
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Standort & Kontakt
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-4xl md:text-5xl font-light text-[#F3EFE6] leading-tight">
              Wir freuen uns auf Ihren Besuch
            </h2>
          </Reveal>
          <GoldRule className="my-8" width="5rem" />

          <div className="space-y-7">
            {[
              { Icon: MapPin, label: CONTACT.addressLabel, value: CONTACT.address },
              { Icon: Phone, label: CONTACT.phoneLabel, value: CONTACT.phone },
              { Icon: Mail, label: CONTACT.emailLabel, value: CONTACT.email },
            ].map(({ Icon, label, value }) => (
              <Reveal key={label} delay={0.05}>
                <div className="flex items-start gap-4">
                  <Icon className="text-[#B19963] shrink-0 mt-1" strokeWidth={1} size={22} />
                  <div>
                    <p className="maza-body text-[#F3EFE6]/45 text-xs tracking-[0.2em] uppercase mb-1">
                      {label}
                    </p>
                    <p className="maza-body text-[#F3EFE6] text-lg font-light">{value}</p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.05}>
              <div className="flex items-start gap-4">
                <Clock className="text-[#B19963] shrink-0 mt-1" strokeWidth={1} size={22} />
                <div>
                  <p className="maza-body text-[#F3EFE6]/45 text-xs tracking-[0.2em] uppercase mb-2">
                    Öffnungszeiten
                  </p>
                  <ul className="space-y-1.5">
                    {CONTACT.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-8 maza-body text-[#F3EFE6]/85 font-light">
                        <span>{h.day}</span>
                        <span className="text-[#B19963]">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="maza-body text-[#F3EFE6]/35 text-xs mt-2">{CONTACT.hoursNote}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                data-testid="contact-route-btn"
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="maza-lift maza-body text-xs tracking-[0.22em] uppercase px-8 py-4 bg-[#B19963] text-[#071E19] hover:bg-[#c5ac74]"
              >
                Route planen
              </a>
              <a
                data-testid="contact-call-btn"
                href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                className="maza-fill maza-body text-xs tracking-[0.22em] uppercase px-8 py-4 border border-[#B19963] text-[#B19963] hover:text-[#071E19]"
              >
                Jetzt anrufen
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex items-center gap-5 mt-10">
              {CONTACT.socials.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                return (
                  <a
                    key={s.name}
                    data-testid={`social-${s.name.toLowerCase()}`}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="text-[#F3EFE6]/60 hover:text-[#B19963] transition-colors"
                  >
                    <Icon strokeWidth={1} size={24} />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div
            data-testid="map-container"
            className="relative aspect-[4/5] lg:aspect-square border border-[#B19963]/25 bg-[#08231D] overflow-hidden"
          >
            {mapAllowed ? <MazaMap /> : <MapPlaceholder />}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
