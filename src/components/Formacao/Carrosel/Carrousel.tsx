import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper';
import LogoAlura from 'assets/componentesImagens/certificados/CertificadoAlura';
import React from 'react'


interface FormacaoAcademicaProps
{
    id: number;
    image: React.ReactElement;
    curso: string;
    data: string;
    link:string
}

const Certificados: FormacaoAcademicaProps[] = [
    { id: 1, image: <LogoAlura />, curso: 'Formação Front-end', data: '09/11/2022', link:'https://cursos.alura.com.br/user/gildair/degree-front-end-113709/certificate' },

    { id: , image: <LogoAlura />, curso: 'Formação HTML e CSS', data: '22/11/2022', link:'https://cursos.alura.com.br/user/gildair/degree-html-e-css-v232036-232036/certificate' },

    { id: , image: <LogoAlura />, curso: 'Formação Desenvolva Aplicações Web Com JavaScript', data: ' 06/01/2023', link:'https://cursos.alura.com.br/user/gildair/degree-javascript-front-end-374365/certificate' },

    { id: , image: <LogoAlura />, curso: 'Formação Iniciante em Programação', data: '13/12/2022', link:'https://cursos.alura.com.br/user/gildair/degree-programacao-v123948-123948/certificate' },

    { id: , image: <LogoAlura />, curso: 'Lógica de Programação e Javascript.', data: '06/10/2022', link:'https://drive.google.com/file/d/1vLszXy2aibXMw437PYRvmBWvXsGiUkfI/view?usp=sharing' },

    { id: , image: <LogoAlura />, curso: 'Criação de Sites', data: '04/04/2023', link:'https://drive.google.com/file/d/1c8W43CnUkrE8bLObX1FGanB1fIEmWoR5/view?usp=sharing' },

    { id: , image: <LogoAlura />, curso: 'Formação Pratique HTML e CSS Em Projetos WEB', data: '19/10/2022', link: 'https://cursos.alura.com.br/user/gildair/degree-html-css-v534235-534235/certificate' },

    { id: , image: <LogoAlura />, curso: 'Formação REACT COM JAVASCRIPT', data: '10/03/2023', link: 'https://cursos.alura.com.br/user/gildair/degree-react-javascript-450960/certificate' },

    { id: , image: <LogoAlura />, curso: 'Curso Arquitetura de CSS', data: '21/10/2022', link: 'https://cursos.alura.com.br/user/gildair/course/arquitetura-css/certificate' },

    { id: , image: <LogoAlura />, curso: 'Curso SASS', data: '26/01/2023', link: 'https://cursos.alura.com.br/user/gildair/course/sass-css-sintaticamente-espetacular/certificate' },

    { id: , image: <LogoAlura />, curso: 'Curso WORDPRESS: SITES COM ELEMENTOR', data: '14/01/2023', link: 'https://cursos.alura.com.br/user/gildair/course/worpress-sites-elementor/certificate' },
    { id: , image: <LogoAlura />, curso: 'Curso WORDPRESS: INTEGRAÇÃO WHATSAPP E INTERNACIONALIZAÇÃO', data: '18/01/2023', link: 'https://cursos.alura.com.br/user/gildair/course/wordpress-integracao-whatsapp/certificate' },
];
export default function Carrousel() {
  return (
      <Swiper
          modules={[ Navigation, Pagination, Scrollbar, A11y ]}
          navigation
          spaceBetween={0}
          slidesPerView={3}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="swiper-pagination-top"
      >
          {Certificados.map((certificado) => (
              <SwiperSlide key={certificado.id}>
                  <div className="formacao__academica-bloco">
                      {certificado.image}
                      <hr />
                      <span className='textos__bloco'>
                          <h3>{certificado.curso}</h3>
                          <p>{certificado.data}</p>
                      </span>
                      <a href={certificado.link} target='_blank' className="botao-link" rel="noreferrer">Botão com link</a>
                  </div>
              </SwiperSlide>
          ))}
      </Swiper>
  )
}
