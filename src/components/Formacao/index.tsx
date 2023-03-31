import { useState } from 'react';
import Carousel from 'react-elastic-carousel'
import './Formacao.scss';

interface Formacao 
{
    id: number;
    empresa: string;
    logo: string;
    curso: string;
    data: string;
}

const formacoes: Formacao[] = [
    { id: 1, empresa: 'Empresa A', logo: 'logo-a.png', curso: 'Curso 1', data: '01/01/2022' },
    { id: 2, empresa: 'Empresa B', logo: 'logo-b.png', curso: 'Curso 2', data: '01/02/2022' },
    { id: 3, empresa: 'Empresa C', logo: 'logo-c.png', curso: 'Curso 3', data: '01/03/2022' },
    { id: 4, empresa: 'Empresa D', logo: 'logo-d.png', curso: 'Curso 4', data: '01/04/2022' },
    { id: 5, empresa: 'Empresa E', logo: 'logo-e.png', curso: 'Curso 5', data: '01/05/2022' },
    { id: 6, empresa: 'Empresa F', logo: 'logo-f.png', curso: 'Curso 6', data: '01/06/2022' },
];




export default function FormacaoAcademica ()
{

    const [ formacoesAcademicas, setFormacoesAcademicas ] = useState(formacoes);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    return (
        <div className="container">
            <div className="controls-wrapper"></div>
            <hr className='separator' />
            <div className="carrousel-wrapper"></div>   
        </div>
    );
    
}

    




/* {formacoesAcademicas.map((formacao) => (
        <div key={formacao.id} className="formacao">
            <img src={formacao.logo} alt={formacao.empresa} />
            <div className="curso">
                <span className="empresa">{formacao.empresa}</span>
                <hr />
                <span className="nome-curso">{formacao.curso}</span>
                <span className="data">{formacao.data}</span>
            </div>
        </div>
    ))} 
    
    
    
    <div className="formacao-academica">
            <h2 className="formacao-academica__titulo">Formação Acadêmica</h2>
            <div className="formacao-academica__carrossel"></div>
        </div>*/