import { useNavigate, useLocation } from "react-router-dom";

// Gemeinsamer Navigations-Handler für Anker (Startseite) und Routen (Unterseiten).
export function useNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (href) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        const el = document.querySelector(href);
        if (window.__lenis && el) window.__lenis.scrollTo(el);
        else el?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/" + href);
      }
    } else {
      navigate(href);
      if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
      else window.scrollTo(0, 0);
    }
  };
}
