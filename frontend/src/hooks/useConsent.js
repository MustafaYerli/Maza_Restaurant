import { useEffect, useState } from "react";
import { acceptedCategory } from "../lib/cc";

// Liefert den aktuellen Einwilligungsstatus einer Kategorie und aktualisiert
// sich automatisch, wenn der Nutzer seine Auswahl ändert.
export const useConsent = (category) => {
  const [accepted, setAccepted] = useState(() => acceptedCategory(category));

  useEffect(() => {
    const update = () => setAccepted(acceptedCategory(category));
    window.addEventListener("cc:consent-updated", update);
    update();
    return () => window.removeEventListener("cc:consent-updated", update);
  }, [category]);

  return accepted;
};
