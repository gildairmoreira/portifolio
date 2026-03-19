import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Github, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import LazyImage from './LazyImage';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  repository: string;
  deploy: string | null;
  technologies: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Animação inicial dos cards
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
          }
        );
      }
    });
  }, [projects]);

  return (
    <div className="relative w-full max-w-7xl mx-auto md:px-4 px-1">
      <Swiper
        modules={[Navigation, Pagination, A11y, FreeMode]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        freeMode={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="project-swiper pb-12"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={`project-slide-${project.id}`}>
            <div
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative bg-black-200 rounded-xl border border-black-300 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-[1.02] h-full flex flex-col"
            >
              {/* Imagem do Projeto */}
              <div className="relative h-48 overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Conteúdo do Projeto */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white-50 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={`${project.id}-tech-${tech}`}
                      className="px-2 py-1 text-xs bg-black-300 text-blue-400 rounded-md border border-black-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-black-300 text-white-50 rounded-md border border-black-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Botões de Ação */}
                <div className="flex gap-3">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-black-300 border border-black-300 rounded-lg hover:bg-black-100 hover:border-blue-400 transition-all duration-300 text-white text-sm flex-1 justify-center z-10"
                  >
                    <Github className="w-4 h-4" />
                    Repositório
                  </a>

                  {project.deploy && (
                    <a
                      href={project.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 text-white text-sm flex-1 justify-center z-10"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Deploy
                    </a>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilos customizados para o Swiper de Projetos */}
      <style>{`
        .project-swiper .swiper-button-next,
        .project-swiper .swiper-button-prev {
          color: white !important;
          background: rgba(40, 39, 50, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #3f3f46;
          transition: all 0.3s ease;
        }
        
        .project-swiper .swiper-button-next:after,
        .project-swiper .swiper-button-prev:after {
          font-size: 18px !important;
          font-weight: bold;
        }
        
        .project-swiper .swiper-button-next:hover,
        .project-swiper .swiper-button-prev:hover {
          background: #3f3f46;
          color: #60a5fa !important;
          border-color: #60a5fa;
        }

        .project-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3) !important;
          opacity: 1 !important;
        }

        .project-swiper .swiper-pagination-bullet-active {
          background: #60a5fa !important;
          transform: scale(1.2);
        }

        .project-swiper {
          overflow: visible !important;
          padding-bottom: 50px !important;
        }
      `}</style>
    </div>
  );
};

export default ProjectCarousel;