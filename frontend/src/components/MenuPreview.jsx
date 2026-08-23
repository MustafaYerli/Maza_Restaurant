import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { OrnamentDivider } from "./Ornament";
import { useNav } from "../hooks/useNav";
import { MENU, MENU_IMAGE } from "../data/content";

const MenuPreview = () => {
  const [active, setActive] = useState(0);
  const cat = MENU[active];
  const go = useNav();

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

        <div className="max-w-3xl mx-auto space-y-6" data-testid="menu-items">
          {cat.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="group flex items-center gap-5 md:gap-6 border-b border-[#B19963]/12 pb-6">
                <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border border-[#B19963]/20">
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
                  </h3>
                  <p className="maza-body text-[#F3EFE6]/55 text-sm md:text-base font-light mt-1">
                    {item.desc}
                  </p>
                </div>
                <span className="maza-heading text-xl md:text-2xl text-[#B19963] shrink-0">
                  {item.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-14">
            <button
              data-testid="full-menu-btn"
              onClick={() => go("/speisekarte")}
              className="maza-fill maza-body text-xs tracking-[0.22em] uppercase px-9 py-4 border border-[#B19963] text-[#B19963] hover:text-[#071E19]"
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
