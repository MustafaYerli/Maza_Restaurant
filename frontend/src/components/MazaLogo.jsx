import React from "react";

// Stilisiertes MAZA-Vienna-Emblem: zentrale orientalische Kuppel/Minarett,
// flankiert von zwei Lorbeer-/Ährenzweigen. Nach der Brand-CI nachgebildet.
export const MazaEmblem = ({ className = "", green = "#3A5F54", gold = "#B19963" }) => (
  <svg
    viewBox="0 0 240 200"
    className={className}
    role="img"
    aria-label="MAZA Vienna Emblem"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Zentrale Struktur – Minarett mit Zwiebelkuppel */}
    <g fill={green}>
      {/* Mittlerer Turm */}
      <path d="M120 20c7 8 11 15 11 24 0 8-5 13-11 15-6-2-11-7-11-15 0-9 4-16 11-24z" />
      <rect x="112" y="60" width="16" height="86" />
      <path d="M112 60c0-10 3.6-16 8-20 4.4 4 8 10 8 20z" />
      {/* Linker Turm */}
      <path d="M92 52c5 5.5 8 10.5 8 16.5 0 5.5-3.4 9-8 10.5-4.6-1.5-8-5-8-10.5 0-6 3-11 8-16.5z" />
      <rect x="86" y="84" width="12" height="62" />
      <path d="M86 84c0-7 2.6-11 6-13.5 3.4 2.5 6 6.5 6 13.5z" />
      {/* Rechter Turm */}
      <path d="M148 52c5 5.5 8 10.5 8 16.5 0 5.5-3.4 9-8 10.5-4.6-1.5-8-5-8-10.5 0-6 3-11 8-16.5z" />
      <rect x="142" y="84" width="12" height="62" />
      <path d="M142 84c0-7 2.6-11 6-13.5 3.4 2.5 6 6.5 6 13.5z" />
    </g>

    {/* Lorbeer-/Ährenzweige in Gold */}
    <g fill={gold}>
      {[...Array(7)].map((_, i) => {
        const t = i / 6;
        const x = 78 - t * 52;
        const y = 150 - t * 96 - Math.sin(t * Math.PI) * 6;
        const rot = -35 - t * 45;
        return (
          <ellipse
            key={`l${i}`}
            cx={x}
            cy={y}
            rx="9"
            ry="3.4"
            transform={`rotate(${rot} ${x} ${y})`}
          />
        );
      })}
      {[...Array(7)].map((_, i) => {
        const t = i / 6;
        const x = 162 + t * 52;
        const y = 150 - t * 96 - Math.sin(t * Math.PI) * 6;
        const rot = 35 + t * 45;
        return (
          <ellipse
            key={`r${i}`}
            cx={x}
            cy={y}
            rx="9"
            ry="3.4"
            transform={`rotate(${rot} ${x} ${y})`}
          />
        );
      })}
    </g>
  </svg>
);

// Vollständiges Logo-Lockup: Emblem + Wortmarke.
export const MazaLogo = ({
  variant = "horizontal",
  className = "",
  gold = "#B19963",
  green = "#F3EFE6",
  showEmblem = true,
}) => {
  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        {showEmblem && <MazaEmblem className="w-16 h-14 mb-3" gold={gold} green={green} />}
        <span
          className="maza-wordmark leading-none"
          style={{ color: green, fontSize: "1.75rem", letterSpacing: "0.42em" }}
        >
          M·A·Z·A
        </span>
        <span
          className="maza-wordmark leading-none mt-1"
          style={{ color: gold, fontSize: "0.7rem", letterSpacing: "0.62em" }}
        >
          VIENNA
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showEmblem && <MazaEmblem className="w-9 h-8 shrink-0" gold={gold} green={green} />}
      <div className="flex flex-col leading-none">
        <span
          className="maza-wordmark"
          style={{ color: green, fontSize: "1.15rem", letterSpacing: "0.38em" }}
        >
          M·A·Z·A
        </span>
        <span
          className="maza-wordmark mt-[3px]"
          style={{ color: gold, fontSize: "0.55rem", letterSpacing: "0.55em" }}
        >
          VIENNA
        </span>
      </div>
    </div>
  );
};

export default MazaLogo;
