import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { lazy, Suspense, useState, useEffect } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";

// Lazy load Spline — it's a heavy dependency (~2MB)
const Spline = lazy(() => import("@splinetool/react-spline"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [loadSpline, setLoadSpline] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (!mobile) {
      // Delay Spline load slightly to prioritize critical content
      const timer = setTimeout(() => setLoadSpline(true), 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/ui/bg.png" alt="" />
      </div>

      {/* Spline 3D Orb - only loads on desktop for performance */}
      {!isMobile && loadSpline && (
        <div className="hero-spline-bg">
          <Suspense fallback={<div className="w-full h-full" />}>
            <Spline
              scene="https://prod.spline.design/en7bET9tej6TRrbe/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </Suspense>
        </div>
      )}

      {/* Mobile: Static orb glow effect (CSS only, zero JS cost) */}
      {isMobile && (
        <div className="hero-orb-glow" />
      )}

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 z-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Moldando
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${word.imgPath}-${index}`}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>em Projetos Reais</h1>
              <h1>que Entregam Resultados</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Olá, eu sou Gildair, um desenvolvedor FullStack.
            </p>

            <Button
              text="Veja Meu Trabalho"
              className="md:w-80 md:h-16 w-full max-w-60 md:max-w-80 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
