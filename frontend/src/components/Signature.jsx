import React from "react";
import { motion } from "framer-motion";
import { Reveal, GoldRule } from "./Reveal";
import { OrnamentDivider } from "./Ornament";
import { SIGNATURE_DISHES } from "../data/content";

const Signature = () => {
  return (
    <section data-testid="signature-section" className="relative py-24 md:py-36 bg-[#08231D]">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Aus unserer Küche
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6]">
              Gerichte, die in Erinnerung bleiben
            </h2>
          </Reveal>
          <OrnamentDivider className="mt-8" />
        </div>

        <div className="space-y-20 md:space-y-32">
          {SIGNATURE_DISHES.map((dish, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={dish.id}
                data-testid={`signature-dish-${dish.id}`}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
                  <Reveal>
                    <div className="group relative overflow-hidden aspect-[16/11]">
                      <motion.img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071E19]/60 to-transparent opacity-70" />
                      <span className="maza-heading absolute top-5 left-6 text-6xl md:text-7xl text-[#F3EFE6]/12 font-light">
                        0{i + 1}
                      </span>
                    </div>
                  </Reveal>
                </div>

                <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
                  <Reveal delay={0.1}>
                    <p className="maza-body text-[#B19963] text-xs tracking-[0.3em] uppercase mb-4">
                      {dish.tagline}
                    </p>
                    <h3 className="maza-heading text-3xl md:text-4xl lg:text-5xl font-light text-[#F3EFE6] leading-tight">
                      {dish.name}
                    </h3>
                    <GoldRule className="my-6" width="4rem" />
                    <p className="maza-body text-[#F3EFE6]/70 text-base md:text-lg font-light leading-relaxed">
                      {dish.description}
                    </p>
                    <p className="maza-heading text-2xl text-[#B19963] mt-6">{dish.price}</p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Signature;
