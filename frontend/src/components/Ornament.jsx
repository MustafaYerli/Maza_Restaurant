import React from "react";

// Sehr dezentes afghanisch-orientalisches Muster (achtzackiger Stern / Girih).
// Wird nur als subtiler Hintergrund oder in Trennflächen verwendet.
export const OrientPattern = ({ className = "", color = "#B19963", opacity = 0.06 }) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    aria-hidden="true"
    style={{ opacity }}
  >
    <defs>
      <pattern id="girih" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
        <g fill="none" stroke={color} strokeWidth="1">
          <path d="M40 8l9 23 23 9-23 9-9 23-9-23-23-9 23-9z" />
          <circle cx="40" cy="40" r="6" />
          <path d="M40 0v12M40 68v12M0 40h12M68 40h12" />
        </g>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#girih)" />
  </svg>
);

// Elegante goldene Ornament-Trennlinie mit zentraler Raute.
export const OrnamentDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
    <span className="h-px w-16 md:w-28 bg-gradient-to-r from-transparent to-[#B19963]/60" />
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M13 1l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" stroke="#B19963" strokeWidth="1" />
      <circle cx="13" cy="13" r="1.6" fill="#B19963" />
    </svg>
    <span className="h-px w-16 md:w-28 bg-gradient-to-l from-transparent to-[#B19963]/60" />
  </div>
);
