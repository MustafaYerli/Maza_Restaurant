import React from "react";
import { Landmark, Flower2, Leaf, Lamp, TreePalm } from "lucide-react";
import { Reveal } from "./Reveal";
import { OrientPattern } from "./Ornament";
import { PHILOSOPHY } from "../data/content";

const ICONS = { Landmark, Flower2, Leaf, Lamp, TreePalm };

const Philosophy = () => {
  return (
    <section data-testid="philosophy-section" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <OrientPattern opacity={0.05} />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Kulinarische Philosophie
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6] leading-tight">
              Tradition in jedem Detail
            </h2>
          </Reveal>
        </div>

        <div className="divide-y divide-[#B19963]/15 border-t border-[#B19963]/15">
          {PHILOSOPHY.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.no} delay={i * 0.05}>
                <div
                  data-testid={`philosophy-${item.no}`}
                  className="group grid grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 transition-colors duration-500 hover:bg-[#08231D]/50"
                >
                  <span className="col-span-2 md:col-span-1 maza-heading text-2xl md:text-3xl text-[#B19963]/60 group-hover:text-[#B19963] transition-colors">
                    {item.no}
                  </span>
                  <div className="col-span-2 md:col-span-1 text-[#B19963]">
                    <Icon strokeWidth={1} size={34} />
                  </div>
                  <h3 className="col-span-8 md:col-span-3 maza-heading text-2xl md:text-3xl font-light text-[#F3EFE6]">
                    {item.title}
                  </h3>
                  <p className="col-span-12 md:col-span-7 maza-body text-[#F3EFE6]/65 text-base md:text-lg font-light leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
