import styles from "./Formacao.module.scss";
import SetaBack from "assets/componentesImagens/SetaBack";
import SetaNext from "assets/componentesImagens/SetaNext";

interface Formacao 
{
    id: number;
    image: string;
    curso: string;
    data: string;
}


const Certificados: Formacao[] = [
    { id: 1, image: 'image-a.png', curso: 'Curso 1', data: '2022 - alura' },
    { id: 2, image: 'image-b.png', curso: 'Curso 2', data: '2022 - alura' },
    { id: 3, image: 'image-c.png', curso: 'Curso 3', data: '2022 - alura' },
];

const FormacaoAcademica: React.FC = () => {
    
    return (
        <div className={styles.formacao__academica}>
            <h2 className={styles[ 'formacao__academica-titulo' ]}>Formação Acadêmica</h2>
            <div className={styles[ 'formacao__academica-carrossel' ]}>
                
            </div>
        </div>
    );
}


export default FormacaoAcademica