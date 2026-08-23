// Zugriff auf die selbst gehostete CookieConsent-UMD-Instanz (window.CookieConsent).
export const getCC = () => (typeof window !== "undefined" ? window.CookieConsent : undefined);

export const showPreferences = () => getCC()?.showPreferences();
export const acceptCategory = (cats) => getCC()?.acceptCategory(cats);
export const acceptedCategory = (cat) => {
  try {
    return !!getCC()?.acceptedCategory(cat);
  } catch {
    return false;
  }
};
