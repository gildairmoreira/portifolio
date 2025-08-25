import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

interface FormacaoItem {
  id: number;
  title: string;
  institution: string;
  date: string;
  image: string;
  link: string;
}

const FormacaoCard: React.FC<{ item: FormacaoItem }> = ({ item }) => {
  return (
    <div className="formacao-card bg-white p-4 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300 group h-72 flex flex-col shadow-lg hover:shadow-xl">
      {/* Logo container - mais compacto */}
      <div className="w-32 h-20 mb-3 mx-auto flex items-center justify-center bg-gray-50 rounded-lg p-2">
        <img src={item.image} alt={`Logo ${item.institution}`} className="max-w-full max-h-full object-contain filter hover:scale-110 transition-transform duration-300" />
      </div>
      
      <hr className="w-full border-gray-300 mb-3" />
      
      {/* Conteúdo de texto - mais compacto */}
      <div className="text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-900 font-semibold text-sm mb-2 leading-tight line-clamp-2">{item.title}</h3>
          <p className="text-gray-700 font-medium text-xs mb-1">{item.institution}</p>
          <p className="text-gray-500 text-xs">{item.date}</p>
        </div>
        
        {/* Botão sempre visível e dentro do card */}
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-xs font-medium w-full justify-center mt-3 shadow-md"
        >
          Ver Certificado
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Formacao: React.FC = () => {
  useGSAP(() => {
    // Animate the formation cards
    gsap.utils.toArray(".formacao-card").forEach((card) => {
      gsap.from(card as gsap.TweenTarget, {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card as gsap.DOMTarget,
          start: "top 80%",
        },
      });
    });

    // Animate the university info
    gsap.from(".university-info", {
      yPercent: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".university-info",
        start: "top 80%",
      },
    });
  }, []);
  const certificados: FormacaoItem[] = [
    {
      id: 1,
      title: "Formação Front-end",
      institution: "Alura",
      date: "2022",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/degree-front-end-113709/certificate"
    },
    {
      id: 2,
      title: "Formação HTML e CSS",
      institution: "Alura",
      date: "2022",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/degree-html-e-css-v232036-232036/certificate"
    },
    {
      id: 3,
      title: "Formação React Com JavaScript",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/degree-react-javascript-450960/certificate"
    },
    {
      id: 4,
      title: "Lógica de Programação e Javascript",
      institution: "PBH",
      date: "2022",
      image: "/images/certificates/pbh-certificate.svg",
      link: "https://drive.google.com/file/d/1vLszXy2aibXMw437PYRvmBWvXsGiUkfI/view?usp=sharing"
    },
    {
      id: 5,
      title: "Criação de Sites Wix",
      institution: "PBH",
      date: "2023",
      image: "/images/certificates/pbh-certificate.svg",
      link: "https://drive.google.com/file/d/1c8W43CnUkrE8bLObX1FGanB1fIEmWoR5/view?usp=sharing"
    },
    {
      id: 6,
      title: "Formação Aplicações Web Com JS",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/degree-javascript-front-end-374365/certificate"
    },
    {
      id: 7,
      title: "Formação Iniciante em Programação",
      institution: "Alura",
      date: "2022",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/degree-programacao-v123948-123948/certificate"
    },
    {
      id: 8,
      title: "Formação Pratique HTML e CSS Em Projetos WEB",
      institution: "Alura",
      date: "2022",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/degree-html-css-v534235-534235/certificate"
    },
    {
      id: 9,
      title: "Minicurso de Java",
      institution: "Rocketseat",
      date: "2024",
      image: "/images/certificates/rocketseat.svg",
      link: "https://app.rocketseat.com.br/certificates/8f1ea4e5-a75a-443e-b2a0-0aaae75e3a70"
    },
    {
      id: 10,
      title: "Curso Arquitetura de CSS",
      institution: "Alura",
      date: "2022",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/course/arquitetura-css/certificate"
    },
    {
      id: 11,
      title: "Curso SASS",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/course/sass-css-sintaticamente-espetacular/certificate"
    },
    {
      id: 12,
      title: "WordPress: SITES COM ELEMENTOR",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/course/worpress-sites-elementor/certificate"
    },
    {
      id: 13,
      title: "WordPress: INTEGRAÇÃO E INTERNACIONALIZAÇÃO",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/course/wordpress-integracao-whatsapp/certificate"
    },
    {
      id: 14,
      title: "Curso GIT E GITHUB",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/course/git-github-repositorio-commit-versoes/certificate"
    },
    {
      id: 15,
      title: "Curso Introdutorio de Figma",
      institution: "Alura",
      date: "2023",
      image: "/images/certificates/alura-certificate.svg",
      link: "https://cursos.alura.com.br/user/gildair/course/figma-construindo-layout-primeiro-site-mobile/certificate"
    },
    {
       id: 16,
       title: "Programação Front-End",
       institution: "SENAI",
       date: "2023",
       image: "/images/certificates/senai-certificate.png",
       link: "https://drive.google.com/file/d/1uuWtHhSI9io-hKiMXXsIcRKZOse_3vYE/view"
     }
  ];

  return (
    <section className="flex-center md:mt-40 mt-20 section-padding xl:px-0" id="formacao">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Minha Formação"
          sub="🎓 Educação e Certificações"
        />
        
        {/* University Information */}
        <div className="university-info mt-16 mb-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo da UFV - Aumentada e Centralizada */}
              <div className="flex-shrink-0 flex justify-center mb-6 md:mb-0">
                <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <img src="/images/logos/logotipo-UFV.png" alt="Logo UFV" className="w-48 h-36 object-contain mx-auto" />
                </div>
              </div>
              
              {/* Informações da Faculdade */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-white mb-4">🏛️ Formação Acadêmica</h2>
                <div className="text-lg text-white-50 mb-6">
                  <p className="mb-2"><strong>Bacharelado em Sistemas de Informação</strong></p>
                  <p className="mb-2">Universidade Federal de Viçosa (UFV)</p>
                  <p className="text-blue-400">📅 2024 - 2028</p>
                </div>
                
                {/* Disciplinas e Habilidades */}
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white mb-4">📚 Principais Disciplinas Cursadas</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-400 mb-1">💻 Lógica de Programação</h4>
                      <p className="text-white-50">Fundamentos de algoritmos, estruturas condicionais e loops</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-400 mb-1">🔢 Algoritmos e Estrutura de Dados</h4>
                      <p className="text-white-50">Arrays, listas, pilhas, filas, árvores e algoritmos de ordenação</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-400 mb-1">🏗️ Programação Orientada a Objetos</h4>
                      <p className="text-white-50">Classes, herança, polimorfismo e encapsulamento</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-400 mb-1">🔒 Segurança da Informação</h4>
                      <p className="text-white-50">Criptografia, autenticação e boas práticas de segurança</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-400 mb-1">🗄️ Banco de Dados</h4>
                      <p className="text-white-50">SQL, modelagem de dados e sistemas de gerenciamento</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-semibold text-blue-400 mb-1">⚙️ Engenharia de Software</h4>
                      <p className="text-white-50">Metodologias ágeis, requisitos, análise de sistemas, arquitetura de software, testes e deploy de aplicações</p>
                    </div>
                  </div>
                  
                  {/* Habilidades para o Mercado - Simplificado e Discreto */}
                  <div className="mt-6 p-3 bg-white/5 border border-white/10 rounded-lg">
                    <h4 className="text-sm font-medium text-white/70 mb-2">💼 Habilidades Desenvolvidas</h4>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Resolução de Problemas</span>
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded">Manipulação de Dados</span>
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded">POO</span>
                      <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded">Segurança</span>
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">Metodologias Ágeis</span>
                      <span className="bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">Testes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-12">📜 Certificações e Cursos</h3>
          <div className="mt-12">
              <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="formacao-swiper px-[10%] md:px-4"
              >
                {certificados.map((certificado) => (
                  <SwiperSlide key={certificado.id}>
                    <FormacaoCard item={certificado} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Formacao;