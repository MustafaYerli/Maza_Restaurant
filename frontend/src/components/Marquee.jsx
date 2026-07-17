import React from "react";

// Langsame, ruhige Editorial-Laufschrift.
const Marquee = ({ items }) => {
  const content = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-[#B19963]/15 py-7 md:py-9 select-none"
      data-testid="brand-marquee"
    >
      <div className="maza-marquee flex whitespace-nowrap">
        {content.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="maza-heading text-3xl md:text-5xl font-light text-[#F3EFE6]/85 px-8 md:px-12">
              {word}
            </span>
            <span className="text-[#B19963] text-2xl md:text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
