import React from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Sanftes Einblenden beim Scrollen.
export const Reveal = ({ children, delay = 0, y = 40, className = "", as = "div" }) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
};

// Zeile-für-Zeile-Maskenreveal für große Überschriften.
export const MaskedLines = ({ lines, className = "", lineClassName = "", delay = 0 }) => (
  <span className={className}>
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden">
        <motion.span
          className={`block ${lineClassName}`}
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.14 }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

// Feine goldene Linie, die sich langsam aufbaut.
export const GoldRule = ({ className = "", width = "6rem" }) => (
  <motion.span
    className={`block h-px bg-[#B19963] ${className}`}
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: EASE }}
    style={{ width, transformOrigin: "left" }}
  />
);

export default Reveal;
