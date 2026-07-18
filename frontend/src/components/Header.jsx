import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MazaLogo } from "./MazaLogo";
import { useNav } from "../hooks/useNav";
import { NAV_LINKS } from "../data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navGo = useNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    navGo(href);
  };

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
          scrolled
            ? "bg-[#071E19]/85 backdrop-blur-xl border-b border-[#B19963]/20 py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between">
          <button data-testid="logo-home" onClick={() => go("#home")} aria-label="Zur Startseite">
            <MazaLogo />
          </button>

          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-${l.href.replace("#", "")}`}
                onClick={() => go(l.href)}
                className="maza-body text-[0.82rem] tracking-[0.18em] uppercase text-[#F3EFE6]/80 hover:text-[#B19963] transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-[#B19963] group-hover:w-full transition-[width] duration-300" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              data-testid="header-reserve-btn"
              onClick={() => go("#reservierung")}
              className="hidden sm:inline-flex maza-body text-[0.72rem] tracking-[0.22em] uppercase px-6 py-3 border border-[#B19963] text-[#B19963] hover:bg-[#B19963] hover:text-[#071E19] transition-colors duration-400"
            >
              Tisch reservieren
            </button>
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden text-[#F3EFE6] p-1"
              onClick={() => setOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu strokeWidth={1.2} size={26} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[60] bg-[#071E19] lg:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between px-5 py-6 border-b border-[#B19963]/20">
              <MazaLogo />
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                aria-label="Menü schließen"
                className="text-[#F3EFE6] p-1"
              >
                <X strokeWidth={1.2} size={28} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((l, i) => (
                <motion.button
                  key={l.href}
                  data-testid={`mobile-nav-${l.href.replace("#", "")}`}
                  onClick={() => go(l.href)}
                  className="maza-heading text-left text-4xl text-[#F3EFE6] py-2 hover:text-[#B19963] transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
            <div className="px-8 pb-12">
              <button
                data-testid="mobile-reserve-btn"
                onClick={() => go("#reservierung")}
                className="w-full maza-body text-sm tracking-[0.22em] uppercase px-6 py-4 bg-[#B19963] text-[#071E19]"
              >
                Tisch reservieren
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
