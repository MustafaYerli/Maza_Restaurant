import React from "react";

// Elegantes goldenes Halal-Zeichen für die Navbar.
export const HalalBadge = ({ className = "" }) => (
  <span
    data-testid="halal-badge"
    aria-label="Halal zertifiziert"
    title="Halal"
    className={`inline-flex items-center gap-2 pl-3 md:pl-4 ml-1 border-l border-[#B19963]/30 ${className}`}
  >
    <span className="relative inline-flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#B19963]/70">
      <span
        className="text-[#B19963] leading-none"
        style={{ fontSize: "0.95rem", fontFamily: "'Segoe UI', 'Noto Naskh Arabic', serif" }}
        aria-hidden="true"
      >
        حلال
      </span>
    </span>
    <span className="hidden md:inline maza-body text-[#B19963] text-[0.6rem] tracking-[0.32em] uppercase">
      Halal
    </span>
  </span>
);

export default HalalBadge;
