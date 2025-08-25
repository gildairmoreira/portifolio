import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TitleHeader from "../components/TitleHeader";

const AboutMe = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-content",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#about-me",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="about-me" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Sobre Mim"
          sub="🚀 Minha Jornada"
        />
        <div className="about-content flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mt-12">
          {/* Foto à esquerda */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src="/images/about/sobre-foto.jpeg" 
                alt="Gildair Moreira" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          
          {/* Texto à direita */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <p className="text-lg text-white-600 leading-relaxed">
                Olá! Sou <span className="text-white font-semibold">Gildair Moreira</span>, 
                desenvolvedor apaixonado por tecnologia e inovação. Sou de 
                <span className="text-white font-semibold"> Belo Horizonte, MG</span>, 
                e atualmente estudo Sistemas de Informação na Universidade Federal 
                em <span className="text-white font-semibold">Rio Paranaíba</span>.
              </p>
              
              <p className="text-lg text-white-600 leading-relaxed">
                Tenho me dedicado a aprender e aplicar as mais modernas 
                tecnologias de desenvolvimento, sempre buscando criar soluções 
                inovadoras e impactantes que façam a diferença.
              </p>
              
              <p className="text-lg text-white-600 leading-relaxed">
                Minha paixão pela tecnologia me motiva a estar sempre atualizado 
                e participar de projetos desafiadores que contribuam para a 
                comunidade de desenvolvedores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;