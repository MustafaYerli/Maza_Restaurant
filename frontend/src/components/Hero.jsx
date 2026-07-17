import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MaskedLines } from "./Reveal";
import { OrnamentDivider } from "./Ornament";
import { IMAGES } from "../data/content";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[640px] flex items-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src={IMAGES.heroFeast}
          alt="Afghanisches Festmahl bei MAZA Vienna"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#071E19] via-[#071E19]/55 to-[#071E19]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071E19]/70 to-transparent" />
      </motion.div>

      <motion.div
        className="relative z-20 mx-auto max-w-7xl w-full px-5 md:px-10 pt-24"
        style={{ y: contentY }}
      >
        <motion.p
          className="maza-body text-[#B19963] text-xs md:text-sm tracking-[0.4em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Afghan Fine Dining in Vienna
        </motion.p>

        <h1 className="maza-heading text-[#F3EFE6] font-light leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem]">
          <MaskedLines
            lines={["Afghanische Tradition.", "Modern interpretiert."]}
            delay={0.35}
          />
        </h1>

        <motion.p
          className="maza-body text-[#F3EFE6]/80 text-base md:text-lg font-light max-w-xl mt-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          Eine kulinarische Reise durch die Aromen Afghanistans – geprägt von
          Gastfreundschaft, hochwertigen Zutaten und moderner Raffinesse.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1 }}
        >
          <button
            data-testid="hero-reserve-btn"
            onClick={() => scrollTo("#reservierung")}
            className="maza-body text-xs tracking-[0.22em] uppercase px-9 py-4 bg-[#B19963] text-[#071E19] hover:bg-[#c5ac74] transition-colors duration-400"
          >
            Tisch reservieren
          </button>
          <button
            data-testid="hero-menu-btn"
            onClick={() => scrollTo("#menue")}
            className="maza-body text-xs tracking-[0.22em] uppercase px-9 py-4 border border-[#F3EFE6]/40 text-[#F3EFE6] hover:border-[#B19963] hover:text-[#B19963] transition-colors duration-400"
          >
            Menü entdecken
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-14"
        >
          <OrnamentDivider className="!justify-start" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
