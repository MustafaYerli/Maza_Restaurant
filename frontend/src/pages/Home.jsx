import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Signature from "@/components/Signature";
import Philosophy from "@/components/Philosophy";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.querySelector(hash);
      if (window.__lenis && el) window.__lenis.scrollTo(el);
      else el?.scrollIntoView();
    }, 250);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main>
      <Hero />
      <Marquee items={["Gastlichkeit", "Verweilen", "Sinnlichkeit", "Morgenland", "Handwerk", "Herkunft"]} />
      <About />
      <Signature />
      <Philosophy />
      <MenuPreview />
      <Gallery />
      <Reservation />
      <Contact />
    </main>
  );
}
