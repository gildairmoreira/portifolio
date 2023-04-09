import "./Formacao.scss";
import Carrousel from './Carrosel/Carrousel';

export default function FormacaoAcademica()
{
    return (
        <section className='formacao__academica' id="formacao">
            <h2 className='formacao__academica-titulo' >Formação Acadêmica</h2>
            <div className='formacao__academica-carrossel' >
                <Carrousel/>
            </div>
        </section>
    );
}
