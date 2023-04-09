import styles from './itensNavegacao.module.scss'
import { AiFillCaretDown } from 'react-icons/ai'
import { Link } from "react-scroll";


export default function ItensNavegação()
{

    return (
        <ul className={styles.lista__links}>
            <li className={styles.item__lista}>
                <Link
                    activeClass={styles.active}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p>Inicio</p>
                </Link>
            </li>
            <li className={styles.item__lista}>
                <Link
                    activeClass={styles.active}
                    to="sobre"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p>Sobre mim</p>
                </Link>
            </li>
            <li className={styles.item__lista}>
                <Link
                    activeClass={styles.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p>Skills</p>
                </Link>
            </li>
            <li className={styles.item__lista}>
                <Link
                    activeClass={styles.active}
                    to="formacao"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <p>Formação</p>
                </Link>
            </li>
            <li className={styles.item__lista}>
                <Link
                    activeClass={styles.active}
                    to="projetos"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >

                    <p>Projetos</p>
                </Link>
            </li>



           
        </ul>

    )
}