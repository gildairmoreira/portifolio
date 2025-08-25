import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import ProjectCarousel from "../components/ProjectCarousel";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom-=100",
        },
      }
    );
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef} 
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Meus Projetos"
          sub="🚀 Portfólio de Desenvolvimento"
        />
        
        <div className="mt-20">
          <ProjectCarousel projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
