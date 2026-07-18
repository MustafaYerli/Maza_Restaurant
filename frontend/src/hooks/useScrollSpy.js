import { useEffect, useState } from "react";

// Verfolgt, welche Sektion aktuell im Blickfeld ist (für den aktiven Nav-Zustand).
export function useScrollSpy(ids, offset = 140) {
  const key = ids.join("|");
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const list = key.split("|");
    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = list[0];
      for (const id of list) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      // Am Seitenende die letzte Sektion aktivieren.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = list[list.length - 1];
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [key, offset]);

  return active;
}
