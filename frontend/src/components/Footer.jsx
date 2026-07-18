import React from "react";
import { MazaLogo } from "./MazaLogo";
import { OrientPattern } from "./Ornament";
import { useNav } from "../hooks/useNav";
import { NAV_LINKS, CONTACT } from "../data/content";

const LEGAL = ["Impressum", "Datenschutz", "Cookie-Einstellungen"];

const Footer = () => {
  const go = useNav();

  return (
    <footer data-testid="site-footer" className="relative bg-[#050f0c] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <OrientPattern opacity={0.04} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <MazaLogo variant="stacked" className="!items-start" />
            <p className="maza-body text-[#F3EFE6]/55 font-light leading-relaxed max-w-sm mt-8">
              Afghanische Tradition, modern interpretiert. Ein Ort für orientalische
              Eleganz, herzliche Gastfreundschaft und kulinarische Momente in Wien.
            </p>
          </div>

          <div>
            <h4 className="maza-body text-[#B19963] text-xs tracking-[0.25em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    data-testid={`footer-nav-${l.href.replace("#", "")}`}
                    onClick={() => go(l.href)}
                    className="maza-body text-[#F3EFE6]/70 font-light hover:text-[#B19963] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="maza-body text-[#B19963] text-xs tracking-[0.25em] uppercase mb-5">
              Kontakt
            </h4>
            <ul className="space-y-3 maza-body text-[#F3EFE6]/70 font-light">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
            </ul>
            <div className="flex gap-4 mt-5">
              {CONTACT.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="maza-body text-[#F3EFE6]/60 text-sm hover:text-[#B19963] transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#B19963]/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="maza-body text-[#F3EFE6]/40 text-xs">
            © {new Date().getFullYear()} MAZA Vienna. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l}>
                <a
                  data-testid={`footer-legal-${l.toLowerCase().replace(/[^a-z]/g, "")}`}
                  href="#"
                  className="maza-body text-[#F3EFE6]/40 text-xs hover:text-[#B19963] transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
