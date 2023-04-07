import LogoBrasil from 'assets/componentesImagens/LogoBrasil'
import styles from './itensNavegacao.module.scss'
import { AiFillCaretDown } from 'react-icons/ai'


export default function ItensNavegação()
{

    return (
        <ul>
            <li className={styles.hoverable}>Sobre mim</li>
            <li className={styles.hoverable}>Skills</li>
            <li className={styles.hoverable}>Formação</li>
            <li className={styles.hoverable}>Projetos</li>
            <li className={styles.hoverable}>Contato</li>

            <a href='/'>
                <LogoBrasil />
                <AiFillCaretDown className={styles.setaDown} />
            </a>

        </ul>
        
    )
}