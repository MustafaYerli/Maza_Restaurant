import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { OrnamentDivider } from "./Ornament";
import { MENU } from "../data/content";

const MenuPreview = () => {
  const [active, setActive] = useState(0);
  const cat = MENU[active];

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="menue" data-testid="menu-section" className="relative py-24 md:py-36 bg-[#08231D]">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Menü-Vorschau
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6]">
              Eine Auswahl unserer Küche
            </h2>
          </Reveal>
          <OrnamentDivider className="mt-8" />
        </div>

        <Reveal>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-14">
            {MENU.map((m, i) => (
              <button
                key={m.category}
                data-testid={`menu-tab-${i}`}
                onClick={() => setActive(i)}
                className={`maza-body text-xs md:text-sm tracking-[0.18em] uppercase pb-2 border-b transition-colors duration-300 ${
                  active === i
                    ? "text-[#B19963] border-[#B19963]"
                    : "text-[#F3EFE6]/50 border-transparent hover:text-[#F3EFE6]"
                }`}
              >
                {m.category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto space-y-7" data-testid="menu-items">
          {cat.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="flex items-baseline gap-4">
                <div className="flex-1">
                  <h3 className="maza-heading text-xl md:text-2xl text-[#F3EFE6] font-light">
                    {item.name}
                  </h3>
                  <p className="maza-body text-[#F3EFE6]/55 text-sm md:text-base font-light mt-1">
                    {item.desc}
                  </p>
                </div>
                <span className="flex-1 border-b border-dotted border-[#B19963]/30 translate-y-[-4px] hidden sm:block" />
                <span className="maza-heading text-xl md:text-2xl text-[#B19963] shrink-0">
                  {item.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="maza-body text-center text-[#F3EFE6]/40 text-xs tracking-wide mt-14">
            Alle Gerichte, Beschreibungen und Preise sind Platzhalter und werden laufend
            aktualisiert.
          </p>
          <div className="text-center mt-8">
            <button
              data-testid="full-menu-btn"
              onClick={() => scrollTo("#reservierung")}
              className="maza-body text-xs tracking-[0.22em] uppercase px-9 py-4 border border-[#B19963] text-[#B19963] hover:bg-[#B19963] hover:text-[#071E19] transition-colors duration-400"
            >
              Gesamtes Menü ansehen
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default MenuPreview;
