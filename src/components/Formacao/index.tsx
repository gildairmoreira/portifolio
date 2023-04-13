import "./Formacao.scss";
import Carrousel from './Carrosel/Carrousel';
import { useTranslation } from "react-i18next";

export default function FormacaoAcademica()
{
    const {t} = useTranslation()
    return (
        <section className='formacao__academica' id="formacao">
            <h2 className='formacao__academica-titulo' >{t('Formação')}</h2>
            <div className='formacao__academica-carrossel' >
                <Carrousel/>
            </div>
        </section>
    );
}
