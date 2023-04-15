import React, { useState } from 'react';
import LogoLetraG from 'assets/componentesImagens/LogoLetraG'
import styles from './cabecalho.module.scss'
import ItensNavegação from './itensNav/ItensNavegação'
import { Link } from 'react-scroll';
import { AiFillCaretDown } from 'react-icons/ai';
import SeletorLingua from './itensNav/seletor-linguagem/SeletorLingua';
import { useTranslation } from "react-i18next";
import { VscMenu } from 'react-icons/vsc'


export default function Cabecalho()
{
  const { t } = useTranslation();


  const [ isFixed, setIsFixed ] = useState(false);
  function handleScroll()
  {
    if (window.pageYOffset > 0 && !isFixed)
    {
      setIsFixed(true);
    } else if (window.pageYOffset === 0 && isFixed)
    {
      setIsFixed(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ MenuAberto, setMenuAberto ] = useState(false);

  function ClickMenuH()
  {
    setMenuAberto(!MenuAberto);
  }

  function handleClick()
  {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`${styles.cabecalho} ${isFixed ? styles.fixed : ''}`}>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <div className={styles.logo}>
          <LogoLetraG />
          <h3>{t('Portifolio')}</h3>
        </div>
      </Link>

      <div className={styles.container__right}>
        <div className={styles.menuHamburguer}>
          <VscMenu onClick={ClickMenuH} />
          <ul className={`${styles.menu} ${!MenuAberto ? styles.menu__aberto : ''}`}>
            <Link
              activeClass={styles.active}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.item__link}
            >
              <li>{t("Inicio")}</li>
            </Link>
            <Link
              activeClass={styles.active}
              to="sobre"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.item__link}
            >
              <li>{t("Sobre mim")}</li>
            </Link>
            <Link
              activeClass={styles.active}
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.item__link}
            >
              <li>{t("Skills")}</li>
            </Link>
            <Link
              activeClass={styles.active}
              to="formacao"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.item__link}
            >
              <li>{t("Formação")}</li>
            </Link>
            <Link
              activeClass={styles.active}
              to="projetos"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={styles.item__link}
            >
              <li>{t("Projetos")}</li>
            </Link>
          </ul>
        </div>
        <nav className={styles.cabecalho__navegação}>
          <ItensNavegação />
          <div className={styles.container__idioma} onClick={handleClick}>
            <SeletorLingua isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <AiFillCaretDown className={`${styles.setaDown} ${isMenuOpen ? styles.aberto : ''}`} />
          </div>
        </nav>
      </div>
    </header>
  )
}
