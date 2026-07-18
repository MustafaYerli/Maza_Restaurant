import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { OrnamentDivider } from "./Ornament";
import { GALLERY } from "../data/content";

const spanClass = {
  wide: "sm:col-span-2 aspect-[16/10]",
  tall: "row-span-2 aspect-[3/4] sm:aspect-auto",
  normal: "aspect-square",
};

const Gallery = () => {
  const [index, setIndex] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length),
    []
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % GALLERY.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  return (
    <section id="galerie" data-testid="gallery-section" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center mb-14 md:mb-20">
          <Reveal>
            <p className="maza-body text-[#B19963] text-xs tracking-[0.35em] uppercase mb-5">
              Impressionen
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="maza-heading text-4xl md:text-5xl lg:text-6xl font-light text-[#F3EFE6]">
              Galerie
            </h2>
          </Reveal>
          <OrnamentDivider className="mt-8" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-3 md:gap-4">
          {GALLERY.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 0.06}
              className={`${spanClass[img.span]} overflow-hidden group cursor-pointer relative`}
            >
              <button
                data-testid={`gallery-item-${i}`}
                onClick={() => setIndex(i)}
                className="w-full h-full block"
                aria-label={`Bild öffnen: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
                />
                <span className="absolute inset-0 bg-[#071E19]/0 group-hover:bg-[#071E19]/30 transition-colors duration-500" />
                <span className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="maza-body text-[#F3EFE6] text-xs tracking-[0.2em] uppercase">
                    {img.alt}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="lightbox"
            className="fixed inset-0 z-[70] bg-[#050f0c]/95 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              data-testid="lightbox-close"
              className="absolute top-6 right-6 text-[#F3EFE6] hover:text-[#B19963] transition-colors z-10"
              onClick={close}
              aria-label="Schließen"
            >
              <X strokeWidth={1.2} size={32} />
            </button>
            <button
              data-testid="lightbox-prev"
              className="absolute left-4 md:left-10 text-[#F3EFE6] hover:text-[#B19963] transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft strokeWidth={1} size={44} />
            </button>
            <motion.img
              key={index}
              src={GALLERY[index].src}
              alt={GALLERY[index].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain border border-[#B19963]/20"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              data-testid="lightbox-next"
              className="absolute right-4 md:right-10 text-[#F3EFE6] hover:text-[#B19963] transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Nächstes Bild"
            >
              <ChevronRight strokeWidth={1} size={44} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
