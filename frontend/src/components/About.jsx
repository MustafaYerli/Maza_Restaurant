import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, GoldRule } from "./Reveal";
import { IMAGES } from "../data/content";

const TAGS = ["Tradition", "Kultur", "Gastfreundschaft", "Qualität"];

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="ueber" ref={ref} data-testid="about-section" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-6">
              Über MAZA
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6] leading-tight">
              Mehr als ein Restaurant
            </h2>
          </Reveal>
          <GoldRule className="my-8" width="5rem" />
          <Reveal delay={0.1}>
            <p className="maza-body text-[#F3EFE6]/75 text-base md:text-lg font-light leading-relaxed">
              MAZA Vienna verbindet die kulinarische Vielfalt Afghanistans mit einem
              modernen und eleganten Restauranterlebnis. Traditionelle Rezepte,
              ausgewählte Zutaten und herzliche Gastfreundschaft bilden die Grundlage
              unserer Küche.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="maza-body text-[#F3EFE6]/60 text-base font-light leading-relaxed mt-6">
              Für uns beginnt Gastfreundschaft am gemeinsamen Tisch. Ein Mahl ist ein
              Moment des Zusammenkommens – getragen von Kultur, Wärme und der Freude,
              zu teilen. Genau diese Haltung tragen wir in jedes Gericht.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10">
              {TAGS.map((t) => (
                <span
                  key={t}
                  className="maza-body text-[#B19963] text-sm tracking-[0.2em] uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/5] border border-[#B19963]/20">
                <motion.img
                  src={IMAGES.aboutInterior}
                  alt="Atmosphärisches Interieur von MAZA Vienna"
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  style={{ y: imgY }}
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-24 h-24 border-l border-b border-[#B19963]/50 hidden md:block" />
              <div className="absolute -top-5 -right-5 w-24 h-24 border-t border-r border-[#B19963]/50 hidden md:block" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
