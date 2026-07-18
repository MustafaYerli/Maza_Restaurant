import React from "react";

const LOGO_SRC = "/maza-logo.webp";

// Offizielles MAZA-Vienna-Logo (Emblem + Wortmarke) als Bild.
export const MazaLogo = ({ variant = "horizontal", className = "" }) => {
  const sizeClass = variant === "stacked" ? "h-32 w-auto" : "h-12 md:h-14 w-auto";
  return (
    <img
      src={LOGO_SRC}
      alt="MAZA Vienna"
      className={`${sizeClass} object-contain select-none ${className}`}
      draggable={false}
    />
  );
};

export default MazaLogo;
