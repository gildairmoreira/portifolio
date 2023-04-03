import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper';
import LogoAlura from 'assets/componentesImagens/certificados/LogoAlura';
import React from 'react'


interface FormacaoAcademicaProps
{
    id: number;
    image: React.ReactElement;
    curso: string;
    data: string;
}

const Certificados: FormacaoAcademicaProps[] = [
    { id: 1, image: <LogoAlura />, curso: 'Formação Front-end', data: '2022 - alura' },
    { id: 2, image: <LogoAlura />, curso: 'Formação Front-end', data: '2022 - alura' },
    { id: 3, image: <LogoAlura />, curso: 'Formação Front-end', data: '2022 - alura' },
    { id: 4, image: <LogoAlura />, curso: 'Formação Front-end', data: '2022 - alura' },
    { id: 5, image: <LogoAlura />, curso: 'Formação Front-end', data: '2022 - alura' },
    { id: 6, image: <LogoAlura />, curso: 'Formação Front-end', data: '2022 - alura' },
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
                  </div>
              </SwiperSlide>
          ))}
      </Swiper>
  )
}
