import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const LETTERS = ["M", "A", "Z", "A"];

// Edler Preloader: Wortmarke baut sich auf, goldene Linie zieht ein,
// anschließend gleitet der Vorhang elegant nach oben.
const Preloader = () => {
  const [done, setDone] = useState(() => {
    try {
      return sessionStorage.getItem("maza_intro") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (done) return;
    document.body.style.overflow = "hidden";
    window.__lenis?.stop?.();
    const t = setTimeout(() => {
      setDone(true);
      try {
        sessionStorage.setItem("maza_intro", "1");
      } catch {}
    }, 2100);
    return () => clearTimeout(t);
  }, [done]);

  const release = () => {
    document.body.style.overflow = "";
    window.__lenis?.start?.();
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence onExitComplete={release}>
      {!done && (
        <motion.div
          data-testid="preloader"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071E19]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: EASE }}
        >
          <div className="grain-overlay" aria-hidden="true" />
          <div className="relative flex flex-col items-center">
            <div className="flex items-end overflow-hidden">
              {LETTERS.map((l, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    className="maza-heading block text-[#F3EFE6] font-light text-6xl md:text-8xl leading-none"
                    style={{ letterSpacing: "0.12em" }}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.1 }}
                  >
                    {l}
                  </motion.span>
                </span>
              ))}
            </div>

            <motion.span
              className="block h-px bg-[#B19963] mt-5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: EASE, delay: 0.6 }}
              style={{ width: "9rem", transformOrigin: "center" }}
            />

            <motion.p
              className="maza-body text-[#B19963] text-[0.7rem] md:text-xs tracking-[0.5em] uppercase mt-5 pl-[0.5em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              Vienna
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
