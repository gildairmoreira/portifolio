import { useTranslation } from 'react-i18next';
import styles from './itensNavegacao.module.scss'
import { Link } from "react-scroll";


export default function ItensNavegação()
{
    const {t} = useTranslation()

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
                    className={styles.item__link}
                >
                    <p>{t("Inicio")}</p>
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
                    className={styles.item__link}
                >
                    <p>{t("Sobre mim")}</p>{/* {t("Sobre mim")} */}
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
                    className={styles.item__link}
                >
                    <p>{t("Skills")}</p>
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
                    className={styles.item__link}
                >
                    <p>{t("Formação")}</p>
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
                    className={styles.item__link}
                >

                   <p>{t("Projetos")}</p>
                </Link>
            </li>



           
        </ul>

    )
}