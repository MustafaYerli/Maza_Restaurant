import React from "react";

const LOGO_HORIZONTAL = "/maza-logo-h.webp";
const LOGO_STACKED = "/maza-logo.webp";

// Offizielles MAZA-Vienna-Logo als Bild.
// horizontal: Emblem + Schriftzug nebeneinander (Navbar)
// stacked: gestapelt (Footer)
export const MazaLogo = ({ variant = "horizontal", className = "" }) => {
  const isStacked = variant === "stacked";
  const src = isStacked ? LOGO_STACKED : LOGO_HORIZONTAL;
  const sizeClass = isStacked ? "h-32 w-auto" : "h-10 md:h-12 w-auto";
  return (
    <img
      src={src}
      alt="MAZA Vienna"
      className={`${sizeClass} object-contain select-none ${className}`}
      draggable={false}
    />
  );
};

export default MazaLogo;
