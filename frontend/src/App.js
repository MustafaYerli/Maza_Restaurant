import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Signature from "@/components/Signature";
import Philosophy from "@/components/Philosophy";
import MenuPreview from "@/components/MenuPreview";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App bg-[#071E19] text-[#F3EFE6] antialiased overflow-x-hidden">
      <div className="grain-overlay" aria-hidden="true" />
      <MotionConfig reducedMotion="user">
        <Header />
        <main>
          <Hero />
          <Marquee items={["Tradition", "Kultur", "Gastfreundschaft", "Qualität", "Eleganz", "Authentizität"]} />
          <About />
          <Signature />
          <Philosophy />
          <MenuPreview />
          <Gallery />
          <Reservation />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </div>
  );
}

export default App;
