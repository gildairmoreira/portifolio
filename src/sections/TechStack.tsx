import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { lazy, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";

// Lazy load 3D models for better initial page performance
const TechIconCardExperience = lazy(() => import("../components/models/tech_logos/TechIconCardExperience"));

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate the tech cards in the skills section
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills" className="flex-center section-padding" ref={containerRef}>
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Como Posso Contribuir & Minhas Principais Habilidades"
          sub="🤝 O Que Trago Na Bagagem"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon, index) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-4xl rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <View className="w-full h-full">
                    <Suspense fallback={null}>
                      {/* Passa o índice para garantir física de rotação independente por card */}
                      <TechIconCardExperience model={techStackIcon} cardIndex={index} />
                    </Suspense>
                  </View>
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Single shared Canvas for all View components - uses only 1 WebGL context */}
      <Canvas
        className="!fixed !top-0 !left-0 !w-full !h-full"
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
        eventSource={containerRef as React.MutableRefObject<HTMLDivElement>}
        eventPrefix="client"
      >
        <View.Port />
      </Canvas>
    </div>
  );
};

export default TechStack;
