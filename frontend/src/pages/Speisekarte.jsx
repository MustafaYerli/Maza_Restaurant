import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MoveHorizontal } from "lucide-react";
import { useNav } from "@/hooks/useNav";
import { Reveal, GoldRule } from "@/components/Reveal";
import { OrientPattern, OrnamentDivider } from "@/components/Ornament";
import { MENU, MENU_IMAGE, ALLERGENS } from "@/data/content";

const CategoryBar = ({ active, onJump }) => {
  const scroller = useRef(null);
  const btnRefs = useRef({});
  const drag = useRef({ down: false, startX: 0, left: 0, moved: false });

  const onDown = (e) => {
    const el = scroller.current;
    drag.current = { down: true, startX: e.pageX - el.offsetLeft, left: el.scrollLeft, moved: false };
    el.classList.add("cursor-grabbing");
  };
  const onMove = (e) => {
    if (!drag.current.down) return;
    e.preventDefault();
    const el = scroller.current;
    const x = e.pageX - el.offsetLeft;
    const walk = x - drag.current.startX;
    if (Math.abs(walk) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.left - walk;
  };
  const onUp = () => {
    drag.current.down = false;
    scroller.current?.classList.remove("cursor-grabbing");
  };

  // Aktiven Button in Sichtweite scrollen.
  useEffect(() => {
    const btn = btnRefs.current[active];
    if (btn && scroller.current) {
      const el = scroller.current;
      const bl = btn.offsetLeft - el.offsetLeft;
      el.scrollTo({ left: bl - el.clientWidth / 2 + btn.clientWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  return (
    <div className="sticky top-[64px] z-40 bg-[#071E19]/90 backdrop-blur-xl border-y border-[#B19963]/20">
      <div className="mx-auto max-w-7xl px-3 md:px-10 flex items-center gap-3">
        <MoveHorizontal className="text-[#B19963]/50 shrink-0 hidden sm:block" strokeWidth={1} size={18} />
        <div
          ref={scroller}
          data-testid="menu-category-bar"
          className="flex gap-2 md:gap-3 overflow-x-auto py-4 cursor-grab select-none no-scrollbar"
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
        >
          {MENU.map((c) => (
            <button
              key={c.id}
              ref={(n) => (btnRefs.current[c.id] = n)}
              data-testid={`cat-link-${c.id}`}
              onClick={() => { if (!drag.current.moved) onJump(c.id); }}
              className={`whitespace-nowrap maza-body text-xs md:text-sm tracking-[0.15em] uppercase px-4 py-2 border transition-colors duration-300 ${
                active === c.id
                  ? "border-[#B19963] bg-[#B19963] text-[#071E19]"
                  : "border-[#B19963]/30 text-[#F3EFE6]/70 hover:text-[#B19963] hover:border-[#B19963]/60"
              }`}
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Speisekarte() {
  const go = useNav();
  const [active, setActive] = useState(MENU[0].id);

  const jump = useCallback((id) => {
    const el = document.getElementById(`cat-${id}`);
    if (window.__lenis && el) window.__lenis.scrollTo(el, { offset: -130 });
    else el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Aktive Kategorie beim Scrollen erkennen.
  useEffect(() => {
    const sections = MENU.map((c) => document.getElementById(`cat-${c.id}`)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id.replace("cat-", ""));
        });
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <OrientPattern opacity={0.04} />
      </div>

      {/* Kopfbereich */}
      <section className="relative pt-36 md:pt-44 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <button
            data-testid="back-home-btn"
            onClick={() => go("#home")}
            className="inline-flex items-center gap-2 maza-body text-xs tracking-[0.2em] uppercase text-[#F3EFE6]/60 hover:text-[#B19963] transition-colors mb-8"
          >
            <ArrowLeft strokeWidth={1.2} size={16} /> Zurück zur Startseite
          </button>
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Unsere Karte
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="maza-heading text-5xl md:text-7xl lg:text-8xl font-light text-[#F3EFE6] leading-none">
              Speisekarte
            </h1>
          </Reveal>
          <GoldRule className="my-8" width="6rem" />
          <Reveal delay={0.1}>
            <p className="maza-body text-[#F3EFE6]/65 text-base md:text-lg font-light max-w-2xl">
              Eine Auswahl afghanischer Spezialitäten – von Suppen und Vorspeisen über
              herzhafte Hauptgerichte und Grillspieße bis zu hausgemachten Nachspeisen.
            </p>
          </Reveal>
        </div>
      </section>

      <CategoryBar active={active} onJump={jump} />

      {/* Kategorien */}
      <div className="relative mx-auto max-w-4xl px-5 md:px-10 py-16 md:py-24 space-y-20 md:space-y-28">
        {MENU.map((cat) => (
          <section key={cat.id} id={`cat-${cat.id}`} data-testid={`cat-section-${cat.id}`} className="scroll-mt-[150px]">
            <Reveal>
              <div className="flex items-center gap-5 mb-10">
                <h2 className="maza-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#F3EFE6]">
                  {cat.category}
                </h2>
                <span className="flex-1 h-px bg-gradient-to-r from-[#B19963]/50 to-transparent" />
              </div>
            </Reveal>

            <div className="space-y-6">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 0.04}>
                  <div
                    data-testid={`menu-dish-${cat.id}-${i}`}
                    className="group flex items-center gap-5 md:gap-7 border-b border-[#B19963]/12 pb-6"
                  >
                    <div className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden border border-[#B19963]/20">
                      <img
                        src={MENU_IMAGE}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="maza-heading text-xl md:text-2xl text-[#F3EFE6] font-light">
                        {item.name}
                        {item.allergens?.length > 0 && (
                          <span className="maza-body text-[#B19963]/70 text-xs md:text-sm align-middle ml-2">
                            ({item.allergens.join(", ")})
                          </span>
                        )}
                      </h3>
                      {item.desc && (
                        <p className="maza-body text-[#F3EFE6]/55 text-sm md:text-base font-light mt-1">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="maza-heading text-lg md:text-2xl text-[#B19963] shrink-0 text-right">
                      {item.price}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <OrnamentDivider />

        {/* Allergen-Legende */}
        <div data-testid="allergen-legend" className="border border-[#B19963]/20 bg-[#0A2A22]/40 px-6 py-7 md:px-10 md:py-9">
          <p className="maza-body text-[#B19963] text-xs tracking-[0.28em] uppercase mb-5">
            Allergen-Kennzeichnung
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {Object.entries(ALLERGENS).map(([code, label]) => (
              <div key={code} className="flex items-baseline gap-3">
                <span className="maza-heading text-[#B19963] text-base w-5 shrink-0">{code}</span>
                <span className="maza-body text-[#F3EFE6]/65 text-sm font-light">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="maza-body text-center text-[#F3EFE6]/40 text-xs tracking-wide">
          Alle Preise inkl. gesetzlicher Umsatzsteuer. Die abgebildeten Speisefotos sind
          symbolische Darstellungen. Änderungen und Irrtümer vorbehalten.
        </p>
        <div className="text-center">
          <button
            data-testid="menu-reserve-btn"
            onClick={() => go("#reservierung")}
            className="maza-body text-xs tracking-[0.22em] uppercase px-10 py-4 bg-[#B19963] text-[#071E19] hover:bg-[#c5ac74] transition-colors duration-400"
          >
            Tisch reservieren
          </button>
        </div>
      </div>
    </main>
  );
}
