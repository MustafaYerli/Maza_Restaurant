// Konfiguration für vanilla-cookieconsent (v3) — im Markendesign von MAZA Vienna.
// Deutschsprachig, DSGVO-konform. Kategorie "functional" steuert externe Medien
// (interaktive Google-/CARTO-/OpenStreetMap-Karte).

const notify = () => {
  window.dispatchEvent(new Event("cc:consent-updated"));
};

const cookieConsentConfig = {
  hideFromBots: false,

  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      flipButtons: false,
      equalWeightButtons: true,
    },
    preferencesModal: {
      layout: "box",
      flipButtons: false,
      equalWeightButtons: true,
    },
  },

  onFirstConsent: notify,
  onConsent: notify,
  onChange: notify,

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    functional: {
      enabled: false,
      readOnly: false,
    },
  },

  language: {
    default: "de",
    translations: {
      de: {
        consentModal: {
          title: "Wir schätzen Ihre Privatsphäre",
          description:
            "Diese Website verwendet ausschließlich technisch notwendige Dienste. Zusätzlich können externe Medien (interaktive Standort-Karte) geladen werden – dabei wird Ihre IP-Adresse an den Kartenanbieter übertragen. Sie entscheiden, was geladen wird.",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Nur notwendige",
          showPreferencesBtn: "Einstellungen verwalten",
          footer:
            '<a href="/datenschutz">Datenschutz</a><a href="/impressum">Impressum</a>',
        },
        preferencesModal: {
          title: "Cookie- & Datenschutz-Einstellungen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Nur notwendige",
          savePreferencesBtn: "Auswahl speichern",
          closeIconLabel: "Schließen",
          sections: [
            {
              title: "Verwendung von Diensten",
              description:
                "Wir setzen keine Tracking- oder Marketing-Cookies ein. Nachfolgend können Sie externe Medien aktivieren oder deaktivieren.",
            },
            {
              title: "Technisch notwendig",
              description:
                "Diese Dienste sind für den Betrieb der Website unerlässlich (z. B. das Speichern Ihrer Datenschutz-Einwilligung) und können nicht deaktiviert werden.",
              linkedCategory: "necessary",
            },
            {
              title: "Externe Medien",
              description:
                "Ermöglicht das Laden der interaktiven Standort-Karte (CARTO / OpenStreetMap). Bei Aktivierung wird Ihre IP-Adresse an den Kartenanbieter übertragen.",
              linkedCategory: "functional",
            },
            {
              title: "Weitere Informationen",
              description:
                'Details finden Sie in unserer <a href="/datenschutz">Datenschutzerklärung</a>.',
            },
          ],
        },
      },
    },
  },
};

export default cookieConsentConfig;
