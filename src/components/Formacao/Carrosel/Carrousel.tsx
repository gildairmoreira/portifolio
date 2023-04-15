import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/scrollbar';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper';
import LogoAlura from 'assets/componentesImagens/certificados/CertificadoAlura';
import React from 'react'
import LogoPbh from 'assets/componentesImagens/certificados/CertificadoPbh';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import LogoSenai from 'assets/componentesImagens/certificados/CertificadoSenai';


interface FormacaoAcademicaProps
{
    id: number;
    image: React.ReactElement;
    curso: string;
    data: string;
    link: string
}

export default function Carrousel()
{
    const { t } = useTranslation()

    const Certificados: FormacaoAcademicaProps[] = [
        { id: 1, image: <LogoAlura />, curso: t('Formação Front-end'), data: t('date1'), link: 'https://cursos.alura.com.br/user/gildair/degree-front-end-113709/certificate' },

        { id: 2, image: <LogoAlura />, curso: t('Formação HTML e CSS'), data: t('date2'), link: 'https://cursos.alura.com.br/user/gildair/degree-html-e-css-v232036-232036/certificate' },

        { id: 3, image: <LogoAlura />, curso: t('Formação React Com JavaScript'), data: t('date3'), link: 'https://cursos.alura.com.br/user/gildair/degree-react-javascript-450960/certificate'},

        { id: 4, image: <LogoPbh />, curso: t('Lógica de Programação e Javascript'), data: t('date4'), link: 'https://drive.google.com/file/d/1vLszXy2aibXMw437PYRvmBWvXsGiUkfI/view?usp=sharing' },

        { id: 5, image: <LogoPbh />, curso: t('Criação de Sites Wix'), data: t('date5'), link: 'https://drive.google.com/file/d/1c8W43CnUkrE8bLObX1FGanB1fIEmWoR5/view?usp=sharing' },

        { id: 6, image: <LogoAlura />, curso: t('Formação Aplicações Web Com JS'), data: t('date6'), link: 'https://cursos.alura.com.br/user/gildair/degree-javascript-front-end-374365/certificate' },

        { id: 7, image: <LogoAlura />, curso: t('Formação Iniciante em Programação'), data: t('date7'), link: 'https://cursos.alura.com.br/user/gildair/degree-programacao-v123948-123948/certificate' },

        { id: 8, image: <LogoAlura />, curso: t('Formação Pratique HTML e CSS Em Projetos WEB'), data: t('date8'), link: 'https://cursos.alura.com.br/user/gildair/degree-html-css-v534235-534235/certificate' },

        { id: 9, image: <LogoAlura />, curso: t('Curso Arquitetura de CSS'), data: t('date9'), link: 'https://cursos.alura.com.br/user/gildair/course/arquitetura-css/certificate'},

        { id: 10, image: <LogoAlura />, curso: t('Curso SASS'), data: t('date10'), link: 'https://cursos.alura.com.br/user/gildair/course/sass-css-sintaticamente-espetacular/certificate' },

        { id: 11, image: <LogoAlura />, curso: t('WordPress: SITES COM ELEMENTOR'), data: t('date11'), link: 'https://cursos.alura.com.br/user/gildair/course/worpress-sites-elementor/certificate' },

        { id: 12, image: <LogoAlura />, curso: t('WordPress: INTEGRAÇÃO E INTERNACIONALIZAÇÃO'), data: t('date12'), link: 'https://cursos.alura.com.br/user/gildair/course/wordpress-integracao-whatsapp/certificate' },

        { id: 13, image: <LogoAlura />, curso: t('Curso GIT E GITHUB'), data: t('date13'), link: 'https://cursos.alura.com.br/user/gildair/course/git-github-repositorio-commit-versoes/certificate' },

        { id: 14, image: <LogoAlura />, curso: t('Curso Introdutorio de Figma'), data: t('date14'), link: 'https://cursos.alura.com.br/user/gildair/course/figma-construindo-layout-primeiro-site-mobile/certificate' },

        { id: 15, image: <LogoSenai />, curso: t('Programação Front-End'), data: t('date15'), link: 'https://drive.google.com/file/d/1uuWtHhSI9io-hKiMXXsIcRKZOse_3vYE/view' },
    ];

    const eMobile = useMediaQuery({maxWidth:768})
    const slidesNaTela = eMobile ? 1: 3;

    return (
        <Swiper
            modules={[ Navigation, Pagination, Scrollbar, A11y ]}
            navigation
            spaceBetween={0}
            slidesPerView={slidesNaTela}
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
                        <a href={certificado.link} target='_blank' className="botao-link" rel="noreferrer">{t('Ver Certificado')}</a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
