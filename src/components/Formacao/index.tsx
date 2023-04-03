import "./Formacao.scss";
import Carrousel from './Carrosel/Carrousel';

export default function FormacaoAcademica()
{
    return (
        <div className='formacao__academica'>
            <h2 className='formacao__academica-titulo' >Formação Acadêmica</h2>
            <div className='formacao__academica-carrossel' >
                <Carrousel/>
            </div>
        </div>
    );
}
