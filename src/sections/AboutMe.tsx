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
                desenvolvedor FullStack apaixonado por tecnologia e inovação,
                de <span className="text-white font-semibold">Belo Horizonte, MG</span>.
                Iniciei minha graduação em Sistemas de Informação na
                <span className="text-white font-semibold"> Universidade Federal de Viçosa (UFV)</span>,
                onde construí uma base sólida em fundamentos da computação, e
                hoje dou continuidade ao curso na
                <span className="text-white font-semibold"> Estácio de Sá</span>,
                unindo formação acadêmica a uma vivência mais próxima do mercado tech.
              </p>

              <p className="text-lg text-white-600 leading-relaxed">
                Tenho me dedicado a aplicar as mais modernas tecnologias de
                desenvolvimento — do front-end ao back-end — em projetos reais,
                sempre buscando criar soluções que entreguem valor e
                impacto para quem as utiliza.
              </p>

              <p className="text-lg text-white-600 leading-relaxed">
                Minha paixão pela tecnologia me motiva a estar sempre atualizado,
                participando de projetos desafiadores e contribuindo com a
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