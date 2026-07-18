import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Dezenter „Nach oben"-Knopf, der nach dem Scrollen elegant erscheint.
const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          data-testid="back-to-top"
          onClick={toTop}
          aria-label="Nach oben"
          className="maza-totop fixed bottom-7 right-7 z-40 flex items-center justify-center w-12 h-12 rounded-full border border-[#B19963]/50 bg-[#071E19]/80 backdrop-blur-md text-[#B19963] hover:bg-[#B19963] hover:text-[#071E19]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ArrowUp strokeWidth={1.3} size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
