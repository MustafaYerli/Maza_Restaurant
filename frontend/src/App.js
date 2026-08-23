import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/styles/cookieconsent-theme.css";
import cookieConsentConfig from "@/config/cookieConsentConfig";
import "@/App.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BackToTop from "@/components/BackToTop";
import Home from "@/pages/Home";
import Speisekarte from "@/pages/Speisekarte";
import Impressum from "@/pages/Impressum";
import Datenschutz from "@/pages/Datenschutz";

function App() {
  useEffect(() => {
    let tries = 0;
    const init = () => {
      if (window.CookieConsent?.run) {
        window.CookieConsent.run(cookieConsentConfig);
      } else if (tries++ < 50) {
        setTimeout(init, 100);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return (
    <div className="App bg-[#071E19] text-[#F3EFE6] antialiased overflow-x-clip">
      <div className="grain-overlay" aria-hidden="true" />
      <Preloader />
      <BrowserRouter>
        <MotionConfig reducedMotion="user">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speisekarte" element={<Speisekarte />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
          <Footer />
          <BackToTop />
        </MotionConfig>
      </BrowserRouter>
    </div>
  );
}

export default App;
