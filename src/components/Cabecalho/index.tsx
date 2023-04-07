import React, { useState } from 'react';
import LogoLetraG from 'assets/componentesImagens/LogoLetraG'
import styles from './cabecalho.module.scss'
import ItensNavegação from './itensNav/ItensNavegação'


export default function Cabecalho()
{
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

  return (
    <header className={`${styles.cabecalho} ${isFixed ? styles.fixed : ''}`}>
      <div>
        <LogoLetraG />
        <h3>Portifólio</h3>
      </div>
      
      <nav className={styles.cabecalho__navegação}>
          <ItensNavegação/>
      </nav>

    </header>
  )
}
