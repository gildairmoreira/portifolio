import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useGSAP(() => {
    // Animate cards on mount
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getVisibleProjects = () => {
    if (typeof window === 'undefined') return projects.slice(0, 3);
    
    let visibleCount = 1;
    if (window.innerWidth >= 1024) {
      visibleCount = 3;
    } else if (window.innerWidth >= 768) {
      visibleCount = 2;
    }
    
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={prevSlide}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black-200 border border-black-300 hover:bg-black-300 transition-colors duration-300 group touch-manipulation"
          aria-label="Projeto anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
        </button>
        
        <div className="flex space-x-1 sm:space-x-2">
          {projects.map((project, index) => (
            <button
              key={`indicator-${project.id}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 touch-manipulation ${
                index === currentIndex ? 'bg-blue-400' : 'bg-black-300'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black-200 border border-black-300 hover:bg-black-300 transition-colors duration-300 group touch-manipulation"
          aria-label="Próximo projeto"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-blue-400 transition-colors" />
        </button>
      </div>

      {/* Projects Grid */}
      <div 
        ref={carouselRef}
        className={`${
          isMobile 
            ? 'flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-4 sm:gap-6 pb-4 touch-pan-x' 
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
        }`}
        style={isMobile ? { scrollBehavior: 'smooth' } : {}}
        onTouchStart={isMobile ? onTouchStart : undefined}
        onTouchMove={isMobile ? onTouchMove : undefined}
        onTouchEnd={isMobile ? onTouchEnd : undefined}
      >
        {(isMobile ? projects : visibleProjects).map((project, index) => (
          <div
            key={`project-card-${project.id}`}
            ref={(el) => { cardRefs.current[index] = el; }}
            className={`group relative bg-black-200 rounded-xl border border-black-300 overflow-hidden hover:border-blue-400 transition-all duration-300 hover:scale-105 ${
              isMobile ? 'min-w-[260px] w-[260px] sm:min-w-[280px] sm:w-[280px] snap-center flex-shrink-0' : ''
            }`}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-200/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white-50 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
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

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-black-300 border border-black-300 rounded-lg hover:bg-black-100 hover:border-blue-400 transition-all duration-300 text-white text-sm flex-1 justify-center"
                >
                  <Github className="w-4 h-4" />
                  Repositório
                </a>
                
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 border border-blue-600 rounded-lg hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 text-white text-sm flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Deploy
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;